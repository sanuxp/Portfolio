# Sanu Kumar — Portfolio

Personal portfolio built with React and Vite. Light and dark themes, scroll-reveal animation, 3D-tilt project cards,
reduced-motion support, responsive down to phone width.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

Requires Node 18 or newer.

## Themes

Each theme lives on its own branch. `main` is the default theme (Signal).

| Branch | Theme |
|---|---|
| `main` | Signal: terminal and code window |
| `theme/waveform` | Waveform: sound bars |
| `theme/blueprint` | Blueprint: technical drawing |
| `theme/editorial` | Editorial: serif, quiet |
| `theme/aurora` | Aurora: soft glass |
| `theme/brutalist` | Brutalist: thick borders |
| `theme/swiss` | Swiss: grid and type |
| `theme/nordic` | Nordic: calm sage |
| `theme/amber-crt` | Amber CRT: retro monitor |
| `theme/black-hole` | Black hole: dark only, 3D scene (needs `three`, `@react-three/fiber`, `@react-three/drei`) |

A theme is only these files, so branches stay small and easy to compare:

- `src/theme/tokens.css`: colours (dark and light), radii, fonts
- `src/theme/theme.css`: decoration for that theme
- `src/theme/Backdrop.jsx`: fixed layer behind the page
- `src/theme/HeroArt.jsx`: graphic on the right of the hero
- the font link in `index.html`

Try one with `git switch theme/swiss`, then `npm run dev`.

## Edit content

- Projects, skills, background and contact links: `src/data.js`
- Hero text: `src/components/Hero.jsx`
- Layout shared by every theme: `src/styles.css`

## Deploy (GitHub Pages)

1. Push this repo to GitHub on the `main` branch.
2. In the repo, open Settings, then Pages, and set Source to **GitHub Actions**.
3. Each push to `main` runs `.github/workflows/deploy.yml` and publishes the site.

The Vite `base` is `./`, so it works under `https://<user>.github.io/<repo>/` without changes.
