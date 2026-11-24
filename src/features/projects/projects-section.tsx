import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";
import { ProjectList } from "./components/project-list";

export function ProjectsSection() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          id="work-heading"
          title="Selected work"
          detail={`${projects.length} projects`}
        />
        <ProjectList projects={projects} />
      </Container>
    </section>
  );
}
