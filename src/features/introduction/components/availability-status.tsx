import { profile } from "@/content/profile";

export function AvailabilityStatus() {
  if (!profile.available) return null;
  return (
    <span className="availability">
      <span aria-hidden="true" />
      Open to opportunities
    </span>
  );
}
