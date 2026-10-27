import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Package Policy | RYDO',
  description: 'What you can and cannot send with RYDO, package value limits, fragile items and package protection.',
};

const LIMITS: [string, string][] = [
  ['Maximum declared package value', '₦200,000 per delivery'],
  ['Protection, declared value below ₦100,000', 'Up to ₦20,000 compensation'],
  ['Protection, declared value ₦100,000 and above', 'Up to ₦50,000 compensation'],
  ['Bulky surcharge', '₦500 flat for packages over 10kg or 280cm girth'],
  ['Oversized (girth over 280cm)', 'Redirected to a Freight Quote, not booked normally'],
  ['Cash', 'Maximum ₦10,000 per delivery'],
];

const PERMITTED: [string, string[]][] = [
  ['Documents and paperwork', ['Letters, contracts and legal documents', 'Certificates and academic records', 'Government forms and passports (sealed)', 'Business reports, invoices and agreements', 'Court documents (sealed envelopes)']],
  ['Clothing and personal items', ['Clothing, shoes, bags and accessories', 'Books, stationery and office supplies', 'Gifts and personal parcels', 'Household items (non-fragile or well packaged)', 'Toys and games (non-hazardous)']],
  ['Food and beverages', ['Prepared food in sealed containers', 'Packaged groceries and provisions', 'Bottled drinks (properly sealed)', 'Cakes and pastries (secure boxes)', 'The customer bears the risk of spoilage within the normal delivery window']],
  ['Electronics and gadgets', ['Phones, tablets and laptops (properly packaged)', 'Accessories, chargers and cables', 'Small electrical appliances and computer peripherals', 'Smart devices and wearables']],
  ['Business and commercial goods', ['Retail products and merchandise', 'Spare parts and components', 'Industrial samples (non-hazardous)', 'Fabric, textiles, stationery and printing supplies']],
  ['Medical and healthcare', ['Over-the-counter medicines (non-controlled)', 'Medical equipment (non-hazardous) and first aid supplies', 'Vitamins and supplements', 'Prescription medicines (sealed and clearly labelled)', 'Controlled substances are strictly prohibited']],
  ['Hardware and tools', ['Hand tools and power tools', 'Building materials (small quantities)', 'Plumbing and electrical fittings', 'Automotive accessories (non-hazardous)']],
  ['Cash and valuables', ['Cash up to ₦10,000 per delivery', 'Jewellery and watches (declared and properly packaged)', 'Declare the true value at booking, up to ₦200,000', 'Undeclared high-value items are not covered']],
];

const PROHIBITED: [string, string][] = [
  ['Dangerous and hazardous materials', 'Explosives, fireworks, ammunition, firearms and weapons of any kind, petrol, kerosene, diesel and chemicals, toxic or corrosive substances, compressed gas cylinders, radioactive materials, biological hazards, flammable aerosols.'],
  ['Illegal items', 'Narcotics and all illicit drugs, counterfeit and pirated goods, stolen property, trafficking-related items, anything banned under Nigerian federal or state law, items under import or export restrictions.'],
  ['Living things', 'Live animals, birds, reptiles or insects, plants carrying pests, unpackaged biological specimens, human remains or body parts.'],
  ['Adult and offensive content', 'Pornographic material, child exploitation material (immediate police referral), hate speech or propaganda, defamatory publications, material inciting violence or terrorism.'],
  ['Controlled substances', 'Prescription medicines without a valid prescription, NAFDAC Schedule I to V drugs, unregistered pharmaceuticals, controlled veterinary medicines, unregistered performance-enhancing drugs.'],
  ['Financial instruments', 'Cash above ₦10,000, uncrossed or bearer cheques, unregistered SIM cards, hardware crypto wallets of unverified source, counterfeit currency, illegally obtained financial instruments.'],
];

const VIOLATIONS: [string, string][] = [
  ['Sending a prohibited item', 'Immediate account suspension and investigation, permanent ban if confirmed, referral to law enforcement'],
  ['Rider knowingly carrying a prohibited item', 'Immediate permanent ban, earnings held pending investigation, referral to law enforcement'],
  ['Not declaring package value', 'Compensation limited to the declared amount, possible account warning'],
  ['Attempting to bypass the delivery code', 'Immediate investigation, Rider Score reduction, suspension or permanent ban'],
  ['Fraudulent claim on a confirmed delivery', 'Permanent ban, possible legal action, referral to the EFCC'],
  ['Sending cash above ₦10,000', 'Account warning, package may be returned, repeat means suspension'],
];

const TOC = [
  'Package Limits',
  'What You Can Send',
  'Fragile Items',
  'What You Cannot Send',
  'Zero Tolerance',
  'Oversized Packages',
  'Protection and Compensation',
  'Rider Responsibilities',
  'Violations and Consequences',
  'Contact and Reporting',
];

