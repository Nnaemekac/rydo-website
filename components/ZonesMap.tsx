'use client';

import dynamic from 'next/dynamic';

const ZonesMapInner = dynamic(() => import('./ZonesMapInner'), { ssr: false });

export default function ZonesMap() {
  return <ZonesMapInner />;
}
