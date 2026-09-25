'use client';

import { useState, type CSSProperties } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useToast } from '@/components/ToastProvider';
import { PACKAGE_STATUSES, type PackageRequest } from '@/lib/dashboardTypes';

const selectStyle: CSSProperties = {
  fontSize: 12,
  padding: '4px 8px',
  borderRadius: 6,
  border: '1px solid #DDE6F5',
  fontFamily: 'var(--font-inter),sans-serif',
};

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function OpsPackagesTable({ packages: initialPackages }: { packages: PackageRequest[] }) {
  const supabase = createClient();
  const { showToast } = useToast();
  const [packages, setPackages] = useState(initialPackages);

  async function handleStatusChange(id: number, status: string) {
    const { error } = await supabase.from('package_requests').update({ status }).eq('id', id);
    if (error) {
      showToast(`Failed to update: ${error.message}`, 'error');
      return;
    }
    setPackages((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
    showToast(`Package request marked "${status.replace('_', ' ')}"`);
  }

  return (
    <div>
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
                    <td><strong>{`RY-${String(p.id).padStart(4, '0')}`}</strong></td>
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
                        onChange={(e) => handleStatusChange(p.id, e.target.value)}
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
  );
}
