# Onebear — Project Context

## Table of Contents

| Section | Description |
|---------|-------------|
| [How to Handle Design Decisions](#how-to-handle-design-decisions) | Protocol สำหรับบันทึก decision |
| [What This Is](#what-this-is) | Onebear คืออะไร ทำอะไรได้บ้าง |
| [Brand Rules](#brand-rules) | ชื่อ สี ฟอนต์ mascot น้ำเสียง |
| [Color Tokens](#color-tokens) | CSS variables — สีทั้งหมด |
| [Product Features](#product-features) | Features + value props + target |
| [Gofive Font System](#gofive-font-system) | @font-face + weight mapping |
| [Copy Conventions](#copy-conventions) | กฎการเขียน copy ให้สม่ำเสมอ |
| [Button System](#button-system) | Variants + canonical HTML pattern |
| [Section Patterns](#section-patterns) | Hero / Pricing / FAQ / CTA / Footer spec |
| [Layout Rules](#layout-rules-r1r4) | R1–R4 layout constraints |
| [Responsive Breakpoints](#responsive-breakpoints) | Mobile/desktop breakpoints |
| [Project Structure](#project-structure) | Folder + asset paths |
| [How to Preview](#how-to-preview) | Local server |
| [Deploy Checklist](#deploy-checklist) | Pre-deploy steps |
| [Figma Reference](#figma-reference) | Figma node IDs |

---

## How to Handle Design Decisions

เมื่อมี decision เกี่ยวกับ design, typography, spacing, สี หรือ component:

1. **Claude ต้องถามทุกครั้งว่า "Should I record this in CLAUDE.md?"** — ห้ามบันทึกโดยไม่ถาม และห้ามรอให้ user ถามก่อน
2. **ถ้า rule เดิมเปลี่ยน → แก้ในที่เดิม** — อย่าเพิ่ม rule ซ้อนซ้ำ
3. **ถ้าเจอ conflict กับ rule เดิม → แจ้งทันที** — อย่าสันนิษฐานหรือตัดสินใจเงียบ
4. **ทั้งสองหน้าต้อง sync กัน** — `index.html` + `free-trial/index.html` ต้องแก้พร้อมกันทุก commit
5. **CLAUDE.md คือ single source of truth** — ถ้า design-system/*.md ขัดกับ CLAUDE.md ให้ยึด CLAUDE.md

---

## What This Is

**Onebear — Your AI Chat Commerce Assistant**

แพลตฟอร์ม AI Chat Commerce รวมแชทจาก **LINE, Facebook และ Instagram** ไว้ในแดชบอร์ดเดียว ช่วยร้านค้าออนไลน์ดูแลลูกค้า บริหารออเดอร์ รับชำระเงิน และวิเคราะห์ยอดขายครบวงจร

| ปัญหาของร้านค้า | ทางออกจาก Onebear |
|---|---|
| ตอบลูกค้าไม่ทัน เสียยอดขาย | AI ตอบทันที ดูแลลูกค้า 24 ชม. |
| แชทกระจายหลายแพลตฟอร์ม จัดการยาก | รวมทุกช่องทางไว้ในแดชบอร์ดเดียว |
| ขั้นตอนการขาย/ชำระเงินยุ่งยาก | ปิดการขายและรับเงินจบในแชทเดียว |

**Positioning:** เครื่องมือที่ช่วยให้ร้านค้า "ไม่พลาดทุกโอกาสการขาย" สำหรับร้านขาย online ผ่าน chat

---

## Brand Rules

- **"Onebear"** — ตัว O ใหญ่ ที่เหลือเล็กทั้งหมด ไม่ใช่ "OneBear" / "ONEBEAR" / "onebear"
- **Primary color:** Brand Teal `#41C3A8` — logo, icon, eyebrow, active state
- **CTA button:** Near-black `#1C1C22` (ไม่ใช่ teal — ดู [Button System](#button-system))
- **Font:** Gofive (proprietary, local `.woff2`) รองรับ TH + EN
- **Mascot:** หมีน้อย Onebear — ใช้ใน CTA section, marketing ห้ามใช้ในบริบทเป็นทางการ
- **Tone:** เพื่อนร่วมทีมที่เข้าใจร้านค้าออนไลน์ — ไม่ทางการ เข้าใจง่าย เน้น benefit จับต้องได้
- **Parent company:** Gofive Co., Ltd.

---

## Color Tokens

### Brand Core (5 สีจาก Brand Guide)

| # | HEX | ชื่อ | ใช้เมื่อ |
|---|---|---|---|
| 1 | `#41C3A8` | Primary Teal | logo, eyebrow, active, check icon |
| 2 | `#35B0A6 → #4CD6AA` | BG Gradient | ribbon "Best value", CTA banner bg, card header |
| 3 | `#5CC3B4 → #15A591` | Font Gradient | heading accent text, price gradient |
| 4 | `#1C1C22` | Near-black (v3.1) | heading text, body เข้ม, ปุ่ม CTA, footer bg |
| 5 | `#FFBEBF` | Pastel Pink | mascot blush, illustration accent เท่านั้น |

```css
:root {
  /* Primary Teal */
  --color-primary:      #41C3A8;
  --color-primary-dark: #2DA892;   /* hover/pressed */
  --color-primary-mist: #E8FAF6;   /* subtle bg, hover tint */

  /* Gradients */
  --gradient-bg:        linear-gradient(135deg, #35B0A6 0%, #4CD6AA 100%);
  --gradient-bg-90:     linear-gradient(90deg,  #35B0A6 0%, #4CD6AA 100%);
  --gradient-font:      linear-gradient(90deg, #5CC3B4 0%, #15A591 100%);

  /* Dark (v3.1 — ใช้ทุกจุดแทน brand dark gray #313937) */
  --color-dark:         #1C1C22;

  /* Neutral */
  --color-neutral-900:  #334155;   /* body text */
  --color-neutral-800:  #525260;   /* secondary text */
  --color-neutral-400:  #DFDFE8;   /* border ปกติ */
  --color-neutral-300:  #ECECF1;   /* bg subtle */
  --color-neutral-200:  #F1F5FA;   /* section bg (FAQ) */

  /* Footer */
  --color-footer-bg:    #1C1C22;   /* = --color-dark v3.1 */

  /* Stats */
  --color-stat-loss:    #E5484D;   /* ตัวเลขที่สื่อ "กำลังเสีย" เช่น ~42% ลูกค้าหลุด */
}
```

**กฎ:**
- ❌ อย่าใช้ teal `#41C3A8` เป็น background ปุ่ม CTA → ใช้ gradient หรือ dark แทน
- ตัวเลข loss stat (กำลังเสีย/ปัญหา) → `#E5484D` (red) · ตัวเลขสำเร็จ → `#1C1C22` · celebrate → `#41C3A8`
- ❌ อย่าใช้ `#000000` (pure black) → ใช้ `#1C1C22` เสมอ
- ❌ อย่าใช้ `#313937` (brand original dark) ใน web UI → ถูกแทนด้วย `#1C1C22` ตั้งแต่ v3.1

### Gradient Text

```css
.text-gradient {
  background: var(--gradient-font);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## Product Features

| Feature | คำอธิบาย |
|---|---|
| **AI Sales Agent** | ตอบลูกค้าอัตโนมัติ 24 ชม. ช่วยแนะนำจนจบการซื้อ |
| **Unified Inbox** | รวมแชท LINE / Facebook / Instagram ไว้ในที่เดียว |
| **Smart Handoff** | ส่งต่อแชทให้ทีมแบบไร้รอยต่อ พร้อมสรุปบทสนทนา |
| **Payment in Chat** | ส่งลิงก์ชำระเงินผ่านแชทโดยตรง ลูกค้าจ่ายจบในบทสนทนา |
| **Order Management** | สร้างและติดตามสถานะออเดอร์ครบในแชทเดียว |
| **Analytics** | ติดตาม KPI ปรับงานบนพื้นฐานข้อมูลเรียลไทม์ |
| **CRM** | เก็บข้อมูลลูกค้าและประวัติการซื้ออัตโนมัติ |
| **Team Management** | มอบหมายแชทและจัดการสิทธิ์ทีม |

**Pricing hook:** Free plan ทดลองได้ฟรี · Growth plan ทดลองฟรี 14 วัน · ไม่ต้องผูกบัตรเครดิต

---

## Gofive Font System

```css
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Text.woff2') format('woff2');
  font-weight: 400; font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Medium.woff2') format('woff2');
  font-weight: 500; font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Semi_Bold.woff2') format('woff2');
  font-weight: 600; font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Bold.woff2') format('woff2');
  font-weight: 700; font-display: swap;
}
```

| Weight | ชื่อ | ใช้สำหรับ |
|---|---|---|
| 400 | Text | body paragraph, description |
| 500 | Medium | nav link, secondary label, caption |
| 600 | Semi Bold | section heading, card title, FAQ question |
| 700 | Bold | hero H1, section H2 (v3.1+) |

**กฎ:**
- `letter-spacing: 0` ทุก element — ห้ามใส่ tracking ติดลบ (สระ/วรรณยุกต์ชนกัน)
- `line-height: 1.3` ทุก heading — Thai 2+ บรรทัดต้องโปร่ง
- DS max weight = 700 — ห้ามใช้ 800+

---

## Copy Conventions

กฎเขียน copy ให้สม่ำเสมอทุกหน้า

| เรื่อง | ใช้ | ห้ามใช้ |
|---|---|---|
| **เวลา** | `24 ชม.` | `24 ชั่วโมง` |
| **CTA หลัก (landing)** | `เริ่มใช้งานฟรี` | `เริ่มใช้ Onebear ฟรี`, `ลองใช้ฟรี` |
| **CTA หลัก (free-trial)** | `เริ่มใช้ Onebear ฟรี` | `เริ่มใช้งานฟรี` |
| **CTA Hero (free-trial)** | `ทดลองใช้งานฟรี 14 วัน` | — (เฉพาะ Hero ปุ่มเดียว) |
| **Brand name** | `Onebear` | `OneBear`, `ONEBEAR`, `onebear` |
| **CTA href** | `https://app.onebear.ai/register` | — |
| **Chat (คำไทย)** | `แช็ต` | `แชท`, `แชต` (ราชบัณฑิตยสภา) |

---

## Button System

### Variants

| Variant | Class | ใช้เมื่อ |
|---|---|---|
| **Primary Dark** | `glow-button` | hero / HIW / CTA section — ทุก CTA หลัก |
| **Gradient** | `btn btn-gradient` | Growth plan, "ทดลองใช้งานฟรี 14 วัน" |
| **Outline** | `btn btn-outline` | Free/Starter plan (pricing card) |
| **Login** | `btn btn-iris` | Login button ใน navbar |

### Canonical glow-button (Primary Dark CTA)

ปุ่ม CTA หลักทุกจุดในหน้าต้องเป็น pattern นี้ทุก attribute ห้ามเบี่ยง:

```html
<a href="https://app.onebear.ai/register"
   class="glow-button inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2">
  เริ่มใช้งานฟรี
  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" style="font-size:18px">arrow_forward</span>
</a>
```

**ข้อห้าม:** `text-base`, `py-3`, `py-5`, `font-bold`, `w-[260px]` — ถ้าเจอใน glow-button → แก้ทันที

### Tailwind Button Classes

```css
/* ใส่ใน <style type="text/tailwindcss"> */
.btn           { @apply inline-flex items-center justify-center gap-2 rounded-full transition-all; }
.btn-gradient  { @apply bg-gradient-to-r from-[#35B0A6] to-[#4CD6AA] text-white text-sm font-semibold px-8 py-4 hover:opacity-90; }
.btn-outline   { @apply border border-[rgba(0,196,140,0.35)] text-[#00C48C] text-sm font-semibold py-[13px] px-1 w-full hover:bg-[#E8FAF6]; }
.btn-iris      { @apply border-[1.5px] border-[#dfdfe8] text-[#525260] text-sm font-semibold px-4 py-2 hover:border-[#41C3A8] hover:text-[#41C3A8]; }
```

**Pricing exception:** ปุ่มใน pricing card ใช้ `py-2.5` + `w-full` (ไม่ใช่ `width:280px` หรือ `px-8`)

---

## Section Patterns

### Section Summary

| Section | Background | CTA |
|---|---|---|
| Hero | white + aurora teal | `glow-button` `#1C1C22` |
| Features | white | — (tab/carousel) |
| HIW (How it works) | dark | `glow-button` |
| Pricing | white | outline (Free/Starter) / gradient (Growth) |
| Add-ons | white | — |
| CTA Banner | gradient teal→cyan→purple | `glow-button` dark |
| FAQ | `#F1F5FA` | — |
| Footer | `#1C1C22` | — |

### Hero Aurora Background

```css
.hero-aurora {
  background: radial-gradient(circle at 30% 40%, rgba(65,195,168,0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(6,182,212,0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 80%, rgba(139,92,246,0.08) 0%, transparent 40%),
              white;
}
```

### Pricing Cards

| Tier | ราคา | ปุ่ม |
|---|---|---|
| **Free** | ฟรี | `btn-outline` "เริ่มใช้งานฟรี" |
| **Starter** | ฿790/เดือน | `btn-outline` "เริ่มใช้งานฟรี" |
| **Growth** ⭐ | ฿1,990/เดือน | `btn-gradient` "ทดลองใช้งานฟรี 14 วัน" |

**Ribbon "Best value":**
```css
.pricing-ribbon {
  background: linear-gradient(166deg, #00C48C 0%, #06B6D4 100%);
  border-radius: 22px 22px 0 0;
  padding: 8px 0 28px;
}
```

**Corner radius:** Pricing `22px` · FAQ `20px` · Add-on `24px` · Button `rounded-full`

### Check Icon (Pricing Feature List)

```html
<!-- Active ✅ — feature ที่ได้รับ -->
<div class="bg-[rgba(0,196,140,0.10)] flex items-center justify-center rounded-full size-[20px]">
  <svg class="size-[10px]" ...check-mark-teal... />
</div>

<!-- Inactive ❌ — feature ที่ยังไม่ได้ -->
<div class="bg-[rgba(0,0,0,0.04)] flex items-center justify-center rounded-full size-[20px]">
  <div class="bg-[#CBD5E1] h-[2px] rounded w-[8px]"></div>
</div>
```

Text active: `#334155` · Text inactive: `#B0BEC5`

### Logo Usage

```
navbar (พื้นขาว)  → assets/logos/horizontal-green-logo.svg   h-[40px]
footer (พื้นเข้ม) → assets/logos/horizontal-white-logo.svg   h-[40px]
favicon           → assets/logos/favicon.svg  (ต้องมี rx="80" ทั้ง 2 จุด — bg + clipPath)
OG / social cover → assets/logos/square-green-logo.png        (1:1 teal bg)
```

> ทุกครั้งที่อัปเดต favicon จาก Figma → เพิ่ม `rx="80"` ทั้ง `<rect>` bg และ `<clipPath>` ก่อน commit

### FAQ

- Background: `#F1F5FA`
- Card: `background: white; border-radius: 20px; box-shadow: 0 16px 40px rgba(97,97,97,0.10); padding: 20px;`
- ใช้ `<details>/<summary>` native — ไม่ต้องใช้ JavaScript

### Mobile Feature Carousel

- Track: `flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 py-4 -mx-5`
- Card: `feat-mob-card snap-center shrink-0 w-[85vw] rounded-[24px] overflow-visible`
- Visual header: `height: 200px` fixed — ทำให้ทุก card สูงเท่ากัน
- `py-4` บน track + `overflow-visible` บน card → แก้ shadow clipping (ดู R2)

### Navbar

```html
<nav class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.04)] sticky top-0 px-[40px] py-[10px]">
  <!-- Logo left · Links center · Actions right -->
  <button class="btn btn-iris">เข้าสู่ระบบ</button>
  <!-- glow-button ขนาด compact สำหรับ navbar -->
</nav>
```

Nav link: default `#16161B` · active `#46BAA9` · 14px Medium

### Footer

```html
<footer style="background:#1C1C22">
  <div class="max-w-[1280px] mx-auto px-10 py-3 text-center">
    <p class="text-[13px] text-white/40">© 2026 Gofive Co., Ltd. All rights reserved.</p>
  </div>
</footer>
```

---

## Layout Rules (R1–R4)

**R1** — screen/mockup ที่ถูก crop ล่าง ต้องให้ก้นชิดขอบล่าง section เสมอ (ห้ามลอย/fade)  
**R1b** — ถ้า design แสดง visual ชิดมุมใด ต้องชิดมุมนั้น ไม่ center  
**R2** — `overflow-x:auto` ตัด shadow → แก้ด้วย `py-4` บน track + `overflow-visible` บน card  
**R3** — ให้ visual กำหนดขนาด container ห้ามใส่ `min-height` สูงกว่า visual จริง  
**R4** — Thai h3 ใน 2-column grid: `text-[22px] lg:text-[28px] xl:text-[34px]` (ห้าม `text-[40px]` ใน 2-col)

---

## Responsive Breakpoints

| Breakpoint | Min width | ผล |
|---|---|---|
| mobile | < 768px | single column, ปุ่ม `width:280px` |
| md | ≥ 768px | บาง section เปิด 2-col |
| lg | ≥ 1024px | full 2-col layout |
| xl | ≥ 1280px | container cap ที่ `max-w-[1280px]` |

Container: `max-w-[1280px] mx-auto px-10` (40px/side)

---

## Project Structure

```
onebear/
  CLAUDE.md              ← single source of truth (this file)
  design-system/
    fonts/               ← TTF masters (source — ห้าม deploy โดยตรง)
    *.md                 ← archived reference specs
  landing/
    index.html           ← main landing page (v3.1)
    free-trial/
      index.html         ← free trial page
    assets/
      animation/         ← .mp4 videos + .gif
      bg/                ← background images (hero-aurora.webp)
      illustrations/     ← product visuals (AI section, shop-illustration)
      logos/             ← brand logos — SVG + PNG all variants
      mascot/            ← bear mascot (cta-bear.png, sad-bear-head.png)
      screenshots/       ← product UI screenshots
    fonts/               ← woff2 generated (ห้ามแก้มือ)
    legacy/              ← เก่า ห้ามแก้
    _dev/                ← dev experiments (ห้าม deploy)
    server.js
    sync-assets.py       ← เพิ่ม asset ใหม่ → เพิ่มใน USED_IMAGES แล้วรัน
    vercel.json
```

### Asset Path Convention

| Folder | Contains | จาก `landing/` | จาก `landing/free-trial/` |
|---|---|---|---|
| `assets/logos/` | logo ทุก variant | `assets/logos/file` | `../assets/logos/file` |
| `assets/mascot/` | bear mascot | `assets/mascot/file` | `../assets/mascot/file` |
| `assets/illustrations/` | product visuals | `assets/illustrations/file` | `../assets/illustrations/file` |
| `assets/screenshots/` | UI screenshots | `assets/screenshots/file` | `../assets/screenshots/file` |
| `assets/animation/` | video, GIF | `assets/animation/file` | `../assets/animation/file` |
| `assets/bg/` | backgrounds | `assets/bg/file` | `../assets/bg/file` |

**กฎ filename:** ห้ามใช้ space หรือ `&` — ใช้ `-` แทน (เช่น `features-crm-slip.png`)

---

## How to Preview

```bash
node server.js          # → http://localhost:4599
python3 sync-assets.py  # sync fonts + images จาก design-system/
```

Vercel: Root Directory = `landing` (ตั้งค่าแล้ว)

---

## Deploy Checklist

1. **เช็กทั้งสองหน้า** — `index.html` + `free-trial/index.html` ต้อง sync กัน (layout, copy, CSS)
2. **CTA text ถูก page** — landing = "เริ่มใช้งานฟรี" / free-trial = "เริ่มใช้ Onebear ฟรี"
3. **Preview ทั้งสองหน้าใน browser** ก่อน push — เปิดจริง ไม่ใช่แค่ดู code
4. **เช็ก asset paths** — ไม่มี 404
5. **Commit ไปที่ `feat/next`** เท่านั้น → PR → `main` (ห้าม commit ตรงไปที่ `main`)

---

## Figma Reference

- **Q2 2026 Web Design:** Hero `4116-4793` · Pricing `3842-132812`
- **Gofive Design System:** `uT6ORRPorJ1czkcNlF49tf`
