# SaaSKit — Automated SQL & API Insights Landing Page

A responsive, conversion-focused landing page template for SaaS analytics products. Built with **Tailwind CSS** and **Alpine.js**.

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Built-in dark mode (based on system preference)
- ✅ Navbar with mobile menu
- ✅ Hero section with badge, headline, subheadline, dual CTAs, and micro-copy
- ✅ Problem vs. Solution comparison section
- ✅ Core Features bento grid (4 cards: 2 large, 2 small)
- ✅ How It Works section (3 steps)
- ✅ Pricing section (3 tiers: Starter $0, Pro $29, Team $79)
- ✅ FAQ accordion section
- ✅ Final CTA banner section
- ✅ Footer with newsletter signup
- ✅ Tailwind CSS via build CLI
- ✅ Alpine.js for lightweight interactivity
- ✅ Clean code, easy to customize
- ✅ Accessible (WCAG-aligned): focus-visible rings, aria-labels, semantic buttons, aria-hidden decorative icons, aria-live announcements, skip-link ready

## Folder Structure

```
nama-template-landing-page/
├── src/
│   ├── sections/           # HTML snippets for each section
│   │   ├── navbar.html         # Navigation with mobile menu
│   │   ├── hero.html           # Hero section with badge and CTAs
│   │   ├── problem-solution.html # Before/After comparison
│   │   ├── features.html       # Core features bento grid
│   │   ├── how-it-works.html   # 3-step process
│   │   ├── pricing.html        # 3 pricing tiers
│   │   ├── faq.html            # FAQ accordion
│   │   ├── cta-banner.html     # Final call-to-action banner
│   │   └── footer.html         # Footer with newsletter
│   ├── input.css           # Tailwind CSS configuration / directives
│   └── main.js             # Alpine.js interactivity (mobile menu, FAQ, email form)
├── dist/                   # Compiled CSS & HTML ready for deploy/preview
│   ├── index.html
│   └── assets/
│       └── output.css
├── public/
│   └── images/             # Placeholder images/illustrations (copyright-free)
├── package.json            # Build & watch scripts for Tailwind
├── LICENSE.txt             # Usage license
└── README.md               # Setup, customization, and deploy guide
```

## Requirements

- Node.js >= 18.0.0
- npm (bundled with Node.js)

## Installation & Running Locally

1. Extract this template ZIP.
2. Open a terminal in the template folder, then run:

```bash
npm install
```

3. Run development mode (auto-watches on file changes):

```bash
npm run dev
```

4. Build for production (CSS will be minified):

```bash
npm run build
```

Build output will be in the `dist/` folder.

## Customizing Content

### Hero Section (`src/sections/hero.html`)
- Badge text (e.g. "✨ v2.0 is now live — Automated SQL & API Insights")
- Headline and subheadline
- Primary and secondary CTA buttons
- Micro-copy below buttons

### Problem vs. Solution (`src/sections/problem-solution.html`)
- Section title
- Before list items (pain points without product)
- After list items (benefits with product)

### Core Features (`src/sections/features.html`)
- Feature titles, descriptions, and card sizes (large/small)

### How It Works (`src/sections/how-it-works.html`)
- Step numbers, titles, and descriptions

### Pricing (`src/sections/pricing.html`)
- Plan names, prices, features, and "Most Popular" badge

### FAQ (`src/sections/faq.html`)
- Questions and answers

### CTA Banner (`src/sections/cta-banner.html`)
- Headline, subheadline, and button text

### Footer (`src/sections/footer.html`)
- Brand description, links, newsletter form

### Colors & Fonts

Edit the `:root` section in `src/input.css`:

```css
:root {
  --color-primary: 234 88 12;      /* orange-600 */
  --color-secondary: 245 246 250;  /* slate-50 */
  --color-accent: 59 130 246;      /* blue-500 */
  --color-text: 15 23 42;          /* slate-900 */
}
```

These variables are used throughout the components. After changing, run `npm run build` to recompile the CSS.

The template uses built-in system fonts (system-ui / Inter via Tailwind default). To change fonts, add a Google Fonts link in the `<head>` of `dist/index.html`, then change the font in Tailwind config or custom CSS.

### Accessibility

Built with Web Interface Guidelines (WIG) compliance:

- **Focus states**: `focus-visible:ring-2` on all interactive elements; `outline:none` removed in favor of `:focus-visible`
- **Semantic HTML**: `<button>` for actions, `<a>` for navigation; no `div` onClick handlers
- **ARIA**: `aria-label` on icon buttons, `aria-expanded` on mobile menu toggle, `aria-hidden="true"` on decorative SVG icons, `aria-live="polite"` on async status messages
- **Forms**: newsletter `<input>` has `<label>`, `autocomplete="email"`, `spellcheck="false"`
- **Color**: `color-scheme: dark` on `<html>`, `<meta name="theme-color">` matches page background
- **Typography**: Title Case headings, single ellipsis character `…`, `text-wrap: balance` on headings
- **Animation**: `transition-*` properties listed explicitly (no `transition: all`), `prefers-reduced-motion` honored on spinners/rotations

## Deploy

This template is a static site. You can deploy to:

- **Vercel**: import repository or upload the `dist/` folder
- **Netlify**: drag the `dist/` folder to Netlify Drop, or connect Git
- **GitHub Pages**: upload `dist/` folder contents to the `gh-pages` branch
- **Other static hosting**: upload all files in the `dist/` folder to your server

Make sure the file `dist/assets/output.css` is available so styles appear correctly.

## License

See the `LICENSE.txt` file for usage rights details. In short: allowed for personal and client projects, prohibited from reselling this template as-is as a competing template.

## Support

If you have questions or need customization help, contact us via the contact form in the template or email the buyer via Gumroad message.
