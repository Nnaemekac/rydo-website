'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '@/components/modals/ModalProvider';
import { trackEvent } from '@/components/PostHogProvider';
import { ANALYTICS_EVENTS } from '@/lib/posthog';
import { MOT_ZONES } from '@/lib/constants';
import ZonesMap from '@/components/ZonesMap';
import HowItWorksTimeline from '@/components/HowItWorksTimeline';
import FaqAccordion from '@/components/FaqAccordion';
import FeatureCardReveal from '@/components/FeatureCardReveal';

const FAQ_ITEMS = [
  {
    question: 'How much does a delivery cost?',
    answer:
      'Pricing is based on dimensional weight (L×W×H÷139), actual weight, and your delivery zone (1–8). The billable weight is whichever is greater — actual vs DIM. Use our Pricing Calculator in the app for an instant quote before you order.',
  },
  {
    question: 'What is an OTC code and how does it work?',
    answer:
      "A One-Time Code (OTC) is a 4–6 digit number sent to your recipient's phone when the rider is en route. The rider must receive this code from the recipient to confirm delivery. This prevents wrong handoffs and package theft.",
  },
  {
    question: 'What areas does RYDO cover?',
    answer:
      "RYDO currently covers 13 zones across Port Harcourt and Obio-Akpor: Aba Road, GRA Phase 1 & 2, Trans-Amadi, Ikwerre Road, Woji, Rumuola, Mile 1, Mile 3, D-Line, Peter Odili Road, Rumuigbo, Ozuoba, and Obio-Akpor. We're expanding monthly.",
  },
  {
    question: 'What is Bulk Order / Box Fill Mode?',
    answer:
      'Bulk Order lets you send to up to 10 drop-off locations in one booking — with a 10% discount on 3+ locations. Box Fill Mode is our exclusive routing technology that lets one rider collect from multiple merchants and deliver to multiple recipients on one optimised trip.',
  },
  {
    question: 'How long does delivery take?',
    answer:
      'Average rider pickup is 15 minutes. Most deliveries within the same zone complete in 25–45 minutes. Cross-zone deliveries typically take 45–90 minutes depending on traffic conditions in Port Harcourt.',
  },
  {
    question: 'How do I become a RYDO rider?',
    answer:
      "Apply on our Riders page — you'll need an account, your Driver's Licence, NIN, and a clear selfie for verification. Our onboarding team reviews applications and reaches out within 24 hours.",
  },
];

