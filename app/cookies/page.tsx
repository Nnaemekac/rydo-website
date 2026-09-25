import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | RYDO',
  description:
    'How RYDO DIGITAL SOLUTIONS LTD uses cookies and similar technologies on the RYDO website and related digital services.',
};

export default function CookiePolicyPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="badge badge-white">
            <i className="fa-solid fa-cookie-bite"></i> Legal
          </span>
          <h1 style={{ marginTop: 16 }}>Cookie Policy</h1>
          <p>
            This Cookie Policy explains how RYDO DIGITAL SOLUTIONS LTD (&quot;RYDO&quot;, &quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;) uses cookies and similar technologies on the RYDO website
            and related digital services.
          </p>
          <div className="legal-meta">
            <span>Effective: September 2026</span>
            <span>Last Updated: September 2026</span>
            <span>NDPA 2023 Compliant</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="legal-body">
          <div className="legal-toc">
            <div className="legal-toc-title">On this page</div>
            <div className="legal-toc-grid">
              <a href="#cp-1">1. Introduction</a>
              <a href="#cp-2">2. What Are Cookies?</a>
              <a href="#cp-3">3. Types of Cookies RYDO May Use</a>
              <a href="#cp-4">4. Cookie Consent</a>
              <a href="#cp-5">5. Managing Cookies</a>
              <a href="#cp-6">6. Third-Party Cookies</a>
              <a href="#cp-7">7. Changes to This Policy</a>
              <a href="#cp-8">8. Contact</a>
            </div>
          </div>

          <div className="legal-section" id="cp-1">
            <h2>
              <span className="num">1.</span> Introduction
            </h2>
            <p>
              This Cookie Policy explains how RYDO DIGITAL SOLUTIONS LTD (&quot;RYDO&quot;, &quot;we&quot;,
              &quot;us&quot; or &quot;our&quot;) uses cookies and similar technologies on the RYDO website
              and related digital services. The use of cookies and similar technologies will be managed
              in accordance with applicable Nigerian data-protection requirements. NDPC guidance addresses
              consent for non-essential cookies and distinguishes them from necessary functionality.
            </p>
          </div>

          <div className="legal-section" id="cp-2">
            <h2>
              <span className="num">2.</span> What Are Cookies?
            </h2>
            <p>
              Cookies are small data files placed on a device when a website or digital service is
              accessed. They may help websites remember preferences, maintain sessions, improve
              functionality, understand usage, improve security, and measure performance.
            </p>
          </div>

          <div className="legal-section" id="cp-3">
            <h2>
              <span className="num">3.</span> Types of Cookies RYDO May Use
            </h2>
            <h3>A. Strictly Necessary Cookies</h3>
            <p>
              These may be necessary for account login, authentication, security, session management, and
              basic Platform functionality. These cookies may be essential to providing requested
              services.
            </p>
            <h3>B. Preference Cookies</h3>
            <p>These may remember language preferences, display preferences, user settings, and other choices.</p>
            <h3>C. Analytics Cookies</h3>
            <p>
              Where used, analytics cookies may help RYDO understand which pages are visited, how users
              interact with the website, performance problems, and general usage trends.
            </p>
            <h3>D. Security Cookies</h3>
            <p>These may assist in fraud detection, account security, abuse prevention, and session security.</p>
            <h3>E. Marketing Cookies</h3>
            <p>
              Where RYDO uses marketing or advertising technologies, these may be used only subject to
              applicable consent requirements.
            </p>
          </div>

          <div className="legal-section" id="cp-4">
            <h2>
              <span className="num">4.</span> Cookie Consent
            </h2>
            <p>
              Where consent is legally required, RYDO will provide users with an appropriate mechanism to
              accept or decline non-essential cookies. Consent should be freely given, informed and
              specific. Users should not be forced to accept optional cookies merely to access basic
              website functionality where applicable law requires a choice.
            </p>
          </div>

          <div className="legal-section" id="cp-5">
            <h2>
              <span className="num">5.</span> Managing Cookies
            </h2>
            <p>
              Users may be able to manage cookies through RYDO&apos;s cookie settings, browser settings,
              device settings, or other available privacy controls. Disabling certain cookies may affect
              functionality.
            </p>
          </div>

          <div className="legal-section" id="cp-6">
            <h2>
              <span className="num">6.</span> Third-Party Cookies
            </h2>
            <p>
              Some RYDO services may use third-party technologies such as analytics providers, payment
              providers, security providers, mapping providers, customer-support tools, and other
              technology services. Third parties may have their own privacy policies.
            </p>
          </div>

          <div className="legal-section" id="cp-7">
            <h2>
              <span className="num">7.</span> Changes to This Policy
            </h2>
            <p>RYDO may update this Cookie Policy when technology, business practices or legal requirements change.</p>
          </div>

          <div className="legal-section" id="cp-8" style={{ marginBottom: 0 }}>
            <h2>
              <span className="num">8.</span> Contact
            </h2>
            <div className="legal-contact-card">
              <div>
                <b>Email</b> <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
              </div>
              <div>
                <b>Phone</b> 08081259375
              </div>
              <div>
                <b>Website</b> rydo.com.ng
              </div>
            </div>
          </div>

          <a href="#" className="legal-back-top">
            <i className="fa-solid fa-arrow-up"></i> Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
