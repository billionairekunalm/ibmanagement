export interface BlogPost {
  title: string;
  slug: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'What a CBCT Centre Actually Costs to Run: An Owner’s P&L Breakdown',
    slug: 'cbct-centre-cost-analysis',
    summary: 'A detailed look at capital expenditure, operational overheads, hidden leakages, and why managing referrals determines whether your ₹60 lakh machine turns a profit.',
    date: '14/08/2026',
    author: 'Dr. Akash Kadam, Radiologist',
    readTime: '6 min read',
    category: 'Finance & Operations',
    contentHtml: `
      <p>Purchasing a Cone Beam Computed Tomography (CBCT) unit is one of the largest capital investments a dentist or maxillofacial radiologist can make. With machine costs ranging from ₹40 lakh to upwards of ₹80 lakh in India, the pressure to reach break-even is immense.</p>
      
      <p>However, many new owners focus entirely on the machine EMI, neglecting the monthly operational leakages that erode margins. In this guide, we break down the real P&L of running a CBCT centre in Maharashtra and outline where the leaks happen.</p>

      <h3>1. Capital Expenditure (CapEx) vs. Operational Expenditure (OpEx)</h3>
      <p>The upfront cost of the machine is only the starting point. Let's look at the baseline numbers:</p>
      <ul>
        <li><strong>Machine Depreciation/EMI:</strong> A ₹60,000,000 CBCT unit financed over 5 years results in an EMI of approximately ₹1,20,000 per month.</li>
        <li><strong>AEC License & AERB Approvals:</strong> While mostly a one-time process, licensing, radiation safety testing, and structural lead shielding add ₹1,50,000 to ₹3,00,000 in setup costs.</li>
        <li><strong>Staffing:</strong> A qualified technician (₹25,000 - ₹35,000), a front-desk coordinator (₹15,000 - ₹20,000), and reporting radiologist fees (pay-per-report or retainer of ₹40,000 - ₹75,000).</li>
        <li><strong>Electricity & AC:</strong> High-voltage imaging units and constant cooling for sensors cost ₹15,000 - ₹20,000 monthly.</li>
      </ul>

      <h3>2. The Leakage You Aren't Measuring: WhatsApp and Drive</h3>
      <p>Most centres process between 200 and 500 scans a month. Let’s calculate what happens when you run this volume on manual tools like WhatsApp groups and Google Drive:</p>
      
      <h4>A. Lost Billing (1.5% - 3%)</h4>
      <p>A patient is scanned, the technician sends the raw slices to the radiologist over Drive, the radiologist writes the report, and it is emailed to the dentist. In the rush, the front-desk fails to record the payment. If just 4 scans a month slip past without reconciliation, that is <strong>₹12,000 in lost revenue monthly</strong>.</p>

      <h4>B. Time Leakage in Reporting</h4>
      <p>Every time a radiologist has to search WhatsApp for a patient's clinical history, download files from a broken Drive link, and open a local word processor, they lose 10-15 minutes per case. For 300 cases, this totals <strong>50 hours of lost clinical time</strong> every month.</p>

      <h4>C. Churning Referrals</h4>
      <p>A dentist stops referring because their reports arrive late, or because they had to call twice to get a download link. A single referring doctor sending 10 scans a month represents ₹30,000 in monthly revenue. Losing them because of communication breakdowns is the single greatest risk to your P&L.</p>

      <h3>3. Moving to a System of Record</h3>
      <p>To make a ₹60 lakh machine profitable, operations must run like an assembly line. Technicians should only focus on scan capture and QC; radiologists on interpreting volumes; and owners on analyzing which referral channels are growing and which have gone quiet. Operating systems like IB MS replace fragmented chats with a single system of record, eliminating leakages and securing the referral loop.</p>
    `
  },
  {
    title: 'How to Grow Your Referring Dentist Base: The Speed-and-Viewer Strategy',
    slug: 'grow-referring-dentist-base',
    summary: 'Why competing on report prices is a race to the bottom, and how optimizing report turnaround time (TAT) and mobile-friendly scan delivery secures loyal dental accounts.',
    date: '02/08/2026',
    author: 'Kunal Patil, Intellobyte Product Team',
    readTime: '5 min read',
    category: 'Growth & Marketing',
    contentHtml: `
      <p>If you run a dental imaging centre, your referring dentists are your sales representatives. They decide where the patient goes. Therefore, your product is not just the CBCT scan—it is the reporting and delivery experience you provide to the referring dentist.</p>

      <p>Most centre owners try to win referrals by discounting scan prices (e.g., offering a full arch CBCT at ₹2,500 instead of ₹3,000). This is a race to the bottom. In this article, we explain how to build a moat around your referral base using two levers: speed and accessibility.</p>

      <h3>1. Turnaround Time (TAT) is the Ultimate Retention Metric</h3>
      <p>A dentist referring an implant case or planning a complex third-molar extraction needs the report quickly to schedule the treatment. If your centre takes 24 hours to deliver a report, the dentist is stalled.</p>
      
      <p>If you can cut that turnaround time to under 4 hours, you solve their scheduling problem. This requires a live radiologist queue. Instead of radiologists checking a shared Drive folder twice a day, cases must automatically populate their worklist by order of priority. Real-time dashboards warn admins when a case is approaching its target limit, preventing breaches.</p>

      <h3>2. The Friction of "Google Drive Links"</h3>
      <p>Let's look at what a dentist goes through to view a scan you shared:</p>
      <ol>
        <li>They open their email or WhatsApp on their mobile phone.</li>
        <li>They tap a Google Drive link, which prompts them to log in or request access.</li>
        <li>They download a 200MB zip file containing DICOM slices.</li>
        <li>They realize they cannot open DICOM files on their phone, so they transfer the zip file to their clinic desktop.</li>
        <li>They extract it and open it in a third-party viewer.</li>
      </ol>
      <p>This is too much friction. Most busy dentists will simply read the text report and ignore the 3D volume, losing the value of the CBCT.</p>

      <h3>3. The Modern Solution: Zero-Install Mobile Viewing</h3>
      <p>To stand out, give dentists their reports and a simplified, mobile-friendly interactive viewer link directly in a dedicated app or via automated WhatsApp. When the dentist gets a notification, they tap once and see the slice images, crosshairs, and report summary on their phone instantly. No logins, no zip files.</p>

      <p>By removing friction, you become the default choice for their next referral. Software is no longer just an administrative cost; it is your primary tool for dentist retention.</p>
    `
  },
  {
    title: 'Choosing Software for a Dental Imaging Centre: LIS vs. CBCT-Specific platforms',
    slug: 'choosing-cbct-software',
    summary: 'A critical comparison of generic pathology software (LIS) and specialized CBCT operating systems. Understand the differences in licensing, volumes, and workflow.',
    date: '20/07/2026',
    author: 'Pranav Shah, Intellobyte CTO',
    readTime: '7 min read',
    category: 'Technology Selection',
    contentHtml: `
      <p>When selecting software for a new imaging centre, owners often look at generic laboratory information systems (LIS) or hospital software. Since these platforms are widely available, they seem like a safe choice. But they fail when confronted with dental CBCT workflows.</p>

      <p>Let’s compare generic LIS software against a dedicated CBCT operating system (like IB Management Solution) across four major criteria.</p>

      <h3>1. The Data Type: DICOM vs. Text Results</h3>
      <p>A pathology lab software handles alphanumeric strings (e.g., Hemoglobin: 14.2 g/dL). It is designed to store tiny text files. A CBCT scan generates a DICOM volume that is often 150MB to 500MB in size.</p>
      <p>Generic LIS software cannot ingest, parse, or stream DICOM metadata. They force you to upload the scan to a separate cloud storage like Dropbox and paste the link. A CBCT-specific platform includes a native DICOM sync listener that uploads directly, extracts exposure parameters, and opens the scan volume in a reporting viewer.</p>

      <h3>2. The Core Relationship: Doctor vs. Walk-in Patient</h3>
      <p>Pathology labs rely heavily on walk-in patients. Their software focuses on billing the patient directly and printing a barcode label. In a dental CBCT centre, <strong>95% of patients are referred by external dentists</strong>.</p>
      <p>This means your customer is the referring dentist. Your software must track:
      <ul>
        <li>Who referred this patient?</li>
        <li>What are their clinical preferences (e.g. they prefer axial slices printed, or want implant planning notes)?</li>
        <li>Which dentist accounts are growing, and which are declining?</li>
      </ul>
      <p>A generic LIS does not have referral analytics or a portal for dentists to track their history. A CBCT operating system places the dentist at the centre of the database.</p>

      <h3>3. Licensing: Per-User Fees vs. Scan Volume Bands</h3>
      <p>Most corporate SaaS software charges "per user login". For a centre with rotating technicians, receptionist staff, multiple radiologists, and dozens of dentists, per-user pricing makes the platform prohibitively expensive and leads to staff sharing passwords, compromising security.</p>
      
      <p>CBCT-specific platforms understand that imaging volume is the true measure of your business size. By charging on monthly scan bands with unlimited logins, the platform encourages collaboration across all roles (technician, radiologist, and receptionist) without inflating costs.</p>
      
      <h3>Summary Checklist</h3>
      <p>Choose a generic LIS if you are a multi-specialty blood lab. But if your primary business is dental imaging (CBCT, OPG, Cephalometric scans), choose a platform designed specifically to handle 3D volumes, radiologists, and dentist referral channels.</p>
    `
  }
];
export const CATEGORIES = ['All', 'Finance & Operations', 'Growth & Marketing', 'Technology Selection'];
