"""
Extract PDF pages as images for manual OCR processing

This script converts each page of the PDF to a high-quality PNG image.
You can then use any OCR tool (online or offline) to process these images.

Usage:
    python extract-pdf-to-images.py
"""

import sys
from pathlib import Path

try:
    import fitz  # PyMuPDF
except ImportError:
    print("Error: PyMuPDF is required")
    print("Install with: pip install PyMuPDF")
    sys.exit(1)

# Configuration
PDF_PATH = Path(__file__).parent.parent / "dibya_upadesh.pdf"
OUTPUT_DIR = Path(__file__).parent / "dibya_upadesh_pages"


def extract_pages_to_images(pdf_path, output_dir, dpi=300):
    """
    Extract each page of PDF as a high-resolution PNG image
    
    Args:
        pdf_path: Path to input PDF
        output_dir: Directory to save page images
        dpi: Resolution for output images (default 300 for good OCR)
    """
    
    if not pdf_path.exists():
        print(f"Error: PDF file not found at {pdf_path}")
        return False
    
    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)
    
    print(f"Extracting pages from: {pdf_path}")
    print(f"Output directory: {output_dir}")
    print(f"Resolution: {dpi} DPI\n")
    
    try:
        # Open PDF
        doc = fitz.open(pdf_path)
        total_pages = len(doc)
        print(f"Total pages: {total_pages}\n")
        
        # Calculate zoom factor for desired DPI
        # Default is 72 DPI, so for 300 DPI: 300/72 = 4.17
        zoom = dpi / 72
        mat = fitz.Matrix(zoom, zoom)
        
        # Extract each page
        for page_num in range(total_pages):
            print(f"Extracting page {page_num + 1}/{total_pages}...", end=" ")
            
            page = doc[page_num]
            pix = page.get_pixmap(matrix=mat)
            
            # Save as PNG
            output_file = output_dir / f"page_{page_num + 1:03d}.png"
            pix.save(str(output_file))
            
            print(f"✓ Saved: {output_file.name}")
        
        doc.close()
        
        print(f"\n✓ Successfully extracted {total_pages} pages!")
        print(f"\nNext steps:")
        print(f"1. Open images in: {output_dir}")
        print(f"2. Use any of these OCR methods:")
        print(f"   - Google Cloud Vision API (excellent for Nepali)")
        print(f"   - Microsoft Azure Computer Vision")
        print(f"   - Online OCR: https://www.onlineocr.net/ (supports Nepali)")
        print(f"   - Install Tesseract and run: tesseract page_001.png page_001 -l nep")
        
        return True
        
    except Exception as e:
        print(f"\nError during extraction: {e}")
        import traceback
        traceback.print_exc()
        return False


def create_batch_ocr_script(output_dir):
    """Create a batch script to OCR all images using Tesseract"""
    
    batch_script = output_dir / "ocr_all_pages.bat"
    
    with open(batch_script, 'w', encoding='utf-8') as f:
        f.write("@echo off\n")
        f.write("REM Batch OCR script for all pages\n")
        f.write("REM Requires Tesseract OCR with Nepali language installed\n\n")
        f.write('echo Starting OCR processing...\n')
        f.write('echo.\n\n')
        f.write('for %%f in (page_*.png) do (\n')
        f.write('    echo Processing %%f...\n')
        f.write('    tesseract "%%f" "%%~nf" -l nep+eng\n')
        f.write(')\n\n')
        f.write('echo.\n')
        f.write('echo Done! Check the .txt files for results.\n')
        f.write('pause\n')
    
    print(f"\n✓ Created batch OCR script: {batch_script}")
    print(f"  Run this script if you have Tesseract installed with Nepali language data")


def main():
    """Main execution"""
    print("="*70)
    print(" PDF to Images Extractor")
    print("="*70)
    print()
    
    success = extract_pages_to_images(PDF_PATH, OUTPUT_DIR)
    
    if success:
        create_batch_ocr_script(OUTPUT_DIR)
        
        print("\n" + "="*70)
        print("Image extraction complete!")
        print("="*70)


if __name__ == "__main__":
    main()
