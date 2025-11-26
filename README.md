# Random String Generator

Small, fast React + Vite utility that creates customizable random strings (passwords, tokens, test data). Minimal, extendable, and ready for local development or quick deployment.

## What this project is
A single-page tool that generates random strings with options for length and character sets. Built to be lightweight, easy to read, and simple to extend.

## Why use it
- Quickly produce secure or test-ready random strings
- Handy for password generation, API tokens, or fixture data
- Serves as a clean Vite + React starter for utilities

## Key features
- Configurable length
- Toggle character sets: lowercase, uppercase, numbers, symbols
- Copy-to-clipboard
- Fast dev feedback with Vite HMR
- Small codebase for easy customization

## Project structure
```
Random-String-Generator/
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
└─ src/
   ├─ main.jsx     # app entry
   ├─ App.jsx      # UI + generator logic
   └─ index.css    # styles
```

## Quick start (Windows)
1. Open PowerShell or CMD and go to your projects folder:
   cd c:\Users\Visweswara jeeru\Projects

2. Clone and install:
   git clone <repo-url>
   cd Random-String-Generator
   npm install

3. Start dev server:
   npm run dev
   Open the URL shown in the terminal (usually http://localhost:5173)

## Useful scripts
- npm run dev — start development server
- npm run build — create production build (dist/)
- npm run preview — preview production build
- npm run lint — run ESLint

## How to use
1. Set desired length.
2. Toggle character sets (lower/upper/numbers/symbols).
3. Click "Generate".
4. Click "Copy" to copy the result to clipboard.

## Extend ideas
- Add presets (e.g., strong password, human-readable)
- Save history to localStorage
- Add entropy indicator or strength meter
- Add export (CSV/JSON) or API endpoint

## Troubleshooting
- Port conflict: npm run dev -- --port 3000
- Reinstall dependencies: rm -rf node_modules package-lock.json && npm install
- Styles missing: ensure index.css is imported in main.jsx

## License
MIT

## Author
Visweswara Jeeru — Last updated: November 26, 2025