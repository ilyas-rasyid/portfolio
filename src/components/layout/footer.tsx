import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <span className="footer-copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <a href="#top" className="inline-link footer-back-to-top">
          Back to top <ArrowUp size={15} />
        </a>
      </Container>
    </footer>
  );
}
