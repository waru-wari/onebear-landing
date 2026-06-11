---
type: component
tags: [component, atom, brand/onebear, status/active]
status: active
created: 2026-06-03
category: button
brand_scope: onebear
uses: [[01_Colors]], [[02_Typography]], [[03_Spacing]]
---

# 🔘 Buttons

> ปุ่มของ Onebear — มี 3 ระดับ: **Gradient CTA** (featured), **Dark CTA** (hero/nav), **Teal Outline** (secondary)
> ต่างจาก makub ที่ใช้ LINE Green — Onebear ใช้ gradient แบรนด์ของตัวเอง

> 🔄 **อัปเดต v3.1 (ใช้กับเว็บ landing — ยึดอันนี้):** **Primary CTA = Near-black `#1C1C22`** (pill, hover opacity .9, ไม่มี glow) ทุกจุด — hero / form / CTA section
> · _(v3 เดิมใช้ `#313937` → v3.1 เข้มขึ้นเป็น `#1C1C22`; `#313937` สงวนไว้เป็น text/heading/footer/tab เท่านั้น)_
> · **Teal gradient `#35B0A6→#4CD6AA` ลดเป็น accent** (เช่น active tab) ไม่ใช่ปุ่ม CTA หลักอีกต่อไป
> · เหตุผล: ขาวบนดำ ~16:1 (AAA), premium กว่า, ทำให้ teal เด้งเฉพาะจุด → ดู [[08_Landing-v3]]

---

## 📐 กฎ Responsive & Sizing (Landing Page — ใช้เป็นมาตรฐาน)

| Property | Value | Note |
|---|---|---|
| **Padding** | `px-8 py-3` (32px / 12px) | ทุกปุ่มทั้งหน้า — button height ~44px |
| **Text size** | `text-sm` = 14px | ห้ามใช้ `text-body-md` หรือ `text-[13px]` ใน button |
| **Font weight** | `font-semibold` | |
| **Icon (arrow)** | `material-symbols-outlined` `font-size:18px` | ทุกปุ่มที่มี arrow ใช้ขนาดนี้ |
| **Mobile width** | `280px` + `justify-content:center` | ผ่าน CSS `@media (max-width:767px) { .glow-button { width:280px; … } }` |
| **CTA text** | **"เริ่มใช้งานฟรี"** | ใช้ข้อความเดียวทั้งหน้า ห้ามมีหลาย variant |
| **CTA href** | `https://app.onebear.ai/register` | ทุกปุ่มนำไปจุดเดียวกัน |
| **Pricing (w-full)** | `py-2.5` เท่านั้น (ไม่มี px) | ปุ่มใน pricing card ใช้ `w-full` ไม่ใช้ `width:280px` |

---

## ⚠️ กฎสำคัญ — สีปุ่ม

| ระดับปุ่ม | สี | ใช้เมื่อ |
|---|---|---|
| **Primary Gradient** | 🩵 `#35B0A6→#4CD6AA` BG gradient | ปุ่ม featured — Growth plan, CTA section, ribbon |
| **Primary Dark** | ⚫ Dark Gray `#313937` | ปุ่ม hero, navbar "เริ่มใช้งานฟรี" |
| **Secondary Outline** | 🩵 Teal outline | ปุ่ม Free/Starter plan, secondary action |
| **Tertiary / Text** | 🩵 Teal text | link-like, action เบา |

> ❌ **ห้าม** ใช้ Teal ล้วนเป็น background ปุ่ม CTA (ใช้ gradient หรือ dark แทน)
> ✅ Teal สงวนไว้สำหรับ outline, accent, eyebrow

---

## 🩵 Primary Gradient (`#35B0A6 → #4CD6AA`)

ปุ่ม featured — "ทดลองใช้งานฟรี 14 วัน", Growth plan CTA

```css
.btn-primary-gradient {
  background: var(--gradient-bg);               /* #35B0A6 → #4CD6AA */
  color: white;
  font-family: var(--font-family-base);
  font-size: var(--font-size-small-strong);     /* 14px semi-bold */
  font-weight: var(--font-weight-semibold);
  padding: var(--space-3) var(--space-8);       /* 12px 32px */
  border: none;
  border-radius: var(--radius-pill);            /* 400px */
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-cta);
  transition: background .15s ease, box-shadow .15s ease;
}
.btn-primary-gradient:hover {
  background: var(--gradient-cta-hover);
  box-shadow: 0 12px 20px rgba(0,0,0,0.08);
}
.btn-primary-gradient:active { transform: translateY(1px); }
```

> 💡 ใช้กับ: Growth plan, "ทดลองใช้งานฟรี", ribbon "Best value" (ใช้ gradient เดียวกัน)

---

## ⚫ Primary Dark (Hero / Navbar)

ปุ่ม premium — "เริ่มใช้งานฟรี" ใน hero section และ navbar

```css
.btn-primary-dark {
  background: var(--color-dark);                /* #313937 */
  color: white;
  font-family: var(--font-family-base);
  font-size: var(--font-size-title);            /* 16px */
  font-weight: var(--font-weight-bold);
  padding: var(--space-4) var(--space-10);      /* 16px 40px */  /* hero size */
  border: none;
  border-radius: var(--radius-pill);
  cursor: pointer;
  box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.2), inset 0 0 0 rgba(0,0,0,0.2);
  transition: opacity .15s ease;
}
.btn-primary-dark:hover { opacity: 0.88; }
```

