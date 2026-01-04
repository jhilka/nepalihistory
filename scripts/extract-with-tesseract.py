"""
Extract Nepali text from PDF using Tesseract OCR (Local, Free, Accurate)

This script uses Tesseract OCR which is completely free and supports Nepali/Devanagari.

Installation Steps:
1. Install Tesseract OCR:
   - Download from: https://github.com/UB-Mannheim/tesseract/wiki
   - Use installer: tesseract-ocr-w64-setup-5.3.3.20231005.exe
   - During installation, make sure to select "Additional language data" and check "Nepali"
   
2. Install Python packages:
   pip install pytesseract Pillow PyMuPDF

3. Run this script:
   python extract-with-tesseract.py

Note: If you already have Tesseract installed, make sure Nepali language data is installed.
"""

import os
import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
    from PIL import Image
    import pytesseract
    import io
except ImportError as e:
    print(f"Error: Missing required library: {e}")
    print("\nInstall with:")
    print("  pip install pytesseract Pillow PyMuPDF")
    sys.exit(1)

# Configuration
PDF_PATH = Path(__file__).parent.parent / "dibya_upadesh.pdf"
OUTPUT_MD_PATH = Path(__file__).parent / "dibya_upadesh_extracted.md"

# Tesseract executable path (update if needed)
# Common paths:
TESSERACT_PATHS = [
    r"C:\Program Files\Tesseract-OCR\tesseract.exe",
    r"C:\Program Files (x86)\Tesseract-OCR\tesseract.exe",
    r"C:\Users\{}\AppData\Local\Programs\Tesseract-OCR\tesseract.exe".format(os.environ.get('USERNAME', '')),
]


def find_tesseract():
    """Find Tesseract installation"""
    for path in TESSERACT_PATHS:
        if os.path.exists(path):
            return path
    return None


def extract_text_from_pdf(pdf_path, output_path, language='nep+eng'):
    """
    Extract text from PDF using Tesseract OCR
    
    Args:
        pdf_path: Path to input PDF
        output_path: Path to output markdown file
        language: Tesseract language code (nep=Nepali, eng=English)
    """
    
    # Find Tesseract
    tesseract_path = find_tesseract()
    if tesseract_path:
        pytesseract.pytesseract.tesseract_cmd = tesseract_path
        print(f"Found Tesseract at: {tesseract_path}")
    else:
        print("Error: Tesseract OCR not found!")
        print("\nPlease install Tesseract OCR:")
        print("1. Download from: https://github.com/UB-Mannheim/tesseract/wiki")
        print("2. Install tesseract-ocr-w64-setup-5.3.3.20231005.exe")
        print("3. During installation, select 'Additional language data' and check 'Nepali'")
        return False
    
    # Check if PDF exists
    if not pdf_path.exists():
        print(f"Error: PDF file not found at {pdf_path}")
        return False
    
    print(f"\nExtracting text from: {pdf_path}")
    print(f"Language: {language}")
    print("This may take several minutes...\n")
    
    try:
        # Open PDF
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        print(f"Total pages: {total_pages}\n")
        
        full_text = []
        
        # Process each page
        for page_num in range(total_pages):
            print(f"Processing page {page_num + 1}/{total_pages}...", end=" ")
            
            page = doc[page_num]
            
            # Convert page to image with high DPI for better OCR
            mat = fitz.Matrix(2.0, 2.0)  # 2x zoom = 144 DPI
            pix = page.get_pixmap(matrix=mat)
            
            # Convert to PIL Image
            img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
            
            # Perform OCR
            try:
                text = pytesseract.image_to_string(img, lang=language)
                
                if text.strip():
                    full_text.append(f"## Page {page_num + 1}\n\n{text.strip()}\n")
                    print("✓")
                else:
                    full_text.append(f"## Page {page_num + 1}\n\n*[No text detected]*\n")
                    print("(empty)")
                    
            except Exception as e:
                print(f"Error: {e}")
                full_text.append(f"## Page {page_num + 1}\n\n*[OCR Error: {e}]*\n")
        
        doc.close()
        
        # Write to markdown file
        print(f"\nWriting output to: {output_path}")
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(f"# Dibya Upadesh - Extracted Text\n\n")
            f.write(f"*Extracted using Tesseract OCR*\n\n")
            f.write(f"*Source: {pdf_path.name}*\n\n")
            f.write(f"*Total Pages: {total_pages}*\n\n")
            f.write(f"*Language: {language}*\n\n")
            f.write("---\n\n")
            f.write('\n\n'.join(full_text))
        
        print(f"\n✓ Successfully extracted text!")
        print(f"  Output file: {output_path}")
        print(f"  Total pages: {total_pages}")
        
        return True
        
    except Exception as e:
        print(f"\nError during extraction: {e}")
        import traceback
        traceback.print_exc()
        return False


def main():
    """Main execution"""
    print("="*70)
    print(" PDF to Markdown - Nepali Text Extraction with Tesseract OCR")
    print("="*70)
    print()
    
    # Check if Tesseract is installed
    tesseract_path = find_tesseract()
    if not tesseract_path:
        print("Tesseract OCR not found. Please install it first.")
        print("\nInstallation Guide:")
        print("="*70)
        print("1. Download Tesseract installer for Windows:")
        print("   https://github.com/UB-Mannheim/tesseract/wiki")
        print()
        print("2. Download this file:")
        print("   tesseract-ocr-w64-setup-5.3.3.20231005.exe")
        print()
        print("3. Run the installer and during installation:")
        print("   - Select 'Additional language data'")
        print("   - Check the box for 'Nepali' language")
        print("   - Complete the installation")
        print()
        print("4. After installation, run this script again")
        print("="*70)
        return
    
    # Extract text
    success = extract_text_from_pdf(PDF_PATH, OUTPUT_MD_PATH)
    
    if success:
        print("\n" + "="*70)
        print("Extraction complete! Check the output file for results.")
        print("="*70)
    else:
        print("\nExtraction failed. See error messages above.")


if __name__ == "__main__":
    main()
