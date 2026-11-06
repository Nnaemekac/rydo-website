'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WORK } from '@/lib/company';

const FILTERS = ['All', 'Apps', 'Websites', 'Systems'] as const;

const CATEGORY: Record<string, (typeof FILTERS)[number]> = {
  'RYDO App': 'Apps',
  'AJATE Journal': 'Websites',
  'SIMAS Water': 'Systems',
};

export default function WorkList() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');
  const shown = WORK.filter((w) => filter === 'All' || CATEGORY[w.name] === filter);

  return (
    <div className="wl">
      <div className="wl-filters" role="group" aria-label="Filter projects">
        {FILTERS.map((f) => (
          <button key={f} className={f === filter ? 'is-active' : ''} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <ul className="wl-list">
        {shown.map((w) => {
          const number = String(WORK.indexOf(w) + 1).padStart(2, '0');
          const row = (
            <>
              <div
                className="wl-media"
                onMouseMove={(e) => {
                  const r = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty('--x', `${e.clientX - r.left}px`);
                  e.currentTarget.style.setProperty('--y', `${e.clientY - r.top}px`);
                }}
              >
                <Image src={w.image} alt={`${w.name}, built by RYDO`} width={960} height={600} sizes="(max-width: 760px) 92vw, 480px" />
                <span className="wl-explore" aria-hidden="true">
                  {w.href ? 'Explore' : 'Private'}
                </span>
              </div>
              <div className="wl-info">
                <div>
                  <h3>{w.name}</h3>
                  <p>
                    {w.kind} · {w.client}
                  </p>
                  <ul className="wl-tags">
                    {w.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <span className="wl-num">{number}</span>
              </div>
            </>
          );
          return (
            <li key={w.name}>
              {w.href ? (
                <Link
                  href={w.href}
                  className="wl-row"
                  {...(w.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {row}
                </Link>
              ) : (
                <div className="wl-row is-static">{row}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
