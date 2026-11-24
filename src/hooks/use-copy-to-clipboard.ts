import { useState } from "react";

export function useCopyToClipboard() {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return { status, copy };
}
