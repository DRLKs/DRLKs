---
applyTo: "**"
---

# DRLKs Portfolio — Workspace Instructions

## Project Overview

This is David Muñoz del Valle's personal portfolio website. Static vanilla HTML/CSS/JS, deployed via GitHub Pages. Inspired by [brittanychiang.com](https://brittanychiang.com).

## Critical Rules

1. **No build step.** Files are served directly. Never introduce bundlers, transpilers, or frameworks.
2. **Single page.** All content lives in `index.html`. Never split into multiple HTML files.
3. **Vanilla only.** HTML + CSS + JS. No libraries, no frameworks, no npm.
4. **Images in `aux/`.** All static assets go in the `aux/` directory or subdirectories.
5. **Context files are source of truth.** `context/*.md` files contain David's professional data — always keep them in sync with HTML changes.

## Design Constraints

- Dark theme: navy background (`#0a192f`), teal accent (`#64ffda`)
- Font: Inter (Google Fonts)
- Two-column layout: sticky sidebar + scrollable content
- Mobile: single column, nav hidden, sticky section headers
- Hover: teal border glow + text color shift + arrow translate on cards
- Mouse glow: radial gradient following cursor

## File Roles

| File | Role |
|------|------|
| `index.html` | All page structure and content |
| `styles.css` | All visual styling, responsive rules |
| `script.js` | Scroll spy, mouse glow, nav active state |
| `context/` | Professional data (source of truth for content) |
| `aux/` | Images and visual assets |

## When Editing

- **Adding a project** → Follow `add-project` skill
- **Adding experience** → Follow `add-experience` skill  
- **Updating about/identity** → Follow `update-about` skill
- **Layout or design changes** → Follow `portfolio-architecture` skill

## Content Tone

- Direct, grounded, technical
- Concrete verbs: built, deployed, integrated, architected
- No buzzwords, no vague claims
- Highlight Rust, backend, infrastructure as core identity
