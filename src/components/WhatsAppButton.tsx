import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { COPY } from '../content/copy';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show after 2 seconds
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(COPY.demoForm.whatsappPrefill);
    const whatsappUrl = `https://wa.me/${COPY.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-[290px] bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_10px_30px_rgba(15,46,74,0.08)] font-sans animate-slideUp">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-blue-50 text-accent-amber flex items-center justify-center font-bold text-xs uppercase">
              IB
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-white animate-pulse" />
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-800 text-[11px] leading-none">Intellobyte Sales</div>
            <span className="text-[9px] text-[#25D366] font-semibold flex items-center gap-1 mt-0.5">
              Online • Responds in 5 mins
            </span>
          </div>
        </div>
        <button 
          onClick={() => { setIsDismissed(true); setIsVisible(false); }} 
          className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-50"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
      
      <p className="text-slate-500 leading-relaxed mb-3 text-[11px] font-medium text-left">
        Get a commercial quotation customized for your scan volume in 5 minutes on WhatsApp.
      </p>

      <button
        onClick={handleWhatsAppClick}
        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-2.5 rounded-full flex items-center justify-center gap-2 transition-all duration-200 text-xs shadow-soft hover:shadow-medium hover:-translate-y-0.5 cursor-pointer"
      >
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Message on WhatsApp
      </button>
    </div>
  );
};
export default WhatsAppButton;
