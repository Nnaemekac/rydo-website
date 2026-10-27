import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Delete Your Account | RYDO',
  description: 'How to delete your RYDO account and what happens to your data.',
};

export default function DeleteAccountPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="badge badge-white">
            <i className="fa-solid fa-user-xmark"></i> Account
          </span>
          <h1 style={{ marginTop: 16 }}>Delete Your RYDO Account</h1>
          <p>
            RYDO DIGITAL SOLUTIONS LTD operates the RYDO app. You can delete your RYDO account at any time, either inside
            the app or by emailing us. This page explains how, and what happens to your data.
          </p>
          <div className="legal-meta">
            <span>App: RYDO</span>
            <span>Developer: RYDO DIGITAL SOLUTIONS LTD</span>
            <span>NDPA 2023 Compliant</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="legal-body">
          <div className="legal-section" id="da-1">
            <h2>
              <span className="num">1.</span> Delete your account in the app
            </h2>
            <ol>
              <li>Open the RYDO app and log in.</li>
              <li>Tap the <b>Profile</b> tab.</li>
              <li>Scroll to the bottom and tap <b>Delete my account</b>.</li>
              <li>Read the summary, type <b>DELETE</b> to confirm, and tap <b>Delete my account</b>.</li>
            </ol>
            <p>
              Your account is deleted immediately and you are logged out. If you have a delivery in progress, finish or
              cancel it first. Riders with money in their RYDO wallet must request a payout first so no earnings are lost.
            </p>
          </div>

          <div className="legal-section" id="da-2">
            <h2>
              <span className="num">2.</span> Request deletion by email
            </h2>
            <p>
              If you cannot use the app, email{' '}
              <a href="mailto:rydosupport@gmail.com?subject=Delete%20my%20RYDO%20account">rydosupport@gmail.com</a> with
              the subject <b>Delete my RYDO account</b> from the email address or phone number linked to your account, and
              tell us the phone number you used to sign up. We will confirm the request is yours and delete the account
              within 7 days.
            </p>
          </div>

          <div className="legal-section" id="da-3">
            <h2>
              <span className="num">3.</span> What we delete
            </h2>
            <ul>
              <li>Your name, phone number, email address, alternative phone number and profile photo</li>
              <li>Your saved places, notifications and device notification registration</li>
              <li>For riders: NIN, driver&apos;s licence number, vehicle plate, bank details and uploaded ID documents</li>
              <li>For merchants: business information and uploaded CAC documents</li>
              <li>Your login, so the account can no longer be accessed</li>
            </ul>
          </div>

          <div className="legal-section" id="da-4">
            <h2>
              <span className="num">4.</span> What we keep, and why
            </h2>
            <p>
              Records of completed deliveries and payments (order number, zones, date, fare and payment status) are kept
              without your name or contact details. Nigerian law requires us to keep financial records, and the Ministry of
              Transport levy on each delivery must stay auditable. These records cannot be linked back to you after your
              account is deleted, and are kept for as long as the law requires, typically up to 6 years.
            </p>
          </div>

          <div className="legal-section" id="da-5">
            <h2>
              <span className="num">5.</span> Contact
            </h2>
            <p>
              Questions about your data? Email <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a> or call
              08081259375. See our <a href="/privacy-policy">Privacy Policy</a> for more on how we handle your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
