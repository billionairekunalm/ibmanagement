import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
      <h1 className="text-xl md:text-2xl font-bold font-mono text-dicom-bone border-b border-dicom-border pb-3">
        Terms of Service
      </h1>
      
      <p className="text-[11px] font-mono text-neutral-500">Last updated: 27/08/2026</p>

      <p>
        These Terms of Service govern your use of the IB Management Solution ("IB MS") software platform provided by Intellobyte. By subscribing to or utilizing our dashboards, you agree to comply with these terms.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">1. Subscription Plans & Scan Volume Bands</h3>
      <p>
        Subscriptions are billed on a monthly or annual cycle based on your selected scan volume band (Starter, Growth, Multi-centre). 
      </p>
      <ul className="list-disc pl-6 space-y-1.5">
        <li><strong>Unlimited User logins:</strong> We do not charge per-user fees. You may add unlimited technicians, administrators, and referring dentists to your workspace.</li>
        <li><strong>Overages:</strong> If you exceed your monthly scan quota, an overage fee of ₹50 per scan applies, or you can request to transition to a higher plan mid-cycle.</li>
        <li><strong>Payment:</strong> Invoices are raised on the 1st of each month and include 18% GST. Subscription fees are payable via UPI, NEFT, or net banking.</li>
      </ul>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">2. Data Ownership & Clinical Responsibility</h3>
      <p>
        The imaging centre retains sole ownership of all patient data, database tables, and DICOM voxel files processed by IB MS. Intellobyte provides transmission and cloud archiving services only. 
      </p>
      <p>
        Diagnostic reporting and report sign-offs are the sole responsibility of the registered radiologist and imaging centre. Intellobyte assumes no liability for diagnostic misinterpretations or radiological report inaccuracies.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">3. Termination & Data Portability</h3>
      <p>
        Subscriptions are cancelable at any time without penalty. Upon termination, we provide a complete database dump and file archive export service with zero retention within 30 days of subscription cessation.
      </p>
    </div>
  );
};
export default Terms;
