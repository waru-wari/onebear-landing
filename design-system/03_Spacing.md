---
type: foundation
tags: [foundation, brand/onebear, status/active]
status: active
created: 2026-06-03
category: spacing
token_format: css-variable
brand_scope: onebear
---

# 📏 Spacing, Radius & Elevation

> Spacing system ของ Onebear — **Premium product modern**
> เน้น white space เยอะ, proximity ชัด, มุมโค้งมน, เงานุ่ม ดูมีราคา

---

## 🎯 หลักการ

1. **4px base scale** — ทุก spacing เป็น multiple ของ 4
2. **Premium = white space** — ใจป้ำกับช่องว่าง อย่ายัด content
3. **Proximity ชัด** — ของที่เกี่ยวข้องอยู่ใกล้, ไม่เกี่ยวข้องอยู่ไกล
4. **Responsive scale** — desktop ช่องว่างเยอะ, mobile ลดลง 50-60%
5. **โค้งมน + เงานุ่ม** — สื่อความเป็นมิตร แต่ไม่ฟุ้ง

---

## 📐 Base Scale (4px-base)

| Token | Value | Pixel | Usage |
|---|---|---|---|
| `--space-0` | `0` | 0px | Reset |
| `--space-1` | `0.25rem` | 4px | Hairline, icon padding |
| `--space-2` | `0.5rem` | 8px | Tight grouping, badge |
| `--space-3` | `0.75rem` | 12px | Compact, button padding-y |
| `--space-4` | `1rem` | 16px | Default, button padding-x |
| `--space-5` | `1.25rem` | 20px | Comfortable, card gap |
| `--space-6` | `1.5rem` | 24px | Card padding, form gap |
| `--space-8` | `2rem` | 32px | Section gap (small) |
| `--space-10` | `2.5rem` | 40px | Component gap (medium) |
| `--space-12` | `3rem` | 48px | Section padding (small) |
| `--space-16` | `4rem` | 64px | Section gap (medium) |
| `--space-20` | `5rem` | 80px | Section padding (medium) |
| `--space-24` | `6rem` | 96px | Section gap (large) |
| `--space-32` | `8rem` | 128px | Section padding (large) — **Premium** |
| `--space-40` | `10rem` | 160px | Hero section padding |

```css
:root {
  --space-0: 0;       --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;    --space-5: 1.25rem;  --space-6: 1.5rem;   --space-8: 2rem;
  --space-10: 2.5rem; --space-12: 3rem;    --space-16: 4rem;    --space-20: 5rem;
  --space-24: 6rem;   --space-32: 8rem;    --space-40: 10rem;
}
```

---

## 🎨 Semantic Spacing

### Component & Stack

```css
:root {
  --space-component-xs: var(--space-2);  /* 8px - badge */
  --space-component-sm: var(--space-3);  /* 12px - small button */
  --space-component-md: var(--space-4);  /* 16px - button, input */
  --space-component-lg: var(--space-6);  /* 24px - card */
  --space-component-xl: var(--space-8);  /* 32px - large card */

  --space-stack-xs: var(--space-2);   /* 8px */
  --space-stack-sm: var(--space-4);   /* 16px */
  --space-stack-md: var(--space-6);   /* 24px */
  --space-stack-lg: var(--space-8);   /* 32px */
  --space-stack-xl: var(--space-12);  /* 48px */
}
```

### Section Spacing (Website) ⭐

```css
:root {
  --space-section-mobile:  var(--space-16);  /* 64px */
  --space-section-tablet:  var(--space-24);  /* 96px */
  --space-section-desktop: var(--space-32);  /* 128px ⭐ premium */

  --space-hero-mobile:  var(--space-20);     /* 80px */
  --space-hero-tablet:  var(--space-32);     /* 128px */
  --space-hero-desktop: var(--space-40);     /* 160px */
}
```

### Container & Content

```css
:root {
  --container-max-width: 1440px;            /* Onebear layout wider */
  --container-inner-max: 1200px;            /* Content area */
  --container-padding-mobile:  var(--space-4);   /* 16px */
  --container-padding-tablet:  var(--space-8);   /* 32px */
  --container-padding-desktop: var(--space-10);  /* 40px */

  --content-max-width-narrow: 640px;
  --content-max-width-medium: 840px;
  --content-max-width-wide:   1200px;
}
```

---

## 📊 Onebear Section Hierarchy

| Section Type | Mobile | Desktop | ตัวอย่าง |
|---|---|---|---|
| **Hero** | 80px | **160px** | Hero heading + product mockup |
| **Standard** | 64px | **120–128px** ⭐ | Pricing, features, benefits |
| **CTA Banner** | 60px | **60px** | gradient CTA section (กะทัดรัด) |
| **FAQ** | 80px | **120px** | FAQ accordion |
| **Footer** | 80px | **80px** | Footer (ปรับตาม Figma) |

---

