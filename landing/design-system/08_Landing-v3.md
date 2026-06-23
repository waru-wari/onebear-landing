---
type: patterns
tags: [patterns, web, landing, brand/onebear, status/active]
status: active
created: 2026-06-04
category: web-patterns
brand_scope: onebear
supersedes_partially: [[04_Buttons]], [[07_Web-Patterns]]
---

# 🧱 Landing Page v3 — Decisions & Patterns

> สรุปการตัดสินใจจริงจากการทำ **Onebear landing page v3** (ไฟล์ `onebear-landing/index-v3.html`)
> ส่วนที่ **override** ของเดิม จะระบุไว้ชัด — ให้ยึดไฟล์นี้เป็นล่าสุดสำหรับงานเว็บ landing

---

## ⭐ สิ่งที่เปลี่ยนจาก DS เดิม (override)

| เรื่อง | เดิม | v3 (ใช้อันนี้) |
|---|---|---|
| **ปุ่ม Primary** | Gradient teal = featured | **Near-black `#1C1C22`** เป็น primary ทุกจุด (hero/form/CTA) _(v3.1 — เดิม v3 = `#313937`)_ |
| **Teal / Gradient** | ใช้กับปุ่ม CTA | **เป็น accent เท่านั้น** — active tab, พาเนล signup, คีย์เวิร์ดใน heading |
| **Letter-spacing** | token มี −0.01/−0.02em ฯลฯ | **0 ทั้งหมด** (`* { letter-spacing: 0 }`) |
| **Page background** | `#FFFFFF` | **Cream `#faf9f5`** (อุ่น เป็นมิตร) |
| **Card** | การ์ดเยอะได้ | **ใช้เท่าที่จำเป็น** (mockup จอ + ฟอร์ม) ที่เหลือ flat — โทน aave: นิ่ง, accent น้อย |
| **Section heading** | Semibold 600 · 32px คงที่ | **Bold 700 · fluid `clamp(30px,4.2vw,44px)` · line-height 1.3** _(v3.1 — ดูด้านล่าง)_ |
| **Eyebrow** | UPPERCASE + tracking | **Title case (ใหญ่ตัวแรก) ไม่ uppercase** _(v3.1)_ |
| **โมเดลราคา** | (ไม่ระบุ) / ฟรี 14 วัน | **Freemium — ใช้ฟรีตลอด ไม่มีกำหนด** _(v3.1)_ |
| **ช่องทาง** | หลายช่อง (รวม marketplace) | **3 ช่องเท่านั้น: FB · LINE OA · IG (โลโก้แบรนด์จริง)** _(v3.1)_ |

---

## 🎨 Color usage (restraint แบบ aave)

- พื้นหลังหน้า = **White `#ffffff`** · heading/text เข้ม = **Near-black `#1C1C22`** · text รอง = `#525260`
- **Teal `#41C3A8` / deep teal `#15A591` = accent เฉพาะจุด** เท่านั้น (active tab, พาเนล signup, คีย์เวิร์ด gradient ใน heading, เครื่องหมายเช็ก)
- ❌ เลิกใส่ teal พร่ำเพรื่อ (eyebrow, ไอคอนชิป, จุด, การ์ด) → ทำให้ "รก"
- **สีของ stat = ตาม semantic ของ "ค่า" ไม่ใช่สไตล์:**
  - 🔴 **Negative / loss = Red `#E5484D`** — ตัวเลขที่สื่อ "สิ่งที่กำลังเสีย/ปัญหา" (เช่น ~42% ลูกค้าหลุด, ฿20K+ ที่เสียไป) → ใช้แดงเพื่อสื่อความเจ็บปวด
  - ⚫ **Positive / neutral fact = Near-black `#1C1C22`** — ตัวเลขความสำเร็จ/สถิติทั่วไป (เช่น "12,000 ร้านใช้งาน")
  - 🩵 **Positive ที่อยาก celebrate = Teal `#41C3A8`** — ผลลัพธ์ดีที่อยากให้เด้ง (เช่น "+38 ปิดการขาย")
  - ❌ อย่าใช้แดงกับตัวเลขที่เป็นบวก — แดงสงวนไว้สำหรับ "ค่าลบ" เท่านั้น
- กรอบ/surface ที่ต้องมีพื้น = **neutral `#f3f4f1` / `#E5E4DE` border** ไม่ใช่ mint

---

## 🔘 Buttons (v3) — Dark primary

```html
<!-- Primary (ใช้ทุกที่: hero, form, CTA card, section CTA) -->
<a class="bg-[#1C1C22] text-white font-semibold rounded-full px-8 py-4 hover:opacity-90">เริ่มใช้งานฟรี</a>
```

