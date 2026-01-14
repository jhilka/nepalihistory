"""
PDF Text Extraction Script for Nepali Scanned Documents

This script provides multiple methods to extract text from scanned PDFs:
1. Using OCR.space API (free, no installation needed)
2. Fallback to local extraction if available

Requirements:
- requests library: pip install requests
- PyMuPDF (fitz): pip install PyMuPDF (optional, for PDF to image conversion)

Usage:
    python extract-pdf-ocr.py
"""

import os
import sys
import json
import base64
import time
from pathlib import Path

try:
    import requests
    HAS_REQUESTS = True
except ImportError:
    print("Error: 'requests' library not found. Install with: pip install requests")
    HAS_REQUESTS = False
    sys.exit(1)

# Configuration
PDF_PATH = Path(__file__).parent.parent / "dibya_upadesh.pdf"
OUTPUT_MD_PATH = Path(__file__).parent / "dibya_upadesh_extracted.md"
OCR_API_KEY = "K88827188388957"  # Free tier API key for OCR.space
OCR_API_URL = "https://api.ocr.space/parse/image"


def extract_with_ocr_space(pdf_path, output_path, language="hin"):
    """
    Extract text from PDF using OCR.space API (supports Nepali/Devanagari)
    Processes page by page to avoid file size limits
    
    Free tier allows 500 requests/day
    """
    if not HAS_REQUESTS:
        print("Error: requests library is required")
        return False
    
    if not pdf_path.exists():
        print(f"Error: PDF file not found at {pdf_path}")
        return False
    
    try:
        import fitz  # PyMuPDF
    except ImportError:
        print("Error: PyMuPDF is required for page-by-page processing")
        print("Install with: pip install PyMuPDF")
        return False
    
    print(f"Extracting text from: {pdf_path}")
    print(f"Using OCR.space API (language: {language})...")
    print("Processing page by page...")
    
    try:
        # Open PDF
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        print(f"Total pages: {total_pages}")
        
        full_text = []
        
        # Process each page
        for page_num in range(total_pages):
            print(f"Processing page {page_num + 1}/{total_pages}...", end=" ")
            
            page = doc[page_num]
            
            # Convert page to image (PNG)
            pix = page.get_pixmap(dpi=300)  # Higher DPI for better OCR
            img_data = pix.tobytes("png")
            
            # Prepare the request
            payload = {
                'apikey': OCR_API_KEY,
                'language': language,  # 'nep' for Nepali
                'isOverlayRequired': False,
                'detectOrientation': True,
                'scale': True,
                'OCREngine': 2,  # Engine 2 supports more languages including Nepali
            }
            
            files = {
                'file': (f'page_{page_num + 1}.png', img_data, 'image/png')
            }
            
            # Make API request
            response = requests.post(OCR_API_URL, data=payload, files=files)
            response.raise_for_status()
            
            result = response.json()
            
            if result.get('IsErroredOnProcessing'):
                error_msg = result.get('ErrorMessage', ['Unknown error'])
                print(f"Error: {error_msg}")
                full_text.append(f"## Page {page_num + 1}\n\n*[OCR Error: {error_msg}]*\n")
            else:
                parsed_results = result.get('ParsedResults', [])
                if parsed_results:
                    page_text = parsed_results[0].get('ParsedText', '').strip()
                    if page_text:
                        full_text.append(f"## Page {page_num + 1}\n\n{page_text}\n")
                        print("✓")
                    else:
                        print("(empty)")
                        full_text.append(f"## Page {page_num + 1}\n\n*[No text detected]*\n")
                else:
                    print("(no results)")
            
            # Rate limiting - be nice to the free API
            if page_num < total_pages - 1:
                time.sleep(1)  # Wait 1 second between requests
        
        doc.close()
        
        # Write to markdown file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"# Dibya Upadesh - Extracted Text\n\n")
            f.write(f"*Extracted using OCR.space API*\n\n")
            f.write(f"*Source: {pdf_path.name}*\n\n")
            f.write(f"*Total Pages: {total_pages}*\n\n")
            f.write("---\n\n")
            f.write('\n\n'.join(full_text))
        
        print(f"\n✓ Successfully extracted text to: {output_path}")
        print(f"  Total pages processed: {total_pages}")
        
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"\nAPI Request Error: {e}")
        return False
    except Exception as e:
        print(f"\nError during extraction: {e}")
        import traceback
        traceback.print_exc()
        return False


def extract_with_pymupdf(pdf_path, output_path):
    """
    Fallback: Extract text using PyMuPDF (if PDF has embedded text)
    This won't work for scanned PDFs without OCR
    """
    try:
        import fitz  # PyMuPDF
    except ImportError:
        print("PyMuPDF not installed. Skipping fallback method.")
        return False
    
    print("Trying direct text extraction with PyMuPDF...")
    
    try:
        doc = fitz.open(pdf_path)
        full_text = []
        
        for page_num, page in enumerate(doc, 1):
            text = page.get_text()
            if text.strip():
                full_text.append(f"## Page {page_num}\n\n{text}\n")
        
        doc.close()
        
        if not full_text:
            print("No embedded text found in PDF (likely a scanned document)")
            return False
        
        # Write to markdown file
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"# Dibya Upadesh - Extracted Text\n\n")
            f.write(f"*Extracted using PyMuPDF*\n\n")
            f.write(f"*Source: {pdf_path.name}*\n\n")
            f.write("---\n\n")
            f.write('\n\n'.join(full_text))
        
        print(f"\n✓ Successfully extracted text to: {output_path}")
        return True
        
    except Exception as e:
        print(f"PyMuPDF extraction error: {e}")
        return False


def main():
    """Main extraction workflow"""
    print("="*60)
    print(" PDF to Markdown - Nepali Text Extraction")
    print("="*60)
    print()
    
    # Try PyMuPDF first (fast, but only works if text is embedded)
    print("Step 1: Checking for embedded text...")
    if extract_with_pymupdf(PDF_PATH, OUTPUT_MD_PATH):
        return
    
    # If that fails, use OCR
    print("\nStep 2: Using OCR for scanned document...")
    if extract_with_ocr_space(PDF_PATH, OUTPUT_MD_PATH):
        return
    
    # If all methods fail
    print("\n" + "="*60)
    print("ALTERNATIVE SOLUTIONS:")
    print("="*60)
    print()
    print("If the above methods don't work, try these alternatives:")
    print()
    print("1. Use Marker with Python 3.10-3.13:")
    print("   - Install Python 3.11 from python.org")
    print("   - Run: pip install marker-pdf")
    print("   - Run: marker_single dibya_upadesh.pdf output --force_ocr --langs nep")
    print()
    print("2. Use Docker:")
    print("   - Install Docker Desktop")
    print("   - Run: docker pull ghcr.io/vikparuchuri/marker:latest")
    print("   - See extract-with-marker.ps1 for full command")
    print()
    print("3. Use Google Document AI (Cloud-based, very accurate):")
    print("   - Visit: https://cloud.google.com/document-ai")
    print()
    print("4. Use Mathpix (Commercial, excellent for academic texts):")
    print("   - Visit: https://mathpix.com/")
    print()


if __name__ == "__main__":
    main()
