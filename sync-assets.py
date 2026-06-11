#!/usr/bin/env python3
"""
Sync web build assets from the design-system master.

  DS (source of truth)            ->   web build (deployed)
  Onebear Design System/fonts/*.ttf  ->  fonts/*.woff2   (compressed)
  Onebear Design System/assets/*     ->  assets/*        (only files used by index.html)

Run after editing logos/fonts in the design system:
    python3 sync-assets.py

Idempotent: rebuilds fonts/ and the listed images every run.
Requires: fonttools + brotli  (pip install fonttools brotli)
"""
import os, shutil, sys
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.abspath(__file__))
DS   = os.path.join(ROOT, "Onebear Design System")

# Fonts: TTF master -> woff2 web build (all four weights)
FONTS = ["Gofive-Text", "Gofive-Medium", "Gofive-Semi_Bold", "Gofive-Bold"]

# Images actually referenced by index.html. Add a filename here when the page
# starts using a new asset from the design system.
USED_IMAGES = [
    "horizontal-white-logo.svg",
    "horizontal-green-logo.svg",
    "shop-illustration.png",
    "cta-bear.png",
]

def main():
    os.makedirs(os.path.join(ROOT, "fonts"), exist_ok=True)
    os.makedirs(os.path.join(ROOT, "assets"), exist_ok=True)

    print("fonts  (ttf -> woff2):")
    for name in FONTS:
        src = os.path.join(DS, "fonts", name + ".ttf")
        out = os.path.join(ROOT, "fonts", name + ".woff2")
        if not os.path.exists(src):
            sys.exit(f"  ! missing master: {src}")
        f = TTFont(src); f.flavor = "woff2"; f.save(out)
        print(f"  {name}.woff2  {os.path.getsize(out):,} B")

    print("assets (copy):")
    for n in USED_IMAGES:
        src = os.path.join(DS, "assets", n)
        if not os.path.exists(src):
            sys.exit(f"  ! missing master: {src}")
        shutil.copy2(src, os.path.join(ROOT, "assets", n))
        print(f"  {n}  {os.path.getsize(src):,} B")

    print("done.")

if __name__ == "__main__":
    main()
