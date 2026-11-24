import type { Project } from "@/types/project";
import { useProjectGallery } from "../hooks/use-project-gallery";
import { useImageLightbox } from "../hooks/use-image-lightbox";
import { BrowserFrame } from "./browser-frame";
import { GalleryNavigation } from "./gallery-navigation";
import { ImageLightbox } from "./image-lightbox";

export function ProjectGallery({
  project,
  priority,
}: {
  project: Project;
  priority?: boolean;
}) {
  const gallery = useProjectGallery(project.screenshots.length);
  const lightbox = useImageLightbox();
  const screenshot = project.screenshots[gallery.index];
  if (!screenshot) return <p className="image-fallback">No screenshot available.</p>;

  const navigation = {
    index: gallery.index,
    length: project.screenshots.length,
    onMove: gallery.move,
    onSelect: gallery.setIndex,
  };

  return (
    <div className="project-gallery">
      <div
        className="gallery-touch"
        onTouchStart={gallery.onTouchStart}
        onTouchEnd={gallery.onTouchEnd}
      >
        <BrowserFrame
          screenshot={screenshot}
          title={project.title}
          onOpen={lightbox.show}
          triggerRef={lightbox.triggerRef}
          priority={priority}
        />
      </div>
      <GalleryNavigation {...navigation} />
      {project.draft && (
        <p className="draft-image-label">
          Illustrative wireframe · Replace with actual screenshot
        </p>
      )}
      {lightbox.open && (
        <ImageLightbox
          {...navigation}
          title={project.title}
          screenshot={screenshot}
          onClose={lightbox.close}
          onTouchStart={gallery.onTouchStart}
          onTouchEnd={gallery.onTouchEnd}
        />
      )}
    </div>
  );
}
