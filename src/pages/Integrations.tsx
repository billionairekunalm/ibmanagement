import React from 'react';
import { Cpu, MessageSquare, Landmark, PhoneIncoming } from 'lucide-react';

export const Integrations: React.FC = () => {
  const integrationsList = [
    {
      title: 'DICOM Ingest Sync',
      icon: Cpu,
      status: 'Live & Verified',
      desc: 'Hooks directly into Planmeca Romexis, Carestream CS, Vatech, and Sirona watch folders to extract and cloud-sync voxel volumes automatically.'
    },
    {
      title: 'WhatsApp Official API',
      icon: MessageSquare,
      status: 'Live & Verified',
      desc: 'Sends signed diagnostic PDFs and lightweight 3D scan viewer web links directly to the referring dentist and patient\'s WhatsApp chat.'
    },
    {
      title: 'SMS Delivery Fallback',
      icon: PhoneIncoming,
      status: 'Live & Verified',
      desc: 'Monitors WhatsApp delivery status and falls back to standard cellular SMS text containing report download URLs if internet is unreachable.'
    },
    {
      title: 'Tally / GST Export Node',
      icon: Landmark,
      status: 'Live & Verified',
      desc: 'Compiles and exports accountant-ready CSV files containing client invoices, GST ledger breakdowns, and radiologist payout tallies.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Connections
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          Connected integrations that actually work.
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          No generic webhook promises. IB Management Solution features native, pre-tested integrations with dental CBCT imaging hardware and Indian communication systems.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {integrationsList.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="bg-dicom-dark border border-dicom-border p-6 rounded-lg flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-dicom-gray rounded border border-dicom-border text-accent-amber">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono bg-emerald-950/20 border border-emerald-900 px-2 py-0.5 rounded text-emerald-400">
                    {item.status}
                  </span>
                </div>
                
                <h3 className="text-base font-bold font-mono text-dicom-bone">{item.title}</h3>
                
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
export default Integrations;
