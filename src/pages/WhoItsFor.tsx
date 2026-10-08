import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Layers, ShieldCheck, CheckCircle } from 'lucide-react';

export const WhoItsFor: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      title: 'Single Imaging Centre',
      icon: Building,
      subtitle: 'Stand out from competition and lock in your local dentist base.',
      bullets: [
        'Secure referral channels: Dentist App gives local clinics direct viewer links.',
        'Eliminate leakage: Automated logs ensure every captured DICOM is billed.',
        'Fast turnaround times: Prioritized queues ensure reports are signed on schedule.',
        'No IT overhead: Runs fully in any browser, zero local servers to maintain.'
      ]
    },
    {
      title: 'Multi-Centre / DSO Chains',
      icon: Layers,
      subtitle: 'Standardise workflow and billing logistics across all branches.',
      bullets: [
        'Centralised operations: Monitor scan throughput and TAT limits across 2–10 locations from one screen.',
        'Pooled scan quotas: Share monthly scan limits dynamically across busy and quiet centres.',
        'Branded Dentist App: Custom Play Store mobile app with your corporate branding and domain.',
        'Consolidated accounting: Extract accountant-ready reports for all locations instantly.'
      ]
    },
    {
      title: 'Radiologist Reporting Practice',
      icon: ShieldCheck,
      subtitle: 'Increase reporting efficiency without folder searching.',
      bullets: [
        'Unified worklist: Ingest files from multiple clients into one structured dashboard.',
        'Maxillofacial templates: Complete implants, nerve tracing, and TMJ scans in half the time.',
        'Digital signature seals: Sign off on reports securely and securely lock PDF versions.',
        'Payout audit logs: Track completed reports per client for month-end reconciliation.'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Audience
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone">
          Who uses IB Management Solution?
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          Whether you run a single independent CBCT room or coordinate diagnostic logistics for a multi-city dental chain, IB MS adapts to your team structure.
        </p>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {profiles.map((profile) => {
          const Icon = profile.icon;
          return (
            <div key={profile.title} className="bg-dicom-dark border border-dicom-border p-6 rounded-lg flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div className="space-y-4">
                <div className="p-2.5 bg-dicom-gray rounded border border-dicom-border w-fit text-accent-amber">
                  <Icon className="w-5 h-5" />
                </div>
                
                <h3 className="text-lg font-bold font-mono text-dicom-bone">{profile.title}</h3>
                <p className="text-xs text-neutral-400 font-sans italic">{profile.subtitle}</p>
                
                <ul className="space-y-2.5 pt-4 text-[11px] text-neutral-400 font-sans leading-relaxed">
                  {profile.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-amber shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => navigate('/demo')}
                className="w-full text-center bg-dicom-gray hover:bg-dicom-border border border-dicom-border text-dicom-bone font-bold py-2 rounded text-[10px] mt-8 transition-all font-sans cursor-pointer"
              >
                Discuss your workflow
              </button>
            </div>
          );
        })}
      </div>

    </div>
  );
};
export default WhoItsFor;
