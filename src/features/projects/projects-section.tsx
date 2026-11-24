import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/content/projects";
import { ProjectCategoryTabs } from "./components/project-category-tabs";
import { ProjectList } from "./components/project-list";
import {
  filterProjectsByTab,
  HOME_PROJECT_LIMIT,
  projectsPageHref,
  type ProjectTabId,
} from "./project-categories";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectTabId>("all");
  const filtered = filterProjectsByTab(projects, activeTab);
  const visible = filtered.slice(0, HOME_PROJECT_LIMIT);
  const hasMore = filtered.length > HOME_PROJECT_LIMIT;

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
          <span className="section-detail">
            {hasMore
              ? `Showing ${visible.length} of ${filtered.length} projects`
              : `${filtered.length} ${filtered.length === 1 ? "project" : "projects"}`}
          </span>
        </div>

        <ProjectCategoryTabs
          projects={projects}
          activeTab={activeTab}
          onSelect={setActiveTab}
        />

        <ProjectList projects={visible} />

        {hasMore && (
          <div className="projects-more-wrap">
            <a className="split-cta" href={projectsPageHref(activeTab)}>
              <span className="split-cta-label">
                View All Projects ({filtered.length})
              </span>
              <span className="split-cta-circle" aria-hidden="true">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>
        )}
      </Container>
    </section>
  );
}
