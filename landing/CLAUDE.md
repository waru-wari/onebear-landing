# Onebear Landing

Static single-page site. Entry point: `index.html` (v3.1). Legacy files → `legacy/` (อย่าแตะ).

## Commands

```bash
node server.js          # local preview → http://localhost:4599
python3 sync-assets.py  # sync assets from design-system/ → assets/ + fonts/
```

## Project layout

```
index.html          ← single source of truth for the page
design-system/      ← design spec (colors, typography, buttons, patterns)
assets/             ← web-optimized images (generated — ห้ามแก้มือ)
fonts/              ← woff2 fonts (generated — ห้ามแก้มือ)
legacy/             ← เก่า ห้ามแก้
sync-assets.py      ← เพิ่มรูปใหม่ → เพิ่มชื่อใน USED_IMAGES แล้วรันสคริปต์นี้
```

## Design system — อ่านก่อนแก้ UI

`design-system/` คือแหล่งข้อมูลดีไซน์ทั้งหมด

| ไฟล์ | เนื้อหา |
|---|---|
| `01_Colors.md` | สี token ทั้งหมด |
| `02_Typography.md` | ฟอนต์ + ขนาด |
| `04_Buttons.md` | ปุ่มทุก variant + กฎ sizing |
| `07_Web-Patterns.md` | section pattern + Layout Rules (R1–R4) |

**กฎ: ก่อนแก้ UI ทุกครั้ง เปิดไฟล์ที่เกี่ยวข้องก่อนเสมอ**

## Canonical glow-button (Primary Dark CTA)

ปุ่ม CTA หลักทุกจุดในหน้า ต้องเป็น pattern นี้ทุก attribute ห้ามเบี่ยง:

```html
<a href="https://app.onebear.ai/register"
   class="glow-button inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2">
  เริ่มใช้งานฟรี
  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" style="font-size:18px">arrow_forward</span>
</a>
```

**ข้อห้าม:** `text-base`, `py-3`, `py-5`, `font-bold`, `w-[260px]` — ถ้าเจอใน glow-button → แก้ทันที

ข้อยกเว้น (ไม่ใช่ glow-button):
- Pricing tier buttons (Free/Starter = teal outline, Growth = gradient) → ดู `04_Buttons.md`

## Layout Rules (สรุปย่อ — กฎเต็มอยู่ใน `07_Web-Patterns.md`)

**R1** — screen/mockup ที่ถูก crop ล่าง ต้องให้ก้นชิดขอบล่าง section เสมอ (ห้ามลอย/fade)  
**R1b** — ถ้า design แสดง visual ชิดมุมใด ต้องชิดมุมนั้น ไม่ center  
**R2** — `overflow-x:auto` ตัด shadow → แก้ด้วย `py-4` บน track + `overflow-visible` บน card  
**R3** — ให้ visual กำหนดความสูง container ห้ามใส่ `min-height` สูงกว่า visual จริง  
**R4** — Thai h3 ใน 2-column grid: `text-[22px] lg:text-[28px] xl:text-[34px]` (ห้าม `text-[40px]` ใน 2-col)

## Section summary

| Section | Background | CTA |
|---|---|---|
| Hero | white + aurora teal | glow-button `#1C1C22` |
| Features | white | — (tab/carousel) |
| HIW (How it works) | dark | glow-button |
| Pricing | white | outline (Free/Starter) / gradient (Growth) |
| Add-ons | white | — |
| CTA Banner | gradient teal→cyan→purple | glow-button dark |
| FAQ | `#F1F5F9` | — |
| Footer | `#1C1C22` | — |

## Git workflow

Working branch: `feat/next` → PR → `main`  
ห้าม commit ตรงไปที่ `main`
