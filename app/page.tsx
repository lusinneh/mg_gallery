import MasonryGridLayout from '@/components/MasonryGridLayout';
import { getPhotos } from '@/lib/utils/getPhotos';

async function HomePage() {
  const photosData = await getPhotos();

  return (
    <main className="lg:max-w-8xl lg:mx-auto p-5 md:px-10">
      <MasonryGridLayout photosData={photosData} />
    </main>
  );
}

export default HomePage;
