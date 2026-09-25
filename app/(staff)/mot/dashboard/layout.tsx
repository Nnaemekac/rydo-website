import { createClient } from '@/lib/supabase/server';
import DashboardShell, { type DashboardNavItem } from '@/components/dashboard/DashboardShell';

const NAV_ITEMS: DashboardNavItem[] = [
  { href: '/mot/dashboard', label: 'Overview', icon: 'fa-chart-column', exact: true },
  { href: '/mot/dashboard/riders', label: 'Riders', icon: 'fa-motorcycle' },
  { href: '/mot/dashboard/zones', label: 'Zones', icon: 'fa-location-dot' },
  { href: '/mot/dashboard/incidents', label: 'Incidents', icon: 'fa-triangle-exclamation' },
  { href: '/mot/dashboard/reports', label: 'Reports', icon: 'fa-clipboard-list' },
];

export default async function MotDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: staff } = user
    ? await supabase.from('mot_staff').select('full_name, role').eq('email', user.email).maybeSingle()
    : { data: null };

  return (
    <DashboardShell
      portal="mot"
      portalLabel="Rivers State MOT"
      navItems={NAV_ITEMS}
      staffName={staff?.full_name || 'MOT Officer'}
      staffRole={staff?.role || 'Ministry of Transport'}
    >
      {children}
    </DashboardShell>
  );
}
