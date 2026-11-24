import { Container } from "@/components/layout/container";
import { projects } from "@/content/projects";
import { ProjectList } from "./components/project-list";

export function ProjectsSection() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-heading">
      <Container>
        <div className="work-header">
          <div>
            <p className="section-kicker">
              <span className="kicker-dash" aria-hidden="true" />
              Portfolio
            </p>
            <h2 id="work-heading">
              Selected <span className="heading-accent">Work</span>
            </h2>
          </div>
          <span className="section-detail">{projects.length} projects</span>
        </div>
        <ProjectList projects={projects} />
      </Container>
    </section>
  );
}
