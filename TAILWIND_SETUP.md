# ECO GROW — Local Tailwind CSS Setup

## Overview
This project uses **Tailwind CSS** configured locally instead of the CDN version. All styling is pre-compiled into a single CSS file for optimal performance.

## Project Structure
```
ecoGrow/
├── css/
│   └── output.css          # Compiled Tailwind CSS (auto-generated)
├── index.html              # Home page
├── about.html              # About/Corporate Overview
├── programs.html           # Conservation Programs
├── impact-studies.html     # Scientific Impact Studies
├── article-1.html          # Reef Recovery Article
├── article-2.html          # Arctic Ice Article
├── article-3.html          # Urban Reforestation Article
├── get-involved.html       # Direct Action Portal
├── donate.html             # Donation Portal
├── volunteer.html          # Volunteer Enrollment
├── partner.html            # Partner Alliances
├── subscribe.html          # Newsletter Signup
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Use
├── input.css               # Source CSS with Tailwind directives
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # npm dependencies & scripts
└── .gitignore              # Git ignore rules
```

## Installation & Setup

### Prerequisites
- Node.js 16+ (with npm)

### Install Dependencies
```bash
npm install
```

This installs:
- `tailwindcss` - Utility-first CSS framework
- `postcss` - CSS transformation tool
- `autoprefixer` - Adds vendor prefixes automatically

## Build Scripts

### Development Mode (Watch for Changes)
```bash
npm run watch
```
This watches for changes in HTML and CSS files and automatically recompiles the CSS.

### Production Build
```bash
npm run build
```
This compiles the CSS once.

## Configuration Files

### `tailwind.config.js`
Tailwind configuration that includes:
- Content paths pointing to all HTML files
- Custom theme colors (forest green, lime, neutral)
- Custom font family (editorial)
- Extended utilities

### `postcss.config.js`
PostCSS configuration that applies Tailwind CSS and autoprefixer plugins.

### `input.css`
Source CSS file containing:
- Tailwind directives (@tailwind base, components, utilities)
- Custom design tokens
- Brand colors and animations
- Diagonal clip-path utility
- Page transition animations

## Usage

### HTML Files
All HTML files reference the compiled CSS:
```html
<link rel="stylesheet" href="css/output.css">
```

No inline `<style>` tags or CDN scripts needed.

### Tailwind Classes
Use standard Tailwind utility classes throughout HTML:
```html
<div class="bg-[#2d4a22] text-[#e2f197] p-8 rounded-xl">
  <!-- Content -->
</div>
```

### Custom Colors
Custom colors defined in `tailwind.config.js`:
- `bg-forest` / `text-forest` - #2d4a22
- `bg-lime` / `text-lime` - #e2f197
- `bg-neutral` / `text-neutral` - #f4f3ef

### Custom Font
Custom editorial font available via:
```html
<h1 class="font-editorial">Heading</h1>
```

## Workflow

1. **Edit HTML or Update Tailwind Config**
   ```bash
   npm run watch
   ```
   Terminal will show CSS recompilation as you make changes.

2. **Before Deployment**
   ```bash
   npm run build
   ```
   Creates production-ready CSS file.

3. **Commit Changes**
   - HTML files should be committed
   - `css/output.css` should be committed (it's in git)
   - `node_modules/` is ignored (specified in .gitignore)

## Performance Benefits

✅ **Single CSS file** - 32KB compressed with all utilities
✅ **No unused CSS** - PurgeCSS automatically removes unused styles
✅ **Fast compilation** - Takes only seconds to rebuild
✅ **Better caching** - Stable CSS file for browser caching
✅ **Smaller payload** - Compared to runtime compilation

## Troubleshooting

### CSS not updating?
```bash
npm run build
```
Manually trigger a rebuild.

### Watch mode not working?
Stop the process (Ctrl+C) and restart:
```bash
npm run watch
```

### Class styles not appearing?
Ensure the class is used in an HTML file that's scanned by Tailwind (`content` setting in tailwind.config.js includes all .html files).

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind Configuration](https://tailwindcss.com/docs/configuration)
- [Tailwind CLI](https://tailwindcss.com/docs/installation)
