import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';
import { Metadata } from 'next';

import Header from '~/components/site-header';
import { site } from '~/configs/site';
import GoogleAnalytics from '~/libs/google-analytics';

import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={GeistMono.variable} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === 'production' && <GoogleAnalytics />}
      </head>
      <body>
        <Providers storageKey="soynoah-theme" attribute="class">
          <div className="relative flex min-h-dvh flex-col">
            <Header />
            <main className="container mx-auto max-w-content">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
  authors: [{ name: site.author.name }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.title,
    images: [],
  },
  alternates: { canonical: site.url },
  icons: {
    icon: {
      url: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
      sizes: 'any',
    },
    shortcut: {
      url: '/favicon-16x16.png',
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
    },
    apple: {
      url: '/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '32x32',
    },
  },
  manifest: `/site.webmanifest`,
};
