'use client';

import { PhotosData } from '@/lib/types/photo';
import Link from 'next/link';
import { IMAGE_MEDIUM_HEIGHT, IMAGE_SMALL_HEIGHT } from '@/lib/constants';
import { usePhotos } from '@/lib/hooks/usePhotos';

interface MasonryGridLayoutProps {
  photosData: PhotosData;
}

function MasonryGridLayout({ photosData }: MasonryGridLayoutProps) {
  const { photos } = usePhotos(photosData);

  if (!photos) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {photos.map((photo) => (
        <Link
          key={photo.id}
          href={`/photo/${photo.id}`}
          aria-label={`View details for ${photo.alt}`}
        >
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={photo.src.small}
              width={(photo.width * IMAGE_SMALL_HEIGHT) / photo.height}
              height={IMAGE_SMALL_HEIGHT}
            />
            <img
              src={photo.src.medium}
              alt={photo.alt}
              loading="lazy"
              width={(photo.width * IMAGE_MEDIUM_HEIGHT) / photo.height}
              height={IMAGE_MEDIUM_HEIGHT}
            />
          </picture>
        </Link>
      ))}
    </div>
  );
}

export default MasonryGridLayout;
