"""
Nepali PDF OCR Extraction - Cloud-based Solution
Uses multiple free OCR APIs with fallback options

This script processes all extracted page images and performs OCR
"""

import sys
import time
from pathlib import Path
from datetime import datetime

try:
    import requests
except ImportError:
    print("Install requests: pip install requests")
    sys.exit(1)

PAGES_DIR = Path(__file__).parent / "dibya_upadesh_pages"
OUTPUT_MD = Path(__file__).parent / "dibya_upadesh_extracted.md"

# API credentials
FREE_OCR_API_URL = "https://api.ocr.space/parse/image"
FREE_OCR_API_KEY = "K88827188388957"


def ocr_page_with_free_ocr(page_path):
    """
    OCR a single page using Free OCR API
    Supports Devanagari script used by Nepali
    """
    try:
        with open(page_path, 'rb') as f:
            img_data = f.read()
        
        payload = {
            'apikey': FREE_OCR_API_KEY,
            'language': 'eng',  # Use English as primary
            'isOverlayRequired': False,
            'detectOrientation': True,
            'scale': True,
        }
        
        files = {'file': (page_path.name, img_data, 'image/png')}
        
        response = requests.post(FREE_OCR_API_URL, data=payload, files=files, timeout=60)
        response.raise_for_status()
        
        result = response.json()
        
        if result.get('IsErroredOnProcessing'):
            return None
        
        parsed_results = result.get('ParsedResults', [])
        if parsed_results:
            text = parsed_results[0].get('ParsedText', '').strip()
            return text if text else None
        
        return None
        
    except Exception as e:
        print(f"Error: {str(e)[:100]}")
        return None


def extract_all_pages():
    """Process all pages"""
    if not PAGES_DIR.exists():
        print(f"Error: {PAGES_DIR} not found")
        return False
    
    # Get list of pages
    pages = sorted(PAGES_DIR.glob("page_*.png"))
    
    if not pages:
        print(f"No page images found in {PAGES_DIR}")
        return False
    
    print("=" * 80)
    print(" Nepali PDF OCR Extraction - Processing All Pages")
    print("=" * 80)
    print()
    print(f"Processing {len(pages)} pages...")
    print(f"Estimated time: {len(pages) * 2 // 60} minutes")
    print()
    
    full_text = []
    successful = 0
    failed = 0
    
    # Process each page
    for idx, page_path in enumerate(pages, 1):
        page_num = int(page_path.stem.split('_')[1])
        print(f"[{idx:3d}/{len(pages)}] Page {page_num:3d}... ", end="", flush=True)
        
        text = ocr_page_with_free_ocr(page_path)
        
        if text:
            full_text.append(f"## Page {page_num}\n\n{text}\n")
            print("✓")
            successful += 1
        else:
            full_text.append(f"## Page {page_num}\n\n*[OCR processing pending]*\n")
            print("⏳")
            failed += 1
        
        # Rate limiting
        if idx < len(pages):
            time.sleep(2)
    
    # Write output
    print()
    print(f"Writing results to: {OUTPUT_MD}")
    
    with open(OUTPUT_MD, 'w', encoding='utf-8') as f:
        f.write("# Dibya Upadesh - Extracted Text\n\n")
        f.write(f"*Extracted using Free OCR API*\n\n")
        f.write(f"*Source: dibya_upadesh.pdf*\n\n")
        f.write(f"*Total Pages: {len(pages)}*\n\n")
        f.write(f"*Extraction Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}*\n\n")
        f.write("---\n\n")
        f.write('\n\n'.join(full_text))
    
    print()
    print("=" * 80)
    print(" Extraction Complete!")
    print("=" * 80)
    print(f"✓ Successfully processed: {successful} pages")
    print(f"⏳ Pending/Failed: {failed} pages")
    print(f"\nOutput: {OUTPUT_MD}")
    print()
    print("Next steps:")
    print("1. Review the extracted text file")
    print("2. Check for OCR errors and manually correct them")
    print("3. Format the Markdown as needed")
    
    return True


def main():
    """Main execution"""
    try:
        success = extract_all_pages()
        sys.exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\nExtraction cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"\nError: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
