export const APP_NAME = 'MG Gallery';
export const APP_DESCRIPTION =
  'Optimized Virtualized Masonry Grid with Detailed Photo View';

export const PEXELS_API_URL =
  process.env.NEXT_PUBLIC_PEXELS_API_URL || 'https://api.pexels.com';
export const PEXELS_API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY || '';

export const endpoints = {
  curatedPhotos: 'v1/curated',
  photoById: 'v1/photos'
};

export const MAX_PAGE_COUNT = 80;

export const IMAGE_MEDIUM_HEIGHT = 350;
export const IMAGE_SMALL_HEIGHT = 130;

export const IMAGE_LARGE_HEIGHT = 650;
export const IMAGE_LARGE_WIDTH = 940;

export const IMAGE_TINY_HEIGHT = 200;
export const IMAGE_TINY_WIDTH = 280;