- **Primary = Near-black `#1C1C22`** pill · hover `opacity .9` · ไม่มี glow สี
- ตัวอักษรปุ่ม ≥ 14px semibold · มุม pill (`rounded-full`) หรือ `rounded-xl` ในฟอร์ม
- **Teal gradient `#35B0A6→#4CD6AA` = สงวนไว้** เป็น accent (เช่น active tab) — ไม่ใช่ปุ่ม CTA หลักอีกต่อไป
- เหตุผล: contrast ดีกว่า (ขาวบนดำ 12.5:1 AAA), premium กว่า, ทำให้ teal มีพลังเด้งเมื่อโผล่

---

## ✍️ Typography (v3)

- **Letter-spacing = 0 ทุก element** (ใส่ `* { letter-spacing: 0 !important; }`) — ฟอนต์ไทยติดลบแล้วตัวชนกัน
- **Hero H1** = Gofive Bold 700 · 48px · **line-height 1.3** (ไทยต้องโปร่ง ไม่งั้นสระ/วรรณยุกต์ชนบรรทัด)
- Section heading 600 · ~32px · Card title 600 · 24px · Body 400–500 · 16px
- Metric number ใหญ่: **48–56px Bold 700**, สี Dark Gray (หรือ Red ถ้าเป็น loss stat)

---

## 📏 Spacing (v3)

- **ระยะระหว่าง section = 96px (mobile) / 160px (desktop)** — `mb-24 md:mb-40` (premium, โปร่ง)
- Container max ~1200–1280px · radius การ์ด 24–32px · มุม pill ปุ่ม

---

## 🦸 Section patterns (v3)

> ลำดับ: **โลโก้บนสุด → Hero → Metrics(loss) → CTA card → Features(4 tabs) → How-it-works → Signup(2-col) → Footer(dark)**
> ❌ **ไม่มี navbar** ในเลย์เอาต์นี้ — ใช้แค่โลโก้แบรนด์กลางบนสุดของ hero

### Hero
- **Gradient background full-bleed** (เต็มความกว้าง ที่ระดับ `<main>`): `linear-gradient(180deg,#faf9f5→#EFFBF6→#DEF5EE→#CCEEE4→#E4F1FB→#faf9f5)` — มิ้นต์อ่อน เฟดกลับเป็นครีมด้านล่าง
- โลโก้ Onebear กลางบน → H1 (ดำล้วน) → subcopy → **ปุ่มดำเดี่ยว**
- Visual = **จอ desktop แบบกรอบแบนเฟดจมเข้าพื้น** (browser chrome + app mockup) — ❌ ไม่ใช่กรอบจอทีวี/ขาตั้ง
- ใต้ visual: **แถบช่องทาง** = ข้อความ **16px** (ไม่ใช่ chip) + โลโก้วงกลมสีแบรนด์ (FB/LINE/Messenger/Lazada/Shopee/TikTok)

### Metrics — "คุณกำลังเสียอะไรอยู่?"
- heading 2 บรรทัด + stat **3 ตัวเลขสีแดง `#E5484D`** (loss framing) แบบ **flat** (ไม่มีการ์ด) คั่นด้วยเส้น hairline จาง
- ตัวเลขเป็น placeholder → มี footnote "*ตัวเลขตัวอย่างเพื่อการสาธิต"

### CTA card
- การ์ด**ขาว** rounded-28 · heading 2 บรรทัด (บรรทัด 2 **teal** = `font-gradient`) · ปุ่มดำ · **illustration หมีหน้าร้าน SHOP** ฝั่งขวา
- ใช้ illustration จาก Figma node `4905:3445` (export เฉพาะ node — อย่าครอปจากการ์ดทั้งใบ จะติดเลเยอร์ขาว)

### Features — 4 tabs (สไตล์ Feature108)
- badge outline + heading + **pill tabs** (active = gradient teal accent) → **panel การ์ดใหญ่โทน neutral `#f3f4f1`** (ไม่ใช่ mint จัด)
- ในแต่ละ panel: badge + title ใหญ่ + bullet + ปุ่ม + **mockup จอ (app window)** ฝั่งขวา
- ใช้ **ARIA tabs จริง** (tablist/tab/tabpanel) + ลูกศร/Home/End + roving tabindex

### How-it-works
- **3-node horizontal flow** + เส้นเชื่อมที่ **fade จางทั้งปลายซ้าย-ขวา**
- node **active = ฝั่งขวา** (node 3 "เริ่มสร้างยอดขาย" = ปลายทาง/พร้อมใช้)
- มี **ปุ่ม CTA ใต้ section**

