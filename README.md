## MG Gallery
MG Gallery is a responsive web application built with [Next.js](https://nextjs.org) and [TypeScript](https://www.typescriptlang.org/). It displays a collection of photos fetched from the [Pexels API](https://www.pexels.com/api/documentation/) in a visually appealing masonry grid layout. The application supports infinite scrolling to dynamically load more photos as the user scrolls to the bottom. Each photo in the gallery has link to the photo page for viewing image in higher quality and detailed information.

This project is designed to provide an intuitive and seamless experience for users to browse images, with a focus on performance and responsiveness across devices.

## Installation
Follow these steps to set up the project locally:

Clone the Repository:
```bash
git clone https://github.com/lusinneh/mg_gallery.git
cd mg_gallery
```

Install Dependencies Using npm:
```bash
npm install
```
Or using yarn:
```bash
yarn install
```

Get api key for `Pexels` [https://www.pexels.com/api/](https://www.pexels.com/api/)
Set Up Environment Variables Create a .env file in the root directory and add your Pexels API key:

```bash
NEXT_PUBLIC_PEXELS_API_URL=https://api.pexels.com
NEXT_PUBLIC_PEXELS_API_KEY=[your_api_key]
```
Run the Development Server Using npm:
```bash
npm run dev
```
Or using yarn:
```bash
yarn dev
```
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

Build for Production with npm:
```bash
npm run build
npm start
```
Or with yarn:
```bash
yarn build
yarn start
```

Visit [mg-gallery-eta.vercel.app](https://mg-gallery-eta.vercel.app) for demo.

## Usage
### Browsing Photos
- On the homepage, photos are displayed in a masonry grid layout.
- Scroll down to trigger infinite scroll and load more images from the Pexels API.
### Viewing a Detailed Photo
- Click on any photo in the grid to navigate to its dedicated single photo page.
- The single photo page displays a larger version of the image along with additional details (e.g., photo name, photographer name, links to photographer profile and original image).
- Click on Back button to go back to gallery 
