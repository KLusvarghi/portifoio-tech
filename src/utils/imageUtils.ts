export function getImageUrl(name: string) {
  return new URL(`../pages/home/Projects/assets${name}`, import.meta.url).href;
}
