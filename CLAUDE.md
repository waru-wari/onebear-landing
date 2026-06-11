# Onebear Landing

Static landing page (self-contained HTML). Current page = `index.html` (เดิมคือ v3).
ไฟล์เก่าอยู่ใน `legacy/` (ติดป้าย LEGACY — อย่าใช้/แก้ต่อ).

## Source of truth: Design System

`design-system/` คือแหล่งอ้างอิงดีไซน์ทั้งหมด (สี/ฟอนต์/spacing/ปุ่ม/asset/แพตเทิร์น).
**ก่อนทำ/แก้ UI ให้เปิดอ่านที่เกี่ยวข้องก่อนเสมอ** — โดยเฉพาะ `07_Web-Patterns.md` (รวม Layout Rules).
โฟลเดอร์นี้ถูก symlink เข้า Obsidian Vault ด้วย → แก้ที่ Obsidian = แก้ไฟล์ใน repo ตรง ๆ (ก๊อปเดียว) — **re-link หลัง rename เป็น `design-system/`**.

## Assets / fonts

- `design-system/` = master (svg+png ทุก variant, ฟอนต์ `.ttf`)
- `assets/` + `fonts/` ที่ root = web build (เฉพาะที่หน้าใช้ + ฟอนต์ `.woff2`) — **generate มา ไม่แก้มือ**
- แก้ master แล้วรัน `python3 sync-assets.py` เพื่อ rebuild (เพิ่มรูปใหม่ → เพิ่มชื่อใน `USED_IMAGES`)

## Layout Rules (ต้องทำตาม)

กฎเต็ม + เหตุผล + วิธี implement อยู่ใน `design-system/07_Web-Patterns.md` (§ Layout Rules).

- **R1 · Cut screen ต้องชิด edge** — screen/mockup ที่ถูกตัดล่าง ต้องให้ก้นชิดขอบล่างของ section/band เสมอ ห้ามลอยมีช่องว่าง/fade คั่น. ทำด้วย band `relative` + bg `absolute inset-0` ให้ `band.bottom − screen.bottom === 0` ทุก breakpoint. (ใช้จริง: `.hero-band` + `.hero-aurora`)

## Local preview

`node server.js` → http://localhost:4599 (เสิร์ฟ `index.html` เป็น default).
