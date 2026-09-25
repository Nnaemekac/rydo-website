import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | RYDO',
  description:
    'Get in touch with RYDO for deliveries, partnerships, rider enquiries, or general questions. Response time under 2 hours on business days.',
};

export default function ContactPage() {
  return (
    <div>
      <div className="about-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow mb-8">
            <span className="badge badge-white">Contact Us</span>
          </div>
          <h1 className="about-hero-title">
            Talk to <span style={{ color: 'var(--orange)' }}>RYDO.</span>
          </h1>
          <p className="about-hero-sub">
            For deliveries, partnerships, rider enquiries, or general questions — we&apos;re here.
            Response time: under 2 hours on business days.
          </p>
        </div>
      </div>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">
                    <a href="tel:+2348081259375">+234 808 125 9375</a>
                  </div>
                  <div className="contact-value" style={{ fontSize: 12, marginTop: 3 }}>
                    Available 24/7 for active deliveries
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="contact-label">Email Support</div>
                  <div className="contact-value">
                    <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
                  </div>
                  <div className="contact-value" style={{ fontSize: 12, marginTop: 3 }}>
                    General enquiries &amp; order issues
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <div>
                  <div className="contact-label">Business &amp; Partnerships</div>
                  <div className="contact-value">
                    <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
                  </div>
                  <div className="contact-value" style={{ fontSize: 12, marginTop: 3 }}>
                    Merchant accounts, B2B contracts, bulk deals
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <div>
                  <div className="contact-label">Privacy &amp; Data (DPO)</div>
                  <div className="contact-value">
                    <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
                  </div>
                  <div className="contact-value" style={{ fontSize: 12, marginTop: 3 }}>
                    NDPA 2023 requests &amp; data concerns
                  </div>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="contact-label">Head Office</div>
                  <div className="contact-value">Port Harcourt, Rivers State, Nigeria</div>
                  <div className="contact-value" style={{ fontSize: 12, marginTop: 3 }}>
                    RYDO Digital Solutions Ltd
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
