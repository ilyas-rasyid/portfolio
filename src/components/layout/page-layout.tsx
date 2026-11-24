import type { PropsWithChildren } from "react";
import type { NavigationItem } from "@/lib/navigation";
import { Header } from "./header";
import { Footer } from "./footer";
import { SkipLink } from "./skip-link";

export function PageLayout({
  children,
  items,
}: PropsWithChildren<{ items: readonly NavigationItem[] }>) {
  return (
    <>
      <div id="top" />
      <SkipLink />
      <Header items={items} />
      <main id="main-content" tabIndex={-1} className="min-w-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
