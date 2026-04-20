import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQItem = ({ question, answer, isOpen, onToggle, expandUp }) => {
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (isOpen) {
      // Opening
      gsap.to(cardRef.current, { 
        height: "192px", 
        duration: 0.4, 
        ease: "power3.out",
        onStart: () => gsap.set(cardRef.current, { zIndex: 50 })
      });
      gsap.to(contentRef.current, { 
        opacity: 1, 
        y: 0,
        duration: 0.3, 
        delay: 0.1 
      });
    } else {
      // Closing
      gsap.to(cardRef.current, { 
        height: "88px", 
        duration: 0.4, 
        ease: "power3.inOut",
        onComplete: () => gsap.set(cardRef.current, { zIndex: 10 })
      });
      gsap.to(contentRef.current, { 
        opacity: 0, 
        y: -10,
        duration: 0.2 
      });
    }
  }, [isOpen]);

  return (
    <div className="relative h-[88px] w-full faq-item-container">
      <div 
        ref={cardRef}
        className={`absolute ${expandUp ? 'bottom-0' : 'top-0'} left-0 w-full p-6 rounded-xl border transition-colors cursor-pointer bg-white shadow-none overflow-hidden ${isOpen ? 'border-slate-200 shadow-xl shadow-slate-900/5' : 'border-slate-100 hover:border-slate-200'}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        style={{ height: '88px', zIndex: isOpen ? 50 : 10 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-bold text-slate-900 leading-snug pt-0.5">{question}</p>
            <div className="flex-shrink-0 pt-0.5">
              {isOpen ? <Minus className="size-4 text-slate-900" /> : <Plus className="size-4 text-slate-400" />}
            </div>
          </div>
          
          <div 
            ref={contentRef} 
            className="overflow-hidden"
            style={{ opacity: isOpen ? 1 : 0 }}
          >
            <div className="mt-4 pt-4 border-t border-slate-50">
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const component = useRef(null);
  const slider = useRef(null);
  const [openId, setOpenId] = useState(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenId(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".about-panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: true,
          start: "top 72px",
          end: () => "+=" + (slider.current.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
          anticipatePin: 1,
        }
      });
    }, component);

    return () => ctx.revert();
  }, []);

  const faqData = [
    {
      id: 1,
      question: "What is Flightpoints? How does it work?",
      answer: "Flightpoints is a powerful search engine for award flights. We aggregate real-time availability across major airline programs, allowing you to find the best value for your points and miles in seconds."
    },
    {
      id: 2,
      question: "Which airlines and loyalty programs does Flightpoints support?",
      answer: "We support over 25+ major airline programs including Aeromexico, Air Canada Aeroplan, Avianca LifeMiles, British Airways Executive Club, Emirates Skywards, United MileagePlus, and many more."
    },
    {
      id: 3,
      question: "How accurate and up-to-date is the award flight data?",
      answer: "Our data is refreshed continuously. Premium members get access to 100% real-time data directly from airline systems, ensuring you never miss a seat that just opened up."
    },
    {
      id: 4,
      question: "Do I need to have a points-earning credit card to use Flightpoints?",
      answer: "No, anyone can use Flightpoints! However, having cards from Chase, Amex, Capital One, or Citi helps you transfer points to the airline partners we track to book your flights."
    },
    {
      id: 5,
      question: "Can Flightpoints help me book my flight directly?",
      answer: "Flightpoints is a search and alert tool. Once you find a flight, we provide direct links and instructions on how to book it through the respective airline's official website."
    },
    {
      id: 6,
      question: "Is Flightpoints a free or paid service?",
      answer: "We offer both! Our Free plan provides basic search and 7-day cached data. Our Premium plan offers real-time searches, instant alerts, and advanced filters for serious travelers."
    }
  ];

  return (
    <div ref={component} id="about" className="overflow-hidden bg-white w-full h-[calc(100vh-72px)] relative">
      <div ref={slider} className="flex h-full bg-white" style={{ width: '500vw' }}>

        {/* Screen 1: Original Identity */}
        <section className="about-panel w-screen h-full flex flex-col items-center justify-center text-center bg-white">
          <div className="mb-8">
            <img
              src="/images/LOGO.svg"
              alt="Logo Icon"
              className="h-16 md:h-16 w-auto invert"
            />
          </div>
          <h1
            className="text-5xl md:text-5xl font-medium text-slate-900 tracking-tighter leading-[1.3]"
            style={{ fontFamily: 'CustomFont' }}
          >
            Why we build <br />
            Flight-point
          </h1>
        </section>

        {/* Screen 2: Editorial/Story */}
        <section className="about-panel w-screen h-full flex items-center justify-center bg-white">
          <div className="flex flex-col items-start text-left px-12 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight" style={{ fontFamily: 'CustomFont' }}>
              Software that makes you feel great
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              <div className="space-y-8">
                <p>
                  Traveling with points shouldn't be complicated or overwhelming. Flightpoints was built on a simple belief: everyone should be able to use their miles confidently without stress, confusion, or wasted time.
                </p>
                <p>
                  Every year, millions of award seats go unused because travelers never know when they become available. Searching dozens of airline sites, comparing point values, and tracking routes manually is slow, unclear, and easy to miss.
                </p>
              </div>
              <div className="space-y-8">
                <p>
                  <span className="text-slate-900 font-bold">Flightpoints exists to change that.</span><br />
                  We continuously improve our platform with smarter alerts, deeper award data, and more airline integrations, so planning with miles becomes effortless.
                </p>
                <p>
                  Our promise is simple: we'll keep building tools that help you travel better, save more points, and explore the world without barriers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 3: Airline Partner Grid */}
        <section className="about-panel w-screen h-full flex items-center justify-center bg-white">
          <div className="flex flex-col items-start text-left px-12 max-w-6xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'CustomFont' }}>
              Find the best Award flights.
            </h2>

            <p className="text-xl text-slate-500 leading-relaxed max-w-4xl mb-10">
              Search <span className="font-bold text-slate-900">award flights across 25+ airlines and partner programs.</span> Compare
              mileage costs, availability, and cabin options side-by-side, and quickly find the
              best way to fly using your points.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl">
              {[
                { name: "Aeromexico", routes: "307 Routes", logo: "/images/logo_aeromexico-01.svg" },
                { name: "Copa ConnectMiles", routes: "307 Routes", logo: "/images/connect-miles-seeklogo.png" },
                { name: "Emirates Skywards", routes: "307 Routes", logo: "/images/Emirates_SkyCargo_Logo.svg" },
                { name: "Finnair Plus", routes: "307 Routes", logo: "/images/ic_finnair_logo-01.svg" },
                { name: "GOL Smiles", routes: "307 Routes", logo: "/images/gol-linhas-aereas-seeklogo-01.svg" },
                { name: "Jet Blue", routes: "307 Routes", logo: "/images/jetblue-01.svg" },
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-100 bg-white flex items-center justify-between group hover:border-slate-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center p-1.5">
                      <img src={item.logo} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-[13px] leading-tight">{item.name}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.routes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screen 4: Transfer Partners */}
        <section className="about-panel w-screen h-full flex items-center justify-center bg-white">
          <div className="flex flex-col items-start text-left px-12 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight" style={{ fontFamily: 'CustomFont' }}>
              Discover Transfer Partners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {[
                { name: "Capital One", logo: "/images/capital-one.svg" },
                { name: "American Express", logo: "/images/american-express.svg" },
                { name: "Chase", logo: "/images/chase.svg" },
                { name: "Citi", logo: "/images/citi.svg" },
                { name: "Bilt", logo: "/images/bilt.svg" },
                { name: "Wells Fargo", logo: "/images/wellsfargo.svg" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl border border-slate-100 bg-white flex items-center justify-center transition-all hover:border-slate-300">
                  <img src={item.logo} alt={item.name} className="h-6 md:h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screen 5: FAQ Section */}
        <section className="about-panel w-screen h-full flex items-center justify-center bg-white">
          <div className="flex flex-col items-start text-left px-12 max-w-5xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 tracking-tight" style={{ fontFamily: 'CustomFont' }}>
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 w-full">
              {faqData.map((faq) => (
                <FAQItem 
                  key={faq.id} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                  expandUp={faq.id > 4}
                />
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
