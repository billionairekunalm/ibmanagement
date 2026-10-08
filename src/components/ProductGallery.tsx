import React, { useState } from 'react';
import { LayoutDashboard, CalendarDays, Landmark, Users } from 'lucide-react';

interface ScreenshotTab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  imagePath: string;
  caption: string;
  description: string;
}

export const ProductGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ops');

  const tabs: ScreenshotTab[] = [
    {
      id: 'ops',
      label: 'Live Operations Hub',
      icon: LayoutDashboard,
      imagePath: '/images/dashboard.png',
      caption: 'Real-time intake monitoring at the Ravet centre, displaying scan category counters (CBCT vs 2D) and pending radiologist sign-off alerts.',
      description: 'The technician console updates automatically when patients arrive, capturing scan categories (e.g., 3D/CBCT Suite vs. 2D Scan Suite) and indicating active staff statuses in real time.'
    },
    {
      id: 'queue',
      label: 'Intake Queue & Appointments',
      icon: CalendarDays,
      imagePath: '/images/appointments.png',
      caption: 'Real-time appointments ledger displaying referring doctor accounts (e.g. Ketan Patil, Lakshmi Shetty) and patient categories.',
      description: 'This centralized table lists case details, patient age/mobile parameters, scan categories (e.g. CBCT Maxilla Only), and billing details. Includes status tags tracking workflow completions.'
    },
    {
      id: 'finance',
      label: 'Revenue & Commission Audits',
      icon: Landmark,
      imagePath: '/images/revenue.png',
      caption: 'Operational revenue console showing profit breakdowns, operational expenses, and collections categorized by payment mode.',
      description: 'Calculates total network revenue, net profit margins, commissions owed to referring doctors, and aggregates collection splits by Cash, UPI, and Card. Bypasses manual ledger calculation.'
    },
    {
      id: 'staff',
      label: 'Staff Attendance & Roster',
      icon: Users,
      imagePath: '/images/staff.png',
      caption: 'Staff management interface showing coordinators, active centers, and hourly rates per role.',
      description: 'Coordinates schedules and records clock-in timestamps for administrators, radiologists, and clinic coordinators across all 6 active locations.'
    }
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const Icon = currentTab.icon;

  return (
    <div className="w-full bg-dicom-darker border border-dicom-border rounded-2xl p-6 shadow-medium font-sans">
      
      {/* Gallery Header */}
      <div className="border-b border-dicom-border pb-4 mb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            Interface Tour
          </span>
          <h3 className="text-base md:text-lg font-bold text-dicom-bone font-mono mt-1">
            See the platform inside the imaging room.
          </h3>
        </div>
        
        {/* Tabs selector */}
        <div className="flex flex-wrap gap-1.5 bg-dicom-black p-1 rounded-lg border border-dicom-border">
          {tabs.map((tab) => {
            const TabIcon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[10px] font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-dicom-bone shadow-sm border border-dicom-border/50'
                    : 'text-neutral-500 hover:text-dicom-bone'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Screenshot Render Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Caption & Copy (4 cols) */}
        <div className="lg:col-span-4 space-y-4 pt-2">
          <div className="flex items-center gap-2 text-accent-amber">
            <Icon className="w-5 h-5" />
            <h4 className="font-mono font-bold text-sm text-dicom-bone">{currentTab.label}</h4>
          </div>
          
          <p className="text-xs text-neutral-600 leading-relaxed font-sans">
            {currentTab.description}
          </p>

          <div className="border-t border-dicom-border/80 pt-4 text-[10px] text-neutral-500 font-mono italic leading-relaxed">
            {currentTab.caption}
          </div>
        </div>

        {/* Image Frame (8 cols) */}
        <div className="lg:col-span-8 bg-dicom-black border border-dicom-border rounded-xl p-2.5 shadow-inner">
          <div className="relative overflow-hidden rounded-lg aspect-[16/9] border border-dicom-border/50 bg-neutral-900 group">
            <img
              src={currentTab.imagePath}
              alt={currentTab.label}
              className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 cursor-zoom-in"
              onClick={() => window.open(currentTab.imagePath, '_blank')}
              title="Click to view full resolution"
            />
            {/* Telemetry metadata footer */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-3 py-1.5 text-[9px] text-neutral-400 font-mono flex justify-between border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
              <span>MAPPED: RAW FILE STORAGE</span>
              <span>RESOLVED: 1920 x 1080</span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default ProductGallery;
