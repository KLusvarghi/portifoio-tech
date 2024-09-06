export const getImageUrl = (name: string, directory: string) => {
  if (name.includes('svg')) {
    return `/home/assets/${directory}/${name}`;
  }
  return `/home/assets/${directory}/${name}.png`;
}
