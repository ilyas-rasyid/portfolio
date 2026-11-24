import { useRef, useState, type TouchEvent } from "react";
import { moveIndex } from "@/lib/gallery-index";

export function useProjectGallery(length: number) {
  const [index, setIndex] = useState(0);
  const start = useRef<{ x: number; y: number } | null>(null);

  function move(direction: number) {
    setIndex((current) => moveIndex(current, direction, length));
  }

  function onTouchStart(event: TouchEvent) {
    const touch = event.touches[0];
    start.current = touch ? { x: touch.clientX, y: touch.clientY } : null;
  }

  function onTouchEnd(event: TouchEvent) {
    const touch = event.changedTouches[0];
    if (!start.current || !touch) return;
    const dx = touch.clientX - start.current.x;
    const dy = touch.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
  }

  return { index, setIndex, move, onTouchStart, onTouchEnd };
}
