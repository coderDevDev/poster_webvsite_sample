import ClientLayout from './ClientLayout';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Poster',
  description: 'Post-Production company based in the heart of Paris'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Azeret+Mono&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@700&display=swap"
          rel="stylesheet"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        {/* CRITICAL: Original CSS must load */}
        <link href="/assets/dist/build.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
