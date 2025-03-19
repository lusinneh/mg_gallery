import {
  endpoints,
  MAX_PAGE_COUNT,
  PEXELS_API_KEY,
  PEXELS_API_URL
} from '@/lib/constants';
import { getPhotos } from '@/lib/utils/getPhotos';
import { mockInitialState, mockSecondPagePhotosData } from '@/__mocks__/photos';

global.fetch = jest.fn();

describe('getPhotos', () => {
  it('fetches photos for the first page when no url is provided', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockInitialState)
    });

    const result = await getPhotos();

    expect(fetch).toHaveBeenCalledWith(
      `${PEXELS_API_URL}/${endpoints.curatedPhotos}?per_page=${MAX_PAGE_COUNT}`,
      {
        headers: { Authorization: PEXELS_API_KEY }
      }
    );
    expect(result).toEqual(mockInitialState);
  });

  it('fetches photos for next pages when URL is provided', async () => {
    const customUrl = 'https://api.pexels.com/v1/curated?page=2&per_page=1';
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockSecondPagePhotosData)
    });

    const result = await getPhotos(customUrl);

    expect(fetch).toHaveBeenCalledWith(customUrl, {
      headers: { Authorization: PEXELS_API_KEY }
    });
    expect(result).toEqual(mockSecondPagePhotosData);
  });

  it('handles fetch errors', async () => {
    const error = new Error('Network error');
    (fetch as jest.Mock).mockRejectedValueOnce(error);

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = await getPhotos();

    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(result).toBeUndefined();
  });
});
