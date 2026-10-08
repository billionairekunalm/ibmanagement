// Website Copy Content for IB Management Solution (IB MS)

export interface ModuleFeature {
  title: string;
  role: string;
  promise: string;
  capabilities: string[];
  link: string;
}

export interface PricingPlan {
  name: string;
  priceMonthly: number;
  scansIncluded: string;
  features: string[];
  storage: string;
  whatsapp: string;
  support: string;
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const NAV_LINKS = [
  { label: 'How it Works', href: '/product' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Who It\'s For', href: '/who-its-for' },
  { label: 'Security', href: '/security' },
  { label: 'Switching', href: '/switching' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
];

export const COPY = {
  brandName: 'IB Management Solution',
  brandSecondary: 'IB MS',
  companyName: 'Intellobyte',
  location: 'Pune, India',
  
  hero: {
    tagline: 'Manage your entire CBCT workflow in one place',
    subhead: 'From referrals and scans to radiology reporting, communication, and delivery. One unified operating system connecting technicians, radiologists, owners, and referring dentists in real time.',
    ctaPrimary: 'Book a demo',
    ctaSecondary: 'See pricing',
    proofText: 'Live tracking & analytics for modern maxillofacial imaging centres',
  },

  problems: [
    {
      quote: "“I don't know how many scans went out today without a report.”",
      owner: "CBCT Centre Owner, Pune"
    },
    {
      quote: "“Dr. Kulkarni sent forty cases last quarter and only nine this quarter. I found out three months late.”",
      owner: "Multi-centre Chain Owner, Mumbai"
    },
    {
      quote: "“A dentist calls at 9pm asking where the report is, and I have to call the technician to search Drive.”",
      owner: "Imaging Centre Owner, Nagpur"
    },
    {
      quote: "“My technician left last week and took the WhatsApp group history with him. We lost two years of records.”",
      owner: "OMR Radiologist, Nashik"
    }
  ],

  caseJourney: [
    { step: 1, title: 'Referral Raised', role: 'Referring Dentist', desc: 'Dentist raises a case via mobile app or WhatsApp link in under 60 seconds.' },
    { step: 2, title: 'Patient Intake', role: 'Technician', desc: 'Patient arrives. Referral info auto-populates; patient details and exposure metrics are verified.' },
    { step: 3, title: 'Scan QC & Upload', role: 'Technician', desc: 'Scan captured, checked, and uploaded directly to the DICOM cloud. TAT timer begins.' },
    { step: 4, title: 'Worklist Queue', role: 'Radiologist', desc: 'Case lands in the reporting queue, prioritized by urgency and target turnaround.' },
    { step: 5, title: 'Structured Report', role: 'Radiologist', desc: 'Radiologist reviews volume in local viewer, completes structured template, and digitally signs.' },
    { step: 6, title: 'Instant Delivery', role: 'System', desc: 'Signed report and web-viewer link are delivered to the dentist on WhatsApp & SMS instantly.' },
    { step: 7, title: 'Billing & Reconciliation', role: 'Admin / Owner', desc: 'Fees, radiologist payouts, and referral credits are calculated and recorded automatically.' }
  ],

  modules: {
    technician: {
      title: 'Technician Dashboard',
      role: 'Technician',
      promise: 'Get the scan out, correctly, without asking anyone anything.',
      capabilities: [
        'Pre-filled patient intake from dentist referrals, preventing manual entry typos.',
        'Structured exposure & quality checklist to ensure scan quality before the patient leaves.',
        'High-speed DICOM uploader with automated retry and resume on weak connectivity.'
      ],
      link: '/product/technician'
    },
    radiologist: {
      title: 'Radiologist Worklist',
      role: 'Radiologist',
      promise: 'A dedicated worklist, not a cluttered Google Drive folder.',
      capabilities: [
        'Worklist prioritized automatically by case target turnaround time (TAT).',
        'Built-in structured maxillofacial templates (TMJ, implant, impactions, sinus).',
        'One-click sign-off with automatic digital signature and version-controlled reports.'
      ],
      link: '/product/radiologist'
    },
    admin: {
      title: 'Owner & Admin Panel',
      role: 'Centre Owner / Admin',
      promise: 'Know exactly what is happening in your centre without calling anyone.',
      capabilities: [
        'Real-time operations board showing pending, scanning, and signed cases with TAT timers.',
        'Referral analytics mapping case counts per doctor to detect drops in referral rates instantly.',
        'Automated billing, radiologist payout tracking, and GST-compliant invoice generation.'
      ],
      link: '/product/admin'
    },
    dentistApp: {
      title: 'Dentist Mobile App',
      role: 'Referring Dentist',
      promise: 'The core reason dentists keep referring to your centre.',
      capabilities: [
        'Refer patients in 3 taps, eliminating paper forms and prescription slip loss.',
        'Receive immediate notifications when the report is ready, with direct mobile-friendly viewer links.',
        'Access full patient referral history and invoice receipts securely on their phone.'
      ],
      link: '/product/dentist-app'
    }
  },

  referralGrowth: {
    title: 'Your referring dentists are your actual sales channel.',
    subtitle: 'Stop losing referrals to opaque tracking. IB Management Solution makes you the easiest centre to work with.',
    bullets: [
      'Automatic status tracking prevents dentist calls asking "where is the report?".',
      'Direct WhatsApp report delivery sends PDF and interactive scan links directly to their chat.',
      'Referral trends alert you when a high-referring dentist drops volume, allowing immediate relationship outreach.',
      'Zero cost to add referring dentists to your network—expand your reach infinitely.'
    ]
  },

  compatibility: {
    title: 'Works with your existing CBCT machines.',
    subtitle: 'No need to replace your acquisition software. We hook directly into your local storage to capture and sync DICOM outputs.',
    brands: [
      { name: 'Planmeca Romexis compatible', description: 'Tested and verified with Romexis acquisition nodes.' },
      { name: 'Carestream CS units', description: 'Supports standard DICOM export configurations.' },
      { name: 'Vatech CBCT systems', description: 'Auto-ingestion from standard watch folders.' },
      { name: 'Dentsply Sirona', description: 'Fully integrates with Sidexis DICOM files.' }
    ]
  },

  onboarding: {
    title: 'We migrate your centre off WhatsApp and Drive in 7 days.',
    subtitle: 'Moving software shouldn\'t stop your scans. We handle the migration, train your technicians, and support you live.',
    steps: [
      { title: 'Data Migration', desc: 'We export your past dentist contacts, patient lists, and archives, and load them into IB MS.' },
      { title: 'Hardware Setup', desc: 'We configure the local DICOM listener node on your acquisition computers.' },
      { title: 'Staff Training', desc: '30-minute onsite or remote walkthrough for your technicians, admins, and radiologists.' },
      { title: 'Go-Live Guard', desc: 'Our support team monitors your cases live for the first 3 days of operation.' }
    ]
  },

  pricing: {
    title: 'Transparent pricing. Built for scan volume, not headcounts.',
    subtitle: 'Indian imaging centres operate with shifting shifts and rotating staff. We charge by scan volume, not by user seats. Add unlimited technicians, radiologists, and dentists.',
    plans: [
      {
        name: 'Starter',
        priceMonthly: 4999,
        scansIncluded: 'up to 150 scans/mo',
        features: [
          'Technician & Admin dashboards',
          'Radiologist worklist & digital sign-off',
          'Referring Dentist mobile app access',
          'Basic referral analytics dashboard',
          'Standard database backup & storage encryption'
        ],
        storage: '250 GB Cloud Storage included',
        whatsapp: '500 WhatsApp reports/mo',
        support: 'Email support (Next Business Day)'
      },
      {
        name: 'Growth',
        priceMonthly: 9999,
        scansIncluded: 'up to 500 scans/mo',
        features: [
          'Technician & Admin dashboards',
          'Radiologist worklist & digital sign-off',
          'Referring Dentist mobile app access',
          'Full referral trend analytics',
          'Automated WhatsApp notifications for patients & doctors',
          'Priority DICOM upload node optimization'
        ],
        storage: '1 TB Cloud Storage included',
        whatsapp: '2,000 WhatsApp reports/mo',
        support: 'Priority Phone & WhatsApp Support',
        isPopular: true
      },
      {
        name: 'Multi-Centre',
        priceMonthly: 24999,
        scansIncluded: 'Custom scan volumes',
        features: [
          'All features in Growth plan',
          'Multi-location dashboard with role permissions',
          'Branded, white-label Dentist App (Custom logo & domain)',
          'Cross-centre referral reporting',
          'Tally / accounting package integrations',
          'Dedicated sandbox database instance'
        ],
        storage: 'Custom / Dedicated storage options',
        whatsapp: 'Pooled WhatsApp messages',
        support: 'Dedicated Account Manager & 24/7 Phone SLA'
      }
    ],
    annualSaving: 'Two months free on annual plans',
    onboardingFee: 5000,
    onboardingSlogan: '₹5,000 one-time setup fee (Waived on annual billing)',
    rules: [
      'No Annual Maintenance Charges (No AMC).',
      'No per-user licensing fees.',
      'No charge to register new referring dentists.'
    ],
    tco: {
      title: 'The Real Cost: WhatsApp & Drive vs. IB MS',
      subtitle: 'Compare the annual costs of manual coordination versus an integrated operating system for a single busy centre.',
      manual: [
        { label: 'Lost scans / Unbilled cases (estimated 1.5%)', cost: '₹45,000' },
        { label: 'Part-time WhatsApp/Drive coordinator salary', cost: '₹1,20,000' },
        { label: 'Google Drive additional storage licenses', cost: '₹14,400' },
        { label: 'Time spent by radiologists finding scans (50 hrs)', cost: '₹50,000' },
        { total: true, label: 'Estimated Manual Cost', cost: '₹2,29,400 / yr' }
      ],
      ibms: [
        { label: 'IB MS Growth Subscription (Annualized)', cost: '₹99,990' },
        { label: 'Onboarding & staff training setup fee', cost: '₹0' },
        { label: 'Lost cases or unbilled reports', cost: '₹0 (Prevented by auto-reconciliation)' },
        { label: 'Coordinator cost', cost: '₹0 (Fully automated workflow)' },
        { total: true, label: 'IB MS Annual Cost', cost: '₹99,990 / yr' }
      ],
      saving: 'Annual Net Savings: ~₹1,29,410 + peace of mind'
    }
  },

  faqs: [
    {
      question: 'Does this software replace my CBCT acquisition software (e.g. Romexis)?',
      answer: 'No. You will continue to capture scans using your machine’s native acquisition software. Once captured, IB MS monitors the export folder, extracts the DICOM headers, and uploads the scan to the cloud server automatically.'
    },
    {
      question: 'Can we use our own on-call radiologists, or do you provide them?',
      answer: 'You use your own radiologists. You create accounts for them, and they receive their reporting worklists in their own secure dashboard. (Optional radiologist pool integration is on our future roadmap).'
    },
    {
      question: 'What happens to our upload queue if the internet connection is unstable?',
      answer: 'Our local technician sync tool caches files locally and uploads them in chunks. If the connection drops mid-upload, it pauses and automatically resumes once connectivity is restored, without losing data.'
    },
    {
      question: 'Who owns the patient data and DICOM scans?',
      answer: 'Your centre owns all database records and DICOM data. We only host and transmit it. If you ever decide to leave IB MS, we provide a full database backup and export service with zero retention.'
    },
    {
      question: 'Do you charge extra for adding referring dentists to the app?',
      answer: 'No. Registration of referring dentists is completely free. We encourage you to sign up every dentist in your local network, as this acts as your primary growth and retention channel.'
    },
    {
      question: 'Is patient data secure and compliant with Indian regulations?',
      answer: 'Yes. IB MS runs on secured, Indian-localized cloud servers (AWS/Supabase Mumbai region) to comply with data residency requirements. It is built to conform with India\'s Digital Personal Data Protection (DPDP) Act, including patient consent logging and full audit trails.'
    },
    {
      question: 'Is GST charged extra on the subscription plans?',
      answer: 'Yes, standard GST of 18% is applicable to the subscription amounts. Invoices are GST-compliant so you can claim input tax credits.'
    },
    {
      question: 'How do you prevent staff from accessing patient records from outside the centre?',
      answer: 'Admins can enforce strict IP-restriction rules, ensuring the technician dashboard can only be accessed from the centre’s physical network, while radiologists and owners can access their dashboards securely with two-factor authentication.'
    }
  ],

  demoForm: {
    title: 'Book a 20-minute product demonstration.',
    subtitle: 'See how IB MS operates in real time. We will do a screen-share walkthrough on a setup mirroring your exact centre configuration.',
    bullets: [
      'A 20-minute screen-share on Zoom/Teams.',
      'Demonstration of technician upload and radiologist worklists.',
      'A customized commercial quotation delivered to your WhatsApp same-day.'
    ],
    fields: {
      name: 'Your Name',
      centreName: 'Centre Name',
      city: 'City',
      phone: 'WhatsApp-enabled Mobile Number',
      scansBand: 'Estimated Scans per Month',
      centresCount: 'Number of Active Centres',
      submitBtn: 'Book Demo'
    },
    successMessage: 'Demo request received! Our technical representative will contact you via WhatsApp within 2 hours to coordinate the calendar invitation.',
    whatsappCta: 'Prefer text? Start chat on WhatsApp',
    whatsappPrefill: 'Hi, I run a CBCT centre and want a demo/quote for IB Management Solution.'
  },

  contact: {
    title: 'Get in touch with sales & support.',
    subtitle: 'Have a technical question about your CBCT compatibility? Contact our Pune office.',
    email: 'sales@intellobyte.in',
    supportEmail: 'support@intellobyte.in',
    phone: '+91 76665 96339', // Matches updated contact number
    address: 'Intellobyte, 4th Floor, Tech Centre, Kothrud, Pune, Maharashtra 411038',
    whatsappNumber: '+917666596339'
  }
};
