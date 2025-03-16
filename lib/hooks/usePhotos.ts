import { useCallback, useEffect, useState } from 'react';

import { PhotosData } from '@/lib/types/photo';
import { getPhotos } from '@/lib/utils/getPhotos';

export function usePhotos(initialState?: PhotosData) {
  const [state, setState] = useState<PhotosData | null>(null);
  const [loading, setLoading] = useState(false);

  const nextPageUrl = state?.next_page || initialState?.next_page;

  const handleScroll = useCallback(() => {
    if (
      document.documentElement.offsetHeight -
        document.documentElement.clientHeight -
        document.documentElement.scrollTop <=
      1000
    ) {
      document.removeEventListener('scroll', handleScroll);

      if (!nextPageUrl) {
        return;
      }

      setLoading(true);
      getPhotos(nextPageUrl).then((res) => {
        if (res) {
          setState((state) => ({
            ...res,
            photos: [
              ...(state?.photos || initialState?.photos || []),
              ...res.photos
            ]
          }));
        }
      });
      setLoading(false);
    }
  }, [nextPageUrl, initialState?.photos]);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { photos: state?.photos || initialState?.photos, loading };
}
