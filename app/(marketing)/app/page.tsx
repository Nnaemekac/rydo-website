import type { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: "RYDO — Nigeria's Fastest Bike Delivery in Port Harcourt",
  description:
    'RYDO connects you with verified motorcycle riders for instant, trackable deliveries across Port Harcourt and Obio-Akpor, Rivers State. Fast, safe, and always reliable.',
};

export default function Home() {
  return <HomeContent />;
}
