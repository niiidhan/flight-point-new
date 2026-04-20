import React, { useState } from 'react';
import { Plane, Hotel, Search, ShieldCheck, Star } from 'lucide-react';

const Hero = ({ isSearchStarted, setIsSearchStarted }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 30;
    const y = (clientY / innerHeight - 0.5) * 30;
    setMousePosition({ x, y });
  };

  const handleStartSearch = () => {
    setIsSearchStarted(true);
    const searchSection = document.getElementById('search');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" onMouseMove={handleMouseMove} className="w-full min-h-[calc(100vh-72px)] p-0 flex flex-col border-b transition-colors duration-300 bg-slate-50 border-slate-300">

      <div className="flex-1 w-full pt-8 px-8 pb-32 flex">
        <div className="flex-1 w-full rounded-[3rem] relative flex flex-col overflow-hidden transition-all duration-300 bg-white border border-slate-200 shadow-sm">
          <div className="flex-1 w-full flex flex-col items-center justify-center">

            {/* Grid Pattern Container */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[3rem]">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                  backgroundSize: '100px 100px'
                }}
              />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl px-4 py-8 grid lg:grid-cols-2 items-center gap-12 lg:gap-24">

              {/* Left Side: Header Section */}
              <div className="text-center lg:text-left transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative">

                {/* Decorative Elements */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl animate-pulse" />

                {/* Trusted Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-md mb-8">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <ShieldCheck size={12} className="text-white" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Trusted by 10k+ Travelers</span>
                </div>

                <div className="relative inline-block mb-12 scale-110 origin-left">
                  <div className="bg-[#99FF8A] px-10 py-6 rounded-[2rem] shadow-[10px_10px_0px_rgba(0,0,0,0.1)] inline-block relative z-20">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter">
                      The Fastest
                    </h1>
                  </div>

                  <div className="absolute -top-8 -right-20 bg-gradient-to-br from-purple-400 to-indigo-500 px-7 py-2.5 rounded-2xl shadow-2xl z-30 rotate-[6deg] border border-white/20">
                    <span className="text-2xl md:text-3xl font-black text-white">Award</span>
                  </div>

                  <div className="absolute -bottom-6 -right-16 bg-gradient-to-br from-orange-400 to-pink-500 px-10 py-3.5 rounded-2xl shadow-xl z-30 rotate-[-4deg] border border-white/20">
                    <span className="text-2xl md:text-3xl font-black text-white">Flight Finder</span>
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl font-medium leading-relaxed">
                  No more checking airlines one by one. Find premium award seats in seconds, compare miles instantly, and get alerts before they're gone.
                </p>

                <div className="flex justify-center lg:justify-start">
                  <button
                    onClick={handleStartSearch}
                    className="group relative inline-flex items-center gap-3 bg-slate-900 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] active:scale-95 shadow-xl cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg] shadow-lg backdrop-blur-sm">
                      <Search size={16} className="text-white" />
                    </div>
                    <span>Start Your Search</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Premium Parallax Floating Cards */}
              <div className="hidden lg:flex justify-center items-center relative h-[550px] perspective-[1000px] scale-[0.85]">
                <div
                  className="relative w-full max-w-[600px] h-full transition-transform duration-200 ease-out flex items-center justify-center"
                  style={{
                    transform: `rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`
                  }}
                >
                  <div className="absolute inset-0 bg-blue-400/10 blur-[150px] rounded-full scale-75 animate-pulse" />

                  {/* Back Card - Left */}
                  <div
                    className="absolute left-[10%] rotate-[-12deg] -translate-y-8 opacity-60 blur-[1px] transition-all duration-700 hover:opacity-100 hover:blur-0 z-10"
                    style={{ transform: `translate3d(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px, 0) rotate(-12deg)` }}
                  >
                    <div className="w-[280px] bg-white/95 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-4 border border-white/40">
                      <div className="h-32 rounded-[1.8rem] overflow-hidden mb-3">
                        <img src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Cityscape" />
                      </div>
                      <div className="px-3 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-lg">
                            <Plane size={16} className="text-white" />
                          </div>
                          <div>
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Starts from</p>
                            <p className="text-base font-black text-slate-900 leading-none">12.5k <span className="text-blue-600">pts</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back Card - Right */}
                  <div
                    className="absolute right-[10%] rotate-[10deg] translate-y-12 opacity-50 blur-[2px] transition-all duration-700 hover:opacity-100 hover:blur-0 z-10"
                    style={{ transform: `translate3d(${mousePosition.x * -0.6}px, ${mousePosition.y * -0.6}px, 0) rotate(10deg)` }}
                  >
                    <div className="w-[200px] bg-white/95 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-3 border border-white/40">
                      <div className="h-28 rounded-[1.8rem] overflow-hidden mb-3">
                        <img src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" alt="Resort" />
                      </div>
                      <div className="px-3 pb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                            <Hotel size={14} className="text-white" />
                          </div>
                          <p className="text-sm font-black text-slate-900">18k <span className="text-blue-600">pts</span></p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Featured Card */}
                  <div
                    className="absolute z-30 transition-all duration-500 group"
                    style={{ transform: `translate3d(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px, 100px)` }}
                  >
                    <div className="w-[300px] bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] p-5 border border-white/50 relative group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="h-48 rounded-[2rem] overflow-hidden mb-5 shadow-inner">
                        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=500" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Paris" />
                      </div>

                      <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-[1.2rem] bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-[0_10px_20px_rgba(37,99,235,0.3)]">
                            <Plane size={20} className="text-white" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mb-1">Starting from</p>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-black text-slate-900 tracking-tighter">5,000</span>
                              <span className="text-sm font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">pts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Premium Floating Badges */}
                    <div
                      className="absolute -top-6 -left-16 bg-white/90 backdrop-blur-2xl border border-white/50 px-6 py-4 rounded-[2rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-float whitespace-nowrap"
                      style={{ transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 50px)` }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                        <ShieldCheck size={16} className="text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Standard</span>
                        <span className="text-xs font-black text-emerald-800 uppercase tracking-wider">Economy Class</span>
                      </div>
                    </div>

                    <div
                      className="absolute -bottom-10 -right-16 bg-white/90 backdrop-blur-2xl border border-white/50 px-6 py-4 rounded-[2rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.2)] flex items-center gap-3 animate-float-delayed whitespace-nowrap"
                      style={{ transform: `translate3d(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px, 50px)` }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <Star size={16} className="text-white" fill="white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Premium</span>
                        <span className="text-xs font-black text-indigo-900 uppercase tracking-wider">Business Class</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
