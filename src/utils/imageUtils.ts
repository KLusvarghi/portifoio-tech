export function getImageUrl(name: string) {
  return new URL(`../paginas/Projects/svgProjetos/${name}`, import.meta.url)
    .href;
}
