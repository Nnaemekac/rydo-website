export const COMPANY = {
  name: 'RYDO Digital Solutions Ltd',
  tagline: 'Innovative Tech. Better Solutions.',
  phone: '08081259375',
  phoneIntl: '+2348081259375',
  whatsapp: 'https://wa.me/2348081259375',
  email: 'rydosupport@gmail.com',
  website: 'www.rydo.tech',
  office: 'Port Harcourt, Rivers State, Nigeria',
};

export const COMPANY_NAV = [
  { href: '#work', label: 'Our work' },
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#sectors', label: 'Sectors' },
  { href: '#process', label: 'How we work' },
  { href: '#why', label: 'Why RYDO' },
];

export const WORK = [
  {
    name: 'RYDO App',
    client: 'Our own product',
    role: 'Product design, mobile and web build, hosting, support',
    kind: 'Mobile app and delivery platform',
    desc: 'Our own product. Customers book verified riders, track every delivery live and pay in the app, while our team runs it all from one dashboard.',
    image: '/images/work-rydo.jpg',
    href: '/app',
    cta: 'See the RYDO App',
    tags: ['Mobile app', 'Live tracking', 'Payments', 'Staff dashboard'],
  },
  {
    name: 'AJATE Journal',
    client: 'Department of Economics, University of Port Harcourt',
    role: 'Website, editorial system, email setup',
    kind: 'Academic publishing platform',
    desc: 'Website and editorial system for the Department of Economics, University of Port Harcourt, with online submissions and an editor dashboard.',
    image: '/images/work-ajate.jpg',
    href: 'https://ajate.org',
    cta: 'Visit ajate.org',
    tags: ['Website', 'Online submissions', 'Editor dashboard'],
  },
  {
    name: 'SIMAS Water',
    client: 'SIMAS Water, Port Harcourt',
    role: 'Business system, desktop app, offline mode',
    kind: 'Smart water management system',
    desc: 'Sales, production, inventory, dispatch and reports for a water business, built to keep working even offline.',
    image: '/images/work-simas.jpg',
    href: null,
    cta: null,
    tags: ['Business system', 'Works offline', 'Reports'],
  },
];

export const SERVICES = [
  {
    icon: 'fa-code',
    title: 'Software development',
    items: ['Custom software', 'Mobile and web applications', 'Enterprise software', 'Business management systems', 'Database development and integration'],
  },
  {
    icon: 'fa-globe',
    title: 'Website solutions',
    items: ['Corporate websites', 'E-commerce platforms', 'Government portals', 'Online booking platforms', 'Payment-enabled websites', 'Hosting and maintenance'],
  },
  {
    icon: 'fa-shield-halved',
    title: 'Cybersecurity solutions',
    items: ['Vulnerability assessments', 'Penetration testing', 'Network security assessments', 'Website security audits', 'Consultancy and data protection advisory', 'Security incident response'],
  },
  {
    icon: 'fa-server',
    title: 'IT infrastructure',
    items: ['Network installation', 'Server configuration', 'Cloud infrastructure', 'Data storage solutions', 'CCTV integration', 'Equipment deployment and technical maintenance'],
  },
  {
    icon: 'fa-cloud',
    title: 'Cloud and systems integration',
    items: ['Cloud migration and hosting management', 'Business email solutions', 'API integration', 'Payment gateway integration', 'SMS notification integration', 'Database management'],
  },
  {
    icon: 'fa-compass-drafting',
    title: 'Enterprise technology consultancy',
    items: ['IT strategy', 'Digital transformation', 'Technology procurement advisory', 'IT project management', 'Systems implementation', 'Technical documentation'],
  },
];

export const SUITE = [
  { icon: 'fa-briefcase', name: 'BusinessSuite', desc: 'Business management software.' },
  { icon: 'fa-graduation-cap', name: 'SchoolSuite', desc: 'School management platform.' },
  { icon: 'fa-heart-pulse', name: 'HealthSuite', desc: 'Healthcare management platform.' },
  { icon: 'fa-lock', name: 'Secure', desc: 'Cybersecurity solutions.' },
  { icon: 'fa-cloud-arrow-up', name: 'Cloud', desc: 'Cloud infrastructure and management.' },
  { icon: 'fa-boxes-stacked', name: 'Inventory', desc: 'Inventory and stock management.' },
];

export const SECTORS = [
  { icon: 'fa-landmark-flag', name: 'Government', desc: 'Digital portals, workflow automation and database systems' },
  { icon: 'fa-graduation-cap', name: 'Education', desc: 'School management and e-learning systems' },
  { icon: 'fa-stethoscope', name: 'Healthcare', desc: 'Hospital management and digital records systems' },
  { icon: 'fa-building-columns', name: 'Banking', desc: 'Cybersecurity and systems integration' },
  { icon: 'fa-oil-well', name: 'Oil and gas', desc: 'IT infrastructure and cybersecurity' },
  { icon: 'fa-store', name: 'SMEs', desc: 'Websites, business software and cloud services' },
  { icon: 'fa-hand-holding-heart', name: 'NGOs', desc: 'Data management and reporting platforms' },
];

export const STEPS = [
  { icon: 'fa-magnifying-glass', name: 'Assess', desc: 'Understand the need' },
  { icon: 'fa-clipboard-list', name: 'Plan', desc: 'Scope, budget, timeline' },
  { icon: 'fa-code', name: 'Develop', desc: 'Build and configure' },
  { icon: 'fa-vial-circle-check', name: 'Test', desc: 'Verified before release' },
  { icon: 'fa-rocket', name: 'Deploy', desc: 'Launch and hand over' },
  { icon: 'fa-headset', name: 'Support', desc: 'Ongoing maintenance' },
];

export const PLANS = [
  { name: 'Basic', for: 'Individuals and small businesses', desc: 'Affordable fixed pricing.' },
  { name: 'Professional', for: 'SMEs and growing businesses', desc: 'Customised packages.' },
  { name: 'Enterprise', for: 'Government and large organisations', desc: 'Negotiated project contracts, priced after we assess your requirements.' },
];

export const BENEFITS = [
  { title: 'Innovative solutions', desc: 'We build and run our own products, so the ideas we bring to yours are already tested.' },
  { title: 'Reliable and secure services', desc: 'Security is planned into every build from the start, not added at the end.' },
  { title: 'Professional expertise', desc: 'Design, engineering and project management in one team, from first idea to launch.' },
  { title: 'Customer-focused support', desc: 'We stay after launch with maintenance, fixes and a team you can reach.' },
];

export const CLIENTS = [
  'Government institutions',
  'Corporate organisations',
  'SMEs and startups',
  'Educational institutions',
  'NGOs and development organisations',
  'Individuals and entrepreneurs',
];

export const TEAM = [
  { name: 'Ikiriko Prosper Pepple', role: 'Founder and CEO', image: '/images/team-prosper.jpg' },
  { name: 'Dr. Moses Owede Vincent', role: 'Chief Operating Officer', image: '/images/team-moses.jpg' },
  { name: 'Nnaemeka Chimezie', role: 'Chief Technology Officer', image: '/images/team-nnaemeka.jpg' },
];
