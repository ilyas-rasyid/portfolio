import type { SkillGroup } from "../types/skill";

export const skills: readonly SkillGroup[] = [
  {
    label: "Languages",
    technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "Dart", "SQL"],
  },
  {
    label: "Frontend",
    technologies: ["React", "Vite", "Tailwind CSS", "TanStack Query", "Flutter"],
  },
  { label: "Backend", technologies: ["Bun", "ElysiaJS", "Prisma", "REST APIs"] },
  { label: "Database", technologies: ["PostgreSQL", "MongoDB", "Hive"] },
  {
    label: "Design, Workflow & Infra",
    technologies: ["Figma", "Git", "GitHub", "CI/CD", "Docker", "Linux", "Vitest"],
  },
];
