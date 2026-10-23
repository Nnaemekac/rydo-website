import type { Metadata } from 'next';
import { Sora, Inter } from 'next/font/google';
import TrackingClient from './TrackingClient';

const sora = Sora({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-heading', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: 'Track Your Delivery | RYDO',
  description: 'Live status for a RYDO delivery.',
};

export default async function TrackPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return (
    <div className={`${sora.variable} ${inter.variable}`} style={{ fontFamily: 'var(--font-body), sans-serif' }}>
      <TrackingClient orderId={orderId} />
    </div>
  );
}
