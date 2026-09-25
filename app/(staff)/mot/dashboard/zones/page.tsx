import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { MOT_ZONES } from '@/lib/constants';
import type { RiderApplication } from '@/lib/dashboardTypes';

export const metadata: Metadata = {
  title: 'Zones — MOT Portal',
  description: 'Zone activity monitor for Rivers State Ministry of Transport staff.',
  robots: { index: false },
};

export default async function MotZonesPage() {
  const supabase = await createClient();
  const { data } = await supabase.from('rider_applications').select('*');
  const riders = (data ?? []) as RiderApplication[];

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

  return (
    <div>
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
  );
}
