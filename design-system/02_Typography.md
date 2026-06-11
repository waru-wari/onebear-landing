---
type: foundation
tags: [foundation, brand/onebear, status/active]
status: active
created: 2026-06-03
category: typography
token_format: css-variable
brand_scope: onebear
---

# ✍️ Typography

> Font system ของ Onebear design system — Custom font **Gofive** (รองรับ TH + EN)
> โครงเหมือน makub/empeo เพื่อความสม่ำเสมอข้ามแบรนด์ในเครือ Gofive

---

## 🎯 หลักการ

1. **ใช้ token ไม่ใช่ pixel** — `--font-size-h1` ไม่ใช่ `32px`
2. **น้ำหนักหลัก 400 / 500 / 600 / 700** — ไม่ใช้น้ำหนักอื่น
3. **Heading = Bold (700) สำหรับ hero** — เน้น impact และ premium
4. **Heading = Semi Bold (600) สำหรับ section** — คม อ่านง่าย
5. **Body 14px เป็นค่ามาตรฐาน** — อ่านสบายบนเว็บ
6. **Fallback ครบ** — ถ้าไม่มี Gofive ใช้ system font ใกล้เคียง
7. **Letter-spacing = 0 ทั้งหมด** — (อัปเดต v3) ฟอนต์ไทยห้ามใส่ tracking ติดลบ (สระ/วรรณยุกต์ชนกัน) → `* { letter-spacing: 0 }`
8. **Hero H1 line-height ≥ 1.3** — (อัปเดต v3) ไทย 2 บรรทัดต้องโปร่ง ไม่งั้นตัวบน-ล่างชนกัน → ดู [[08_Landing-v3]]

> 🔄 **อัปเดต v3.1 (เว็บ landing — ยึดอันนี้):**
> - **Section heading = Bold 700** (ไม่ใช่ Semibold 600 แล้ว) · ขนาด **fluid `clamp(30px, 4.2vw, 44px)`** (มือถือ ~30 → desktop 44)
> - **Hero H1 responsive:** `44px → 58px → 66px` Bold 700 · โลโก้ hero `h-16/h-20`
> - **line-height = 1.3 ทุก heading** (hero / section / CTA) ไม่ใช่แค่ hero
> - **Eyebrow = Title case (ใหญ่ตัวแรก) ไม่ uppercase** — เอา `text-transform:uppercase` + tracking ออก; ตัวย่อ (FAQ/CRM/AI) คงตัวใหญ่
> - **Eyebrow สี = แบรนด์ teal `#15A591`** (เดิมเทาเขียว) · 13px semibold
> - **Heading กัน orphan:** ใส่ `text-wrap: balance` + container กว้างพอ ไม่ให้ heading ตกบรรทัด/คำโดดท้ายเมื่อ fluid ขยาย → ดู [[08_Landing-v3]]

---

## 🔤 Font Family

### Primary: Gofive (Custom)

> Custom font ของกลุ่ม Gofive รองรับ Latin (EN) + Thai
> ใช้ร่วมกันทั้ง makub / empeo / Onebear / Venio

| | |
|---|---|
| Family name | `Gofive` |
| Type | Sans-serif, Geometric |
| License | Internal use only |
| Source files | ✅ มีแล้วใน `assets/fonts/` — 4 น้ำหนัก `.ttf` |

### Fallback Stack

```css
:root {
  --font-family-base: 'Gofive', 'IBM Plex Sans Thai', 'Noto Sans Thai',
                      -apple-system, BlinkMacSystemFont, 'Segoe UI',
                      Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Courier New', monospace;
}
```

### @font-face Setup

```css
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Text.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Medium.woff2') format('woff2');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-display: swap;
}
@font-face {
  font-family: 'Gofive';
  src: url('/fonts/Gofive-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap;
}
```

---

## ⚖️ Font Weights

| Token | Weight | Usage |
|---|---|---|
| `--font-weight-text` | 400 | Body paragraph, secondary text |
| `--font-weight-medium` | 500 | Body emphasis, nav links, caption |
| `--font-weight-semibold` | 600 | Section heading, card title, FAQ heading |
| `--font-weight-bold` | 700 | Hero H1, big display text, price number |

```css
:root {
  --font-weight-text:     400;
  --font-weight-medium:   500;
  --font-weight-semibold: 600;
  --font-weight-bold:     700;
}
```

---

## 📐 Type Scale

### Display Scale (Hero) ✨

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--font-size-display-lg` | **48px** | 72px | Bold | Hero H1 ใหญ่สุด — "ปลดล็อกด้วยพลัง AI แบบไร้ขีดจำกัด" |
| `--font-size-display-md` | **36px** | 52px | Bold | Hero H1 ทั่วไป, section heading ใหญ่ |

### Header Scale

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--font-size-h1` | 32px | 44px | Semi Bold | Page title หลัก, section heading |
| `--font-size-h2` | 26px | 36px | Semi Bold | Section heading รอง |
| `--font-size-h3` | 24px | 32px | Semi Bold | Subsection, card heading ใหญ่ |
| `--font-size-h4` | 20px | 28px | Semi Bold | Card title, FAQ question |
| `--font-size-h5` | 18px | 26px | Bold | Add-on name, tier name |

