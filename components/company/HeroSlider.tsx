'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DURATION = 7000;

type Slide = {
  id: string;
  tab: string;
  kicker: string;
  lead: string;
  accent: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    id: 'company',
    tab: 'Who we are',
    kicker: 'RYDO Digital Solutions Ltd',
    lead: 'We build technology that',
    accent: 'works for you.',
    body: 'A Port Harcourt technology company. We designed, built and run the RYDO App, and we build software, websites and IT like it for others.',
    primary: { label: 'Talk to us', href: '#contact' },
    secondary: { label: 'See our work', href: '#work' },
  },
  {
    id: 'app',
    tab: 'RYDO App',
    kicker: 'Our own product',
    lead: 'Deliveries you can',
    accent: 'track live.',
    body: 'Verified riders, live GPS tracking and in-app payments across Port Harcourt. Designed, built and run by our team.',
    primary: { label: 'See the RYDO App', href: '/app' },
    secondary: { label: 'Talk to us', href: '#contact' },
  },
  {
    id: 'web',
    tab: 'Websites',
    kicker: 'Websites and portals',
    lead: 'Websites that do',
    accent: 'real work.',
    body: 'From corporate sites to full platforms like ajate.org, with online submissions, dashboards and email built in.',
    primary: { label: 'Visit ajate.org', href: 'https://ajate.org' },
    secondary: { label: 'Our services', href: '#services' },
  },
  {
    id: 'secure',
    tab: 'Security and IT',
    kicker: 'Security and IT infrastructure',
    lead: 'Secure systems',
    accent: 'you can rely on.',
    body: 'Vulnerability assessments, network and server setup, cloud hosting and ongoing support for organisations that cannot afford downtime.',
    primary: { label: 'Book an assessment', href: '#contact' },
    secondary: { label: 'Our services', href: '#services' },
  },
];

function Browser({ className = '' }: { className?: string }) {
  return (
    <div className={`hs-browser ${className}`}>
      <div className="hs-browser-bar">
        <span />
        <span />
        <span />
        <em>ajate.org</em>
      </div>
      <Image src="/images/work-ajate.jpg" alt="AJATE Journal website, built by RYDO" width={960} height={600} priority />
    </div>
  );
}

