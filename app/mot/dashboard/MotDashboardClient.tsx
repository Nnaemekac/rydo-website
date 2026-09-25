'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MOT_ZONES } from '@/lib/constants';
import { toCsv, downloadCsv } from '@/lib/csv';
import { useToast } from '@/components/ToastProvider';

export type RiderApplication = {
  id: string | number;
  full_name: string;
  phone: string;
  email: string;
  preferred_zone: string | null;
  vehicle_type: string | null;
  licence_number: string;
  nin: string;
  house_address: string;
  state: string | null;
  lga: string | null;
  status: string | null;
  created_at: string;
  [key: string]: unknown;
};

export type PackageRequest = {
  id: string | number;
  sender_name: string;
  sender_phone: string;
  pickup_address: string;
  dropoff_address: string;
  recipient_name: string;
  recipient_phone: string;
  status: string | null;
  created_at: string;
  [key: string]: unknown;
};

type Tab = 'overview' | 'riders' | 'zones' | 'incidents' | 'reports';

type Alert = {
  type: 'info' | 'warning' | 'danger' | 'success';
  icon: string;
  title: string;
  body: string;
};

function statusClass(status: string | null) {
  const s = (status || '').toLowerCase();
  if (s === 'active') return 'active';
  if (s === 'suspended') return 'suspended';
  if (s === 'expired') return 'expired';
  return 'pending';
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function MotDashboardClient({
  riders,
  packages,
  messageCount,
}: {
  riders: RiderApplication[];
  packages: PackageRequest[];
  messageCount: number;
}) {
  const router = useRouter();
  const { showToast } = useToast();

  const [tab, setTab] = useState<Tab>('overview');
  const [search, setSearch] = useState('');
  const [clockTime, setClockTime] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    const tick = () => {
      setClockTime(new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const interval = setInterval(tick, 30000);
    setLastUpdated(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
    return () => clearInterval(interval);
  }, []);

  const zoneCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    MOT_ZONES.forEach((zone) => {
      counts[zone] = 0;
    });
    riders.forEach((rider) => {
      if (rider.preferred_zone && Object.prototype.hasOwnProperty.call(counts, rider.preferred_zone)) {
        counts[rider.preferred_zone] += 1;
      }
    });
    return counts;
  }, [riders]);

  const maxZoneCount = Math.max(1, ...Object.values(zoneCounts));

  const pendingRiders = useMemo(() => riders.filter((r) => r.status === 'applied').length, [riders]);

  const alerts = useMemo<Alert[]>(() => {
    const list: Alert[] = [];
    if (pendingRiders > 0) {
      list.push({
        type: 'info',
        icon: 'fa-motorcycle',
        title: `${pendingRiders} rider application${pendingRiders === 1 ? '' : 's'} awaiting review`,
        body: 'Open the Riders tab to review and follow up.',
      });
    }
    if (messageCount > 0) {
      list.push({
        type: 'info',
        icon: 'fa-envelope',
        title: `${messageCount} contact message${messageCount === 1 ? '' : 's'} on file`,
        body: 'Submitted through the public Contact form.',
      });
    }
    return list;
  }, [pendingRiders, messageCount]);

  const filteredRiders = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return riders;
    return riders.filter(
      (r) =>
        (r.full_name || '').toLowerCase().includes(term) ||
        (r.preferred_zone || '').toLowerCase().includes(term)
    );
  }, [riders, search]);

  function exportRiders() {
    if (riders.length === 0) {
      showToast('No rider applications to export yet.', 'error');
      return;
    }
    const csv = toCsv(riders, [
      { key: 'id', label: 'ID' },
      { key: 'full_name', label: 'Full Name' },
      { key: 'phone', label: 'Phone' },
      { key: 'email', label: 'Email' },
      { key: 'preferred_zone', label: 'Preferred Zone' },
      { key: 'vehicle_type', label: 'Vehicle Type' },
      { key: 'licence_number', label: 'Licence Number' },
      { key: 'nin', label: 'NIN' },
      { key: 'house_address', label: 'House Address' },
      { key: 'state', label: 'State' },
      { key: 'lga', label: 'LGA' },
      { key: 'status', label: 'Status' },
      { key: 'created_at', label: 'Applied At' },
    ]);
    downloadCsv('rydo-rider-applications.csv', csv);
  }

  function exportPackages() {
    if (packages.length === 0) {
      showToast('No package requests to export yet.', 'error');
      return;
    }
    const csv = toCsv(packages, [
      { key: 'id', label: 'ID' },
      { key: 'sender_name', label: 'Sender' },
      { key: 'sender_phone', label: 'Sender Phone' },
      { key: 'pickup_address', label: 'Pickup' },
      { key: 'dropoff_address', label: 'Dropoff' },
      { key: 'recipient_name', label: 'Recipient' },
      { key: 'recipient_phone', label: 'Recipient Phone' },
      { key: 'status', label: 'Status' },
      { key: 'created_at', label: 'Requested At' },
    ]);
    downloadCsv('rydo-package-requests.csv', csv);
  }

  async function handleSignOut() {
    setSigningOut(true);
    await fetch('/api/auth/staff-logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ portal: 'mot' }),
    });
    router.push('/mot');
    router.refresh();
  }

  return (
    <div className="mot-dashboard" style={{ display: 'block' }}>
      <div className="mot-topbar">
        <div className="container mot-topbar-inner">
          <div className="mot-nav-tabs">
            <button className={`mot-tab${tab === 'overview' ? ' active' : ''}`} onClick={() => setTab('overview')}>
              <i className="fa-solid fa-chart-column"></i> Overview
            </button>
            <button className={`mot-tab${tab === 'riders' ? ' active' : ''}`} onClick={() => setTab('riders')}>
              <i className="fa-solid fa-motorcycle"></i> Riders
            </button>
            <button className={`mot-tab${tab === 'zones' ? ' active' : ''}`} onClick={() => setTab('zones')}>
              <i className="fa-solid fa-location-dot"></i> Zones
            </button>
            <button className={`mot-tab${tab === 'incidents' ? ' active' : ''}`} onClick={() => setTab('incidents')}>
              <i className="fa-solid fa-triangle-exclamation"></i> Incidents
            </button>
            <button className={`mot-tab${tab === 'reports' ? ' active' : ''}`} onClick={() => setTab('reports')}>
              <i className="fa-solid fa-clipboard-list"></i> Reports
            </button>
          </div>
          <div className="mot-user-info">
            <div className="mot-user-avatar">M</div>
            <div>
              <div className="mot-user-name">MOT Officer</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>
                Rivers State MOT · <span>{clockTime}</span>
              </div>
            </div>
            <button className="mot-logout" onClick={handleSignOut} disabled={signingOut}>
              {signingOut ? 'Signing out…' : 'Sign Out'}
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32 }}>
        {tab === 'overview' && (
          <div className="mot-panel active">
            <div className="mot-section-head">
              <div className="mot-section-title">Operations Overview — Port Harcourt Metro</div>
              <div style={{ fontSize: 13, color: '#8494B5' }}>Last updated: <span>{lastUpdated}</span></div>
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
        )}

        {tab === 'riders' && (
          <div className="mot-panel active">
            <div className="mot-section-head">
              <div className="mot-section-title">Rider Registry</div>
              <div style={{ display: 'flex', gap: 10 }}>
                <input
                  type="text"
                  placeholder="Search rider name or zone…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    padding: '8px 14px',
                    border: '1.5px solid #DDE6F5',
                    borderRadius: 10,
                    fontSize: 13,
                    fontFamily: 'Inter, sans-serif',
                    outline: 'none',
                    width: 220,
                  }}
                />
                <button className="mot-export-btn" onClick={exportRiders}>
                  <i className="fa-solid fa-download"></i> Export CSV
                </button>
              </div>
            </div>
            <div className="mot-table-wrap">
              <div className="mot-table-head">
                <div className="mot-table-title">Rider Applications — Port Harcourt &amp; Obio-Akpor</div>
                <span style={{ fontSize: 12, color: '#8494B5' }}>
                  {filteredRiders.length} of {riders.length} shown
                </span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="mot-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Full Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Preferred Zone</th>
                      <th>Vehicle</th>
                      <th>Licence No.</th>
                      <th>State / LGA</th>
                      <th>Applied</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRiders.length === 0 ? (
                      <tr>
                        <td colSpan={10} style={{ textAlign: 'center', color: '#8494B5', padding: 24 }}>
                          {riders.length === 0 ? 'No rider applications yet.' : 'No matches.'}
                        </td>
                      </tr>
                    ) : (
                      filteredRiders.map((r) => (
                        <tr key={r.id}>
                          <td><strong style={{ color: '#1A2540' }}>#{r.id}</strong></td>
                          <td>{r.full_name}</td>
                          <td><span style={{ fontFamily: 'monospace', fontSize: 12 }}>{r.phone}</span></td>
                          <td style={{ fontSize: 12 }}>{r.email}</td>
                          <td>{r.preferred_zone || '—'}</td>
                          <td>{r.vehicle_type || '—'}</td>
                          <td>{r.licence_number}</td>
                          <td style={{ fontSize: 12 }}>
                            {r.state || '—'}
                            {r.lga ? ` / ${r.lga}` : ''}
                          </td>
                          <td style={{ color: '#8494B5', fontSize: 12 }}>{formatDate(r.created_at)}</td>
                          <td>
                            <span className={`mot-status ${statusClass(r.status)}`}>
                              <span className="mot-status-dot"></span>
                              {r.status || 'applied'}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {tab === 'zones' && (
          <div className="mot-panel active">
            <div className="mot-section-head">
              <div className="mot-section-title">Zone Activity Monitor</div>
              <span style={{ fontSize: 12, color: '#8494B5' }}>
                Based on rider applications&apos; preferred zone — delivery volume per zone isn&apos;t tracked yet
              </span>
            </div>
            <div className="mot-zones">
              {MOT_ZONES.map((zone) => {
                const value = zoneCounts[zone];
                const pct = Math.round((value / maxZoneCount) * 100);
                return (
                  <div className="mot-zone-card" key={zone}>
                    <div className="mot-zone-name"><i className="fa-solid fa-location-dot"></i> {zone}</div>
                    <div className="mot-zone-stats">
                      <div>
                        <div className="mot-zone-stat-num">{value}</div>
                        <div className="mot-zone-stat-label">Rider applications</div>
                      </div>
                    </div>
                    <div className="mot-zone-bar">
                      <div className="mot-zone-bar-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {tab === 'incidents' && (
          <div className="mot-panel active">
            <div className="mot-section-head">
              <div className="mot-section-title">Incident Log</div>
            </div>
            <div style={{ textAlign: 'center', padding: '64px 24px', background: '#fff', borderRadius: 16, border: '1px solid #DDE6F5' }}>
              <div style={{ fontSize: 36, color: '#DDE6F5', marginBottom: 14 }}>
                <i className="fa-solid fa-clipboard-check"></i>
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1117', marginBottom: 6 }}>
                No incident reporting feature yet
              </div>
              <div style={{ fontSize: 13, color: '#8494B5', maxWidth: 380, margin: '0 auto' }}>
                RYDO hasn&apos;t built rider incident tracking into this system yet. This panel will populate once
                that feature exists — nothing has been fabricated here.
              </div>
            </div>
          </div>
        )}

        {tab === 'reports' && (
          <div className="mot-panel active">
            <div className="mot-section-head">
              <div className="mot-section-title">Data Exports</div>
            </div>
            <p style={{ fontSize: 13, color: '#8494B5', marginBottom: 20, maxWidth: 600 }}>
              Formal regulatory PDF reports aren&apos;t built yet — these buttons export the real raw data
              currently in the system as CSV.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #DDE6F5', padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12, color: '#1A2540' }}>
                  <i className="fa-solid fa-motorcycle"></i>
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#0D1117', marginBottom: 8 }}>
                  All Rider Applications
                </div>
                <div style={{ fontSize: 12, color: '#8494B5', lineHeight: 1.6, marginBottom: 16 }}>
                  Every rider application submitted through the site, with real contact and zone data.
                </div>
                <button className="mot-export-btn" onClick={exportRiders}>
                  <i className="fa-solid fa-download"></i> Export CSV
                </button>
              </div>
              <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #DDE6F5', padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 12, color: '#1A2540' }}>
                  <i className="fa-solid fa-box"></i>
                </div>
                <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: 14, color: '#0D1117', marginBottom: 8 }}>
                  All Package Requests
                </div>
                <div style={{ fontSize: 12, color: '#8494B5', lineHeight: 1.6, marginBottom: 16 }}>
                  Every package delivery request submitted through the site.
                </div>
                <button className="mot-export-btn" onClick={exportPackages}>
                  <i className="fa-solid fa-download"></i> Export CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