### Signup — 2 คอลัมน์
- ซ้าย = **พาเนลเทียล** (gradient `#2DA892→#4CD6AA`) + หมีขาว + heading + 3 bullet (accent ที่ยอมให้ teal เต็มได้ เพราะเป็น CTA banner)
- ขวา = การ์ดฟอร์มขาว · **label อยู่บนช่อง** (ไม่ใช่ floating) · input มีขอบ rounded-xl · ปุ่มดำ

### Footer
- **Dark `#1C1C22`** · link ขาว/60 · แถวแบรนด์ในเครือ (empeo · Venio · eTaxGo · IOMO · SignToGo) · social icons

---

## 🎬 Scroll interactions (v3)

- **Reveal-on-scroll**: section เฟด + เลื่อนขึ้นเมื่อเข้า viewport (IntersectionObserver, ใส่ class ด้วย JS เพื่อ no-JS ยังเห็นครบ, ข้ามถ้า `prefers-reduced-motion`)
- **Nav/logo bar เงาเพิ่มเมื่อเลื่อน** (subtle)
- Hero gradient + frame มี entrance เบาๆ

---

## ♿ Accessibility

- ปุ่มดำ = ขาวบนดำ 12.5:1 (AAA) · teal เล็กใช้ deep `#15A591`
- focus-visible ring ทุกปุ่ม/ลิงก์/แท็บ · `prefers-reduced-motion` guard · `lang="th"`

---

## 🔄 v3.1 Update (2026-06-05)

> รอบปรับจริงล่าสุดบน `index-v3.html` — ยึดอันนี้ทับของเดิมในหัวข้อที่ระบุ

### 📣 Positioning & Content
- **โมเดล = Freemium (ไม่ใช่ทดลอง 14 วัน)** — ทุกที่พูดให้ตรงกัน: "ใช้ฟรีได้ตลอด ไม่มีกำหนด · ไม่ต้องใช้บัตรเครดิต · อัปเกรดเมื่อพร้อม"
  - ❌ เลิกใช้ "ฟรี 14 วัน / ทดลองใช้" (ขัดกับคำว่า "เริ่มใช้งานฟรี" → ลูกค้างง)
- **รองรับ 3 ช่องทางเท่านั้น: Facebook · LINE OA · Instagram** — ตัด WhatsApp / Lazada / Shopee / TikTok ออกทุกจุด (hero, feature, FAQ, channel strip)
- **ไม่ใส่ social proof ปลอม** — เป็น new product ยังไม่มีผู้ใช้จริง → ห้ามยัดตัวเลข/โลโก้ร้าน/รีวิวที่ไม่มีจริง
- **โลโก้ช่องทาง = แบรนด์จริง** (ดึงจาก MCP `thesvg`): FB วงกลม `#0866FF`, LINE วงกลม `#06C755` + glyph ขาว, IG gradient ทางการ crop วงกลม — ❌ ไม่ใช้ตัวอักษร/ไอคอน material แทน
  - **ขนาด:** วง `w-9 h-9` (36px) · svg ใส่ขนาดให้ **เท่ากรอบ (36px) ห้าม upscale** (เคยตั้ง 42px → IG ซูม/กล้องโตเกิน). rename id ของ svg gradient (`fbClip`, `iga–igh`) กัน collision. IG: crop squircle เป็นวงกลมจะเหลือร่องที่มุมทแยง → ใส่ `background: linear-gradient(45deg,#FEDA77,#F58529,#DD2A7B,#8134AF,#515BD4)` ที่กรอบกลบร่อง

### 🔤 Typography (ทับ v3 เดิม)
- **Section heading = Bold 700** (เดิม v3 = Semibold 600) — ให้คม โดดเด่นขึ้น
- **Section heading ขนาด fluid:** `clamp(30px, 4.2vw, 44px)` — มือถือ ~30px → desktop 44px (เดิม 32px คงที่)
- **Hero H1 ขนาดใหญ่ขึ้น + responsive:** `44px (mobile) → 58px (md) → 66px (lg)` Bold 700
- **Line-height ทุก heading = 1.3** (hero/section/CTA) — ไทย 2 บรรทัดต้องโปร่ง อย่าใช้ 1.2 (วรรณยุกต์/สระชน)
- **Eyebrow = Title case ไม่ใช่ UPPERCASE** — เอา `text-transform: uppercase` ออก, ขึ้นต้นตัวใหญ่ตัวเดียว (เช่น `Features`, `How it works`, `Onebear AI`); ตัวย่อคงตัวใหญ่ (`FAQ`, `CRM`, `AI`)
- **Eyebrow = สีแบรนด์ teal `#15A591`** (เดิมเทาเขียว `#6a7b6f`) · 13px semibold
- **โลโก้ Hero ใหญ่ขึ้น:** `h-16 (mobile) / h-20 (desktop)`
- **คุมบรรทัด heading:** ใส่ `text-wrap: balance` ที่ section heading + ให้ container กว้างพอ (features = `max-w-4xl`) — กัน heading **ตกบรรทัด/คำโดดท้าย (orphan)** ตอนตัวอักษร fluid ขยาย

