import type { Project } from "../../types/project";

export const project = {
  id: "peopleops",
  title: "PeopleOps HRIS",
  description:
    "Human Resource Information System for employee directory management, server-based daily attendance, annual and unpaid leave requests, managerial approvals, and employment audit history.",
  category: "Full Stack",
  technologies: ["React", "TypeScript", "Bun", "ElysiaJS", "Prisma", "PostgreSQL"],
  screenshots: [
    {
      src: "images/projects/peopleops/image1.png",
      alt: "PeopleOps HRIS workspace overview",
      caption: "Overview",
    },
    {
      src: "images/projects/peopleops/image2.png",
      alt: "PeopleOps HRIS employee directory and records",
      caption: "Employees",
    },
    {
      src: "images/projects/peopleops/image3.png",
      alt: "PeopleOps HRIS leave and attendance workflows",
      caption: "Attendance & Leave",
    },
  ],
  repositoryUrl: "https://github.com/ilyas-rasyid/people_ops",
} satisfies Project;
