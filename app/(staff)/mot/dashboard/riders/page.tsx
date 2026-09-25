import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import type { RiderApplication } from '@/lib/dashboardTypes';
import MotRidersTable from './MotRidersTable';

export const metadata: Metadata = {
  title: 'Riders — MOT Portal',
  description: 'Rider application registry for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default async function MotRidersPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('rider_applications')
    .select('*')
    .order('created_at', { ascending: false });

  return <MotRidersTable riders={(data ?? []) as RiderApplication[]} />;
}
