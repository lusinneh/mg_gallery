import {
  endpoints,
  MAX_PAGE_COUNT,
  PEXELS_API_KEY,
  PEXELS_API_URL
} from '@/lib/constants';
import { PhotosData } from '@/lib/types/photo';

const URL_FOR_FIRST_PAGE_PHOTOS = `${PEXELS_API_URL}/${endpoints.curatedPhotos}?per_page=${MAX_PAGE_COUNT}`;

export async function getPhotos(url?: string): Promise<PhotosData | undefined> {
  try {
    const response = await fetch(url || URL_FOR_FIRST_PAGE_PHOTOS, {
      headers: { Authorization: PEXELS_API_KEY }
    });

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
