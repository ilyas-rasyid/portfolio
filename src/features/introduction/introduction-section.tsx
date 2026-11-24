import { Container } from "@/components/layout/container";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";
import { IntroductionContent } from "./components/introduction-content";
import { IntroductionActions } from "./components/introduction-actions";
import { ProfilePortrait } from "./components/profile-portrait";

const ribbonItems = [
  "Web Applications",
  "Backend APIs",
  "Database Architecture",
  "TypeScript",
  "React & Vite",
  "Flutter Apps",
] as const;

export function IntroductionSection() {
  return (
    <section aria-label="Introduction" className="intro-section">
      <Container>
        <div className={cn("intro-grid", !profile.portrait && "intro-no-portrait")}>
          <div className="hero-body">
            <IntroductionContent />
            <IntroductionActions />
          </div>
          <ProfilePortrait />
        </div>
      </Container>

      <div className="ribbon-wrap" aria-hidden="true">
        <div className="ribbon-back" />
        <div className="ribbon-front">
          <div className="ribbon-track">
            {ribbonItems.map((item) => (
              <span key={item} className="ribbon-item">
                <span>{item}</span>
                <span className="ribbon-star">✳</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
