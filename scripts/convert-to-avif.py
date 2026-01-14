#!/usr/bin/env python3
"""
Convert divyaupadesh PNG images to AVIF format
"""

import sys
import os
from pathlib import Path
from PIL import Image
import pillow_avif

PUBLIC_DIR = Path(__file__).parent.parent / "public"

def convert_to_avif():
    """Convert all divyaupadesh-*.png to .avif"""
    
    png_files = sorted(PUBLIC_DIR.glob("divyaupadesh-*.png"))
    
    if not png_files:
        print("No divyaupadesh-*.png files found")
        return False
    
    print(f"Found {len(png_files)} PNG files to convert\n")
    
    for png_file in png_files:
        avif_file = png_file.with_suffix('.avif')
        
        try:
            print(f"Converting {png_file.name}...")
            
            with Image.open(png_file) as img:
                # Convert to RGB if necessary
                if img.mode in ('RGBA', 'LA', 'P'):
                    rgb_img = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    rgb_img.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                    img = rgb_img
                
                img.save(avif_file, format='AVIF', quality=85, speed=4)
            
            png_size = os.path.getsize(png_file)
            avif_size = os.path.getsize(avif_file)
            reduction = (1 - avif_size / png_size) * 100
            
            print(f"  ✓ {avif_file.name} ({avif_size//1024}KB, {reduction:.1f}% smaller)\n")
            
        except Exception as e:
            print(f"  ✗ Error: {e}\n")
            return False
    
    print(f"✓ Converted {len(png_files)} files to AVIF")
    return True

if __name__ == "__main__":
    try:
        success = convert_to_avif()
        sys.exit(0 if success else 1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)
