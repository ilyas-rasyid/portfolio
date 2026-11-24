import { Image } from "@/components/ui/image";
import { profile } from "@/content/profile";
import { assetUrl } from "@/lib/asset-url";

export function ProfilePortrait() {
  if (!profile.portrait) return null;
  return (
    <figure className="portrait hero-enter">
      <Image
        src={assetUrl(profile.portrait.src)}
        alt={profile.portrait.alt}
        width={480}
        height={640}
        fetchPriority="high"
      />
      <figcaption className="mono-label">
        {profile.name} {profile.location && ` / ${profile.location}`}
      </figcaption>
    </figure>
  );
}
