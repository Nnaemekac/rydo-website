'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAV } from '@/lib/company';

export default function CompanyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = COMPANY_NAV.map((n) => n.href.slice(1));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const pick = () => {
      const line = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      const contact = document.getElementById('contact');
      if (contact && contact.getBoundingClientRect().top <= line) current = '';
      setActive(current);
    };
    pick();
    window.addEventListener('scroll', pick, { passive: true });
    window.addEventListener('resize', pick);
    return () => {
      window.removeEventListener('scroll', pick);
      window.removeEventListener('resize', pick);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const link = nav?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    setPill(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
  }, [active]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`co-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="co-wrap">
        <div className="co-header-bar">
          <Link href="/" className="co-header-logo" aria-label="RYDO Digital Solutions Ltd, home">
            <Image src="/images/rydo-logo.png" alt="RYDO Digital Solutions Ltd" width={1251} height={647} priority />
          </Link>
          <nav ref={navRef} className="co-header-nav" aria-label="Main">
            <span
              className="co-header-pill"
              aria-hidden="true"
              style={pill ? { transform: `translateX(${pill.left}px)`, width: pill.width, opacity: 1 } : { opacity: 0 }}
            />
            {COMPANY_NAV.map((item) => (
              <a key={item.href} href={item.href} className={active === item.href.slice(1) ? 'is-active' : ''}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="co-header-actions">
            <Link href="/app" className="co-header-app">
              RYDO App <i className="fa-solid fa-arrow-right" />
            </Link>
            <a href="#contact" className="co-btn co-btn-orange co-btn-sm">
              Contact us
            </a>
          </div>
          <button
            className="co-header-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
      <div className="co-menu" hidden={!open}>
        <nav aria-label="Mobile">
          {COMPANY_NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <i className="fa-solid fa-arrow-right" />
            </a>
          ))}
          <Link href="/app" onClick={() => setOpen(false)}>
            RYDO App
            <i className="fa-solid fa-arrow-up-right-from-square" />
          </Link>
        </nav>
        <a href="#contact" className="co-btn co-btn-orange co-menu-cta" onClick={() => setOpen(false)}>
          Contact us
        </a>
      </div>
    </header>
  );
}
