import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/about";
import { siteConfig } from "@/content/site-config";

export function AboutSection() {
  if (!siteConfig.sections.about || !about.length) return null;
  return (
    <section id="about" className="support-section" aria-labelledby="about-heading">
      <Container className="split-section">
        <SectionHeading id="about-heading" label="Background" title="About me" />
        <div className="about-copy">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
