import { useState, type ImgHTMLAttributes } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/cn";

export function Image({
  className,
  alt,
  src,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (failedSrc === src) {
    return (
      <div
        className={cn("image-fallback", className)}
        role="img"
        aria-label={alt || "Image unavailable"}
      >
        <ImageOff size={24} aria-hidden="true" />
        <span>Image unavailable</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt ?? ""}
      className={className}
      onError={() => setFailedSrc(src ?? "")}
    />
  );
}
