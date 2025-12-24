export function assetPath(path = ""): string {
  const base =
    process.env.NEXT_PUBLIC_IS_GITHUB_PAGES === "true" ? "/nepalihistory" : "";
  return `${base}${path}`;
}