### Title Scale (16px family)

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--font-size-title-bold` | 16px | 24px | Bold | Component title เน้นมาก |
| `--font-size-title-strong` | 16px | 24px | Semi Bold | Section eyebrow (uppercase), CTA caption |
| `--font-size-title` | 16px | 24px | Medium | Nav link, button text, body emphasis |

### Body Scale (14px family)

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--font-size-body-strong` | 14px | 20px | Semi Bold | Body emphasis |
| `--font-size-body` | 14px | 20px | Medium | Body text หลัก, feature list |
| `--font-size-text` | 14px | 20px | Text (400) | Description, secondary text |

### Small / Extra Small

| Token | Size | Line Height | Weight | Usage |
|---|---|---|---|---|
| `--font-size-small-strong` | 12px | 18px | Semi Bold | Tier description, label, badge |
| `--font-size-small` | 12px | 18px | Text (400) | Caption, helper, footnote |
| `--font-size-xs` | 11px | 16px | Text (400) | Badge savings tag ("ประหยัด 20%"), legal |

---

## 🎨 CSS Variables — Complete

```css
:root {
  /* Display (Hero) */
  --font-size-display-lg:   3rem;       /* 48px */
  --line-height-display-lg: 4.5rem;     /* 72px */
  --font-size-display-md:   2.25rem;    /* 36px */
  --line-height-display-md: 3.25rem;    /* 52px */

  /* Header */
  --font-size-h1: 2rem;       --line-height-h1: 2.75rem;   /* 32 / 44 */
  --font-size-h2: 1.625rem;   --line-height-h2: 2.25rem;   /* 26 / 36 */
  --font-size-h3: 1.5rem;     --line-height-h3: 2rem;      /* 24 / 32 */
  --font-size-h4: 1.25rem;    --line-height-h4: 1.75rem;   /* 20 / 28 */
  --font-size-h5: 1.125rem;   --line-height-h5: 1.625rem;  /* 18 / 26 */

  /* Title (16px) */
  --font-size-title: 1rem;    --line-height-title: 1.5rem;  /* 16 / 24 */

  /* Body (14px) */
  --font-size-body: 0.875rem; --line-height-body: 1.25rem;  /* 14 / 20 */

  /* Small */
  --font-size-small: 0.75rem;  --line-height-small: 1.125rem; /* 12 / 18 */
  --font-size-xs:    0.6875rem; --line-height-xs:   1rem;      /* 11 / 16 */
}
```

---

## 📝 Onebear-Specific Text Styles

### Price Display (Pricing cards)
```css
.text-price {
  font-family: var(--font-family-base);
  font-size: 2.375rem;     /* 38px */
  line-height: 3.5625rem;  /* 57px */
  font-weight: var(--font-weight-bold);
  color: var(--color-neutral-1200);
}
.text-price-unit {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-text);
  color: var(--color-neutral-700);  /* #94A3B8 */
}
```

### Section Eyebrow (uppercase teal)
```css
.text-eyebrow {
  font-family: var(--font-family-base);
  font-size: var(--font-size-small);  /* 12px */
  font-weight: var(--font-weight-medium);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-primary-300);   /* Brand Teal */
}
```

### FAQ Question
```css
.text-faq-q {
  font-size: var(--font-size-h4);     /* 20px */
  font-weight: var(--font-weight-semibold);
  color: var(--color-neutral-1100);  /* Ink */
  line-height: var(--line-height-h4);
}
.text-faq-a {
  font-size: var(--font-size-title);  /* 16px */
  font-weight: var(--font-weight-medium);
  color: var(--color-neutral-900);    /* Lead */
  line-height: var(--line-height-title);
}
```

---

## ✅ Usage Guidelines

- ✅ Hero H1 → `display-lg` Bold + letter-spacing ติดลบเล็กน้อย (`-0.02em`)
- ✅ Section heading → `h1` (32px) Semi Bold
- ✅ FAQ question → `h4` (20px) Semi Bold
- ✅ Pricing tier name → `h5` (18px) Bold
- ✅ Pricing description → `small-strong` (12px) text-slate
- ✅ Body content → `body` (14px medium) หรือ `text` (14px regular)
- ✅ ปุ่ม → `title` (16px semi-bold) ขึ้นไป
- ✅ Eyebrow → `small` (12px medium, uppercase, letter-spacing) สี Brand Teal
- ❌ อย่าใช้น้ำหนักนอกเหนือ 400/500/600/700
- ❌ อย่าใช้ heading หลายขนาดติดกันในระดับเดียว

---

## 🔗 Related

- [[01_Colors]] — สี text
- [[03_Spacing]] — line-height + ระยะห่าง
- [[04_Buttons]] — typography ของปุ่ม
- [[00_README]] — ภาพรวม

---

> ✍️ **Gofive font** — Hero Bold 48px, Section Semi Bold 32px, Body Medium 14px — ใช้ token เสมอ
