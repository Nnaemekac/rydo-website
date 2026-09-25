import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import MotDashboardClient, { type PackageRequest, type RiderApplication } from './MotDashboardClient';

export const metadata: Metadata = {
  title: 'Dashboard — MOT Portal',
  description:
    'Rider applications, package requests, and zone activity for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default async function MotDashboardPage() {
  const supabase = await createClient();

  const [ridersRes, packagesRes, messagesRes] = await Promise.all([
    supabase.from('rider_applications').select('*').order('created_at', { ascending: false }),
    supabase.from('package_requests').select('*').order('created_at', { ascending: false }),
    supabase.from('messages').select('*', { count: 'exact', head: true }),
  ]);

  const riders = (ridersRes.data ?? []) as RiderApplication[];
  const packages = (packagesRes.data ?? []) as PackageRequest[];
  const messageCount = messagesRes.count ?? 0;

  return <MotDashboardClient riders={riders} packages={packages} messageCount={messageCount} />;
}
