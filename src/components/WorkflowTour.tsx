import React from 'react';
import { UserPlus, Cpu, FileCheck2, MessageSquare, ShieldCheck, Check } from 'lucide-react';

interface WorkflowStep {
  id: number;
  number: string;
  role: string;
  title: string;
  image: string;
  bullets: string[];
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const WorkflowTour: React.FC = () => {
  const steps: WorkflowStep[] = [
    {
      id: 1,
      number: '01',
      role: 'Intake Desk',
      title: 'Digital Patient Intake in dentist opd',
      image: '/images/flow-1-reception.jpg',
      bullets: [
        'Dentists submit scan orders directly from their mobile app.',
        'Patient details transfer instantly into the center\'s check-in tablet.',
        'One-tap digital consent signing at the reception desk.'
      ],
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
      icon: UserPlus
    },
    {
      id: 2,
      number: '02',
      role: 'Scan Room',
      title: 'Technician Dashbord',
      image: '/images/flow-2-technician.jpg',
      bullets: [
        'Register Walk-in Patients and manage Appointments inside the scan room.',
        'Track receipts, center expenses, and analytics directly from the console.',
        'Access radiology reports, dentist details, and share files instantly.'
      ],
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
      icon: Cpu
    },
    {
      id: 3,
      number: '03',
      role: 'Radiologist Desk',
      title: 'Radiology Dashbord',
      image: '/images/flow-3-radiologist.jpg',
      bullets: [
        'Review scan queue volumes and nerve mappings on the Case Dashboard.',
        'Upload Documents and digital signature reports instantly upon sign-off.',
        'Filter past diagnostic Records & History and track throughput Analytics.'
      ],
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-100',
      icon: FileCheck2
    },
    {
      id: 4,
      number: '04',
      role: 'Distribution',
      title: 'Automated WhatsApp Delivery To Patient',
      image: '/images/flow-4-whatsapp.jpg',
      bullets: [
        'Signing triggers instant automated message dispatch.',
        'Referring dentists receive diagnostic reports on their app.',
        'Patients get OPG slices and PDFs directly on their WhatsApp.'
      ],
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      icon: MessageSquare
    },
    {
      id: 5,
      number: '05',
      role: 'Owner Console',
      title: 'Admin Dashbord To Manage Everything',
      image: '/images/flow-5-owner.jpg',
      bullets: [
        'Track network-wide Revenue, Commissions, and multi-location Center Ops in real time.',
        'Control business expenses (Salaries, Expenses, Receipts) and scan Pricing structures.',
        'Monitor Referrals, Staff Management, clinic Locations, and Patient Origins demographics.'
      ],
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-100',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full font-sans space-y-12">
      
      {/* Header Panel */}
      <div className="relative text-center max-w-3xl mx-auto space-y-4 flex flex-col items-center animate-fadeInUp">
        {/* Soft background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 bg-accent-amber/10 text-accent-amber font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-1 select-none w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
          Interactive Tour
        </div>

        <h2 className="text-3xl md:text-5xl font-extrabold font-display bg-gradient-to-r from-[#0f2e4a] to-[#0066cc] bg-clip-text text-transparent tracking-tight leading-tight pb-1">
          Automating your entire scan journey
        </h2>

        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-sans leading-relaxed">
          See how IB Management Solution coordinates receptionist, technician, radiologist, dentist, patient, and owner in a single, automated loop.
        </p>
      </div>

      {/* Alternating Steps Grid */}
      <div className="space-y-14 lg:space-y-16">
        {steps.map((step, idx) => {
          const isEven = idx % 2 === 1;
          const StepIcon = step.icon;

          return (
            <div 
              key={step.id} 
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center`}
            >
              
              {/* Copy Column */}
              <div 
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? 'lg:order-2' : ''
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-5xl md:text-6xl font-extrabold font-display text-slate-200 tracking-tight select-none">
                      {step.number}
                    </span>
                    <div className="h-4 w-px bg-slate-200" />
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${step.badgeColor}`}>
                      <StepIcon className="w-4 h-4" />
                      {step.role}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-display leading-tight tracking-tight">
                    {step.title}
                  </h3>
                </div>

                <ul className="space-y-5">
                  {currentStepBullets(step.bullets)}
                </ul>
              </div>

              {/* Image Column */}
              <div 
                className={`lg:col-span-7 flex justify-center items-center ${
                  isEven ? 'lg:order-1' : ''
                }`}
              >
                <div className="relative w-full overflow-hidden rounded-2xl shadow-medium hover:shadow-xl hover:scale-[1.01] transition-all duration-500 bg-white border border-slate-100/80 group">
                  {/* Subtle radial glow */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl scale-75 -z-10 animate-pulse duration-[6000ms]" />
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-auto object-cover object-center"
                  />
                  
                  {/* Floating caption bar on image hover */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-2.5 text-[10px] text-neutral-400 font-mono flex justify-between border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>STAGE {step.number} SYSTEM LINKED</span>
                    <span>100% SECURE</span>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

// Helper component for bullets list
const currentStepBullets = (bullets: string[]) => {
  return bullets.map((b, idx) => (
    <li key={idx} className="flex items-start gap-3">
      <div className="bg-blue-50 p-0.5 rounded-full mt-1 shrink-0">
        <Check className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-base md:text-lg text-slate-800 leading-relaxed font-medium font-sans">{b}</span>
    </li>
  ));
};

export default WorkflowTour;
