---
type: patterns
tags: [patterns, web, brand/onebear, status/active]
status: active
created: 2026-06-03
category: web-patterns
brand_scope: onebear
---

# 🧩 Web Section Patterns

> Section/หน้าเว็บมาตรฐานของ Onebear — โครงเนื้อหาและ pattern สรุปจาก Figma `Q2-2026-Webdesign`
> อ้างอิง token จาก [[01_Colors]] · [[02_Typography]] · [[03_Spacing]] · [[04_Buttons]]

---

## 🏷️ Section Header (eyebrow + heading) — มาตรฐาน

| ส่วน | สเปก |
|---|---|
| **Eyebrow** | Gofive Medium 500 · **12–14px** · uppercase · `letter-spacing: 0.04em` · สี `#41C3A8` (Brand Teal) · ห่างจาก heading `--space-2` (8px) |
| **Heading (H1/H2)** | Gofive Bold 700 · `text-[32px]` → `md:text-[48px]` · tracking-tight · ink-1100 |
| **Subheading** | Gofive Medium 500 · 16px · สี `#16161B` / `#525260` · max-width 640px center |

```html
<span class="text-[12px] font-medium text-[#41C3A8] uppercase tracking-[0.04em]">ราคา</span>
<h2 class="text-[48px] font-bold text-[#0A0F1C] leading-[72px]">ปลดล็อกด้วยพลัง AI</h2>
```

---

## 🟢 Corner Radius Tiers

| ชนิด | radius | ตัวอย่าง |
|---|---|---|
| **Pricing card** | **22–24px** `rounded-[22px]` | ทุก pricing card ทั้ง 3 tier |
| **FAQ card** | **20px** `rounded-[20px]` | accordion item แต่ละข้อ |
| **Add-on card** | **24px** `rounded-[24px]` | add-on grid item |
| **Button** | **999px** `rounded-full` | ปุ่มทุกชนิด (pill) |
| **Billing toggle** | **999px** `rounded-full` | toggle รายเดือน/รายปี |
| **Badge/Tag** | **6px** `rounded-[6px]` | "Add-on" badge |
| **Best value ribbon** | top 22–24px `rounded-t-[22px]` | ribbon เหนือ pricing card |

---

## 🎯 Product Positioning (สำคัญ — บริบทสินค้า)

> **Onebear = แพลตฟอร์มรวมแชทที่เป็นมากกว่าระบบรวมแชท**

| | |
|---|---|
| คือ | แพลตฟอร์มรวมแชทหลายช่องทาง + AI Assistant สำหรับเจ้าของร้านออนไลน์ |
| ช่องทาง | Facebook Messenger, LINE OA, Instagram, WhatsApp และอีกหลายช่องทาง |
| AI features | ตอบอัตโนมัติ (ฝึกจากข้อมูลร้าน), Smart Handoff ส่งต่อแอดมิน |
| Core jobs | รวม inbox ทุกช่องทาง, AI ตอบแชท, CRM, Slip Verification, Analytics |
| Pricing hook | **Free plan ทดลองได้ฟรี · Growth plan ทดลองฟรี 14 วัน** |
| เหตุผล | ~95% ร้านค้าออนไลน์ไทยมีหลายช่องทาง → รวมในที่เดียวช่วยไม่พลาดลูกค้า |
| น้ำเสียง | "เพื่อนร่วมทีมที่อยู่ข้างคุณทุกช่วงของวัน" — ตั้งแต่เปิดร้าน ระหว่างวัน จนถึงเหนื่อย |

> 🐻 **3 moment ของคนขายออนไลน์ที่ Onebear ออกแบบเพื่อ:**
> 1. **เปิดร้าน** — พร้อมรับลูกค้าทุกช่องทางตั้งแต่แรก
> 2. **ระหว่างวัน** — AI ช่วยตอบ ลดงานซ้ำซ้อน โฟกัสกับงานที่สำคัญกว่า
> 3. **ช่วงเหนื่อยล้า** — AI ดูแลแทนได้แม้ offline / นอกเวลา

---

## 🦸 Pattern: Hero Section

**โครงสร้าง (จาก Figma node 4116-4793)**

