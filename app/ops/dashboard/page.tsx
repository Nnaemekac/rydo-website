import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import OpsDashboardClient from './OpsDashboardClient';
import type { Message, OpsStaff, PackageRequest, RiderApplication } from './types';

export const metadata: Metadata = {
  title: 'Ops Dashboard | RYDO',
  description: 'Internal RYDO Operations Dashboard for rider applications, package requests, and messages.',
  robots: { index: false },
};

export default async function OpsDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [staffRes, ridersRes, packagesRes, messagesRes] = await Promise.all([
    user
      ? supabase.from('rydo_staff').select('full_name, role').eq('email', user.email).maybeSingle()
      : Promise.resolve({ data: null }),
    supabase.from('rider_applications').select('*').order('created_at', { ascending: false }),
    supabase.from('package_requests').select('*').order('created_at', { ascending: false }),
    supabase.from('messages').select('*').order('created_at', { ascending: false }),
  ]);

  const staff = (staffRes.data ?? null) as OpsStaff | null;
  const riders = (ridersRes.data ?? []) as RiderApplication[];
  const packages = (packagesRes.data ?? []) as PackageRequest[];
  const messages = (messagesRes.data ?? []) as Message[];

  return (
    <OpsDashboardClient staff={staff} riders={riders} packages={packages} messages={messages} />
  );
}
