'use client';

import { useMemo, useState } from 'react';
import ExportCsvButton from '@/components/dashboard/ExportCsvButton';
import type { RiderApplication } from '@/lib/dashboardTypes';

function statusClass(status: string | null) {
  const s = (status || '').toLowerCase();
  if (s === 'approved' || s === 'active') return 'active';
  if (s === 'rejected' || s === 'suspended') return 'suspended';
  if (s === 'expired') return 'expired';
  return 'pending';
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export default function MotRidersTable({ riders }: { riders: RiderApplication[] }) {
  const [search, setSearch] = useState('');

  const filteredRiders = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return riders;
    return riders.filter(
      (r) =>
        (r.full_name || '').toLowerCase().includes(term) ||
        (r.preferred_zone || '').toLowerCase().includes(term)
    );
  }, [riders, search]);

  return (
    <div>
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
              fontFamily: 'var(--font-inter),sans-serif',
              outline: 'none',
              width: 220,
            }}
          />
          <ExportCsvButton
            rows={riders}
            filename="rydo-rider-applications.csv"
            emptyMessage="No rider applications to export yet."
            columns={[
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
            ]}
          />
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
  );
}
