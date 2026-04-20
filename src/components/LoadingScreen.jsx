import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      className="fixed inset-0 z-[999] bg-white flex items-center justify-center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-5">
          <img
            src="/images/LOGO.svg"
            alt="Logo Icon"
            className="h-6 md:h-8 w-auto invert"
          />
          <img
            src="/images/logoletter.svg"
            alt="ai.work"
            className="h-8 md:h-10 w-auto invert"
          />
        </div>
        
        {/* Loading Bar */}
        <div className="w-48 h-[2px] bg-slate-100 rounded-full overflow-hidden">
          <div className="w-full h-full bg-[#0F172A] rounded-full origin-left animate-loading-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
