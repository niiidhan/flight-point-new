import React, { useLayoutEffect, useRef } from 'react';
import {
  Plane, Star, CreditCard, ArrowUpDown, Building, RefreshCw,
  Zap, Bell, ChartBar, Car, Utensils, Wifi, Award, Shield,
  Ticket, Luggage, Headphones, ClipboardCheck, CalendarRange, Clock, LayoutGrid, PackagePlus, Wallet,
  Radar, TrendingDown, ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GridCards = () => (
  <>
    {/* 2. Earn */}
    <div className="col-span-2 md:col-span-4 row-span-2 bg-[#B372F7] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#3C1A65] tracking-tight leading-none mb-1">Earn</h2>
        <p className="text-[#642B9A] font-medium text-[9px] md:text-[11px] leading-tight">Grow your miles</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Star className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 3. Cards */}
    <div className="col-span-2 md:col-span-3 row-span-2 bg-[#FACC15] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#713F12] tracking-tight leading-none mb-1">Cards</h2>
        <p className="text-[#854D0E] font-medium text-[9px] md:text-[11px] leading-tight">Multipliers</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-[#713F12]/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <CreditCard className="text-[#713F12] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 4. Upgrade */}
    <div className="col-span-2 md:col-span-2 row-span-2 md:row-span-4 bg-[#133C2D] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#D8F5A6] tracking-tight leading-none mb-1">Upgrade</h2>
        <p className="text-[#85B57A] font-medium text-[9px] md:text-[11px] leading-tight">Eco to Biz</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <ArrowUpDown className="text-[#D8F5A6] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 5. My Trips */}
    <div className="col-span-2 md:col-span-4 row-span-2 bg-[#110B45] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-white tracking-tight leading-none mb-1">My Trips</h2>
        <p className="text-[#A5B4FC] font-medium text-[9px] md:text-[11px] leading-tight">Manage bookings</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <CalendarRange className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 6. Seat Selection */}
    <div className="col-span-2 md:col-span-3 row-span-2 bg-[#06B6D4] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#083344] tracking-tight leading-none mb-1">Seat Selection</h2>
        <p className="text-[#164E63] font-medium text-[9px] md:text-[11px] leading-tight">Pick your spot</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <LayoutGrid className="text-[#083344] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 8. Alerts */}
    <div className="col-span-2 md:col-span-3 row-span-2 bg-[#481268] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#E2B9F4] tracking-tight leading-none mb-1">Alerts</h2>
        <p className="text-[#A470BD] font-medium text-[9px] md:text-[11px] leading-tight">Price drops</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Bell className="text-[#E2B9F4] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 9. Lounges */}
    <div className="col-span-2 md:col-span-2 row-span-2 bg-[#BAF157] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#21420C] tracking-tight leading-none mb-1">Lounges</h2>
        <p className="text-[#3B6B17] font-medium text-[9px] md:text-[11px] leading-tight">Global access</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-[#21420C]/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <ChartBar className="text-[#21420C] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 10. Flight Status */}
    <div className="col-span-2 md:col-span-2 row-span-2 bg-[#475569] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#F8FAFC] tracking-tight leading-none mb-1">Flight Status</h2>
        <p className="text-[#94A3B8] font-medium text-[9px] md:text-[11px] leading-tight">Live updates</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/10 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Clock className="text-[#F8FAFC] w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 11. Refunds / Changes */}
    <div className="col-span-2 md:col-span-2 row-span-2 bg-[#F43F5E] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#4C0519] tracking-tight leading-none mb-1">Refunds</h2>
        <p className="text-[#881337] font-medium text-[9px] md:text-[11px] leading-tight">Manage changes</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Wallet className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 13. Status */}
    <div className="col-span-2 md:col-span-3 row-span-2 bg-[#D97706] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#FFFBEB] tracking-tight leading-none mb-1">Status</h2>
        <p className="text-[#FEF3C7] font-medium text-[9px] md:text-[11px] leading-tight">Tier tracking</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Award className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 14. Insurance */}
    <div className="col-span-2 md:col-span-3 row-span-2 bg-[#14B8A6] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
      <div className="relative z-10">
        <h2 className="text-base md:text-xl lg:text-2xl font-black text-[#042F2E] tracking-tight leading-none mb-1">Protect</h2>
        <p className="text-[#134E4A] font-medium text-[9px] md:text-[11px] leading-tight">Trip insurance</p>
      </div>
      <div className="absolute right-2 bottom-2 md:right-3 md:bottom-3 bg-white/20 p-2 md:p-3 rounded-xl backdrop-blur-md transform group-hover:scale-110 transition-transform">
        <Shield className="text-white w-4 h-4 md:w-6 md:h-6" />
      </div>
    </div>

    {/* 15. Add-ons */}
    <div className="col-span-2 md:col-span-3 row-span-1 bg-[#EC4899] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex justify-between items-center">
      <div className="relative z-10">
        <h2 className="text-sm md:text-lg lg:text-xl font-black text-[#500724] tracking-tight leading-none">Add-ons</h2>
      </div>
      <PackagePlus className="text-[#500724] w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:scale-110 transition-transform" />
    </div>

    {/* 17. Support */}
    <div className="col-span-4 md:col-span-3 row-span-1 bg-[#4F46E5] rounded-2xl p-3 md:p-4 relative overflow-hidden group shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex justify-between items-center">
      <div className="relative z-10">
        <h2 className="text-sm md:text-lg lg:text-xl font-black text-[#EEF2FF] tracking-tight leading-none">Support</h2>
      </div>
      <Headphones className="text-[#EEF2FF] w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:scale-110 transition-transform" />
    </div>
  </>
);

