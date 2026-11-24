import { PageLayout } from "@/components/layout/page-layout";
import { IntroductionSection } from "@/features/introduction/introduction-section";
import { ProjectsSection } from "@/features/projects/projects-section";
import { ExperienceSection } from "@/features/experience/experience-section";
import { AboutSection } from "@/features/about/about-section";
import { SkillsSection } from "@/features/skills/skills-section";
import { ContactSection } from "@/features/contact/contact-section";
import { about } from "@/content/about";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site-config";
import { socialLinks } from "@/content/social-links";
import { visibleItems } from "@/lib/navigation";

const navigation = visibleItems(
  [
    {
      id: "about",
      label: "About",
      enabled: siteConfig.sections.about && about.length > 0,
    },
    { id: "work", label: "Work", enabled: true },
    {
      id: "contact",
      label: "Contact",
      enabled:
        siteConfig.sections.contact &&
        Boolean(
          socialLinks.email ||
            socialLinks.github ||
            socialLinks.linkedin ||
            socialLinks.instagram ||
            profile.resume,
        ),
    },
  ],
  (item) => item.enabled,
);

export function App() {
  return (
    <PageLayout items={navigation}>
      <IntroductionSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </PageLayout>
  );
}
