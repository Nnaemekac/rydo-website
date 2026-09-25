import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | RYDO',
  description:
    'When refunds are available, how to request one, and how long resolution takes on the RYDO motorcycle delivery platform.',
};

export default function RefundPolicyPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="badge badge-white">
            <i className="fa-solid fa-file-contract"></i> Legal
          </span>
          <h1 style={{ marginTop: 16 }}>Refund &amp; Cancellation Policy</h1>
          <p>
            RYDO DIGITAL SOLUTIONS LTD operates the RYDO APP, a technology-enabled motorcycle delivery
            platform connecting customers with KYC-verified delivery riders across Port Harcourt and
            Obio-Akpor, Rivers State, Nigeria. This Policy explains when refunds are available, how to
            request one, and how long resolution takes.
          </p>
          <div className="legal-meta">
            <span>Effective: August 2026</span>
            <span>Version 1.0</span>
            <span>Governing Law: Federal Republic of Nigeria</span>
            <span>NDPA 2023 Compliant</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="legal-body">
          <div className="legal-toc">
            <div className="legal-toc-title">On this page</div>
            <div className="legal-toc-grid">
              <a href="#rf-1">1. Introduction</a>
              <a href="#rf-2">2. Definitions</a>
              <a href="#rf-3">3. Cancellation Policy</a>
              <a href="#rf-4">4. Refund Policy</a>
              <a href="#rf-5">5. RYDO Wallet — Top-Ups &amp; Withdrawals</a>
              <a href="#rf-6">6. How to Request a Refund</a>
              <a href="#rf-7">7. Refund Processing Timelines</a>
              <a href="#rf-8">8. Refund Payment Methods</a>
              <a href="#rf-9">9. Dispute Resolution</a>
              <a href="#rf-10">10. Rider-Specific Refund &amp; Deduction Policy</a>
              <a href="#rf-11">11. Promotions, Discounts &amp; Cashback</a>
              <a href="#rf-12">12. Amendments to This Policy</a>
              <a href="#rf-13">13. Contact Us</a>
            </div>
          </div>

          <div className="legal-callout">
            <p>
              <b>Our Commitment.</b> RYDO is committed to fair, transparent, and prompt resolution of all
              refund requests. Every delivery is GPS-tracked and OTC-verified — creating a digital audit
              trail that protects both customers and riders and lets us resolve disputes accurately and
              fairly. If something goes wrong, we investigate promptly and resolve it within the timelines
              below.
            </p>
          </div>

          <div className="legal-section" id="rf-1">
            <h2>
              <span className="num">1.</span> Introduction
            </h2>
            <p>
              RYDO DIGITAL SOLUTIONS LTD (&quot;RYDO&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
              operates the RYDO APP, a technology-enabled motorcycle delivery platform connecting
              customers with KYC-verified delivery riders across Port Harcourt and Obio-Akpor, Rivers
              State, Nigeria. This Refund and Cancellation Policy explains the circumstances under which
              refunds are available, the process for requesting a refund, and the timelines for
              resolution.
            </p>
            <p>
              By using the RYDO APP, customers and riders agree to be bound by this Policy. This Policy
              forms part of the RYDO Terms of Service and is subject to the laws of the Federal Republic
              of Nigeria, including the Federal Competition and Consumer Protection Act (FCCPA) 2019 and
              applicable EFCC and CBN payment regulations.
            </p>
          </div>

          <div className="legal-section" id="rf-2">
            <h2>
              <span className="num">2.</span> Definitions
            </h2>
            <ul>
              <li>
                <b>RYDO APP</b> — the RYDO motorcycle delivery mobile application available on Google Play
                and Apple App Store.
              </li>
              <li>
                <b>Customer</b> — a registered user of the RYDO APP who places delivery orders.
              </li>
              <li>
                <b>Rider</b> — a KYC-verified motorcycle delivery operator registered on the RYDO
                Platform.
              </li>
              <li>
                <b>Delivery Fare</b> — the total amount charged to the customer at booking, including base
                fare, weight charge, fuel surcharge, and any applicable peak or bulk modifiers.
              </li>
              <li>
                <b>RYDO Wallet</b> — the in-app digital wallet used by customers and riders to hold, spend,
                and receive RYDO platform credits.
              </li>
              <li>
                <b>OTC Code</b> — One-Time Confirmation Code, the tamper-resistant delivery verification
                code that confirms delivery completion. A delivery is only marked &quot;Completed&quot;
                when the OTC is entered by the rider.
              </li>
              <li>
                <b>OTC-Confirmed Delivery</b> — a delivery where the recipient has provided the OTC code to
                the rider and it has been entered in the RYDO APP, confirming the package was received.
              </li>
              <li>
                <b>Unsuccessful Delivery</b> — a delivery that was not OTC-confirmed due to circumstances
                outside the customer&apos;s control, including rider incident, platform failure, or
                non-delivery.
              </li>
              <li>
                <b>Failed Delivery</b> — a delivery attempt where the rider attended but was unable to
                complete delivery due to circumstances attributable to the customer or recipient.
              </li>
              <li>
                <b>Platform Failure</b> — a technical error on the RYDO platform (app crash, payment error,
                GPS failure) that causes a delivery to fail or not be initiated.
              </li>
              <li>
                <b>Paystack</b> — RYDO&apos;s payment processing partner, handling card payments, bank
                transfers, USSD, and wallet top-ups.
              </li>
            </ul>
          </div>

          <div className="legal-section" id="rf-3">
            <h2>
              <span className="num">3.</span> Cancellation Policy
            </h2>
            <h3>3.1 Cancellation by Customer — Before Rider Acceptance</h3>
            <p>
              A customer may cancel a delivery order at any time before a rider has accepted the order. In
              this case, a full refund of the delivery fare will be issued to the customer&apos;s original
              payment method or RYDO Wallet within the timelines stated in Section 7. Cancellation is
              initiated via the RYDO APP: <b>Order Details → Cancel Order.</b>
            </p>
            <h3>3.2 Cancellation by Customer — After Rider Acceptance</h3>
            <p>
              Once a rider has accepted an order and is en route to the pickup location, cancellation by
              the customer will incur a cancellation fee. This fee compensates the rider for time and fuel
              already expended.
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Cancellation Timing</th>
                    <th>Cancellation Fee</th>
                    <th>Refund to Customer</th>
                  </tr>
                  <tr>
                    <td>Before rider acceptance</td>
                    <td>₦0</td>
                    <td>100% refund of full fare</td>
                  </tr>
                  <tr>
                    <td>After acceptance — rider not yet at pickup</td>
                    <td>₦200 flat fee</td>
                    <td>Full fare minus ₦200</td>
                  </tr>
                  <tr>
                    <td>After acceptance — rider at pickup location</td>
                    <td>₦500 flat fee</td>
                    <td>Full fare minus ₦500</td>
                  </tr>
                  <tr>
                    <td>After rider has collected package</td>
                    <td>No cancellation permitted</td>
                    <td>Delivery must be completed — see 3.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="legal-callout">
              <p>
                When a rider accepts your order, they travel to your pickup location using fuel and time
                they cannot recover. The cancellation fee is paid directly to the rider as compensation —
                RYDO does not retain any portion of it.
              </p>
            </div>
            <h3>3.3 Cancellation by Rider</h3>
            <p>
              If a rider cancels an accepted order without a valid reason: the customer is not charged any
              cancellation fee; a full refund of the delivery fare is issued to the customer&apos;s RYDO
              Wallet or original payment method; RYDO immediately re-matches the customer with the next
              available qualified rider. Repeated cancellations by a rider will negatively impact their
              Rider Score and may result in suspension.
            </p>
            <h3>3.4 Orders That Cannot Be Cancelled</h3>
            <p>
              Once a rider has collected the package and the app status shows &quot;Package
              Collected,&quot; the order cannot be cancelled. If an order cannot be completed after
              collection due to circumstances beyond the rider&apos;s control (recipient unavailable, wrong
              address), refer to Section 4.3 (Failed Delivery).
            </p>
          </div>

          <div className="legal-section" id="rf-4">
            <h2>
              <span className="num">4.</span> Refund Policy
            </h2>
            <h3>4.1 Full Refund — Eligible Scenarios</h3>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Scenario</th>
                    <th>Eligible?</th>
                    <th>Refund Amount</th>
                    <th>Refund Method</th>
                  </tr>
                  <tr>
                    <td>Customer cancels before rider acceptance</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare</td>
                    <td>Original method or Wallet</td>
                  </tr>
                  <tr>
                    <td>RYDO platform failure prevents delivery</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare</td>
                    <td>Original method or Wallet</td>
                  </tr>
                  <tr>
                    <td>Rider cancels after acceptance</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare</td>
                    <td>RYDO Wallet (within 24 hours)</td>
                  </tr>
                  <tr>
                    <td>Rider does not arrive within 45 minutes of acceptance</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare</td>
                    <td>Original method or Wallet</td>
                  </tr>
                  <tr>
                    <td>Package lost in transit — confirmed by OTC failure + investigation</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare + see 4.4</td>
                    <td>Wallet + insurance claim if applicable</td>
                  </tr>
                  <tr>
                    <td>Package significantly damaged in transit — confirmed by evidence</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare + see 4.4</td>
                    <td>Wallet + insurance claim if applicable</td>
                  </tr>
                  <tr>
                    <td>Duplicate charge / payment processing error</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of duplicate charge</td>
                    <td>Original payment method</td>
                  </tr>
                  <tr>
                    <td>Wrong delivery destination — RYDO platform error</td>
                    <td className="legal-eligible">Yes</td>
                    <td>100% of fare</td>
                    <td>Original method or Wallet</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>4.2 Partial Refund — Eligible Scenarios</h3>
            <p>A partial refund may be issued in the following circumstances at RYDO&apos;s discretion:</p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Scenario</th>
                    <th>Partial Refund Amount</th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                    <td>Customer cancels after rider acceptance (en route)</td>
                    <td>Fare minus ₦200</td>
                    <td>₦200 paid to rider</td>
                  </tr>
                  <tr>
                    <td>Customer cancels after rider arrives at pickup</td>
                    <td>Fare minus ₦500</td>
                    <td>₦500 paid to rider</td>
                  </tr>
                  <tr>
                    <td>Delivery significantly delayed due to partial platform fault</td>
                    <td>20–50% of fare at RYDO&apos;s discretion</td>
                    <td>Must be reported within 24 hours</td>
                  </tr>
                  <tr>
                    <td>Package partially damaged — minor damage confirmed</td>
                    <td>Up to 50% of declared package value</td>
                    <td>Subject to investigation and evidence</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>4.3 Failed Delivery — Recipient Unavailable or Wrong Address</h3>
            <p>
              If a rider arrives at the correct delivery address (confirmed by GPS) but cannot complete
              delivery because the recipient is unavailable or the address provided by the customer is
              incorrect: the delivery fare is non-refundable, as the rider has fulfilled their obligation
              by attending the correct address. A re-delivery fee of 50% of the original fare applies if
              the customer requests another attempt. If the customer disputes the address, RYDO will
              investigate using GPS logs and OTC attempt records — if rider error is confirmed, a full
              refund is issued. If the package is returned to sender, a return delivery fee equal to 50% of
              the original fare applies.
            </p>
            <h3>4.4 Package Loss or Damage Claims</h3>
            <p>Every RYDO delivery is GPS-tracked and OTC-verified, creating a clear chain of custody record.</p>
            <p>
              <b>Package Loss.</b> Must be reported within 24 hours of the expected delivery time. RYDO
              investigates using GPS logs, OTC attempt records, rider communication, and customer reports.
              If rider negligence or a platform failure is confirmed, the customer receives a full refund
              of the delivery fare, and where package insurance was active, a claim is filed with
              RYDO&apos;s insurance partner. For uninsured packages, RYDO&apos;s liability is limited to a
              refund of the delivery fare only.
            </p>
            <p>
              <b>Package Damage.</b> Must be reported within 24 hours of delivery, with photographic
              evidence and the retained packaging if requested. If damage is confirmed as caused during
              transit under rider responsibility, RYDO issues a partial or full refund and refers the
              matter to the insurance partner where applicable. RYDO is not liable for damage from
              inadequate customer packaging, undeclared fragile items, or items excluded under the RYDO
              Terms of Service.
            </p>
            <h3>4.5 Non-Refundable Scenarios</h3>
            <ul>
              <li className="legal-not-eligible">
                Deliveries successfully OTC-confirmed — the OTC code is tamper-resistant proof the package
                was received
              </li>
              <li className="legal-not-eligible">
                Offline deliveries — deliveries arranged outside the RYDO APP bear no RYDO liability
                whatsoever
              </li>
              <li className="legal-not-eligible">
                Customer provides incorrect pickup or delivery address — rider attendance at given address
                is non-refundable
              </li>
              <li className="legal-not-eligible">Recipient refuses to accept package without valid reason</li>
              <li className="legal-not-eligible">
                Package excluded under RYDO Terms of Service (prohibited items, narcotics, counterfeit
                goods, live animals)
              </li>
              <li className="legal-not-eligible">
                Damage caused by inadequate customer packaging of fragile or liquid items
              </li>
              <li className="legal-not-eligible">Perishable goods that degrade during a normal delivery window</li>
              <li className="legal-not-eligible">Change of mind after package is collected by rider</li>
              <li className="legal-not-eligible">
                First booking discount — the 40% discount fare is the valid fare; the pre-discount amount
                is not refundable
              </li>
              <li className="legal-not-eligible">
                RYDO Wallet cashback credits — promotional credits are non-refundable and non-transferable
              </li>
              <li className="legal-not-eligible">Referral bonus credits — credited bonuses are non-refundable</li>
              <li className="legal-not-eligible">
                Losses arising from force majeure events (flooding, civil unrest, government road closures)
              </li>
            </ul>
          </div>

          <div className="legal-section" id="rf-5">
            <h2>
              <span className="num">5.</span> RYDO Wallet — Top-Ups and Withdrawal Policy
            </h2>
            <h3>5.1 Wallet Top-Ups</h3>
            <p>
              Payments to top up your RYDO Wallet via Paystack (card, bank transfer, or USSD) are processed
              immediately. If a top-up is debited from your bank account but not credited to your Wallet
              within 30 minutes, contact{' '}
              <a href="mailto:rydosupport@gmail.com" style={{ color: 'var(--orange)' }}>
                rydosupport@gmail.com
              </a>{' '}
              with your transaction reference — RYDO will investigate and credit your wallet within 24
              hours or initiate a refund within 5 business days. Wallet top-ups are non-refundable once
              credited, except in cases of duplicate charges or payment processing errors by Paystack.
            </p>
            <h3>5.2 Wallet Balance Refunds</h3>
            <p>
              Unused RYDO Wallet credits arising from delivery refunds may be withdrawn to your registered
              bank account upon request. A withdrawal processing fee of ₦50 applies per transaction,
              processed within 3–5 business days. Promotional credits (referral bonuses, cashback,
              discount credits) cannot be withdrawn as cash — they may only be used for RYDO APP
              deliveries. Wallet balances do not expire for active accounts; for accounts inactive for 12
              consecutive months, RYDO reserves the right to expire promotional credits with 30 days&apos;
              written notice to the registered email.
            </p>
            <h3>5.3 Duplicate Charges</h3>
            <p>
              If your bank account or card is charged more than once for a single transaction, contact{' '}
              <a href="mailto:rydosupport@gmail.com" style={{ color: 'var(--orange)' }}>
                rydosupport@gmail.com
              </a>{' '}
              immediately with your bank statement showing both charges. RYDO will investigate with
              Paystack and refund the duplicate charge to your original payment method within 5 business
              days.
            </p>
          </div>

          <div className="legal-section" id="rf-6">
            <h2>
              <span className="num">6.</span> How to Request a Refund
            </h2>
            <p>
              Refund requests must be submitted through an official RYDO channel. RYDO does not process
              refund requests made through third parties, social media, or unofficial channels.
            </p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Channel</th>
                    <th>How to Use</th>
                    <th>Best For</th>
                  </tr>
                  <tr>
                    <td>RYDO APP — In-App Support</td>
                    <td>
                      Menu → Support → &quot;Report a Problem&quot; → Select order → &quot;Request
                      Refund&quot;
                    </td>
                    <td>Fastest — auto-populates order details and OTC data</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      rydosupport@gmail.com, subject &quot;REFUND REQUEST — [Order ID]&quot;, with order
                      ID, date, issue description, and evidence
                    </td>
                    <td>Package damage or loss claims requiring evidence</td>
                  </tr>
                  <tr>
                    <td>WhatsApp Support</td>
                    <td>Message the number listed in-app under Support → WhatsApp</td>
                    <td>Quick queries and status updates</td>
                  </tr>
                  <tr>
                    <td>Live Chat</td>
                    <td>In-app under Support, 8am–8pm WAT Mon–Sat</td>
                    <td>Real-time assistance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3>What to include in your refund request</h3>
            <ul>
              <li>Your registered RYDO APP phone number or email</li>
              <li>Order ID / Delivery Reference Number (found in Order History)</li>
              <li>Date and time of the delivery</li>
              <li>Clear description of the issue</li>
              <li>Photographic evidence (required for damage claims)</li>
              <li>Your preferred refund method (RYDO Wallet or bank account)</li>
              <li>Bank account details if requesting a bank transfer refund (Account Name, Number, Bank)</li>
            </ul>
          </div>

          <div className="legal-section" id="rf-7">
            <h2>
              <span className="num">7.</span> Refund Processing Timelines
            </h2>
            <p>The following timelines apply from the date RYDO confirms eligibility of the refund:</p>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Refund Type</th>
                    <th>Investigation</th>
                    <th>Processing</th>
                    <th>Total Timeline</th>
                  </tr>
                  <tr>
                    <td>Cancellation before rider acceptance</td>
                    <td>Instant</td>
                    <td>Instant</td>
                    <td>Within 30 minutes</td>
                  </tr>
                  <tr>
                    <td>Rider cancellation after acceptance</td>
                    <td>Instant</td>
                    <td>Within 24 hours</td>
                    <td>Within 24 hours</td>
                  </tr>
                  <tr>
                    <td>Platform failure / technical error</td>
                    <td>1–2 business days</td>
                    <td>2–3 business days</td>
                    <td>Within 5 business days</td>
                  </tr>
                  <tr>
                    <td>Delivery not completed — rider fault</td>
                    <td>1–3 business days</td>
                    <td>2–3 business days</td>
                    <td>Within 5 business days</td>
                  </tr>
                  <tr>
                    <td>Duplicate charge / payment error</td>
                    <td>1–2 business days</td>
                    <td>3–5 business days</td>
                    <td>Within 7 business days</td>
                  </tr>
                  <tr>
                    <td>Package loss claim</td>
                    <td>3–5 business days</td>
                    <td>2–3 business days</td>
                    <td>Within 10 business days</td>
                  </tr>
                  <tr>
                    <td>Package damage claim</td>
                    <td>3–5 business days</td>
                    <td>2–3 business days</td>
                    <td>Within 10 business days</td>
                  </tr>
                  <tr>
                    <td>Insurance claims (declared value)</td>
                    <td>Per insurer SLA (15 days)</td>
                    <td>Per insurance partner</td>
                    <td>Within 20 business days</td>
                  </tr>
                  <tr>
                    <td>RYDO Wallet withdrawal request</td>
                    <td>Immediate check</td>
                    <td>3–5 business days</td>
                    <td>Within 5 business days</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="legal-callout">
              <p>
                <b>Reporting deadline.</b> All refund requests must be submitted within 48 hours of the
                delivery event. Requests submitted after 48 hours may still be considered at RYDO&apos;s
                discretion, but investigation accuracy cannot be guaranteed for late reports due to GPS log
                and OTC data retention windows. <b>Exception:</b> duplicate charge and payment error claims
                may be submitted within 14 days.
              </p>
            </div>
          </div>

          <div className="legal-section" id="rf-8">
            <h2>
              <span className="num">8.</span> Refund Payment Methods
            </h2>
            <ul>
              <li>
                <b>RYDO Wallet Credit</b> — fastest, usually within 24 hours. No withdrawal fee for in-app
                use.
              </li>
              <li>
                <b>Original Payment Method (Card)</b> — via Paystack, 3–7 business days depending on your
                bank.
              </li>
              <li>
                <b>Original Payment Method (Bank Transfer)</b> — via Paystack, 3–5 business days.
              </li>
              <li>
                <b>USSD Payment Refund</b> — to the linked bank account, 3–5 business days.
              </li>
              <li>
                <b>Bank Transfer (Manual, for claims above ₦50,000)</b> — customer provides account
                details, 5–7 business days.
              </li>
            </ul>
            <p>
              RYDO reserves the right to issue refunds as RYDO Wallet credits where the original payment
              method is unavailable or Paystack cannot process a reversal. Customers preferring a bank
              transfer over a Wallet credit may request this in their refund submission.
            </p>
          </div>

          <div className="legal-section" id="rf-9">
            <h2>
              <span className="num">9.</span> Dispute Resolution
            </h2>
            <h3>9.1 Internal Escalation</h3>
            <p>
              If you are dissatisfied with RYDO&apos;s refund decision, escalate to our Customer Experience
              Team at{' '}
              <a href="mailto:rydosupport@gmail.com" style={{ color: 'var(--orange)' }}>
                rydosupport@gmail.com
              </a>
              , subject &quot;REFUND ESCALATION — [Order ID].&quot; A senior team member reviews your case
              independently within 3 business days and provides a final written decision, considering GPS
              logs, OTC records, rider communication, and customer-provided evidence.
            </p>
            <h3>9.2 External Escalation</h3>
            <p>
              If still dissatisfied, you may refer the matter to the Federal Competition and Consumer
              Protection Commission (FCCPC) under the FCCPA 2019. For card payment disputes, you may raise
              a chargeback with your bank. For insurance claim disputes, escalate to the National Insurance
              Commission (NAICOM) Consumer Complaints Bureau.
            </p>
            <h3>9.3 Fraudulent Refund Claims</h3>
            <p>
              RYDO takes fraudulent refund claims extremely seriously. Customers or riders found to have
              submitted false or fraudulent claims — including staging fake delivery failures, fabricating
              evidence, or colluding to claim refunds — will be permanently banned and reported to relevant
              authorities. RYDO reserves the right to pursue civil and criminal remedies.
            </p>
          </div>

          <div className="legal-section" id="rf-10">
            <h2>
              <span className="num">10.</span> Rider-Specific Refund &amp; Deduction Policy
            </h2>
            <h3>10.1 Rider Earnings Protection</h3>
            <p>
              RYDO&apos;s OTC delivery verification system protects rider earnings. A delivery is only
              marked complete — and rider payment released — when the recipient provides the OTC code,
              ensuring riders cannot be fraudulently accused of non-delivery on completed orders.
            </p>
            <h3>10.2 Deductions from Rider Earnings</h3>
            <div className="legal-table-wrap">
              <table className="legal-table">
                <tbody>
                  <tr>
                    <th>Circumstance</th>
                    <th>Deduction</th>
                    <th>Notes</th>
                  </tr>
                  <tr>
                    <td>Rider cancels accepted order without valid reason</td>
                    <td>₦200 — credited to customer</td>
                    <td>Applied to Rider Score too</td>
                  </tr>
                  <tr>
                    <td>Rider confirmed to have lost a package through negligence</td>
                    <td>Up to ₦5,000 or insurance excess</td>
                    <td>Subject to investigation</td>
                  </tr>
                  <tr>
                    <td>Rider confirmed to have damaged a package through negligence</td>
                    <td>Up to ₦3,000 or insurance excess</td>
                    <td>Subject to investigation</td>
                  </tr>
                  <tr>
                    <td>Rider submits fraudulent delivery confirmation (OTC bypass attempt)</td>
                    <td>Account suspension + earnings held pending review</td>
                    <td>Zero tolerance</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              All rider deductions are subject to RYDO&apos;s investigation process. Riders are notified of
              any proposed deduction and given the opportunity to respond before it is applied.
            </p>
          </div>

          <div className="legal-section" id="rf-11">
            <h2>
              <span className="num">11.</span> Promotions, Discounts &amp; Cashback
            </h2>
            <ul>
              <li>
                The 40% first booking discount is applied to the delivery fare. The discounted fare is the
                valid, correct price — the pre-discount amount is not refundable.
              </li>
              <li>
                ₦1,000 customer referral bonuses and ₦2,000 rider referral bonuses are credited as RYDO
                Wallet credits only, and cannot be refunded or withdrawn as cash.
              </li>
              <li>₦50 per 5th-delivery cashback credits are RYDO Wallet credits only and non-refundable.</li>
              <li>
                Promotional credits do not expire for active accounts but may be withdrawn by RYDO on 30
                days&apos; notice for inactive accounts.
              </li>
              <li>
                RYDO reserves the right to modify, suspend, or withdraw any promotional offer at any time
                with 7 days&apos; notice in the RYDO APP.
              </li>
            </ul>
          </div>

          <div className="legal-section" id="rf-12">
            <h2>
              <span className="num">12.</span> Amendments to This Policy
            </h2>
            <p>
              RYDO reserves the right to amend this Refund and Cancellation Policy at any time. Material
              changes will be notified to users via push notification through the RYDO APP and by email to
              registered addresses at least 14 days before the changes take effect. Continued use of the
              RYDO APP after the effective date of any amendment constitutes acceptance of the revised
              Policy.
            </p>
          </div>

          <div className="legal-section" id="rf-13">
            <h2>
              <span className="num">13.</span> Contact Us
            </h2>
            <div className="legal-contact-card">
              <div>
                <b>Company</b> RYDO DIGITAL SOLUTIONS LTD
              </div>
              <div>
                <b>CAC Registration</b> RC 9702090 — Corporate Affairs Commission
              </div>
              <div>
                <b>General Support</b>{' '}
                <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
              </div>
              <div>
                <b>Refund Queries</b>{' '}
                <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a> (Subject: REFUND REQUEST —
                [Order ID])
              </div>
              <div>
                <b>Data / Privacy</b> <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>
              </div>
              <div>
                <b>Website</b> rydo.com.ng
              </div>
              <div>
                <b>Support Hours</b> 8:00 AM – 8:00 PM WAT · Monday – Saturday
              </div>
              <div>
                <b>Governing Law</b> Federal Republic of Nigeria · NDPA 2023 Compliant
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
