import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your App Title',
  description: 'Description of your app',
  keywords: ['keyword1', 'keyword2'],
  authors: [{ name: 'Your Name', url: 'https://yourwebsite.com' }],
  creator: 'Your Name',
  publisher: 'Your Company',
  themeColor: '#ffffff',
  openGraph: {
    title: 'Your App Title',
    description: 'Description of your app',
    url: 'https://yourapp.com',
    siteName: 'Your Site Name',
    images: [
      { url: 'https://yourapp.com/image.jpg', width: 800, height: 600, alt: 'Alt text' },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your App Title',
    description: 'Description of your app',
    images: ['https://yourapp.com/image.jpg'],
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;