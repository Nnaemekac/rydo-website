import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RYDO',
  description:
    'How RYDO DIGITAL SOLUTIONS LTD collects, uses, stores, discloses, protects, and otherwise processes personal data on the RYDO APP.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="badge badge-white">
            <i className="fa-solid fa-shield-halved"></i> Legal
          </span>
          <h1 style={{ marginTop: 16 }}>RYDO APP Privacy Policy</h1>
          <p>
            RYDO APP is a technology platform operated by RYDO DIGITAL SOLUTIONS LTD that connects
            customers with riders for motorcycle-based package delivery and related transportation
            services. This Policy explains how we collect, use, store, disclose, protect, and otherwise
            process personal data when you use RYDO.
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
              <a href="#pp-1">1. Who We Are</a>
              <a href="#pp-2">2. Information We Collect</a>
              <a href="#pp-3">3. How We Use Your Personal Data</a>
              <a href="#pp-4">4. Legal Basis for Processing</a>
              <a href="#pp-5">5. Location and GPS Data</a>
              <a href="#pp-6">6. Identity Verification</a>
              <a href="#pp-7">7. Cookies and Similar Technologies</a>
              <a href="#pp-8">8. Who We May Share Information With</a>
              <a href="#pp-9">9. International Data Transfers</a>
              <a href="#pp-10">10. Data Security</a>
              <a href="#pp-11">11. Data Retention</a>
              <a href="#pp-12">12. Your Data Protection Rights</a>
              <a href="#pp-13">13. How to Exercise Your Rights</a>
              <a href="#pp-14">14. Children&apos;s Privacy</a>
              <a href="#pp-15">15. User Responsibilities</a>
              <a href="#pp-16">16. Third-Party Services</a>
              <a href="#pp-17">17. Data Breaches &amp; Security Incidents</a>
              <a href="#pp-18">18. Privacy by Design</a>
              <a href="#pp-19">19. Changes to This Policy</a>
              <a href="#pp-20">20. Complaints &amp; Data Protection Authority</a>
              <a href="#pp-21">21. Contact Us</a>
              <a href="#pp-22">22. User Acknowledgement</a>
            </div>
          </div>

          <p style={{ fontSize: 14.5, color: 'var(--gray-800)', lineHeight: 1.85, marginBottom: 32 }}>
            RYDO DIGITAL SOLUTIONS LTD (&quot;RYDO&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) respects your privacy and is committed to protecting the personal information
            entrusted to us. By creating an account, accessing, or using RYDO, you acknowledge that you
            have read and understood this Privacy Policy.
          </p>

          <div className="legal-section" id="pp-1">
            <h2>
              <span className="num">1.</span> Who We Are
            </h2>
            <div className="legal-contact-card" style={{ marginBottom: 16 }}>
              <div>
                <b>Company</b> RYDO DIGITAL SOLUTIONS LTD
              </div>
              <div>
                <b>Platform</b> RYDO APP
              </div>
              <div>
                <b>Website</b> rydo.com.ng
              </div>
              <div>
                <b>Privacy Contact</b> <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
              </div>
              <div>
                <b>Telephone</b> 08081259375
              </div>
            </div>
            <p>
              For personal-data processing carried out in connection with the RYDO platform, RYDO DIGITAL
              SOLUTIONS LTD may act as a Data Controller and, where applicable, a Data Processor, depending
              on the nature of the processing activity. RYDO will process personal data in accordance with
              applicable Nigerian data-protection laws, including the Nigeria Data Protection Act 2023
              (NDPA).
            </p>
          </div>

          <div className="legal-section" id="pp-2">
            <h2>
              <span className="num">2.</span> Information We Collect
            </h2>
            <p>Depending on how you use RYDO, we may collect the following categories of information.</p>
            <h3>A. Account and Identity Information</h3>
            <ul>
              <li>Full name, phone number, email address, date of birth where required</li>
              <li>Residential or business address, profile photograph</li>
              <li>Identification information, National Identification Number (NIN) where required</li>
              <li>Driver&apos;s licence information for riders</li>
              <li>Other information required for rider/customer verification</li>
            </ul>
            <h3>B. Rider Verification Information</h3>
            <p>
              For riders, RYDO may collect and verify information necessary to establish identity and
              eligibility, including NIN information, driver&apos;s licence information, rider photograph,
              motorcycle information and registration, vehicle documentation, rider contact details,
              emergency contact information where required, verification status, and rider
              account/activity information. RYDO may use authorised third-party identity-verification
              providers to perform verification.
            </p>
            <h3>C. Location Information</h3>
            <p>
              Where you enable location services, RYDO may collect your current or approximate location,
              pickup and delivery location, rider location during an active delivery, route information,
              and location timestamps. This may be required to provide GPS tracking, match customers with
              riders, calculate routes, monitor active deliveries, improve safety, and confirm delivery.
              You may disable location permissions through your device settings, though this may affect
              certain RYDO services.
            </p>
            <h3>D. Delivery Information</h3>
            <p>
              When you request a delivery, we may collect pickup and delivery address, recipient and
              sender information, package description, delivery instructions, package value where
              applicable, delivery status, proof-of-delivery information, the four-digit OTC/completion
              code, and communication relating to the delivery. Users should not provide unnecessary
              sensitive personal information about another person through package descriptions or delivery
              instructions.
            </p>
            <h3>E. Payment and Transaction Information</h3>
            <p>
              When you make or receive payments through RYDO, we may process transaction amount,
              reference, status, wallet/account information, payment method, refund information, and
              transaction history. Where payments are processed by third-party providers, your payment
              information may be processed according to their privacy policies. RYDO does not intend to
              store complete debit-card PINs or other authentication credentials it does not need to
              provide its services.
            </p>
            <h3>F. Device and Technical Information</h3>
            <p>
              We may automatically collect device type, operating system, app version, IP address, device
              identifiers, network information, browser information, crash reports, log information, and
              security/authentication information — helping us maintain security, troubleshoot problems,
              prevent fraud, and improve the platform.
            </p>
            <h3>G. Communications</h3>
            <p>
              We may collect information contained in communications between you and RYDO customer
              support, riders, customers, or other authorised platform users. Where permitted by law,
              communications may be monitored or retained for customer service, dispute resolution,
              safety, fraud prevention, and security purposes.
            </p>
          </div>

          <div className="legal-section" id="pp-3">
            <h2>
              <span className="num">3.</span> How We Use Your Personal Data
            </h2>
            <h3>Providing RYDO Services</h3>
            <p>
              We use personal data to create and manage accounts, verify users and riders, match customers
              with available riders, facilitate deliveries, provide GPS tracking, process transactions,
              confirm delivery, provide customer support, manage wallets, process refunds and adjustments,
              and send service-related notifications.
            </p>
            <h3>Safety and Security</h3>
            <p>
              We may process information to verify rider identities, detect suspicious activity, prevent
              fraud, protect customers and riders, investigate complaints or accidents, monitor platform
              security, enforce platform rules, and protect our systems against unauthorised access.
            </p>
            <h3>Improving the Platform</h3>
            <p>
              We may use information to analyse platform performance, improve our technology, develop new
              features, improve customer experience, analyse delivery patterns, troubleshoot technical
              problems, and conduct internal research and analytics.
            </p>
            <h3>Legal and Regulatory Compliance</h3>
            <p>
              We may process information where necessary to comply with applicable laws, respond to
              lawful requests from government authorities, meet regulatory requirements, establish or
              defend legal claims, and prevent or investigate unlawful activity.
            </p>
          </div>

          <div className="legal-section" id="pp-4">
            <h2>
              <span className="num">4.</span> Legal Basis for Processing
            </h2>
            <p>
              Where applicable, RYDO will process personal data based on one or more lawful grounds
              recognised under applicable data-protection law, including performance of a contract or
              provision of requested services, compliance with a legal obligation, consent, protection of
              vital interests, and legitimate interests where permitted by law and where those interests
              do not override applicable data-protection rights.
            </p>
            <p>
              Where processing requires consent, you may withdraw your consent subject to applicable legal
              and contractual limitations. Withdrawal of consent does not necessarily affect processing
              that occurred before consent was withdrawn.
            </p>
          </div>

          <div className="legal-section" id="pp-5">
            <h2>
              <span className="num">5.</span> Location and GPS Data
            </h2>
            <p>
              Because RYDO facilitates location-based delivery services, location information is central
              to the platform. RYDO may use it to identify nearby riders, assign deliveries, track active
              deliveries, provide estimated arrival information, confirm pickup and delivery, improve
              route efficiency, investigate delivery disputes, and improve safety and security.
            </p>
            <p>
              RYDO will not intentionally collect continuous location information beyond what is
              reasonably necessary for the services being provided, except where permitted or required by
              law.
            </p>
          </div>

          <div className="legal-section" id="pp-6">
            <h2>
              <span className="num">6.</span> Identity Verification
            </h2>
            <p>
              RYDO may use third-party identity-verification services to verify riders and, where
              necessary, other users. Information supplied for verification may include government-issued
              identification information. Verification information will only be accessed and processed
              for legitimate purposes associated with identity verification, safety, regulatory
              compliance, fraud prevention, and platform operations.
            </p>
          </div>

          <div className="legal-section" id="pp-7">
            <h2>
              <span className="num">7.</span> Cookies and Similar Technologies
            </h2>
            <p>
              The RYDO website and related services may use cookies or similar technologies to maintain
              sessions, remember preferences, improve website performance, analyse usage, detect security
              threats, and improve user experience. Users may be able to control cookies through their
              browser settings. See our{' '}
              <a href="/cookies" style={{ color: 'var(--orange)' }}>
                Cookie Policy
              </a>{' '}
              for details.
            </p>
          </div>

          <div className="legal-section" id="pp-8">
            <h2>
              <span className="num">8.</span> Who We May Share Information With
            </h2>
            <h3>Service Providers</h3>
            <p>
              Technology providers supporting cloud hosting, data storage, identity verification, SMS/OTP
              delivery, payment processing, analytics, customer support, security monitoring, and software
              infrastructure.
            </p>
            <h3>Riders and Customers</h3>
            <p>
              Information necessary to facilitate a particular delivery may be shared between the customer
              and assigned rider — for example, a rider may need access to a customer&apos;s pickup or
              delivery information to complete the requested service.
            </p>
            <h3>Insurance Providers</h3>
            <p>
              Where insurance coverage is incorporated into RYDO services, relevant information may be
              shared with authorised insurance providers for policy administration, risk assessment,
              claims processing, incident investigation, and fraud prevention.
            </p>
            <h3>Government and Law-Enforcement Authorities</h3>
            <p>
              RYDO may disclose personal data where required or permitted by applicable law, regulation,
              court order, or lawful government request.
            </p>
            <h3>Corporate Transactions</h3>
            <p>
              If RYDO undergoes a merger, acquisition, restructuring, investment transaction, sale of
              assets, or similar corporate transaction, relevant information may be transferred as part of
              that transaction, subject to applicable privacy requirements. RYDO does not sell users&apos;
              personal information as a commercial product.
            </p>
          </div>

          <div className="legal-section" id="pp-9">
            <h2>
              <span className="num">9.</span> International Data Transfers
            </h2>
            <p>
              Some RYDO technology or service providers may process information using infrastructure
              located outside Nigeria. Where personal data is transferred internationally, RYDO will take
              reasonable measures to ensure that applicable legal and data-protection requirements are
              observed.
            </p>
          </div>

          <div className="legal-section" id="pp-10">
            <h2>
              <span className="num">10.</span> Data Security
            </h2>
            <p>
              RYDO takes reasonable technical and organisational measures to protect personal data against
              unauthorised access, loss, destruction, alteration, disclosure, misuse, and unauthorised
              processing. Depending on the system involved, measures may include encryption in transit,
              access controls, authentication mechanisms, role-based access, secure cloud infrastructure,
              database security controls, monitoring and logging, backup procedures, security testing,
              incident-response procedures, and employee confidentiality obligations.
            </p>
            <p>
              No electronic system can be guaranteed to be completely secure. Users should protect their
              passwords, OTPs, authentication codes, and account credentials, and should not share them
              with other persons.
            </p>
          </div>

          <div className="legal-section" id="pp-11">
            <h2>
              <span className="num">11.</span> Data Retention
            </h2>
            <p>
              RYDO will retain personal data only for as long as reasonably necessary for the purposes for
              which it was collected, including providing services, maintaining business records,
              resolving disputes, preventing fraud, meeting legal or regulatory obligations, enforcing
              agreements, and protecting the rights and safety of users and RYDO. When personal data is no
              longer required, RYDO may securely delete, anonymise, or otherwise dispose of it in
              accordance with applicable requirements. Different categories of information may have
              different retention periods.
            </p>
          </div>

          <div className="legal-section" id="pp-12">
            <h2>
              <span className="num">12.</span> Your Data Protection Rights
            </h2>
            <p>Subject to applicable law and any lawful limitations, you may have rights including:</p>
            <ul>
              <li>Right to be informed about processing of your personal data</li>
              <li>Right to access your personal data</li>
              <li>Right to request correction of inaccurate information</li>
              <li>Right to request deletion of personal data in appropriate circumstances</li>
              <li>Right to object to certain processing</li>
              <li>Right to restrict certain processing</li>
              <li>Right to withdraw consent where processing is based on consent</li>
              <li>Right to data portability where applicable</li>
              <li>Right to lodge a complaint with the relevant data-protection authority</li>
            </ul>
            <p>
              Some rights may be subject to legal exceptions — for example, RYDO may be required to retain
              certain information to comply with legal, regulatory, security, accounting, or
              dispute-resolution obligations.
            </p>
          </div>

          <div className="legal-section" id="pp-13">
            <h2>
              <span className="num">13.</span> How to Exercise Your Rights
            </h2>
            <p>
              To make a privacy request, contact{' '}
              <a href="mailto:rydosupport@gmail.com" style={{ color: 'var(--orange)' }}>
                rydosupport@gmail.com
              </a>{' '}
              or 08081259375. Your request should, where possible, include your full name, registered
              phone number or email, description of the request, relevant account or transaction details,
              and any information reasonably necessary to verify your identity. RYDO may request
              additional information to confirm that the person making a request is authorised to access
              the relevant account or information.
            </p>
          </div>

          <div className="legal-section" id="pp-14">
            <h2>
              <span className="num">14.</span> Children&apos;s Privacy
            </h2>
            <p>
              RYDO is not intended to be used by children who are below the minimum age permitted under
              applicable law to independently enter into the relevant service arrangement. We do not
              knowingly collect children&apos;s personal data for purposes that are not permitted by
              applicable law. If a parent or lawful guardian believes that a child has provided personal
              information improperly, they may contact RYDO at{' '}
              <a href="mailto:rydosupport@gmail.com" style={{ color: 'var(--orange)' }}>
                rydosupport@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="legal-section" id="pp-15">
            <h2>
              <span className="num">15.</span> User Responsibilities
            </h2>
            <p>
              Users are responsible for ensuring that information they provide to RYDO is accurate and
              lawful. Users should not create an account using another person&apos;s identity, provide
              fraudulent identification documents, share account passwords or OTPs, upload another
              person&apos;s personal information unnecessarily, use RYDO to transport unlawful goods,
              attempt to access another user&apos;s account, circumvent RYDO security measures, or use the
              platform for fraudulent or unlawful activities.
            </p>
          </div>

          <div className="legal-section" id="pp-16">
            <h2>
              <span className="num">16.</span> Third-Party Services
            </h2>
            <p>
              RYDO may integrate with third-party services, including payment providers,
              identity-verification providers, cloud infrastructure providers, communication providers,
              mapping services, analytics providers, and insurance providers. These third parties may
              process personal information according to their own privacy policies and applicable
              contractual arrangements. RYDO encourages users to review the privacy practices of
              third-party services where appropriate.
            </p>
          </div>

          <div className="legal-section" id="pp-17">
            <h2>
              <span className="num">17.</span> Data Breaches and Security Incidents
            </h2>
            <p>
              If RYDO becomes aware of a personal-data breach, we will assess the incident and take
              appropriate measures in accordance with applicable law. Where notification is legally
              required, RYDO will make the necessary notifications to relevant authorities and/or affected
              persons within the applicable legal requirements. RYDO may also contain the incident,
              investigate the cause, secure affected systems, reset credentials, restrict access, preserve
              relevant evidence, and take steps to prevent recurrence.
            </p>
          </div>

          <div className="legal-section" id="pp-18">
            <h2>
              <span className="num">18.</span> Privacy by Design
            </h2>
            <p>
              RYDO is committed to incorporating privacy and data protection into the design and operation
              of its technology. Where appropriate, RYDO will seek to collect only information reasonably
              necessary for identified purposes, restrict access to personal data, apply appropriate
              security controls, minimise unnecessary data retention, provide privacy information to
              users, and conduct privacy and security assessments where required. The NDPC&apos;s published
              software guidance specifically identifies privacy-by-design/default and providing a privacy
              policy within software as important measures for covered applications.
            </p>
          </div>

          <div className="legal-section" id="pp-19">
            <h2>
              <span className="num">19.</span> Changes to This Privacy Policy
            </h2>
            <p>
              RYDO may update this Privacy Policy from time to time to reflect changes in our services,
              technology, applicable law, regulatory requirements, or our data-processing practices. When
              material changes are made, RYDO may notify users through the application, website, email, or
              another appropriate communication method. The &quot;Last Updated&quot; date at the top of
              this Policy indicates when it was most recently revised.
            </p>
          </div>

          <div className="legal-section" id="pp-20">
            <h2>
              <span className="num">20.</span> Complaints and Data-Protection Authority
            </h2>
            <p>
              If you have concerns about how RYDO processes your personal data, we encourage you to
              contact us first so that we can investigate and attempt to resolve the issue. You may also
              have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC) or
              another competent data-protection authority where applicable. The NDPC maintains official
              channels for data-protection administration and compliance.
            </p>
          </div>

          <div className="legal-section" id="pp-21">
            <h2>
              <span className="num">21.</span> Contact Us
            </h2>
            <div className="legal-contact-card">
              <div>
                <b>Company</b> RYDO DIGITAL SOLUTIONS LTD
              </div>
              <div>
                <b>Platform</b> RYDO APP
              </div>
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

          <div className="legal-section" id="pp-22" style={{ marginBottom: 0 }}>
            <h2>
              <span className="num">22.</span> User Acknowledgement
            </h2>
            <p>
              By registering for and using RYDO APP, you acknowledge that you have had an opportunity to
              review this Privacy Policy and understand how RYDO may collect and process personal data in
              connection with the services. Where applicable, RYDO will obtain the consent required by law
              before processing personal data on the basis of consent.
            </p>
          </div>

          <a href="#" className="legal-back-top">
            <i className="fa-solid fa-arrow-up"></i> Back to top
          </a>
        </div>
      </div>
    </div>
  );
}
