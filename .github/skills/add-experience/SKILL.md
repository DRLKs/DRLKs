---
name: add-experience
description: "Use when: adding a new work experience, internship, or role to the portfolio; updating dates, descriptions, or technologies for existing experience entries; reordering the timeline. USE FOR: any modification to the experience section in index.html or context/experience.md. DO NOT USE FOR: adding projects (use add-project), layout changes (use portfolio-architecture), or about section changes (use update-about)."
---

# Add Experience to Portfolio

## When to Use

- User has a new job, internship, or significant role to add
- User wants to update dates (e.g., end date when leaving a position)
- User wants to rewrite a description or add/remove tags
- User mentions professional experience that should be reflected

## Experience Entry Template

```html
<li class="experience-item">
  <div class="experience-item__header">
    <span class="experience-item__date">START — END</span>
    <div class="experience-item__info">
      <h3>Role Title · <span class="experience-item__company">Company Name</span></h3>
      <p>
        Description of work. 2-4 sentences. Concrete verbs. Technical specifics.
        Focus on what was built, deployed, or improved.
      </p>
      <ul class="tag-list" aria-label="Technologies used">
        <li class="tag">Tech1</li>
        <li class="tag">Tech2</li>
        <li class="tag">Tech3</li>
      </ul>
    </div>
  </div>
</li>
```

## Step-by-Step: Adding a New Experience

### 1. Gather Information

Required:
- **Role title**: Specific job title or role description
- **Company name**: Official company name
- **Date range**: Format `YYYY — Present` or `YYYY — YYYY` or `MON YYYY — MON YYYY`
- **Description**: 2-4 sentences of concrete, technical work done
- **Tags**: 3-5 technologies or domains

### 2. Determine Position

Experiences are ordered **reverse chronologically** (newest first):
1. Current/most recent position → top
2. Older positions → below
3. Non-dated entries (like "Ongoing" hackathons) → bottom

### 3. Insert the HTML

Location in `index.html`: Inside `<ol class="experience-list">`, as a new `<li class="experience-item">`.

### 4. Update Context Files

After adding to HTML, also update `context/experience.md` with the raw text version:

```
Role Title | Company Name START – END
Description sentence 1.
Description sentence 2.
```

### 5. Validate

- [ ] Date format is consistent with existing entries
- [ ] `h3` contains role + company with proper `<span>` wrapper
- [ ] Description uses concrete verbs (built, deployed, integrated, architected)
- [ ] Tags are 3-5 specific technologies
- [ ] Entry is in correct chronological position
- [ ] `context/experience.md` is also updated

## Date Format Conventions

| Situation | Format | Example |
|-----------|--------|---------|
| Current position | `YEAR — Present` | `2026 — Present` |
| Past position | `YEAR — YEAR` | `2024 — 2025` |
| Short engagement | `MON YEAR` | `JUL 2025` |
| Non-dated ongoing | `Ongoing` | Hackathons entry |

## Writing Guidelines for Descriptions

### DO:
- Start with strong verbs: Architected, Built, Deployed, Integrated, Streamlined, Led
- Mention specific technologies used
- Quantify impact when possible
- Focus on what differentiates this from generic roles

### DON'T:
- Use "Responsible for" (passive voice)
- Write "Worked on various projects" (too vague)
- Claim "end-to-end" without specifics
- Use more than 4 sentences (keep it scannable)

### Good Example:
> Architected scalable PostgreSQL-based data pipelines for extraction, feature engineering, and validation. Improved the production deployment lifecycle of predictive models through CI/CD integration and MLOps practices, helping align data science and engineering in a demanding industrial environment.

### Bad Example:
> Worked on data projects and helped the team deliver machine learning solutions. Responsible for various tasks including database management and deployment.

## Tag Conventions

- Use specific tech: `PostgreSQL`, `FastAPI`, `Docker`
- Use domain qualifiers for non-tech tags: `Production Systems`, `CI/CD`, `MLOps`
- Order: primary language → framework → platform → domain
- 3-5 tags per experience entry

## Current Experience Entries (for reference)

| # | Role | Company | Date | Tags |
|---|------|---------|------|------|
| 1 | Machine Learning and Data Analysis | BHS Corrugated Spain | 2026 — Present | PostgreSQL, Python, CI/CD, MLOps, Production Systems |
| 2 | Hackathons, collaboration, and fast delivery | — | Ongoing | FastAPI, Docker, AWS, OCI, React |

## Section Footer

After the experience list, there's a "View Full Résumé" link:
```html
<div class="section__footer">
  <a class="inline-link" href="cv.pdf" target="_blank" rel="noreferrer">
    View Full Resume
    <svg>...</svg>
  </a>
</div>
```

Keep this link pointing to `cv.pdf`. If the CV file is updated, just replace the PDF — no HTML changes needed.

## Example: Adding a Summer Internship

```html
<li class="experience-item">
  <div class="experience-item__header">
    <span class="experience-item__date">Jun — Sep 2026</span>
    <div class="experience-item__info">
      <h3>Cloud Infrastructure Intern · <span class="experience-item__company">AWS</span></h3>
      <p>
        Built automated provisioning workflows for ECS clusters using Terraform and CDK.
        Contributed to internal observability tooling, reducing mean-time-to-detection
        for service degradation by integrating custom CloudWatch metrics.
      </p>
      <ul class="tag-list" aria-label="Technologies used">
        <li class="tag">AWS</li>
        <li class="tag">Terraform</li>
        <li class="tag">CDK</li>
        <li class="tag">CloudWatch</li>
      </ul>
    </div>
  </div>
</li>
```
