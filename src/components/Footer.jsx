import React from 'react';
import { Globe, Navigation, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 w-full rounded-t-[48px] relative z-10" style={{ fontFamily: 'CustomFont' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-16 mb-16">

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">LINKS</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white/40 hover:text-white transition-colors">Home</a></li>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white/40 hover:text-white transition-colors">Search flights</a></li>
              <li><a href="#explore" onClick={(e) => scrollToSection(e, 'explore')} className="text-white/40 hover:text-white transition-colors">Explore</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white/40 hover:text-white transition-colors">About</a></li>
              <li className="flex items-center gap-2">
                <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-white/40 hover:text-white transition-colors">Flightpoints</a>
                <span className="bg-blue-600 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold uppercase tracking-wider">
                  Pro
                </span>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-white/40 hover:text-white transition-colors">Premium Pricing</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Aeroplan</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Flying Blue</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-1">View all <ChevronRight className="size-3" /></a></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="col-span-2 lg:col-span-1 lg:pl-8">
            <h4 className="font-bold text-base mb-3 tracking-tight text-white">Stay Updated</h4>
            <p className="text-xs text-white/40 mb-4 font-medium">Get the latest award seat alerts and travel tips.</p>
            <div className="flex flex-col gap-3 group/input items-start">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all font-medium text-white placeholder:text-white/20"
              />
              <button className="bg-white text-black px-6 py-2.5 rounded-lg text-[10px] font-bold hover:bg-white/90 hover:scale-[1.05] active:scale-[0.95] transition-all uppercase tracking-widest shadow-lg shadow-white/5">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left side: Logo & Copyright */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <img src="/images/LOGO.svg" className="h-5 w-auto brightness-0 invert" alt="Flightpoints" />
                  <span className="font-bold text-xl tracking-tight text-white">flightpoints</span>
                </div>
                <span className="text-white/20 font-light text-xl">|</span>
                <span className="text-[11px] text-white/40 font-bold uppercase tracking-[0.1em]">
                  © 2026 FLIGHTPOINTS LTD.
                </span>
              </div>
              <p className="text-[10px] text-white/20 font-medium tracking-wide">
                All trademarks are properties of their respective owners.
              </p>
            </div>

            {/* Right side: Follow Us & Icons */}
            <div className="flex items-center gap-6">
              <span className="text-[11px] text-white/30 font-bold uppercase tracking-[0.3em] font-['Inter']">Follow Us</span>
              <div className="flex items-center gap-3">
                <a href="#" className="size-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 text-white group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="size-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 text-white group">
                  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
