import { useEffect, useState } from "react";
import { PageLayout } from "@/components/layout/page-layout";
import { IntroductionSection } from "@/features/introduction/introduction-section";
import { ServicesSection } from "@/features/services/services-section";
import { AboutSection } from "@/features/about/about-section";
import { WorkflowSection } from "@/features/workflow/workflow-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ProjectsPage } from "@/features/projects/projects-page";
import {
  parseProjectTab,
  type ProjectTabId,
} from "@/features/projects/project-categories";
import { ExperienceSection } from "@/features/experience/experience-section";
import { about } from "@/content/about";
import { siteConfig } from "@/content/site-config";
import { visibleItems } from "@/lib/navigation";

const navigation = visibleItems(
  [
    { id: "services", label: "Services", enabled: true },
    {
      id: "about",
      label: "About",
      enabled: siteConfig.sections.about && about.length > 0,
    },
    { id: "process", label: "Process", enabled: true },
    { id: "skills", label: "Tools", enabled: siteConfig.sections.skills },
    { id: "work", label: "Work", enabled: true },
  ],
  (item) => item.enabled,
);

interface RouteState {
  page: "home" | "projects";
  tab: ProjectTabId;
  anchor: string;
}

function parseRoute(hash: string): RouteState {
  if (hash.startsWith("#/projects")) {
    const queryIndex = hash.indexOf("?");
    const params =
      queryIndex >= 0 ? new URLSearchParams(hash.slice(queryIndex + 1)) : null;
    return {
      page: "projects",
      tab: parseProjectTab(params?.get("tab") ?? null),
      anchor: "",
    };
  }
  return {
    page: "home",
    tab: "all",
    anchor: hash.startsWith("#") ? hash.slice(1) : "",
  };
}

export function App() {
  const [route, setRoute] = useState<RouteState>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (route.page === "projects") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    if (!route.anchor || route.anchor === "top") {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(route.anchor)?.scrollIntoView();
    });
  }, [route.page, route.anchor]);

  if (route.page === "projects") {
    return (
      <PageLayout items={navigation} activeOverride="work">
        <ProjectsPage activeTab={route.tab} />
      </PageLayout>
    );
  }

  return (
    <PageLayout items={navigation}>
      <IntroductionSection />
      <ServicesSection />
      <AboutSection />
      <WorkflowSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </PageLayout>
  );
}
