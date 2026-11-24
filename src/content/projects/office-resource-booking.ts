import type { Project } from "../../types/project";

export const project = {
  id: "office-resource-booking",
  title: "ORBS — Office Resource Booking System",
  description:
    "Centralized office asset reservation platform for meeting rooms, operational vehicles, and equipment, with PostgreSQL exclusion-constraint conflict protection, approval workflows, handover tracking, and maintenance scheduling.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "ElysiaJS", "Prisma", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/orbs/image1.png",
      alt: "ORBS overview dashboard",
      caption: "Overview",
    },
    {
      src: "images/projects/orbs/image2.png",
      alt: "ORBS office resource catalog",
      caption: "Resources",
    },
    {
      src: "images/projects/orbs/image3.png",
      alt: "ORBS booking schedule and availability",
      caption: "Bookings",
    },
    {
      src: "images/projects/orbs/image4.png",
      alt: "ORBS managerial approvals and handover tracking",
      caption: "Approvals & Handover",
    },
    {
      src: "images/projects/orbs/image5.png",
      alt: "ORBS maintenance scheduling and logs",
      caption: "Maintenance",
    },
  ],
  repositoryUrl: "https://github.com/ilyas-rasyid/orbs",
} satisfies Project;
