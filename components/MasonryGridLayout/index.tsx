'use client';

import { Photo } from '@/lib/types/photo';

interface MasonryGridLayoutProps {
  photos: Photo[];
}

function MasonryGridLayout({ photos }: MasonryGridLayoutProps) {
  if (!photos) {
    return null;
  }
  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {photos.map((photo) => (
        <a
          key={photo.id}
          href={`/photo/${photo.id}`}
          className="shadow-lg hover:shadow-indigo-500/40"
        >
          <picture>
            <source media="(max-width: 799px)" srcSet={photo.src.small} />
            <img
              src={photo.src.medium}
              alt={photo.alt}
              loading="lazy"
              width={(photo.width * 350) / photo.height}
              height={350}
            />
          </picture>
        </a>
      ))}
    </div>
  );
}

export default MasonryGridLayout;
