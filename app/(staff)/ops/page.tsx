import type { Metadata } from 'next';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { STAFF_COOKIE } from '@/lib/staffAuth';
import OpsLoginForm from './OpsLoginForm';

export const metadata: Metadata = {
  title: 'Ops Portal | RYDO',
  description: 'RYDO staff sign-in for the internal Operations Dashboard.',
  robots: { index: false },
};

export default async function OpsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const cookieStore = await cookies();
  const staffCookie = cookieStore.get(STAFF_COOKIE.ops);

  if (user && staffCookie && staffCookie.value === user.email) {
    redirect('/ops/dashboard');
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
          <Link
            href="/"
            style={{ display: 'flex', width: 'fit-content', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}
          >
            <i className="fa-solid fa-arrow-left"></i> Back to RYDO.tech
          </Link>
          <div className="mot-badge">
            <i className="fa-solid fa-toolbox"></i> RYDO Internal
          </div>
          <h1 className="mot-title">
            Operations
            <br />
            <span>Dashboard</span>
          </h1>
          <p className="mot-sub">
            Review and manage rider applications, package requests, and customer messages
            submitted through the site.
          </p>
        </div>
        <OpsLoginForm />
      </div>
    </section>
  );
}
