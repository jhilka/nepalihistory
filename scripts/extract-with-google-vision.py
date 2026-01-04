"""
Extract text using Google Cloud Vision API

Google Cloud Vision has excellent Nepali/Devanagari support
Free tier: 1,000 pages/month FREE (perfect for 128 pages!)

Setup:
1. Go to https://console.cloud.google.com/
2. Create a project
3. Search for "Cloud Vision API" and enable it
4. Create API key credentials
5. Set your API key below

Then run: python extract-with-google-vision.py
"""

import sys
import os
from pathlib import Path
import base64
import time

try:
    import requests
except ImportError:
    print("Install requests: pip install requests")
    sys.exit(1)

# ⭐ CONFIGURATION - Replace with your API key from Google Cloud
# Get it here: https://console.cloud.google.com/
GOOGLE_VISION_API_KEY = "AIzaSyCz88jOC6EsUNo1_vxZiabDwijPmgO3qbo"

PAGES_DIR = Path(__file__).parent / "dibya_upadesh_pages"
OUTPUT_DIR = Path(__file__).parent / "dibya_upadesh_extracted"
OUTPUT_COMBINED = Path(__file__).parent / "dibya_upadesh_combined.md"
PROGRESS_FILE = Path(__file__).parent / "extraction_progress.txt"


def ocr_with_google_vision(image_path):
    """OCR single image with Google Cloud Vision"""
    if GOOGLE_VISION_API_KEY == "YOUR_API_KEY_HERE":
        print("\n⚠️  API Key not set!")
        print("Please add your API key from Google Cloud Console")
        return None
    
    url = f"https://vision.googleapis.com/v1/images:annotate?key={GOOGLE_VISION_API_KEY}"
    
    try:
        with open(image_path, 'rb') as f:
            image_data = base64.b64encode(f.read()).decode('utf-8')
    except Exception as e:
        print(f"Error reading image: {e}")
        return None
    
    payload = {
        "requests": [{
            "image": {"content": image_data},
            "features": [{"type": "TEXT_DETECTION"}],
            "imageContext": {
                "languageHints": ["ne", "en"]  # Nepali and English
            }
        }]
    }
    
    try:
        response = requests.post(url, json=payload, timeout=60)
        
        # Handle HTTP errors
        if response.status_code == 403:
            print(f"\n❌ 403 Forbidden - Check your API key and permissions")
            print(f"Make sure 'Cloud Vision API' is enabled in Google Cloud Console")
            return None
        
        response.raise_for_status()
        result = response.json()
        
        # Check for errors in response
        if 'error' in result:
            error_msg = result['error'].get('message', 'Unknown error')
            print(f"API Error: {error_msg}")
            return None
        
        if 'responses' in result and result['responses']:
            text_annotations = result['responses'][0].get('textAnnotations', [])
            if text_annotations:
                # First annotation contains full text
                return text_annotations[0].get('description', '')
        
        return ""
    except requests.exceptions.RequestException as e:
        print(f"Request error: {e}")
        return None
    except Exception as e:
        print(f"Error: {e}")
        return None


