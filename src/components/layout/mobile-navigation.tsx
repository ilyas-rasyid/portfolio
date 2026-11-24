import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { NavigationItem } from "@/lib/navigation";
import { NavigationLink } from "./navigation-link";

export function MobileNavigation({
  items,
  active,
}: {
  items: readonly NavigationItem[];
  active: string;
}) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const desktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (desktop) setOpen(false);
  }, [desktop]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className="mobile-navigation">
      <IconButton
        ref={trigger}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </IconButton>
      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {items.map((item) => (
          <NavigationLink
            key={item.id}
            item={item}
            active={active === item.id}
            onSelect={() => setOpen(false)}
          />
        ))}
      </nav>
    </div>
  );
}
