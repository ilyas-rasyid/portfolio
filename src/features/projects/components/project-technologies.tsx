export function ProjectTechnologies({
  technologies,
}: {
  technologies: readonly string[];
}) {
  if (!technologies.length) return null;
  return <p className="project-technologies">{technologies.join(" · ")}</p>;
}
