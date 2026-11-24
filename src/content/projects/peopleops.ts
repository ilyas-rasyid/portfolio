import type { Project } from "../../types/project";

// Development illustration. Replace with verified project content.
export const project = {
  id: "peopleops",
  title: "PeopleOps",
  description:
    "A human resource management application for organizing employee records and HR workflows.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/peopleops/preview-1.svg",
      alt: "Illustrative wireframe for PeopleOps, view 1",
      caption: "Overview",
    },
    {
      src: "images/projects/peopleops/preview-2.svg",
      alt: "Illustrative wireframe for PeopleOps, view 2",
      caption: "Records",
    },
    {
      src: "images/projects/peopleops/preview-3.svg",
      alt: "Illustrative wireframe for PeopleOps, view 3",
      caption: "Workflow",
    },
  ],
  repositoryUrl: "",
  draft: true,
} satisfies Project;
