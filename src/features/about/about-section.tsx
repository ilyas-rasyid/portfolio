import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { about } from "@/content/about";
import { siteConfig } from "@/content/site-config";

export function AboutSection() {
  if (!siteConfig.sections.about || !about.length) return null;
  const [lead, ...rest] = about;

  return (
    <section id="about" className="support-section" aria-labelledby="about-heading">
      <Container className="split-section">
        <SectionHeading id="about-heading" title="About me" />
        <div className="about-copy">
          <p className="about-lead">{lead}</p>
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Container>
    </section>
  );
}
