'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';

const ZONES: [string, number, number, boolean][] = [
  ['Aba Road', 4.8236, 7.0128, true],
  ['GRA Phase 1 & 2', 4.8085, 7.0281, true],
  ['Trans-Amadi', 4.7891, 7.0333, true],
  ['Ikwerre Road', 4.8264, 6.9961, true],
  ['Woji', 4.8388, 7.0472, true],
  ['Rumuola', 4.8280, 7.0180, true],
  ['Mile 1 Market', 4.8158, 7.0145, true],
  ['Mile 3', 4.8103, 7.0072, true],
  ['D-Line', 4.8067, 7.0233, true],
  ['Peter Odili Road', 4.8107, 7.0517, true],
  ['Rumuigbo', 4.8474, 7.0378, true],
  ['Ozuoba', 4.9028, 6.9106, true],
  ['Obio-Akpor', 4.8500, 7.0200, true],
  ['Eleme', 4.7742, 7.1234, false],
];

export default function ZonesMapInner() {
  const elRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!elRef.current || mapRef.current) return;

    const map = L.map(elRef.current, { scrollWheelZoom: false, attributionControl: true }).setView(
      [4.8365, 7.0195],
      12
    );
    mapRef.current = map;

    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
      { attribution: 'Tiles © Esri — Esri, HERE, Garmin, USGS', maxZoom: 19 }
    ).addTo(map);

    const activeIcon = L.divIcon({
      className: '',
      html: '<div style="width:14px;height:14px;border-radius:50%;background:#00E896;border:2px solid #0D1117;box-shadow:0 0 8px #00E896;"></div>',
      iconSize: [14, 14],
    });
    const pendingIcon = L.divIcon({
      className: '',
      html: '<div style="width:14px;height:14px;border-radius:50%;background:#FFB300;border:2px solid #0D1117;box-shadow:0 0 8px #FFB300;"></div>',
      iconSize: [14, 14],
    });

    ZONES.forEach(([name, lat, lng, active]) => {
      L.marker([lat, lng], { icon: active ? activeIcon : pendingIcon })
        .addTo(map)
        .bindPopup(`<b>${name}</b><br/>${active ? 'Active zone' : 'Coming soon'}`);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={elRef} id="zones-leaflet-map" className="zones-visual-map" style={{ width: '100%', height: '100%' }} />;
}
