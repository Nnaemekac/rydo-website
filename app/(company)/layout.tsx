import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './company.css';
import PostHogProvider from '@/components/PostHogProvider';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rydo.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RYDO Digital Solutions Ltd | Software, websites and IT in Port Harcourt',
    template: '%s | RYDO Digital Solutions',
  },
  description:
    'RYDO Digital Solutions Ltd is a Port Harcourt technology company. We built and run the RYDO App, and we build software, websites, cybersecurity and IT infrastructure for government, corporate and private clients.',
  icons: { icon: '/images/rydo-icon.png', apple: '/images/rydo-icon.png' },
  openGraph: {
    type: 'website',
    siteName: 'RYDO Digital Solutions Ltd',
    images: [{ url: '/images/rydo-logo.png', width: 1251, height: 647, alt: 'RYDO Digital Solutions Ltd' }],
  },
};

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="co-body">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
