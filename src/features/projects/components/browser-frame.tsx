import { Maximize2 } from "lucide-react";
import type { Ref } from "react";
import { Image } from "@/components/ui/image";
import { assetUrl } from "@/lib/asset-url";
import type { ProjectScreenshot } from "@/types/project";

interface BrowserFrameProps {
  screenshot: ProjectScreenshot;
  title: string;
  onOpen: () => void;
  triggerRef: Ref<HTMLButtonElement>;
  priority?: boolean;
}

export function BrowserFrame({
  screenshot,
  title,
  onOpen,
  triggerRef,
  priority,
}: BrowserFrameProps) {
  return (
    <button
      type="button"
      ref={triggerRef}
      className="browser-frame"
      onClick={onOpen}
      aria-label={`Enlarge ${title} screenshot`}
    >
      <span className="browser-image">
        <Image
          key={screenshot.src}
          src={assetUrl(screenshot.src)}
          alt={screenshot.alt}
          width={960}
          height={600}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="gallery-enter"
        />
      </span>
      <span className="browser-zoom" aria-hidden="true">
        <Maximize2 size={14} />
      </span>
    </button>
  );
}