1. Navbar sticky (white bg, logo left, links center, buttons right)
2. Eyebrow `AI Sales Agent` / `แพลตฟอร์มรวมแชท` (teal, 14px, uppercase)
3. H1 ใหญ่ (48px Bold) — 2 บรรทัด, line 2 เน้นสี teal หรือ brand keyword
4. Sub text (16px Medium) — max-width 500px center
5. ปุ่ม CTA dark `btn-dark-hero` — "เริ่มใช้งานฟรี"
6. Product mockup ใหญ่ — chat app screenshot / UI mock ลอยบน aurora background

**CTA under-note:** "ฟรีสำหรับ Free plan · ทดลอง Growth 14 วัน · ไม่ต้องผูกบัตรเครดิต"

**Aurora background:**
```css
.hero-aurora {
  /* Teal-led blobs แทน Iris ม่วงของ makub */
  background: radial-gradient(circle at 30% 40%, rgba(65,195,168,0.15) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, rgba(6,182,212,0.12) 0%, transparent 45%),
              radial-gradient(circle at 50% 80%, rgba(139,92,246,0.08) 0%, transparent 40%),
              white;
}
```

---

## 💳 Pattern: Pricing Section (3 tier + add-ons)

โครงจาก Figma `3842-132812`

### Section header
- Eyebrow: `แผนราคาที่ยืดหยุ่นสำหรับทุกขนาดธุรกิจ` (teal, uppercase)
- H2 `48px Bold`: "ปลดล็อกด้วยพลัง AI" + "แบบไร้ขีดจำกัด" (line 2 สี teal)
- Sub: "เสริมศักยภาพทีมขายและการตลาด..."

### Billing Toggle
```html
<!-- รายเดือน/รายปี toggle -->
<div class="flex items-center gap-[8px] py-[8px]">
  <span class="text-[14px]">รายเดือน</span>
  <div class="bg-[#00C48C] h-[24px] rounded-full w-[44px] relative">
    <div class="absolute bg-white rounded-[9px] size-[18px] top-[3px]"
         id="toggle-knob" />
  </div>
  <span class="text-[14px]">รายปี</span>
  <div class="bg-[#E8FAF6] px-[8px] py-[2px] rounded-full">
    <span class="text-[11px] text-[#00C48C]">ประหยัด 20%</span>
  </div>
</div>
```

### Mobile Floating Toggle (sticky chip)

บน mobile toggle จะ sticky ลอยเป็น chip เพื่อให้ user เปลี่ยน billing period ได้ตลอดขณะ scroll pricing cards

```html
<div id="bill-chip"
     class="sticky top-4 z-30 lg:static
            w-fit mx-auto flex items-center gap-3 mb-8 lg:mb-10
            px-4 py-2.5 lg:px-0 lg:py-0
            rounded-full lg:rounded-none
            bg-white/95 lg:bg-transparent
            shadow-[0_4px_18px_rgba(0,0,0,0.10)] lg:shadow-none">
  [toggle HTML เดิม]
</div>
```

- `sticky top-4 z-30` บน mobile / `lg:static` บน desktop
- `bg-white/95` + `shadow` ให้ดูเป็น floating chip ที่ชัดเจน
- backdrop blur ไม่จำเป็น — white/95 พอ

### 3 Pricing Cards

| Tier | ราคา | ปุ่ม | เด่น |
|---|---|---|---|
| **Free Plan** | ฟรี | `btn-outline` (teal outline) "เริ่มใช้งานฟรี" | ปกติ |
| **Starter Plan** | ฿790/เดือน | `btn-outline` (teal outline) "เริ่มใช้งานฟรี" | ปกติ |
| **Growth Plan** | ฿1,990/เดือน | `btn-gradient` (teal→cyan) "ทดลองใช้งานฟรี 14 วัน" | **Best value** ribbon ⭐ |

**"Best value" ribbon** (เหนือ Growth card):
```css
.pricing-ribbon {
  background: linear-gradient(166deg, #00C48C 0%, #06B6D4 100%);
  border-radius: 22px 22px 0 0;
  padding: 8px 0 28px;     /* pb-7 ซ่อนก้นใต้การ์ด */
  text-align: center;
  color: white;
  font-size: 16px;
  font-weight: 600;
}
```

**กฎ Pricing card:**
- ทุกการ์ด: `rounded-[22px]`, `shadow-[0_12px_40px_rgba(0,0,0,0.08)]`, `border border-[#F6F6F8]`
- Growth card ยกขึ้น: `relative` ครอบ ribbon + card, card เป็น `z-10`
- Feature list: ✅ = teal check (10% bg), ❌ = dash grey (4% bg)

### Feature Lists

