import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const MobileAppPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on mobile
    const isMobile = window.innerWidth < 1024;
    // Check if user has already seen/dismissed it in this session
    const hasSeenPopup = sessionStorage.getItem('hasSeenAppPopup');

    if (isMobile && !hasSeenPopup) {
      // Small delay for a better feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenAppPopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-end justify-center lg:hidden bg-black/40 transition-opacity duration-300">
      <div 
        className="w-full bg-[#0a0a0b] rounded-t-[28px] p-6 pb-10 animate-slide-up relative border-t border-white/10"
        style={{ fontFamily: 'CustomFont' }}
      >
        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-white text-base font-bold mb-6">Continue in App</h3>

          {/* App Icon Area */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="w-14 h-14 bg-blue-600 rounded-[16px] flex items-center justify-center shadow-2xl shadow-blue-600/20">
              <img src="/images/LOGO.svg" className="w-8 h-8 brightness-0 invert" alt="App Icon" />
            </div>
            <div>
              <h4 className="text-white text-xl font-bold tracking-tight mb-0.5">Flightpoints</h4>
              <p className="text-white/40 text-[11px] font-medium leading-tight">Get award alerts instantly <br /> (push notifications)</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full space-y-5">
            <button className="w-full bg-white text-[#0a0a0b] py-3.5 rounded-xl text-sm font-bold transition-transform active:scale-95 shadow-lg">
              GET THE APP
            </button>
            
            <button 
              onClick={handleDismiss}
              className="text-white/50 text-xs font-bold hover:text-white transition-colors block w-full text-center"
            >
              Continue in Browser
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </div>
  );
};

export default MobileAppPopup;
