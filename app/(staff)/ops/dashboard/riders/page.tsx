import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import type { RiderApplication } from '@/lib/dashboardTypes';
import OpsRidersTable from './OpsRidersTable';

export const metadata: Metadata = {
  title: 'Riders — Ops Dashboard',
  description: 'Rider applications for RYDO Operations staff.',
  robots: { index: false },
};

export default async function OpsRidersPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('rider_applications')
    .select('*')
    .order('created_at', { ascending: false });

  return <OpsRidersTable riders={(data ?? []) as RiderApplication[]} />;
}
