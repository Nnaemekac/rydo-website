'use client';

import { useState, type CSSProperties } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ToastProvider';
import { RIDER_STATUSES, type RiderApplication } from '@/lib/dashboardTypes';

const selectStyle: CSSProperties = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #DDE6F5',
  fontFamily: 'var(--font-inter),sans-serif',
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
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function OpsRidersTable({ riders: initialRiders }: { riders: RiderApplication[] }) {
  const supabase = createClient();
  const { showToast } = useToast();
  const [riders, setRiders] = useState(initialRiders);

  async function handleStatusChange(id: number, status: string) {
    const { error } = await supabase.from('rider_applications').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setRiders((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
    showToast(`Rider application marked "${status}"`);
  }

  async function handleViewDoc(path: string) {
    const { data, error } = await supabase.storage.from('rider-documents').createSignedUrl(path, 60);
    if (error) {
      showToast(`Could not open document: ${error.message}`, 'error');
      return;
    }
    window.open(data.signedUrl, '_blank');
  }

  return (
    <div>
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
                      <td><strong>#{r.id}</strong></td>
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
                          onChange={(e) => handleStatusChange(r.id, e.target.value)}
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
                          <button style={{ ...fileButtonStyle, marginRight: 0 }} onClick={() => handleViewDoc(selfiePath)}>
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
  );
}
