import type { NavigationItem } from "@/lib/navigation";

interface NavigationLinkProps {
  item: NavigationItem;
  active: boolean;
  onSelect?: () => void;
}

export function NavigationLink({ item, active, onSelect }: NavigationLinkProps) {
  return (
    <a
      href={`#${item.id}`}
      className="nav-link"
      aria-current={active ? "location" : undefined}
      onClick={onSelect}
    >
      {item.label}
    </a>
  );
}
