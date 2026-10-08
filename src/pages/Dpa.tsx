import React from 'react';

export const Dpa: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
      <h1 className="text-xl md:text-2xl font-bold font-mono text-dicom-bone border-b border-dicom-border pb-3">
        Data Processing Addendum (DPA)
      </h1>
      
      <p className="text-[11px] font-mono text-neutral-500">Last updated: 27/08/2026</p>

      <p>
        This Data Processing Addendum ("DPA") supplements the Terms of Service. It applies to the processing of patient personal data and DICOM imaging records through the IB Management Solution platform.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">1. Scope and Roles</h3>
      <p>
        The subscribing CBCT imaging centre acts as the **Data Controller** (determining the purpose of patient scans and diagnostics). Intellobyte acts as the **Data Processor** (storing, syncing, and delivering files based on instructions from the Controller).
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">2. Processing Guidelines</h3>
      <p>
        We process patient personal details and DICOM images only to deliver the workflow dashboard services, upload links, and PDF reporting features. We never utilize patient data for marketing, profiling, or research purposes unless explicitly directed by the Data Controller with proof of patient consent.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">3. Sub-Processors</h3>
      <p>
        We use cloud storage infrastructure providers (such as AWS and Supabase data nodes localized in Mumbai, India) to store files and host metadata. All sub-processors are bound by strict clinical security and local data residency terms.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">4. Incident Response</h3>
      <p>
        In the event of a security breach affecting subscriber data, we notify the centre administrator within 24 hours of confirmation and assist fully with reporting to regulatory bodies.
      </p>
    </div>
  );
};
export default Dpa;
