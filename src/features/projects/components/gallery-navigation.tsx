import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/icon-button";
import { GalleryIndicator } from "./gallery-indicator";

interface GalleryNavigationProps {
  index: number;
  length: number;
  onMove: (direction: number) => void;
  onSelect: (index: number) => void;
}

export function GalleryNavigation({
  index,
  length,
  onMove,
  onSelect,
}: GalleryNavigationProps) {
  if (length <= 1) return null;
  return (
    <div className="gallery-navigation">
      <GalleryIndicator index={index} length={length} onSelect={onSelect} />
      <div className="gallery-arrows">
        <IconButton aria-label="Previous screenshot" onClick={() => onMove(-1)}>
          <ChevronLeft size={18} />
        </IconButton>
        <IconButton aria-label="Next screenshot" onClick={() => onMove(1)}>
          <ChevronRight size={18} />
        </IconButton>
      </div>
    </div>
  );
}
