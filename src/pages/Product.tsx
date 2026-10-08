import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, ShieldCheck, Cpu, Smartphone } from 'lucide-react';
import ProductGallery from '../components/ProductGallery';

export const Product: React.FC = () => {

  const moduleCards = [
    {
      id: 'technician',
      name: '1. Technician Station',
      desc: 'Controls intake and ensures DICOM volumes upload instantly with auto-retry mechanisms.',
      icon: Cpu,
      link: '/product/technician',
      badge: 'Capture & QC'
    },
    {
      id: 'radiologist',
      name: '2. Radiologist Desk',
      desc: 'Provides structured reporting templates and secure digital signatures inside a prioritized queue.',
      icon: ShieldCheck,
      link: '/product/radiologist',
      badge: 'Diagnostic reporting'
    },
    {
      id: 'admin',
      name: '3. Admin & Owner Console',
      desc: 'Hosts real-time case TAT tracking, revenue dashboards, and dentist relationship leak alerts.',
      icon: UserCheck,
      link: '/product/admin',
      badge: 'Operations & Billing'
    },
    {
      id: 'dentist-app',
      name: '4. Dentist Mobile App',
      desc: 'Empowers referring dentists to request scans, track cases, and load reports + mobile viewers.',
      icon: Smartphone,
      link: '/product/dentist-app',
      badge: 'Referral Gateway'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Architecture
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone">
          Four workspaces. One real-time operating system.
        </h1>
        <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed">
          Instead of scattering scans, patients, reports, and invoices across WhatsApp groups and Google Drive folders, IB Management Solution connects your entire team in a single secure environment.
        </p>
      </div>

      {/* Real Screenshot Gallery */}
      <ProductGallery />

      {/* Grid of Workspaces */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        {moduleCards.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="bg-dicom-dark border border-dicom-border p-6 rounded-lg flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-dicom-gray rounded border border-dicom-border">
                    <Icon className="w-5 h-5 text-accent-amber" />
                  </div>
                  <span className="text-[9px] font-mono bg-neutral-900 border border-dicom-border px-2 py-0.5 rounded text-neutral-400">
                    {card.badge}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold font-sans text-dicom-bone">{card.name}</h3>
                
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-dicom-border/50 flex justify-between items-center">
                <Link
                  to={card.link}
                  className="text-[10px] font-bold font-mono text-accent-amber hover:underline flex items-center gap-1"
                >
                  Explore Features & UI Preview <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Architectural MOAT */}
      <div className="bg-dicom-darker border border-dicom-border p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent-amber block uppercase tracking-wider">DICOM Ingest</span>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
              We sync directly with acquisition computers. The moment a technician captures a CBCT or OPG scan, our background listener extracts headers and uploads it. No manual file dragging.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent-amber block uppercase tracking-wider">WhatsApp API</span>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
              Reports and lightweight 3D web-viewer links are delivered to the referring dentist\'s phone immediately upon sign-off, bypassing email delays.
            </p>
          </div>
          <div className="space-y-2">
            <span className="font-mono text-xs text-accent-amber block uppercase tracking-wider">Reconciliation Log</span>
            <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
              Every scan creates an automatic invoice record. Out-standing balances, referral fees, and radiologist pay-per-case retainers are compiled without spreadsheet scrolling.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Product;
