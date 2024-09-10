export const getImageUrl = (name: string, directory: string) => {
  if (name.includes('svg')) {
    return `/assets/${directory}/${name}`;
  }
  return `/assets/${directory}/${name}.png`;
}
