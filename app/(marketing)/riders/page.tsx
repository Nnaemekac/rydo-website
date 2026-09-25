import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EarningsCalculator from '@/components/EarningsCalculator';
import FeatureCardReveal from '@/components/FeatureCardReveal';
import RiderCtaButton from './RiderCtaButton';

export const metadata: Metadata = {
  title: 'Ride with RYDO',
  description:
    "Earn more per trip, get paid instantly, and stay protected from unfair deductions. Join Nigeria's most rider-friendly delivery platform in Port Harcourt.",
};

export default function RidersPage() {
  return (
    <div>
      <FeatureCardReveal />
      <div className="riders-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: 64 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                  <i className="fa-solid fa-motorcycle"></i> Ride with RYDO
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(40px,5vw,68px)',
                  color: '#fff',
                  lineHeight: 1.05,
                  marginBottom: 16,
                  letterSpacing: '-2px',
                }}
              >
                Your bike.
                <br />
                Your income.
                <br />
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>Your hours.</span>
              </h1>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 32 }}>
                RYDO riders in Port Harcourt earn more per trip, get paid instantly, and are
                protected from unfair deductions. Join Nigeria&apos;s most rider-friendly delivery
                platform.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
                <RiderCtaButton className="btn btn-white btn-lg">Apply Now →</RiderCtaButton>
                <Link
                  href="/#how"
                  className="btn btn-lg"
                  style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
                >
                  How It Works
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Image
                  src="/images/team-branded.jpg"
                  alt="Real RYDO riders"
                  width={52}
                  height={52}
                  style={{
                    borderRadius: '50%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    border: '2px solid rgba(255,255,255,0.5)',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                  Real RYDO riders, already earning across Port Harcourt.
                </span>
              </div>
            </div>
            <EarningsCalculator />
          </div>
        </div>
      </div>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow mb-8">
              <span className="badge badge-orange">Why RYDO</span>
            </div>
            <h2 className="heading section-title">
              Why riders <span className="highlight">choose RYDO</span>
            </h2>
          </div>
          <div className="grid-3 mt-24">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="feature-title">Highest Earnings in PH</div>
              <div className="feature-desc">
                Our Box Fill Mode lets you collect from multiple senders and deliver to multiple
                recipients in one trip — maximising your income per hour on the road.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div className="feature-title">Instant Payouts</div>
              <div className="feature-desc">
                Every confirmed delivery triggers an instant credit to your RYDO Rider Wallet.
                Withdraw to your bank account same-day, any time.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="feature-title">Rider Score Protection</div>
              <div className="feature-desc">
                Our Rider Score system rewards consistency and protects you from unfair ratings.
                Top riders get priority dispatch and bonus opportunities.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-chart-column"></i>
              </div>
              <div className="feature-title">Real Earnings Visibility</div>
              <div className="feature-desc">
                See a breakdown of every delivery: base rate, DIM surcharge, bulky bonus, and
                platform commission. No hidden deductions, ever.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <div className="feature-title">Your Own Schedule</div>
              <div className="feature-desc">
                Go online and offline whenever you want. No minimum hours. No penalty for taking a
                break. RYDO works around your life, not the other way around.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="feature-title">Rider Support 24/7</div>
              <div className="feature-desc">
                Dedicated rider support line available around the clock. Disputes are resolved
                fairly and quickly — always with the rider&apos;s perspective considered.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow mb-8">
              <span className="badge badge-orange">Requirements</span>
            </div>
            <h2 className="heading section-title">
              What you <span className="highlight">need to join</span>
            </h2>
          </div>
          <div className="grid-4 mt-24">
            <div className="card text-center">
              <div style={{ fontSize: 40, marginBottom: 14 }}>
                <i className="fa-solid fa-motorcycle"></i>
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                A Motorcycle
              </div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                Any roadworthy motorcycle in good condition. We verify registration and condition
                during KYC.
              </div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: 40, marginBottom: 14 }}>
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                Valid Driver&apos;s Licence
              </div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                Upload front and back clearly. We use Stripe Identity for secure, fast
                verification.
              </div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: 40, marginBottom: 14 }}>
                <i className="fa-solid fa-mobile-screen-button"></i>
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                Android Smartphone
              </div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                Any Android phone running OS 8.0 or higher. iOS coming soon. Must have mobile
                data.
              </div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: 40, marginBottom: 14 }}>
                <i className="fa-solid fa-sim-card"></i>
              </div>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                Nigerian Phone Number
              </div>
              <div style={{ fontSize: 13, color: 'var(--gray-500)' }}>
                MTN, Airtel, Glo, or 9mobile. Used as your primary login and OTP delivery channel.
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <RiderCtaButton className="btn btn-primary btn-lg">
              <i className="fa-solid fa-motorcycle"></i> Apply to Ride Now
            </RiderCtaButton>
            <div style={{ marginTop: 12, fontSize: 13, color: 'var(--gray-500)' }}>
              Takes 5 minutes · KYC verified in 24 hours · Earn from Day 1
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
