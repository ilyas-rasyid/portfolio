import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/content/experience";
import { siteConfig } from "@/content/site-config";
import { ExperienceItem } from "./components/experience-item";

export function ExperienceSection() {
  if (!siteConfig.sections.experience || !experience.length) return null;
  return (
    <section
      id="experience"
      className="support-section"
      aria-labelledby="experience-heading"
    >
      <Container>
        <SectionHeading id="experience-heading" label="Background" title="Experience" />
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </Container>
    </section>
  );
}
