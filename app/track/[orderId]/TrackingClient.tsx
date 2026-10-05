'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type TrackingData = {
  order_number: string;
  status: string;
  pickup_zone: string | null;
  dropoff_zone: string | null;
  created_at: string;
  completed_at: string | null;
  rider: { full_name: string | null; vehicle_plate: string | null; rider_score: number; tier: string } | null;
};

const STEPS = [
  { key: 'confirmed', label: 'Confirmed' },
  { key: 'accepted', label: 'Rider Assigned' },
  { key: 'picked_up', label: 'Picked Up' },
  { key: 'in_transit', label: 'In Transit' },
  { key: 'delivered', label: 'Delivered' },
];

function stepIndex(status: string): number {
  switch (status) {
    case 'pending':
    case 'finding_rider':
      return 0;
    case 'accepted':
      return 1;
    case 'picked_up':
      return 2;
    case 'in_transit':
      return 3;
    case 'delivered':
      return 4;
    default:
      return -1;
  }
}

const POLL_INTERVAL = 10000;

export default function TrackingClient({ orderId }: { orderId: string }) {
  const [data, setData] = useState<TrackingData | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    let cancelled = false;

    async function load() {
      const { data: result, error: rpcError } = await supabase.rpc('get_public_tracking', { p_order_id: orderId });
      if (cancelled) return;
      setLoading(false);
      if (rpcError || !result) {
        setError('This tracking link is invalid or has expired.');
        return;
      }
      setData(result as TrackingData);
    }

    load();
    const interval = setInterval(load, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [orderId]);

  if (loading) {
    return (
      <div style={pageStyle}>
        <p style={{ color: 'rgba(240,246,255,0.6)' }}>Loading…</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={pageStyle}>
        <p style={{ color: '#FF4040' }}>{error || 'Order not found.'}</p>
      </div>
    );
  }

  const idx = stepIndex(data.status);
  const isTerminal = data.status === 'cancelled' || data.status === 'failed';

  return (
    <div style={pageStyle}>
      <div style={{ width: '100%', maxWidth: 480 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 4 }}>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 24, color: '#FF5C00' }}>RY</span>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, fontSize: 24, color: '#F0F6FF' }}>DO</span>
        </div>
        <p style={{ color: 'rgba(240,246,255,0.5)', fontSize: 14, marginBottom: 24 }}>#{data.order_number}</p>

        {isTerminal ? (
          <div style={cardStyle}>
            <p style={{ color: '#FF4040', fontWeight: 600 }}>
              {data.status === 'cancelled' ? 'This order was cancelled.' : 'This delivery could not be completed.'}
            </p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
            {STEPS.map((step, i) => {
              const done = i < idx;
              const current = i === idx;
              return (
                <div
                  key={step.key}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 999,
                    fontSize: 12,
                    fontWeight: 600,
                    backgroundColor: current ? '#FF5C00' : done ? 'rgba(0,184,96,0.15)' : 'rgba(255,255,255,0.05)',
                    color: current ? '#fff' : done ? '#00B860' : 'rgba(240,246,255,0.5)',
                  }}
                >
                  {step.label}
                </div>
              );
            })}
          </div>
        )}

        <div style={cardStyle}>
          <p style={labelStyle}>ROUTE</p>
          <p style={valueStyle}>
            {data.pickup_zone ?? '—'} → {data.dropoff_zone ?? '—'}
          </p>
        </div>

        <div style={cardStyle}>
          <p style={labelStyle}>RIDER</p>
          {data.rider ? (
            <>
              <p style={valueStyle}>{data.rider.full_name || 'RYDO Rider'}</p>
              <p style={{ color: '#FFB300', fontSize: 13, marginTop: 4 }}>
                {data.rider.rider_score.toFixed(1)}★ · {data.rider.tier} · {data.rider.vehicle_plate ?? 'Plate unavailable'}
              </p>
            </>
          ) : (
            <p style={{ color: 'rgba(240,246,255,0.5)' }}>No rider assigned yet.</p>
          )}
        </div>

        <p style={{ color: 'rgba(240,246,255,0.35)', fontSize: 12, marginTop: 24, textAlign: 'center' }}>
          Live tracking · refreshes automatically
        </p>
      </div>
    </div>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  backgroundColor: '#050C1A',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 24,
  fontFamily: 'Inter, sans-serif',
};

const cardStyle: React.CSSProperties = {
  backgroundColor: '#0A1628',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: 16,
  padding: 16,
  marginBottom: 12,
};

const labelStyle: React.CSSProperties = {
  color: 'rgba(240,246,255,0.5)',
  fontSize: 11,
  fontWeight: 600,
  marginBottom: 4,
  textTransform: 'uppercase',
};

const valueStyle: React.CSSProperties = {
  color: '#F0F6FF',
  fontSize: 16,
  fontWeight: 600,
};
