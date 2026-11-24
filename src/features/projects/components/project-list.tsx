import type { Project } from "@/types/project";
import { Reveal } from "@/components/motion/reveal";
import { ProjectItem } from "./project-item";

export function ProjectList({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <Reveal key={project.id} className="project-row">
          <ProjectItem project={project} number={index + 1} />
        </Reveal>
      ))}
    </div>
  );
}
