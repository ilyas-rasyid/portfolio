import { Globe } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";
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
        <div className="project-links">
          {project.liveUrl && (
            <ExternalLink
              className="live-project-link"
              href={project.liveUrl}
              aria-label={`${project.liveLabel ?? "Visit live site"} for ${project.title}`}
            >
              <Globe size={18} /> {project.liveLabel ?? "Visit live site"}
            </ExternalLink>
          )}
          <ProjectRepositoryLink url={project.repositoryUrl} title={project.title} />
        </div>
      </div>
    </article>
  );
}
