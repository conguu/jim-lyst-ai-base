# Jane Doe — Internship Portfolio

This is a small, production-ready static portfolio site (plain HTML/CSS/JS) intended for an internship submission.

Quick deploy (GitHub Pages):

1. Create a repository (e.g., `janedoe-portfolio`) and push this folder to the `main` branch.
2. In GitHub repo settings -> Pages, set source to `main` branch and `/ (root)`.
3. Site will be available at `https://<username>.github.io/<repo>/` after a few minutes.

Files
- index.html — home
- projects.html — projects listing
- about.html — bio, skills
- contact.html — accessible contact form (mailto fallback)
- styles.css — single stylesheet with dark/light variables
- script.js — theme handling + form enhancement
- assets/placeholder.svg — simple placeholder image
- accessibility-report.md — WCAG AA checklist and color-contrast report

How to update projects
- Edit `projects.html` and replace placeholder project articles with real projects. Each project entry should include:
  - An image (optimized SVG/PNG) with an informative `alt` attribute.
  - One-line description.
  - A live link and a GitHub link. Do not list libraries or stacks in the entry.

How judges should test
- Keyboard: use `Tab` to navigate through header links, theme toggle, and form controls.
- Theme: click the theme toggle; preference is persisted in `localStorage`.
- Contact: submit the contact form — it opens the default mail client via `mailto:` (progressive enhancement). If JS is disabled, use the fallback mailto link provided on the page.
# Base Template for AI Experiments

This repository serves as a foundational template for AI experiments for early students.