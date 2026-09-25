import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <Image src="/images/logo.jpg" alt="RYDO" width={48} height={48} />
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.35)',
                marginBottom: 6,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              RYDO Digital Solutions Ltd
            </div>
            <p className="footer-desc">
              Fast. Safe. Reliable.
              <br />
              Nigeria&apos;s purpose-built bike delivery platform for Port Harcourt and Obio-Akpor,
              Rivers State.
            </p>
            <div className="footer-social">
              <a className="social-btn" href="https://instagram.com" target="_blank" title="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="social-btn" href="https://x.com" target="_blank" title="Twitter/X">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="social-btn" href="https://facebook.com" target="_blank" title="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="social-btn" href="https://wa.me/2348081259375" target="_blank" title="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              <Link className="footer-link" href="/services">Standard Delivery</Link>
              <Link className="footer-link" href="/services">Bulk &amp; Multi-Drop</Link>
              <Link className="footer-link" href="/services">Freight &amp; Oversized</Link>
              <Link className="footer-link" href="/login">RYDO Wallet</Link>
              <Link className="footer-link" href="/contact">Business Accounts</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <div className="footer-links">
              <Link className="footer-link" href="/about">About RYDO</Link>
              <Link className="footer-link" href="/riders">Ride with RYDO</Link>
              <Link className="footer-link" href="/contact">Contact</Link>
              <Link className="footer-link" href="/">Coverage Zones</Link>
              <a className="footer-link" href="mailto:rydosupport@gmail.com">Careers</a>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <div className="footer-links">
              <Link className="footer-link" href="/privacy-policy">Privacy Policy</Link>
              <Link className="footer-link" href="/terms">Terms of Service</Link>
              <Link className="footer-link" href="/cookies">Cookie Policy</Link>
              <Link className="footer-link" href="/refund-policy">Refund Policy</Link>
              <Link className="footer-link" href="/privacy-policy#pp-12">Data Request</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 RYDO Digital Solutions Ltd. All rights reserved. Port Harcourt, Rivers State, Nigeria.
          </div>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
            <Link href="/ops">Staff Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
