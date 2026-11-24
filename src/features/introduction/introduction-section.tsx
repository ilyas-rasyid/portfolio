import { Container } from "@/components/layout/container";
import { profile } from "@/content/profile";
import { skills } from "@/content/skills";
import { cn } from "@/lib/cn";
import { IntroductionContent } from "./components/introduction-content";
import { IntroductionActions } from "./components/introduction-actions";
import { ProfilePortrait } from "./components/profile-portrait";

const coreStack = skills.flatMap((group) => group.technologies).slice(0, 8);

export function IntroductionSection() {
  return (
    <section aria-label="Introduction" className="intro-section">
      <Container>
        <div className="hero-stage">
          <div className={cn("intro-grid", !profile.portrait && "intro-no-portrait")}>
            <div className="hero-body">
              <IntroductionContent />
              <IntroductionActions />
            </div>
            <ProfilePortrait />
          </div>
        </div>

        <ul className="stack-strip" aria-label="Primary technologies">
          {coreStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
