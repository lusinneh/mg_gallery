'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();

  return (
    <button className="cursor-pointer" onClick={() => router.back()}>
      {'<-'} Go back to Gallery
    </button>
  );
}

export default BackButton;
