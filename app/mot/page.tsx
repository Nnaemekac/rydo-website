import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { STAFF_COOKIE, STAFF_DASHBOARD_PATH } from '@/lib/staffAuth';
import MotLoginForm from './MotLoginForm';

export const metadata: Metadata = {
  title: 'MOT Portal — Rivers State Ministry of Transport',
  description:
    'Secure regulatory dashboard for Rivers State Ministry of Transport staff overseeing RYDO motorcycle delivery operations.',
  robots: { index: false },
};

export default async function MotPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const cookieStore = await cookies();
  const staffCookie = cookieStore.get(STAFF_COOKIE.mot);

  if (user && staffCookie && staffCookie.value === user.email) {
    redirect(STAFF_DASHBOARD_PATH.mot);
  }

  return (
    <section className="mot-hero">
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 56,
          alignItems: 'center',
        }}
      >
        <div>
          <div className="mot-badge">
            <i className="fa-solid fa-building-columns"></i> Rivers State Ministry of Transport
          </div>
          <h1 className="mot-title">
            RYDO Regulatory
            <br />
            <span>Dashboard</span>
          </h1>
          <p className="mot-sub">
            Real-time oversight of motorcycle delivery operations across Port Harcourt and Obio-Akpor. Rider
            applications, zone activity, and data exports — all in one secure portal.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
              <span style={{ color: '#00A85A' }}>●</span> Data sourced live from RYDO&apos;s systems
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>
              <span style={{ color: '#4A90D9' }}>●</span> NDPA 2023 compliant data handling
            </span>
          </div>
        </div>
        <MotLoginForm />
      </div>
    </section>
  );
}
