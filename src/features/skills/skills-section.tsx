import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/content/skills";
import { siteConfig } from "@/content/site-config";
import { SkillGroup } from "./components/skill-group";

export function SkillsSection() {
  if (!siteConfig.sections.skills || !skills.length) return null;
  return (
    <section id="skills" className="support-section" aria-labelledby="skills-heading">
      <Container className="split-section">
        <SectionHeading id="skills-heading" label="Toolkit" title="Technical expertise" />
        <dl className="skill-list">
          {skills.map((group) => (
            <SkillGroup key={group.label} group={group} />
          ))}
        </dl>
      </Container>
    </section>
  );
}