function Table({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="legal-table-wrap">
      <table className="legal-table">
        <tbody>
          <tr>
            <th>{head[0]}</th>
            <th>{head[1]}</th>
          </tr>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <td>{a}</td>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PackagePolicyPage() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <span className="badge badge-white">
            <i className="fa-solid fa-box"></i> Legal
          </span>
          <h1 style={{ marginTop: 16 }}>Package Policy</h1>
          <p>
            What can and cannot be sent on the RYDO APP. This policy applies to every customer booking a delivery and
            every RYDO-verified rider carrying a package. Sending a prohibited item is a serious breach of our Terms of
            Service and may lead to permanent suspension and referral to law enforcement.
          </p>
          <div className="legal-meta">
            <span>Version 1.0</span>
            <span>Effective: October 2026</span>
            <span>Next Review: April 2027</span>
            <span>Governing Law: Federal Republic of Nigeria</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="legal-body">
          <div className="legal-toc">
            <div className="legal-toc-title">On this page</div>
            <div className="legal-toc-grid">
              {TOC.map((t, i) => (
                <a key={t} href={`#pk-${i + 1}`}>
                  {i + 1}. {t}
                </a>
              ))}
            </div>
          </div>

          <div className="legal-section" id="pk-1">
            <h2>
              <span className="num">1.</span> Package Limits at a Glance
            </h2>
            <Table head={['Limit', 'Rule']} rows={LIMITS} />
            <p>
              Every RYDO delivery is GPS tracked, confirmed with a one-time delivery code and logged. RYDO may investigate
              any delivery suspected of carrying a prohibited item and cooperates fully with law enforcement agencies.
            </p>
          </div>

          <div className="legal-section" id="pk-2">
            <h2>
              <span className="num">2.</span> What You Can Send
            </h2>
            {PERMITTED.map(([title, items]) => (
              <div key={title}>
                <h3>{title}</h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="legal-section" id="pk-3">
            <h2>
              <span className="num">3.</span> Fragile Items
            </h2>
            <p>Glass, ceramics, artwork, mirrors and other fragile items are allowed, but only if:</p>
            <ol>
              <li>The customer marks the package as fragile when booking</li>
              <li>It is packed with protective material such as bubble wrap, foam or a rigid box</li>
              <li>The customer accepts that RYDO&apos;s liability is limited to the protection compensation cap</li>
            </ol>
            <p>
              RYDO is not liable for damage to fragile items that were not declared as fragile, were not packed properly,
              or cannot withstand normal motorcycle delivery vibrations.
            </p>
          </div>

          <div className="legal-section" id="pk-4">
            <h2>
              <span className="num">4.</span> What You Cannot Send
            </h2>
            <Table head={['Category', 'Examples']} rows={PROHIBITED} />
          </div>

          <div className="legal-section" id="pk-5">
            <h2>
              <span className="num">5.</span> Zero Tolerance
            </h2>
            <div className="legal-callout">
              <p>
                Anyone found sending or carrying the following faces an immediate permanent ban and referral to law
                enforcement. There is no appeal for zero-tolerance violations.
              </p>
            </div>
            <ul>
              <li>Any narcotic, illicit drug or controlled substance</li>
              <li>Firearms, ammunition or explosive devices</li>
              <li>Child exploitation material</li>
              <li>Stolen property</li>
              <li>Counterfeit currency</li>
            </ul>
            <p>RYDO cooperates fully with the NDLEA, EFCC, Nigeria Police Force and all relevant agencies.</p>
          </div>

          <div className="legal-section" id="pk-6">
            <h2>
              <span className="num">6.</span> Oversized Packages
            </h2>
            <p>Girth is length plus twice the width plus twice the height.</p>
            <Table
              head={['Package size', 'How it is booked']}
              rows={[
                ['Standard (up to 10kg and 280cm girth)', 'Book instantly in the app, no surcharge'],
                ['Bulky (over 10kg)', 'Book in the app, ₦500 surcharge added automatically'],
                ['Oversized (over 280cm girth)', 'Freight Quote form, our team replies within 24 hours'],
              ]}
            />
          </div>

          <div className="legal-section" id="pk-7">
            <h2>
              <span className="num">7.</span> Package Protection and Compensation
            </h2>
            <Table
              head={['Declared value', 'Maximum compensation']}
              rows={[
                ['Below ₦100,000', 'Up to ₦20,000 for loss, theft or damage in transit'],
                ['₦100,000 and above', 'Up to ₦50,000 for loss, theft or damage in transit'],
                ['Delivery code confirmed', 'No cover. The delivery code is proof of delivery, so no claim is possible'],
              ]}
            />
            <ul>
              <li>Customers must declare the true value of their package when booking</li>
              <li>Undeclared or under-declared packages are only covered up to the tier maximum</li>
              <li>RYDO shows the compensation cap at booking, and customers must acknowledge it</li>
              <li>Packages worth more than ₦200,000 are not accepted. Use a specialist courier instead</li>
            </ul>
          </div>

          <div className="legal-section" id="pk-8">
            <h2>
              <span className="num">8.</span> Rider Responsibilities
            </h2>
            <ul>
              <li>
                Never knowingly carry a prohibited item. If you suspect one, refuse collection and report it in the app
                or call 08081259375
              </li>
              <li>Riders who had no knowledge of the contents and acted in good faith are protected from liability</li>
              <li>Riders found knowingly carrying prohibited items face a permanent ban and referral to law enforcement</li>
              <li>Never open or tamper with a package. Report damaged, leaking or suspicious packages before continuing</li>
              <li>Always enter the correct delivery code. Completing a delivery without it is a policy violation</li>
            </ul>
          </div>

          <div className="legal-section" id="pk-9">
            <h2>
              <span className="num">9.</span> Violations and Consequences
            </h2>
            <Table head={['Violation', 'Consequence']} rows={VIOLATIONS} />
          </div>

          <div className="legal-section" id="pk-10">
            <h2>
              <span className="num">10.</span> Contact and Reporting
            </h2>
            <p>
              Report a prohibited item in the RYDO APP under <b>Help &amp; Support → Report a problem</b>. If an item is
              in transit and it is an emergency, call <a href="tel:08081259375">08081259375</a> immediately. You can also
              reach us on WhatsApp at 08081259375 or email{' '}
              <a href="mailto:rydosupport@gmail.com">rydosupport@gmail.com</a>.
            </p>
            <p>RYDO DIGITAL SOLUTIONS LTD · RC 9702090 · Port Harcourt, Rivers State</p>
          </div>
        </div>
      </div>
    </div>
  );
}
