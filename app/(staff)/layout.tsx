import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import '../globals.css';
import ToastProvider from '@/components/ToastProvider';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RYDO Staff',
    template: '%s | RYDO Staff',
  },
  robots: { index: false },
  icons: { icon: '/images/logo.jpg' },
};

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
