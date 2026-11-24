import { ArrowRight, Database, Layout, Server } from "lucide-react";
import { Container } from "@/components/layout/container";

const services = [
  {
    icon: Layout,
    title: "Frontend Development",
    description:
      "Responsive, accessible web interfaces crafted with React, TypeScript, Vite, Tailwind CSS, and predictable client state.",
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    description:
      "Reliable REST APIs, role-based access control, validation, and background workers built with Bun and ElysiaJS.",
  },
  {
    icon: Database,
    title: "Database & Cross-Platform",
    description:
      "Relational schema design, PostgreSQL constraints, Prisma migrations, and offline-first Flutter applications.",
  },
] as const;

export function ServicesSection() {
  return (
    <section
      id="services"
      className="services-section"
      aria-labelledby="services-heading"
    >
      <Container>
        <div className="services-header">
          <div>
            <p className="section-kicker">
              <span className="kicker-dash" aria-hidden="true" />
              Services
            </p>
            <h2 id="services-heading">
              <span className="heading-accent">Services</span> I Provide
            </h2>
          </div>

          <a className="split-cta" href="#work">
            <span className="split-cta-label">View All Projects</span>
            <span className="split-cta-circle" aria-hidden="true">
              <ArrowRight size={15} />
            </span>
          </a>
        </div>

        <div className="services-grid">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="service-card">
              <div className="service-icon" aria-hidden="true">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="service-link" href="#work">
                Explore work <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
