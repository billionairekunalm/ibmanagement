import React from 'react';

export const Demo: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <span className="inline-flex items-center gap-1.5 bg-accent-amber/10 text-accent-amber font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-3 select-none">
          Booking Console
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
          Schedule a 20-minute product walkthrough
        </h1>
        <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed mt-2 font-medium">
          Select a time that works best for you. We will show you live technician uploads, radiologist worklists, and referral analytics.
        </p>
      </div>

      {/* Calendly Inline Widget Card */}
      <div className="bg-white border border-slate-100/80 rounded-3xl shadow-[0_8px_30px_rgba(15,46,74,0.02)] overflow-hidden max-w-4xl mx-auto">
        <div className="w-full h-[680px]">
          <iframe
            src="https://calendly.com/intellobyte?hide_landing_page_details=1&hide_gdpr_banner=1"
            title="Schedule a meeting with Intellobyte"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
export default Demo;