**Free Plan:**
- ✅ 1 ช่องทางแชท (LINE OA)
- ✅ AI ตอบอัตโนมัติ 50 ข้อ/เดือน
- ✅ ลูกค้าสูงสุด 50 คน
- ✅ รายงานพื้นฐาน
- ❌ CRM พื้นฐาน
- ❌ Slip Verification
- ❌ Analytics Dashboard
- ❌ API Access
- ❌ ทีม Support ส่วนตัว

**Starter Plan (฿790):**
- ✅ 3 ช่องทางแชท
- ✅ AI ตอบอัตโนมัติไม่จำกัด
- ✅ ลูกค้าสูงสุด 500 คน
- ✅ รายงานรายเดือน
- ✅ CRM พื้นฐาน
- ✅ Slip Verification
- ❌ Analytics Dashboard
- ❌ API Access
- ❌ ทีม Support ส่วนตัว

**Growth Plan (฿1,990) ⭐:**
- ✅ 3 ช่องทางแชท
- ✅ AI ตอบอัตโนมัติไม่จำกัด
- ✅ ลูกค้าสูงสุด 500 คน
- ✅ รายงานรายเดือน
- ✅ CRM เต็มรูปแบบ
- ✅ Slip Verification
- ✅ Analytics Dashboard
- ✅ API Access
- ❌ ทีม Support ส่วนตัว

---

## 🧩 Pattern: Add-On Section

หัวข้อ: "ยกระดับการใช้งานด้วย Add-On"

**3 Add-ons ปัจจุบัน:**

| Add-on | ราคา | คำอธิบาย |
|---|---|---|
| **Meta Add-on** | ฿15/คน/เดือน | ติดตามการทำงานของทีมผ่านบันทึกงานประจำวัน แยกตามโปรเจกต์และรายบุคคล |
| **Line Add-on** | ฿20/คน/เดือน | เบิกค่าใช้จ่ายและสวัสดิการ ส่งเรื่องและอนุมัติผ่านระบบได้อย่างรวดเร็ว |
| **User Add-on** | ฿20/คน/เดือน | Smart recruiting platform ครบวงจร สมัครงาน สร้างหน้า Career และตำแหน่งงาน |

**Add-on card:**
```css
.addon-card {
  background: white;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  padding: 20px;
  min-height: 180px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}
/* ภาพ placeholder 120x120 = bg-[#ECECF1] rounded-[16px] */
/* Price = Seafoam #13CAAF, 20px semi-bold */
/* Unit = #838395, 14px */
```

**Layout:** 2-column grid `grid-cols-2 gap-[20px]` · max-width 980px

---

## 🎯 Pattern: CTA Banner Section

**โครงสร้าง:**
```html
<!-- Gradient background: 90deg → 168deg teal→cyan→purple -->
<section style="background: linear-gradient(168deg, #00C48C, #06B6D4, #8B5CF6)">
  <!-- Mascot animation (GIF) ลอยเหนือ banner -->
  <img src="mascot-animation.gif" class="absolute -top-[161px] size-[200px]" />

  <!-- Heading (white, center) -->
  <h2 class="text-white text-[32px] font-semibold text-center">
    เร่งการเติบโตของธุรกิจคุณ<br>อย่างทรงพลังด้วย Onebear
  </h2>

  <!-- Sub text (white 16px) -->
  <p class="text-white text-[16px] font-medium text-center max-w-[542px]">
    เริ่มต้นใช้งานฟรีวันนี้ เพื่อยกระดับการดูแลลูกค้า...
  </p>

  <!-- CTA button dark (บนพื้น gradient สว่าง → ใช้ dark button กัน contrast) -->
  <button class="btn btn-dark-hero w-[240px]">เริ่มใช้งานฟรี</button>

  <!-- Under-note -->
  <p class="text-white text-[14px] text-center">ไม่ต้องใช้บัตรเครดิต · ฟรี 14 วัน · ยกเลิกได้ทุกเมื่อ</p>
</section>
```

> ⚠️ **Dark button บน gradient** — ใช้ `btn-dark` (dark bg) แทน gradient button เพื่อกัน contrast ไม่ชนกัน

---

## ❓ Pattern: FAQ Section

**โครงสร้าง:**
- Background: `bg-[#F1F5F9]` (Section BG) — สว่างกว่าขาว ให้ feel ต่างจาก section อื่น
- Header: FAQ eyebrow (teal uppercase) + "คำถามที่พบบ่อย" (32px Bold)
- 6 accordion items, max-width 840px center

