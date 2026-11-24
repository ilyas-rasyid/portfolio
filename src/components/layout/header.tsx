import { useMemo } from "react";
import { Github } from "lucide-react";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import { ThemeSwitcher } from "@/features/theme/components/theme-switcher";
import { useActiveSection } from "@/hooks/use-active-section";
import type { NavigationItem } from "@/lib/navigation";
import { Container } from "./container";
import { DesktopNavigation } from "./desktop-navigation";
import { MobileNavigation } from "./mobile-navigation";

export function Header({
  items,
  activeOverride,
}: {
  items: readonly NavigationItem[];
  activeOverride?: string;
}) {
  const sectionIds = useMemo(
    () => items.filter((item) => !item.href).map((item) => item.id),
    [items],
  );
  const observed = useActiveSection(sectionIds, !activeOverride);
  const active = activeOverride ?? observed;

  return (
    <header className="site-header">
      <Container>
        <div className="header-pill">
          <a className="wordmark" href="#top" aria-label={`${profile.name}, home`}>
            <span className="wordmark-badge" aria-hidden="true">
              I
            </span>
            <span>
              {profile.wordmark}
              <span className="wordmark-dot">.</span>
            </span>
          </a>
          <DesktopNavigation items={items} active={active} />
          <div className="header-actions">
            <ThemeSwitcher />
            {socialLinks.github && (
              <a
                className="icon-button header-github"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github size={19} />
              </a>
            )}
            <MobileNavigation items={items} active={active} />
          </div>
        </div>
      </Container>
    </header>
  );
}
