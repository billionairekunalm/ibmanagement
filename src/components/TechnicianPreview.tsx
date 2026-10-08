import React, { useState, useEffect } from 'react';
import { Check, Upload, AlertCircle } from 'lucide-react';

export const TechnicianPreview: React.FC = () => {
  const [patient] = useState({
    name: 'Anita Rajan',
    age: '42',
    gender: 'Female',
    referringDoctor: 'Dr. S. Patil',
    scanType: 'Full Arch CBCT (Mandible + Maxilla)',
    exposureTime: '20s',
    kv: '120',
    ma: '5.0'
  });

  const [qcChecks, setQcChecks] = useState({
    patientIdentity: true,
    noMetallicArtifacts: true,
    correctFieldOfView: true,
    motionBlurCheck: false
  });

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'completed' | 'paused'>('idle');
  const [networkStable, setNetworkStable] = useState(true);

  // Upload simulation
  useEffect(() => {
    let timer: number;
    if (uploadStatus === 'uploading') {
      timer = window.setInterval(() => {
        setUploadProgress((prev) => {
          if (!networkStable) {
            setUploadStatus('paused');
            return prev;
          }
          if (prev < 100) {
            return prev + 8;
          } else {
            setUploadStatus('completed');
            clearInterval(timer);
            return 100;
          }
        });
      }, 300);
    }
    return () => clearInterval(timer);
  }, [uploadStatus, networkStable]);

  const toggleCheck = (key: keyof typeof qcChecks) => {
    setQcChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const startUpload = () => {
    if (uploadStatus === 'completed') {
      setUploadProgress(0);
    }
    setUploadStatus('uploading');
  };

  const simulateNetworkDrop = () => {
    setNetworkStable(prev => !prev);
    if (uploadStatus === 'paused') {
      setUploadStatus('uploading');
    }
  };

  return (
    <div className="w-full bg-dicom-dark border border-dicom-border rounded-lg p-5 font-mono text-xs text-dicom-bone">
      {/* View Title */}
      <div className="flex justify-between items-center border-b border-dicom-border pb-3 mb-4">
        <span className="font-bold text-accent-amber">TECHNICIAN STATION #01</span>
        <span className="bg-dicom-gray px-2 py-0.5 rounded text-[10px] text-dicom-textMuted">VITE_DICOM_NODE v2.0.1</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Intake Info & Exposure */}
        <div className="space-y-4">
          <div className="bg-dicom-darker border border-dicom-border rounded p-3">
            <h4 className="font-semibold text-accent-amber mb-2 uppercase text-[10px] tracking-wider">Patient Intake & Referral Info</h4>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between"><span className="text-neutral-500">Name:</span> <span className="font-medium">{patient.name}</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Age / Sex:</span> <span>{patient.age} yrs / {patient.gender}</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Referred By:</span> <span className="text-blue-400">{patient.referringDoctor}</span></div>
              <div className="flex justify-between"><span className="text-neutral-500">Scan Required:</span> <span className="text-dicom-bone">{patient.scanType}</span></div>
            </div>
          </div>

          <div className="bg-dicom-darker border border-dicom-border rounded p-3">
            <h4 className="font-semibold text-neutral-400 mb-2 uppercase text-[10px] tracking-wider">Exposure Telemetry</h4>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="bg-dicom-gray p-1.5 border border-dicom-border rounded">
                <span className="text-neutral-500 block">KVP</span>
                <span className="font-bold text-dicom-bone">{patient.kv} kV</span>
              </div>
              <div className="bg-dicom-gray p-1.5 border border-dicom-border rounded">
                <span className="text-neutral-500 block">MA</span>
                <span className="font-bold text-dicom-bone">{patient.ma} mA</span>
              </div>
              <div className="bg-dicom-gray p-1.5 border border-dicom-border rounded">
                <span className="text-neutral-500 block">TIME</span>
                <span className="font-bold text-dicom-bone">{patient.exposureTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* QC Checklist & Upload */}
        <div className="space-y-4">
          <div className="bg-dicom-darker border border-dicom-border rounded p-3">
            <h4 className="font-semibold text-neutral-400 mb-2 uppercase text-[10px] tracking-wider">Quality Control (QC) Checklist</h4>
            <div className="space-y-2">
              {Object.keys(qcChecks).map((key) => {
                const checked = qcChecks[key as keyof typeof qcChecks];
                const label = key
                  .replace(/([A-Z])/g, ' $1')
                  .replace(/^./, (str) => str.toUpperCase());
                return (
                  <button
                    key={key}
                    onClick={() => toggleCheck(key as keyof typeof qcChecks)}
                    className="flex items-center justify-between w-full text-left p-1.5 rounded hover:bg-dicom-gray border border-transparent hover:border-dicom-border transition-all text-[11px]"
                  >
                    <span>{label}</span>
                    <span className={`w-4 h-4 rounded border flex items-center justify-center ${checked ? 'border-accent-amber bg-accent-amber/10 text-accent-amber' : 'border-neutral-700'}`}>
                      {checked && <Check className="w-3 h-3" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-dicom-darker border border-dicom-border rounded p-3">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-neutral-400 uppercase text-[10px] tracking-wider">DICOM Upload Pipeline</h4>
              <button 
                onClick={simulateNetworkDrop}
                className={`text-[9px] px-1.5 py-0.5 rounded border transition-all ${
                  networkStable 
                    ? 'border-emerald-900 bg-emerald-950/20 text-emerald-400' 
                    : 'border-rose-900 bg-rose-950/20 text-rose-400 animate-pulse'
                }`}
              >
                {networkStable ? 'Network: Stable' : 'Network: Interrupted'}
              </button>
            </div>

            {/* Progress indicator */}
            <div className="space-y-3">
              <div className="bg-black h-5 border border-dicom-border rounded overflow-hidden relative flex items-center justify-center">
                <div 
                  className={`absolute left-0 top-0 bottom-0 transition-all duration-300 ${
                    uploadStatus === 'paused' ? 'bg-amber-600/30' : 'bg-accent-amber/20'
                  }`}
                  style={{ width: `${uploadProgress}%` }}
                />
                <span className="z-10 text-[10px] font-bold">
                  {uploadStatus === 'idle' && 'READY TO UPLOAD (242.4 MB)'}
                  {uploadStatus === 'uploading' && `UPLOADING... ${uploadProgress}%`}
                  {uploadStatus === 'paused' && `INTERRUPTED · RESUMING ON RECONNECT... (${uploadProgress}%)`}
                  {uploadStatus === 'completed' && 'UPLOAD SECURE · DICOM SYNC PASSED'}
                </span>
              </div>

              {/* Upload Controls */}
              <div className="flex gap-2">
                <button
                  disabled={uploadStatus === 'uploading' || !Object.values(qcChecks).every(Boolean)}
                  onClick={startUpload}
                  className={`flex-1 py-1.5 rounded flex items-center justify-center gap-1.5 font-bold transition-all border ${
                    Object.values(qcChecks).every(Boolean)
                      ? 'bg-accent-amber text-dicom-black border-accent-amber hover:bg-accent-amber/90 cursor-pointer'
                      : 'bg-dicom-gray text-neutral-600 border-dicom-border cursor-not-allowed'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  {uploadStatus === 'completed' ? 'Re-upload Scan' : 'Upload to Cloud'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!Object.values(qcChecks).every(Boolean) && (
        <div className="mt-3 flex items-center gap-1.5 text-[9px] text-amber-700 bg-amber-50 border border-amber-200 p-2 rounded">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Complete all quality checks (including Motion Blur Check) to enable the secure DICOM cloud upload.</span>
        </div>
      )}
    </div>
  );
};
export default TechnicianPreview;
