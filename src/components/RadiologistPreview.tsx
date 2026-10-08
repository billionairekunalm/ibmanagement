import React, { useState } from 'react';
import { ShieldCheck, Clock, ChevronDown, CheckCircle } from 'lucide-react';

interface Case {
  id: string;
  patient: string;
  scanType: string;
  dentist: string;
  tatLeft: string;
  priority: 'HIGH' | 'MEDIUM' | 'NORMAL';
  status: 'PENDING' | 'REPORTED';
}

export const RadiologistPreview: React.FC = () => {
  const [cases, setCases] = useState<Case[]>([
    { id: '#4471', patient: 'Anita Rajan', scanType: 'Full Arch CBCT', dentist: 'Dr. S. Patil', tatLeft: '12m left', priority: 'HIGH', status: 'PENDING' },
    { id: '#4469', patient: 'Rahul Sharma', scanType: 'Segmental Mandible CBCT', dentist: 'Dr. M. Joshi', tatLeft: '01h 45m left', priority: 'MEDIUM', status: 'PENDING' },
    { id: '#4468', patient: 'Priya Mehta', scanType: 'TMJ Left/Right (Open/Closed)', dentist: 'Dr. R. Ghaisas', tatLeft: '03h 10m left', priority: 'NORMAL', status: 'PENDING' }
  ]);

  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState('Implant Planning / Nerve Mapping');
  const [clinicalNotes, setClinicalNotes] = useState(
    "1. Mandibular nerve canal mapped bilaterally.\n2. Available bone height at site 36: 12.4mm, width: 6.2mm.\n3. Type III trabecular bone density noted at site 37.\n4. No periapical radiolucency observed in adjacent teeth."
  );
  
  const [isSigning, setIsSigning] = useState(false);

  const templates = [
    'Implant Planning / Nerve Mapping',
    'TMJ Volumetric Assessment',
    'Maxillary Sinus Evaluation',
    'Impaired / Impacted Third Molar Assessment'
  ];

  const activeCase = cases[selectedCaseIdx];

  const handleSignOff = () => {
    setIsSigning(true);
    setTimeout(() => {
      setCases(prev => prev.map((c, idx) => idx === selectedCaseIdx ? { ...c, status: 'REPORTED' } : c));
      setIsSigning(false);
    }, 1200);
  };

  return (
    <div className="w-full bg-dicom-dark border border-dicom-border rounded-lg p-5 font-mono text-xs text-dicom-bone">
      {/* Dashboard title */}
      <div className="flex justify-between items-center border-b border-dicom-border pb-3 mb-4">
        <span className="font-bold text-accent-amber flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" /> RADIOLOGIST REPORTING WORKLIST
        </span>
        <span className="bg-dicom-gray px-2 py-0.5 rounded text-[10px] text-dicom-textMuted">MAPPED WORKSTATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Left Side: Worklist Queue */}
        <div className="lg:col-span-2 space-y-2 border-r border-dicom-border/50 pr-0 lg:pr-4">
          <h4 className="font-semibold text-neutral-500 uppercase text-[10px] tracking-wider mb-2">Queue Worklist</h4>
          <div className="space-y-2">
            {cases.map((c, idx) => {
              const isSelected = idx === selectedCaseIdx;
              const isReported = c.status === 'REPORTED';
              return (
                <div
                  key={c.id}
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-dicom-gray border-accent-amber shadow-[0_4px_12px_rgba(0,95,115,0.06)]'
                      : 'bg-dicom-darker border-dicom-border hover:border-neutral-300'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="font-bold">{c.id} · {c.patient}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                      c.priority === 'HIGH' ? 'bg-rose-50 text-rose-600 border border-rose-200' :
                      c.priority === 'MEDIUM' ? 'bg-amber-50 text-amber-600 border border-amber-200' :
                      'bg-neutral-100 text-neutral-500 border border-neutral-200'
                    }`}>
                      {c.priority}
                    </span>
                  </div>
                  <div className="text-[10px] text-neutral-400 mb-2">{c.scanType}</div>
                  <div className="flex justify-between items-center text-[9px] text-dicom-textMuted">
                    <span>Ref: {c.dentist}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-amber" />
                      {isReported ? (
                        <span className="text-emerald-400 font-bold">REPORT SIGNED</span>
                      ) : (
                        <span className={c.priority === 'HIGH' ? 'text-rose-400 font-bold animate-pulse' : 'text-accent-amber'}>
                          {c.tatLeft}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Reporting Template & Editor */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-dicom-darker border border-dicom-border rounded p-4 space-y-3">
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-dicom-border/50 pb-2">
              <div>
                <span className="text-[10px] text-neutral-500 uppercase">ACTIVE REPORT FILE</span>
                <div className="font-bold text-sm text-dicom-bone">{activeCase.patient} ({activeCase.id})</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-neutral-500 uppercase">SCANNER EXPORT</span>
                <div className="text-[10px] text-neutral-400">{activeCase.scanType}</div>
              </div>
            </div>

            {/* Template Selector */}
            <div className="space-y-1">
              <label className="text-[10px] text-neutral-500 uppercase block">Maxillofacial Report Template</label>
              <div className="relative">
                <select
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-1.5 appearance-none focus:outline-none focus:border-accent-amber"
                >
                  {templates.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-2.5 pointer-events-none text-dicom-textMuted" />
              </div>
            </div>

            {/* Structured Findings Editor */}
            <div className="space-y-1">
              <label className="text-[10px] text-neutral-500 uppercase block">Radiological Findings & Impressons</label>
              <textarea
                value={clinicalNotes}
                onChange={(e) => setClinicalNotes(e.target.value)}
                disabled={activeCase.status === 'REPORTED'}
                rows={5}
                className="w-full bg-dicom-gray border border-dicom-border rounded p-2.5 font-mono text-[10px] focus:outline-none focus:border-accent-amber leading-relaxed resize-none disabled:opacity-60"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <div className="text-[9px] text-neutral-500">
                {activeCase.status === 'REPORTED' ? (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold">
                    <CheckCircle className="w-3.5 h-3.5" /> SECURE SIGNATURE SEAL ATTACHED
                  </span>
                ) : (
                  <span>AUTHORIZATION: DR. AKASH KADAM (MDS)</span>
                )}
              </div>
              
              <button
                onClick={handleSignOff}
                disabled={activeCase.status === 'REPORTED' || isSigning}
                className={`px-4 py-2 rounded font-bold transition-all border ${
                  activeCase.status === 'REPORTED'
                    ? 'bg-emerald-50 text-emerald-600 border-emerald-200 cursor-default'
                    : isSigning
                    ? 'bg-dicom-gray border-dicom-border text-dicom-textMuted cursor-wait'
                    : 'bg-accent-amber text-white border-accent-amber hover:bg-accent-amber/90 cursor-pointer'
                }`}
              >
                {activeCase.status === 'REPORTED' ? 'Report Signed' : isSigning ? 'Signing Report...' : 'Sign & Deliver Report'}
              </button>
            </div>
          </div>
          
          {activeCase.status === 'REPORTED' && (
            <div className="border border-emerald-200 bg-emerald-50 p-3 rounded flex items-start gap-2 animate-fadeIn text-[11px] text-emerald-800">
              <div className="p-1 rounded bg-emerald-100 text-emerald-600 shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-emerald-700">Report Delivered Instantly</div>
                <div className="text-[10px] text-neutral-600 mt-0.5">PDF report and interactive web-viewer link sent to {activeCase.dentist} on WhatsApp. WhatsApp message ID: <span className="underline">WA_7741_REPT</span>.</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default RadiologistPreview;
