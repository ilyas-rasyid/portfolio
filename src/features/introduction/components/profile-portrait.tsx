import { Image } from "@/components/ui/image";
import { profile } from "@/content/profile";
import { assetUrl } from "@/lib/asset-url";

export function ProfilePortrait() {
  if (!profile.portrait) return null;
  return (
    <figure className="portrait">
      <Image
        src={assetUrl(profile.portrait.src)}
        alt={profile.portrait.alt}
        width={229}
        height={401}
        fetchPriority="high"
      />
    </figure>
  );
}
