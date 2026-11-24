import type { Project } from "@/types/project";
import {
  filterProjectsByTab,
  projectTabs,
  type ProjectTabId,
} from "../project-categories";

interface ProjectCategoryTabsProps {
  projects: readonly Project[];
  activeTab: ProjectTabId;
  onSelect: (tab: ProjectTabId) => void;
}

export function ProjectCategoryTabs({
  projects,
  activeTab,
  onSelect,
}: ProjectCategoryTabsProps) {
  return (
    <div className="project-tabs" role="tablist" aria-label="Filter projects by category">
      {projectTabs.map((tab) => {
        const count = filterProjectsByTab(projects, tab.id).length;
        const selected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            className="project-tab"
            onClick={() => onSelect(tab.id)}
          >
            <span>{tab.label}</span>
            <span className="project-tab-count" aria-hidden="true">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
