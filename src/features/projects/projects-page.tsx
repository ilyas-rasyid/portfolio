import { useRef, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { Container } from "@/components/layout/container";
import { projects } from "@/content/projects";
import { ProjectCategoryTabs } from "./components/project-category-tabs";
import { ProjectList } from "./components/project-list";
import {
  filterProjectsByTab,
  PROJECTS_PER_PAGE,
  projectsPageHref,
  type ProjectTabId,
} from "./project-categories";

interface ProjectsPageProps {
  activeTab: ProjectTabId;
}

export function ProjectsPage({ activeTab }: ProjectsPageProps) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const catalogRef = useRef<HTMLElement>(null);

  const byTab = filterProjectsByTab(projects, activeTab);
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = normalizedQuery
    ? byTab.filter((project) => project.title.toLowerCase().includes(normalizedQuery))
    : byTab;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PROJECTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const paginated = filtered.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handleSelectTab = (tab: ProjectTabId) => {
    setPage(1);
    window.location.hash = projectsPageHref(tab);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    catalogRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="projects-page">
      <section className="projects-page-hero" aria-labelledby="all-projects-heading">
        <Container className="projects-page-hero-inner">
          <a className="projects-back-link" href="#work">
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </a>

          <div>
            <p className="section-kicker section-kicker-light">
              <span className="kicker-dash" aria-hidden="true" />
              Complete Archive
            </p>
            <h1 id="all-projects-heading" className="projects-page-title">
              All <span className="heading-accent">Projects</span>
            </h1>
            <p className="projects-page-lead">
              Websites, web applications, mobile apps, and AI tools built end to end.
            </p>
          </div>
        </Container>
      </section>

      <section
        ref={catalogRef}
        className="projects-page-catalog"
        aria-label="Project list"
      >
        <Container>
          <div className="projects-page-controls">
            <div className="projects-search">
              <Search size={17} className="projects-search-icon" aria-hidden="true" />
              <input
                type="search"
                className="projects-search-input"
                value={query}
                onChange={(event) => handleQueryChange(event.target.value)}
                placeholder="Search project by name..."
                aria-label="Search projects by name"
              />
              {query && (
                <button
                  type="button"
                  className="projects-search-clear"
                  aria-label="Clear search"
                  onClick={() => handleQueryChange("")}
                >
                  <X size={16} />
                </button>
              )}
            </div>

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
          </div>

          {paginated.length > 0 ? (
            <ProjectList projects={paginated} />
          ) : (
            <div className="projects-empty" role="status">
              <p>
                No projects matching <strong>&ldquo;{query.trim()}&rdquo;</strong> in this
                category.
              </p>
              <button
                type="button"
                className="outline-pill-btn"
                onClick={() => handleQueryChange("")}
              >
                Reset search
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <nav className="projects-pagination" aria-label="Projects pagination">
              <button
                type="button"
                className="projects-page-btn"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
              >
                <ChevronLeft size={16} aria-hidden="true" />
                <span>Previous</span>
              </button>
              <span className="projects-page-indicator">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                className="projects-page-btn"
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
              >
                <span>Next Page</span>
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </nav>
          )}
        </Container>
      </section>
    </div>
  );
}
