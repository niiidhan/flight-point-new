import React from 'react';
import { Settings } from 'lucide-react';

const MobileBlocker = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center p-6 text-center">
      <div className="max-w-xs w-full flex flex-col items-center">
        {/* Settings Icon with subtle rotation */}
        <div className="mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <Settings className="w-12 h-12 text-slate-400 animate-[spin_8s_linear_infinite]" strokeWidth={1.5} />
        </div>

        {/* Simplified Content */}
        <div className="space-y-3">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Under Development
          </h1>
          
          <p className="text-slate-500 text-sm font-medium">
            We are currently optimizing the mobile experience. Please visit us on a desktop for now.
          </p>
        </div>

        {/* Minimal Footer */}
        <div className="mt-20">
          <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
            © 2026 Flightpoints
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileBlocker;
