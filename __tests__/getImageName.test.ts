import { getImageName } from '@/lib/utils/getImageName';

describe('getImageName', () => {
  const alt = 'Alt text for the photo';
  const url = 'https://www.pexels.com/photo/name-found-from-the-url-31131436/';
  const nameFromUrl = 'name found from the url';

  it('returns image alt if it exists', () => {
    const photoName = getImageName(alt, url);
    expect(photoName).toBe(alt);
  });

  it('generates image name based on the image url if the alt is empty', () => {
    const photoName = getImageName('', url);
    expect(photoName).toBe(nameFromUrl);
  });
});
