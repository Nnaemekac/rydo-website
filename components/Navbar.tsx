'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/components/AuthProvider';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/riders', label: 'Ride with RYDO' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  function scrollToBottom() {
    if (pathname === '/') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      router.push('/');
      setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }), 300);
    }
  }
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const greetingName =
    (user?.user_metadata?.first_name as string | undefined) || user?.email?.split('@')[0];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`} id="navbar">
        <Link href="/" className="navbar-logo">
          <div className="logo-icon">
            <Image src="/images/logo.jpg" alt="RYDO" width={48} height={48} />
          </div>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link${pathname === link.href ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/mot"
            className="nav-link nav-link-pill"
            style={{
              border: '1.5px solid rgba(255,255,255,0.18)',
              borderRadius: 8,
              padding: '6px 14px',
              fontSize: 13,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <i className="fa-solid fa-building-columns"></i> MOT Portal
          </Link>
          <Link
            href="/ops"
            className="nav-link nav-link-pill"
            style={{
              border: '1.5px solid rgba(255,255,255,0.18)',
              borderRadius: 8,
              padding: '6px 14px',
              fontSize: 13,
              color: 'rgba(255,255,255,0.85)',
            }}
          >
            <i className="fa-solid fa-toolbox"></i> Staff Login
          </Link>
        </div>
        <div className="nav-actions">
          {!user && (
            <div className="nav-actions-group">
              <Link href="/login" className="nav-btn nav-btn-outline">
                Log In
              </Link>
              <button className="nav-btn nav-btn-primary" onClick={scrollToBottom}>
                Get Started
              </button>
            </div>
          )}
          {user && (
            <div className="nav-actions-group">
              <span className="nav-user-greeting">
                Hi, <span>{greetingName}</span>
              </span>
              <Link href="/orders" className="nav-btn nav-btn-outline">
                <i className="fa-solid fa-box"></i> My Orders
              </Link>
              <button className="nav-btn nav-btn-primary" onClick={signOut}>
                Log Out
              </button>
            </div>
          )}
        </div>
        <button
          className={`mobile-menu-btn${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div
        className={`mobile-backdrop${menuOpen ? ' show' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>
    </>
  );
}
