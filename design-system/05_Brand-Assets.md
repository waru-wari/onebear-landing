---
type: brand
tags: [brand, assets, brand/onebear, status/active]
status: active
created: 2026-06-03
updated: 2026-06-03
category: brand-assets
brand_scope: onebear
---

# 🐻 Brand Assets — Logo, Mascot & Fonts

> ไฟล์ logo, font และมาสคอตของ Onebear พร้อมกฎการใช้
> ทุกไฟล์อยู่ใน `assets/` และ `fonts/` ข้างไฟล์นี้ — **ใช้จากที่นี่เท่านั้น**

---

## 🐻 Logo Files — ไฟล์จริงที่มี

> ทุกไฟล์มีทั้ง `.svg` (เว็บ, เวกเตอร์) และ `.png` (รูปภาพทั่วไป)
> **บนเว็บใช้ `.svg` เสมอ** — คมทุก DPI, ขนาดเล็กกว่า

### Horizontal (มาสคอต + wordmark แนวนอน)

| ไฟล์ | พื้นหลัง | ใช้เมื่อ |
|---|---|---|
| `assets/horizontal-green-logo.svg` | โปร่งใส/เขียว | **Navbar, header เว็บ (พื้นขาว)** ⭐ |
| `assets/horizontal-white-logo.svg` | โปร่งใส/ขาว | Navbar บนพื้นเข้ม, footer, dark section |

### Square / App Icon

| ไฟล์ | พื้นหลัง | ใช้เมื่อ |
|---|---|---|
| `assets/square-green-logo.svg` | Teal `#41C3A8` | App icon, OG image, social cover |
| `assets/square-white-logo.svg` | ขาว | บนพื้น teal, card บนสีเข้ม |
| `assets/icon-app.svg` | — | **App store icon, favicon** ⭐ |

### Symbol Only (มาสคอตเดี่ยว ไม่มี wordmark)

| ไฟล์ | สี | ใช้เมื่อ |
|---|---|---|
| `assets/symbol-only-green-logo.svg` | Teal | Avatar, badge, loading screen |
| `assets/symbol-only-white-logo.svg` | ขาว | บนพื้นเข้ม/teal |

---

## 📐 Logo Usage Rules

```
✅ Navbar บนพื้นขาว    → horizontal-green-logo.svg    (height: 40px)
✅ Footer dark         → horizontal-white-logo.svg    (height: 40px)
✅ App icon / favicon  → icon-app.svg / square-green-logo.svg
✅ Social profile      → square-green-logo.png         (1:1 teal bg)
✅ บน teal background  → square-white-logo.svg / symbol-only-white-logo.svg
✅ Loading/splash      → symbol-only-green-logo.svg    (animate-pulse ได้)
```

```
❌ อย่าบีบ/ยืด logo ผิดสัดส่วน
❌ อย่าเปลี่ยนสี wordmark/mascot
❌ อย่าใส่เงา/effect เพิ่มเอง
❌ อย่าวาง green logo บนพื้น teal — ใช้ white logo แทน
❌ Clear space รอบ logo ต้องมีอย่างน้อย = ความสูงของหัวมาสคอต
```

**Minimum size:** ความสูง 24px (horizontal) · 20px (symbol only)
**Recommended navbar size:** height 40px

---

## 🎭 Mascot Identity

> หมีขาวผ้ากันเปื้อนสีเทียล — "เพื่อนร่วมทีมของคนขายออนไลน์"
> สื่อถึง 3 ช่วงชีวิตของเจ้าของร้าน: เปิดร้าน · ระหว่างวัน · ช่วงเหนื่อยล้า

### สีของมาสคอต (จาก Brand Guide)

| ส่วน | สี | HEX |
|---|---|---|
| ตัว / ขน | ขาว | `#FFFFFF` |
| ผ้ากันเปื้อน | Teal (= Primary) | `#41C3A8` |
| แก้ม | Pastel Pink | `#FFBEBF` |
| ตา / เส้นหน้า | Dark Gray | `#313937` |
| เงา / รายละเอียด | Teal darker | `#35B0A6` |

### Poses แนะนำ

