import { Container } from "@/components/layout/container";
import { skills } from "@/content/skills";
import { siteConfig } from "@/content/site-config";

interface ToolCapsule {
  name: string;
  mark: string;
  role: string;
}

const techStackCapsules: readonly ToolCapsule[] = [
  { name: "TypeScript", mark: "TS", role: "Language" },
  { name: "React", mark: "Re", role: "Frontend" },
  { name: "Vite", mark: "Vi", role: "Build" },
  { name: "Tailwind CSS", mark: "Tw", role: "Styling" },
  { name: "Bun", mark: "Bn", role: "Runtime" },
  { name: "ElysiaJS", mark: "El", role: "Backend" },
  { name: "Prisma", mark: "Pr", role: "ORM" },
  { name: "PostgreSQL", mark: "PG", role: "Database" },
  { name: "Flutter", mark: "Fl", role: "Cross-Platform" },
  { name: "TanStack Query", mark: "TQ", role: "Data State" },
];

const devToolCapsules: readonly ToolCapsule[] = [
  { name: "Git", mark: "Gt", role: "Version Control" },
  { name: "GitHub", mark: "GH", role: "Collaboration" },
  { name: "Docker", mark: "Dk", role: "Containers" },
  { name: "Linux", mark: "Lx", role: "Environment" },
  { name: "Vitest", mark: "Vt", role: "Unit Testing" },
  { name: "Playwright", mark: "PW", role: "E2E Testing" },
];

export function SkillsSection() {
  if (!siteConfig.sections.skills || !skills.length) return null;

  return (
    <section id="skills" className="tools-section" aria-labelledby="skills-heading">
      <Container>
        <div className="tools-header">
          <p className="section-kicker section-kicker-center">
            <span className="kicker-dash" aria-hidden="true" />
            Tech Stack &amp; Tools
          </p>
          <h2 id="skills-heading">
            <span className="heading-accent">Exploring the Tools</span>
            <br />
            Behind My Builds
          </h2>
        </div>

        <div className="tools-group">
          <h3 className="tools-group-title">Core Tech Stack</h3>
          <ul className="tools-capsules">
            {techStackCapsules.map((item) => (
              <li key={item.name} className="tool-capsule">
                <div className="tool-capsule-body">
                  <span className="tool-capsule-icon" aria-hidden="true">
                    {item.mark}
                  </span>
                  <span className="tool-capsule-role">{item.role}</span>
                </div>
                <span className="tool-capsule-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="tools-group">
          <h3 className="tools-group-title">Engineering Tools &amp; Infrastructure</h3>
          <ul className="tools-capsules tools-capsules-compact">
            {devToolCapsules.map((item) => (
              <li key={item.name} className="tool-capsule">
                <div className="tool-capsule-body">
                  <span className="tool-capsule-icon" aria-hidden="true">
                    {item.mark}
                  </span>
                  <span className="tool-capsule-role">{item.role}</span>
                </div>
                <span className="tool-capsule-name">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
