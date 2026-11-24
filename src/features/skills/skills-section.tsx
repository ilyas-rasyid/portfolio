import {
  siBun,
  siCss,
  siDocker,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siLinux,
  siMongodb,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReactquery,
  siTailwindcss,
  siTypescript,
  siVite,
  siVitest,
} from "simple-icons";
import { Container } from "@/components/layout/container";
import { skills } from "@/content/skills";
import { siteConfig } from "@/content/site-config";

interface ToolItem {
  name: string;
  path: string;
}

const ELYSIA_PATH =
  "M4 4.5 9.2 8.2c.9-.5 1.8-.7 2.8-.7s1.9.2 2.8.7L20 4.5l-.8 6.4c.5.9.8 1.9.8 3.1 0 3.7-3.6 6.5-8 6.5S4 17.7 4 14c0-1.2.3-2.2.8-3.1L4 4.5Zm5.2 9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Zm5.6 0a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z";

const coreStack: readonly ToolItem[] = [
  { name: "HTML", path: siHtml5.path },
  { name: "CSS", path: siCss.path },
  { name: "JavaScript", path: siJavascript.path },
  { name: "TypeScript", path: siTypescript.path },
  { name: "Python", path: siPython.path },
  { name: "React", path: siReact.path },
  { name: "Vite", path: siVite.path },
  { name: "Tailwind CSS", path: siTailwindcss.path },
  { name: "TanStack Query", path: siReactquery.path },
  { name: "Flutter", path: siFlutter.path },
  { name: "Bun", path: siBun.path },
  { name: "ElysiaJS", path: ELYSIA_PATH },
  { name: "Prisma", path: siPrisma.path },
  { name: "PostgreSQL", path: siPostgresql.path },
  { name: "MongoDB", path: siMongodb.path },
];

const devTools: readonly ToolItem[] = [
  { name: "Figma", path: siFigma.path },
  { name: "Git", path: siGit.path },
  { name: "GitHub", path: siGithub.path },
  { name: "CI/CD", path: siGithubactions.path },
  { name: "Docker", path: siDocker.path },
  { name: "Linux", path: siLinux.path },
  { name: "Vitest", path: siVitest.path },
];

function TechIcon({ path }: { path: string }) {
  return (
    <svg
      className="tool-tile-svg"
      viewBox="0 0 24 24"
      width={20}
      height={20}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export function SkillsSection() {
  if (!siteConfig.sections.skills || !skills.length) return null;

  return (
    <section id="skills" className="tools-section" aria-labelledby="skills-heading">
      <Container>
        <div className="tools-header">
          <div>
            <p className="section-kicker">
              <span className="kicker-dash" aria-hidden="true" />
              Tech Stack &amp; Tools
            </p>
            <h2 id="skills-heading">
              <span className="heading-accent">Tools</span> Behind My Builds
            </h2>
          </div>
        </div>

        <div className="tools-groups">
          <div className="tools-group">
            <h3 className="tools-group-title">Core Stack</h3>
            <ul className="tools-grid">
              {coreStack.map((item) => (
                <li key={item.name} className="tool-tile">
                  <span className="tool-tile-icon" aria-hidden="true">
                    <TechIcon path={item.path} />
                  </span>
                  <span className="tool-tile-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="tools-group">
            <h3 className="tools-group-title">Design, Workflow &amp; Infra</h3>
            <ul className="tools-grid tools-grid-compact">
              {devTools.map((item) => (
                <li key={item.name} className="tool-tile">
                  <span className="tool-tile-icon" aria-hidden="true">
                    <TechIcon path={item.path} />
                  </span>
                  <span className="tool-tile-name">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
