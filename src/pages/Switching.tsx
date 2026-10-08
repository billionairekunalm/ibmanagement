import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RefreshCw, ClipboardCheck, Users, HardDriveDownload } from 'lucide-react';

export const Switching: React.FC = () => {
  const navigate = useNavigate();

  const migrationSteps = [
    {
      title: 'Phase 1: Database Migration (Days 1–2)',
      icon: HardDriveDownload,
      desc: 'We extract your historical dentist list, clinic accounts, and patient rosters from Google Sheets, excel files, or manual billing entries, and ingest them directly into your secure workspace.'
    },
    {
      title: 'Phase 2: Local Node Setup (Days 3–4)',
      icon: RefreshCw,
      desc: 'Our technical team configures a secure background listener on your scanner workstations. The listener automatically detects new volumes, compresses them, and maps them to active queues.'
    },
    {
      title: 'Phase 3: Staff Training (Day 5)',
      icon: Users,
      desc: 'We run structured 30-minute training sessions for your receptionists, technicians, and radiologists, showing them the new intake check-list and report queue boards.'
    },
    {
      title: 'Phase 4: Parallel Guard (Days 6–7)',
      icon: ClipboardCheck,
      desc: 'We monitor operations live during the first 48 hours of go-live, checking upload speeds and report deliveries to ensure a perfect handoff with zero clinic interruption.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Migration
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          Moving off WhatsApp, Google Drive, and Excel.
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          Switching software shouldn\'t paralyze your diagnostic centre. We handle the technical heavy lifting so you go live in 7 days without missing a single patient scan.
        </p>
      </div>

      {/* Migration Timeline Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {migrationSteps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="bg-dicom-dark border border-dicom-border p-6 rounded-lg space-y-4 hover:border-neutral-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-dicom-gray rounded text-accent-amber">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-xs md:text-sm font-bold font-mono text-dicom-bone">{step.title}</h3>
              </div>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed pl-1">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Reassurance banner */}
      <div className="bg-dicom-darker border border-dicom-border p-8 rounded-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-mono text-xs font-bold text-dicom-bone uppercase">What about our past scan archive?</h4>
          <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
            Your historical DICOM archive can remain stored on your local hard drives, or we can assist in batch-uploading past patient records to our cloud archives as an optional storage add-on. Contact sales to discuss your archive size.
          </p>
        </div>
        <button
          onClick={() => navigate('/demo')}
          className="bg-accent-amber hover:bg-accent-amber/90 text-dicom-black font-bold px-5 py-2.5 rounded text-xs transition-all font-sans cursor-pointer shrink-0"
        >
          Plan Migration
        </button>
      </div>

    </div>
  );
};
export default Switching;
