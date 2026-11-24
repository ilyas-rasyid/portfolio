import type { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/cn";

export function IconButton({
  className,
  type = "button",
  ...props
}: ComponentPropsWithRef<"button">) {
  return <button type={type} className={cn("icon-button", className)} {...props} />;
}
