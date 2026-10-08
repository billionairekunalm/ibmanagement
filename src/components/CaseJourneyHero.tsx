import React, { useState, useEffect } from 'react';
import { User, Activity, FileText, Send, RefreshCw, CheckCircle2 } from 'lucide-react';

interface Stage {
  name: string;
  role: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  time: string;
  color: string;
}

export const CaseJourneyHero: React.FC = () => {
  const [currentStage, setCurrentStage] = useState(0); // 0: Referred, 1: Scanned, 2: Reported, 3: Delivered
  const [tatSeconds, setTatSeconds] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const stages: Stage[] = [
    { name: 'Referred', role: 'Dr. S. Patil (Dentist)', status: 'Referral Form Received', icon: User, time: '14:02', color: 'border-blue-500 text-blue-400' },
    { name: 'Scanned', role: 'Kunal (Technician)', status: 'CBCT Captured & QC\'d', icon: Activity, time: '14:15', color: 'border-yellow-500 text-yellow-400' },
    { name: 'Reported', role: 'Dr. A. Kadam (Radiologist)', status: 'TMJ & Nerve Mapping Signed', icon: FileText, time: '16:08', color: 'border-purple-500 text-purple-400' },
    { name: 'Delivered', role: 'IB MS System', status: 'Delivered via WhatsApp + SMS', icon: Send, color: 'border-emerald-500 text-emerald-400', time: '16:09' }
  ];

  // Pipeline animation on load
  useEffect(() => {
    if (isCompleted) return;
    
    const interval = setInterval(() => {
      setCurrentStage((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsCompleted(true);
          return 3;
        }
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isCompleted]);

  // TAT timer increment
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStage >= 1) {
        setTatSeconds((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [currentStage]);

  const formatTat = (totalSeconds: number) => {
    // We mock the actual base time (2h 14m) and increment seconds
    const baseMinutes = 134; // 2h 14m
    const totalMinutes = baseMinutes + Math.floor(totalSeconds / 60);
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    const secs = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}h ${mins.toString().padStart(2, '0')}m ${secs.toString().padStart(2, '0')}s`;
  };

  const restartPipeline = () => {
    setCurrentStage(0);
    setTatSeconds(0);
    setIsCompleted(false);
  };

  return (
    <div className="w-full bg-dicom-darker border border-dicom-border rounded-2xl p-6 font-sans relative overflow-hidden shadow-medium">
      {/* Decorative scan grid lines */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px]" />
      </div>

      {/* Case Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-dicom-border pb-4 mb-6 gap-4 z-10 relative">
        <div>
          <div className="text-[10px] text-dicom-textMuted uppercase tracking-wider font-mono">Active Case Tracker</div>
          <h3 className="text-sm md:text-base font-bold text-dicom-bone flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-completed animate-pulse" />
            <span className="font-mono">CASE #4471</span> <span className="text-dicom-textMuted font-normal">·</span> Full Arch CBCT
          </h3>
        </div>
        
        <div className="flex items-center gap-4 text-right font-mono">
          <div>
            <div className="text-[10px] text-dicom-textMuted uppercase tracking-wider">ELAPSED TAT</div>
            <div className="text-xs md:text-sm font-semibold text-accent-warning">
              {currentStage === 0 ? '00h 00m 00s (Pending Scan)' : formatTat(tatSeconds)}
            </div>
          </div>
          <button 
            onClick={restartPipeline} 
            className="p-1.5 rounded hover:bg-dicom-gray text-dicom-textMuted hover:text-dicom-bone transition-all border border-transparent hover:border-dicom-border"
            title="Replay Case Flow"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${!isCompleted ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Workflow Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
        {stages.map((stage, idx) => {
          const isActive = idx === currentStage;
          const isDone = idx < currentStage;
          const Icon = stage.icon;

          return (
            <div 
              key={stage.name} 
              className={`flex flex-col p-4 rounded-lg border transition-all duration-300 ${
                isActive 
                  ? 'bg-dicom-gray border-accent-amber shadow-[0_4px_12px_rgba(0,95,115,0.06)]' 
                  : isDone 
                  ? 'bg-dicom-darker border-dicom-border opacity-75' 
                  : 'bg-dicom-darker/30 border-dicom-border/30 opacity-40'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded ${isActive ? 'bg-accent-amber/10' : 'bg-dicom-border/50'}`}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-accent-amber' : isDone ? 'text-neutral-500' : 'text-neutral-400'}`} />
                </div>
                <span className="text-[10px] text-dicom-textMuted">{stage.time}</span>
              </div>
              
              <div className="text-xs font-semibold text-dicom-bone flex items-center gap-1.5 font-sans">
                {stage.name}
                {isDone && <CheckCircle2 className="w-3 h-3 text-accent-completed fill-accent-completed/10" />}
              </div>

              <div className="text-[10px] text-accent-amber mt-1 font-semibold font-sans">
                {stage.role}
              </div>

              <div className="text-[9px] text-dicom-textMuted mt-2 border-t border-dicom-border/50 pt-2 leading-relaxed font-sans">
                {stage.status}
              </div>
            </div>
          );
        })}
      </div>

      {/* Case Details Footer */}
      <div className="mt-6 pt-4 border-t border-dicom-border flex flex-wrap justify-between text-[9px] text-neutral-500 z-10 relative font-mono">
        <div>DENTIST: DR. S. PATIL (MUMBAI)</div>
        <div>DICOM SIZE: 242.4 MB</div>
        <div>SYSTEM: SHIELDED LOCAL SYNC V1.2.4</div>
      </div>
    </div>
  );
};
export default CaseJourneyHero;
