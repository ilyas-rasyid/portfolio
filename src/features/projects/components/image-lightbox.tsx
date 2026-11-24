import { useEffect, useRef, type TouchEventHandler } from "react";
import { X } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { Image } from "@/components/ui/image";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { assetUrl } from "@/lib/asset-url";
import type { ProjectScreenshot } from "@/types/project";
import { GalleryNavigation } from "./gallery-navigation";

interface ImageLightboxProps {
  title: string;
  screenshot: ProjectScreenshot;
  index: number;
  length: number;
  onMove: (direction: number) => void;
  onSelect: (index: number) => void;
  onClose: () => void;
  onTouchStart: TouchEventHandler;
  onTouchEnd: TouchEventHandler;
}

export function ImageLightbox({
  title,
  screenshot,
  index,
  length,
  onMove,
  onSelect,
  onClose,
  onTouchStart,
  onTouchEnd,
}: ImageLightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useScrollLock(true);

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    element.showModal();
    closeButton.current?.focus();
    return () => {
      if (element.open) element.close();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className="lightbox"
      aria-label={`${title} screenshot preview`}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          onMove(event.key === "ArrowRight" ? 1 : -1);
        }
      }}
    >
      <div className="lightbox-inner" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="lightbox-header">
          <div>
            <p className="mono-label">Screenshot preview</p>
            <h2>{title}</h2>
          </div>
          <IconButton ref={closeButton} aria-label="Close preview" onClick={onClose}>
            <X size={24} />
          </IconButton>
        </div>
        <Image
          key={screenshot.src}
          src={assetUrl(screenshot.fullSrc ?? screenshot.src)}
          alt={screenshot.alt}
          className="lightbox-image gallery-enter"
        />
        <div className="lightbox-footer">
          <span>{screenshot.caption ?? screenshot.alt}</span>
          <GalleryNavigation
            index={index}
            length={length}
            onMove={onMove}
            onSelect={onSelect}
          />
        </div>
      </div>
    </dialog>
  );
}