**FAQ Card:**
```css
.faq-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 16px 40px rgba(97,97,97,0.10);
  padding: 20px;
  gap: 20px;  /* ระหว่างคำถามกับคำตอบ */
}
```

**คำถาม FAQ ปัจจุบัน:**
1. Onebear แตกต่างจากเจ้าอื่นอย่างไร?
2. ใช้เวลานานแค่ไหนในการเริ่มต้น?
3. รองรับช่องทางไหนบ้าง?
4. ระหว่างทดลองมีค่าใช้จ่ายเพิ่มเติมไหม?
5. ข้อมูลลูกค้าปลอดภัยไหม?
6. AI จะตอบลูกค้าแปลก ๆ ทำร้านเสียภาพไหม?

> ✅ ใช้ `<details>/<summary>` native สำหรับ accessible accordion โดยไม่ต้องใช้ JavaScript

---

## 🌐 Pattern: Navbar

**โครงสร้าง:**
```html
<nav class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.04)] sticky top-0 px-[40px] py-[10px]">
  <!-- Logo (left) -->
  <img src="onebear-logo-horizontal.svg" class="h-[40px]" />

  <!-- Nav links (center) -->
  <!-- หน้าแรก | ฟีเจอร์ | ราคา | บทความ | ร่วมเป็นพาร์ตเนอร์ -->
  <!-- active link สี #46BAA9 (muted teal) -->

  <!-- Actions (right) -->
  <button class="btn btn-iris btn-sm">เข้าสู่ระบบ</button>  <!-- outline border-[#DFDFE8] -->
  <button class="btn btn-dark btn-sm">เริ่มใช้งานฟรี</button>  <!-- dark bg -->
</nav>
```

**Nav link สี:**
- Default: `#16161B`
- Active (current page): `#46BAA9` (muted teal)
- Font: 14px Medium

---

## 🌑 Pattern: Footer (Dark)

**Background:** `#0C0B15` (Deep dark)

**โครงสร้าง (Landing page):**
```
แถวเดียว · hug content · padding 12px top/bottom

© 2026 Gofive Co., Ltd. All rights reserved.
```

**Implementation:**
```html
<footer class="bg-footer-dark">
  <div class="max-w-container-max mx-auto px-margin-desktop py-3 text-center">
    <p class="text-[13px] text-white/40">© 2026 Gofive Co., Ltd. All rights reserved.</p>
  </div>
</footer>
```

**Typography:** 13px · `text-white/40` · centered

---

## ✅ Hero / Section Summary

| Section | Background | CTA | Note |
|---|---|---|---|
| **Hero** | White + aurora teal blobs | Dark button `#1C1C22` | Product mock ลอยบน aurora |
| **Pricing** | White | Outline (Free/Starter) / Gradient (Growth) | ribbon teal→cyan |
| **Add-ons** | White | ไม่มีปุ่มหลัก | grid 2-col |
| **CTA Banner** | Gradient teal→cyan→purple | Dark button | Mascot GIF ลอยเหนือ |
| **FAQ** | `#F1F5F9` | ไม่มีปุ่ม | accordion native |
| **Footer** | `#0C0B15` | ไม่มี | dark text white 50% |

---

## 📱 Pattern: Features Section — Mobile Snap Carousel

Desktop ใช้ tab layout — ซ่อนบน mobile ด้วย `hidden md:block`
Mobile ใช้ horizontal snap scroll cards แยก DOM block ด้วย `md:hidden`

### Card structure
```html
<!-- Track -->
<div id="feat-mob-track"
     class="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 py-4 -mx-5">
  <!-- Card -->
  <div class="feat-mob-card snap-center shrink-0 w-[85vw] rounded-[24px] overflow-visible
              bg-white shadow-[0_8px_28px_rgba(0,0,0,0.10)]">
    <!-- Visual header: fixed height, no border-radius, overflow hidden -->
    <div class="stage-inbox flex items-center justify-center overflow-hidden"
         style="height:200px;border-radius:0;padding:20px">
      [mockup]
    </div>
    <!-- Text body -->
    <div class="p-5">
      <span class="eyebrow">...</span>
      <h3 class="mt-1 mb-1">...</h3>
      <ul class="flex flex-col gap-1.5 mb-3">...</ul>
    </div>
  </div>
  <!-- Trailing spacer — ให้ card สุดท้าย snap ได้ -->
  <div class="shrink-0 w-5" aria-hidden="true"></div>
</div>
<!-- Dot indicators -->
<div class="md:hidden flex justify-center gap-2 mt-1">
  <button class="feat-mob-dot w-2 h-2 rounded-full transition-all"></button>
  ...
</div>
```

