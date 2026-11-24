import type { SkillGroup } from "../types/skill";

export const skills: readonly SkillGroup[] = [
  { label: "Languages", technologies: ["TypeScript", "JavaScript", "Dart", "SQL"] },
  {
    label: "Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Flutter"],
  },
  { label: "Backend", technologies: ["Bun", "ElysiaJS", "Prisma", "REST APIs"] },
  { label: "Database", technologies: ["PostgreSQL", "Hive"] },
  {
    label: "Tools & Infrastructure",
    technologies: ["Git", "GitHub", "Docker", "Linux"],
  },
];
