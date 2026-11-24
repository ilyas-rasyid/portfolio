import type { Project } from "../../types/project";

// Development illustration. Replace with verified project content.
export const project = {
  id: "office-resource-booking",
  title: "Office Resource Booking",
  description:
    "A web application for reserving shared office facilities and managing resource availability.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/orb/preview-1.svg",
      alt: "Illustrative wireframe for Office Resource Booking, view 1",
      caption: "Overview",
    },
    {
      src: "images/projects/orb/preview-2.svg",
      alt: "Illustrative wireframe for Office Resource Booking, view 2",
      caption: "Records",
    },
  ],
  repositoryUrl: "",
  draft: true,
} satisfies Project;
