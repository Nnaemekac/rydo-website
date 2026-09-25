import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import type { Message } from '@/lib/dashboardTypes';
import OpsMessagesTable from './OpsMessagesTable';

export const metadata: Metadata = {
  title: 'Messages — Ops Dashboard',
  description: 'Contact messages for RYDO Operations staff.',
  robots: { index: false },
};

export default async function OpsMessagesPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  return <OpsMessagesTable messages={(data ?? []) as Message[]} />;
}
