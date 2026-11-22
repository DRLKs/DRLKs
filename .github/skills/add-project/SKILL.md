---
name: add-project
description: "Use when: adding a new project to the portfolio, reordering projects, updating project descriptions, changing project tags, or removing a project. USE FOR: any modification to the projects section in index.html. DO NOT USE FOR: layout changes (use portfolio-architecture), experience edits (use add-experience), or about section changes (use update-about)."
---

# Add Project to Portfolio

## When to Use

- User wants to add a new project to the portfolio
- User wants to update an existing project's description, tags, or link
- User wants to reorder or remove projects
- User mentions a new GitHub repository they want to showcase

## Project Types

There are two visual types based on whether the project has an image:

### 1. Project WITH image (featured)

For projects with a screenshot, logo, or demo GIF in `aux/`.

```html
<li class="project-item">
  <a class="project-item__link" href="GITHUB_URL" target="_blank" rel="noreferrer">
    <div class="project-item__inner">
      <div class="project-item__image-wrap">
        <img src="aux/IMAGE_FILE" alt="ALT_TEXT" loading="lazy" decoding="async" width="200" height="ASPECT_HEIGHT" />
      </div>
      <div class="project-item__info">
        <h3>
          PROJECT_NAME
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
          </svg>
        </h3>
        <p>DESCRIPTION (1-2 sentences, concrete, technical)</p>
        <ul class="tag-list" aria-label="Technologies used">
          <li class="tag">TAG1</li>
          <li class="tag">TAG2</li>
          <li class="tag">TAG3</li>
        </ul>
      </div>
    </div>
  </a>
</li>
```

### 2. Project WITHOUT image (compact)

For projects that don't have visual assets. The grid automatically adapts via CSS `:has()`.

```html
<li class="project-item">
  <a class="project-item__link" href="GITHUB_URL" target="_blank" rel="noreferrer">
    <div class="project-item__inner">
      <div class="project-item__info">
        <h3>
          PROJECT_NAME
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
          </svg>
        </h3>
        <p>DESCRIPTION</p>
        <ul class="tag-list" aria-label="Technologies used">
          <li class="tag">TAG1</li>
          <li class="tag">TAG2</li>
        </ul>
      </div>
    </div>
  </a>
</li>
```

## Step-by-Step: Adding a New Project

### 1. Gather Information

Required:
- **Name**: Exact project name (use repo name or display name)
- **URL**: GitHub repository URL (or live demo URL)
- **Description**: 1-2 sentences. Be concrete and technical. Avoid generic phrases.
- **Tags**: 2-4 technology/domain tags

Optional:
- **Image**: Screenshot, logo, or GIF in `aux/` directory

### 2. Determine Position

Projects are ordered by importance/relevance, NOT chronologically. Current order principle:
1. **Featured projects with images first** (roma, Dr. Artificial, basmati)
2. **Text-only projects after** (PokerHelper, Brain, VMware, WikiMovies, Monkey-Pop, MyLeetCode)

Place new projects based on:
- Rust projects → higher priority (core identity)
- Backend/infra projects → higher priority
- Collaborative projects → medium priority
- Coursework/practice → lower priority

### 3. Insert the HTML

Location in `index.html`: Inside `<ol class="project-list">`, as a new `<li class="project-item">`.

### 4. Add Image (if applicable)

- Place the image file in `aux/` (or subdirectory like `aux/projectname/`)
- Use `width="200"` and proportional height
- Always include `loading="lazy" decoding="async"`
- Write a meaningful `alt` text

### 5. Validate

- [ ] Link opens correct repo/demo
- [ ] SVG arrow icon is present in `<h3>`
- [ ] Description is 1-2 sentences, concrete
- [ ] Tags are 2-4 items, specific technologies
- [ ] Image (if present) loads correctly and has alt text
- [ ] `target="_blank" rel="noreferrer"` on external links

## Writing Guidelines for Descriptions

**DO:**
- "Metaheuristic optimization framework built in Rust with zero external dependencies."
- "FastAPI backend with secure Oracle Autonomous Database integration for an AI-assisted chat product."

**DON'T:**
- "A cool project I built for fun." (too vague)
- "End-to-end machine learning pipeline that transforms raw data into actionable insights." (buzzword soup)
- "Full-stack application with many technologies." (not specific)

## Tag Conventions

- Use specific technology names: `Rust`, `FastAPI`, `PostgreSQL`
- Use domain qualifiers: `Computer Vision`, `MLOps`, `Zero Dependencies`
- Keep to 2-4 tags per project
- Don't repeat tags that are obvious from the description
- Capitalize properly: `AWS` not `aws`, `React` not `react`

## Current Projects List (for reference)

| # | Name | Has Image | Tags |
|---|------|-----------|------|
| 1 | roma | Yes (logo) | Rust, Performance, Zero Dependencies |
| 2 | Dr. Artificial | Yes (GIF) | Python, LLMs, Embeddings, RAG |
| 3 | basmati | Yes (screenshot) | React, FastAPI, Docker, AWS |
| 4 | PokerHelper | No | Rust, Computer Vision, Statistics |
| 5 | Brain | No | FastAPI, Oracle ADB, Python |
| 6 | VMware vSphere ESXi Library | No | Bash, VMware, ESXi |
| 7 | WikiMovies | No | Java, Spring Boot, MySQL |
| 8 | Monkey-Pop | No | React, JavaScript |
| 9 | MyLeetCode | No | C, Algorithms |

## Removing a Project

Simply delete the `<li class="project-item">...</li>` block. No other changes needed (no JS references, no CSS selectors targeting specific projects).

## Example: Adding a New Rust Project

If David builds a new CLI tool called "forge" with a logo:

1. Place logo: `aux/forge-logo.png`
2. Insert after `roma` (Rust projects grouped first):

```html
<li class="project-item">
  <a class="project-item__link" href="https://github.com/DRLKs/forge" target="_blank" rel="noreferrer">
    <div class="project-item__inner">
      <div class="project-item__image-wrap">
        <img src="aux/forge-logo.png" alt="forge CLI tool logo" loading="lazy" decoding="async" width="200" height="200" />
      </div>
      <div class="project-item__info">
        <h3>
          forge
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
            <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"/>
          </svg>
        </h3>
        <p>Zero-config deployment CLI for Rust services targeting AWS ECS and Lambda.</p>
        <ul class="tag-list" aria-label="Technologies used">
          <li class="tag">Rust</li>
          <li class="tag">AWS</li>
          <li class="tag">CLI</li>
        </ul>
      </div>
    </div>
  </a>
</li>
```
