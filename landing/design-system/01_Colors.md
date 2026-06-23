---
type: foundation
tags: [foundation, brand/onebear, status/active]
status: active
created: 2026-06-03
updated: 2026-06-03
category: color
token_format: css-variable
brand_scope: onebear
source: Brand Guide (official)
---

# 🎨 Colors

> Color token หลักของ Onebear design system — **Single source of truth** ของสีทั้งหมด
> อ้างอิงจาก **Brand Guide ที่ได้รับ** — ค่าสีทุกตัวผ่านการยืนยันแล้ว

---

## 🎯 หลักการใช้สี

1. **ใช้ token ไม่ใช่ HEX** — `--color-primary` ไม่ใช่ `#41C3A8`
2. **5 สีหลักจาก Brand Guide** — Teal, BG Gradient, Font Gradient, Dark Gray, Pastel Pink
3. **Gradient แยกเป็น 2 ชุด** — `--gradient-bg` (section/card) vs `--gradient-font` (text gradient)
4. **Near-black `#1C1C22` = heading/text/dark element หลัก** — ใช้ทุกจุด (v3.1+)
5. **เคารพ contrast WCAG AA** — text + background ≥ 4.5:1

---

## 🎨 Brand Color Palette (จาก Brand Guide) ⭐

> **5 สีหลักที่ยืนยันแล้วจาก Brand Guide**

| # | HEX | Name | CMYK | Usage |
|---|---|---|---|---|
| 1 | `#41C3A8` | **Primary Logo** | C: 65% M: 0% Y: 40% K: 0% | สี brand หลัก — logo, icon, eyebrow, active |
| 2 | `#35B0A6 → #4CD6AA` | **Background Gradient** | Start: C:75 M:0 Y:40 K:0 / End: C:55 M:0 Y:45 K:0 | background section, card, decorative |
| 3 | `#5CC3B4 → #15A591` | **Font Gradient** | Start: C:55 M:0 Y:30 K:0 / End: C:80 M:0 Y:45 K:0 | text gradient, heading accent |
| 4 | `#313937` | **Dark Gray** (brand original) | C: 60% M: 45% Y: 50% K: 75% | brand guide reference — web v3.1 ใช้ `#1C1C22` แทน |
| 5 | `#FFBEBF` | **Pastel Pink** | C: 0% M: 25% Y: 15% K: 0% | mascot blush, accent warm, illustration |

---

## 🩵 Primary — Teal

```css
:root {
  --color-primary:      #41C3A8;  /* Primary Logo — brand teal ⭐ */
  --color-primary-dark: #2DA892;  /* Hover/pressed state */
  --color-primary-light:#7DDECE;  /* Soft accent */
  --color-primary-mist: #E8FAF6;  /* Subtle bg, hover tint */
}
```

**ใช้ `--color-primary` เมื่อ:**
- ✅ Logo, icon ที่เป็น brand element
- ✅ Eyebrow text เหนือ heading
- ✅ Active navigation link
- ✅ Check icon (feature list, included)
- ✅ Billing toggle background
- ❌ ปุ่ม CTA (ใช้ gradient แทน)
- ❌ Body text (contrast ต่ำ)

---

## 🌈 Background Gradient — `#35B0A6 → #4CD6AA`

> ใช้สำหรับ **พื้นหลัง section, card header, decorative area**
> เริ่มจาก teal เข้มกว่า primary → จบที่ mint-green อ่อนกว่า

```css
:root {
  --gradient-bg:       linear-gradient(135deg, #35B0A6 0%, #4CD6AA 100%);
  --gradient-bg-90:    linear-gradient(90deg,  #35B0A6 0%, #4CD6AA 100%);
  --gradient-bg-180:   linear-gradient(180deg, #35B0A6 0%, #4CD6AA 100%);
  --gradient-bg-start: #35B0A6;
  --gradient-bg-end:   #4CD6AA;
}
```

**ใช้เมื่อ:**
- ✅ Ribbon "Best value" บน pricing card
- ✅ CTA banner section background
- ✅ Hero card/stage gradient
- ✅ Feature card header tint
- ❌ ใช้เป็น text color (ใช้ `--gradient-font` แทน)

---

## ✍️ Font Gradient — `#5CC3B4 → #15A591`

> ใช้สำหรับ **ตัวอักษร gradient** — heading accent, highlight keyword
> เริ่มจาก teal กลาง → จบที่ teal เข้มกว่า (สีลึก มีความชัดเจนกว่า bg gradient)

