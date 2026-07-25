---
name: profile-readme-visual
description: Maintain or redesign the README.md of the special DRLKs GitHub profile repository as an almost exclusively visual presentation. Use when editing the profile README, adding technologies, charts, icons, badges, repository cards, or public data obtained through APIs.
---

# Visual profile README

## Goal

Treat this repository's `README.md` as a visual composition for David's
(`DRLKs`) GitHub profile, not as technical documentation. Communicate his work
and technologies through images, icons, cards, badges, and charts before text.

Write all visible README content in English.

## Content rule

- Keep visible text to a minimum: short headings, accessible labels, and
  essential links only.
- Do not add introductory paragraphs, long biographies, textual lists, tables,
  or narrative sections.
- Represent languages and tools with icons or visual badges.
- Represent activity, contributions, and statistics with charts or visual
  cards.
- Represent featured projects with linked cards or images, adding a brief label
  only when it is needed for clarity.
- Do not repeat in text what an image, icon, or chart already communicates.

Use concise image alt text to preserve accessibility. Do not turn alt text into
a second textual version of the profile.

## Aesthetic criteria

- Keep a clear visual hierarchy: minimal introduction, technologies, activity,
  and projects, in that order when present.
- Use a centered layout and consistent spacing; avoid dense or incompatible
  visual blocks.
- Check that resources work in GitHub light and dark themes. Prefer transparent
  or neutral backgrounds.
- Choose a few high-quality elements instead of accumulating badges or widgets.
- Use only resources with a reasonable source, license, and expected stability.
  Keep local images in `figures/` when relying on an external service is not
  appropriate.

## Public API data

Public GitHub API data may be included when it supports the visual profile:
contributions, languages, activity, or repository cards. Before adding it:

1. Confirm that the data is public and belongs to `DRLKs`.
2. Prefer a chart, card, or badge over generated text.
3. Do not include tokens, keys, credential-bearing URLs, or private data.
4. Avoid services that require visitor authentication or report unreliable
   metrics.
5. Confirm that the API or widget URL loads without errors and degrades
   acceptably if the service is unavailable.

Do not create a backend integration, store API responses, or add application
dependencies just to show a metric in this repository.

## Final check

Before completing an edit, verify that the README:

- Uses English for every visible text element.
- Contains only brief supporting text.
- Truly prioritizes useful visual content.
- Keeps links and images working.
- Shows only information related to David's GitHub profile.
