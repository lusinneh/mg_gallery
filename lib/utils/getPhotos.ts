import {
  endpoints,
  MAX_PAGE_COUNT,
  PEXELS_API_KEY,
  PEXELS_API_URL
} from '@/lib/constants';

export async function getPhotos(url?: string) {
  try {
    const response = await fetch(
      url ||
        `${PEXELS_API_URL}/${endpoints.curatedPhotos}?per_page=${MAX_PAGE_COUNT}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY
        }
      }
    );

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
