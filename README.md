# Sanu Kumar — Portfolio

Personal portfolio built with React, Vite and Three.js (react-three-fiber).

- 3D background scene that reacts to scroll and pointer movement
- 3D tilt cards, scroll-reveal animation, scroll-progress bar
- Responsive layout, light and dark theme, reduced-motion support

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

Requires Node 18 or newer.

## Edit content

- Projects and skills: `src/data.js`
- Hero, experience and contact text: `src/components/`
- Colours and layout: `src/styles.css`
- 3D scene: `src/components/Scene.jsx`

## Deploy (GitHub Pages)

1. Push this repo to GitHub on the `main` branch.
2. In the repo, open Settings, then Pages, and set Source to **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

The Vite `base` is `./`, so it works under `https://<user>.github.io/<repo>/` without changes.
