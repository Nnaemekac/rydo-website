import type { Metadata } from 'next';
import TrackingClient from './TrackingClient';

export const metadata: Metadata = {
  title: 'Track Your Delivery | RYDO',
  description: 'Live status for a RYDO delivery.',
};

export default async function TrackPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;
  return <TrackingClient orderId={orderId} />;
}
