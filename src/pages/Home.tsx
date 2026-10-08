import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Play, Pause } from 'lucide-react';
import { COPY } from '../content/copy';
import WorkflowTour from '../components/WorkflowTour';

const techSteps = [
  {
    title: 'Main control center',
    badge: 'Main Screen',
    desc: 'See today\'s appointments, completed scan counts, and delivered reports in real-time.',
    image: '/images/tech_main.png',
    highlights: ['12 Appointments', '28 Completed Scans', '36 Delivered Reports']
  },
  {
    title: 'Appointments Worklist',
    badge: 'Second Screen',
    desc: 'Track pending and completed patient referrals from referring doctors in real-time.',
    image: '/images/tech_appointments.png',
    highlights: ['Referring Doctors', 'OPG / CBCT Scan Types', 'Pending/Completed Feeds']
  },
  {
    title: 'Patient Intake & Tooth Mapping',
    badge: 'Detail Feature',
    desc: 'Technician registers patient details, maps specific tooth regions on the chart, and adds radiologist notes.',
    image: '/images/tech_scan_details.png',
    highlights: ['Smita Kolhe profile', '2D Oral OPG Services', 'Interactive Tooth Selector']
  },
  {
    title: 'Payment & Billing Collection',
    badge: 'Detail Feature',
    desc: 'Collect standard fees, assign reporting radiologists, apply referral discounts, and enter case notes.',
    image: '/images/tech_payment.png',
    highlights: ['₹800 Standard Charge', 'Anagha Bhelonde Assignment', 'Online UPI & Card Mode']
  },
  {
    title: 'Printable Invoice Receipt',
    badge: 'Invoice Receipt',
    desc: 'Print an automated invoice receipt containing patient info, scan details, and payment modes.',
    image: '/images/tech_receipt.png',
    highlights: ['IDS Pune Center', 'Smita Kolhe Invoice', 'Payment Confirmation']
  }
];

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTechStep, setActiveTechStep] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!iframeRef.current) return;
    const command = isPlaying ? 'pauseVideo' : 'playVideo';
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: command, args: '' }),
      '*'
    );
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!iframeRef.current) return;
        if (entry.isIntersecting) {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'playVideo', args: '' }),
            '*'
          );
          setIsPlaying(true);
        } else {
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({ event: 'command', func: 'pauseVideo', args: '' }),
            '*'
          );
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    const currentTarget = containerRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, []);

  return (
    <div className="space-y-10 pb-20">
      
      {/* 5.1 Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-12 lg:py-0 lg:h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-4rem)] flex items-center bg-white border-b border-dicom-border/50">
        {/* Soft background radial glows and subtle grid patterns */}
        <div className="absolute inset-0 opacity-40 pointer-events-none -z-10">
          <div className="w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
            <div className="lg:col-span-5 space-y-7">
              <div className="inline-flex items-center gap-1.5 bg-accent-amber/10 text-accent-amber font-semibold text-[11px] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-sans select-none mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-amber animate-pulse" />
                Intellobyte CBCT Platform
              </div>

              <h1 className="text-4xl lg:text-[64px] lg:leading-[1.02] font-extrabold font-display text-slate-900 tracking-tight max-w-xl">
                {COPY.hero.tagline}
              </h1>
              
              <p className="text-base lg:text-[19px] text-slate-600 font-sans max-w-lg leading-relaxed font-medium">
                {COPY.hero.subhead}
              </p>

              <div className="flex flex-wrap items-center gap-4.5 pt-2">
                <button
                  onClick={() => navigate('/demo')}
                  className="bg-accent-amber hover:bg-accent-amberDark text-white font-bold px-8 py-4 rounded-full text-xs md:text-sm shadow-soft hover:-translate-y-0.5 hover:shadow-medium transition-all duration-200 font-sans cursor-pointer"
                >
                  {COPY.hero.ctaPrimary}
                </button>
                <button
                  onClick={() => navigate('/pricing')}
                  className="bg-accent-amber/5 hover:bg-accent-amber/10 border border-accent-amber/20 text-accent-amber font-bold px-8 py-4 rounded-full text-xs md:text-sm hover:-translate-y-0.5 transition-all duration-200 font-sans cursor-pointer"
                >
                  {COPY.hero.ctaSecondary}
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[680px] animate-float">
                {/* Subtle glowing halo behind the hardware */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl scale-95 -z-10 animate-pulse duration-[4000ms]" />
                <img
                  src="/images/ecosystem.jpg"
                  alt="IB MS Integrated Software Ecosystem & Carestream CBCT Machine"
                  className="w-full h-auto rounded-[32px] shadow-[0_15px_40px_rgba(15,46,74,0.06)] border border-slate-100/80 hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Process Workflow Tour */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <WorkflowTour />
      </section>

      {/* 5.3 Mobile App Demo Video */}
      <section className="bg-slate-50/60 border-t border-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center mb-12">
            <div className="inline-flex items-center gap-1.5 bg-blue-50/60 text-[#0066cc] border border-blue-100/50 font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-3 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] animate-pulse" />
              App Walkthrough
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto mb-3">
              See the referring doctor app in action
            </h2>
            
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed font-sans font-medium">
              Watch a quick demonstration of case registrations and instant report access directly from the dentist OPD app.
            </p>
          </div>

          {/* Dynamic 3-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
            {/* Left Column: App Screen Features (1 & 2) */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
              {/* Feature 1: Matches Image 1 */}
              <div className="animate-float [animation-duration:5s] flex flex-col items-start lg:items-end text-left lg:text-right select-none">
                <div className="flex items-center gap-2 mb-2 w-full justify-start lg:justify-end">
                  <span className="text-xl font-extrabold font-display text-[#0066cc]/25 lg:hidden">01</span>
                  <h3 className="font-extrabold text-base md:text-[17px] text-slate-900 font-display tracking-tight">One-Click Referral Hub</h3>
                  <span className="text-xl font-extrabold font-display text-[#0066cc]/25 hidden lg:inline">01</span>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed font-sans font-medium max-w-xs">
                  Register patients and CBCT scans in under 5 seconds with active monthly stats.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-start lg:justify-end">
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Monthly Stats</span>
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">+ New Referral</span>
                </div>
              </div>

              {/* Feature 2: Matches Image 2 */}
              <div className="animate-float [animation-duration:6.2s] [animation-delay:600ms] flex flex-col items-start lg:items-end text-left lg:text-right select-none">
                <div className="flex items-center gap-2 mb-2 w-full justify-start lg:justify-end">
                  <span className="text-xl font-extrabold font-display text-[#00a884]/25 lg:hidden">02</span>
                  <h3 className="font-extrabold text-base md:text-[17px] text-slate-900 font-display tracking-tight">Single-Tap Document Portal</h3>
                  <span className="text-xl font-extrabold font-display text-[#00a884]/25 hidden lg:inline">02</span>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed font-sans font-medium max-w-xs">
                  Access patient CBCT reports, OPG scans, and treatment plans in one place.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-start lg:justify-end">
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">OPG Scan PNGs</span>
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Download All</span>
                </div>
              </div>
            </div>

            {/* Center Column: The Autoplay Smartphone Frame Mockup */}
            <div className="lg:col-span-4 flex justify-center py-4 order-1 lg:order-2">
              <div 
                ref={containerRef}
                onClick={togglePlay}
                className="relative w-full max-w-[280px] aspect-[9/16] rounded-[24px] overflow-hidden bg-black shadow-[0_20px_45px_rgba(15,46,74,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              >
                {/* Transparent click/hover interceptor overlay */}
                <div className="absolute inset-0 z-20" />

                {/* Custom play/pause feedback overlay */}
                <div className={`absolute inset-0 bg-black/25 flex items-center justify-center z-30 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-md">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white fill-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                    )}
                  </div>
                </div>

                <iframe
                  ref={iframeRef}
                  src="https://www.youtube.com/embed/X0F8ceghTtE?autoplay=1&mute=1&loop=1&playlist=X0F8ceghTtE&controls=0&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=0&enablejsapi=1"
                  title="IB MS Mobile App Demo Video"
                  className="w-full h-full border-0 absolute inset-0 z-10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Right Column: App Screen Features (3 & 4) */}
            <div className="lg:col-span-4 space-y-8 order-3">
              {/* Feature 3: Matches Image 3 */}
              <div className="animate-float [animation-duration:5.5s] [animation-delay:300ms] flex flex-col items-start text-left select-none">
                <div className="flex items-center gap-2 mb-2 w-full justify-start">
                  <span className="text-xl font-extrabold font-display text-amber-500/25">03</span>
                  <h3 className="font-extrabold text-base md:text-[17px] text-slate-900 font-display tracking-tight">Complete Case Tracking</h3>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed font-sans font-medium max-w-xs">
                  Search Wakad/Chinchwad referral histories and filter complete or pending cases.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-start">
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Wakad / Chinchwad</span>
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Search Patients</span>
                </div>
              </div>

              {/* Feature 4: Matches Image 1/3 */}
              <div className="animate-float [animation-duration:6.8s] [animation-delay:900ms] flex flex-col items-start text-left select-none">
                <div className="flex items-center gap-2 mb-2 w-full justify-start">
                  <span className="text-xl font-extrabold font-display text-indigo-500/25">04</span>
                  <h3 className="font-extrabold text-base md:text-[17px] text-slate-900 font-display tracking-tight">Real-Time Sync Updates</h3>
                </div>
                <p className="text-slate-500 text-[13px] leading-relaxed font-sans font-medium max-w-xs">
                  Instant scan room completion updates synced directly to the doctor's phone.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-start">
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Completed Status</span>
                  <span className="text-[10px] text-slate-500 border border-slate-200/60 px-2 py-0.5 rounded-md font-semibold font-sans bg-transparent">Welcome Banner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Technician Dashboard Interactive Tour */}
      <section className="bg-white border-t border-slate-100 py-20 relative overflow-hidden">
        {/* Subtle grid lines pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
          <div className="w-full h-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-1.5 bg-blue-50/60 text-[#0066cc] border border-blue-100/50 font-semibold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider font-sans mb-3 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc] animate-pulse" />
              Technician Workspace
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold font-display text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto mb-3">
              How the technician room console operates
            </h2>
            
            <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed font-sans font-medium">
              Take an interactive step-by-step tour of patient check-in, tooth charting, payment entries, and invoice printing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* Left side: interactive stepper */}
            <div className="lg:col-span-5 space-y-4">
              {techSteps.map((step, idx) => {
                const isActive = activeTechStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveTechStep(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start gap-4 select-none cursor-pointer ${
                      isActive 
                        ? 'bg-gradient-to-br from-blue-50/40 to-indigo-50/10 border-blue-100 shadow-[0_4px_20px_rgba(0,102,204,0.02)]' 
                        : 'bg-transparent border-slate-100/80 hover:border-slate-200 hover:bg-slate-50/30'
                    }`}
                  >
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-colors duration-300 ${
                      isActive ? 'bg-[#0066cc] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`font-bold text-[15px] font-display tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-[#0066cc]' : 'text-slate-800'
                        }`}>
                          {step.title}
                        </h3>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${
                          isActive 
                            ? 'bg-blue-100/40 border-blue-200/50 text-[#0066cc]' 
                            : 'bg-slate-50 border-slate-100 text-slate-400'
                        }`}>
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-[12.5px] text-slate-500 leading-relaxed font-sans font-medium">
                        {step.desc}
                      </p>
                      {isActive && (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {step.highlights.map((hl, hlIdx) => (
                            <span 
                              key={hlIdx} 
                              className="text-[10px] text-slate-500 border border-slate-200/50 px-2 py-0.5 rounded-md font-semibold font-sans bg-white/50"
                            >
                              {hl}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right side: console mockup frame */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full bg-slate-900/5 rounded-2xl p-3 border border-slate-100 shadow-[0_20px_45px_rgba(15,46,74,0.04)] bg-white max-w-xl">
                {/* Browser Mockup Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 px-1 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                    {techSteps[activeTechStep].title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                  </span>
                  <div className="w-10" /> {/* Spacer */}
                </div>

                {/* Screenshot Display with animation */}
                <div className="overflow-hidden rounded-lg bg-white relative flex items-center justify-center border border-slate-100/50 shadow-inner aspect-[1.41]">
                  <img
                    key={activeTechStep}
                    src={techSteps[activeTechStep].image}
                    alt={techSteps[activeTechStep].title}
                    className="w-full h-full object-contain animate-slideScroll"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 The Problem stated as their day */}
      <section className="relative bg-[#f8fafc]/90 border-y border-slate-200/50 py-20 overflow-hidden">
        {/* Soft background grid lines pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
          <div className="w-full h-full bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
            <div className="inline-flex items-center gap-1.5 bg-rose-50/60 text-rose-600 border border-rose-100/50 font-semibold text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-sans mb-4 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              The Industry Bottleneck
            </div>
            <h2 className="text-2xl md:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight pb-1">
              Dental imaging centres are run on WhatsApp chats and Drive folders.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COPY.problems.map((p, idx) => {
              const tags = ['Reporting Gap', 'Referral Leak', 'Search Delay', 'Data Loss'];
              const [role, location] = p.owner.split(', ');
              
              // Stagger every second card to create an editorial visual layout
              const staggerClass = idx % 2 === 1 ? 'lg:translate-y-6' : 'lg:translate-y-0';
              
              return (
                <div 
                  key={idx} 
                  className={`bg-white border-x border-b border-t-2 border-x-slate-100 border-b-slate-100 border-t-rose-500/70 p-7 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgba(15,46,74,0.01)] hover:shadow-[0_20px_45px_rgba(15,46,74,0.03)] hover:border-blue-200/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden ${staggerClass}`}
                >
                  {/* Decorative Quote Icon */}
                  <span className="absolute -top-2 right-2 text-slate-100/40 text-7xl font-serif select-none pointer-events-none group-hover:text-rose-50/70 transition-colors">“</span>
                  
                  <div className="relative z-10 flex flex-col items-start">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full border bg-rose-50/50 text-rose-600 border-rose-100/40 select-none mb-4">
                      <AlertCircle className="w-3 h-3 text-rose-500" /> {tags[idx]}
                    </span>
                    
                    <p className="text-[15px] md:text-base text-slate-800 font-serif italic leading-relaxed">
                      "{p.quote.replace(/^["'“]|["'”]$/g, '')}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100 relative z-10">
                    <div className="w-9 h-9 rounded-full border border-blue-100 bg-blue-50/50 flex items-center justify-center font-extrabold text-[#0066cc] text-sm uppercase shrink-0">
                      {role.charAt(0)}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-bold text-slate-800 leading-tight">{role}</span>
                      <span className="text-[9px] font-semibold text-slate-500 mt-0.5">{location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
