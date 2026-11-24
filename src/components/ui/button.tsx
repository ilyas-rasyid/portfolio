import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Button({
  className,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type={type} className={cn("button", className)} {...props} />;
}
