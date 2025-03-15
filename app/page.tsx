import MasonryGridLayout from '@/components/MasonryGridLayout';
import { getPhotos } from '@/lib/utils/getPhotos';

async function HomePage() {
  const photosData = await getPhotos();

  return (
    <main className="max-w-8xl lg:mx-auto p-5 md:px-10">
      <MasonryGridLayout photos={photosData.photos} />;
    </main>
  );
}

export default HomePage;
