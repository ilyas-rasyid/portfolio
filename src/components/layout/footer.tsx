import { profile } from "@/content/profile";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <span className="footer-copyright">
          © {new Date().getFullYear()} {profile.name}
        </span>
      </Container>
    </footer>
  );
}
