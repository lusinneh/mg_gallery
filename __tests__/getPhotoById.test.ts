import { endpoints, PEXELS_API_KEY, PEXELS_API_URL } from '@/lib/constants';
import { getMockPhoto } from '@/__mocks__/photos';
import { getPhotoById } from '@/lib/utils/getPhotoById';

global.fetch = jest.fn();

describe('getPhotoById', () => {
  it('fetches photo by the provided id', async () => {
    const photoResponse = getMockPhoto('1');
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(photoResponse)
    });

    const result = await getPhotoById('1');

    expect(fetch).toHaveBeenCalledWith(
      `${PEXELS_API_URL}/${endpoints.photoById}/1`,
      { headers: { Authorization: PEXELS_API_KEY } }
    );
    expect(result).toEqual(photoResponse);
  });

  it('handles fetch errors', async () => {
    const error = new Error('Network error');
    (fetch as jest.Mock).mockRejectedValueOnce(error);

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    const result = await getPhotoById('100');

    expect(consoleSpy).toHaveBeenCalledWith(error);
    expect(result).toBeUndefined();
  });
});
