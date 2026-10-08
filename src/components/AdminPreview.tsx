import React, { useState } from 'react';
import { AlertTriangle, IndianRupee, Layers } from 'lucide-react';

interface DentistReferral {
  name: string;
  lastMonth: number;
  thisMonth: number;
  specialty: string;
}

export const AdminPreview: React.FC = () => {
  const [referrals] = useState<DentistReferral[]>([
    { name: 'Dr. S. Patil', lastMonth: 38, thisMonth: 42, specialty: 'Implantologist' },
    { name: 'Dr. M. Joshi', lastMonth: 28, thisMonth: 32, specialty: 'Endodontist' },
    { name: 'Dr. R. Ghaisas', lastMonth: 15, thisMonth: 18, specialty: 'Orthodontist' },
    { name: 'Dr. V. Kulkarni', lastMonth: 40, thisMonth: 9, specialty: 'Oral Surgeon' }, // The leakage case
  ]);

  const [activeTab, setActiveTab] = useState<'referrals' | 'revenue'>('referrals');

  return (
    <div className="w-full bg-dicom-dark border border-dicom-border rounded-lg p-5 font-mono text-xs text-dicom-bone">
      {/* Title */}
      <div className="flex justify-between items-center border-b border-dicom-border pb-3 mb-4">
        <span className="font-bold text-accent-amber flex items-center gap-1.5">
          <Layers className="w-4 h-4" /> OWNER / ADMIN ANALYTICS
        </span>
        <span className="bg-dicom-gray px-2 py-0.5 rounded text-[10px] text-dicom-textMuted">HQ CONSOLE</span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
        <div className="bg-dicom-darker border border-dicom-border p-3 rounded">
          <span className="text-[9px] text-neutral-500 block uppercase">Scans Today</span>
          <span className="text-sm font-bold text-dicom-bone">24 cases</span>
        </div>
        <div className="bg-dicom-darker border border-dicom-border p-3 rounded">
          <span className="text-[9px] text-neutral-500 block uppercase">Average TAT</span>
          <span className="text-sm font-bold text-emerald-400">02h 14m</span>
        </div>
        <div className="bg-dicom-darker border border-dicom-border p-3 rounded">
          <span className="text-[9px] text-neutral-500 block uppercase">Daily Revenue</span>
          <span className="text-sm font-bold text-dicom-bone flex items-center"><IndianRupee className="w-3 h-3 text-neutral-400" /> 74,500</span>
        </div>
        <div className="bg-dicom-darker border border-dicom-border p-3 rounded">
          <span className="text-[9px] text-neutral-500 block uppercase">Unreported Cases</span>
          <span className="text-sm font-bold text-accent-amber">2 pending</span>
        </div>
      </div>

      {/* Analytics Tabs */}
      <div className="flex gap-2 mb-4 border-b border-dicom-border pb-2">
        <button
          onClick={() => setActiveTab('referrals')}
          className={`px-3 py-1 rounded text-[10px] font-bold border transition-all ${
            activeTab === 'referrals'
              ? 'bg-accent-amber/10 border-accent-amber text-accent-amber'
              : 'border-transparent text-dicom-textMuted hover:text-dicom-bone'
          }`}
        >
          Referral Drops & Growth
        </button>
      </div>

      {activeTab === 'referrals' && (
        <div className="space-y-4">
          {/* Custom SVG Bar Chart */}
          <div className="bg-dicom-darker border border-dicom-border p-4 rounded">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[10px] text-neutral-400 font-bold uppercase">Dentist Referral Trends (Last Month vs. This Month)</span>
              <div className="flex gap-3 text-[9px] text-neutral-500">
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-neutral-600 rounded-sm" /> Last Month</span>
                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-accent-amber rounded-sm" /> This Month</span>
              </div>
            </div>

            {/* Bars container */}
            <div className="space-y-3.5 pt-2">
              {referrals.map((doc) => {
                const maxVal = 45;
                const lastPercent = (doc.lastMonth / maxVal) * 100;
                const thisPercent = (doc.thisMonth / maxVal) * 100;
                const isKulkarni = doc.name.includes('Kulkarni');

                return (
                  <div key={doc.name} className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="font-semibold text-dicom-bone">
                        {doc.name} <span className="text-[9px] text-neutral-500 font-normal">({doc.specialty})</span>
                      </span>
                      <span className={isKulkarni ? 'text-accent-amber font-bold' : 'text-neutral-400'}>
                        {doc.lastMonth} → {doc.thisMonth} cases
                      </span>
                    </div>
                    {/* Double progress bar layout */}
                    <div className="space-y-1">
                      {/* Last Month Bar */}
                      <div className="w-full bg-black/40 h-1.5 rounded overflow-hidden">
                        <div className="bg-neutral-600 h-full rounded" style={{ width: `${lastPercent}%` }} />
                      </div>
                      {/* This Month Bar */}
                      <div className="w-full bg-black/40 h-1.5 rounded overflow-hidden">
                        <div 
                          className={`h-full rounded transition-all duration-500 ${
                            isKulkarni ? 'bg-amber-600 animate-pulse' : 'bg-accent-amber'
                          }`} 
                          style={{ width: `${thisPercent}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Alarm system on referral drop */}
          <div className="border border-amber-200 bg-amber-50 p-3.5 rounded-lg flex items-start gap-2.5 text-amber-900">
            <AlertTriangle className="w-4 h-4 text-accent-warning shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-accent-warning text-[11px]">RELATIONSHIP ALERT: Dr. V. Kulkarni (Oral Surgeon)</div>
              <p className="text-[10px] text-neutral-600 mt-1 leading-relaxed">
                Referrals from Dr. Kulkarni dropped by <span className="text-accent-warning font-bold">77.5%</span> this month (from 40 to 9). 
                No scans registered from his clinic in the last 12 days. 
              </p>
              <div className="mt-2.5 flex gap-2">
                <a 
                  href="https://wa.me/917666596339" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-accent-amber text-white font-bold px-2 py-1 rounded text-[9px] hover:bg-accent-amber/90 transition-all"
                >
                  Reach out on WhatsApp
                </a>
                <span className="text-[9px] text-neutral-500 self-center">Triggered by IB MS referral leak detection engine</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminPreview;
