import React, { useState } from 'react';

export const DicomSlice: React.FC = () => {
  const [crosshair, setCrosshair] = useState({ x: 150, y: 150 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(Math.max(0, e.clientX - rect.left), rect.width);
    const y = Math.min(Math.max(0, e.clientY - rect.top), rect.height);
    setCrosshair({ x: Math.round(x), y: Math.round(y) });
  };

  return (
    <div className="relative border border-dicom-border bg-dicom-darker p-4 font-mono text-[10px] text-dicom-textMuted select-none w-full max-w-[320px] rounded">
      {/* Top telemetry tags */}
      <div className="flex justify-between mb-2 text-neutral-500">
        <div>ID: #4471_VOL</div>
        <div>KV: 120 / MA: 5.0</div>
      </div>
      
      {/* Viewport container */}
      <div className="relative border border-dicom-border bg-black aspect-square overflow-hidden cursor-crosshair">
        <svg
          className="w-full h-full"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Simulated CBCT axial slice of skull/jaw structure */}
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#121214" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Bone contours - simulated sagittal/axial jaw structure */}
          <path
            d="M 60,150 Q 80,70 150,70 Q 220,70 240,150 Q 250,200 230,220 Q 210,235 150,230 Q 90,235 70,220 Q 50,200 60,150 Z"
            fill="none"
            stroke="#44444f"
            strokeWidth="3"
            strokeDasharray="4 2"
          />
          <path
            d="M 75,150 Q 90,85 150,85 Q 210,85 225,150 Q 230,185 210,200 Q 185,210 150,208 Q 115,210 90,200 Q 70,185 75,150 Z"
            fill="none"
            stroke="#888899"
            strokeWidth="1.5"
          />
          
          {/* Root teeth sockets / dense bone dots */}
          <circle cx="95" cy="115" r="4" fill="#33333f" />
          <circle cx="120" cy="98" r="5" fill="#33333f" />
          <circle cx="150" cy="93" r="5" fill="#33333f" />
          <circle cx="180" cy="98" r="5" fill="#33333f" />
          <circle cx="205" cy="115" r="4" fill="#33333f" />

          {/* Interactive Crosshairs */}
          {isHovered && (
            <>
              {/* Horizontal crosshair */}
              <line x1="0" y1={crosshair.y} x2="300" y2={crosshair.y} stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
              {/* Vertical crosshair */}
              <line x1={crosshair.x} y1="0" x2={crosshair.x} y2="300" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6" />
              {/* Intersection circle */}
              <circle cx={crosshair.x} cy={crosshair.y} r="6" fill="none" stroke="#f59e0b" strokeWidth="1" opacity="0.8" />
              <circle cx={crosshair.x} cy={crosshair.y} r="1.5" fill="#f59e0b" />
            </>
          )}

          {/* Orientation indicators */}
          <text x="10" y="155" fill="#555562" textAnchor="middle">A</text>
          <text x="290" y="155" fill="#555562" textAnchor="middle">P</text>
          <text x="150" y="15" fill="#555562" textAnchor="middle">R</text>
          <text x="150" y="290" fill="#555562" textAnchor="middle">L</text>
        </svg>

        {/* Live coordinate overlay */}
        {isHovered && (
          <div className="absolute bottom-1 right-2 bg-dicom-black/80 px-1 py-0.5 border border-dicom-border rounded text-[9px]">
            X: {crosshair.x} Y: {crosshair.y} Z: 142
          </div>
        )}
      </div>

      {/* Bottom status line */}
      <div className="flex justify-between mt-2 text-neutral-500">
        <div>WINDOW: BONE (2000 / 500)</div>
        <div className="text-accent-amber font-semibold">DICOM READY</div>
      </div>
    </div>
  );
};
export default DicomSlice;
