import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Calendar, Video, FileText, ArrowRight } from 'lucide-react';
import { COPY } from '../content/copy';

// Initialize Supabase if variables are present
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export const DemoForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    centreName: '',
    city: '',
    phone: '',
    whatsappEnabled: true,
    scansBand: 'Under 150 scans/mo',
    centresCount: '1 centre'
  });
  
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      if (supabase) {
        // Submit to Supabase table 'leads'
        const { error } = await supabase.from('leads').insert([{
          name: formData.name,
          centre_name: formData.centreName,
          city: formData.city,
          phone: formData.phone,
          whatsapp_enabled: formData.whatsappEnabled,
          scans_per_month: formData.scansBand,
          centres_count: formData.centresCount,
          created_at: new Date().toISOString()
        }]);

        if (error) throw error;
      } else {
        // Mock fallback storing in local storage for testing
        const existingLeads = JSON.parse(localStorage.getItem('ib_leads') || '[]');
        existingLeads.push({
          ...formData,
          id: Math.random().toString(36).substr(2, 9),
          created_at: new Date().toISOString()
        });
        localStorage.setItem('ib_leads', JSON.stringify(existingLeads));
        console.log('No Supabase credentials. Saved lead locally:', formData);
      }

      // Success redirect
      navigate('/demo/thank-you');
    } catch (err: unknown) {
      console.error('Lead submission error:', err);
      setErrorMessage('Failed to submit demo request. Please check your network and try again, or contact us directly on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-dicom-dark border border-dicom-border rounded-lg p-6 max-w-lg mx-auto font-mono text-xs">
      
      {/* What Happens Next Block */}
      <div className="border-b border-dicom-border pb-5 mb-5 space-y-3 font-sans text-neutral-400">
        <h3 className="text-dicom-bone font-mono font-bold text-xs uppercase tracking-wider text-accent-amber">
          What happens after you book:
        </h3>
        <ul className="space-y-2 text-[11px] leading-relaxed">
          <li className="flex items-start gap-2">
            <Calendar className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>1. Brief Schedule:</strong> We message you within 2 hours on WhatsApp to pick a 20-minute slot.</span>
          </li>
          <li className="flex items-start gap-2">
            <Video className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>2. Interactive Walkthrough:</strong> We show you live technician uploads, radiologist templates, and the dentist app on Zoom/Teams.</span>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-accent-amber shrink-0 mt-0.5" />
            <span><strong>3. Commercial Quote:</strong> You receive a written pricing breakdown matching your exact scan volume.</span>
          </li>
        </ul>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
            {COPY.demoForm.fields.name} *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber font-sans"
            placeholder="e.g. Dr. Vijay Kulkarni"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
              {COPY.demoForm.fields.centreName} *
            </label>
            <input
              type="text"
              name="centreName"
              value={formData.centreName}
              onChange={handleChange}
              required
              className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber font-sans"
              placeholder="e.g. Apex CBCT Centre"
            />
          </div>
          <div>
            <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
              {COPY.demoForm.fields.city} *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber font-sans"
              placeholder="e.g. Pune, Maharashtra"
            />
          </div>
        </div>

        <div>
          <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
            {COPY.demoForm.fields.phone} *
          </label>
          <div className="flex gap-2">
            <div className="bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-neutral-500 font-sans select-none flex items-center">
              +91
            </div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[6-9][0-9]{9}"
              className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber font-sans"
              placeholder="10-digit mobile number"
            />
          </div>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="checkbox"
              name="whatsappEnabled"
              id="whatsappEnabled"
              checked={formData.whatsappEnabled}
              onChange={handleChange}
              className="rounded bg-dicom-gray border-dicom-border accent-accent-amber"
            />
            <label htmlFor="whatsappEnabled" className="text-[10px] text-neutral-400 font-sans cursor-pointer">
              Send calendar invite and quote to my WhatsApp number
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
              {COPY.demoForm.fields.scansBand}
            </label>
            <select
              name="scansBand"
              value={formData.scansBand}
              onChange={handleChange}
              className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber"
            >
              <option value="Under 150 scans/mo">Under 150 scans/mo</option>
              <option value="150 to 500 scans/mo">150 to 500 scans/mo</option>
              <option value="Over 500 scans/mo">Over 500 scans/mo</option>
            </select>
          </div>
          <div>
            <label className="block text-neutral-400 uppercase text-[10px] tracking-wider mb-1.5 font-bold">
              {COPY.demoForm.fields.centresCount}
            </label>
            <select
              name="centresCount"
              value={formData.centresCount}
              onChange={handleChange}
              className="w-full bg-dicom-gray border border-dicom-border rounded px-3 py-2 text-dicom-bone focus:outline-none focus:border-accent-amber"
            >
              <option value="1 centre">1 centre</option>
              <option value="2 to 5 centres">2 to 5 centres</option>
              <option value="Over 5 centres">Over 5 centres</option>
            </select>
          </div>
        </div>

        {errorMessage && (
          <p className="text-rose-400 text-[10px] leading-relaxed border border-rose-900 bg-rose-950/10 p-2.5 rounded font-sans">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent-amber hover:bg-accent-amber/90 text-dicom-black font-bold py-2.5 rounded flex items-center justify-center gap-2 transition-all font-sans cursor-pointer disabled:opacity-50"
        >
          {loading ? 'Submitting request...' : COPY.demoForm.fields.submitBtn}
          <ArrowRight className="w-4 h-4" />
        </button>

        {/* Anti-spam promise */}
        <p className="text-[10px] text-neutral-500 font-sans text-center mt-3 leading-relaxed">
          Spam Promise: We will never share or sell your contact info. We only message or call you to schedule this requested demo.
        </p>
      </form>
    </div>
  );
};
export default DemoForm;