| Pose | Context | ใช้ที่ |
|---|---|---|
| **Standing + Waving** | ยิ้ม ทักทาย | Hero, welcome screen, onboarding |
| **Opening Shop** | เปิดร้าน พร้อมทำงาน | Moment 1 "เปิดร้าน", step แรก |
| **Working** | จดจ่อ ขยัน | Section features, moment 2 |
| **Tired + Smiling** | เหนื่อยแต่ยังยิ้ม | Moment 3 "ช่วงเหนื่อย", AI helps |
| **Jumping with Joy** | ดีใจ ฉลอง | Success state, sign-up complete |
| **Questioning** | สงสัย | FAQ, empty state, 404 |
| **Pointing** | ชี้นำ | ชี้ไป CTA / step ถัดไป |

```
✅ จับคู่ pose กับ context เสมอ
✅ ใช้ SVG (คมทุกขนาด)
✅ มี breathing space รอบมาสคอต อย่าชนขอบ
❌ ใช้มาสคอตเกิน 1–2 จุดต่อหน้า
❌ เปลี่ยนสีผ้ากันเปื้อน หรือเส้นหน้า
```

---

## 🔤 Fonts — ไฟล์จริงที่มี

> ไฟล์ฟอนต์ทั้ง 4 น้ำหนักอยู่ใน `fonts/` แล้ว — ไม่ต้องไปขอเพิ่ม

| ไฟล์ | Weight | Style | ใช้เมื่อ |
|---|---|---|---|
| `fonts/Gofive-Text.ttf` | 400 | Regular | Body text, description, caption |
| `fonts/Gofive-Medium.ttf` | 500 | Medium | Nav link, body emphasis, sub text |
| `fonts/Gofive-Semi_Bold.ttf` | 600 | Semi Bold | Section heading (H2–H5), button |
| `fonts/Gofive-Bold.ttf` | 700 | Bold | Hero H1, display, price number |

### @font-face Setup (เว็บ — แปลง ttf → woff2 ก่อน deploy)

```css
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Text.woff2') format('woff2'),
       url('/fonts/Gofive-Text.ttf')   format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Medium.woff2') format('woff2'),
       url('/fonts/Gofive-Medium.ttf')   format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Semi_Bold.woff2') format('woff2'),
       url('/fonts/Gofive-Semi_Bold.ttf')   format('truetype');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Bold.woff2') format('woff2'),
       url('/fonts/Gofive-Bold.ttf')   format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

> 💡 **woff2 ขนาดเล็กกว่า ttf ~40%** — แนะนำ convert ก่อน deploy ด้วย `fonttools` หรือ Squoosh
> 💡 Dev environment ใช้ `.ttf` ได้เลยจาก `fonts/` folder นี้

### Fallback Stack

```css
:root {
  --font-family-base: 'Gofive', 'IBM Plex Sans Thai', 'Noto Sans Thai',
                      -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      sans-serif;
}
```

---

## 🏢 Gofive Ecosystem — Sibling Brands

Onebear เป็นหนึ่งในแพลตฟอร์มของ **Gofive Co., Ltd.** — แสดงใน footer:

| Brand | Primary Color | ไฟล์ |
|---|---|---|
| **empeo** | `#F05B2F` Flame Orange | empeo brand icon |
| **Venio** | `#06BEF8 → #0382FA` Blue gradient | Venio brand icon |
| **eTaxGo** | `#EB1C26` Crimson Red | eTaxGo brand icon |
| **IOMO** | `#FF4C00` Orange | IOMO brand icon |
| **SignToGo** | `#4B5FD6 → #15DE76` gradient | SignToGo brand icon |

> ไอคอน sibling brands ใช้สีที่กำหนดเท่านั้น — ห้ามเปลี่ยน

---

## 🔗 Related

- [[01_Colors]] — สี brand + mascot palette
- [[02_Typography]] — font scale + font-face
- [[07_Web-Patterns]] — การใช้ mascot / logo ใน section
- [[00_README]] — ภาพรวม

---

> 🐻 **horizontal-green-logo.svg** สำหรับ navbar · **icon-app.svg** สำหรับ favicon · **fonts/** ครบ 4 น้ำหนักแล้ว
