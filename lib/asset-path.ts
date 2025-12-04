export function assetPath(path: string): string {
  const base = process.env.NODE_ENV === "production" ? "/nepalihistory" : "";
  return `${base}${path}`;
}
