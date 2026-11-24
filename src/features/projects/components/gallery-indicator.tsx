export function GalleryIndicator({
  index,
  length,
  onSelect,
}: {
  index: number;
  length: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="gallery-indicator" role="group" aria-label="Choose screenshot">
      {Array.from({ length }, (_, position) => (
        <button
          key={position}
          type="button"
          aria-label={`Screenshot ${position + 1}`}
          aria-pressed={position === index}
          onClick={() => onSelect(position)}
        >
          <span />
        </button>
      ))}
    </div>
  );
}
