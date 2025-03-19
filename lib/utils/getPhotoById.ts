import { endpoints, PEXELS_API_KEY, PEXELS_API_URL } from '@/lib/constants';
import { Photo } from '@/lib/types/photo';

export async function getPhotoById(id: string): Promise<Photo | undefined> {
  try {
    const response = await fetch(
      `${PEXELS_API_URL}/${endpoints.photoById}/${id}`,
      { headers: { Authorization: PEXELS_API_KEY } }
    );

    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error(error);
  }
}
