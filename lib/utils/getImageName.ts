// As in some cases the photo doesn't have alt, it is generated from the url
// ex: https://www.pexels.com/photo/charming-mediterranean-alley-with-colorful-buildings-31131436/
export function getImageName(alt: string, url: string) {
  if (alt) {
    return alt;
  }

  return url.split('/').at(-2)?.split('-').slice(0, -1).join(' ');
}