```css
:root {
  --gradient-font:       linear-gradient(90deg, #5CC3B4 0%, #15A591 100%);
  --gradient-font-135:   linear-gradient(135deg, #5CC3B4 0%, #15A591 100%);
  --gradient-font-start: #5CC3B4;
  --gradient-font-end:   #15A591;
}
```

**ใช้กับตัวอักษร (CSS background-clip: text):**
```css
.text-gradient {
  background: var(--gradient-font);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**ใช้เมื่อ:**
- ✅ Keyword เน้นใน hero heading (เช่น "AI แบบไร้ขีดจำกัด" ที่ต้องการ pop)
- ✅ Section title highlight
- ✅ Price text gradient (แทน solid teal)
- ❌ Body text ทั่วไป (อ่านยาก)
- ❌ Button text (ใช้ white แทน)

---

## ⬛ Near-black — `#1C1C22` ⭐ (v3.1 Primary Dark)

> สีเข้มหลักของ Onebear web v3.1 — **ใช้ทุกจุด**: heading, body text, ปุ่ม, footer
> เข้มกว่า brand Dark Gray `#313937` เล็กน้อย — premium feel, contrast สูงกว่า

```css
:root {
  --color-dark:        #1C1C22;  /* Near-black — heading, text, button, footer ⭐ */
  --color-dark-80:     rgba(28,28,34,0.80);
  --color-dark-50:     rgba(28,28,34,0.50);  /* Footer links, muted */
  --color-dark-20:     rgba(28,28,34,0.20);  /* Overlay, subtle bg */
}
```

> 🔄 **v3.1 (เว็บ landing):** `#1C1C22` = **สีเข้มหลักทุกอย่าง** — heading, body text เข้ม, ปุ่ม CTA, footer bg → `#313937` (brand original) เลิกใช้ใน web UI

**ใช้เมื่อ:**
- ✅ Heading text หลักทั้งหมด (H1–H5)
- ✅ Body text เข้ม (article, description)
- ✅ ปุ่ม CTA dark (glow-button, btn-dark, btn-dark-hero)
- ✅ Footer background
- ❌ Pure black — `#1C1C22` เป็น near-black เสมอ ไม่ใช้ `#000000`

---

## 🩷 Pastel Pink — `#FFBEBF`

> สีอ่อนอบอุ่น — ใช้สำหรับ **illustration accent, mascot detail** เท่านั้น
> ให้ความรู้สึก เป็นมิตร อบอุ่น เข้าหาได้

```css
:root {
  --color-pink:       #FFBEBF;  /* Pastel Pink — mascot/illustration */
  --color-pink-dark:  #F09597;  /* Pink pressed/shadow */
  --color-pink-light: #FFE0E0;  /* Very soft pink bg */
}
```

**ใช้เมื่อ:**
- ✅ แก้มมาสคอตหมี (blush)
- ✅ Spot accent ใน illustration เพื่อเพิ่มความอบอุ่น
- ✅ Heart/love icon, success micro-animation
- ❌ UI element ทั่วไป — สงวนไว้สำหรับ illustration เท่านั้น
- ❌ Text หรือ button

---

## 🌫️ Neutral Colors — Grayscale (UI)

> ระบบ grayscale สำหรับ text, background, border ทั่วไปของ UI

| Token | HEX | Name | Usage |
|---|---|---|---|
| `--color-neutral-1000` | `#1C1C22` | **Near-black** ⭐ | = brand dark v3.1 — heading/text หลัก |
| `--color-neutral-900`  | `#334155` | Slate | Body text |
| `--color-neutral-800`  | `#525260` | Secondary | Secondary text, description |
| `--color-neutral-700`  | `#64748B` | Muted | Tertiary, placeholder |
| `--color-neutral-600`  | `#94A3B8` | Subtle | Disabled text |
| `--color-neutral-500`  | `#CBD5E1` | Border Strong | Border เข้ม |
| `--color-neutral-400`  | `#DFDFE8` | Border | Border ปกติ |
| `--color-neutral-300`  | `#ECECF1` | Cloud | Background subtle |
| `--color-neutral-200`  | `#F1F5F9` | Section | Background section (FAQ) |
| `--color-neutral-100`  | `#FFFFFF` | White | Background หลัก, card |

