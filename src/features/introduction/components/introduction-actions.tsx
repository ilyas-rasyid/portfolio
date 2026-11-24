import { ArrowDownRight, FileDown, Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/content/profile";
import { socialLinks } from "@/content/social-links";
import { assetUrl } from "@/lib/asset-url";

export function IntroductionActions() {
  return (
    <div className="intro-actions-container">
      {/* Social media links positioned directly above View my work */}
      <div className="intro-socials hero-enter" aria-label="Social profiles">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
            className="social-icon-btn"
          >
            <Linkedin size={18} />
          </a>
        )}
        {socialLinks.instagram && (
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            title="Instagram profile"
            className="social-icon-btn"
          >
            <Instagram size={18} />
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub profile"
            className="social-icon-btn"
          >
            <Github size={18} />
          </a>
        )}
      </div>

      <div className="intro-actions hero-enter">
        <a className="primary-link" href="#work">
          View my work <ArrowDownRight size={19} className="link-arrow-down" />
        </a>
        {profile.resume && (
          <a className="inline-link" href={assetUrl(profile.resume)} download>
            <FileDown size={17} /> Résumé
          </a>
        )}
      </div>
    </div>
  );
}
