# Onebear — Project Context

## Table of Contents

| Section | Description |
|---------|-------------|
| [How to Handle Design Decisions](#how-to-handle-design-decisions) | Protocol for recording decisions |
| [What This Is](#what-this-is) | Product overview — what Onebear does |
| [Brand Rules](#brand-rules) | Name, color, font, mascot, tone |
| [Color Tokens](#color-tokens) | CSS variables — all brand colors |
| [Product Features](#product-features) | Features + value props + target audience |
| [Gofive Font System](#gofive-font-system) | @font-face + weight mapping |
| [Copy Conventions](#copy-conventions) | UX writing rules |
| [Button System](#button-system) | Variants + canonical HTML pattern |
| [Section Patterns](#section-patterns) | Hero / Pricing / FAQ / CTA / Footer spec |
| [Layout Rules](#layout-rules-r1r4) | R1–R4 layout constraints |
| [Responsive Breakpoints](#responsive-breakpoints) | Mobile/desktop breakpoints |
| [Image Export Pattern](#image-export-pattern) | Figma export standard |
| [Project Structure](#project-structure) | Folder + asset paths |
| [How to Preview](#how-to-preview) | Local server |
| [Deploy Checklist](#deploy-checklist) | Pre-deploy steps |
| [Figma Reference](#figma-reference) | Figma node IDs |

---

## How to Handle Design Decisions

When a decision arises about design, typography, spacing, color, or component patterns:

1. **Claude must ask "Should I record this in CLAUDE.md?" every time a decision is made** — do not record without asking, and do not wait for the user to ask first.
2. **If an existing rule changes → overwrite it** — edit in place, do not add duplicate rules.
3. **If a conflict with an existing rule is found → raise it immediately** — never assume or decide silently.
4. **Both pages must stay in sync** — any CSS or copy change must apply to both `index.html` and `free-trial/index.html` in the same commit.
5. **Always write in English** — even if the conversation is in Thai, translate decisions to English before recording in CLAUDE.md.
6. **CLAUDE.md is the single source of truth** — if `design-system/*.md` conflicts with CLAUDE.md, CLAUDE.md wins.

---

## What This Is

**Onebear — Your AI Chat Commerce Assistant**

An AI Chat Commerce platform that consolidates chats from **LINE, Facebook, and Instagram** into a single dashboard, helping online shops manage customers, orders, payments, and analytics end-to-end.

| Problem | Onebear Solution |
|---|---|
| Missing customer messages, losing sales | AI responds instantly, 24/7 |
| Chats scattered across multiple platforms | All channels in one dashboard |
| Complex checkout and payment flow | Close sales and accept payment inside chat |

**Positioning:** The tool that helps shops "never miss a sales opportunity" — built for online sellers on chat.

---

## Brand Rules

- **"Onebear"** — capital O, rest lowercase. Never "OneBear" / "ONEBEAR" / "onebear"
- **Primary color:** Brand Teal `#41C3A8` — logo, icon, eyebrow, active state
- **CTA button:** Near-black `#1C1C22` (not teal — see [Button System](#button-system))
- **Font:** Gofive (proprietary, local `.woff2`) — supports TH + EN
- **Mascot:** Onebear bear — use in CTA sections and marketing. Do not use in formal/legal contexts.
- **Tone:** Friendly teammate who understands online shops — casual, concrete, benefit-focused
- **Parent company:** Gofive Co., Ltd.

---

## Color Tokens

### Brand Core (5 colors from Brand Guide)

| # | HEX | Name | Use when |
|---|---|---|---|
| 1 | `#41C3A8` | Primary Teal | logo, eyebrow, active state, check icon |
| 2 | `#35B0A6 → #4CD6AA` | BG Gradient | "Best value" ribbon, CTA banner bg, card header |
| 3 | `#5CC3B4 → #15A591` | Font Gradient | heading accent text, price gradient |
| 4 | `#1C1C22` | Near-black (v3.1) | heading, body text, CTA button, footer bg |
| 5 | `#FFBEBF` | Pastel Pink | mascot blush, illustration accent only |

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

  /* Dark (v3.1 — replaces brand dark gray #313937 everywhere) */
  --color-dark:         #1C1C22;

  /* Neutral */
  --color-neutral-900:  #334155;   /* body text */
  --color-neutral-800:  #525260;   /* secondary text */
  --color-neutral-400:  #DFDFE8;   /* default border */
  --color-neutral-300:  #ECECF1;   /* subtle bg */
  --color-neutral-200:  #F1F5FA;   /* section bg (FAQ) */

  /* Footer */
  --color-footer-bg:    #1C1C22;   /* = --color-dark v3.1 */

  /* Stats */
  --color-stat-loss:    #E5484D;   /* negative/loss numbers (e.g. ~42% customers lost) */
}
```

**Rules:**
- ❌ Never use teal `#41C3A8` as a CTA button background → use gradient or dark instead
- ❌ Never use `#000000` (pure black) → always use `#1C1C22`
- ❌ Never use `#313937` (brand original dark) in web UI → replaced by `#1C1C22` since v3.1
- Loss/negative stat numbers → `#E5484D` (red) · success stats → `#1C1C22` · celebrate → `#41C3A8`

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

| Feature | Description |
|---|---|
| **AI Sales Agent** | Auto-replies 24/7, guides customers through purchase |
| **Unified Inbox** | Combines LINE / Facebook / Instagram chats in one place |
| **Smart Handoff** | Seamlessly transfers chat to team with conversation summary |
| **Payment in Chat** | Sends payment link directly in chat — customer pays without leaving |
| **Order Management** | Create and track orders entirely within chat |
| **Analytics** | Real-time KPI tracking and performance reporting |
| **CRM** | Auto-captures customer data and purchase history |
| **Team Management** | Assign chats and manage team permissions |

**Pricing hook:** Free plan — free forever · Growth plan — 14-day free trial · No credit card required

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

| Weight | Name | Use for |
|---|---|---|
| 400 | Text | body paragraph, description |
| 500 | Medium | nav link, secondary label, caption |
| 600 | Semi Bold | section heading, card title, FAQ question |
| 700 | Bold | hero H1, section H2 (v3.1+) |

**Rules:**
- `letter-spacing: 0` on all elements — Thai font must not have negative tracking (diacritics collide)
- `line-height: 1.3` on all headings — Thai multi-line headings need breathing room
- DS max weight = 700 — never use 800+

---

## Copy Conventions

UX writing rules for consistency across all pages.

| Topic | Use | Never use |
|---|---|---|
| **Time** | `24 hrs` / `24 ชม.` | `24 hours` / `24 ชั่วโมง` |
| **Primary CTA (landing)** | `เริ่มใช้งานฟรี` | `เริ่มใช้ Onebear ฟรี`, `ลองใช้ฟรี` |
| **Primary CTA (free-trial)** | `เริ่มใช้ Onebear ฟรี` | `เริ่มใช้งานฟรี` |
| **Hero CTA (free-trial)** | `ทดลองใช้งานฟรี 14 วัน` | — (Hero button only) |
| **Brand name** | `Onebear` | `OneBear`, `ONEBEAR`, `onebear` |
| **Chat (Thai spelling)** | `แช็ต` | `แชท`, `แชต` (Royal Institute standard) |
| **CTA href** | `https://app.onebear.ai/register` | — |

---

## Button System

### Variants

| Variant | Class | Use when |
|---|---|---|
| **Primary Dark** | `glow-button` | hero / HIW / CTA section — all primary CTAs |
| **Gradient** | `btn btn-gradient` | Growth plan, "ทดลองใช้งานฟรี 14 วัน" |
| **Outline** | `btn btn-outline` | Free/Starter plan (pricing card) |
| **Login** | `btn btn-iris` | Login button in navbar |

### Canonical glow-button (Primary Dark CTA)

Every primary CTA on the page must use this exact pattern — no deviations:

```html
<a href="https://app.onebear.ai/register"
   class="glow-button inline-flex items-center justify-center gap-2 text-white text-sm font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-on-surface focus-visible:ring-offset-2">
  เริ่มใช้งานฟรี
  <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform" style="font-size:18px">arrow_forward</span>
</a>
```

**Forbidden on glow-button:** `text-base`, `py-3`, `py-5`, `font-bold`, `w-[260px]` — fix immediately if found.

### Tailwind Button Classes

```css
/* Inside <style type="text/tailwindcss"> */
.btn           { @apply inline-flex items-center justify-center gap-2 rounded-full transition-all; }
.btn-gradient  { @apply bg-gradient-to-r from-[#35B0A6] to-[#4CD6AA] text-white text-sm font-semibold px-8 py-4 hover:opacity-90; }
.btn-outline   { @apply border border-[rgba(0,196,140,0.35)] text-[#00C48C] text-sm font-semibold py-[13px] px-1 w-full hover:bg-[#E8FAF6]; }
.btn-iris      { @apply border-[1.5px] border-[#dfdfe8] text-[#525260] text-sm font-semibold px-4 py-2 hover:border-[#41C3A8] hover:text-[#41C3A8]; }
```

**Pricing exception:** Buttons inside pricing cards use `py-2.5` + `w-full` (not `width:280px` or `px-8`).

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

| Tier | Price | Button |
|---|---|---|
| **Free** | Free | `btn-outline` "เริ่มใช้งานฟรี" |
| **Starter** | ฿790/mo | `btn-outline` "เริ่มใช้งานฟรี" |
| **Growth** ⭐ | ฿1,990/mo | `btn-gradient` "ทดลองใช้งานฟรี 14 วัน" |

**"Best value" ribbon:**
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
<!-- Active ✅ — included feature -->
<div class="bg-[rgba(0,196,140,0.10)] flex items-center justify-center rounded-full size-[20px]">
  <svg class="size-[10px]" ...check-mark-teal... />
</div>

<!-- Inactive ❌ — not included -->
<div class="bg-[rgba(0,0,0,0.04)] flex items-center justify-center rounded-full size-[20px]">
  <div class="bg-[#CBD5E1] h-[2px] rounded w-[8px]"></div>
</div>
```

Text active: `#334155` · Text inactive: `#B0BEC5`

### Logo Usage

```
Navbar (light bg)  → assets/logos/horizontal-green-logo.svg   h-[40px]
Footer (dark bg)   → assets/logos/horizontal-white-logo.svg   h-[40px]
Favicon            → assets/logos/favicon.svg  (must have rx="80" in both <rect> bg and <clipPath>)
OG / social cover  → assets/logos/square-green-logo.png        (1:1 teal bg)
```

> Every time favicon is updated from Figma → add `rx="80"` to both the `<rect>` background and `<clipPath>` before committing.

### FAQ

- Background: `#F1F5FA`
- Card: `background: white; border-radius: 20px; box-shadow: 0 16px 40px rgba(97,97,97,0.10); padding: 20px;`
- Use native `<details>/<summary>` with JS micro-animation for expand/collapse

**Accordion interaction states:**
- Default: plain white card, no green
- Hover: `border-color:#bfe9df` + shadow + text/chevron `#15A591`
- Open: chevron rotates 180° only — no automatic green until hovered
- Open + Hover: same as hover

**Accordion CSS:**
```css
.faq-item > div{ overflow:hidden; transition:height .25s ease, opacity .2s ease; }
.faq-item{ transition: border-color .25s ease, box-shadow .25s ease; }
.faq-item:hover{ border-color:#bfe9df; box-shadow:0 4px 16px rgba(0,0,0,.05); }
.faq-item:hover .faq-q{ color:#15A591; }
.faq-item:hover .faq-chev{ color:#15A591; }
.faq-item[open] .faq-chev{ transform: rotate(180deg); }
```

**Accordion JS (height + opacity animation, intercepts native toggle):**
```javascript
document.querySelectorAll('.faq-item').forEach(function(el){
  var s=el.querySelector('summary'), b=el.querySelector('div');
  s.addEventListener('click',function(e){
    e.preventDefault();
    if(el.open){
      b.style.height=b.scrollHeight+'px'; b.style.opacity='0';
      b.addEventListener('transitionend',function d(){ b.removeEventListener('transitionend',d); el.removeAttribute('open'); b.style.height=''; b.style.opacity=''; });
    } else {
      el.setAttribute('open','');
      var h=b.scrollHeight; b.style.height='0'; b.style.opacity='0';
      requestAnimationFrame(function(){
        b.style.height=h+'px'; b.style.opacity='1';
        b.addEventListener('transitionend',function d(ev){ if(ev.propertyName!=='height')return; b.removeEventListener('transitionend',d); b.style.height=''; });
      });
    }
  });
});
```

### Mobile Feature Carousel

- Track: `flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar px-5 py-4 -mx-5`
- Card: `feat-mob-card snap-center shrink-0 w-[85vw] rounded-[24px] overflow-visible`
- Visual header: `height: 200px` fixed — keeps all cards the same height
- `py-4` on track + `overflow-visible` on card → fixes shadow clipping (see R2)

### Navbar

```html
<nav class="bg-white shadow-[0_8px_10px_rgba(0,0,0,0.04)] sticky top-0 px-[40px] py-[10px]">
  <!-- Logo left · Links center · Actions right -->
  <button class="btn btn-iris">เข้าสู่ระบบ</button>
  <!-- glow-button compact size for navbar -->
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

**Sibling brands in footer** (color per brand, do not change):

| Brand | Color |
|---|---|
| empeo | `#F05B2F` |
| Venio | `#06BEF8 → #0382FA` |
| eTaxGo | `#EB1C26` |
| IOMO | `#FF4C00` |
| SignToGo | `#4B5FD6 → #15DE76` |

---

## Layout Rules (R1–R4)

**R1** — Cropped screen/mockup: bottom must flush with section edge — no floating gap or fade.  
**R1b** — If design shows visual flush to a corner, render it flush to that corner — never centered.  
**R2** — `overflow-x:auto` clips shadow → fix with `py-4` on track + `overflow-visible` on card.  
**R3** — Let the visual determine container size — never set `min-height` taller than the actual visual.  
**R4** — Thai h3 in 2-column grid: `text-[22px] lg:text-[28px] xl:text-[34px]` (never `text-[40px]` in 2-col).

---

## Responsive Breakpoints

| Breakpoint | Min width | Effect |
|---|---|---|
| mobile | < 768px | single column, button `width:280px` |
| md | ≥ 768px | some sections unlock 2-col |
| lg | ≥ 1024px | full 2-col layout |
| xl | ≥ 1280px | container capped at `max-w-[1280px]` |

Container: `max-w-[1280px] mx-auto px-10` (40px/side)

---

## Image Export Pattern

Always export Figma visuals at **3×** — never use lower resolution for production assets.

```
download_assets(fileKey, nodeId, defaultFormat: "png", defaultScale: 3)
```

- Figma renders at 1× by default. `get_screenshot` does **not** upscale beyond canvas size.
- 3× PNG displayed at CSS `width: 100%` → browser always downscales → sharp on all DPR.
- Set HTML intrinsic dimensions to the actual PNG size: `width="3600" height="2700"` (for a 1200×900 frame at 3×).
- **Figma asset URLs expire in ~7 days** — if a production file contains `<img src="https://figma-alpha-api...">`, re-export before committing.

---

## Project Structure

```
onebear/
  CLAUDE.md              ← single source of truth (this file)
  design-system/
    fonts/               ← TTF masters (source — do not deploy directly)
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
    fonts/               ← woff2 generated (do not edit manually)
    legacy/              ← old files, do not touch
    _dev/                ← dev experiments (do not deploy)
    server.js
    sync-assets.py       ← add new asset → add to USED_IMAGES then run
    vercel.json
```

### Asset Path Convention

| Folder | Contains | From `landing/` | From `landing/free-trial/` |
|---|---|---|---|
| `assets/logos/` | all logo variants | `assets/logos/file` | `../assets/logos/file` |
| `assets/mascot/` | bear mascot images | `assets/mascot/file` | `../assets/mascot/file` |
| `assets/illustrations/` | product visuals | `assets/illustrations/file` | `../assets/illustrations/file` |
| `assets/screenshots/` | UI screenshots | `assets/screenshots/file` | `../assets/screenshots/file` |
| `assets/animation/` | video, GIF | `assets/animation/file` | `../assets/animation/file` |
| `assets/bg/` | background images | `assets/bg/file` | `../assets/bg/file` |

**Filename rule:** No spaces or `&` in filenames — use `-` instead (e.g. `features-crm-slip.png`).

### Asset Organization by Page

- **Assets are scoped to the page they belong to** — each new page gets its own asset subfolder under `assets/`.
- **Shared assets** (A/B test variants, assets used across multiple pages from the same source) may live in a shared folder.
- **When a new page is created** → create a dedicated asset folder for that page's assets. Do not dump into existing folders.

```
assets/
  landing/          ← assets specific to the main landing page
  free-trial/       ← assets specific to the free-trial page
  shared/           ← A/B test variants or assets shared across pages
  logos/            ← brand logos (shared by all pages)
  mascot/           ← bear mascot (shared by all pages)
  fonts/            ← woff2 font files (shared by all pages)
```

---

## How to Preview

```bash
node server.js          # → http://localhost:4599
python3 sync-assets.py  # sync fonts + images from design-system/
```

Vercel: Root Directory = `landing` (already configured).

---

## Deploy Checklist

1. **Check both pages** — `index.html` + `free-trial/index.html` must be in sync (layout, copy, CSS).
2. **CTA text is correct per page** — landing = `เริ่มใช้งานฟรี` / free-trial = `เริ่มใช้ Onebear ฟรี`.
3. **Preview both pages in a real browser** before pushing — do not rely on code review alone.
4. **Check asset paths** — no 404s.
5. **Check for expired Figma URLs** — Figma asset URLs expire in ~7 days. If any `<img src="https://figma-alpha-api...">` exists in production files, re-export before committing.
6. **Commit to `feat/next` only** → PR → `main` (never commit directly to `main`).

---

## Figma Reference

- **Q2 2026 Web Design:** Hero `4116-4793` · Pricing `3842-132812`
- **Gofive Design System:** `uT6ORRPorJ1czkcNlF49tf`