function Phone({ className = '' }: { className?: string }) {
  return (
    <div className={`hs-phone ${className}`} aria-label="RYDO App delivery tracking">
      <div className="hs-phone-notch" />
      <div className="hs-phone-screen">
        <Image className="hs-phone-brand" src="/images/rydo-mark.png" alt="" width={940} height={330} />
        <strong>Track your delivery</strong>
        <div className="hs-map">
          <svg viewBox="0 0 160 90" aria-hidden="true">
            <path className="hs-route-bg" d="M18 72 C 40 70, 46 40, 72 44 S 110 64, 124 34 S 140 20, 146 16" />
            <path className="hs-route" d="M18 72 C 40 70, 46 40, 72 44 S 110 64, 124 34 S 140 20, 146 16" />
          </svg>
          <i className="fa-solid fa-location-dot hs-pin-a" />
          <i className="fa-solid fa-location-dot hs-pin-b" />
        </div>
        <ul>
          {['Order confirmed', 'Rider assigned', 'Picked up', 'On the way'].map((step, i) => (
            <li key={step} className={i < 3 ? 'is-done' : 'is-now'} style={{ animationDelay: `${0.5 + i * 0.18}s` }}>
              <i className={`fa-solid ${i < 3 ? 'fa-circle-check' : 'fa-motorcycle'}`} /> {step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Chip({ icon, title, sub, className }: { icon: string; title: string; sub?: string; className: string }) {
  return (
    <div className={`hs-chip ${className}`}>
      <span>
        <i className={`fa-solid ${icon}`} />
      </span>
      <div>
        <strong>{title}</strong>
        {sub && <small>{sub}</small>}
      </div>
    </div>
  );
}

function Visual({ id }: { id: string }) {
  if (id === 'company') {
    return (
      <div className="hs-stage hs-stage-company">
        <Browser className="hs-in-1" />
        <Phone className="hs-in-2" />
        <Chip className="hs-in-3 hs-pos-tl" icon="fa-droplet" title="SIMAS Water" sub="Smart water management" />
        <Chip className="hs-in-4 hs-pos-br" icon="fa-shield-halved" title="Built and supported by RYDO" />
      </div>
    );
  }
  if (id === 'app') {
    return (
      <div className="hs-stage hs-stage-app">
        <Phone className="hs-in-1 hs-phone-lg" />
        <Chip className="hs-in-2 hs-pos-tl" icon="fa-user-check" title="Verified riders" sub="KYC checked" />
        <Chip className="hs-in-3 hs-pos-mr" icon="fa-location-crosshairs" title="Live GPS" sub="Every step tracked" />
        <Chip className="hs-in-4 hs-pos-bl" icon="fa-wallet" title="In-app payments" sub="Card, transfer, wallet" />
      </div>
    );
  }
  if (id === 'web') {
    return (
      <div className="hs-stage hs-stage-web">
        <Browser className="hs-in-1 hs-browser-lg" />
        <Chip className="hs-in-2 hs-pos-tl" icon="fa-file-arrow-up" title="Online submissions" sub="Authors upload, editors review" />
        <Chip className="hs-in-3 hs-pos-br" icon="fa-envelope-circle-check" title="Email built in" sub="Alerts and confirmations" />
      </div>
    );
  }
  return (
    <div className="hs-stage hs-stage-secure">
      <div className="hs-audit hs-in-1">
        <div className="hs-audit-head">
          <span>
            <i className="fa-solid fa-shield-halved" />
          </span>
          <div>
            <strong>Security assessment</strong>
            <small>Network, servers and website</small>
          </div>
        </div>
        <ul>
          {['Firewall and network rules', 'Server hardening', 'Website security audit', 'Backups and recovery'].map(
            (item, i) => (
              <li key={item} style={{ animationDelay: `${0.45 + i * 0.16}s` }}>
                <i className="fa-solid fa-circle-check" /> {item}
              </li>
            ),
          )}
        </ul>
        <div className="hs-audit-meter">
          <span>Checks passed</span>
          <div>
            <i />
          </div>
        </div>
      </div>
      <Chip className="hs-in-2 hs-pos-tr" icon="fa-server" title="Servers and cloud" sub="Set up and monitored" />
      <Chip className="hs-in-3 hs-pos-bl" icon="fa-video" title="CCTV and networks" sub="Installed and maintained" />
    </div>
  );
}

function CtaLink({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  if (href.startsWith('http')) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith('#')) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const touchX = useRef<number | null>(null);
  const elapsed = useRef(0);

  const go = useCallback((next: number) => {
    elapsed.current = 0;
    setProgress(0);
    setIndex((next + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      elapsed.current += Math.min(now - last, 100);
      last = now;
      if (elapsed.current >= DURATION) {
        elapsed.current = 0;
        setProgress(0);
        setIndex((i) => (i + 1) % SLIDES.length);
      } else {
        setProgress(elapsed.current / DURATION);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const slide = SLIDES[index];

  return (
    <section
      className="hs"
      aria-roledescription="carousel"
      aria-label="RYDO Digital Solutions highlights"
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="hs-streaks" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} />
        ))}
      </div>
      <div className="co-wrap hs-grid">
        <div className="hs-copy" key={`copy-${slide.id}`} aria-live="polite">
          <span className="hs-kicker">
            <span className="hs-kicker-num">0{index + 1}</span> {slide.kicker}
          </span>
          <h1>
            <span className="hs-line">
              {slide.lead.split(' ').map((word, i) => (
                <span key={i} className="hs-word" style={{ animationDelay: `${0.08 + i * 0.06}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </span>
            <span className="hs-accent">
              <span className="hs-word" style={{ animationDelay: '0.42s' }}>
                {slide.accent}
              </span>
              <svg viewBox="0 0 300 14" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 9 C 80 2, 220 2, 298 8" />
              </svg>
            </span>
          </h1>
          <p className="hs-body">{slide.body}</p>
          <div className="hs-ctas">
            <CtaLink href={slide.primary.href} className="co-btn co-btn-orange">
              {slide.primary.label} <i className="fa-solid fa-arrow-right" />
            </CtaLink>
            <CtaLink href={slide.secondary.href} className="co-btn hs-btn-line">
              {slide.secondary.label}
            </CtaLink>
          </div>
        </div>

        <div className="hs-visual" key={`visual-${slide.id}`}>
          <span className="hs-glow" aria-hidden="true" />
          <Visual id={slide.id} />
        </div>
      </div>

      <div className="co-wrap hs-controls">
        <div className="hs-tabs" role="tablist" aria-label="Choose a slide">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              className={`hs-tab${i === index ? ' is-active' : ''}${i < index ? ' is-past' : ''}`}
              onClick={() => go(i)}
            >
              <span className="hs-tab-bar">
                <i style={{ transform: `scaleX(${i < index ? 1 : i === index ? progress : 0})` }} />
              </span>
              <span className="hs-tab-label">
                <em>0{i + 1}</em> {s.tab}
              </span>
            </button>
          ))}
        </div>
        <div className="hs-arrows">
          <button aria-label="Previous slide" onClick={() => go(index - 1)}>
            <i className="fa-solid fa-arrow-left" />
          </button>
          <button aria-label="Next slide" onClick={() => go(index + 1)}>
            <i className="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
