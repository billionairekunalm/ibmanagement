import React from 'react';
import { ShieldCheck, FileText, LayoutList, CheckCircle } from 'lucide-react';
import { COPY } from '../content/copy';
import RadiologistPreview from '../components/RadiologistPreview';

export const RadiologistDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-amber/20 bg-accent-amber/5 font-mono text-[9px] text-accent-amber uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" /> Radiologist Desk
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone leading-tight">
            {COPY.modules.radiologist.promise}
          </h1>
          
          <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
            Radiologists should focus on radiological anatomy, not file management. IB MS replaces fragmented emails and downloads with an integrated worklist and standard maxillofacial templates.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <LayoutList className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">TAT-Prioritized Worklist</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Cases are ordered by target delivery deadline. High-priority surgical mappings automatically float to the top with visible countdown flags, preventing turnaround breaches.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Maxillofacial Report Templates</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Built-in templates for implant sites, mandibular nerve distance logging, TMJ space evaluation, and sinus findings ensure structural consistency and fast clinical drafting.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Authorized Sign-off</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Attach authorized digital signatures to report outputs instantly. Once signed, the system locks editing history and generates a secure PDF sharing payload.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
            Interactive Radiologist Worklist Preview
          </div>
          <RadiologistPreview />
        </div>
      </div>

    </div>
  );
};
export default RadiologistDashboard;