```css
:root {
  --color-neutral-1000: #1C1C22;   /* = --color-dark (v3.1) */
  --color-neutral-900:  #334155;
  --color-neutral-800:  #525260;
  --color-neutral-700:  #64748B;
  --color-neutral-600:  #94A3B8;
  --color-neutral-500:  #CBD5E1;
  --color-neutral-400:  #DFDFE8;
  --color-neutral-300:  #ECECF1;
  --color-neutral-200:  #F1F5F9;
  --color-neutral-100:  #FFFFFF;
}
```

---

## 🌑 Special: Dark Footer

```css
:root {
  --color-footer-bg:     #0C0B15;              /* อาจใช้ dark ตาม Figma */
  /* หรือ */
  --color-footer-bg-alt: var(--color-dark);    /* #1C1C22 near-black (v3.1) */
  --color-footer-text:   rgba(255,255,255,0.5);
  --color-footer-border: rgba(255,255,255,0.08);
}
```

> 💡 v3.1 footer ใช้ `#1C1C22` (= `--color-dark`) — ยืนยันแล้ว

---

## 🎯 Status Colors

| Token | HEX | Usage |
|---|---|---|
| `--color-success` | `#41C3A8` | = Primary Teal — success state |
| `--color-error`   | `#DE3A45` | Error, fail |
| `--color-warning` | `#FFB31A` | Warning |
| `--color-info`    | `#5CC3B4` | Info (= gradient-font start) |

---

## 🎨 Semantic Tokens

```css
:root {
  /* Text */
  --color-text-heading:   var(--color-dark);          /* #1C1C22 */
  --color-text-body:      var(--color-neutral-900);   /* #334155 */
  --color-text-secondary: var(--color-neutral-800);   /* #525260 */
  --color-text-muted:     var(--color-neutral-700);   /* #64748B */
  --color-text-disabled:  var(--color-neutral-600);   /* #94A3B8 */
  --color-text-inverse:   #FFFFFF;
  --color-text-brand:     var(--color-primary);       /* #41C3A8 */
  --color-text-price:     var(--color-primary);       /* #41C3A8 solid หรือ gradient */

  /* Background */
  --color-bg-base:        #FFFFFF;
  --color-bg-section:     var(--color-neutral-200);   /* #F1F5F9 */
  --color-bg-subtle:      var(--color-neutral-300);   /* #ECECF1 */
  --color-bg-card:        #FFFFFF;
  --color-bg-brand-soft:  var(--color-primary-mist);  /* #E8FAF6 */
  --color-bg-dark:        var(--color-dark);          /* #313937 */

  /* Border */
  --color-border-default: var(--color-neutral-400);   /* #DFDFE8 */
  --color-border-card:    #F6F6F8;
  --color-border-brand:   var(--color-primary);       /* #41C3A8 */
  --color-border-teal-soft: rgba(65,195,168,0.35);    /* Teal 35% — secondary btn */

  /* CTA */
  --color-cta-bg:         var(--gradient-bg);         /* teal gradient bg */
  --color-cta-dark:       var(--color-button-dark);   /* #1C1C22 — primary CTA button (v3.1) */
  --color-cta-text:       #FFFFFF;
}
```

---

## ♿ Accessibility — Contrast

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| Dark Gray `#313937` | White | 12.5:1 | AAA |
| Slate `#334155` | White | 9.5:1 | AAA |
| White | Dark Gray `#313937` | 12.5:1 | AAA |
| White | Button `#1C1C22` | ~16:1 | AAA (ปุ่ม CTA v3.1) |
| White | Primary Teal `#41C3A8` | 2.1:1 | ⚠️ Large/bold เท่านั้น |
| Primary Teal `#41C3A8` | White | 2.1:1 | ⚠️ eyebrow/large text เท่านั้น |
| Dark Gray `#313937` | Teal Mist `#E8FAF6` | 11:1 | AAA |

> ⚠️ **White บน Teal** contrast ต่ำ — ปุ่มต้องใช้ตัวอักษร **≥ 14px semi-bold** เสมอ
> ✅ **White บน Dark Gray `#313937`** contrast สูง — ปลอดภัยสำหรับทุกขนาด

---

## 🔗 Related

- [[02_Typography]] — Font Gradient text style
- [[03_Spacing]] — shadow, background
- [[04_Buttons]] — gradient CTA
- [[05_Brand-Assets]] — logo colors
- [[00_README]] — ภาพรวม

---

> 🎨 **5 สีจาก Brand Guide: Teal `#41C3A8` · BG Gradient `#35B0A6→#4CD6AA` · Font Gradient `#5CC3B4→#15A591` · Dark `#313937` · Pink `#FFBEBF`**
