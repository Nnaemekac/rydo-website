import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';
import ModalProvider from '@/components/modals/ModalProvider';
import ToastProvider from '@/components/ToastProvider';
import PostHogProvider from '@/components/PostHogProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageModal from '@/components/modals/PackageModal';
import RiderModal from '@/components/modals/RiderModal';

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rydo.tech';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'RYDO — Fast. Safe. Reliable. We Deliver Trust.',
    template: '%s | RYDO',
  },
  description:
    "RYDO connects you with verified motorcycle riders for instant, trackable deliveries across Port Harcourt and Obio-Akpor, Rivers State.",
  icons: { icon: '/images/logo.jpg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <PostHogProvider>
          <AuthProvider>
            <ModalProvider>
              <ToastProvider>
                <Navbar />
                {children}
                <Footer />
                <PackageModal />
                <RiderModal />
              </ToastProvider>
            </ModalProvider>
          </AuthProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
