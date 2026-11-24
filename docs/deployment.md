# GitHub Pages deployment

No actual push or deployment is included. These are owner-operated instructions after local verification.

1. Install dependencies using `bun install`, generating `bun.lock`. Run `bun run format`, all quality checks and Playwright tests. Commit the lockfile.
2. Fill the real project data and set the real URL. For a user site named `<username>.github.io`, use `https://<username>.github.io/`. For a project site use `https://<username>.github.io/<repo>/`. Set `publicationReady: true` only after content review. Run `bun run validate:publish`.
3. Create a public repository yourself, keep write access restricted, and enable 2FA. Choose a license deliberately. Check the entire repository and history for credentials and confidential material.
4. When ready, commit and push to `main`. Configure Settings → Pages → Build and deployment → Source → GitHub Actions. If the first workflow ran before Pages was enabled, rerun it manually from the Actions tab.
5. The deployment workflow validates content, formats, lints, typechecks, tests, builds and runs browser tests before uploading `dist`. It uses the base path returned by `configure-pages` so assets work on both root and repository sites. A failed gate stops deployment. Pull requests only run CI; they do not deploy.
6. Open the published URL, confirm real links, screenshots, theme, responsive behavior, metadata and social preview. Run Lighthouse on production and record actual scores. Review accessibility manually.

The configured production workflow may run on pushes to main once enabled. If you want only manual publishing, remove the push trigger from `deploy.yml` and retain `workflow_dispatch`. Optional GitHub environment approvals can provide an additional owner gate. Do not grant collaborators write access if only you should manage content.

## Release checklist

- [ ] Real project screenshots and descriptions, no draft labels or fake URLs
- [ ] GitHub profile and five or more verified project repository links
- [ ] All personal information and assets approved for public use
- [ ] bun.lock generated and committed; formatter/lint/typecheck/test/build pass
- [ ] Browser matrix and root/subpath tests pass
- [ ] Manual keyboard, contrast, zoom, motion and visual review complete
- [ ] Lighthouse and performance budgets measured (target 95+, not guaranteed)
- [ ] Canonical URL, sitemap, social image and robots checked
- [ ] Owner-only write access and deployment branch/environment verified
- [ ] Published URL verified by owner
