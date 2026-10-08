import React from 'react';
import { ShieldCheck, HardDrive, Lock, FileKey2 } from 'lucide-react';
import DicomSlice from '../components/DicomSlice';

export const Security: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Compliance
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          DPDP Posture & Clinical Data Security
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          Dental imaging data is protected health information. IB Management Solution is designed to meet strict Indian digital privacy mandates while keeping clinical workflows fluid.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Security Details */}
        <div className="lg:col-span-7 space-y-6 font-sans">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-accent-amber font-bold flex items-center gap-1.5">
                <HardDrive className="w-4 h-4" /> LOCAL INDIAN CLOUD
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                To comply with the Digital Personal Data Protection (DPDP) Act residency rules, all patient metadata and DICOM archives are hosted in the AWS / Supabase Mumbai region. No data is stored outside Indian borders.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-accent-amber font-bold flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> AES-256 ENCRYPTION
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                DICOM file slices and database records are encrypted at rest using AES-256 keys. All network transmissions—from technician upload to dentist viewer—use TLS 1.3 tunnels.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-accent-amber font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> AUDIT LOGGER
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Every technician capture, radiologist report draft, digital signature sign-off, and dentist file download writes an immutable record to the system log containing user credentials, time, and IP address.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-mono text-xs text-accent-amber font-bold flex items-center gap-1.5">
                <FileKey2 className="w-4 h-4" /> ACCESS CONTROLS
              </span>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                Technician consoles can be IP-restricted to prevent logins outside the centre\'s physical network. Owners and radiologists log in securely with multi-factor authentication (MFA) parameters.
              </p>
            </div>
          </div>

          <div className="bg-dicom-dark border border-dicom-border p-4 rounded text-xs font-mono">
            <div className="text-accent-amber font-bold uppercase mb-1">DPDP Act Compliance Posture</div>
            <p className="text-[10px] text-neutral-400 leading-normal">
              We capture explicit digital consent logs during patient intake, enforce role-based record hiding for unauthorized staff, and provide patient data-erasure (Right to be Forgotten) logs upon written request.
            </p>
          </div>
        </div>

        {/* Visual Decoration */}
        <div className="lg:col-span-5 flex justify-center">
          <DicomSlice />
        </div>
      </div>

    </div>
  );
};
export default Security;
