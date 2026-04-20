import React from 'react';
import { Search, Tag, Briefcase } from 'lucide-react';

const Hero = ({ isSearchStarted, setIsSearchStarted }) => {
  const handleStartSearch = () => {
    setIsSearchStarted(true);
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="w-screen h-[calc(100vh-72px)] flex items-center justify-center bg-white overflow-hidden">
      <div className="w-[85vw] h-[75vh] flex flex-col items-center justify-center rounded-[5rem] border border-slate-200 bg-white mx-auto relative shadow-sm">
        
        <div className="z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between px-12 lg:px-24 gap-12">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col items-start text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-reveal-up" style={{ animationDelay: '100ms' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Trusted by 10k+ Travelers</span>
            </div>

            <h1 
              className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tighter leading-tight mb-6 animate-reveal-up"
              style={{ fontFamily: 'CustomFont', animationDelay: '200ms' }}
            >
              The Fastest Award <br />
              Flight Finder
            </h1>

            <p className="text-base md:text-lg text-slate-500 mb-10 max-w-lg leading-relaxed animate-reveal-up" style={{ animationDelay: '300ms' }}>
              No more checking airlines one by one. Find premium award seats in seconds, compare miles instantly, and get alerts before they're gone.
            </p>

            <button
              onClick={handleStartSearch}
              className="group relative inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full font-bold text-xs transition-all duration-300 hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-lg animate-reveal-up"
              style={{ animationDelay: '400ms' }}
            >
              <Search size={14} className="text-white" />
              <span>Start Your Search</span>
            </button>
          </div>

          {/* Right Column: Floating Cards */}
          <div className="hidden lg:flex relative w-[400px] h-[400px] items-center justify-center -translate-x-16 animate-reveal-scale" style={{ animationDelay: '600ms' }}>
            
            {/* Back Card - Left (Aeromexico) */}
            <div className="absolute inset-0 flex items-center justify-center animate-float-delayed z-10 pointer-events-none [&:has(:hover)]:[animation-play-state:paused]">
              <div className="pointer-events-auto w-48 h-64 bg-white rounded-3xl shadow-xl p-2 border border-slate-100 rotate-[-12deg] -translate-x-20 translate-y-4 hover:-translate-y-2 hover:-rotate-12 transition-transform duration-500 cursor-default">
                <div className="w-full h-40 rounded-[1.25rem] overflow-hidden mb-3 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Cityscape" />
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src="/images/logo_aeromexico-01.svg" className="w-full h-full object-contain p-1.5" alt="Aeromexico" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-none mb-1">Starting from</p>
                    <p className="text-sm font-black text-slate-700 leading-none">4,500 <span className="text-[10px] font-bold text-slate-500">pts</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Card - Right (JetBlue) */}
            <div className="absolute inset-0 flex items-center justify-center animate-bounce-subtle z-10 pointer-events-none [&:has(:hover)]:[animation-play-state:paused]">
              <div className="pointer-events-auto w-48 h-64 bg-white rounded-3xl shadow-xl p-2 border border-slate-100 rotate-[12deg] translate-x-20 translate-y-4 hover:-translate-y-2 hover:rotate-12 transition-transform duration-500 cursor-default">
                <div className="w-full h-40 rounded-[1.25rem] overflow-hidden mb-3 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Beach" />
                </div>
                <div className="flex items-center gap-2 px-2">
                  <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src="/images/jetblue-01.svg" className="w-full h-full object-contain p-1.5" alt="JetBlue" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-medium leading-none mb-1">Starting from</p>
                    <p className="text-sm font-black text-slate-700 leading-none">8,000 <span className="text-[10px] font-bold text-slate-500">pts</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Center Card */}
            <div className="absolute inset-0 flex items-center justify-center animate-float z-20 pointer-events-none [&:has(:hover)]:[animation-play-state:paused]">
              <div className="pointer-events-auto w-56 h-72 bg-white rounded-3xl shadow-2xl p-2.5 border border-slate-100 hover:scale-105 transition-transform duration-500 cursor-default">
                <div className="w-full h-48 rounded-[1.25rem] overflow-hidden mb-4 bg-slate-100">
                  <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover" alt="Paris" />
                </div>
                <div className="flex items-center gap-3 px-2">
                  <div className="w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img src="/images/ic_finnair_logo-01.svg" className="w-full h-full object-contain p-1.5" alt="Finnair" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-medium leading-none mb-1.5">Starting from</p>
                    <p className="text-xl font-black text-green-600 leading-none tracking-tight">5,000 <span className="text-xs font-bold text-green-600/70">pts</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Pills */}
            <div className="absolute inset-0 flex items-center justify-center animate-bounce-subtle z-30 pointer-events-none [&:has(:hover)]:[animation-play-state:paused]">
              <div className="pointer-events-auto absolute top-12 -left-20 bg-green-50 text-green-700 px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-green-100/50 hover:scale-105 transition-transform cursor-default backdrop-blur-sm">
                <Tag size={14} className="text-green-600 fill-green-600" />
                <span className="text-xs font-bold tracking-wide">ECONOMY CLASS</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center animate-float-delayed z-30 pointer-events-none [&:has(:hover)]:[animation-play-state:paused]">
              <div className="pointer-events-auto absolute top-32 -right-24 bg-indigo-50 text-indigo-700 px-5 py-2.5 rounded-xl shadow-lg flex items-center gap-2 border border-indigo-100/50 hover:scale-105 transition-transform cursor-default backdrop-blur-sm">
                <Briefcase size={14} className="text-indigo-600 fill-indigo-600" />
                <span className="text-xs font-bold tracking-wide">BUSINESS CLASS</span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
