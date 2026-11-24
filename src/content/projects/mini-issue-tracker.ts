import type { Project } from "../../types/project";

// Development illustration. Replace with verified project content.
export const project = {
  id: "mini-issue-tracker",
  title: "Mini Issue Tracker",
  description:
    "An application for tracking issues, organizing tasks, and managing development workflows.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/mini-issue-tracker/preview-1.svg",
      alt: "Illustrative wireframe for Mini Issue Tracker, view 1",
      caption: "Overview",
    },
    {
      src: "images/projects/mini-issue-tracker/preview-2.svg",
      alt: "Illustrative wireframe for Mini Issue Tracker, view 2",
      caption: "Records",
    },
  ],
  repositoryUrl: "",
  draft: true,
} satisfies Project;
