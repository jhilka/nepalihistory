export function assetPath(path = ""): string {
  const base = process.env.IS_GITHUB_PAGES === "true" ? "/nepalihistory" : "";
  return `${base}${path}`;
}
