import type { Project } from "@/types/project";

export type ProjectTabId = "all" | "website" | "web-app" | "mobile-app" | "ai";

export interface ProjectTab {
  id: ProjectTabId;
  label: string;
}

export const HOME_PROJECT_LIMIT = 5;
export const PROJECTS_PER_PAGE = 10;

export const projectTabs: readonly ProjectTab[] = [
  { id: "all", label: "All" },
  { id: "website", label: "Website" },
  { id: "web-app", label: "Web Application" },
  { id: "mobile-app", label: "Mobile Application" },
  { id: "ai", label: "AI" },
];

export function matchesProjectTab(project: Project, tab: ProjectTabId): boolean {
  switch (tab) {
    case "all":
      return true;
    case "website":
      return project.category === "Website";
    case "web-app":
      return (
        project.category === "Web Application" ||
        project.category === "Full Stack" ||
        project.category === "Frontend"
      );
    case "mobile-app":
      return (
        project.category === "Mobile Application" || project.category === "Flutter App"
      );
    case "ai":
      return project.category === "AI / Computer Vision";
  }
}

export function filterProjectsByTab(
  allProjects: readonly Project[],
  tab: ProjectTabId,
): readonly Project[] {
  if (tab === "all") return allProjects;
  return allProjects.filter((project) => matchesProjectTab(project, tab));
}

export function parseProjectTab(value: string | null): ProjectTabId {
  if (
    value === "website" ||
    value === "web-app" ||
    value === "mobile-app" ||
    value === "ai"
  ) {
    return value;
  }
  return "all";
}

export function projectsPageHref(tab: ProjectTabId = "all"): string {
  return tab === "all" ? "#/projects" : `#/projects?tab=${tab}`;
}
