---
name: portfolio-architecture
description: "Use when: understanding portfolio site structure, layout conventions, design system, CSS architecture, responsive breakpoints, or how sections are organized. USE FOR: onboarding to the codebase, understanding the visual design, debugging layout issues, adding new sections, or modifying responsive behavior. DO NOT USE FOR: adding individual projects or experiences (use add-project or add-experience skills instead)."
---

# Portfolio Architecture

## Overview

This is David Muñoz del Valle's personal portfolio site — a static vanilla HTML/CSS/JS page inspired by [brittanychiang.com](https://brittanychiang.com). It uses a two-column layout with a sticky left sidebar and scrollable right content.

**Deployed via**: GitHub Pages  
**No build step**: Files are served directly from the repo root.

## File Structure

```
index.html    — Single-page HTML, all sections inline
styles.css    — Complete CSS with design tokens, layout, components, responsive
script.js     — Scroll spy, mouse glow effect, nav active state
aux/          — Project images and assets
context/      — Personal data files (experience, skills, preferences)
```

## Design System

### CSS Custom Properties (`:root`)

| Token | Value | Use |
|-------|-------|-----|
| `--bg` | `#0a192f` | Page background |
| `--bg-light` | `#112240` | Card/surface hover |
| `--bg-lightest` | `#233554` | Borders, subtle surfaces |
| `--text` | `#ccd6f6` | Primary text, headings |
| `--text-light` | `#a8b2d1` | Secondary text |
| `--text-lightest` | `#8892b0` | Body text, muted |
| `--accent` | `#64ffda` | Teal accent (links, tags, active nav) |
| `--font` | `"Inter"` | Single font family |
| `--transition` | cubic-bezier easing | All interactive transitions |

### Typography

- Font: Inter (Google Fonts), weights 300–800
- `h1`: 3rem, 700 weight, `--text` color
- `h2` (subtitle): 1.25rem, 500 weight
- `h3` (items): 1rem, 500 weight, transitions to `--accent` on hover
- Body: 1rem, line-height 1.7, `--text-lightest` color
- Tags: 0.72rem, 600 weight, `--accent` color

## Layout Architecture

### Two-Column Structure

```
.layout (max-width: 1280px, flex, gap 4rem, padded 6rem horizontal)
├── .header (width: 48%, max-width: 480px, flex-shrink: 0)
│   └── .header__inner (sticky, top: 0, height: 100vh, flex column, justify between)
│       ├── .header__top (name, title, subtitle)
│       ├── .nav (navigation with indicator lines)
│       └── .social (icon links)
└── .main (flex: 1, padding 6rem vertical)
    ├── #about.section
    ├── #experience.section
    ├── #projects.section
    └── .footer
```

### Sticky Sidebar Behavior

The `.header__inner` uses `position: sticky; top: 0; height: 100vh` to stay fixed during scroll. It uses `justify-content: space-between` to place:
- Name/title/subtitle at the TOP
- Navigation in the MIDDLE
- Social links at the BOTTOM

**Critical rule**: The navigation indicator MUST remain visible at all times during scrolling. This is achieved by the sticky positioning. On mobile (`<768px`), the nav is HIDDEN entirely — replaced with sticky section headers.

### Navigation Active State

Each nav link has structure:
```html
<a href="#section" class="nav__link">
  <span class="nav__indicator"></span>
  <span class="nav__text">Section</span>
</a>
```

Active state (`.is-active`):
- Text color → `--accent`
- Indicator width: 2rem → 4rem
- Indicator color → `--accent`

Managed by `script.js` IntersectionObserver with `rootMargin: '-20% 0px -60% 0px'`.

## Section Pattern

Every section follows this structure:

```html
<section id="sectionname" class="section" aria-label="Description">
  <div class="section__header-mobile">
    <h2>Section Name</h2>
  </div>
  <div class="section__content">
    <!-- Content here -->
  </div>
</section>
```

- The `.section__header-mobile` is hidden on desktop, shown only on mobile as a sticky header with blurred background.
- Each section uses `scroll-margin-top: 6rem` for anchor offset.
- Sections are spaced with `margin-bottom: 9rem`.

## Repeated Card Formats

- Experience entries keep the outer two-column layout: date on the left, content on the right.
- Certifications should follow the same outer format instead of inventing a new card structure.
- If a certification includes a logo, place the date on its own row first, then place the logo and text beneath it with the image on the left and the text block on the right.
- On mobile, the certification media/content pair may collapse to one column, but desktop should preserve the image-left, text-right arrangement.
- Preserve these patterns when updating existing entries; prefer extending the current card system over introducing one-off layouts.

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `>1080px` | Full two-column layout, sidebar sticky |
| `768–1080px` | Narrower columns, reduced padding |
| `<768px` | Single column, nav HIDDEN, sticky section headers visible |
| `<480px` | Tighter padding |

### Mobile-Specific Rules

1. `.nav` gets `display: none`
2. `.section__header-mobile` gets `display: block` with:
   - `position: sticky; top: 0`
   - `background-color: rgba(10, 25, 47, 0.85)` with `backdrop-filter: blur(10px)`
3. Header becomes non-sticky (`position: static; height: auto`)
4. Experience/project grids collapse to single column

## Interactive Effects

### Mouse Glow

A `body::before` pseudo-element creates a radial gradient that follows the cursor:
```css
background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(29, 78, 216, 0.07), transparent 40%);
```
JS updates `--mouse-x` and `--mouse-y` on `mousemove`.

### Hover States

All list items (`.experience-item__header`, `.project-item__inner`) share:
- `border: 1px solid transparent` → `rgba(100, 255, 218, 0.1)` on hover
- `background-color` → `rgba(100, 255, 218, 0.03)` on hover
- `h3` color → `--accent` on hover
- Arrow SVGs translate `(3px, -3px)` on hover

## Adding a New Section

1. Add nav link in `.nav ul`:
   ```html
   <li><a href="#newsection" class="nav__link"><span class="nav__indicator"></span><span class="nav__text">Name</span></a></li>
   ```
2. Add section in `.main` BEFORE `.footer`:
   ```html
   <section id="newsection" class="section" aria-label="Description">
     <div class="section__header-mobile"><h2>Name</h2></div>
     <div class="section__content">...</div>
   </section>
   ```
3. The scroll spy in `script.js` auto-discovers sections via `document.querySelectorAll('.section[id]')` — no JS changes needed.

## Quality Checks

- [ ] All sections have unique `id` attributes
- [ ] All nav links point to existing `#id`
- [ ] Images use `loading="lazy"` and `decoding="async"`
- [ ] External links have `target="_blank" rel="noreferrer"`
- [ ] All `<a>` with icons include `aria-label`
- [ ] No inline styles — everything via CSS classes
- [ ] Mobile nav is hidden, section headers are sticky