export default function HomeContent() {
  const { openPackage } = useModal();

  function handleHeroSendPackage() {
    trackEvent(ANALYTICS_EVENTS.SEND_PACKAGE_CTA_CLICKED);
    openPackage();
  }

  return (
    <div id="home-page" className="page active">
      <FeatureCardReveal />
      <section className="hero" id="home">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-line hero-line-1"></div>
          <div className="hero-line hero-line-2"></div>
        </div>
        <div className="container">
          <div className="hero-inner-c">
            <div className="hero-eyebrow">
              <span className="badge badge-white">
                <i className="fa-solid fa-location-dot"></i> Port Harcourt & Obio-Akpor
              </span>
            </div>
            <h1 className="hero-title-c">
              Nigeria&apos;s <span className="accent">fastest</span>
              <br />
              bike delivery.
            </h1>
            <p className="hero-sub-c">
              RYDO connects you with verified motorcycle riders for instant, trackable deliveries across Port
              Harcourt. Fast, safe, and always reliable.
            </p>
            <div className="hero-ctas-c">
              <button
                type="button"
                onClick={handleHeroSendPackage}
                className="btn btn-primary btn-lg"
                style={{ cursor: 'pointer' }}
              >
                <i className="fa-solid fa-box"></i> Send a Package
              </button>
              <Link href="/riders" className="btn btn-outline btn-lg">
                <i className="fa-solid fa-motorcycle"></i> Become a Rider
              </Link>
            </div>
            <div className="hero-stats-c">
              <div className="stat-item">
                <div className="stat-num" style={{ color: '#E05500' }}>
                  15<span>min</span>
                </div>
                <div className="stat-label">Avg. Pickup Time</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" style={{ color: '#E05500' }}>
                  13<span>+</span>
                </div>
                <div className="stat-label">Zones Covered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" style={{ color: '#E05500' }}>
                  4.8<span>★</span>
                </div>
                <div className="stat-label">Rider Rating</div>
              </div>
            </div>
          </div>

          <div className="hero-showcase">
            <div className="hero-phone-stack">
              <div className="hero-phone-glow"></div>
              <Image
                src="/images/onboard-1-welcome.jpg"
                alt="RYDO app — Welcome screen"
                width={500}
                height={911}
                className="hero-phone hero-phone-side hero-phone-left"
              />
              <Image
                src="/images/onboard-4-getstarted.jpg"
                alt="RYDO app — Track your delivery live"
                width={497}
                height={900}
                className="hero-phone hero-phone-main"
                priority
              />
              <Image
                src="/images/onboard-2-order.jpg"
                alt="RYDO app — Order in minutes"
                width={498}
                height={910}
                className="hero-phone hero-phone-side hero-phone-right"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container">
          <div className="trust-items">
            <div className="trust-item">
              <span>
                <i className="fa-solid fa-lock"></i>
              </span>
              <span>Verified KYC Riders</span>
            </div>
            <div className="trust-item">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span>Real-Time GPS Tracking</span>
            </div>
            <div className="trust-item">
              <span>
                <i className="fa-solid fa-credit-card"></i>
              </span>
              <span>Secure Payments</span>
            </div>
            <div className="trust-item">
              <span>
                <i className="fa-solid fa-key"></i>
              </span>
              <span>OTC Delivery Confirmation</span>
            </div>
            <div className="trust-item">
              <span>
                <i className="fa-solid fa-headset"></i>
              </span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section how-section" id="how">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow">
              <span className="badge badge-orange">How it works</span>
            </div>
            <h2 className="heading section-title">
              Delivery in <span className="highlight">4 simple steps</span>
            </h2>
            <p className="section-sub mx-auto">From tap to doorstep in under 30 minutes across Port Harcourt.</p>
          </div>

          <HowItWorksTimeline />
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="flex-between" style={{ gap: 32, flexWrap: 'wrap', marginBottom: 56 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge badge-orange">Features</span>
              </div>
              <h2 className="heading section-title mb-0">
                Built different.
                <br />
                <span className="highlight">Built for Port Harcourt.</span>
              </h2>
            </div>
            <p className="section-sub" style={{ maxWidth: 360 }}>
              Every feature was built around the real logistics challenges of Rivers State commerce.
            </p>
          </div>
          <div className="features-bento">
            <div className="feature-card featured">
              <div className="feature-card-visual">
                <svg viewBox="0 0 320 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <g stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" fill="none">
                    <path d="M22,20 Q100,20 154,58" />
                    <path d="M22,65 L154,65" />
                    <path d="M22,110 Q100,110 154,72" />
                  </g>
                  <g stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 6" fill="none">
                    <path d="M166,65 Q220,25 298,20" />
                    <path d="M166,65 L298,65" />
                    <path d="M166,65 Q220,105 298,110" />
                  </g>
                  <circle cx="22" cy="20" r="5" fill="rgba(255,255,255,0.35)" />
                  <circle cx="22" cy="65" r="5" fill="rgba(255,255,255,0.35)" />
                  <circle cx="22" cy="110" r="5" fill="rgba(255,255,255,0.35)" />
                  <circle cx="298" cy="20" r="5" fill="var(--orange)" />
                  <circle cx="298" cy="65" r="5" fill="var(--orange)" />
                  <circle cx="298" cy="110" r="5" fill="var(--orange)" />
                  <circle cx="160" cy="65" r="18" fill="var(--orange)" />
                  <text
                    x="160"
                    y="70"
                    textAnchor="middle"
                    fontFamily="'Font Awesome 6 Free'"
                    fontWeight="900"
                    fontSize="14"
                    fill="#fff"
                  >
                    {''}
                  </text>
                </svg>
              </div>
              <div className="feature-badge">Exclusive to RYDO</div>
              <div className="feature-title">Box Fill Mode</div>
              <div className="feature-desc">
                One rider collects from multiple merchants and delivers to multiple recipients on a single optimised
                route — cutting cost and time for everyone on it.
              </div>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-weight-hanging feature-icon-ghost"></i>
              <div className="feature-icon">
                <i className="fa-solid fa-weight-hanging"></i>
              </div>
              <div className="feature-title">DIM Weight Pricing</div>
              <div className="feature-desc">
                Industry-standard dimensional weight calculator ensures fair pricing for bulky packages. No
                surprises, no overcharges.
              </div>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-key feature-icon-ghost"></i>
              <div className="feature-icon">
                <i className="fa-solid fa-key"></i>
              </div>
              <div className="feature-title">OTC Verification</div>
              <div className="feature-desc">
                One-Time Code sent to the recipient. Rider must receive it to confirm delivery. Eliminates fraud and
                wrong handoffs.
              </div>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-tower-broadcast feature-icon-ghost"></i>
              <div className="feature-icon">
                <i className="fa-solid fa-tower-broadcast"></i>
              </div>
              <div className="feature-title">Live GPS Tracking</div>
              <div className="feature-desc">
                Watch every move from pickup to doorstep. Share tracking links with recipients via WhatsApp or SMS.
              </div>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-sack-dollar feature-icon-ghost"></i>
              <div className="feature-icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="feature-title">RYDO Wallet</div>
              <div className="feature-desc">
                Free digital wallet with ₦50 cashback every 5th delivery. Top up via bank transfer, card, or USSD.
              </div>
            </div>
            <div className="feature-card">
              <i className="fa-solid fa-clipboard-list feature-icon-ghost"></i>
              <div className="feature-icon">
                <i className="fa-solid fa-clipboard-list"></i>
              </div>
              <div className="feature-title">Bulk Orders</div>
              <div className="feature-desc">
                Send to up to 10 drop-off locations in one order. 10% discount on 3+ locations. Perfect for merchants
                and businesses.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section section-sm">
        <div className="container text-center" style={{ paddingBottom: 40 }}>
          <div className="section-eyebrow">
            <span className="badge badge-white">Who is RYDO for?</span>
          </div>
          <h2 className="heading section-title text-white">
            For senders. <span className="highlight">For riders.</span>
          </h2>
        </div>
        <div className="audience-grid">
          <div className="audience-panel audience-panel-customer">
            <div className="audience-panel-body" style={{ paddingTop: 56 }}>
              <div className="audience-tag">
                <i className="fa-solid fa-box"></i> Customers
              </div>
              <div className="audience-title">
                Send anything,
                <br />
                anywhere in PH
              </div>
              <div className="audience-sub">
                Documents, packages, market purchases, food, medicine — if it fits on a bike, RYDO delivers it in
                minutes.
              </div>
              <ul className="audience-list">
                <li>Real-time GPS tracking on every delivery</li>
                <li>OTC verification for safe handoff</li>
                <li>Call, message, or app-call your rider</li>
                <li>Cashless payments + RYDO Wallet</li>
                <li>Bulk orders for merchants & businesses</li>
              </ul>
              <button
                type="button"
                onClick={() => openPackage()}
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
              >
                Start Sending →
              </button>
            </div>
          </div>
          <div className="audience-panel audience-panel-rider">
            <Image
              src="/images/team-branded.jpg"
              alt="RYDO riders wearing official branded gear"
              width={1080}
              height={485}
              className="audience-panel-photo"
            />
            <div className="audience-panel-body">
              <div className="audience-tag">
                <i className="fa-solid fa-motorcycle"></i> Riders
              </div>
              <div className="audience-title">
                Earn more.
                <br />
                Ride your way.
              </div>
              <div className="audience-sub">
                Set your own hours, keep more of every fare, and get paid instantly. RYDO riders in Port Harcourt
                earn up to ₦80,000/month.
              </div>
              <ul className="audience-list">
                <li>Up to ₦80,000 monthly earnings</li>
                <li>Instant payout after each delivery</li>
                <li>Box Fill Mode boosts earnings per trip</li>
                <li>Rider Score protects your income</li>
                <li>Full KYC support and onboarding</li>
              </ul>
              <Link href="/riders" className="btn btn-white">
                Join as Rider →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section zones-section">
        <div className="container">
          <div className="flex-between" style={{ flexWrap: 'wrap', gap: 24, marginBottom: 0 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge badge-orange">Coverage</span>
              </div>
              <h2 className="heading section-title mb-0">
                13 zones.
                <br />
                <span className="highlight">Every street in PH.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="badge badge-success">
                <span className="zone-dot" style={{ display: 'inline-block', marginRight: 2 }}></span> All zones
                active
              </span>
              <Link href="/contact" className="btn btn-outline btn-sm">
                View full coverage →
              </Link>
            </div>
          </div>
          <div className="zones-map">
            <div className="zones-visual">
              <ZonesMap />
              <div className="zones-visual-stat">
                <div className="zones-visual-stat-num">
                  13<span>+</span>
                </div>
                <div className="zones-visual-stat-label">Zones across Port Harcourt & Obio-Akpor</div>
              </div>
            </div>
            <div className="zones-list-wrap">
              <div
                style={{
                  marginBottom: 24,
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 16,
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-poppins),sans-serif',
                      fontWeight: 800,
                      fontSize: 20,
                      color: '#fff',
                      marginBottom: 6,
                    }}
                  >
                    Port Harcourt & Obio-Akpor
                  </div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)' }}>
                    Rivers State, Nigeria · Expanding to new areas monthly
                  </div>
                </div>
              </div>
              <div className="zones-grid">
                {MOT_ZONES.map((zone) => (
                  <div className="zone-chip" key={zone}>
                    <div className="zone-chip-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <div className="zone-name">{zone}</div>
                      <div className="zone-status">
                        <div className="zone-dot"></div>
                        Active
                      </div>
                    </div>
                  </div>
                ))}
                <div className="zone-chip" style={{ opacity: 0.55 }}>
                  <div className="zone-chip-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <div className="zone-name">Eleme</div>
                    <div className="zone-status">
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#FFB300' }}></div>
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow">
              <span className="badge badge-white">Testimonials</span>
            </div>
            <h2 className="heading section-title text-white">
              Port Harcourt <span className="highlight">loves RYDO</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;I use RYDO every day to send documents from my office in Trans-Amadi to clients in GRA. The OTC
                confirmation means I&apos;m never worried about wrong delivery.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div>
                  <div className="author-name">Chioma Nwachukwu</div>
                  <div className="author-role">Accountant · GRA Phase 2</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card" style={{ borderColor: 'rgba(232,80,0,0.03)' }}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;As a fabric seller at Mile 1, I use Bulk Order to send to 6 customers at once. RYDO saves me
                hours every day. The 10% discount is real money.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div>
                  <div className="author-name">Emeka Okorie</div>
                  <div className="author-role">Fabric Merchant · Mile 1</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">
                &quot;I earn ₦65,000 monthly riding with RYDO. The Box Fill Mode means I do more trips per hour than
                any other platform. Best decision I made.&quot;
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <i className="fa-solid fa-motorcycle"></i>
                </div>
                <div>
                  <div className="author-name">Chinedu Okafor</div>
                  <div className="author-role">RYDO Rider · Rumuokwuta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="rider-cta">
        <div className="container">
          <div className="rider-cta-inner">
            <div className="rider-cta-text">
              <h2 className="rider-cta-title">Ready to earn with RYDO?</h2>
              <p className="rider-cta-sub">
                Join hundreds of riders making a living across Port Harcourt. KYC-verified, fairly paid, and fully
                supported.
              </p>
              <div className="rider-perks">
                <div className="rider-perk">Earn up to ₦80,000 per month</div>
                <div className="rider-perk">Instant payout after every delivery</div>
                <div className="rider-perk">Full onboarding support in PH</div>
              </div>
            </div>
            <div className="rider-cta-actions">
              <Link href="/riders" className="btn btn-white btn-lg">
                <i className="fa-solid fa-motorcycle"></i> Apply Now
              </Link>
              <Link href="/contact" className="btn btn-dark btn-lg">
                Talk to us first
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="section faq-section">
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow">
              <span className="badge badge-orange">FAQ</span>
            </div>
            <h2 className="heading section-title">
              Common <span className="highlight">questions</span>
            </h2>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      <section className="section download-section">
        <div className="container">
          <div className="download-inner">
            <div className="download-text">
              <div className="section-eyebrow mb-8">
                <span className="badge badge-orange">Get the App</span>
              </div>
              <h2 className="heading download-title">
                RYDO in your
                <br />
                <span className="highlight">pocket.</span>
              </h2>
              <p className="download-sub">
                Send packages, track deliveries live, and pay in-app with the RYDO app — launching soon on iOS
                and Android.
              </p>
              <div className="download-btns">
                <span className="store-btn" style={{ opacity: 0.6, cursor: 'default', pointerEvents: 'none' }}>
                  <div className="store-btn-icon">
                    <i className="fa-brands fa-apple"></i>
                  </div>
                  <div className="store-btn-text">
                    <div className="store-btn-label">Coming soon to the</div>
                    <div className="store-btn-name">App Store</div>
                  </div>
                </span>
                <span className="store-btn" style={{ opacity: 0.6, cursor: 'default', pointerEvents: 'none' }}>
                  <div className="store-btn-icon">
                    <i className="fa-brands fa-google-play"></i>
                  </div>
                  <div className="store-btn-text">
                    <div className="store-btn-label">Coming soon on</div>
                    <div className="store-btn-name">Google Play</div>
                  </div>
                </span>
              </div>
            </div>
            <div className="download-visual" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <Image
                src="/images/poster-billboard.jpg"
                alt="RYDO billboard campaign, Port Harcourt"
                width={1280}
                height={853}
                className="download-billboard-img"
                style={{
                  borderRadius: 20,
                  border: '5px solid #0D1117',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.35)',
                  transform: 'rotate(-8deg)',
                  display: 'block',
                }}
              />
              <div className="app-shots">
                <Image
                  src="/images/onboard-1-welcome.jpg"
                  alt="RYDO app — Welcome screen"
                  width={500}
                  height={911}
                  className="app-shot app-shot-1"
                />
                <Image
                  src="/images/onboard-2-order.jpg"
                  alt="RYDO app — Order in minutes"
                  width={498}
                  height={910}
                  className="app-shot app-shot-2"
                />
                <Image
                  src="/images/onboard-4-getstarted.jpg"
                  alt="RYDO app — Get started screen"
                  width={497}
                  height={900}
                  className="app-shot app-shot-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
