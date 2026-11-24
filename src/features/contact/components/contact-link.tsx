import type { ReactNode } from "react";
import { ExternalLink } from "@/components/ui/external-link";

export function ContactLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <ExternalLink className="contact-link" href={href}>
      {icon}
      {label}
    </ExternalLink>
  );
}
