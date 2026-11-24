# Personal Developer Portfolio

A single-page, frontend-only Full Stack Developer portfolio. Quiet Premium editorial design, React, strict TypeScript, Vite, Tailwind CSS and Bun. Projects link to GitHub repositories; they do not require live deployments.

> **Development handoff:** the five project entries include clearly labelled drafts and original illustrative wireframes, not actual application screenshots. No GitHub URLs, employment records, photograph or contact details were invented. Production publication is intentionally gated. Build and browser tests require installing dependencies locally; see `docs/verification.md`.

## Getting started

Requirements: Bun and Node.js 22.12+ (for the Vite/test toolchain).

```sh
bun install
bun run format
bun run dev
```

Open the localhost URL printed by Vite. `bun install` generates `bun.lock`; commit it with the project. Direct dependency versions are specified in `package.json`. The lockfile is not fabricated in this handoff because the package registry was unavailable.

## Quality checks

```sh
bun run format:check
bun run lint
bun run typecheck
bun run test
bun run validate:content
bun run build
bunx playwright install --with-deps chromium firefox webkit
bun run test:e2e
```

`bun run check` groups lint, typecheck, Vitest, development content validation and production build. `bun run preview` serves the built output. Test repository-level hosting with `PORTFOLIO_BASE=/portfolio-test/ bun run test:e2e --project=chromium` on Linux/macOS.

## Architecture

```text
src/
  app/                 Application composition and providers
  components/          Shared UI, layout, motion
  features/            Introduction, projects, experience, about, skills, contact, theme
  content/             Editable static data; one file per project
  hooks/               Shared browser behavior
  lib/                 Pure utilities and browser adapters
  styles/              Semantic tokens and focused CSS modules
  types/               Shared data contracts
public/                Profile, project and social images; résumé
config/                Build-time metadata
scripts/               Publication/content validation
tests/                 Unit, component and browser tests
.github/workflows/     CI and gated GitHub Pages deployment
docs/                  Maintenance, architecture, release and verification
```

No backend, database, CMS, login, external project API or global state library. Theme is the only persistent application preference. Content is imported directly from TypeScript. Gallery state is local to each project. See `docs/architecture.md`.

## Update your information

- `src/content/profile.ts`: name, role, introduction, optional portrait and résumé.
- `src/content/about.ts`, `experience.ts`, `skills.ts`: verified professional information.
- `src/content/social-links.ts`: your actual GitHub, LinkedIn and email.
- `src/content/projects/`: one file per project, ordered in `index.ts`.
- `src/content/site-config.ts`: real URL and publication switch.
- `public/images/projects/`: actual screenshots. Replace the labelled SVG wireframes.

Optional items are hidden when unavailable. See `docs/content-maintenance.md` for an example of adding a project.

## Deployment

The included GitHub Actions workflows run quality checks and deploy only from `main` after content passes publication validation. Do not push until the initial local setup, formatting, testing and privacy checks are complete. Enable GitHub Pages with GitHub Actions as the source when you explicitly choose to publish. The project repository can be public, but only authorized writers can alter the canonical site.

See `docs/deployment.md` for the full checklist. No repository has been created, pushed or deployed as part of this handoff.

## License

No open-source license has been selected for your personal portfolio. Choose one deliberately before publication. Third-party dependencies retain their respective licenses; the Geist font packages are installed locally through dependencies and retain their upstream licenses.
