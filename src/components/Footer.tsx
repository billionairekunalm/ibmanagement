import React from 'react';
import { Link } from 'react-router-dom';
import { Activity } from 'lucide-react';
import { COPY } from '../content/copy';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dicom-darker border-t border-dicom-border font-mono text-[10px] text-dicom-textMuted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-dicom-border/50 pb-8">
          {/* Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-accent-amber" />
              <span className="font-bold text-xs tracking-wider text-dicom-bone">
                {COPY.brandSecondary}
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 font-sans leading-relaxed">
              Operating system for CBCT & dental imaging centres. Designed & developed in Pune, India.
            </p>
            <div className="text-[9px] text-neutral-600 font-sans">
              GST Registration: 27AACCI8820B1ZS
            </div>
          </div>

          {/* Product Sitemap */}
          <div>
            <h4 className="text-[11px] font-bold text-dicom-bone uppercase mb-3 tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/product" className="hover:text-accent-amber transition-colors">How it works</Link></li>
              <li><Link to="/product/technician" className="hover:text-accent-amber transition-colors">Technician Dashboard</Link></li>
              <li><Link to="/product/radiologist" className="hover:text-accent-amber transition-colors">Radiologist Worklist</Link></li>
              <li><Link to="/product/admin" className="hover:text-accent-amber transition-colors">Owner & Admin Panel</Link></li>
              <li><Link to="/product/dentist-app" className="hover:text-accent-amber transition-colors">Referring Dentist App</Link></li>
            </ul>
          </div>

          {/* Solutions & Resources */}
          <div>
            <h4 className="text-[11px] font-bold text-dicom-bone uppercase mb-3 tracking-wider">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/pricing" className="hover:text-accent-amber transition-colors">Subscription Pricing</Link></li>
              <li><Link to="/who-its-for" className="hover:text-accent-amber transition-colors">Who it\'s for</Link></li>
              <li><Link to="/security" className="hover:text-accent-amber transition-colors">Data Security (DPDP)</Link></li>
              <li><Link to="/switching" className="hover:text-accent-amber transition-colors">WhatsApp Migration</Link></li>
              <li><Link to="/resources" className="hover:text-accent-amber transition-colors">Guides & Articles</Link></li>
            </ul>
          </div>

          {/* Contacts & HQ */}
          <div className="space-y-2 text-neutral-500 font-sans">
            <h4 className="text-[11px] font-bold text-dicom-bone uppercase mb-3 tracking-wider font-mono">HQ Office</h4>
            <p className="leading-relaxed text-[10px]">
              {COPY.contact.address}
            </p>
            <div className="pt-2 text-[10px]">
              <span className="font-mono text-neutral-500">Sales:</span> <a href={`mailto:${COPY.contact.email}`} className="text-dicom-bone hover:text-accent-amber font-mono">{COPY.contact.email}</a>
            </div>
            <div className="text-[10px]">
              <span className="font-mono text-neutral-500">Support:</span> <a href={`mailto:${COPY.contact.supportEmail}`} className="text-dicom-bone hover:text-accent-amber font-mono">{COPY.contact.supportEmail}</a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-neutral-600 font-sans">
          <div>
            &copy; {currentYear} {COPY.companyName}. All rights reserved. Registered in Maharashtra, India.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-dicom-bone transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-dicom-bone transition-colors">Terms of Service</Link>
            <Link to="/dpa" className="hover:text-dicom-bone transition-colors">DPA (Data Processing Addendum)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
