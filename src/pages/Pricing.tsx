import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Info, HelpCircle, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { COPY } from '../content/copy';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setExpandedFaqIdx(expandedFaqIdx === idx ? null : idx);
  };

  const getPlanPrice = (basePrice: number) => {
    if (isAnnual) {
      // 2 months free -> basePrice * 10
      return Math.round((basePrice * 10) / 12);
    }
    return basePrice;
  };

  const getAnnualTotal = (basePrice: number) => {
    return basePrice * 10;
  };

  const addOns = [
    { name: 'Extra Cloud Storage', price: '₹1,500 / TB / month', desc: 'Secure PACS-grade storage for raw volumetric DICOM files.' },
    { name: 'Branded Dentist App', price: '₹5,000 / month', desc: 'Your own custom application on the Play Store with your logo and domain name.' },
    { name: 'Extra WhatsApp Credits', price: '₹0.50 / message', desc: 'Sent when exceeding your plan\'s bundled message credits.' },
    { name: 'Additional Centre Console', price: '₹3,000 / location / month', desc: 'Link multiple imaging branches under one admin console.' }
  ];

  const pricingFaqs = [
    {
      q: 'What counts as a scan or case?',
      a: 'Any single patient registration that triggers a scan upload (CBCT or OPG) is counted as one scan. If a patient is registered once and has both a mandible and maxilla scan under a single case ID, it counts as one scan.'
    },
    {
      q: 'What happens if we exceed the monthly scan band limit?',
      a: 'We never block your uploads or stop operations. If you exceed your limit, you will be billed a minor overage fee of ₹50 per scan, or you can choose to upgrade to the next band at any time.'
    },
    {
      q: 'Is there a setup fee or lock-in contract?',
      a: 'There is a one-time onboarding fee of ₹5,000 (waived if you choose annual billing) which covers data migration and hardware sync config. Subscriptions are billed month-to-month and can be cancelled at any time.'
    },
    {
      q: 'Does it support NEFT / UPI payments?',
      a: 'Yes, we support NEFT, RTGS, UPI, and net banking transfers. Invoices are generated on the 1st of each month with 18% GST details.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="font-mono text-[9px] text-accent-amber border border-accent-amber/20 bg-accent-amber/5 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
          Plans
        </span>
        <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone">
          {COPY.pricing.title}
        </h1>
        <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
          {COPY.pricing.subtitle}
        </p>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-3 pt-6">
          <span className={`text-xs font-mono ${!isAnnual ? 'text-dicom-bone font-bold' : 'text-neutral-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-10 h-5 bg-dicom-gray rounded-full relative p-0.5 border border-dicom-border transition-colors focus:outline-none"
          >
            <div className={`w-3.5 h-3.5 bg-accent-amber rounded-full transition-transform ${isAnnual ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
          <span className={`text-xs font-mono flex items-center gap-1.5 ${isAnnual ? 'text-dicom-bone font-bold' : 'text-neutral-500'}`}>
            Annual <span className="bg-accent-amber/10 border border-accent-amber/20 text-accent-amber text-[8px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">{COPY.pricing.annualSaving}</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {COPY.pricing.plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-dicom-dark border rounded-lg p-6 flex flex-col justify-between relative ${
              plan.isPopular ? 'border-accent-amber shadow-[0_0_15px_rgba(245,158,11,0.08)]' : 'border-dicom-border'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-2.5 right-6 bg-accent-amber text-dicom-black font-bold text-[8px] font-mono px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-neutral-400 font-mono uppercase tracking-wider">{plan.name}</h3>
              
              <div className="space-y-1">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold font-mono text-dicom-bone">
                    ₹{getPlanPrice(plan.priceMonthly).toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-neutral-500 font-mono ml-1">/mo</span>
                </div>
                {isAnnual && (
                  <div className="text-[9px] text-neutral-500 font-mono">
                    Billed annually at ₹{getAnnualTotal(plan.priceMonthly).toLocaleString('en-IN')}/yr
                  </div>
                )}
                <div className="text-[10px] text-accent-amber font-mono font-semibold pt-1">
                  {plan.scansIncluded}
                </div>
              </div>

              {/* Package specs */}
              <div className="space-y-2 border-y border-dicom-border/50 py-4 font-sans text-xs text-neutral-400">
                <div className="flex justify-between font-mono text-[10px]"><span className="text-neutral-500">Logins:</span> <span className="text-dicom-bone">Unlimited staff logins</span></div>
                <div className="flex justify-between font-mono text-[10px]"><span className="text-neutral-500">Storage:</span> <span className="text-dicom-bone">{plan.storage}</span></div>
                <div className="flex justify-between font-mono text-[10px]"><span className="text-neutral-500">WhatsApp:</span> <span className="text-dicom-bone">{plan.whatsapp}</span></div>
                <div className="flex justify-between font-mono text-[10px]"><span className="text-neutral-500">Support:</span> <span className="text-dicom-bone">{plan.support}</span></div>
              </div>

              {/* Feature checklist */}
              <ul className="space-y-2.5 pt-2 text-[11px] text-neutral-400 font-sans">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-accent-amber shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => navigate('/demo')}
              className={`w-full text-center py-2.5 rounded font-bold font-sans text-xs mt-8 transition-all cursor-pointer border ${
                plan.isPopular 
                  ? 'bg-accent-amber text-dicom-black border-accent-amber hover:bg-accent-amber/90' 
                  : 'bg-dicom-gray text-dicom-bone border-dicom-border hover:bg-dicom-border'
              }`}
            >
              Book a demo
            </button>
          </div>
        ))}
      </div>

      {/* Slogans block */}
      <div className="bg-dicom-darker border border-dicom-border p-5 rounded-lg flex flex-wrap justify-around gap-4 text-center">
        {COPY.pricing.rules.map((rule, idx) => (
          <div key={idx} className="flex items-center gap-2 font-mono text-[11px] text-dicom-bone">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{rule}</span>
          </div>
        ))}
      </div>

      {/* Onboarding info */}
      <div className="text-center font-mono text-[10px] text-neutral-500">
        <Info className="w-3.5 h-3.5 text-accent-amber inline mr-1 -mt-0.5" />
        <span>{COPY.pricing.onboardingSlogan}</span>
      </div>

      {/* TCO Block */}
      <section className="bg-dicom-darker border border-dicom-border p-6 md:p-8 rounded-lg max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-2 border-b border-dicom-border/50 pb-4">
          <Calculator className="w-5 h-5 text-accent-amber" />
          <h2 className="font-mono text-sm md:text-base font-bold text-dicom-bone uppercase">
            {COPY.pricing.tco.title}
          </h2>
        </div>
        
        <p className="text-[11px] text-neutral-600 font-sans leading-relaxed">
          {COPY.pricing.tco.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[11px] font-mono">
          {/* Manual cost */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-neutral-500 border-b border-dicom-border pb-1.5 uppercase">Manual Coordination</div>
            <ul className="space-y-2">
              {COPY.pricing.tco.manual.slice(0, 4).map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-neutral-500">{item.label}</span>
                  <span>{item.cost}</span>
                </li>
              ))}
              <li className="flex justify-between border-t border-dashed border-dicom-border/70 pt-2 font-bold text-rose-600">
                <span>{COPY.pricing.tco.manual[4].label}</span>
                <span>{COPY.pricing.tco.manual[4].cost}</span>
              </li>
            </ul>
          </div>

          {/* IBMS cost */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-accent-amber border-b border-dicom-border pb-1.5 uppercase">IB Management Solution</div>
            <ul className="space-y-2">
              {COPY.pricing.tco.ibms.slice(0, 4).map((item, i) => (
                <li key={i} className="flex justify-between">
                  <span className="text-neutral-500">{item.label}</span>
                  <span>{item.cost}</span>
                </li>
              ))}
              <li className="flex justify-between border-t border-dashed border-dicom-border/70 pt-2 font-bold text-emerald-600">
                <span>{COPY.pricing.tco.ibms[4].label}</span>
                <span>{COPY.pricing.tco.ibms[4].cost}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center bg-emerald-50 border border-emerald-200 p-3 rounded font-mono font-bold text-emerald-700 text-[10px]">
          {COPY.pricing.tco.saving}
        </div>
      </section>

      {/* Add-ons list */}
      <section className="space-y-6">
        <h2 className="font-mono text-center font-bold text-sm md:text-base uppercase tracking-wider text-neutral-400">
          Optional Add-On Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {addOns.map((add) => (
            <div key={add.name} className="bg-dicom-dark border border-dicom-border p-4 rounded flex justify-between gap-4 font-mono">
              <div className="space-y-1">
                <div className="text-xs font-bold text-dicom-bone">{add.name}</div>
                <div className="text-[10px] text-neutral-500 font-sans leading-normal">{add.desc}</div>
              </div>
              <div className="text-xs font-bold text-accent-amber shrink-0 text-right">
                {add.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="font-mono text-center font-bold text-sm md:text-base uppercase tracking-wider text-neutral-400 mb-6 flex justify-center items-center gap-1">
          <HelpCircle className="w-4 h-4 text-accent-amber" /> Pricing FAQ
        </h2>
        
        <div className="border border-dicom-border rounded-lg bg-dicom-dark divide-y divide-dicom-border font-sans">
          {pricingFaqs.map((faq, idx) => {
            const isExpanded = expandedFaqIdx === idx;
            return (
              <div key={idx} className="transition-all">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-3 flex justify-between items-center text-xs md:text-sm font-semibold text-dicom-bone hover:bg-dicom-gray/30 transition-colors"
                >
                  <span className="font-mono font-medium">{faq.q}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-accent-amber shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-4 text-xs text-neutral-400 leading-relaxed font-sans animate-slideDown">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
export default Pricing;
