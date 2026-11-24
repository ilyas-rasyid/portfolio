export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
}

export function visibleItems<T>(items: readonly T[], enabled: (item: T) => boolean): T[] {
  return items.filter(enabled);
}

export function hasUniqueIds(items: readonly { id: string }[]): boolean {
  return new Set(items.map((item) => item.id)).size === items.length;
}

export function isRepositoryUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname === "github.com" &&
      !url.username &&
      !url.password &&
      /^\/[\w.-]+\/[\w.-]+\/?$/.test(url.pathname)
    );
  } catch {
    return false;
  }
}
