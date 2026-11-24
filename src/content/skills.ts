import type { SkillGroup } from "../types/skill";

export const skills: readonly SkillGroup[] = [
  { label: "Languages", technologies: ["TypeScript", "JavaScript", "SQL"] },
  {
    label: "Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "TanStack Query"],
  },
  { label: "Backend", technologies: ["Bun", "ElysiaJS", "Prisma", "REST APIs"] },
  { label: "Database", technologies: ["PostgreSQL"] },
  { label: "Tools & infrastructure", technologies: ["Git", "GitHub", "Docker", "Linux"] },
];
