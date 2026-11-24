import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));
    const update = () => {
      const offset =
        (document.querySelector("header")?.getBoundingClientRect().height ?? 72) + 100;
      const reached = elements.filter(
        (element) => element.getBoundingClientRect().top <= offset,
      );
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      setActive((atBottom ? elements.at(-1) : reached.at(-1))?.id ?? "");
    };
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(update, { rootMargin: "-80px 0px -45% 0px" })
        : undefined;
    elements.forEach((element) => observer?.observe(element));
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}
