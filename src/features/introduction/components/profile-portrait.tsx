import { Image } from "@/components/ui/image";
import { profile } from "@/content/profile";
import { assetUrl } from "@/lib/asset-url";

export function ProfilePortrait() {
  if (!profile.portrait) return null;
  return (
    <div className="hero-visual">
      <div className="hero-amber-shape" aria-hidden="true" />

      <div className="hero-stamp" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="hero-stamp-svg">
          <defs>
            <path
              id="stamp-circle"
              d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
            />
          </defs>
          <text className="hero-stamp-text">
            <textPath href="#stamp-circle">FULL STACK DEVELOPER • INDONESIA •</textPath>
          </text>
        </svg>
        <span className="hero-stamp-core" />
      </div>

      <figure className="portrait">
        <Image
          src={assetUrl(profile.portrait.src)}
          alt={profile.portrait.alt}
          width={280}
          height={458}
          fetchPriority="high"
        />
      </figure>

      <span className="hero-tag hero-tag-green" aria-hidden="true">
        Full Stack Developer
      </span>
      <span className="hero-tag hero-tag-amber" aria-hidden="true">
        Backend &amp; UI
      </span>
    </div>
  );
}