### Visual header ต้องสูงเท่ากัน
ใช้ `style="height:200px"` (fixed height) ไม่ใช่ `min-height` — เพื่อให้ทุก card มี visual area เท่ากันแม้เนื้อหาใน header จะต่างกัน

### Shadow clipping — py-4 บน track
`overflow-x: auto` implicitly ตั้ง `overflow-y: auto` ด้วย → shadow ของ card โดนตัด
แก้ด้วย `py-4` บน track + `overflow-visible` บน card → shadow แสดงผลเหนือ/ใต้ได้

### Drag momentum (Apple-style)
JS ใน `index.html` ก่อนปิด `</body>`:
- velocity tracking via `positions[]` (80ms window)
- `requestAnimationFrame` friction loop: `velocity *= 0.92`
- direction lock: ตรวจ `|dx| vs |dy|` ใน 8px แรก — ถ้า vertical → ปล่อย page scroll
- snap positions: ใช้ `card.offsetLeft - track.offsetLeft - px` (ไม่ใช่ arithmetic) เพื่อ precision
- `scroll-snap-type: none` ระหว่าง drag, restore หลัง `snapToNearest()`

### เมื่อเพิ่ม card ใหม่
1. เพิ่ม `<div class="feat-mob-card snap-center ...">` ก่อน trailing spacer
2. เพิ่ม `<button class="feat-mob-dot ...">` ในส่วน dots

---

## 📐 Layout Rules (กฎ)

กฎที่ผูกกับการทำเว็บ ใช้อ้างอิงได้ทั้งคนและ AI (ดู `CLAUDE.md` ที่ root repo ด้วย)

### R1 · Cut screen ต้องชิด edge

เมื่อ **screen / app mockup ถูกตัดล่าง** (crop ไม่โชว์เต็ม) — ก้นที่ถูกตัด **ต้องชิดขอบล่างของ section/band ที่ครอบมันเสมอ** ห้ามลอยโดยมีช่องว่าง (หรือ fade) คั่นก่อนถึงขอบ section

- **ทำไม:** screen ตัดที่มีช่องว่างใต้มันอ่านว่า "ผิดพลาด/ลอย" — การให้ก้นชิดขอบทำให้ดูเป็น crop ที่ตั้งใจ สะอาด
- **วิธีทำ:** ครอบ hero content + screen ไว้ใน band `relative` แล้ววาง background (เช่น aurora image) เป็น `absolute inset-0` เพื่อให้ความสูง band ปรับตามเนื้อหาและจบพอดีก้น screen (responsive-safe, gap = 0). ให้ screen เป็น element สุดท้ายใน band ไม่มี margin/padding ล่าง และเอา fade-to-white ที่ขอบตัดออก. ตรวจ `band.bottom − screen.bottom === 0` ทุก breakpoint
- **ใช้จริงที่:** `index.html` → `.hero-band` + `.hero-aurora`

### R2 · overflow-x:auto ตัด shadow

เมื่อ container มี `overflow-x: auto` (หรือ `scroll`) — CSS spec กำหนดให้ `overflow-y` เป็น `auto` ด้วยโดยอัตโนมัติ → **shadow ของ child elements ถูกตัด** ทั้ง top/bottom

**แก้:** เพิ่ม `py-4` (หรือ padding ที่เพียงพอ) บน scroll container + ตั้ง `overflow-visible` บน child card
```html
<!-- Track -->
<div class="overflow-x-auto py-4">
  <!-- Card: shadow ไม่โดนตัดแล้ว -->
  <div class="shadow-[...] overflow-visible">...</div>
</div>
```

ใช้จริงที่: Feature mobile carousel (`#feat-mob-track`)

---

## 🔗 Related

- [[04_Buttons]] — ปุ่มแต่ละ variant
- [[05_Brand-Assets]] — logo / mascot ใน section
- [[06_Icons]] — check/close icons
- [[00_README]] — ภาพรวม

---

> 🧩 **Pricing = 3 tier + ribbon gradient** · **CTA = dark on gradient** · **FAQ = F1F5F9 bg** · **Footer = 0C0B15**
