import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Activity } from 'lucide-react';
import { NAV_LINKS, COPY } from '../content/copy';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-dicom-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <Activity className="w-5 h-5 text-accent-amber group-hover:scale-110 transition-transform" />
              <span className="font-sans font-extrabold text-sm tracking-tight text-dicom-bone group-hover:text-accent-amber transition-colors">
                {COPY.brandSecondary} <span className="text-[10px] text-neutral-400 font-medium tracking-normal">Management</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs font-semibold text-dicom-textMuted hover:text-dicom-bone transition-colors font-sans"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => navigate('/pricing')}
              className="text-xs font-semibold text-dicom-bone hover:text-accent-amber border border-transparent px-3 py-1.5 rounded-full transition-all font-sans"
            >
              See pricing
            </button>
            <button
              onClick={() => navigate('/demo')}
              className="text-xs font-bold bg-accent-amber text-white hover:bg-accent-amber/90 px-5 py-2 rounded-full shadow-soft hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200 font-sans cursor-pointer"
            >
              Book a demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dicom-textMuted hover:text-dicom-bone hover:bg-dicom-gray focus:outline-none focus:ring-1 focus:ring-accent-amber"
            >
              {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-dicom-dark border-b border-dicom-border animate-slideDown">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-dicom-textMuted hover:text-dicom-bone hover:bg-dicom-gray transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-4 px-5 border-t border-dicom-border flex flex-col gap-2">
            <button
              onClick={() => { setIsOpen(false); navigate('/pricing'); }}
              className="w-full text-center py-2 rounded text-sm font-medium text-dicom-bone bg-dicom-gray hover:bg-dicom-border border border-dicom-border transition-all"
            >
              See pricing
            </button>
            <button
              onClick={() => { setIsOpen(false); navigate('/demo'); }}
              className="w-full text-center py-2 rounded text-sm font-bold bg-accent-amber text-dicom-black hover:bg-accent-amber/90 transition-all"
            >
              Book a demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
