import { act } from 'react';
import { renderHook } from '@testing-library/react';

import { usePhotos } from '@/lib/hooks/usePhotos';
import { getPhotos } from '@/lib/utils/getPhotos';
import {
  mockInitialState,
  mockSecondPagePhotosData,
  mockThirdPagePhotosData
} from '@/__mocks__/photos';

jest.mock('@/lib/utils/getPhotos', () => ({
  getPhotos: jest.fn()
}));

describe('usePhotos', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'offsetHeight', {
      configurable: true,
      value: 2000
    });
    Object.defineProperty(document.documentElement, 'clientHeight', {
      configurable: true,
      value: 1000
    });
    Object.defineProperty(document.documentElement, 'scrollTop', {
      configurable: true,
      value: 0,
      writable: true
    });
  });

  it('returns no photos with no loading if initial state is not provided', () => {
    const { result } = renderHook(() => usePhotos());

    expect(result.current.photos).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });

  it('returns initially set photos with no loading when no state is set', () => {
    const { result } = renderHook(() => usePhotos(mockInitialState));

    expect(result.current.photos).toEqual(mockInitialState.photos);
    expect(result.current.loading).toBe(false);
  });

  it('adds scroll event listener on mount and removes on unmount', () => {
    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const scrollHandler = expect.any(Function);

    const { unmount } = renderHook(() => usePhotos(mockInitialState));

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', scrollHandler);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'scroll',
      scrollHandler
    );
  });

  it('does not fetch more photos when there is no nextPageUrl', async () => {
    const mockStateWithNoNextPage = { ...mockInitialState, next_page: '' };
    renderHook(() => usePhotos(mockStateWithNoNextPage));

    await act(async () => {
      document.documentElement.scrollTop = 1500;
      document.dispatchEvent(new Event('scroll'));
    });

    expect(getPhotos).not.toHaveBeenCalled();
  });

  it('fetches more photos when scrolled near to bottom and updates the state', async () => {
    (getPhotos as jest.Mock).mockResolvedValue(mockSecondPagePhotosData);
    const { result, rerender } = renderHook(() => usePhotos(mockInitialState));

    await act(async () => {
      document.documentElement.scrollTop = 1500;
      document.dispatchEvent(new Event('scroll'));
    });

    rerender();
    (getPhotos as jest.Mock).mockResolvedValue(mockThirdPagePhotosData);

    await act(async () => {
      Object.defineProperty(document.documentElement, 'offsetHeight', {
        configurable: true,
        value: 3000
      });
      document.documentElement.scrollTop = 2500;
      document.dispatchEvent(new Event('scroll'));
    });

    expect(result.current.photos).toEqual([
      ...mockInitialState.photos,
      ...mockSecondPagePhotosData.photos,
      ...mockThirdPagePhotosData.photos
    ]);
  });

  it('fetches more photos when scrolled near to bottom and merges them with the initial ones', async () => {
    (getPhotos as jest.Mock).mockResolvedValue(mockSecondPagePhotosData);
    const { result } = renderHook(() => usePhotos(mockInitialState));

    await act(async () => {
      document.documentElement.scrollTop = 1500;
      document.dispatchEvent(new Event('scroll'));
    });

    expect(getPhotos).toHaveBeenCalledWith(mockInitialState.next_page);
    expect(result.current.photos).toEqual([
      ...mockInitialState.photos,
      ...mockSecondPagePhotosData.photos
    ]);
  });
});
