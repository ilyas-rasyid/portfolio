import { Github } from "lucide-react";
import { ExternalLink } from "@/components/ui/external-link";
import { isRepositoryUrl } from "@/lib/navigation";

export function ProjectRepositoryLink({ url, title }: { url: string; title: string }) {
  if (!isRepositoryUrl(url)) return null;
  return (
    <ExternalLink
      className="repository-link"
      href={url}
      aria-label={`View source code for ${title}`}
    >
      <Github size={18} /> View source code
    </ExternalLink>
  );
}
