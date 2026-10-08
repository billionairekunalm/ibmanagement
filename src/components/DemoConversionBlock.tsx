import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Calendar } from 'lucide-react';
import { COPY } from '../content/copy';

export const DemoConversionBlock: React.FC = () => {
  const navigate = useNavigate();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(COPY.demoForm.whatsappPrefill);
    const whatsappUrl = `https://wa.me/${COPY.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-gradient-to-br from-white to-blue-50/20 border border-slate-100/80 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(15,46,74,0.03)] text-center space-y-6 relative overflow-hidden">
        {/* Soft radial glowing blurs for modern depth */}
        <div className="absolute -top-12 -left-12 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 bg-accent-amber/10 text-accent-amber font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-1 select-none">
          <Calendar className="w-3.5 h-3.5" /> Booking Console
        </div>

        <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
          Ready to run your CBCT centre like an operating system?
        </h2>

        {/* Low risk promise (three lines) */}
        <p className="text-slate-500 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-sans font-medium">
          On our 20-minute call, we will demonstrate the workflow using your scan volume, show how we sync with your specific CBCT model, and deliver a custom commercial quote. No sales pressure, no obligation.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-10">
          <button
            onClick={() => navigate('/demo')}
            className="w-full sm:w-auto bg-accent-amber hover:bg-accent-amberDark text-white font-bold px-7 py-3 rounded-full text-xs md:text-sm shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            Book a 20-minute demo
          </button>
          
          <button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-7 py-3 rounded-full text-xs md:text-sm shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            Get a quote on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};
export default DemoConversionBlock;