## 🔘 Border Radius — Onebear Tiers

> มุมโค้งมน = personality ของ Onebear — สอดคล้องกับมาสคอตหมีตัวกลม ๆ

| Token | Value | Usage |
|---|---|---|
| `--radius-none` | `0` | ตาราง, full-bleed |
| `--radius-sm` | `6px` | Badge, tag เล็ก |
| `--radius-md` | `10px` | Input, chip |
| `--radius-lg` | `14px` | ปุ่มเล็ก, tab |
| `--radius-xl` | `20px` | Card FAQ, modal |
| `--radius-2xl` | `24px` | **Pricing card** ⭐, Add-on card |
| `--radius-3xl` | `28px` | Ribbon "Best value", feature block ใหญ่ |
| `--radius-pill` | `999px` | Pill button, billing toggle, chip |
| `--radius-full` | `50%` | Avatar กลม, icon circle |

```css
:root {
  --radius-none: 0;
  --radius-sm:   6px;
  --radius-md:   10px;
  --radius-lg:   14px;
  --radius-xl:   20px;
  --radius-2xl:  24px;    /* Pricing card - จาก Figma */
  --radius-3xl:  28px;
  --radius-pill: 999px;
  --radius-full: 50%;
}
```

> 💡 **Pricing card** = `--radius-2xl` (22px จาก Figma, แปลงเป็น 24px token)
> 💡 **ปุ่ม CTA pill** = `--radius-pill` (400px จาก Figma)

---

## 🪞 Elevation (Shadows)

> เงานุ่ม โทนเทาเข้ม (ไม่มี tint สี เพราะ Onebear ต่างจาก makub)

| Token | Value | Usage |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift, card border แทน |
| `--shadow-sm` | `0 4px 20px rgba(0,0,0,0.06)` | Add-on card default |
| `--shadow-md` | `0 8px 10px rgba(0,0,0,0.04)` | Navbar sticky |
| `--shadow-lg` | `0 12px 40px rgba(0,0,0,0.08)` | **Pricing card** ⭐ |
| `--shadow-faq` | `0 16px 40px rgba(97,97,97,0.10)` | FAQ card |
| `--shadow-cta` | `0 8px 10px rgba(0,0,0,0.04)` | CTA section button |

```css
:root {
  --shadow-xs:  0 1px 2px rgba(0,0,0,0.05);
  --shadow-sm:  0 4px 20px rgba(0,0,0,0.06);
  --shadow-md:  0 8px 10px rgba(0,0,0,0.04);
  --shadow-lg:  0 12px 40px rgba(0,0,0,0.08);
  --shadow-faq: 0 16px 40px rgba(97,97,97,0.10);
  --shadow-cta: 0 8px 10px rgba(0,0,0,0.04);
}
```

---

## 🎯 Common Patterns

### Pricing Card
```css
.pricing-card {
  background: white;
  border: 1px solid var(--color-border-card);   /* F6F6F8 */
  border-radius: var(--radius-2xl);             /* 24px */
  box-shadow: var(--shadow-lg);                 /* 12px 40px */
  padding: 1px;
  width: 288px;
}
```

### Best Value Ribbon
```css
.pricing-ribbon {
  position: absolute;
  inset-inline: 28px;
  top: -35px;
  border-radius: var(--radius-3xl) var(--radius-3xl) 0 0;
  background: var(--gradient-cta);              /* teal→cyan */
  padding-bottom: 28px;                         /* ซ่อนก้นใต้การ์ด */
  padding-top: 8px;
  text-align: center;
}
```

### FAQ Card
```css
.faq-card {
  background: white;
  border-radius: var(--radius-xl);              /* 20px */
  box-shadow: var(--shadow-faq);
  padding: var(--space-5);                      /* 20px */
  width: 100%;
}
```

### Add-On Card
```css
.addon-card {
  background: white;
  border-radius: var(--radius-2xl);             /* 24px */
  box-shadow: var(--shadow-sm);                 /* 4px 20px */
  padding: var(--space-5);                      /* 20px */
  min-height: 180px;
  display: flex;
  gap: var(--space-5);
}
```

---

## 🎨 Premium Principles

1. **White Space is Free** — สงสัยเมื่อไหร่ → เพิ่ม space
2. **Hierarchy via Spacing** — ช่องว่างใหญ่ = break ใหญ่
3. **Radius สม่ำเสมอ** — element กลุ่มเดียวกันใช้ radius เดียวกัน (pricing card ทุกใบ = `--radius-2xl`)

---

## 🔗 Related

- [[01_Colors]] — สีของเงา/พื้น
- [[02_Typography]] — line-height
- [[04_Buttons]] — radius + shadow ของปุ่ม
- [[00_README]] — ภาพรวม

---

> 📏 **White space = Premium** + 🔘 **radius-2xl = Pricing card** + 🪞 **เงาเทาอ่อน = clean**
