import type { NavigationItem } from "@/lib/navigation";
import { NavigationLink } from "./navigation-link";

export function DesktopNavigation({
  items,
  active,
}: {
  items: readonly NavigationItem[];
  active: string;
}) {
  return (
    <nav className="desktop-navigation" aria-label="Main navigation">
      {items.map((item) => (
        <NavigationLink key={item.id} item={item} active={active === item.id} />
      ))}
    </nav>
  );
}