### 🔘 Buttons (v3.1)
- **Primary = Near-black `#1C1C22`** ทุกอย่าง — ปุ่ม CTA, heading/text, footer · `.glow-button` / `.btn-dark` · hover `opacity .9`
- ❌ `#313937` เลิกใช้ใน web UI ทั้งหมด (brand original เท่านั้น)
- เหตุผล: contrast สูงขึ้น (ขาวบนดำ ~16:1), ดู premium, teal เด้งชัดขึ้น

### 🧩 Component patterns
- **FAQ accordion (redesign):** การ์ด `rounded-xl` (12px) แยกใบ · เปิด = **border teal + หัวข้อ teal `#15A591` + เงานุ่ม** · chevron = **ลูกศรเปล่าหมุน 180°** (❌ ไม่ใช่ปุ่มวงกลม) เปลี่ยนเป็น teal ตอน hover/open · คำตอบ fade+slide เข้า (`@keyframes faqIn`)
- **How-it-works hover microinteraction (CSS-only):** node ยกลอย (-8px) + scale + เป็น teal + pulse ring + ไอคอนเล่นตามความหมาย (cable สั่น / model_training หมุน / rocket พุ่ง) · หัวข้อเป็น teal · เคารพ `prefers-reduced-motion`
- **CTA banner:** reveal **เฉพาะ content (text/ปุ่ม)** ไม่เลื่อนทั้งกล่อง teal · มี **มาสคอตหมี Onebear** โผล่ครึ่งตัวจากขอบล่าง ค่อนไปทางกลาง-ซ้าย (`overflow-hidden` ตัดครึ่งล่าง, เอียง -6°, `hidden md:block`) — asset: `assets/cta-bear.png` (จาก Figma node 5053:1234)

### 🎬 Motion
- **Auto-rotate progress bar (AI section):** hover การ์ด active → pause; **mouse-leave → วิ่งต่อจากตำแหน่งเดิม (ไม่ reset)**; ครบ 12s → ไปการ์ดถัดไปอัตโนมัติ

### 📱 Mobile
- **Page side margin = 20px บนจอ ≤640px** (เดิม 40px คงที่ทุกจอ) — `@media(max-width:640px){ .px-margin-desktop{padding:0 20px} }`
- **Tab bar:** ซ่อน scrollbar (`scrollbar-width:none` + `::-webkit-scrollbar{display:none}`) แต่ยัง scroll แนวนอนได้
- มาสคอตหมี + decorative ซ่อนบนมือถือ (`hidden md:block`) กันอึดอัด

---

## ✍️ UX Writing — คำศัพท์มาตรฐาน

| ❌ ห้ามใช้ | ✅ ใช้อันนี้ | หมายเหตุ |
|---|---|---|
| แชท, แช็ท, แชต | **แช็ต** | ราชบัณฑิตยสภา — ใช้เป็นหลักทั้งหน้า |

> **rule:** ทุกครั้งที่เขียน copy หรือ UI text เกี่ยวกับ chat ให้ใช้ "แช็ต" เสมอ

---

## 🔗 Related
- [[04_Buttons]] — (override: v3 ใช้ dark primary)
- [[02_Typography]] — (override: v3 letter-spacing 0, hero line-height 1.3)
- [[01_Colors]] — เพิ่ม loss-red `#E5484D`, page bg cream
- [[07_Web-Patterns]] — pattern เดิม (v3 ปรับลำดับ + เพิ่ม 4-tab/CTA card)
- ไฟล์จริง: `onebear-landing/index-v3.html` (self-contained, Gofive+โลโก้ base64)

---

> 🧱 **v3 = ปุ่มดำ primary · teal เป็น accent · letter-spacing 0 · พื้นครีม · นิ่งแบบ aave (flat > card) · stats แดง = loss**
> 🔄 **v3.1 = Freemium (ไม่ใช่ trial) · 3 ช่องทาง FB/LINE/IG (โลโก้แบรนด์จริง 36px) · ปุ่ม Near-black `#1C1C22` · eyebrow Title case teal `#15A591` · section heading Bold fluid 30→44px + text-wrap balance · line-height 1.3 · FAQ accordion teal · มาสคอตหมีใน CTA · mobile margin 20px**
