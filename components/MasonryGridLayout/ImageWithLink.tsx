import { useMemo } from 'react';
import Link from 'next/link';

import { IMAGE_MEDIUM_HEIGHT, IMAGE_SMALL_HEIGHT } from '@/lib/constants';
import { getImageName } from '@/lib/utils/getImageName';
import { Photo } from '@/lib/types/photo';

interface ImageProps {
  photo: Photo;
}

function ImageWithLink({ photo }: ImageProps) {
  const alt = useMemo(
    () => getImageName(photo.alt, photo.url),
    [photo.alt, photo.url]
  );

  return (
    <Link
      key={photo.id}
      href={`/photo/${photo.id}`}
      aria-label={`View details for ${photo.alt}`}
      className="grow"
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
          alt={alt}
          loading="lazy"
          width={(photo.width * IMAGE_MEDIUM_HEIGHT) / photo.height}
          height={IMAGE_MEDIUM_HEIGHT}
          className="min-w-full h-full object-cover"
          style={{ background: photo.avg_color }}
        />
      </picture>
    </Link>
  );
}

export default ImageWithLink;
