# Ahmad Bilal — Portfolio

A responsive light-theme portfolio built with React and Vite. Includes six public projects, category filters, professional experience, skills, education, resume download, and direct contact links.

## Run locally

Use Node.js 22.12+ and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

Deploy the generated `dist/` directory. For the existing Vercel project, use the Vite preset, `pnpm build` as the build command, and `dist` as the output directory.

## Content maintenance

- `src/App.jsx`: project data, skills, experience, education, and contact details.
- `src/App.css` and `src/index.css`: layout and light-theme styles.
- `public/Ahmad-Bilal-Resume.pdf`: downloadable original resume.
- `src/assets/fonts`: locally hosted DM Sans and Manrope with OFL licenses.

The contact action opens the visitor's email application. Copy email uses the Clipboard API with a visible fallback message. No email service credentials or form backend are required.

## Sources and editorial choices

Reviewed the supplied Ahmad Bilal resume and all ten public repositories returned by the GitHub API on September 22, 2026. The portfolio features Smart_Tripster_Backend, munch-backend, User_Chat_App, Care-Home-Marketplace-BE and its Android companion, Student-Management-System, and Used_Car_Price_Pridictor. FastAPI-Postman-Demo and neetcode-submissions are secondary links; the profile and portfolio repositories are not presented as separate product projects.

Career dates, education, and CodeBryx impact metrics follow the supplied resume. Public repository source and READMEs were used for project descriptions. Care Home Marketplace is explicitly labeled a prototype because the backend uses in-memory storage. Munch is described by its implemented weighted recommendation logic rather than its README's scikit-learn claim. Project graphics are illustrative, not product screenshots.

## Validation

- Production build and ESLint.
- Desktop and mobile visual review.
- Project filters: all (6), backend (4), AI & ML (2).
- Mobile navigation and resume PDF response.
- No horizontal overflow at 320, 390, 768, 1024, and 1440 pixels.
- No runtime errors in the browser smoke checks.
