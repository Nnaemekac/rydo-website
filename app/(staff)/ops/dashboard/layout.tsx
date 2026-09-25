import { createClient } from '@/lib/supabase/server';
import DashboardShell, { type DashboardNavItem } from '@/components/dashboard/DashboardShell';

const NAV_ITEMS: DashboardNavItem[] = [
  { href: '/ops/dashboard/riders', label: 'Riders', icon: 'fa-motorcycle' },
  { href: '/ops/dashboard/packages', label: 'Packages', icon: 'fa-box' },
  { href: '/ops/dashboard/messages', label: 'Messages', icon: 'fa-envelope' },
];

export default async function OpsDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: staff } = user
    ? await supabase.from('rydo_staff').select('full_name, role').eq('email', user.email).maybeSingle()
    : { data: null };

  return (
    <DashboardShell
      portal="ops"
      portalLabel="RYDO Ops"
      navItems={NAV_ITEMS}
      staffName={staff?.full_name || 'Staff'}
      staffRole={staff?.role || 'Operations'}
    >
      {children}
    </DashboardShell>
  );
}
