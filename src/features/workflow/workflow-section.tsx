import { CheckCheck, ClipboardList, GitBranch, RefreshCw } from "lucide-react";
import { Container } from "@/components/layout/container";

const agilePhases = [
  {
    icon: ClipboardList,
    phase: "Plan",
    title: "Backlog & Scoping",
    description:
      "Break product goals into small user stories, data schemas, and clear acceptance criteria before writing code.",
  },
  {
    icon: GitBranch,
    phase: "Build",
    title: "Iterative Sprints",
    description:
      "Deliver end-to-end vertical slices across PostgreSQL, API endpoints, and React UI so every sprint ships working software.",
  },
  {
    icon: CheckCheck,
    phase: "Verify",
    title: "Review & Testing",
    description:
      "Keep codebases dependable with strict TypeScript checks, Vitest unit tests, and thorough code reviews.",
  },
  {
    icon: RefreshCw,
    phase: "Adapt",
    title: "Ship & Refine",
    description:
      "Release increments early, collect practical feedback, and reprioritize the next sprint around what matters most.",
  },
] as const;

const agileHabits = [
  "Vertical-slice delivery",
  "User-story backlog",
  "Automated QA each sprint",
  "Direct feedback loops",
] as const;

export function WorkflowSection() {
  return (
    <section id="process" className="workflow-section" aria-labelledby="workflow-heading">
      <Container>
        <div className="workflow-header">
          <div>
            <p className="section-kicker">
              <span className="kicker-dash" aria-hidden="true" />
              Agile Workflow
            </p>
            <h2 id="workflow-heading">
              <span className="heading-accent">How I</span> Build Software
            </h2>
          </div>
          <p className="workflow-lead">
            I work in focused Agile iterations—turning requirements into tested,
            production-ready increments instead of waiting for one big release.
          </p>
        </div>

        <ol className="workflow-grid">
          {agilePhases.map(({ icon: Icon, phase, title, description }) => (
            <li key={title} className="workflow-step">
              <div className="workflow-step-top">
                <span className="workflow-icon" aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className="workflow-phase">{phase}</span>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>

        <ul className="workflow-habits" aria-label="Agile engineering habits">
          {agileHabits.map((habit) => (
            <li key={habit} className="workflow-habit">
              <span className="workflow-habit-dot" aria-hidden="true" />
              <span>{habit}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
