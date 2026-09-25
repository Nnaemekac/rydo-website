import type { Metadata } from 'next';
import Image from 'next/image';
import PackageCtaButton from './PackageCtaButton';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Standard delivery, bulk and multi-drop orders, and freight with dimensional-weight pricing — RYDO has a delivery service for every need in Port Harcourt.',
};

export default function ServicesPage() {
  return (
    <div>
      <div className="services-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge badge-white">Our Services</span>
              </div>
              <h1
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(40px,5vw,72px)',
                  color: '#fff',
                  lineHeight: 1.05,
                  marginBottom: 16,
                  letterSpacing: '-2px',
                }}
              >
                Everything
                <br />
                <span style={{ color: 'var(--orange)' }}>delivered.</span>
              </h1>
              <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', maxWidth: 520, lineHeight: 1.7 }}>
                From single packages to multi-drop bulk routes — RYDO has a service for every
                delivery need in Port Harcourt.
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '1080 / 485', borderRadius: 20, overflow: 'hidden' }}>
              <Image
                src="/images/team-branded.jpg"
                alt="RYDO riders wearing official branded gear"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-detail-img" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
              <Image
                src="/images/poster-dispatch.jpg"
                alt="RYDO rider handing over a parcel — Standard Delivery"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="service-detail-content">
              <span className="badge badge-orange" style={{ marginBottom: 14, display: 'inline-flex' }}>
                Most Popular
              </span>
              <h2 className="heading service-detail-title">Standard Delivery</h2>
              <p className="service-detail-desc">
                One pickup, one drop-off. Ideal for documents, personal packages, market
                purchases, and everyday items. Rider assigned in seconds.
              </p>
              <ul className="service-feature-list">
                <li>Live GPS tracking from pickup to door</li>
                <li>OTC verification on delivery</li>
                <li>Call, message, or app-call your rider</li>
                <li>Estimated pickup in 15 minutes</li>
                <li>Pricing from ₦500 depending on zone and weight</li>
              </ul>
              <PackageCtaButton className="btn btn-primary" style={{ cursor: 'pointer' }}>
                Book Now →
              </PackageCtaButton>
            </div>
          </div>

          <div className="divider" style={{ margin: '56px 0' }}></div>

          <div className="service-detail-grid" style={{ direction: 'rtl' }}>
            <div className="service-detail-img" style={{ direction: 'ltr', padding: 0, overflow: 'hidden', position: 'relative' }}>
              <Image
                src="/images/poster-customer.jpg"
                alt="RYDO rider handing a package to a customer"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              />
            </div>
            <div className="service-detail-content" style={{ direction: 'ltr' }}>
              <span className="badge badge-navy" style={{ marginBottom: 14, display: 'inline-flex' }}>
                10% Discount
              </span>
              <h2 className="heading service-detail-title">Bulk &amp; Multi-Drop Orders</h2>
              <p className="service-detail-desc">
                Send to up to 10 locations in one booking. One rider, one trip, multiple
                recipients — optimised by RYDO&apos;s Box Fill Mode routing engine.
              </p>
              <ul className="service-feature-list">
                <li>Up to 10 drop-off locations per order</li>
                <li>10% discount on 3+ locations</li>
                <li>Consolidated routing for faster delivery</li>
                <li>OTC code for every recipient</li>
                <li>Perfect for merchants, wholesalers, and businesses</li>
              </ul>
              <PackageCtaButton className="btn btn-primary" style={{ cursor: 'pointer' }}>
                Book Bulk Order →
              </PackageCtaButton>
            </div>
          </div>

          <div className="divider" style={{ margin: '56px 0' }}></div>

          <div className="service-detail-grid">
            <div className="service-detail-img" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
              <Image
                src="/images/onboard-3-track.jpg"
                alt="RYDO app — track your freight delivery in real time"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
              />
            </div>
            <div className="service-detail-content">
              <span className="badge badge-orange" style={{ marginBottom: 14, display: 'inline-flex' }}>
                DIM Pricing
              </span>
              <h2 className="heading service-detail-title">Freight &amp; Oversized Delivery</h2>
              <p className="service-detail-desc">
                Our DIM weight calculator handles bulky items fairly. Enter dimensions and actual
                weight — you&apos;re always billed on whichever is the right measure, never
                overcharged.
              </p>
              <ul className="service-feature-list">
                <li>Industry-standard dimensional weight calculation</li>
                <li>Billable = max(actual weight, L×W×H÷139)</li>
                <li>Automatic bulky surcharge protection for riders</li>
                <li>Real-time quote before you confirm</li>
                <li>Ideal for spare parts, electronics, and appliances</li>
              </ul>
              <PackageCtaButton className="btn btn-primary" style={{ cursor: 'pointer' }}>
                Get a Quote →
              </PackageCtaButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow mb-8">
              <span className="badge badge-orange">Pricing</span>
            </div>
            <h2 className="heading section-title">
              Transparent <span className="highlight">pricing</span>
            </h2>
            <p className="section-sub mx-auto">
              No hidden fees. No surprises. Every quote is shown before you confirm.
            </p>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-name">Standard</div>
              <div className="pricing-price">
                <sup>₦</sup>500
              </div>
              <div className="pricing-period">base rate · same zone · under 1kg</div>
              <ul className="pricing-features">
                <li>
                  <div className="check">✓</div>Single pickup &amp; drop-off
                </li>
                <li>
                  <div className="check">✓</div>Live GPS tracking
                </li>
                <li>
                  <div className="check">✓</div>OTC delivery confirmation
                </li>
                <li>
                  <div className="check">✓</div>Rider contact (call/SMS)
                </li>
                <li>
                  <div className="cross">–</div>Multi-drop routing
                </li>
                <li>
                  <div className="cross">–</div>Bulk discount
                </li>
              </ul>
              <PackageCtaButton
                className="btn btn-outline"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
              >
                Book Standard →
              </PackageCtaButton>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">Most Popular</div>
              <div className="pricing-name">Bulk</div>
              <div className="pricing-price">
                <sup>₦</sup>450
              </div>
              <div className="pricing-period">per location · 3+ drops · 10% off</div>
              <ul className="pricing-features">
                <li>
                  <div className="check">✓</div>Up to 10 drop-off locations
                </li>
                <li>
                  <div className="check">✓</div>Box Fill Mode routing
                </li>
                <li>
                  <div className="check">✓</div>10% bulk discount (3+ locations)
                </li>
                <li>
                  <div className="check">✓</div>OTC code per recipient
                </li>
                <li>
                  <div className="check">✓</div>Live tracking per drop
                </li>
                <li>
                  <div className="check">✓</div>Business invoice available
                </li>
              </ul>
              <PackageCtaButton
                className="btn btn-primary"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
              >
                Book Bulk →
              </PackageCtaButton>
            </div>
            <div className="pricing-card">
              <div className="pricing-name">Freight</div>
              <div className="pricing-price" style={{ fontSize: 30 }}>
                Custom
              </div>
              <div className="pricing-period">calculated by DIM weight · zone 1–8</div>
              <ul className="pricing-features">
                <li>
                  <div className="check">✓</div>DIM weight calculation
                </li>
                <li>
                  <div className="check">✓</div>Oversized / bulky surcharge
                </li>
                <li>
                  <div className="check">✓</div>Real-time quote in app
                </li>
                <li>
                  <div className="check">✓</div>Rider payout protection
                </li>
                <li>
                  <div className="check">✓</div>All zones supported
                </li>
                <li>
                  <div className="check">✓</div>Priority dispatch
                </li>
              </ul>
              <PackageCtaButton
                className="btn btn-dark"
                style={{ width: '100%', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
              >
                Get Quote →
              </PackageCtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
