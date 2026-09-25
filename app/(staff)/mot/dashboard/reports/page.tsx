import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import type { PackageRequest, RiderApplication } from '@/lib/dashboardTypes';
import ExportCsvButton from '@/components/dashboard/ExportCsvButton';

export const metadata: Metadata = {
  title: 'Reports — MOT Portal',
  description: 'Data exports for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default async function MotReportsPage() {
  const supabase = await createClient();
  const [ridersRes, packagesRes] = await Promise.all([
    supabase.from('rider_applications').select('*').order('created_at', { ascending: false }),
    supabase.from('package_requests').select('*').order('created_at', { ascending: false }),
  ]);
  const riders = (ridersRes.data ?? []) as RiderApplication[];
  const packages = (packagesRes.data ?? []) as PackageRequest[];

  return (
    <div>
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
          <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 700, fontSize: 14, color: '#0D1117', marginBottom: 8 }}>
            All Rider Applications
          </div>
          <div style={{ fontSize: 12, color: '#8494B5', lineHeight: 1.6, marginBottom: 16 }}>
            Every rider application submitted through the site, with real contact and zone data.
          </div>
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
        <div style={{ background: '#fff', borderRadius: 16, border: '1px solid #DDE6F5', padding: 24 }}>
          <div style={{ fontSize: 28, marginBottom: 12, color: '#1A2540' }}>
            <i className="fa-solid fa-box"></i>
          </div>
          <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 700, fontSize: 14, color: '#0D1117', marginBottom: 8 }}>
            All Package Requests
          </div>
          <div style={{ fontSize: 12, color: '#8494B5', lineHeight: 1.6, marginBottom: 16 }}>
            Every package delivery request submitted through the site.
          </div>
          <ExportCsvButton
            rows={packages}
            filename="rydo-package-requests.csv"
            emptyMessage="No package requests to export yet."
            columns={[
              { key: 'id', label: 'ID' },
              { key: 'sender_name', label: 'Sender' },
              { key: 'sender_phone', label: 'Sender Phone' },
              { key: 'pickup_address', label: 'Pickup' },
              { key: 'dropoff_address', label: 'Dropoff' },
              { key: 'recipient_name', label: 'Recipient' },
              { key: 'recipient_phone', label: 'Recipient Phone' },
              { key: 'status', label: 'Status' },
              { key: 'created_at', label: 'Requested At' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
