import React from 'react';
import { Cpu, CheckCircle, WifiOff, Zap } from 'lucide-react';
import { COPY } from '../content/copy';
import TechnicianPreview from '../components/TechnicianPreview';

export const TechnicianDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-amber/20 bg-accent-amber/5 font-mono text-[9px] text-accent-amber uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" /> Technician Module
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone leading-tight">
            {COPY.modules.technician.promise}
          </h1>
          
          <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
            Technicians are the core of a CBCT centre\'s speed. The Technician Station makes scan capture, patient verification, and cloud uploading a 1-click sequence, letting them focus on scan quality rather than file management.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <CheckCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Auto-Populated Intake</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  When a dentist refers a case on the mobile app or web portal, all patient details, symptoms, and target scan sectors populate instantly at the technician\'s console. No retyping names.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <WifiOff className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Resilient Upload Engine</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Our lightweight sync listener caches raw slices locally. If broadband connectivity fluctuates, it resumes the upload from the exact megabyte it stopped at, preventing data loss.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">QC Exposure Log</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Technicians mark metallic object removal, patient stability checks, and record KV/mA parameters on a structured checklist to avoid double radiation or repeat scans.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-3">
          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
            Interactive Workstation Preview
          </div>
          <TechnicianPreview />
        </div>
      </div>

    </div>
  );
};
export default TechnicianDashboard;
