import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import type { PackageRequest } from '@/lib/dashboardTypes';
import OpsPackagesTable from './OpsPackagesTable';

export const metadata: Metadata = {
  title: 'Packages — Ops Dashboard',
  description: 'Package requests for RYDO Operations staff.',
  robots: { index: false },
};

export default async function OpsPackagesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('package_requests')
    .select('*')
    .order('created_at', { ascending: false });

  return <OpsPackagesTable packages={(data ?? []) as PackageRequest[]} />;
}
