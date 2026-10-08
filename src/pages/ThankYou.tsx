import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, MessageSquare, Calendar, PhoneCall, ArrowLeft } from 'lucide-react';
import { COPY } from '../content/copy';

export const ThankYou: React.FC = () => {
  const navigate = useNavigate();

  // Prefilled WhatsApp link
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(COPY.demoForm.whatsappPrefill);
    const whatsappUrl = `https://wa.me/${COPY.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 text-center font-mono text-xs space-y-6">
      
      {/* Icon */}
      <div className="inline-flex p-3 bg-emerald-950/20 border border-emerald-900 rounded-full text-emerald-400">
        <CheckCircle2 className="w-12 h-12" />
      </div>

      <div className="space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-dicom-bone">Demo Request Registered Successfully</h1>
        <p className="text-[11px] text-neutral-400 font-sans max-w-md mx-auto leading-relaxed">
          {COPY.demoForm.successMessage}
        </p>
      </div>

      {/* Next Steps card */}
      <div className="bg-dicom-dark border border-dicom-border p-5 rounded-lg text-left max-w-md mx-auto space-y-4 font-sans text-neutral-400 text-[11px]">
        <h3 className="font-mono text-xs font-bold text-dicom-bone uppercase text-accent-amber">
          Immediate next steps:
        </h3>
        <ul className="space-y-3 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <MessageSquare className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>WhatsApp Confirmation:</strong> You will receive a ping on your mobile number to pick a convenient slot.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>Calendar Invitation:</strong> A Zoom / Microsoft Teams link will be dispatched to your calendar once selected.</span>
          </li>
          <li className="flex items-start gap-2.5">
            <PhoneCall className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>Workstation Details:</strong> We will request the make/model of your CBCT scanner to prepare the setup profile.</span>
          </li>
        </ul>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-md mx-auto pt-4">
        <button
          onClick={handleWhatsAppClick}
          className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-5 py-2.5 rounded text-xs transition-all font-sans cursor-pointer flex items-center justify-center gap-1.5"
        >
          <MessageSquare className="w-4 h-4" /> Message us on WhatsApp
        </button>
        
        <button
          onClick={() => navigate('/')}
          className="w-full sm:w-auto bg-dicom-gray hover:bg-dicom-border border border-dicom-border text-dicom-bone font-bold px-5 py-2.5 rounded text-xs transition-all font-sans cursor-pointer flex items-center justify-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </button>
      </div>

    </div>
  );
};
export default ThankYou;
