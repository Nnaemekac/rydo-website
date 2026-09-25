import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { MOT_ZONES } from '@/lib/constants';
import type { PackageRequest, RiderApplication } from '@/lib/dashboardTypes';

export const metadata: Metadata = {
  title: 'Overview — MOT Portal',
  description: 'Real-time operations overview for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default async function MotOverviewPage() {
  const supabase = await createClient();

  const [ridersRes, packagesRes, messagesRes] = await Promise.all([
    supabase.from('rider_applications').select('*').order('created_at', { ascending: false }),
    supabase.from('package_requests').select('*').order('created_at', { ascending: false }),
    supabase.from('messages').select('*', { count: 'exact', head: true }),
  ]);

  const riders = (ridersRes.data ?? []) as RiderApplication[];
  const packages = (packagesRes.data ?? []) as PackageRequest[];
  const messageCount = messagesRes.count ?? 0;

  const zoneCounts: Record<string, number> = {};
  MOT_ZONES.forEach((zone) => {
    zoneCounts[zone] = 0;
  });
  riders.forEach((rider) => {
    if (rider.preferred_zone && Object.prototype.hasOwnProperty.call(zoneCounts, rider.preferred_zone)) {
      zoneCounts[rider.preferred_zone] += 1;
    }
  });
  const maxZoneCount = Math.max(1, ...Object.values(zoneCounts));

  const pendingRiders = riders.filter((r) => r.status === 'applied').length;

  const alerts: { type: string; icon: string; title: string; body: string }[] = [];
  if (pendingRiders > 0) {
    alerts.push({
      type: 'info',
      icon: 'fa-motorcycle',
      title: `${pendingRiders} rider application${pendingRiders === 1 ? '' : 's'} awaiting review`,
      body: 'Open the Riders page to review and follow up.',
    });
  }
  if (messageCount > 0) {
    alerts.push({
      type: 'info',
      icon: 'fa-envelope',
      title: `${messageCount} contact message${messageCount === 1 ? '' : 's'} on file`,
      body: 'Submitted through the public Contact form.',
    });
  }

  const lastUpdated = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return (
    <div>
      <div className="mot-section-head">
        <div className="mot-section-title">Operations Overview — Port Harcourt Metro</div>
        <div style={{ fontSize: 13, color: '#8494B5' }}>Last updated: {lastUpdated}</div>
      </div>

      <div className="mot-stats">
        <div className="mot-stat-card">
          <div className="mot-stat-icon"><i className="fa-solid fa-motorcycle"></i></div>
          <div className="mot-stat-num" style={{ color: '#1A2540' }}>{riders.length.toLocaleString()}</div>
          <div className="mot-stat-label">Rider Applications</div>
        </div>
        <div className="mot-stat-card">
          <div className="mot-stat-icon"><i className="fa-solid fa-box"></i></div>
          <div className="mot-stat-num" style={{ color: '#1A2540' }}>{packages.length.toLocaleString()}</div>
          <div className="mot-stat-label">Package Requests</div>
        </div>
        <div className="mot-stat-card">
          <div className="mot-stat-icon"><i className="fa-solid fa-envelope"></i></div>
          <div className="mot-stat-num" style={{ color: '#1A2540' }}>{messageCount.toLocaleString()}</div>
          <div className="mot-stat-label">Contact Enquiries</div>
        </div>
        <div className="mot-stat-card">
          <div className="mot-stat-icon"><i className="fa-solid fa-location-dot"></i></div>
          <div className="mot-stat-num" style={{ color: '#1A2540' }}>{MOT_ZONES.length}</div>
          <div className="mot-stat-label">Coverage Zones</div>
        </div>
      </div>

      <div className="mot-section-head"><div className="mot-section-title">Active Alerts</div></div>
      <div className="mot-alerts">
        {alerts.length === 0 ? (
          <div className="mot-alert success">
            <div className="mot-alert-icon"><i className="fa-solid fa-circle-check"></i></div>
            <div>
              <div className="mot-alert-title">No active alerts</div>
              <div className="mot-alert-body">Nothing pending right now.</div>
            </div>
          </div>
        ) : (
          alerts.map((alert) => (
            <div className={`mot-alert ${alert.type}`} key={alert.title}>
              <div className="mot-alert-icon"><i className={`fa-solid ${alert.icon}`}></i></div>
              <div>
                <div className="mot-alert-title">{alert.title}</div>
                <div className="mot-alert-body">{alert.body}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mot-chart-card" style={{ marginTop: 24 }}>
        <div className="mot-chart-title"><i className="fa-solid fa-chart-line"></i> Rider Applications by Zone</div>
        <div className="mot-bar-chart">
          {MOT_ZONES.map((zone) => {
            const value = zoneCounts[zone];
            const pct = Math.round((value / maxZoneCount) * 100);
            return (
              <div className="mot-bar-row" key={zone}>
                <div className="mot-bar-label">{zone}</div>
                <div className="mot-bar-track">
                  <div className="mot-bar-fill" style={{ width: `${pct}%`, background: '#1E4A8A' }} />
                </div>
                <div className="mot-bar-val">{value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
