# SaaSKit — SaaS Landing Page Template

A responsive, conversion-focused landing page template ready to sell on Gumroad. Built with **Tailwind CSS** and **Alpine.js**.

## Features

- ✅ Fully responsive (mobile-first)
- ✅ Built-in dark mode (based on system preference)
- ✅ Navbar with mobile menu
- ✅ Hero section with CTA
- ✅ Feature cards
- ✅ Pricing table (3 plans + monthly/yearly toggle)
- ✅ FAQ accordion
- ✅ Footer with newsletter signup
- ✅ Tailwind CSS via CDN / build CLI
- ✅ Alpine.js for lightweight interactivity
- ✅ Clean code, easy to customize

## Folder Structure

```
nama-template-landing-page/
├── src/
│   ├── sections/           # HTML snippets for each section (easy copy-paste)
│   │   ├── navbar.html
│   │   ├── hero.html
│   │   ├── features.html
│   │   ├── pricing.html
│   │   ├── faq.html
│   │   └── footer.html
│   ├── input.css           # Tailwind CSS configuration / directives
│   └── main.js             # Light interactivity (mobile menu, FAQ, pricing toggle)
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

## Customizing Colors & Fonts

### Colors

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

### Font

The template uses built-in system fonts (system-ui / Inter via Tailwind default). To change fonts, add a Google Fonts link in the `<head>` of `dist/index.html`, then change the font in Tailwind config or custom CSS.

## Sections Frequently Changed (Manual Edit)

Here are the sections usually needing adjustment before selling or using:

| Section | File | Notes |
|---------|------|-------|
| Hero title | `src/sections/hero.html` | Replace `<h1>` text and the paragraph below it |
| Plan prices | `src/sections/pricing.html` | Change price numbers (`$0`, `$19`, etc.) and plan names |
| CTA button links | All sections | Change `href="#"` on `btn-primary` buttons |
| Email form | `src/sections/footer.html` | Replace action endpoint or your email integration |
| Logo / Brand | All sections | Change text "SaaSKit" to your brand |
| Copyright year | `dist/index.html` | Automatic via JS (`new Date().getFullYear()`) |

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
