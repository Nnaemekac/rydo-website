'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { StaffPortal } from '@/lib/staffAuth';
import { STAFF_LOGIN_PATH } from '@/lib/staffAuth';

export type DashboardNavItem = {
  href: string;
  label: string;
  icon: string;
  exact?: boolean;
};

function formatTime() {
  return new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
}

export default function DashboardShell({
  portal,
  portalLabel,
  navItems,
  staffName,
  staffRole,
  children,
}: {
  portal: StaffPortal;
  portalLabel: string;
  navItems: DashboardNavItem[];
  staffName: string;
  staffRole: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [time, setTime] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    setTime(formatTime());
    const interval = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  async function handleSignOut() {
    setSigningOut(true);
    await fetch('/api/auth/staff-logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ portal }),
    });
    router.push(STAFF_LOGIN_PATH[portal]);
    router.refresh();
  }

  const avatarInitial = staffName ? staffName.charAt(0).toUpperCase() : 'S';
  const activePath = navItems.find((item) =>
    item.exact ? pathname === item.href : pathname.startsWith(item.href)
  )?.href;

  return (
    <div className="dash-shell">
      <div className="dash-mobile-topbar">
        <button className="dash-mobile-menu-btn" onClick={() => setMobileOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 14 }}>{portalLabel}</span>
        <span style={{ width: 20 }} />
      </div>

      <div className={`dash-sidebar-backdrop${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(false)} />

      <aside className={`dash-sidebar${mobileOpen ? ' open' : ''}`}>
        <Link href="/" className="dash-sidebar-brand" style={{ textDecoration: 'none' }}>
          <div className="dash-sidebar-brand-icon">
            <Image src="/images/logo.jpg" alt="RYDO" width={32} height={32} />
          </div>
          <div>
            <div className="dash-sidebar-brand-text">RYDO</div>
            <div className="dash-sidebar-portal">{portalLabel}</div>
          </div>
        </Link>

        <nav className="dash-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`dash-nav-item${activePath === item.href ? ' active' : ''}`}
            >
              <i className={`fa-solid ${item.icon}`}></i>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="dash-sidebar-footer">
          <div className="dash-sidebar-clock">
            <i className="fa-regular fa-clock"></i> <span>{time}</span>
          </div>
          <div className="dash-sidebar-user">
            <div className="dash-sidebar-avatar">{avatarInitial}</div>
            <div>
              <div className="dash-sidebar-username">{staffName}</div>
              <div className="dash-sidebar-userrole">{staffRole}</div>
            </div>
          </div>
          <button className="dash-signout-btn" onClick={handleSignOut} disabled={signingOut}>
            {signingOut ? 'Signing out…' : 'Sign Out'}
          </button>
        </div>
      </aside>

      <main className="dash-main">{children}</main>
    </div>
  );
}
