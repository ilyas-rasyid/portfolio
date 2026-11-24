import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Image } from "@/components/ui/image";
import { about } from "@/content/about";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site-config";
import { skills } from "@/content/skills";
import { assetUrl } from "@/lib/asset-url";

const totalTechnologies = skills.reduce(
  (count, group) => count + group.technologies.length,
  0,
);

const portraitTags = [
  { label: "React", variant: "amber" },
  { label: "TypeScript", variant: "green" },
  { label: "Bun", variant: "amber" },
  { label: "ElysiaJS", variant: "green" },
  { label: "PostgreSQL", variant: "amber" },
  { label: "Prisma", variant: "green" },
  { label: "Flutter", variant: "amber" },
] as const;

export function AboutSection() {
  if (!siteConfig.sections.about || !about.length) return null;
  const aboutPhoto = profile.aboutPortrait ?? profile.portrait;

  return (
    <section id="about" className="about-band" aria-labelledby="about-heading">
      <Container className="about-grid">
        <div className="about-visual">
          <div className="about-circle">
            {aboutPhoto && (
              <Image
                src={assetUrl(aboutPhoto.src)}
                alt={aboutPhoto.alt}
                width={260}
                height={360}
                className="about-portrait-img"
              />
            )}
          </div>
          <div className="about-tag-cluster" aria-hidden="true">
            {portraitTags.map((tag) => (
              <span key={tag.label} className={`about-chip about-chip-${tag.variant}`}>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        <div className="about-body">
          <p className="section-kicker section-kicker-light">
            <span className="kicker-dash" aria-hidden="true" />
            About Me
          </p>
          <h2 id="about-heading">
            Who is <span className="heading-accent">{profile.name}?</span>
          </h2>
          <div className="about-copy">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-metrics">
            <div className="about-metric">
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              <span>Shipped Projects</span>
            </div>
            <div className="about-metric">
              <strong>{totalTechnologies}</strong>
              <span>Tech Stack &amp; Tools</span>
            </div>
            <div className="about-metric">
              <strong>Full Stack</strong>
              <span>UI to Database</span>
            </div>
          </div>

          <div className="about-actions">
            <a className="split-cta split-cta-on-dark" href="#work">
              <span className="split-cta-label">Explore Projects</span>
              <span className="split-cta-circle" aria-hidden="true">
                <ArrowRight size={15} />
              </span>
            </a>
            <span className="about-signature" aria-hidden="true">
              {profile.name}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
