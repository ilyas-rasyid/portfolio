import type { Project } from "../../types/project";

export const project = {
  id: "mini-issue-tracker",
  title: "Mini Issue Tracker",
  description:
    "Developer-focused issue and bug tracker for managing multi-project workflows, tracking issue priority and progress status, recording audit activity history, and storing attachments via S3 object storage.",
  category: "Web Application",
  technologies: ["React", "TypeScript", "Bun", "ElysiaJS", "Prisma", "PostgreSQL", "S3"],
  screenshots: [
    {
      src: "images/projects/mit/image1.png",
      alt: "Mini Issue Tracker projects and issue overview",
      caption: "Overview",
    },
    {
      src: "images/projects/mit/image2.png",
      alt: "Mini Issue Tracker ticket list and filters",
      caption: "Issues",
    },
    {
      src: "images/projects/mit/image3.png",
      alt: "Mini Issue Tracker issue details and activity log",
      caption: "Issue Detail",
    },
  ],
  repositoryUrl: "https://github.com/ilyas-rasyid/issue_tracker",
} satisfies Project;
