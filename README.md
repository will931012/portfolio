# Wilian Pinero Gonzalez — Portfolio

Personal portfolio site built with **React 19, Vite, TypeScript, and Tailwind CSS v4**. It's a single-page site with featured projects (filterable, with detail dialogs), skills, experience, education, and contact sections.

## Requirements

- Node.js 20.19+ or 22.12+ (Vite 8 requirement)
- npm

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

## Scripts

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload           |
| `npm run build`   | Type-check and build to `dist/`                |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Lint with oxlint                               |

## Editing content

All copy lives in two data files, so you rarely need to touch components.

| File                   | Contains                                                           |
| ---------------------- | ------------------------------------------------------------------ |
| `src/data/projects.ts` | Project cards and detail views: goal, problem, features, stack, links, screenshots |
| `src/data/profile.ts`  | Name, intro, links, skills, experience, education, certifications, languages |

### Before you deploy

- [x] **Email:** set to `wilianpg93@gmail.com` in `src/data/profile.ts`.
- [x] **LinkedIn / GitHub:** set in `src/data/profile.ts`.
- [x] **Résumé:** `public/resume.pdf` is generated from `resume/resume.html` (see below).

### Updating the résumé

The PDF at `public/resume.pdf` is generated from `resume/resume.html`, so edit the HTML, not the PDF.

1. Edit `resume/resume.html` and open it in Chrome.
2. Press **Ctrl+P** → Destination **Save as PDF**, Paper **Letter**, Margins **Default**, and enable **Background graphics**.
3. Save over `public/resume.pdf`.
4. Optionally refresh the preview thumbnail (`public/resume-preview.webp`) with a screenshot of the first page at 816×1056.

Education, certifications, languages, and experience shown on the site live in `src/data/profile.ts`, so update them there too if they change.

### Adding project screenshots

1. Put the image in `public/projects/`, e.g. `public/projects/mlb.png` (a 16:10 aspect ratio fits the frame best).
2. In `src/data/projects.ts`, set:
   ```ts
   image: { src: '/projects/mlb.png', alt: 'Game slate showing win probabilities for each matchup' },
   ```
Until you add one, each project shows a neutral wireframe placeholder (a browser window for web projects, a phone for mobile ones).

### Adding project links

Replace `null` with the full URL:

```ts
links: { github: 'https://github.com/your-handle/repo', demo: 'https://your-demo.vercel.app' },
```

Links that are still `null` show as "coming soon" instead of a broken link.

### Project options

| Field             | Effect                                                                  |
| ----------------- | ----------------------------------------------------------------------- |
| `featured: true`  | Card spans the full grid width on large screens                          |
| `compact: true`   | Listed under "More repositories" as a smaller card without a screenshot |
| `status`          | Small badge, e.g. `'Early stage'`                                       |
| `links.demo`      | Adds a "Live site" link and includes the project in the "Live sites" filter |
| `links.demoNote`  | Shown next to the live link, e.g. `'Sign-in required'`                  |
| `platform`        | Placeholder frame when there's no image: `'web'`, `'mobile'`, or `'code'` |

Projects render in array order. Keep the number of regular (non-featured, non-compact) projects even so the two-column grid has no gaps.

Images in `public/projects/` are 1440×900 WebP files: real screenshots for the live sites, MLB Edge Predictor, and SmartInspector, and designed cover cards for projects that can't be captured (the iOS app, the Shopify themes, the CLI tool, and the e-commerce platform). Replace a cover with a real screenshot at the same size whenever one is available.

### Adding a project or filter category

Add an object to the `projects` array. `categories` controls which filters it appears under (`'web'`, `'mobile'`, `'ai'`, `'commerce'`). To add a new category, extend `ProjectCategory` in `src/types.ts` and add a label to `categoryLabels` in `projects.ts`; the filter button appears automatically.

## Project structure

```
src/
  components/      UI sections and shared pieces (Header, Hero, Projects, ProjectDialog, …)
  data/            Editable content (projects.ts, profile.ts)
  hooks/           useActiveSection — highlights the current section in the nav
  types.ts         Content types
  index.css        Tailwind import, theme tokens (colors, fonts), base styles
resume/
  resume.html      Source for the résumé PDF
public/
  resume.pdf       Generated from resume/resume.html
  resume-preview.webp  Résumé thumbnail shown on the site
  projects/        Project screenshots (.webp)
```

Colors and fonts are defined as Tailwind theme tokens in the `@theme` block in `src/index.css`. Change `--color-accent` there to change the accent across the site.

## Accessibility

- Semantic landmarks, a skip link, and one heading hierarchy per section
- Everything is keyboard-operable with visible focus rings
- Project details use the native `<dialog>` element: focus moves into it, Escape closes it, and focus returns to the card that opened it
- Filter buttons expose `aria-pressed`, and the result count is announced
- Motion (scroll reveals, smooth scrolling, dialog animation) is turned off under `prefers-reduced-motion`
- Text colors are chosen to meet WCAG AA contrast on the dark background

## Deploying to Vercel

**From the dashboard**

1. Push this project to a GitHub repository.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. The defaults are correct:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

**From the CLI**

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No environment variables or server functions are needed. The contact section uses a `mailto:` link, so there's no backend to host.
