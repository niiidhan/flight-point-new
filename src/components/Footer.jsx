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
    <footer className="bg-black text-white py-20 px-6 md:px-12 w-full rounded-t-[48px] relative z-10" style={{ fontFamily: 'CustomFont' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Links Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-8">LINKS</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white/40 hover:text-white transition-colors">Home</a></li>
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-white/40 hover:text-white transition-colors">Search flights</a></li>
              <li><a href="#explore" onClick={(e) => scrollToSection(e, 'explore')} className="text-white/40 hover:text-white transition-colors">Explore</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-white/40 hover:text-white transition-colors">About</a></li>
              <li className="flex items-center gap-2">
                <a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-white/40 hover:text-white transition-colors">Flightpoints</a>
                <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.5 rounded flex items-center gap-1 font-bold uppercase tracking-wider">
                  Pro
                </span>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-8">Support</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-8">Programs</h4>
            <ul className="space-y-4 text-sm font-bold">
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="text-white/40 hover:text-white transition-colors">Premium Pricing</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Aeroplan</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors">Flying Blue</a></li>
              <li><a href="#" className="text-white/40 hover:text-white transition-colors flex items-center gap-1">View all <ChevronRight className="size-4" /></a></li>
            </ul>
          </div>

          {/* CTA Column */}
          <div className="lg:pl-8">
            <h4 className="font-bold text-lg mb-4 tracking-tight text-white">Stay Updated</h4>
            <p className="text-sm text-white/40 mb-6 font-medium">Get the latest award seat alerts and travel tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all font-medium text-white placeholder:text-white/20"
              />
              <button className="absolute right-2 top-1.5 bottom-1.5 bg-blue-600 text-white px-4 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
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
                <a href="#" className="size-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 text-white">
                  <Globe className="size-5" />
                </a>
                <a href="#" className="size-11 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all border border-white/10 text-white">
                  <Navigation className="size-5" />
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
