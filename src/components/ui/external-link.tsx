import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

export function ExternalLink({ children, className, ...props }: ExternalLinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("external-link", className)}
    >
      {children}
      <ArrowUpRight className="link-arrow" size={16} aria-hidden="true" />
    </a>
  );
}
