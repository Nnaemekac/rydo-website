import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import '../globals.css';
import ToastProvider from '@/components/ToastProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
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
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
