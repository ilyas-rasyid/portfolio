import type { Project } from "../../types/project";

export const project = {
  id: "pvms",
  title: "PVMS — Procurement & Vendor Management",
  description:
    "End-to-end procure-to-pay platform covering purchase requests, tiered managerial approvals, vendor RFQ sourcing, purchase order issuance, goods receipt verification, and 3-way invoice matching.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "ElysiaJS", "Prisma", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/pvms/image.png",
      alt: "PVMS procurement dashboard overview",
      caption: "Dashboard",
    },
    {
      src: "images/projects/pvms/image2.png",
      alt: "PVMS purchase requests and vendor workflow",
      caption: "Procurement Workflow",
    },
  ],
  repositoryUrl: "https://github.com/ilyas-rasyid/pvm",
} satisfies Project;
