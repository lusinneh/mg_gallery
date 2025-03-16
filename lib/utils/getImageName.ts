export function getImageName(alt: string, url: string) {
  if (alt) {
    return alt;
  }

  return url.split('/').at(-2)?.split('-').slice(0, -1).join(' ');
}