const Explore = () => {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation for the left column
      gsap.from(leftColRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        clearProps: "all"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="explore"
      ref={sectionRef}
      className="min-h-[calc(100vh-72px)] h-auto md:h-[calc(100vh-72px)] w-full bg-[#F8FAFC] flex items-center justify-center p-3 md:p-4 lg:p-6 md:overflow-hidden"
    >
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(calc(-100% - 0.75rem)); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          @media (max-width: 768px) {
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(calc(-100% - 0.5rem)); }
            }
          }

          @keyframes draw-line {
            to { stroke-dashoffset: 0; }
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>

      <div className="w-full h-full max-w-[1600px] grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-3 py-10 md:py-0">

        {/* 1. Left Column (Dynamic Price Radar) */}
        <div
          ref={leftColRef}
          className="col-span-4 md:col-span-3 bg-white rounded-3xl relative border border-gray-200 z-10 flex flex-col overflow-hidden group shadow-sm"
        >
          <div className="p-6 md:p-6 flex flex-col h-full">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F0FDF4] text-[#22C55E] rounded-2xl relative shrink-0 radar-icon">
                <Radar className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-[#110B45] text-lg tracking-tight leading-tight">Price Radar</h3>
                <p className="text-xs font-normal text-gray-500">Live deal tracking</p>
              </div>
            </div>

            {/* Cheapest Route */}
            <div className="bg-white rounded-xl p-4 border-[0.5px] border-slate-200/60 flex flex-col gap-1 w-full mb-6">
              <div className="font-bold text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">Cheapest Today</div>
              <div className="flex items-baseline justify-between mb-1 gap-2">
                <div className="flex items-center gap-2 font-medium text-[#110B45] text-2xl md:text-[22px] shrink-0">
                  NYC <ArrowRight className="w-3.5 h-3.5 text-gray-300" strokeWidth={2.5} /> LON
                </div>
                <div className="font-medium text-black/70 text-xl tracking-tight leading-none whitespace-nowrap">
                  9,000 <span className="text-[10px] font-medium tracking-normal text-gray-400">pts</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-700 font-medium bg-gray-100/80 w-fit px-2 py-1 rounded-md mt-1">
                <TrendingDown className="w-3 h-3" strokeWidth={2} />
                <span>1,500 pts drop in last 24h</span>
              </div>
            </div>

            {/* Destination Image Box */}
            <div className="flex-1 relative min-h-[220px] md:min-h-[180px] my-4 w-full overflow-hidden rounded-2xl border-[0.5px] border-slate-200/60 group/img">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000"
                alt="London Skyline"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5">
                <div className="flex flex-col transform transition-transform duration-500 group-hover/img:-translate-y-1">
                  <span className="text-white font-bold text-xl tracking-tight leading-none">London</span>
                  <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em] mt-1.5">United Kingdom</span>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <div className="bg-white rounded-xl p-3.5 border-[0.5px] border-slate-200/60 flex flex-col justify-center gap-1 w-full">
                <div className="flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 w-3.5 h-3.5">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  </svg>
                  <span className="font-bold text-[10px] uppercase tracking-wider text-gray-400">Best time to book</span>
                </div>

                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-gray-900 font-black text-2xl tracking-tight leading-none">Today</span>
                </div>

                <div
                  onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-500 font-medium text-xs flex items-center gap-1 mt-0.5 cursor-pointer hover:text-slate-800 transition-colors w-fit group"
                >
                  Book Now <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Scrolling Right Section */}
        <div className="col-span-4 md:col-span-9 overflow-hidden rounded-3xl relative group-marquee h-auto md:h-full border border-gray-200/50 md:border-none">
          <div className="flex h-full w-full animate-marquee gap-3 md:gap-3">

            {/* First Set of Cards */}
            <div className="flex shrink-0 gap-3 md:grid md:grid-cols-9 md:grid-rows-8 md:grid-flow-dense h-full pb-10 md:pb-0 w-full md:gap-3">
              <GridCards />
            </div>

            {/* Second Set of Cards (for seamless loop) */}
            <div className="flex shrink-0 gap-3 md:grid md:grid-cols-9 md:grid-rows-8 md:grid-flow-dense h-full pb-10 md:pb-0 w-full md:gap-3" aria-hidden="true">
              <GridCards />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Explore;
