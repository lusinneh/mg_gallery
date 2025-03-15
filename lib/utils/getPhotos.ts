import { PEXELS_API_KEY, PEXELS_API_URL } from '@/lib/constants';

export async function getPhotos() {
  try {
    const response = await fetch(`${PEXELS_API_URL}?per_page=80`, {
      headers: {
        Authorization: PEXELS_API_KEY,
        cache: 'only-if-cached'
      }
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
