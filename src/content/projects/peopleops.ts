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
      src: "images/projects/peopleops/image1.png",
      alt: "PeopleOps screenshot 1",
      caption: "Overview",
    },
    {
      src: "images/projects/peopleops/image2.png",
      alt: "PeopleOps screenshot 2",
      caption: "Records",
    },
    {
      src: "images/projects/peopleops/image3.png",
      alt: "PeopleOps screenshot 3",
      caption: "Workflow",
    },
  ],
  repositoryUrl: "",
  draft: true,
} satisfies Project;
