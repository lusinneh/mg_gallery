import { getPhotoById } from '@/lib/utils/getPhotoById';
import { notFound } from 'next/navigation';
import {
  IMAGE_LARGE_HEIGHT,
  IMAGE_LARGE_WIDTH,
  IMAGE_TINY_HEIGHT,
  IMAGE_TINY_WIDTH
} from '@/lib/constants';
import { getImageName } from '@/lib/utils/getImageName';
import Link from 'next/link';

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}
async function PhotoPage({ params }: PhotoPageProps) {
  const { id } = await params;
  const photo = await getPhotoById(id);

  if (!photo) {
    notFound();
  }

  const photoName = getImageName(photo.alt, photo.url);
  return (
    <section className="grid grid-cols-1 md:grid-cols-6 p-5">
      <div className="col-span-3 mx-auto p-5">
        <picture>
          <source
            media="(max-width: 400px)"
            srcSet={photo.src.tiny}
            width={IMAGE_TINY_WIDTH}
            height={IMAGE_TINY_HEIGHT}
          />
          <img
            alt={photoName}
            src={photo.src.large}
            width={IMAGE_LARGE_WIDTH}
            height={IMAGE_LARGE_HEIGHT}
            style={{ background: photo.avg_color }}
          />
        </picture>
      </div>
      <div className="col-span-3 p-5 pr-7">
        <div className="flex flex-col gap-5">
          <h1 className="capitalize font-bold text-3xl lg:text-4xl">
            {photoName}
          </h1>
          <div>
            <p className="pt-4">
              The photo was taken by{' '}
              <a
                target="_blank"
                aria-label={`View ${photo.photographer}'s profile`}
                href={photo.photographer_url}
                className="text-gray-800 font-bold"
              >
                {photo.photographer}
              </a>{' '}
              on Pexels.
            </p>
            <p>
              View the original{' '}
              <a
                target="_blank"
                aria-label={`View the original photo in ${photo.width} x ${photo.height} `}
                href={photo.src.original}
                className="text-gray-800 font-bold"
              >
                photo
              </a>{' '}
              in {photo.width} x {photo.height}
            </p>
          </div>
          <div>
            <Link href="/"> {'<-'} Go back to Gallery</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoPage;
