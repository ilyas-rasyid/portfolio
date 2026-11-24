import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/content/projects";
import { ProjectCategoryTabs } from "./components/project-category-tabs";
import { ProjectList } from "./components/project-list";
import {
  filterProjectsByTab,
  projectsPageHref,
  projectTabs,
  type ProjectTabId,
} from "./project-categories";

interface ProjectsPageProps {
  activeTab: ProjectTabId;
}

export function ProjectsPage({ activeTab }: ProjectsPageProps) {
  const filtered = filterProjectsByTab(projects, activeTab);
  const categoryStats = projectTabs
    .filter((tab) => tab.id !== "all")
    .map((tab) => ({
      id: tab.id,
      label: tab.label,
      count: filterProjectsByTab(projects, tab.id).length,
    }));

  const handleSelectTab = (tab: ProjectTabId) => {
    window.location.hash = projectsPageHref(tab);
  };

  return (
    <div className="projects-page">
      <section className="projects-page-hero" aria-labelledby="all-projects-heading">
        <Container>
          <a className="projects-back-link" href="#work">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </a>

          <div className="projects-page-intro">
            <div>
              <p className="section-kicker section-kicker-light">
                <span className="kicker-dash" aria-hidden="true" />
                Complete Archive
              </p>
              <h1 id="all-projects-heading" className="projects-page-title">
                All <span className="heading-accent">Projects</span>
              </h1>
              <p className="projects-page-lead">
                Websites, full-stack web applications, mobile apps, and AI tools built end
                to end.
              </p>
            </div>

            <dl className="projects-page-stats" aria-label="Projects by category">
              {categoryStats.map((stat) => (
                <div key={stat.id} className="projects-page-stat">
                  <dt>{stat.label}</dt>
                  <dd>{String(stat.count).padStart(2, "0")}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section className="projects-page-catalog" aria-label="Project list">
        <Container>
          <div className="projects-page-toolbar">
            <ProjectCategoryTabs
              projects={projects}
              activeTab={activeTab}
              onSelect={handleSelectTab}
            />
            <span className="section-detail">
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <ProjectList projects={filtered} />
        </Container>
      </section>
    </div>
  );
}
