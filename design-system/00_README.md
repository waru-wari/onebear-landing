---
type: index
tags: [design-system, brand/onebear, status/active]
status: active
created: 2026-06-03
category: index
brand_scope: onebear
based_on: Makub Design System (โครงเดียวกัน)
---

# 🐻 Onebear Website Design System

> ระบบดีไซน์สำหรับเว็บไซต์ **Onebear** — โครงตามแนวทาง Makub design system แต่ปรับให้เข้ากับ identity ของ Onebear
>
> **Single source of truth** ของ token สี / ตัวอักษร / ระยะห่าง / ปุ่ม ทั้งหมด — ทุกหน้า ทุก component อ้างอิงจากที่นี่

---

## 🎭 Brand Personality

Onebear เป็น **แพลตฟอร์มรวมแชทที่เป็นมากกว่าระบบรวมแชท** — เปรียบเหมือน "เพื่อนร่วมทีม" ที่ช่วยให้เจ้าของร้านและแอดมินดูแลลูกค้าได้ดีขึ้น ตั้งแต่เปิดร้าน ระหว่างวัน ไปจนถึงช่วงที่เหนื่อยล้าจากการขาย โทนของแบรนด์คือ "เพื่อนที่อยู่ข้างคนขายออนไลน์" — อบอุ่น เข้าใจ ไม่ทอดทิ้ง

> 📦 **สินค้า:** Onebear = **แพลตฟอร์มรวมแชทหลายช่องทางพร้อม AI** สำหรับเจ้าของร้านค้าออนไลน์ — รวม Facebook, LINE OA, Instagram, WhatsApp ในจอเดียว ตอบอัตโนมัติด้วย AI ที่ฝึกจากข้อมูลร้านคุณเอง
>
> 🐻 **Mascot:** หมีขาวใส่ผ้ากันเปื้อนสีเขียวเทียล — สื่อถึงความเป็น "พนักงานร้านที่พร้อมช่วยเสมอ"

| ลักษณะ | แปลเป็นดีไซน์ |
|---|---|
| **Friendly** | มาสคอตหมีอบอุ่น, มุมโค้งมน, สีเทียลสดใส |
| **Helpful** | UI สะอาด ชัดเจน ใช้ง่าย ไม่ซับซ้อน |
| **Warm** | โทนสีอุ่น, spacing ใจป้ำ, typography อ่านสบาย |
| **Professional** | layout เป็นระเบียบ, white space เยอะ, ไม่รก |

---

## 🎨 Brand at a Glance

> อ้างอิงจาก **Brand Guide (ยืนยันแล้ว)** · ดูสีเต็มที่ [[01_Colors]]

| Element | Value |
|---|---|
| **Primary color** | `#41C3A8` — Teal (Primary Logo) |
| **BG Gradient** | `#35B0A6 → #4CD6AA` — Background/card gradient |
| **Font Gradient** | `#5CC3B4 → #15A591` — Text gradient (heading accent) |
| **Dark** | `#313937` — Dark Gray (heading text, dark CTA) |
| **Accent warm** | `#FFBEBF` — Pastel Pink (mascot blush, illustration) |
| **Font** | Gofive — ✅ ไฟล์อยู่ใน `fonts/` แล้ว (4 น้ำหนัก) |
| **Assets** | ✅ Logo ครบทุก variant อยู่ใน `assets/` แล้ว |
| **Spacing** | 4px base, premium product modern |
| **Radius** | โค้งมน — pricing card 22–24px, button pill |

> ⚠️ **อัปเดต v3 (เว็บ landing):** Primary CTA = **Dark Gray `#313937`** (ไม่ใช่ gradient อีกต่อไป), teal = accent · **letter-spacing 0 ทั้งหมด** · page bg = **cream `#faf9f5`** · loss stat = **red `#E5484D`** → รายละเอียดที่ [[08_Landing-v3]]

---

## 🗂️ File Map

| File | เนื้อหา | ใช้เมื่อ |
|---|---|---|
| [[01_Colors]] | สี token ทั้งหมด + semantic tokens | ทุกครั้งที่เลือกสี |
| [[02_Typography]] | ฟอนต์ Gofive, type scale, น้ำหนัก | กำหนดขนาด/น้ำหนักตัวอักษร |
| [[03_Spacing]] | ระยะห่าง premium, section, radius, shadow | จัด layout, ช่องว่าง, มุมโค้ง |
| [[04_Buttons]] | ปุ่ม — variant, state, gradient CTA | ทำปุ่มทุกชนิด |
| [[05_Brand-Assets]] | logo + มาสคอต + กฎการใช้ | วาง logo / มาสคอตบนหน้า |
| [[06_Icons]] | ไอคอน — outlined rounded → filled เมื่อ active | เลือก/ใช้ไอคอน |
| [[07_Web-Patterns]] | บริบทสินค้า + pattern section เว็บ (hero, pricing, CTA, FAQ) | ทำหน้า/section เว็บ |
| [[08_Landing-v3]] | ⭐ การตัดสินใจ/แพทเทิร์น landing **v3** (override ปุ่ม/typography/สี) | ทำหน้า landing (ล่าสุด) |

---

## 🚦 หลักการสำคัญ 5 ข้อ

1. **ใช้ token ไม่ใช่ HEX** — `var(--color-primary-500)` ไม่ใช่ `#41C3A8`
2. **Primary CTA = Dark Gray `#313937`** — (อัปเดต v3) ปุ่มหลักใช้ดำ · gradient/teal = accent เท่านั้น → ดู [[04_Buttons]] · [[08_Landing-v3]]
3. **Teal ใช้เน้นเฉพาะจุด** — eyebrow/accent/active state ไม่ใช่ background หลัก และ "อย่าใส่พร่ำเพรื่อ" (โทน aave: นิ่ง)
4. **Letter-spacing = 0** — ฟอนต์ไทยไม่ใส่ tracking ติดลบ (ตัวชนกัน) → ดู [[02_Typography]]
5. **White space = Premium** — ใจป้ำกับช่องว่าง (section 96/160px), flat > card อย่าให้รก → ดู [[03_Spacing]]
6. **มาสคอตสร้าง moment** — ใช้เน้นจุดสำคัญ ไม่ใช้พร่ำเพรื่อ → ดู [[05_Brand-Assets]]

---

## 🔗 อ้างอิง

- โครงสร้างและ format มาจาก `Makub Design System` (sibling vault)
- Neutral palette เหมือนกับ makub/empeo
- ส่วนที่ต่างจาก makub: **Primary = Teal `#41C3A8`** (ไม่ใช่ Iris ม่วง) และ **CTA = brand gradient** (ไม่ใช่ LINE Green)
- Color source: **Brand Guide (ยืนยัน 5 สีหลัก)**
- Figma reference: `Q2-2026-Webdesign` node `4116-4793` (landing page), `3842-132812` (pricing/FAQ)

---

> 🐻 **Onebear = Teal `#41C3A8` · BG Gradient `#35B0A6→#4CD6AA` · Font Gradient `#5CC3B4→#15A591` · Dark `#313937` · Pink `#FFBEBF`**
