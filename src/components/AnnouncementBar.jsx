import React, { useRef, useState } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const barRef = useRef(null);

  const handleClose = () => {
    gsap.to(barRef.current, {
      y: -40,
      height: 0,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsVisible(false);
      }
    });
  };

  if (!isVisible) return null;

  return (
    <section 
      ref={barRef}
      id="announcement-bar" 
      className="w-full flex items-center justify-center relative px-4 overflow-hidden transition-colors duration-300 animate-reveal-down" 
      style={{ 
        height: '38px', 
        backgroundColor: '#2563EB' 
      }}
    >
      <h1 className="text-sm font-bold tracking-wider text-white">
        Extra 44% off for first time users
      </h1>
      
      <button 
        onClick={handleClose}
        className="absolute right-4 text-white/50 hover:text-white transition-colors cursor-pointer z-10"
      >
        <X size={16} />
      </button>
    </section>
  );
};

export default AnnouncementBar;
