import { Container } from "@/components/layout/container";
import { profile } from "@/content/profile";
import { cn } from "@/lib/cn";
import { IntroductionContent } from "./components/introduction-content";
import { IntroductionActions } from "./components/introduction-actions";
import { ProfilePortrait } from "./components/profile-portrait";

export function IntroductionSection() {
  return (
    <section aria-label="Introduction" className="intro-section">
      <Container>
        <div className={cn("intro-grid", !profile.portrait && "intro-no-portrait")}>
          <div>
            <IntroductionContent />
            <IntroductionActions />
          </div>
          <ProfilePortrait />
        </div>
      </Container>
    </section>
  );
}
