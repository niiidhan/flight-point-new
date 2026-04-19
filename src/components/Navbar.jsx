import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const Navbar = ({ isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Explore', href: '#explore' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`mx-3 mt-3 rounded-2xl flex items-center justify-between px-8 sticky top-3 z-50 transition-all duration-300 border ${isScrolled
          ? (isDarkMode ? 'bg-white/5 backdrop-blur-xl border-white/10' : 'bg-white/80 backdrop-blur-xl border-[#E5E7EB]')
          : (isDarkMode ? 'bg-[#0F172A] border-transparent' : 'bg-white border-transparent')
        }`}
      style={{ height: '70px', fontFamily: 'CustomFont' }}
    >
      {/* Left: Logo */}
      <div className="flex-1 flex justify-start">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="/images/LOGO.svg" alt="Logo Icon" className={`h-5 w-auto ${isDarkMode ? 'invert-0' : 'invert'}`} />
          <img src="/images/logoletter.svg" alt="ai.work" className={`h-7 w-auto ${isDarkMode ? 'invert-0' : 'invert'}`} />
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center max-w-md">
        <div className={`relative w-full group transition-all duration-300 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-[#0F172A]/5 border-[#E5E7EB]'} border rounded-full px-4 py-2 flex items-center gap-3 hover:border-[#2563EB]/50`}>
          <Search size={16} className={`${isDarkMode ? 'text-white/30' : 'text-[#0F172A]/30'} group-hover:text-[#2563EB] transition-colors`} />
          <input
            type="text"
            placeholder="Search programs, flights or miles..."
            className={`bg-transparent w-full focus:outline-none text-sm font-medium ${isDarkMode ? 'text-white placeholder:text-white/20' : 'text-[#0F172A] placeholder:text-[#0F172A]/20'}`}
            style={{ fontFamily: 'CustomFont' }}
          />
        </div>
      </div>

      {/* Right: Navigation Links & CTA */}
      <div className="flex-1 flex justify-end items-center gap-6">
        <div className="hidden xl:flex items-center gap-6 mr-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-white/70 hover:text-white' : 'text-[#0F172A]/70 hover:text-[#0F172A]'}`}
              style={{ fontFamily: 'CustomFont' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer whitespace-nowrap bg-[#2563EB] text-white hover:bg-[#1D4ED8]`}
          style={{ fontFamily: 'CustomFont' }}
        >
          Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
