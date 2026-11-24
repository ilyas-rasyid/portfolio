import type { Project } from "@/types/project";
import { ProjectDescription } from "./project-description";
import { ProjectGallery } from "./project-gallery";
import { ProjectRepositoryLink } from "./project-repository-link";
import { ProjectTechnologies } from "./project-technologies";

export function ProjectItem({ project, number }: { project: Project; number: number }) {
  return (
    <article className="project-item">
      <ProjectGallery project={project} priority={number === 1} />
      <div className="project-content">
        <ProjectDescription project={project} number={number} />
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectRepositoryLink url={project.repositoryUrl} title={project.title} />
      </div>
    </article>
  );
}
