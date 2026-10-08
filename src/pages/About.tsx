import React from 'react';
import { Building, ShieldCheck, HeartPulse } from 'lucide-react';
import { COPY } from '../content/copy';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Company
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          Why we built {COPY.brandName}
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          Based in Pune, Intellobyte designs software specifically targeted at maxillofacial imaging centres.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 font-sans text-xs md:text-sm text-neutral-400 leading-relaxed">
        <p>
          Before building {COPY.brandName}, our team observed the inner workings of dental diagnostic clinics in Maharashtra. We stood in scan rooms at 6 PM, witnessing technicians rushing between capture nodes, receptionists copy-pasting Drive links, and owners trying to reconcile payouts by scrolling through WhatsApp history.
        </p>
        
        <p>
          We realized that while there are dozens of software solutions for dental practices (like patient records and scheduling) and teleradiology service groups, <strong>there was nothing designed to run the operations of the scan centre itself</strong>.
        </p>

        <p>
          Generic pathology software does not understand 3D CBCT voxel directories, and dental clinic software ignores the multi-party loop connecting the technician, OMR radiologist, and referring dentist.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 font-mono text-xs">
          <div className="bg-dicom-dark border border-dicom-border p-4 rounded space-y-1">
            <Building className="w-4 h-4 text-accent-amber" />
            <div className="font-bold text-dicom-bone pt-1">Pune Roots</div>
            <div className="text-[10px] text-neutral-500 font-sans">Developed in Kothrud, Pune, with local engineering support.</div>
          </div>
          <div className="bg-dicom-dark border border-dicom-border p-4 rounded space-y-1">
            <ShieldCheck className="w-4 h-4 text-accent-amber" />
            <div className="font-bold text-dicom-bone pt-1">Specialized Tech</div>
            <div className="text-[10px] text-neutral-500 font-sans">Focused exclusively on dental CBCT and maxillofacial PACS flows.</div>
          </div>
          <div className="bg-dicom-dark border border-dicom-border p-4 rounded space-y-1">
            <HeartPulse className="w-4 h-4 text-accent-amber" />
            <div className="font-bold text-dicom-bone pt-1">Operations-First</div>
            <div className="text-[10px] text-neutral-500 font-sans">Built to secure referral networks and prevent revenue leakages.</div>
          </div>
        </div>
      </div>

    </div>
  );
};
export default About;
