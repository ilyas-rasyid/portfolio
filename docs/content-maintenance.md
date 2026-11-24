# Content maintenance

Only the repository owner or authorized contributors edit the canonical site. Public viewers may inspect or fork code, but cannot modify your original repository without granted write access. No admin UI or backend is needed.

## Add a project

1. Place actual, sanitized screenshots in `public/images/projects/inventory/`. A thumbnail plus optional high-resolution image can be used. WebP is recommended; keep the thumbnail near 300 KB or less when legibility permits.
2. Create `src/content/projects/inventory.ts`:

```ts
import type { Project } from "../../types/project";

export const project = {
  id: "inventory",
  title: "Inventory Management",
  description: "A web application for managing stock movements.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/inventory/dashboard.webp",
      alt: "Inventory dashboard showing sample stock data",
      caption: "Dashboard",
    },
  ],
  repositoryUrl: "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY",
  draft: true,
} satisfies Project;
```

The URL above is an example, not a real repository. Replace it and verify the screenshot, project purpose and technologies. Set `draft: false` only after reviewing the actual content. The UI will hide an empty or invalid project link.

3. Import the new project in `src/content/projects/index.ts` and add it to the array in the desired order. IDs must be unique. The project count and sequence numbers are derived automatically.
4. Run `bun run format`, `bun run check`, then browser tests. No UI changes are required.

## Update your identity

Add a genuine portrait to `public/images/profile/` and configure `profile.portrait`. Put your reviewed PDF in `public/resume/` and configure `profile.resume`. Use relative asset paths without a leading slash. Add verified employment only if you want it public. Configure public email, GitHub and LinkedIn in `social-links.ts`. Do not insert private contacts, credentials, customer data or confidential screenshots anywhere in the public repository, even when sections are hidden.

Update the social preview image if your name or title changes. The metadata title and description are generated from the content files.

## Before publishing

Replace all five drafts, add actual screenshots and repository links, provide GitHub profile URL, set the actual HTTPS site URL, check the social image, and set `publicationReady: true` in `site-config.ts` only after reviewing the content. Run `bun run validate:publish`. Optional portrait, CV, email, LinkedIn and work history may remain absent.