def main():
    """Process all pages with Google Vision API"""
    if not PAGES_DIR.exists():
        print(f"Error: {PAGES_DIR} not found")
        return
    
    if GOOGLE_VISION_API_KEY == "YOUR_API_KEY_HERE":
        print("=" * 70)
        print(" Google Cloud Vision API Key Required")
        print("=" * 70)
        print()
        print("Get your FREE API key:")
        print("1. Go to https://console.cloud.google.com/")
        print("2. Search for 'Cloud Vision API' and enable it")
        print("3. Create API Key in Credentials")
        print("4. Add your key to this script")
        print()
        print("=" * 70)
        return
    
    print("=" * 70)
    print(" OCR Extraction - Google Cloud Vision")
    print("=" * 70)
    print()
    
    # Create output directory for individual page files
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Get all page images and store length in variable
    page_files = sorted(PAGES_DIR.glob("page_*.png"))
    total_pages = len(page_files)
    
    if not page_files:
        print(f"Error: No page images found in {PAGES_DIR}")
        return
    
    print(f"Total pages available: {total_pages}")
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"Progress file: {PROGRESS_FILE}")
    print()
    
    # Process ALL remaining pages - progress tracking will skip already processed pages
    print(f"Processing ALL {total_pages} pages (will resume from last saved progress)")
    print()
    
    # Load progress if resuming
    processed_pages = {}
    if PROGRESS_FILE.exists():
        with open(PROGRESS_FILE, 'r') as f:
            for line in f:
                if line.strip():
                    page_num = int(line.strip())
                    processed_pages[page_num] = True
    
    print(f"Already processed: {len(processed_pages)} pages")
    print()
    
    all_text = []
    successful = 0
    failed = 0
    
    # Process pages
    for idx, page_file in enumerate(page_files, 1):
        page_num = int(page_file.stem.split('_')[1])
        
        # Skip if already processed
        if page_num in processed_pages:
            print(f"[{idx:3d}/{total_pages}] Page {page_num:3d}... (already processed)", end=" ")
            # Load existing file
            page_output = OUTPUT_DIR / f"page_{page_num:03d}.md"
            if page_output.exists():
                with open(page_output, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Extract text between the --- markers
                    parts = content.split('---\n')
                    if len(parts) > 1:
                        text = parts[1].strip()
                        all_text.append((page_num, text))
                        successful += 1
                        print("✓")
                        continue
        
        print(f"[{idx:3d}/{total_pages}] Page {page_num:3d}...", end=" ", flush=True)
        
        text = ocr_with_google_vision(page_file)
        
        if text is None:
            print("❌ Error")
            failed += 1
        elif text:
            text_length = len(text)
            print(f"✓ ({text_length} chars)")
            all_text.append((page_num, text))
            successful += 1
            
            # Create individual markdown file for this page
            page_output = OUTPUT_DIR / f"page_{page_num:03d}.md"
            with open(page_output, 'w', encoding='utf-8') as f:
                f.write(f"# Page {page_num}\n\n")
                f.write(f"*Extracted from: dibya_upadesh.pdf*\n\n")
                f.write("---\n\n")
                f.write(text.strip())
                f.write("\n\n")
                f.write("---\n\n")
                f.write(f"*Extracted using Google Cloud Vision API*\n")
            
            # Update progress file
            with open(PROGRESS_FILE, 'a') as f:
                f.write(f"{page_num}\n")
        else:
            print("⚠ (empty)")
            successful += 1
            
            # Create empty page file
            page_output = OUTPUT_DIR / f"page_{page_num:03d}.md"
            with open(page_output, 'w', encoding='utf-8') as f:
                f.write(f"# Page {page_num}\n\n")
                f.write(f"*Extracted from: dibya_upadesh.pdf*\n\n")
                f.write("---\n\n")
                f.write("*[No text detected on this page]*\n\n")
                f.write("---\n\n")
                f.write(f"*Extracted using Google Cloud Vision API*\n")
            
            # Update progress file
            with open(PROGRESS_FILE, 'a') as f:
                f.write(f"{page_num}\n")
        
        # Rate limiting - be respectful of API
        if idx < total_pages:
            time.sleep(0.5)
    
    print()
    print("=" * 70)
    
    if successful == 0:
        print("❌ No pages were processed successfully")
        return
    
    # Write combined markdown file
    print(f"Creating combined markdown file: {OUTPUT_COMBINED}")
    
    with open(OUTPUT_COMBINED, 'w', encoding='utf-8') as f:
        f.write(f"# Dibya Upadesh - Extracted Text\n\n")
        f.write(f"*Extracted using Google Cloud Vision API*\n\n")
        f.write(f"*Source: dibya_upadesh.pdf*\n\n")
        f.write(f"*Total Pages Processed: {successful}/{total_pages}*\n\n")
        f.write("*Individual page files are in `dibya_upadesh_extracted/` folder*\n\n")
        f.write("---\n\n")
        f.write("**Table of Contents:**\n\n")
        
        for page_num, _ in all_text:
            f.write(f"- [Page {page_num}](#{page_num})\n")
        
        f.write("\n---\n\n")
        
        for page_num, text in all_text:
            f.write(f"## Page {page_num}\n\n")
            if text.strip():
                f.write(text.strip())
            else:
                f.write("*[No text detected]*")
            f.write("\n\n")
    
    print()
    print("✅ Extraction Complete!")
    print()
    print(f"📁 Output Files:")
    print(f"   Individual pages: {OUTPUT_DIR}")
    print(f"   Combined file: {OUTPUT_COMBINED}")
    print(f"   Progress file: {PROGRESS_FILE}")
    print()
    print(f"📊 Statistics:")
    print(f"   Pages processed: {successful}/{total_pages}")
    print(f"   Pages failed: {failed}")


if __name__ == "__main__":
    main()

