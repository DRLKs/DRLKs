---
name: update-about
description: "Use when: updating the About section text, header subtitle, personal description, or any identity/branding copy in the portfolio. Also use when updating context files (preferences.md, skills.md, skills-matrix.md). USE FOR: rewording the about text, updating the tagline, changing the subtitle, reflecting new specializations or career direction. DO NOT USE FOR: adding projects (use add-project), experience (use add-experience), or layout/CSS changes (use portfolio-architecture)."
---

# Update About & Identity Content

## When to Use

- User wants to change how they describe themselves
- User gained a new specialization or certification
- Career direction shifted (e.g., new focus area)
- User wants to update header subtitle or about paragraphs
- User wants to sync context files with current reality

## Editable Identity Zones

### 1. Header Subtitle (`.header__subtitle`)

Location: `index.html` → `.header__top`

```html
<p class="header__subtitle">
  I build reliable backend systems, data pipelines, and cloud infrastructure.
</p>
```

**Rules:**
- One sentence, max ~80 characters
- Starts with "I build..." or "I design..." or similar active voice
- Mentions 2-3 core strengths
- No buzzwords

### 2. `<h2>` Title

```html
<h2>Software Engineer</h2>
```

Keep this short. Options: "Software Engineer", "Backend Engineer", "Systems Engineer", "Cloud & Backend Engineer"

### 3. About Section Content

Location: `index.html` → `#about > .section__content`

Structure: 3 paragraphs, each with a distinct purpose:

| Paragraph | Purpose | Key Content |
|-----------|---------|-------------|
| 1st | What I do + where | Location, bias, core work areas |
| 2nd | How I work + tools | Team value, technologies, Rust identity |
| 3rd | Background + philosophy | Education, fundamentals, practical translation |

**Rules:**
- Use `<strong>` to highlight 3-5 key terms (technologies/domains that define identity)
- Keep each paragraph to 3-4 sentences
- Tone: direct, grounded, technical but human
- Avoid: first-person possessives ("my passion"), superlatives ("best"), vague claims

### 4. Meta Description

```html
<meta name="description" content="Portfolio of David Muñoz del Valle, software engineer focused on backend, data engineering, and cloud systems." />
```

Update this when core positioning changes.

### 5. Page Title

```html
<title>David Muñoz del Valle | Software Engineer</title>
```

Format: `Full Name | Role`

## Step-by-Step: Updating the About Section

### 1. Determine What Changed

- New technology became central? → Add to `<strong>` highlights
- New career focus? → Restructure paragraph 1
- New certification or milestone? → May warrant mention in paragraph 3
- Location change? → Update paragraph 1

### 2. Edit the HTML

Modify the content inside `#about > .section__content`. Maintain the 3-paragraph structure.

### 3. Sync Context Files

After updating HTML, also update these files to stay consistent:

| File | What to Update |
|------|----------------|
| `context/preferences.md` | If preferences or direction changed |
| `context/skills.md` | If new skills or repositioning |
| `context/skills-matrix.md` | If skill levels changed |

### 4. Validate

- [ ] 3 paragraphs maintained
- [ ] `<strong>` tags on 3-5 key terms
- [ ] No paragraph exceeds 4 sentences
- [ ] Meta description matches current positioning
- [ ] Context files are consistent with HTML

## Writing Tone

David's portfolio tone is:
- **Direct**: "I'm a software engineer" not "I consider myself"
- **Grounded**: Mentions real technologies, real projects
- **Technical but accessible**: Avoids jargon for jargon's sake
- **Confident but not boastful**: States what he does well without superlatives

### Good:
> Rust is a defining part of my technical identity, but I also work comfortably with Python, PostgreSQL, Docker, AWS, OCI, Linux, and the tooling around delivery and operations.

### Bad:
> I'm passionate about leveraging cutting-edge technologies to deliver innovative solutions that drive business value.

## Current Highlighted Terms (`<strong>`)

1. backend development
2. data engineering
3. cloud infrastructure
4. Rust

When adding new highlights, limit to 5 total — more dilutes the emphasis.

## David's Core Identity Keywords

These should appear somewhere across the about + header:
- Backend / systems
- Rust
- Data engineering / pipelines
- Cloud (AWS, OCI)
- Production / deployment / operations
- Malaga (location)

## Context Files Guide

### `context/preferences.md`
- Explicit vs inferred preferences (keep separated)
- Career direction and immediate goals
- Work style and contribution patterns

### `context/skills.md`
- Technical skills with evidence
- Areas of strength with project links
- Writing guidelines for external communication

### `context/skills-matrix.md`
- Structured table of skills × levels × evidence
- Best-fit roles summary
- Positioning notes for CV/interviews
