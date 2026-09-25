import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Incidents — MOT Portal',
  description: 'Incident log for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default function MotIncidentsPage() {
  return (
    <div>
      <div className="mot-section-head">
        <div className="mot-section-title">Incident Log</div>
      </div>
      <div style={{ textAlign: 'center', padding: '64px 24px', background: '#fff', borderRadius: 16, border: '1px solid #DDE6F5' }}>
        <div style={{ fontSize: 36, color: '#DDE6F5', marginBottom: 14 }}>
          <i className="fa-solid fa-clipboard-check"></i>
        </div>
        <div style={{ fontFamily: 'var(--font-poppins),sans-serif', fontWeight: 700, fontSize: 15, color: '#0D1117', marginBottom: 6 }}>
          No incident reporting feature yet
        </div>
        <div style={{ fontSize: 13, color: '#8494B5', maxWidth: 380, margin: '0 auto' }}>
          RYDO hasn&apos;t built rider incident tracking into this system yet. This page will populate once
          that feature exists — nothing has been fabricated here.
        </div>
      </div>
    </div>
  );
}
