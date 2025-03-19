'use client';

import { PhotosData } from '@/lib/types/photo';
import { usePhotos } from '@/lib/hooks/usePhotos';
import ImageWithLink from '@/components/MasonryGridLayout/ImageWithLink';

interface MasonryGridLayoutProps {
  photosData?: PhotosData;
}

function MasonryGridLayout({ photosData }: MasonryGridLayoutProps) {
  const { photos } = usePhotos(photosData);

  if (!photos) {
    return null;
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {photos.map((photo) => (
        <ImageWithLink key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default MasonryGridLayout;
