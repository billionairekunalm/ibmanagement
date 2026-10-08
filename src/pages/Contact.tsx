import React from 'react';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { COPY } from '../content/copy';

export const Contact: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(COPY.demoForm.whatsappPrefill);
    const whatsappUrl = `https://wa.me/${COPY.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Support
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-mono text-dicom-bone">
          {COPY.contact.title}
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          {COPY.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto font-mono text-xs text-neutral-400">
        {/* Contact Info list */}
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="p-3 bg-dicom-dark border border-dicom-border rounded text-accent-amber shrink-0 h-fit">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-dicom-bone uppercase text-[10px] tracking-wider mb-1">Email Coordinates</h4>
              <p className="font-sans text-[11px] mb-1">Send a message to our business desks.</p>
              <div className="space-y-1">
                <div>Sales: <a href={`mailto:${COPY.contact.email}`} className="text-accent-amber hover:underline">{COPY.contact.email}</a></div>
                <div>Support: <a href={`mailto:${COPY.contact.supportEmail}`} className="text-accent-amber hover:underline">{COPY.contact.supportEmail}</a></div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-dicom-dark border border-dicom-border rounded text-accent-amber shrink-0 h-fit">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-dicom-bone uppercase text-[10px] tracking-wider mb-1">Phone Line</h4>
              <p className="font-sans text-[11px] mb-1">Monday through Saturday, 9:00 AM to 7:00 PM IST.</p>
              <a href={`tel:${COPY.contact.phone}`} className="text-accent-amber hover:underline text-sm font-bold">{COPY.contact.phone}</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="p-3 bg-dicom-dark border border-dicom-border rounded text-accent-amber shrink-0 h-fit">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-dicom-bone uppercase text-[10px] tracking-wider mb-1">Pune Office</h4>
              <p className="font-sans text-[11px] leading-relaxed max-w-xs">{COPY.contact.address}</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Card */}
        <div className="bg-dicom-dark border border-dicom-border p-6 rounded-lg flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <h4 className="font-bold text-accent-amber uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4 text-[#25D366]" /> Chat on WhatsApp
            </h4>
            <p className="font-sans text-neutral-400 leading-relaxed text-xs">
              WhatsApp is the fastest channel to get a customized commercial quote or verify if your CBCT model is compatible with our uploader node.
            </p>
          </div>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded flex items-center justify-center gap-1.5 transition-all text-xs font-sans cursor-pointer"
          >
            Start WhatsApp Chat
          </button>
        </div>
      </div>

    </div>
  );
};
export default Contact;
