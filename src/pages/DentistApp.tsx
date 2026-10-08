import React from 'react';
import { Smartphone, Send, Calendar, ShieldAlert } from 'lucide-react';
import { COPY } from '../content/copy';
import DentistAppPreview from '../components/DentistAppPreview';

export const DentistApp: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-amber/20 bg-accent-amber/5 font-mono text-[9px] text-accent-amber uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5" /> Dentist App
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone leading-tight">
            {COPY.modules.dentistApp.promise}
          </h1>
          
          <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
            The referring dentist is your customer. Give them a modern, professional experience that keeps your centre at the top of their list. No complex emails, just simple mobile referrals and viewer tools.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">3-Tap Referrals</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Dentists can refer patients from their mobile in seconds, choosing the scan type and inputting basic details. This eliminates paper referral slip loss and transcription errors.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Real-time Case Status</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Dentists see exactly where their patient stands in the queue (e.g. "Arrived", "Scanned", "Report in Progress", "Report Ready"). This prevents routine check-in calls.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Zero-Install Mobile Viewing</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Reports open directly inside the browser or mobile application. A lightweight viewer allows dentists to inspect CBCT slices and nerve coordinates on their phone instantly.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="space-y-3 w-[280px]">
            <div className="text-[10px] text-neutral-500 font-mono text-center uppercase tracking-wider">
              Interactive Smartphone Preview
            </div>
            <DentistAppPreview />
          </div>
        </div>
      </div>

    </div>
  );
};
export default DentistApp;
