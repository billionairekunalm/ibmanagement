import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
      <h1 className="text-xl md:text-2xl font-bold font-mono text-dicom-bone border-b border-dicom-border pb-3">
        Privacy Policy
      </h1>
      
      <p className="text-[11px] font-mono text-neutral-500">Last updated: 27/08/2026</p>

      <p>
        At Intellobyte ("we", "our", or "us"), we are committed to protecting the privacy of clinical data processed through the IB Management Solution ("IB MS") platform. This Privacy Policy details our practices regarding the collection, transmission, storage, and processing of patient metadata and DICOM imaging scans.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">1. Data Categories Collected</h3>
      <p>
        The platform collects the following categories of information on behalf of the subscriber (the CBCT imaging centre):
      </p>
      <ul className="list-disc pl-6 space-y-1.5">
        <li><strong>Patient Metadata:</strong> Name, age, gender, and contact phone number.</li>
        <li><strong>Clinical Info:</strong> Referring dentist, clinical symptoms, and targeted maxillofacial scan sectors.</li>
        <li><strong>Imaging Records:</strong> Volumetric DICOM files (CBCT volumes), OPG panoramic scans, and digital report PDFs signed by OMR specialists.</li>
        <li><strong>System Telemetry:</strong> Logins, durations, capture check-lists, and audit trails logged by technicians, admins, and radiologists.</li>
      </ul>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">2. Digital Personal Data Protection (DPDP) Act Compliance</h3>
      <p>
        In accordance with the Indian Digital Personal Data Protection (DPDP) Act of 2023:
      </p>
      <ul className="list-disc pl-6 space-y-1.5">
        <li><strong>Data Localisation:</strong> All personal data, patient rosters, and DICOM slice assets are hosted exclusively in AWS and Supabase data centres in the Mumbai, India region. No clinical data crosses Indian border lines.</li>
        <li><strong>Consent Logs:</strong> The technician dashboard includes mandatory consent checks verifying that patient permission was acquired before scanning and uploading.</li>
        <li><strong>Right to Erasure:</strong> Patients and referring dentists can request complete record erasure from the database, which we execute upon written request from the centre owner.</li>
      </ul>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">3. Storage & Encryption Security</h3>
      <p>
        All DICOM volumes and personal details are encrypted at rest using AES-256 standards. Active network transmission protocols utilize secure TLS 1.3 channels. IP-restrictions are available to lock technician access to physical centre networks.
      </p>

      <h3 className="font-mono font-bold text-dicom-bone text-xs uppercase tracking-wider mt-6 mb-2">4. Contact Information</h3>
      <p>
        For query details or grievance requests, please contact our data officer at <a href="mailto:support@intellobyte.in" className="text-accent-amber hover:underline">support@intellobyte.in</a>.
      </p>
    </div>
  );
};
export default Privacy;
