import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Plane, Bell, Navigation, Compass, Ticket } from 'lucide-react';

const Navbar = ({ isInsideHero }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownPos, setDropdownPos] = useState({ x: 0, width: 0 });
  const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Search', href: '#search', hasDropdown: true },
    { name: 'Routes', href: '#routes', hasDropdown: true },
    { name: 'Alert', href: '#alert', hasDropdown: true },
    { name: 'Explore', href: '#explore' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  const searchData = {
    monitor: [
      {
        title: 'Search Flights',
        desc: 'Find the best deals globally',
        icon: Plane,
        color: 'bg-blue-500/10 text-blue-500'
      },
      {
        title: 'Award Search',
        desc: 'Find premium seats with points',
        icon: Ticket,
        color: 'bg-purple-500/10 text-purple-500'
      },
      {
        title: 'Travel Alerts',
        desc: 'Price drop notifications',
        icon: Bell,
        color: 'bg-pink-500/10 text-pink-500'
      },
      {
        title: 'Flight Status',
        desc: 'Real-time journey tracking',
        icon: Navigation,
        color: 'bg-emerald-500/10 text-emerald-500'
      }
    ],
    create: {
      title: 'Global Compass',
      desc: 'Discover new destinations with AI',
      icon: Compass,
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=400'
    }
  };

  const routesData = [
    { title: 'Popular Domestic', count: '120+ Routes', icon: Plane, desc: 'Major cities and regional hubs' },
    { title: 'Top International', count: '80+ Routes', icon: Navigation, desc: 'Global capitals and vacation spots' },
    { title: 'Business Clusters', count: '45+ Routes', icon: Compass, desc: 'Direct flights to financial centers' },
    { title: 'Seasonal Specials', count: '15+ Routes', icon: Bell, desc: 'Limited time holiday destinations' },
    { title: 'Last Minute Deals', count: 'New', icon: Plane, desc: 'Recently added low-fare routes' },
  ];

  const alertsData = [
    { title: 'Price Drop', desc: 'NYC to London is now 20% cheaper', icon: Plane, time: '2m ago', color: 'text-emerald-500' },
    { title: 'Flight Update', desc: 'Flight AI-202 gate changed to 12B', icon: Navigation, time: '15m ago', color: 'text-blue-500' },
    { title: 'System Notice', desc: 'Scheduled maintenance at 02:00 AM', icon: Bell, time: '1h ago', color: 'text-amber-500' },
    { title: 'New Destination', desc: 'Direct flights to Tokyo now available', icon: Compass, time: '3h ago', color: 'text-purple-500' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMouseEnter = (name, e) => {
    setActiveDropdown(name);
    const rect = e.currentTarget.getBoundingClientRect();
    const navContainerRect = navContainerRef.current.getBoundingClientRect();
    setDropdownPos({
      x: rect.left - navContainerRect.left + rect.width / 2,
      width: rect.width
    });
  };

  return (
    <nav
      className={`w-full flex items-center justify-between z-[100] transition-all duration-300 animate-reveal-down ${isInsideHero
        ? (isScrolled
          ? "fixed top-0 left-0 w-full px-12 bg-white border-b border-slate-200 shadow-sm"
          : "relative px-8 bg-white border-b border-slate-200/50")
        : `sticky top-0 px-8 bg-white border-b border-slate-200`
        }`}
      style={{
        height: (isInsideHero && !isScrolled) ? '80px' : '72px',
        fontFamily: 'CustomFont',
        animationDelay: '50ms'
      }}
    >
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/images/LOGO.svg" alt="Logo Icon" className="h-5 w-auto invert" />
          <img src="/images/logoletter.svg" alt="ai.work" className="h-7 w-auto invert" />
        </div>
      </div>

      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center h-full relative" ref={navContainerRef} onMouseLeave={() => setActiveDropdown(null)}>
        <div className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={(e) => link.hasDropdown ? handleMouseEnter(link.name, e) : setActiveDropdown(null)}
              onClick={() => setActiveDropdown(null)}
              className="h-full flex items-center px-2 cursor-pointer"
            >
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium transition-colors flex items-center gap-1.5 group text-[#0F172A]/70 hover:text-[#0F172A]"
                style={{ fontFamily: 'CustomFont' }}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''} text-[#0F172A]/30 group-hover:text-[#0F172A]/80`}
                  />
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Seamless Shared Dropdown Container */}
        <div
          className={`absolute top-full left-0 pointer-events-none ${activeDropdown
            ? 'opacity-100 visible transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]'
            : 'opacity-0 invisible'}`}
          style={{
            transform: `translateX(${dropdownPos.x}px) translateX(-50%)`,
            zIndex: 100
          }}
        >
          <div className="pt-3 pointer-events-auto">
            {/* Decorative Arrow (Slides with Container) */}
            <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t-[0.5px] border-l-[0.5px] border-slate-200 z-20" />

            {/* Content Switcher */}
            <div
              className="rounded-xl border bg-white border-slate-200 shadow-sm relative z-10 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden"
              style={{
                width: activeDropdown === 'Search' ? '600px' : activeDropdown === 'Routes' ? '700px' : activeDropdown === 'Alert' ? '400px' : '400px',
              }}
            >
              <div className="relative w-full h-full">
                {/* Explore Content */}
                <div className={`${activeDropdown === 'Search' ? 'block' : 'hidden'} w-[600px] p-6`}>
                  <div className="grid grid-cols-5 gap-8">
                    <div className="col-span-3">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-400">Navigation</p>
                      <div className="grid grid-cols-1 gap-0.5">
                        {searchData.monitor.map((item, idx) => (
                          <div key={idx} onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-2 rounded-lg transition-all group cursor-pointer border-b border-slate-50 hover:bg-slate-50 last:border-b-0">
                            <div className="mt-0.5 transition-colors text-slate-400 group-hover:text-blue-600">
                              <item.icon size={16} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-[12px] font-medium transition-colors text-slate-900">{item.title}</p>
                              <p className="text-[10px] mt-0.5 text-slate-500">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-400">Featured</p>
                      <div className="rounded-lg overflow-hidden border border-slate-100 mb-4 group cursor-pointer aspect-[16/9]">
                        <img src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Search" className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                      </div>
                      <div onClick={() => setActiveDropdown(null)} className="flex items-start gap-3 p-2 rounded-lg transition-all group cursor-pointer hover:bg-slate-50">
                        <div className="mt-0.5 transition-colors text-slate-400 group-hover:text-blue-600">
                          <searchData.create.icon size={16} strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[12px] font-medium transition-colors text-slate-900">{searchData.create.title}</p>
                          <p className="text-[10px] mt-0.5 text-slate-500">{searchData.create.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Routes Content */}
                <div className={`${activeDropdown === 'Routes' ? 'block' : 'hidden'} w-[700px] p-6`}>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-5 text-slate-400">Regional Availability</p>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                    {routesData.map((route, idx) => (
                      <div key={idx} onClick={() => setActiveDropdown(null)} className="flex items-center justify-between p-2 rounded-lg transition-all group cursor-pointer border-b border-slate-50 hover:bg-slate-50 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="transition-colors text-slate-400 group-hover:text-blue-600">
                            <route.icon size={16} strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-[12px] font-medium transition-colors text-slate-900">{route.title}</p>
                            <p className="text-[10px] mt-0.5 text-slate-500">{route.desc}</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-medium tracking-tight text-slate-300">
                          {route.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Alert Content */}
                <div className={`${activeDropdown === 'Alert' ? 'block' : 'hidden'} w-[400px] p-6`}>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] mb-4 text-slate-400">Recent Notifications</p>
                  <div className="grid grid-cols-1 gap-0.5">
                    {alertsData.map((alert, idx) => (
                      <div key={idx} onClick={() => setActiveDropdown(null)} className="flex items-start justify-between p-2 rounded-lg transition-all group cursor-pointer border-b border-slate-50 hover:bg-slate-50 last:border-b-0">
                        <div className="flex items-start gap-3">
                          <div className={`mt-1 transition-colors ${alert.color} opacity-70 group-hover:opacity-100`}>
                            <alert.icon size={14} strokeWidth={1.5} />
                          </div>
                          <div>
                            <p className="text-[12px] font-medium transition-colors text-slate-900">{alert.title}</p>
                            <p className="text-[10px] mt-0.5 whitespace-nowrap text-slate-500">{alert.desc}</p>
                          </div>
                        </div>
                        <span className="text-[9px] font-medium tracking-tight whitespace-nowrap ml-4 text-slate-300">
                          {alert.time}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-50">
                    <button className="w-full py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md transition-all bg-slate-50 text-slate-400 hover:bg-slate-100">
                      View All Alerts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: CTA */}
      <div className="flex-1 flex justify-end items-center gap-4">
        <button
          className="px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer whitespace-nowrap bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
          style={{ fontFamily: 'CustomFont' }}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