> 💡 ใช้กับ: hero section CTA, navbar "เริ่มใช้งานฟรี", standalone full-width CTA

### Navbar size (compact)

```css
.btn-primary-dark.btn-sm {
  font-size: var(--font-size-body);           /* 14px */
  padding: var(--space-2) var(--space-4);    /* 8px 16px */
}
```

---

## 🩵 Secondary — Teal Outline

ปุ่ม Free plan, Starter plan "เริ่มใช้งานฟรี" และ secondary action ทั่วไป

```css
.btn-secondary {
  background: transparent;
  color: var(--color-primary-500);            /* #00C48C */
  border: 1px solid rgba(0,196,140,0.35);     /* Teal 35% */
  font-family: var(--font-family-base);
  font-size: var(--font-size-small-strong);   /* 14px */
  font-weight: var(--font-weight-semibold);
  padding: var(--space-3) var(--space-1);     /* 12px 1px */
  border-radius: var(--radius-pill);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background .15s ease, border-color .15s ease;
}
.btn-secondary:hover {
  background: var(--color-primary-50);        /* Teal Mist */
  border-color: var(--color-primary-500);
}
```

> 💡 ใช้กับ: Free plan button, Starter plan button, secondary action ที่ไม่ใช่ CTA หลัก

---

## 🔗 Tertiary / Text

```css
.btn-text {
  background: none;
  border: none;
  color: var(--color-primary-300);            /* Brand Teal */
  font: var(--font-weight-medium) var(--font-size-title)/var(--line-height-title) var(--font-family-base);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  cursor: pointer;
}
.btn-text:hover { color: var(--color-primary-500); text-decoration: underline; }
```

---

## 📐 Button System (Tailwind) ⭐

> ขนาดมาตรฐานทั้งเว็บ = **`px-8 py-3` (32/12px) · text-sm 14px semibold · rounded-full**

```css
/* <style type="text/tailwindcss"> */
.btn         { @apply inline-flex items-center justify-center gap-2 rounded-full transition-all; }
.btn-gradient  { @apply bg-gradient-to-r from-[#35B0A6] to-[#4CD6AA] text-white text-sm font-semibold px-8 py-3 shadow-[0_8px_10px_rgba(0,0,0,0.04)] hover:opacity-90; }
.btn-dark      { @apply bg-[#313937] text-white text-sm font-semibold px-4 py-2; }
.btn-dark-hero { @apply bg-[#313937] text-white text-base font-bold px-10 py-4; }
.btn-outline { @apply border border-[rgba(0,196,140,0.35)] text-[#00C48C] text-sm font-semibold py-[13px] px-1 w-full hover:bg-[#E8FAF6]; }
.btn-iris    { @apply border-[1.5px] border-[#dfdfe8] text-[#525260] text-sm font-semibold px-4 py-2 hover:border-[#41C3A8] hover:text-[#41C3A8]; }  /* Login button */
.btn-block   { @apply w-full; }
```

ใช้: `class="btn btn-gradient"` / `"btn btn-dark"` / `"btn btn-outline"` / `"btn btn-dark-hero"`

---

## 📐 Sizes

| Size | Padding (y / x) | Font | Radius | Use |
|---|---|---|---|---|
| **Navbar** | 8px / 16px | 14px semi-bold | pill | Login/Register ใน navbar |
| **Card** ⭐ | 12px / auto | 14px semi-bold | pill | Pricing card CTA, full-width |
| **Hero** | 20px / 40px | 16px bold | pill | Hero standalone CTA |

---

## 🧩 States

| State | Gradient | Dark | Outline |
|---|---|---|---|
| Default | teal→cyan gradient | `#1C1C22` + subtle gradient | border teal 35%, text teal |
| Hover | `hover:opacity-90` / lighter gradient | `opacity: 0.88` | bg Teal Mist |
| Active | `translateY(1px)` | กดลง 1px | bg Soft Teal |
| Focus | outline Teal Light 3px | outline Teal Light 3px | outline Teal Light 3px |
| Disabled | bg Silver, text white | bg Silver | border/text disabled grey |

---

## ✅ Do / ❌ Don't

- ✅ ปุ่ม CTA featured = gradient `#00C48C→#06B6D4` เสมอ
- ✅ ปุ่ม hero/navbar = dark `#1C1C22` (premium feel)
- ✅ ปุ่ม secondary/pricing = teal outline (ไม่ใช่ gradient)
- ✅ ตัวอักษรปุ่ม ≥ 14px semi-bold
- ✅ ปุ่ม CTA ใน hero ใช้ `btn-dark-hero` (padding ใหญ่กว่า)
- ❌ ปุ่ม CTA หลายปุ่มแย่งกันใน section เดียว
- ❌ ปุ่มตัวอักษรเล็กหรือน้ำหนักบาง (อ่านยากบน gradient)

---

## 🔗 Related

- [[01_Colors]] — gradient tokens
- [[02_Typography]] — ขนาดตัวอักษรปุ่ม
- [[03_Spacing]] — padding, radius
- [[00_README]] — ภาพรวม

---

> 🩵 **Gradient = featured CTA** + ⚫ **Dark = hero/nav** + outline = secondary — ไม่ใช้ teal solid เป็น bg ปุ่ม
