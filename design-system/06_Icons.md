---
type: foundation
tags: [foundation, brand/onebear, status/active]
status: active
created: 2026-06-03
category: icons
brand_scope: onebear
---

# 🔷 Icons

> ระบบไอคอนของ Onebear — ใช้กับ feature list, navigation, check marks, status

---

## 🎯 หลักการ

1. **Outlined rounded เป็น default** — สอดคล้องกับ brand ที่มุมโค้งมน friendly
2. **Filled เมื่อ active/selected** — ให้ชัดเจนกับ state ที่เลือกอยู่
3. **Consistent size** — ใช้ขนาด standard ตาม context อย่าปนกัน
4. **Teal icon = active/brand** — icon สี brand teal สื่อถึง feature/ข้อดี

---

## 📏 Sizes

| Size | Pixel | Usage |
|---|---|---|
| `--icon-xs` | 10px | Check mark ใน feature list badge |
| `--icon-sm` | 16px | Inline text, small status |
| `--icon-md` | 20px | Feature list item ⭐ |
| `--icon-lg` | 24px | Navigation, social media, standard |
| `--icon-xl` | 28px | FAQ expand/collapse toggle |
| `--icon-2xl` | 40px | Feature card icon chip |

```css
:root {
  --icon-xs:  10px;
  --icon-sm:  16px;
  --icon-md:  20px;
  --icon-lg:  24px;
  --icon-xl:  28px;
  --icon-2xl: 40px;
}
```

---

## ✅ Check Mark Icon — Feature List

> ใช้ในการแสดงรายการ features ใน pricing cards และ feature sections

### Active feature (included)
```html
<!-- วงกลม bg teal 10% + check svg ขาว -->
<div class="bg-[rgba(0,196,140,0.10)] flex items-center justify-center rounded-full size-[20px]">
  <svg class="size-[10px]" ...check-mark-teal... />
</div>
```

### Inactive feature (not included)
```html
<!-- วงกลม bg dark 4% + dash เทา -->
<div class="bg-[rgba(0,0,0,0.04)] flex items-center justify-center rounded-full size-[20px]">
  <div class="bg-[#CBD5E1] h-[2px] rounded w-[8px]" />
</div>
```

### สีของ check icon
- **Active** `bg-[rgba(0,196,140,0.10)]` + check svg สี teal — feature ที่ได้รับ
- **Inactive** `bg-[rgba(0,0,0,0.04)]` + dash `#CBD5E1` — feature ที่ยังไม่ได้ (muted)
- Text active: `#334155` (Slate)
- Text inactive: `#B0BEC5` (Disabled)

---

## 🔽 FAQ Dropdown Icon

```html
<!-- Chevron ใช้กับ FAQ accordion -->
<div class="flex items-center justify-center size-[28px]">
  <svg class="size-[16px] transition-transform duration-200" 
       data-open="rotate-180" ...chevron-down... />
</div>
```

> ปิด = default orientation · เปิด = `rotate-180` (chevron ขึ้น)

---

## 📱 Social Media Icons

| Platform | ใช้ใน footer / chat channels |
|---|---|
| Facebook | `assets/icons/facebook.svg` |
| LINE OA | `assets/icons/line.svg` |
| Instagram | `assets/icons/instagram.svg` |
| WhatsApp | `assets/icons/whatsapp.svg` |
| TikTok | `assets/icons/tiktok.svg` |

> ขนาด social icon = 24px — footer social links, channel icons

---

## 🏷️ Badge / Tag Icons

### Add-on Badge
```html
<!-- Add-on label badge -->
<div class="bg-[#F6F6F8] flex items-center justify-center px-[4px] py-[2px] rounded-[6px]">
  <span class="text-[12px] font-semibold text-[#525260]">Add-on</span>
</div>
```

### Billing Toggle
```html
<!-- Toggle สำหรับ รายเดือน/รายปี -->
<div class="bg-[#00C48C] h-[24px] rounded-full w-[44px] relative overflow-hidden">
  <div class="absolute bg-white rounded-[9px] size-[18px] top-[3px]"
       style="left: 23px" /> <!-- right position = yearly -->
</div>
```

---

## 🔲 Feature Card Icon Chip

> Icon chip ขาวลอยบน gradient card background — ตาม pattern Product-on-Color stage

```html
<div class="bg-white rounded-full shadow-sm flex items-center justify-center size-[40px]">
  <svg class="size-[20px] text-[#41C3A8]" ... />
</div>
```

---

## 🏢 Sibling Brand Icons

ใช้ใน footer "แพลตฟอร์มในเครือ" — ดูกฎสีที่ [[05_Brand-Assets]]

```html
<!-- เช่น empeo -->
<div class="bg-[#F05B2F] rounded-[8px] size-[40px] overflow-hidden flex items-center justify-center">
  <img src="assets/brand-icons/empeo.svg" class="size-[24px]" />
</div>
```

---

## ✅ Do / ❌ Don't

- ✅ check icon = `rgba(0,196,140,0.10)` bg + teal check svg
- ✅ inactive = `rgba(0,0,0,0.04)` bg + `#CBD5E1` dash
- ✅ FAQ icon = 28px chevron, rotate-180 เมื่อ open
- ✅ social icon = 24px, สีตามแบรนด์ platform
- ❌ อย่าใช้ icon ขนาดเดียวกับ body text — ให้ใหญ่กว่า 1 ระดับเสมอ
- ❌ อย่าผสม filled/outlined icons ใน list เดียวกัน

---

## 🔗 Related

- [[01_Colors]] — สี icon
- [[04_Buttons]] — icon ในปุ่ม
- [[07_Web-Patterns]] — การใช้ icon ใน section
- [[00_README]] — ภาพรวม

---

> 🔷 **Check teal = included** · **Dash grey = not included** · **Chevron 28px = FAQ toggle**
