#!/usr/bin/env python3
"""
Sync web build assets from the design-system master.

  DS (source of truth)               ->  web build (deployed)
  design-system/fonts/*.ttf          ->  fonts/*.woff2          (compressed)
  design-system/assets/<file>        ->  assets/<category>/<file>

Run after editing logos/fonts in the design system:
    python3 sync-assets.py

Idempotent: rebuilds fonts/ and the listed images every run.
Requires: fonttools + brotli  (pip install fonttools brotli)
"""
import os, shutil, sys
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.abspath(__file__))
DS   = os.path.join(ROOT, "..", "design-system")

# Fonts: TTF master -> woff2 web build (all four weights)
FONTS = ["Gofive-Text", "Gofive-Medium", "Gofive-Semi_Bold", "Gofive-Bold"]

# Images used by the web pages: (source_filename, dest_subdir)
# dest_subdir is relative to assets/
# Add entries here when the page starts using a new asset.
USED_IMAGES = [
    ("horizontal-white-logo.svg", "logos"),
    ("horizontal-green-logo.svg", "logos"),
    ("shop-illustration.png",     "illustrations"),
    ("cta-bear.png",              "illustrations"),
]

def main():
    os.makedirs(os.path.join(ROOT, "fonts"), exist_ok=True)

    print("fonts  (ttf -> woff2):")
    for name in FONTS:
        src = os.path.join(DS, "fonts", name + ".ttf")
        out = os.path.join(ROOT, "fonts", name + ".woff2")
        if not os.path.exists(src):
            sys.exit(f"  ! missing master: {src}")
        f = TTFont(src); f.flavor = "woff2"; f.save(out)
        print(f"  {name}.woff2  {os.path.getsize(out):,} B")

    print("assets (copy):")
    for filename, subdir in USED_IMAGES:
        src = os.path.join(DS, "assets", filename)
        dest_dir = os.path.join(ROOT, "assets", subdir)
        os.makedirs(dest_dir, exist_ok=True)
        if not os.path.exists(src):
            sys.exit(f"  ! missing master: {src}")
        shutil.copy2(src, os.path.join(dest_dir, filename))
        print(f"  {subdir}/{filename}  {os.path.getsize(src):,} B")

    print("done.")

if __name__ == "__main__":
    main()
