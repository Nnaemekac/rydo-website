import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import SendPackageButton from './SendPackageButton';

export const metadata: Metadata = {
  title: 'My Orders | RYDO',
  description: 'View every package you have sent through RYDO, with live status.',
};

interface PackageRequestRow {
  id: number;
  created_at: string;
  pickup_address: string;
  dropoff_address: string;
  status: string | null;
}

interface RiderApplicationRow {
  id: number;
  created_at: string;
  preferred_zone: string | null;
  vehicle_type: string | null;
  licence_number: string;
  status: string | null;
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default async function OrdersPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let orders: PackageRequestRow[] = [];
  let riderApplication: RiderApplicationRow | null = null;

  if (user) {
    const { data: ordersData } = await supabase
      .from('package_requests')
      .select('*')
      .order('created_at', { ascending: false });
    orders = (ordersData ?? []) as PackageRequestRow[];

    const { data: riderData } = await supabase
      .from('rider_applications')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();
    riderApplication = (riderData ?? null) as RiderApplicationRow | null;
  }

  return (
    <div>
      <div className="about-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow mb-8">
            <span className="badge badge-white">Your Account</span>
          </div>
          <h1 className="about-hero-title">
            My <span style={{ color: 'var(--orange)' }}>Orders.</span>
          </h1>
          <p className="about-hero-sub">Every package you&apos;ve sent through RYDO, with live status.</p>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {!user && (
            <div style={{ textAlign: 'center', padding: '48px 24px' }}>
              <div style={{ fontSize: 40, color: 'var(--gray-200)', marginBottom: 16 }}>
                <i className="fa-solid fa-lock"></i>
              </div>
              <h3 className="heading" style={{ marginBottom: 10 }}>
                Log in to see your orders
              </h3>
              <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>
                You need to be signed in to view your package history.
              </p>
            </div>
          )}

          {user && orders.length === 0 && (
            <div style={{ textAlign: 'center', padding: '48px 24px' }}>
              <div style={{ fontSize: 40, color: 'var(--gray-200)', marginBottom: 16 }}>
                <i className="fa-solid fa-box-open"></i>
              </div>
              <h3 className="heading" style={{ marginBottom: 10 }}>
                No orders yet
              </h3>
              <p style={{ color: 'var(--gray-500)', marginBottom: 24 }}>
                Once you send a package while logged in, it&apos;ll show up here.
              </p>
              <SendPackageButton />
            </div>
          )}

          {user && orders.length > 0 && (
            <div>
              {orders.map((order) => {
                const ref = 'RY-' + String(order.id).padStart(4, '0');
                const status = order.status || 'pending';
                return (
                  <div className="order-card" key={order.id}>
                    <div>
                      <div className="order-card-ref">{ref}</div>
                      <div className="order-card-route">
                        {order.pickup_address} → {order.dropoff_address}
                      </div>
                      <div className="order-card-date">Sent {formatDate(order.created_at)}</div>
                    </div>
                    <span className={`order-status ${status}`}>{status.replace('_', ' ')}</span>
                  </div>
                );
              })}
            </div>
          )}

          {user && riderApplication && (
            <div
              style={{
                marginTop: 56,
                paddingTop: 40,
                borderTop: '1px solid var(--gray-200)',
              }}
            >
              <h3 className="heading" style={{ marginBottom: 16 }}>
                My Rider Application
              </h3>
              <div>
                {(() => {
                  const status = riderApplication.status || 'applied';
                  return (
                    <>
                      <div className="order-card">
                        <div>
                          <div className="order-card-ref">
                            Application — {riderApplication.preferred_zone || 'No zone specified'}
                          </div>
                          <div className="order-card-route">
                            {riderApplication.vehicle_type || 'Vehicle not specified'} · Licence{' '}
                            {riderApplication.licence_number}
                          </div>
                          <div className="order-card-date">
                            Applied {formatDate(riderApplication.created_at)}
                          </div>
                        </div>
                        <span className={`order-status ${status}`}>{status}</span>
                      </div>
                      {status === 'applied' && (
                        <p style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 12 }}>
                          Our onboarding team reviews applications and will call or WhatsApp you within
                          24 hours.
                        </p>
                      )}
                    </>
                  );
                })()}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
