'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ToastProvider';
import {
  MESSAGE_STATUSES,
  PACKAGE_STATUSES,
  RIDER_STATUSES,
  type Message,
  type OpsStaff,
  type PackageRequest,
  type RiderApplication,
} from './types';

type OpsTab = 'riders' | 'packages' | 'messages';

const selectStyle: CSSProperties = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #DDE6F5',
  fontFamily: 'Inter,sans-serif',
};

const fileButtonStyle: CSSProperties = {
  padding: '4px 10px',
  background: '#F0F4F8',
  border: '1px solid #DDE6F5',
  borderRadius: 6,
  fontSize: 11,
  cursor: 'pointer',
  marginRight: 4,
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function formatTime() {
  return new Date().toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
}

export default function OpsDashboardClient({
  staff,
  riders: initialRiders,
  packages: initialPackages,
  messages: initialMessages,
}: {
  staff: OpsStaff | null;
  riders: RiderApplication[];
  packages: PackageRequest[];
  messages: Message[];
}) {
  const router = useRouter();
  const supabase = createClient();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<OpsTab>('riders');
  const [riders, setRiders] = useState(initialRiders);
  const [packages, setPackages] = useState(initialPackages);
  const [messages, setMessages] = useState(initialMessages);
  const [time, setTime] = useState('');
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    setTime(formatTime());
    const interval = setInterval(() => setTime(formatTime()), 30000);
    return () => clearInterval(interval);
  }, []);

  async function handleRiderStatusChange(id: number, status: string) {
    const { error } = await supabase.from('rider_applications').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setRiders((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    showToast(`Rider application marked "${status}"`);
  }

  async function handlePackageStatusChange(id: number, status: string) {
    const { error } = await supabase.from('package_requests').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
    showToast(`Package request marked "${status.replace('_', ' ')}"`);
  }

  async function handleMessageStatusChange(id: number, status: string) {
    const { error } = await supabase.from('messages').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, status } : m)));
    showToast(`Message marked "${status}"`);
  }

  async function handleViewDoc(path: string) {
    const { data, error } = await supabase.storage.from('rider-documents').createSignedUrl(path, 60);
    if (error) {
      showToast(`Could not open document: ${error.message}`, 'error');
      return;
    }
    window.open(data.signedUrl, '_blank');
  }

  async function handleSignOut() {
    setSigningOut(true);
    await fetch('/api/auth/staff-logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ portal: 'ops' }),
    });
    router.push('/ops');
    router.refresh();
  }

  const avatarInitial = staff?.full_name ? staff.full_name.charAt(0).toUpperCase() : 'R';
  const userLabel = staff ? `${staff.role} — ${staff.full_name}` : 'Staff';

  return (
    <div className="mot-dashboard">
      <div className="mot-topbar">
        <div className="container mot-topbar-inner">
          <div className="mot-nav-tabs">
            <button
              className={`mot-tab ${activeTab === 'riders' ? 'active' : ''}`}
              onClick={() => setActiveTab('riders')}
            >
              <i className="fa-solid fa-motorcycle"></i> Riders
            </button>
            <button
              className={`mot-tab ${activeTab === 'packages' ? 'active' : ''}`}
              onClick={() => setActiveTab('packages')}
            >
              <i className="fa-solid fa-box"></i> Packages
            </button>
            <button
              className={`mot-tab ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <i className="fa-solid fa-envelope"></i> Messages
            </button>
          </div>
          <div className="mot-user-info">
            <div className="mot-user-avatar">{avatarInitial}</div>
            <div>
              <div className="mot-user-name">{userLabel}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.28)' }}>
                RYDO Ops · <span>{time}</span>
              </div>
            </div>
            <button className="mot-logout" onClick={handleSignOut} disabled={signingOut}>
              {signingOut ? 'Signing out…' : 'Sign Out'}
            </button>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: 32 }}>
        <div className={`mot-panel ${activeTab === 'riders' ? 'active' : ''}`}>
          <div className="mot-section-head">
            <div className="mot-section-title">Rider Applications</div>
            <span style={{ fontSize: 12, color: '#8494B5' }}>{riders.length} total</span>
          </div>
          <div className="mot-table-wrap">
            <div style={{ overflowX: 'auto' }}>
              <table className="mot-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Zone</th>
                    <th>Vehicle</th>
                    <th>Licence</th>
                    <th>NIN</th>
                    <th>Address</th>
                    <th>State / LGA</th>
                    <th>Applied</th>
                    <th>Status</th>
                    <th>Files</th>
                  </tr>
                </thead>
                <tbody>
                  {riders.length === 0 ? (
                    <tr>
                      <td colSpan={13} style={{ textAlign: 'center', color: '#8494B5', padding: 24 }}>
                        No applications yet.
                      </td>
                    </tr>
                  ) : (
                    riders.map((r) => {
                      const documentPath = r.document_path;
                      const selfiePath = r.selfie_path;
                      return (
                        <tr key={r.id}>
                          <td>
                            <strong>#{r.id}</strong>
                          </td>
                          <td>{r.full_name}</td>
                          <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{r.phone}</td>
                          <td style={{ fontSize: 12 }}>{r.email}</td>
                          <td>{r.preferred_zone || '—'}</td>
                          <td>{r.vehicle_type || '—'}</td>
                          <td>{r.licence_number}</td>
                          <td style={{ fontFamily: 'monospace', fontSize: 12 }}>{r.nin || '—'}</td>
                          <td style={{ fontSize: 12, maxWidth: 160 }}>{r.house_address || '—'}</td>
                          <td style={{ fontSize: 12 }}>
                            {r.state || '—'}
                            {r.lga ? ` / ${r.lga}` : ''}
                          </td>
                          <td style={{ color: '#8494B5', fontSize: 12 }}>{formatDate(r.created_at)}</td>
                          <td>
                            <select
                              value={r.status ?? 'applied'}
                              onChange={(e) => handleRiderStatusChange(r.id, e.target.value)}
                              style={selectStyle}
                            >
                              {RIDER_STATUSES.map((s) => (
                                <option key={s} value={s}>
                                  {s.replace('_', ' ')}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>
                            {!documentPath && !selfiePath && '—'}
                            {documentPath && (
                              <button style={fileButtonStyle} onClick={() => handleViewDoc(documentPath)}>
                                ID
                              </button>
                            )}
                            {selfiePath && (
                              <button
                                style={{ ...fileButtonStyle, marginRight: 0 }}
                                onClick={() => handleViewDoc(selfiePath)}
                              >
                                Selfie
                              </button>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={`mot-panel ${activeTab === 'packages' ? 'active' : ''}`}>
          <div className="mot-section-head">
            <div className="mot-section-title">Package Requests</div>
            <span style={{ fontSize: 12, color: '#8494B5' }}>{packages.length} total</span>
          </div>
          <div className="mot-table-wrap">
            <div style={{ overflowX: 'auto' }}>
              <table className="mot-table">
                <thead>
                  <tr>
                    <th>Ref</th>
                    <th>Sender</th>
                    <th>Pickup</th>
                    <th>Dropoff</th>
                    <th>Recipient</th>
                    <th>Requested</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', color: '#8494B5', padding: 24 }}>
                        No package requests yet.
                      </td>
                    </tr>
                  ) : (
                    packages.map((p) => (
                      <tr key={p.id}>
                        <td>
                          <strong>{`RY-${String(p.id).padStart(4, '0')}`}</strong>
                        </td>
                        <td>
                          {p.sender_name}
                          <br />
                          <span style={{ fontSize: 11, color: '#8494B5' }}>{p.sender_phone}</span>
                        </td>
                        <td style={{ fontSize: 12, maxWidth: 160 }}>{p.pickup_address}</td>
                        <td style={{ fontSize: 12, maxWidth: 160 }}>{p.dropoff_address}</td>
                        <td>
                          {p.recipient_name}
                          <br />
                          <span style={{ fontSize: 11, color: '#8494B5' }}>{p.recipient_phone}</span>
                        </td>
                        <td style={{ color: '#8494B5', fontSize: 12 }}>{formatDate(p.created_at)}</td>
                        <td>
                          <select
                            value={p.status ?? 'pending'}
                            onChange={(e) => handlePackageStatusChange(p.id, e.target.value)}
                            style={selectStyle}
                          >
                            {PACKAGE_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s.replace('_', ' ')}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={`mot-panel ${activeTab === 'messages' ? 'active' : ''}`}>
          <div className="mot-section-head">
            <div className="mot-section-title">Contact Messages</div>
            <span style={{ fontSize: 12, color: '#8494B5' }}>{messages.length} total</span>
          </div>
          <div className="mot-table-wrap">
            <div style={{ overflowX: 'auto' }}>
              <table className="mot-table">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Topic</th>
                    <th>Message</th>
                    <th>Received</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.length === 0 ? (
                    <tr>
                      <td colSpan={7} style={{ textAlign: 'center', color: '#8494B5', padding: 24 }}>
                        No messages yet.
                      </td>
                    </tr>
                  ) : (
                    messages.map((m) => (
                      <tr key={m.id}>
                        <td>{`${m.first_name} ${m.last_name}`}</td>
                        <td style={{ fontSize: 12 }}>{m.email}</td>
                        <td style={{ fontSize: 12 }}>{m.phone || '—'}</td>
                        <td>{m.topic || '—'}</td>
                        <td style={{ fontSize: 12, maxWidth: 260 }}>{m.message}</td>
                        <td style={{ color: '#8494B5', fontSize: 12 }}>{formatDate(m.created_at)}</td>
                        <td>
                          <select
                            value={m.status ?? 'new'}
                            onChange={(e) => handleMessageStatusChange(m.id, e.target.value)}
                            style={selectStyle}
                          >
                            {MESSAGE_STATUSES.map((s) => (
                              <option key={s} value={s}>
                                {s.replace('_', ' ')}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
