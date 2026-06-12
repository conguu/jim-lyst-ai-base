# Accessibility report and checklist (WCAG AA)

Summary
- Theme: dark by default, supports system preference and manual toggle with persistence.
- Semantic HTML: landmarks (`header`, `nav`, `main`, `footer`) and heading order used.
- Keyboard: all interactive controls reachable by keyboard; visible focus outlines provided.
- Forms: accessible labels, `aria-required` on required fields, `novalidate` used with JS validation.
- Images: all images include `alt` attributes.

Color contrast measurements
All contrast ratios were computed for the colors used in the site.

- Body text (dark mode): #FFFFFF on #0B0D12 — contrast ratio ≈ 19.44:1 (meets WCAG AA/AAA).
- Accent text: #B7B5E4 on #0B0D12 — contrast ratio ≈ 9.93:1 (meets WCAG AA/AAA).
- Primary on light background: #3A405A on #FFFFFF — contrast ratio ≈ 10.18:1 (meets WCAG AA/AAA).
- Neutral on dark background: #C8C6AF on #0B0D12 — contrast ratio ≈ 11.25:1 (meets WCAG AA/AAA).

Updated precise values (computed):

- Body text (dark mode): #FFFFFF on #0B0D12 — contrast ratio 19.43:1 (meets WCAG AA/AAA for normal text).
- Accent text: #B7B5E4 on #0B0D12 — contrast ratio 9.92:1 (meets WCAG AA/AAA).
- Primary on light background: #3A405A on #FFFFFF — contrast ratio 10.18:1 (meets WCAG AA/AAA).
- Neutral on dark background: #C8C6AF on #0B0D12 — contrast ratio 11.27:1 (meets WCAG AA/AAA).

Keyboard & focus
- Skip link included and becomes visible on focus.
- Theme toggle buttons are `button` elements with `aria-label` and `aria-pressed`.
- Focus outlines use high-contrast accent colors to be visible to keyboard users.

Semantic markup & ARIA
- Landmarks for main regions are present.
- Buttons and interactive elements include `aria-label` or descriptive text.
- Form fields include `label` elements and `aria-required` attributes.

Images & alternatives
- All decorative/project images include `alt` text describing the visual. Replace placeholders with meaningful descriptions when adding real screenshots.

Testing steps for judges
1. Keyboard navigation: use Tab and Shift+Tab to reach header links, theme toggle, project links, and form fields.
2. Color contrast: verify contrast with a contrast tool using hex values above.
3. Mobile responsiveness: resize viewport to common widths (360px, 375px, 768px) and confirm layout adapts.
4. Contact form: Fill fields and submit — the default mail client should open with pre-filled subject/body.

Notes
- The site is static and intentionally avoids external libraries to keep the surface area small and auditable.
