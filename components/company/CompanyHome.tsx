import Image from 'next/image';
import Link from 'next/link';
import CompanyHeader from '@/components/company/CompanyHeader';
import HeroSlider from '@/components/company/HeroSlider';
import WorkList from '@/components/company/WorkList';
import Reveal from '@/components/company/Reveal';
import {
  BENEFITS,
  CLIENTS,
  COMPANY,
  COMPANY_NAV,
  PLANS,
  SECTORS,
  SERVICES,
  STEPS,
  SUITE,
  TEAM,
  WORK,
} from '@/lib/company';

function SectionHead({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="co-head">
      <span className="co-kicker">{kicker}</span>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}

export default function CompanyHome() {
  return (
    <>
      <CompanyHeader />
      <main>
        <HeroSlider />
        <div className="co-proof">
          <div className="co-wrap co-proof-row">
            <span>
              <strong>3</strong> live products
            </span>
            <span>
              <strong>6</strong> service areas
            </span>
            <span>
              <strong>7</strong> sectors served
            </span>
            <span>
              <strong>In-house</strong> from idea to support
            </span>
          </div>
        </div>

        <section id="work" className="co-section">
          <div className="co-wrap">
            <div className="co-work-head">
              <SectionHead
                kicker="Our work"
                title="Products built by RYDO"
                sub="Live systems designed, developed and supported by our team. The same people build for our clients."
              />
              <div className="co-work-count">
                <strong>03</strong>
                <span>
                  live products
                  <br />
                  in daily use
                </span>
              </div>
            </div>
            <WorkList />
          </div>
        </section>

        <section id="services" className="co-section co-section-tint">
          <div className="co-wrap">
            <SectionHead
              kicker="Services"
              title="What we can build for you"
              sub="Six service areas, one team. Pick one or combine them."
            />
            <ol className="sv">
              {SERVICES.map((sv, i) => (
                <li key={sv.title} className="sv-row">
                  <div className="sv-head">
                    <span className="sv-icon">
                      <i className={`fa-solid ${sv.icon}`} />
                    </span>
                    <div>
                      <span className="sv-num">{String(i + 1).padStart(2, '0')}</span>
                      <h3>{sv.title}</h3>
                    </div>
                  </div>
                  <ul className="sv-items">
                    {sv.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="products" className="co-section">
          <div className="co-wrap">
            <SectionHead
              kicker="Coming next"
              title="The RYDO product suite"
              sub="Beyond client projects, we are building software and platforms of our own. The range below is in development."
            />
            <div className="ps">
              {SUITE.map((p) => (
                <article key={p.name} className="ps-cell">
                  <span className="ps-icon">
                    <i className={`fa-solid ${p.icon}`} />
                  </span>
                  <span className="ps-brand">RYDO</span>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="ps-status">
                    <i /> In development
                  </span>
                </article>
              ))}
            </div>
            <div className="ps-model">
              <span className="ps-model-label">Two ways we work</span>
              <div>
                <i className="fa-solid fa-handshake" />
                <div>
                  <strong>Technology services</strong>
                  <p>We design, build and deliver solutions for clients.</p>
                </div>
              </div>
              <div>
                <i className="fa-solid fa-cubes" />
                <div>
                  <strong>Technology products</strong>
                  <p>Organisations buy, license or subscribe to RYDO-owned products.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="co-section co-section-tint">
          <div className="co-wrap sx">
            <div className="sx-side">
              <SectionHead
                kicker="Sectors"
                title="Solutions for every sector"
                sub="We serve government, corporate and private clients with solutions suited to how each sector works."
              />
              <a href="#contact" className="sx-ask">
                Don&apos;t see your sector? Talk to us <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
            <ol className="sx-list">
              {SECTORS.map((sector, i) => (
                <li key={sector.name} className="sx-row">
                  <span className="sx-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="sx-name">
                    <i className={`fa-solid ${sector.icon}`} />
                    <h3>{sector.name}</h3>
                  </div>
                  <p>{sector.desc}</p>
                  <i className="fa-solid fa-arrow-right sx-arrow" aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="process" className="co-section">
          <div className="co-wrap">
            <SectionHead
              kicker="How we work"
              title="How every project is delivered"
              sub="Each project gets a reference number, a project manager, an agreed budget and timeline, progress reports, testing records and handover documentation."
            />
            <Reveal as="ol" className="pt">
              {STEPS.map((step, i) => (
                <li key={step.name} style={{ ['--i' as string]: i }}>
                  <span className="pt-dot">
                    <i className={`fa-solid ${step.icon}`} />
                  </span>
                  <span className="pt-num">Step {String(i + 1).padStart(2, '0')}</span>
                  <strong>{step.name}</strong>
                  <small>{step.desc}</small>
                </li>
              ))}
            </Reveal>
            <h3 className="co-subhead">Ways to work with us</h3>
            <Reveal className="pp">
              {PLANS.map((plan, i) => (
                <article
                  key={plan.name}
                  className={`pp-plan${plan.name === 'Professional' ? ' is-featured' : ''}`}
                  style={{ ['--i' as string]: i }}
                >
                  <span className="pp-for">{plan.for}</span>
                  <h4>{plan.name}</h4>
                  <p>{plan.desc}</p>
                  <a href="#contact" className="pp-link">
                    Ask about {plan.name} <i className="fa-solid fa-arrow-right" />
                  </a>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="why" className="co-why">
          <div className="co-wrap wy">
            <div className="wy-side">
              <SectionHead kicker="Why RYDO" title="Why choose RYDO?" />
              <p className="wy-lead">
                We built, launched and still run our own products. That is the experience we bring to every client project.
              </p>
            </div>
            <Reveal as="ol" className="wy-list">
              {BENEFITS.map((benefit, i) => (
                <li key={benefit.title} style={{ ['--i' as string]: i }}>
                  <span className="wy-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>

          <div className="wy-clients">
            <span className="co-wrap wy-clients-label">Who we work with</span>
            <div className="wy-marquee" aria-label={CLIENTS.join(', ')}>
              <div className="wy-track" aria-hidden="true">
                {[0, 1].map((copy) =>
                  CLIENTS.map((client) => (
                    <span key={`${copy}-${client}`}>
                      {client}
                      <i className="fa-solid fa-diamond" />
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>

          <div className="co-wrap">
            <h3 className="co-why-team-title">The people behind RYDO</h3>
            <div className="wy-team">
              {TEAM.map((t) => (
                <figure key={t.name}>
                  <div className="wy-photo">
                    <Image src={t.image} alt={t.name} width={600} height={760} sizes="(max-width: 700px) 92vw, 380px" />
                  </div>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="co-section ct">
          <div className="co-wrap">
            <span className="co-kicker">Contact us</span>
            <div className="ct-top">
              <h2>
                Let&apos;s build a smarter digital future <em>together.</em>
              </h2>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-badge"
                aria-label="Start a project on WhatsApp"
              >
                <svg viewBox="0 0 160 160" aria-hidden="true">
                  <defs>
                    <path id="ct-circle" d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0" />
                  </defs>
                  <text>
                    <textPath href="#ct-circle" textLength="386" lengthAdjust="spacing">
                      START A PROJECT · TALK TO RYDO · 
                    </textPath>
                  </text>
                </svg>
                <span className="ct-badge-core">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </a>
            </div>
            <p className="ct-lead">
              Tell us what you need. We&apos;ll assess it, give you a clear plan, budget and timeline, and keep you updated
              from start to handover.
            </p>
            <ul className="ct-grid">
              <li>
                <a href={`tel:${COMPANY.phoneIntl}`}>
                  <span className="ct-label">
                    <i className="fa-solid fa-phone" /> Call
                  </span>
                  <strong>{COMPANY.phone}</strong>
                  <span className="ct-action">
                    Call now <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                  <span className="ct-label">
                    <i className="fa-brands fa-whatsapp" /> WhatsApp
                  </span>
                  <strong>{COMPANY.phone}</strong>
                  <span className="ct-action">
                    Chat now <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`}>
                  <span className="ct-label">
                    <i className="fa-solid fa-envelope" /> Email
                  </span>
                  <strong>
                    {COMPANY.email.split('@')[0]}@<wbr />
                    {COMPANY.email.split('@')[1]}
                  </strong>
                  <span className="ct-action">
                    Send an email <i className="fa-solid fa-arrow-right" />
                  </span>
                </a>
              </li>
              <li>
                <div>
                  <span className="ct-label">
                    <i className="fa-solid fa-location-dot" /> Office
                  </span>
                  <strong>Port Harcourt</strong>
                  <span className="ct-action is-static">Rivers State, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="co-footer">
        <div className="co-wrap co-footer-grid">
          <div className="co-footer-brand">
            <Image src="/images/rydo-logo-white.png" alt="RYDO Digital Solutions Ltd" width={1251} height={647} />
            <p>{COMPANY.tagline}</p>
          </div>
          <div>
            <h4>Company</h4>
            {COMPANY_NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h4>RYDO App</h4>
            <Link href="/app">About the app</Link>
            <Link href="/services">Delivery services</Link>
            <Link href="/riders">Ride with RYDO</Link>
            <Link href="/ops">Staff login</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link href="/privacy-policy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/cookies">Cookie policy</Link>
            <Link href="/refund-policy">Refund policy</Link>
          </div>
        </div>
        <div className="co-wrap co-footer-bottom">
          <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          <span>Technology · Innovation · Growth</span>
        </div>
      </footer>
    </>
  );
}
