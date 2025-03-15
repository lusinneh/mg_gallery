import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/assets/styles/globals.css';
import { APP_DESCRIPTION, APP_NAME } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION
};

interface RootLayoutProp {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Readonly<RootLayoutProp>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
