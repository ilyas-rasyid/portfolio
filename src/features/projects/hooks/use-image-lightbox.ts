import { useRef, useState } from "react";

export function useImageLightbox() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  function close() {
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }

  return { open, show: () => setOpen(true), close, triggerRef };
}
