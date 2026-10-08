import React, { useState } from 'react';
import { Smartphone, Send, ClipboardList, CheckCircle2, FileDown, ExternalLink } from 'lucide-react';

export const DentistAppPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cases' | 'refer' | 'view-report'>('cases');
  const [newPatient, setNewPatient] = useState({ name: '', age: '', gender: 'Male', scanType: 'Full Arch CBCT' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const mockCases = [
    { id: '#4471', name: 'Anita Rajan', scan: 'Full Arch CBCT', status: 'REPORT READY', date: 'Today, 16:09' },
    { id: '#4455', name: 'Ramesh Kadam', scan: 'Segmental CBCT', status: 'IN QUEUE', date: 'Yesterday, 11:20' }
  ];

  const handleSubmitReferral = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPatient.name) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setNewPatient({ name: '', age: '', gender: 'Male', scanType: 'Full Arch CBCT' });
      setActiveTab('cases');
    }, 1500);
  };

  return (
    <div className="flex justify-center w-full">
      {/* Smartphone Outer Shell */}
      <div className="relative border-4 border-neutral-700 bg-dicom-darker w-[280px] h-[520px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col font-sans select-none">
        
        {/* Smartphone Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-28 bg-neutral-700 rounded-b-xl z-20 flex justify-center items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-black" />
        </div>

        {/* App Titlebar */}
        <div className="bg-dicom-dark border-b border-dicom-border px-4 pt-6 pb-2.5 flex justify-between items-center text-dicom-bone z-10">
          <span className="font-bold text-[11px] font-mono tracking-wide text-accent-amber">IB CONNECT</span>
          <span className="text-[9px] font-mono text-neutral-400">Dr. S. Patil</span>
        </div>

        {/* Scrollable Screen Content */}
        <div className="flex-1 overflow-y-auto p-3 text-[11px] bg-dicom-black">
          {activeTab === 'cases' && (
            <div className="space-y-3">
              <h4 className="font-semibold text-neutral-400 text-[10px] uppercase font-mono tracking-wider flex justify-between items-center">
                <span>Recent Referrals</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </h4>
              
              <div className="space-y-2">
                {mockCases.map((c) => (
                  <div key={c.id} className="bg-dicom-dark border border-dicom-border p-2.5 rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-dicom-bone">{c.name}</div>
                        <div className="text-[9px] text-neutral-500 font-mono">{c.scan} · {c.id}</div>
                      </div>
                      <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold font-mono ${
                        c.status === 'REPORT READY' 
                          ? 'bg-emerald-950/20 text-emerald-400 border border-emerald-900' 
                          : 'bg-amber-950/20 text-accent-amber border border-amber-900 animate-pulse'
                      }`}>
                        {c.status}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-[9px] text-neutral-400 pt-1 border-t border-dicom-border/50">
                      <span>Ref: {c.date}</span>
                      {c.status === 'REPORT READY' && (
                        <button 
                          onClick={() => setActiveTab('view-report')}
                          className="text-accent-amber font-bold flex items-center gap-0.5 hover:underline"
                        >
                          View Report <ExternalLink className="w-2.5 h-2.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'refer' && (
            <div className="space-y-3">
              <h4 className="font-semibold text-neutral-400 text-[10px] uppercase font-mono tracking-wider">Raise New Referral</h4>
              
              {isSubmitted ? (
                <div className="bg-dicom-dark border border-emerald-900/40 p-4 rounded-lg text-center space-y-2 py-8">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="font-bold text-emerald-400">Referral Sent!</div>
                  <div className="text-[9px] text-neutral-400">Technician notified. Case #4472 initialized.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmitReferral} className="space-y-2.5">
                  <div className="space-y-1">
                    <label className="text-[9px] text-neutral-500 uppercase block font-mono">Patient Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      value={newPatient.name} 
                      onChange={(e) => setNewPatient({ ...newPatient, name: e.target.value })}
                      className="w-full bg-dicom-dark border border-dicom-border rounded px-2 py-1 text-dicom-bone focus:outline-none focus:border-accent-amber text-[10px]"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-[9px] text-neutral-500 uppercase block font-mono">Age</label>
                      <input 
                        type="number" 
                        placeholder="Age" 
                        value={newPatient.age}
                        onChange={(e) => setNewPatient({ ...newPatient, age: e.target.value })}
                        className="w-full bg-dicom-dark border border-dicom-border rounded px-2 py-1 text-dicom-bone focus:outline-none focus:border-accent-amber text-[10px]"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] text-neutral-500 uppercase block font-mono">Gender</label>
                      <select 
                        value={newPatient.gender}
                        onChange={(e) => setNewPatient({ ...newPatient, gender: e.target.value })}
                        className="w-full bg-dicom-dark border border-dicom-border rounded px-1.5 py-1 text-dicom-bone focus:outline-none focus:border-accent-amber text-[10px]"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] text-neutral-500 uppercase block font-mono">Scan Type</label>
                    <select 
                      value={newPatient.scanType}
                      onChange={(e) => setNewPatient({ ...newPatient, scanType: e.target.value })}
                      className="w-full bg-dicom-dark border border-dicom-border rounded px-1.5 py-1 text-dicom-bone focus:outline-none focus:border-accent-amber text-[10px]"
                    >
                      <option value="Full Arch CBCT">Full Arch CBCT</option>
                      <option value="OPG (2D Panorama)">OPG (2D Panorama)</option>
                      <option value="Segmental CBCT">Segmental CBCT</option>
                      <option value="TMJ View">TMJ View</option>
                    </select>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-accent-amber hover:bg-accent-amber/90 text-dicom-black font-bold py-1.5 rounded transition-all mt-2 flex items-center justify-center gap-1 text-[10px]"
                  >
                    <Send className="w-3 h-3" /> Submit Referral
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === 'view-report' && (
            <div className="space-y-3 font-mono text-[10px] text-neutral-400">
              <div className="flex justify-between items-center border-b border-dicom-border pb-1.5">
                <span className="font-bold text-dicom-bone">REPORT #4471</span>
                <button onClick={() => setActiveTab('cases')} className="text-[9px] text-accent-amber font-bold">Back</button>
              </div>

              <div className="bg-dicom-dark border border-dicom-border p-2 rounded leading-relaxed space-y-1.5 text-[9px]">
                <div className="text-emerald-400 font-bold border-b border-dicom-border/50 pb-1">DR. AKASH KADAM (MDS) SIGNED</div>
                <div><strong>Patient:</strong> Anita Rajan (42/F)</div>
                <div><strong>Date:</strong> 27/08/2026</div>
                <div className="text-dicom-bone font-semibold mt-1">Findings:</div>
                <p>1. Mandibular nerve canal mapped bilaterally.</p>
                <p>2. Available bone height at site 36: 12.4mm, width: 6.2mm.</p>
              </div>

              <div className="space-y-1.5 pt-1">
                <button 
                  onClick={() => alert('Simulating DICOM volume load in mobile web-viewer. 150 frames loaded...')}
                  className="w-full bg-neutral-800 hover:bg-neutral-700 text-dicom-bone border border-neutral-700 font-bold py-1 rounded flex items-center justify-center gap-1 text-[9px]"
                >
                  <ExternalLink className="w-2.5 h-2.5" /> Launch 3D Viewer
                </button>
                <button 
                  onClick={() => alert('Downloading PDF...')}
                  className="w-full bg-dicom-dark border border-dicom-border hover:bg-dicom-gray text-neutral-400 font-bold py-1 rounded flex items-center justify-center gap-1 text-[9px]"
                >
                  <FileDown className="w-2.5 h-2.5" /> Download Report PDF
                </button>
              </div>
            </div>
          )}
        </div>

        {/* App Bottom Navigation Bar */}
        <div className="bg-dicom-dark border-t border-dicom-border px-3 py-2 flex justify-around text-neutral-500 z-10">
          <button 
            onClick={() => setActiveTab('cases')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'cases' ? 'text-accent-amber' : 'hover:text-dicom-bone'}`}
          >
            <ClipboardList className="w-3.5 h-3.5" />
            <span className="text-[8px]">Cases</span>
          </button>
          <button 
            onClick={() => { setActiveTab('refer'); setIsSubmitted(false); }}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'refer' ? 'text-accent-amber' : 'hover:text-dicom-bone'}`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="text-[8px]">New Refer</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DentistAppPreview;
