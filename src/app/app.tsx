import { PageLayout } from "@/components/layout/page-layout";
import { IntroductionSection } from "@/features/introduction/introduction-section";
import { ServicesSection } from "@/features/services/services-section";
import { AboutSection } from "@/features/about/about-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { ProjectsSection } from "@/features/projects/projects-section";
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
    { id: "skills", label: "Tools", enabled: siteConfig.sections.skills },
    { id: "work", label: "Work", enabled: true },
  ],
  (item) => item.enabled,
);

export function App() {
  return (
    <PageLayout items={navigation}>
      <IntroductionSection />
      <ServicesSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </PageLayout>
  );
}
