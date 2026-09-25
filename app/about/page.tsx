import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "RYDO Digital Solutions Ltd is Port Harcourt's purpose-built motorcycle delivery platform, engineered for Nigerian roads, merchants, and communities.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="about-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: 56 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge badge-white">About RYDO</span>
              </div>
              <h1 className="about-hero-title">
                We deliver
                <br />
                <span style={{ color: 'var(--orange)' }}>trust.</span>
              </h1>
              <p className="about-hero-sub">
                RYDO Digital Solutions Ltd is Port Harcourt&apos;s purpose-built bike delivery
                platform — designed from the ground up for Nigerian roads, Nigerian merchants, and
                Nigerian communities.
              </p>
            </div>
            <div style={{ position: 'relative', aspectRatio: '1599 / 720', borderRadius: 20, overflow: 'hidden' }}>
              <Image
                src="/images/team-office.jpg"
                alt="The RYDO team"
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
          <div className="grid-2" style={{ gap: 80 }}>
            <div>
              <div className="section-eyebrow mb-8">
                <span className="badge badge-orange">Our Story</span>
              </div>
              <h2 className="heading section-title">
                Built in PH,
                <br />
                <span className="highlight">for PH.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 20 }}>
                Port Harcourt is Nigeria&apos;s industrial capital — a city of commerce, energy, and
                relentless movement. Yet for years, its merchants and residents had no reliable
                last-mile delivery option tailored to their streets, their schedules, or their
                scale.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 20 }}>
                RYDO Digital Solutions Ltd was founded to close that gap. We built technology that
                understands dimensional weight pricing, consolidated routing, and OTC delivery
                verification — tools that are standard in global logistics but missing from
                Nigerian bike platforms.
              </p>
              <p style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.8 }}>
                We started in Port Harcourt because we know it. We will expand because we built it
                right.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignContent: 'start' }}>
              <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(232,80,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 19,
                    color: 'var(--orange)',
                    marginBottom: 16,
                  }}
                >
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, color: 'var(--text)' }}>
                  13
                </div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 6 }}>Active delivery zones</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(232,80,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 19,
                    color: 'var(--orange)',
                    marginBottom: 16,
                  }}
                >
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, color: 'var(--text)' }}>
                  24h
                </div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 6 }}>Rider onboarding time</div>
              </div>
              <div style={{ background: '#fff', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(232,80,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 19,
                    color: 'var(--orange)',
                    marginBottom: 16,
                  }}
                >
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, color: 'var(--text)' }}>
                  100%
                </div>
                <div style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 6 }}>NDPA 2023 compliant</div>
              </div>
              <div style={{ background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: 26 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: 'rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 19,
                    color: '#fff',
                    marginBottom: 16,
                  }}
                >
                  <i className="fa-solid fa-headset"></i>
                </div>
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 1, color: '#fff' }}>
                  24/7
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6 }}>
                  Customer &amp; rider support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow mb-8">
              <span className="badge badge-orange">Leadership</span>
            </div>
            <h2 className="heading section-title">
              The team behind <span className="highlight">RYDO</span>
            </h2>
            <p className="section-sub mx-auto" style={{ marginBottom: 40 }}>
              Experienced leaders combining technology, logistics, economics, and cybersecurity to
              build Nigeria&apos;s most trusted delivery platform.
            </p>
          </div>
          <div style={{ maxWidth: 820, margin: '0 auto 56px' }}>
            <div style={{ position: 'relative', aspectRatio: '1080 / 822', borderRadius: 18, overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <Image
                src="/images/partnership-mot.jpg"
                alt="RYDO leadership sealing the official partnership with the Rivers State Ministry of Transport, 3rd September 2026"
                fill
                sizes="(max-width: 900px) 100vw, 820px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p style={{ fontSize: 13, color: 'var(--gray-500)', textAlign: 'center', marginTop: 12, lineHeight: 1.6 }}>
              Prosper Ikiriko (CEO) and Dr. Moses Owede Vincent (COO) sealing RYDO&apos;s official
              regulatory partnership with Dr. Vera Ndidi Sam-Dike, Permanent Secretary of the
              Rivers State Ministry of Transport — 3 September 2026.
            </p>
          </div>
          <div className="leadership-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, marginBottom: 48 }}>
            <div className="card" style={{ padding: 0, borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ height: 280, position: 'relative' }}>
                <Image
                  src="/images/team-prosper.jpg"
                  alt="Ikiriko Prosper Pepple"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg,transparent 45%,rgba(13,17,23,0.94) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 24,
                  }}
                >
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 19, color: '#fff', marginBottom: 6 }}>
                    Ikiriko Prosper Pepple
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    <span style={{ background: 'rgba(232,80,0,0.15)', border: '1px solid rgba(232,80,0,0.3)', borderRadius: 100, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: '#E86030' }}>
                      Founder &amp; CEO
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '26px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
                  <span style={{ background: 'rgba(232,80,0,0.03)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>
                    Cybersecurity Analyst
                  </span>
                  <span style={{ background: 'rgba(232,80,0,0.03)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>
                    CEH Certified
                  </span>
                  <span style={{ background: 'rgba(232,80,0,0.03)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>
                    MSc Supply Chain &amp; Logistics
                  </span>
                  <span style={{ background: 'rgba(232,80,0,0.03)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: 'var(--orange)' }}>
                    BSc Marketing
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  A Cybersecurity Analyst, procurement professional, and strategic business leader
                  currently serving as Manager/Cybersecurity Analyst at{' '}
                  <strong style={{ color: 'var(--gray-800)' }}>Hagion International Ltd</strong>. With
                  over seven years of experience, he combines expertise in information security,
                  supply chain management, and business development.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  Previously as <strong style={{ color: 'var(--gray-800)' }}>COO of Wastewise Inc Ltd</strong>,
                  he led operational excellence and forged key partnerships with RIWAMA and the
                  NDDC. At Hagion, he facilitated a strategic partnership with the Federal Ministry
                  of Communication and Digital Economy and NITDA for the 3MTT digital skills
                  programme.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8 }}>
                  Demonstrates a strong blend of cybersecurity acumen, public-sector engagement, and
                  leadership in driving digital transformation across Nigeria.
                </p>
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--gray-200)', display: 'flex', gap: 9 }}>
                  <a
                    href="mailto:rydosupport@gmail.com"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(232,80,0,0.03)', border: '1px solid rgba(232,80,0,0.03)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: 'var(--orange)', textDecoration: 'none' }}
                  >
                    <i className="fa-solid fa-envelope"></i> Contact
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(10,102,194,0.07)', border: '1px solid rgba(10,102,194,0.15)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#0A66C2', textDecoration: 'none' }}
                  >
                    in LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 0, borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ height: 280, position: 'relative' }}>
                <Image
                  src="/images/team-moses.jpg"
                  alt="Dr. Moses Owede Vincent"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg,transparent 45%,rgba(13,17,23,0.94) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 24,
                  }}
                >
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 19, color: '#fff', marginBottom: 6 }}>
                    Dr. Moses Owede Vincent
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    <span style={{ background: 'rgba(77,171,255,0.2)', border: '1px solid rgba(77,171,255,0.35)', borderRadius: 100, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: '#4DABFF' }}>
                      Chief Operating Officer
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '26px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
                  <span style={{ background: 'rgba(42,122,186,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#2A7ABA' }}>
                    PhD Int&apos;l Economics
                  </span>
                  <span style={{ background: 'rgba(42,122,186,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#2A7ABA' }}>
                    MSc Development Economics
                  </span>
                  <span style={{ background: 'rgba(42,122,186,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#2A7ABA' }}>
                    GIS &amp; Spatial Analysis
                  </span>
                  <span style={{ background: 'rgba(42,122,186,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#2A7ABA' }}>
                    23 Peer-Reviewed Articles
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  Brings over a decade of research, strategic advisory, and data-driven
                  decision-making to RYDO. Holds a{' '}
                  <strong style={{ color: 'var(--gray-800)' }}>PhD in International Economics &amp; Development Finance</strong>{' '}
                  from the University of Zululand and an MSc from the University of Port Harcourt.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  As a Senior Research Economist and Research Fellow, Dr. Vincent has authored{' '}
                  <strong style={{ color: 'var(--gray-800)' }}>23 peer-reviewed journal articles, two books</strong>,
                  and several chapters spanning econometrics, international economics, and spatial
                  economic analysis. Proficient in STATA, R, MATLAB, ArcGIS, and EViews.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8 }}>
                  Served as Business Development Consultant to Sisonero Nigeria Ltd, leading market
                  analysis, partnership development, and stakeholder engagement with regulators and
                  financial institutions — directly aligned with scaling RYDO&apos;s operations.
                </p>
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--gray-200)', display: 'flex', gap: 9 }}>
                  <a
                    href="mailto:rydosupport@gmail.com"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(42,122,186,0.07)', border: '1px solid rgba(42,122,186,0.15)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#2A7ABA', textDecoration: 'none' }}
                  >
                    <i className="fa-solid fa-envelope"></i> Contact
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(10,102,194,0.07)', border: '1px solid rgba(10,102,194,0.15)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#0A66C2', textDecoration: 'none' }}
                  >
                    in LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 0, borderRadius: 24, overflow: 'hidden' }}>
              <div style={{ height: 280, position: 'relative' }}>
                <Image
                  src="/images/team-nnaemeka.jpg"
                  alt="Nnaemeka Chimezie"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg,transparent 45%,rgba(13,17,23,0.94) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 24,
                  }}
                >
                  <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 19, color: '#fff', marginBottom: 6 }}>
                    Nnaemeka Chimezie
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                    <span style={{ background: 'rgba(0,168,90,0.18)', border: '1px solid rgba(0,168,90,0.35)', borderRadius: 100, padding: '3px 12px', fontSize: 11, fontWeight: 700, color: '#00C97A' }}>
                      Chief Technology Officer
                    </span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '26px 32px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 16 }}>
                  <span style={{ background: 'rgba(0,168,90,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#00A85A' }}>
                    6+ Years Engineering Leadership
                  </span>
                  <span style={{ background: 'rgba(0,168,90,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#00A85A' }}>
                    Platform Architecture
                  </span>
                  <span style={{ background: 'rgba(0,168,90,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#00A85A' }}>
                    React, Next.js &amp; React Native
                  </span>
                  <span style={{ background: 'rgba(0,168,90,0.08)', borderRadius: 7, padding: '3px 9px', fontSize: 11, fontWeight: 600, color: '#00A85A' }}>
                    B.Sc. Information Systems
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  As RYDO&apos;s <strong style={{ color: 'var(--gray-800)' }}>Chief Technology Officer</strong>,
                  Nnaemeka owns the platform end-to-end — the customer app, the rider app, live GPS
                  tracking infrastructure, and the MOT regulatory dashboard — bringing over six
                  years of front-end and mobile engineering experience to how RYDO is architected
                  and shipped.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8, marginBottom: 14 }}>
                  Before RYDO, he led front-end engineering across fintech, e-commerce, and
                  marketplace products at{' '}
                  <strong style={{ color: 'var(--gray-800)' }}>Zealock, Xnyder Tech, Grascope Industries, TSB-ePay, Haulway,</strong>{' '}
                  and <strong style={{ color: 'var(--gray-800)' }}>RSECNG</strong> — shipping production
                  systems in React, Next.js, React Native, and Expo, including a mobile app for the
                  fintech startup Passcoder.
                </p>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.8 }}>
                  Holds a{' '}
                  <strong style={{ color: 'var(--gray-800)' }}>B.Sc. in Information Systems from Middlesex University, London</strong>,
                  and brings that same product-engineering discipline to building RYDO into a
                  platform Port Harcourt can depend on.
                </p>
                <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid var(--gray-200)', display: 'flex', gap: 9, flexWrap: 'wrap' }}>
                  <a
                    href="mailto:nnaemekachimezie5@gmail.com"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,168,90,0.08)', border: '1px solid rgba(0,168,90,0.15)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#00A85A', textDecoration: 'none' }}
                  >
                    <i className="fa-solid fa-envelope"></i> Contact
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nnaemeka-chimezie-796a39220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(10,102,194,0.07)', border: '1px solid rgba(10,102,194,0.15)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#0A66C2', textDecoration: 'none' }}
                  >
                    in LinkedIn
                  </a>
                  <a
                    href="https://github.com/Nnaemekac"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(0,0,0,0.05)', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 9, padding: '7px 13px', fontSize: 12, fontWeight: 600, color: '#24292e', textDecoration: 'none' }}
                  >
                    <i className="fa-brands fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              background: 'linear-gradient(135deg,#0D1117,#1A2240)',
              borderRadius: 20,
              padding: '32px 40px',
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 20,
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 34, color: 'var(--orange)' }}>7+</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 5, lineHeight: 1.5 }}>
                Years cybersecurity &amp; logistics leadership
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 34, color: '#4DABFF' }}>23</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 5, lineHeight: 1.5 }}>
                Peer-reviewed economic publications
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 34, color: '#00E896' }}>PhD</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 5, lineHeight: 1.5 }}>
                International Economics &amp; Development Finance
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 900, fontSize: 34, color: '#FFB300' }}>CEH</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', marginTop: 5, lineHeight: 1.5 }}>
                Certified Ethical Hacker
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--gray-100)' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-eyebrow mb-8">
              <span className="badge badge-orange">Our Values</span>
            </div>
            <h2 className="heading section-title">
              What we <span className="highlight">stand for</span>
            </h2>
          </div>
          <div className="values-grid mt-24">
            <div className="value-card">
              <div className="value-num">01</div>
              <div className="value-title">Safety First</div>
              <div className="value-desc">
                Every RYDO rider is KYC-verified with government ID, vehicle photo, and
                driver&apos;s licence. No unverified rider ever handles your package.
              </div>
            </div>
            <div className="value-card">
              <div className="value-num">02</div>
              <div className="value-title">Radical Transparency</div>
              <div className="value-desc">
                Every price is calculated on-screen before you confirm. No surge fees without
                notice. No hidden charges. What you see is what you pay.
              </div>
            </div>
            <div className="value-card">
              <div className="value-num">03</div>
              <div className="value-title">Rider First</div>
              <div className="value-desc">
                Riders are not gig workers to exploit — they are partners to grow with. Our
                pricing model protects rider earnings on every delivery type.
              </div>
            </div>
            <div className="value-card">
              <div className="value-num">04</div>
              <div className="value-title">Local Intelligence</div>
              <div className="value-desc">
                We know Aba Road at 8am. We know Mile 1 on market days. Our routing and pricing
                reflect the real streets of Port Harcourt — not assumptions.
              </div>
            </div>
            <div className="value-card">
              <div className="value-num">05</div>
              <div className="value-title">Data Privacy</div>
              <div className="value-desc">
                NDPA 2023 compliant. Your data is encrypted in transit and at rest. We never sell
                personal data to third parties. Full policy at rydo.com.ng.
              </div>
            </div>
            <div className="value-card">
              <div className="value-num">06</div>
              <div className="value-title">Always Improving</div>
              <div className="value-desc">
                Box Fill Mode. DIM weight pricing. OTC verification. We build the tools that
                global logistics has and Nigerian bike platforms have ignored — until now.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
