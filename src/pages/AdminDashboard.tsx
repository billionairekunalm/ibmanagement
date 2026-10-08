import React from 'react';
import { UserCheck, LineChart, TrendingUp, AlertTriangle } from 'lucide-react';
import { COPY } from '../content/copy';
import AdminPreview from '../components/AdminPreview';

export const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-amber/20 bg-accent-amber/5 font-mono text-[9px] text-accent-amber uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" /> Admin Console
          </div>
          
          <h1 className="text-2xl md:text-4xl font-bold font-sans text-dicom-bone leading-tight">
            {COPY.modules.admin.promise}
          </h1>
          
          <p className="text-xs md:text-sm text-neutral-400 font-sans leading-relaxed">
            Owners and admins coordinate logistics. The Admin Console gives you complete operational visibility into scan throughput, active turnaround times, and referring dentist retention alerts.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <LineChart className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Real-time Turnaround Tracking</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Track the lifecycle of every scan from patient registration to final report sign-off. Spot operational delays at the capture, queue, or radiologist reporting phase instantly.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Referral Trend Analytics</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  View scan referral metrics mapped to specific dentists. Receive automatic system alerts when a regular referring doctor\'s volume drops, indicating potential client churn.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="mt-1 p-1 bg-neutral-900 border border-dicom-border rounded text-accent-amber">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-mono text-xs text-dicom-bone font-bold">Billing & Payout Reconciliation</h4>
                <p className="text-[11px] text-neutral-400 font-sans leading-normal">
                  Calculate radiologist payout lists, generate GST-ready invoices for dental chains, and track clinic balances automatically. No more chat scrolling on payment days.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          <div className="text-[10px] text-neutral-500 font-mono uppercase tracking-wider">
            Interactive Owner Dashboard Preview
          </div>
          <AdminPreview />
        </div>
      </div>

    </div>
  );
};
export default AdminDashboard;
