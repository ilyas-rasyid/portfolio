import type { Project } from "@/types/project";

export function ProjectDescription({ project }: { project: Project; number?: number }) {
  return (
    <>
      <p className="eyebrow project-index">
        {project.category}
        {project.year && ` / ${project.year}`}
      </p>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.description}</p>
      {project.draft ? (
        <p className="draft-label">Draft content — not verified for publication</p>
      ) : (
        project.status && <p className="mono-label">{project.status}</p>
      )}
    </>
  );
}
