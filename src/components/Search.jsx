import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { Plane, Search as SearchIcon, ArrowLeftRight, ChevronDown } from 'lucide-react';
import { airports } from '../data/airports';

const Search = ({ isSearchStarted }) => {
  const [tripType, setTripType] = useState('One Way');
  const [fareType, setFareType] = useState('Regular');
  const [fromLocation, setFromLocation] = useState({ city: 'Calicut', code: 'CCJ', airport: 'Kozhikode International Airport' });
  const [toLocation, setToLocation] = useState({ city: 'Bangalore', code: 'BLR', airport: 'Kempegowda International Airport' });
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [fromSearch, setFromSearch] = useState('');
  const [selectedIndexFrom, setSelectedIndexFrom] = useState(0);
  const fromRef = useRef(null);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [toSearch, setToSearch] = useState('');
  const [selectedIndexTo, setSelectedIndexTo] = useState(0);
  const toRef = useRef(null);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datePickerRef = useRef(null);
  const [returnDate, setReturnDate] = useState(null);
  const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
  const returnDatePickerRef = useRef(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState('Economy');
  const [showTravelerDropdown, setShowTravelerDropdown] = useState(false);
  const travelerRef = useRef(null);

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) setShowFromDropdown(false);
      if (toRef.current && !toRef.current.contains(event.target)) setShowToDropdown(false);
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) setShowDatePicker(false);
      if (returnDatePickerRef.current && !returnDatePickerRef.current.contains(event.target)) setShowReturnDatePicker(false);
      if (travelerRef.current && !travelerRef.current.contains(event.target)) setShowTravelerDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSwap = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  const filteredFromAirports = airports.filter(airport =>
    airport.city.toLowerCase().includes(fromSearch.toLowerCase()) ||
    airport.code.toLowerCase().includes(fromSearch.toLowerCase()) ||
    airport.airport.toLowerCase().includes(fromSearch.toLowerCase())
  ).slice(0, 10);

  const filteredToAirports = airports.filter(airport =>
    airport.city.toLowerCase().includes(toSearch.toLowerCase()) ||
    airport.code.toLowerCase().includes(toSearch.toLowerCase()) ||
    airport.airport.toLowerCase().includes(toSearch.toLowerCase())
  ).slice(0, 10);

  const handleKeyDownFrom = (e) => {
    if (e.key === 'ArrowDown') setSelectedIndexFrom(prev => (prev < filteredFromAirports.length - 1 ? prev + 1 : prev));
    else if (e.key === 'ArrowUp') setSelectedIndexFrom(prev => (prev > 0 ? prev - 1 : prev));
    else if (e.key === 'Enter' && filteredFromAirports[selectedIndexFrom]) {
      setFromLocation(filteredFromAirports[selectedIndexFrom]);
      setShowFromDropdown(false);
      setFromSearch('');
    }
  };

  const handleKeyDownTo = (e) => {
    if (e.key === 'ArrowDown') setSelectedIndexTo(prev => (prev < filteredToAirports.length - 1 ? prev + 1 : prev));
    else if (e.key === 'ArrowUp') setSelectedIndexTo(prev => (prev > 0 ? prev - 1 : prev));
    else if (e.key === 'Enter' && filteredToAirports[selectedIndexTo]) {
      setToLocation(filteredToAirports[selectedIndexTo]);
      setShowToDropdown(false);
      setToSearch('');
    }
  };

  const fareTypes = [
    { id: 'Regular', label: 'Regular', sub: 'Regular Fares' },
    { id: 'Student', label: 'Student', sub: 'Extra Baggage' },
  ];

  const priceDrops = [
    { route: 'BOM → SIN', off: '22% off' },
    { route: 'BLR → LHR', off: '15% off' },
    { route: 'MAA → BKK', off: '27% off' },
    { route: 'HYD → DXB', off: '19% off' },
    { route: 'DEL → JFK', off: '30% off' },
    { route: 'CCU → KUL', off: '18% off' },
    { route: 'COK → DOH', off: '24% off' },
    { route: 'AMD → CDG', off: '21% off' },
  ];

  const [currentDropIndex, setCurrentDropIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDropIndex((prev) => (prev + 1) % priceDrops.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Smart auto-scroll: Only scrolls if the dropdown would be cut off by the screen edge
  useEffect(() => {
    if (showFromDropdown || showToDropdown || showDatePicker || showReturnDatePicker || showTravelerDropdown) {
      const activeRef = showFromDropdown ? fromRef : 
                        showToDropdown ? toRef : 
                        showDatePicker ? datePickerRef : 
                        showReturnDatePicker ? returnDatePickerRef : 
                        travelerRef;

      if (activeRef.current) {
        // Small delay to ensure the dropdown is rendered
        const timer = setTimeout(() => {
          const rect = activeRef.current.getBoundingClientRect();
          const dropdownHeight = 380; // Approximate height of the largest dropdown
          const viewportHeight = window.innerHeight;
          const distanceToBottom = viewportHeight - rect.bottom;

          // Only scroll if there isn't enough space for the dropdown
          if (distanceToBottom < dropdownHeight) {
            const scrollAmount = dropdownHeight - distanceToBottom + 40; // +40 for extra breathing room
            window.scrollBy({
              top: scrollAmount,
              behavior: 'smooth'
            });
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [showFromDropdown, showToDropdown, showDatePicker, showReturnDatePicker, showTravelerDropdown]);

  useLayoutEffect(() => {
    if (isVisible) {
      const tl = gsap.timeline();
      
      // 1. Blue container slides in from right
      tl.fromTo(".search-container", 
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "expo.out", force3D: true }
      );
      
      // 2. Reveal contents
      const revealItems = sectionRef.current.querySelectorAll(".search-reveal-item");
      if (revealItems.length) {
        tl.fromTo(revealItems, 
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.05, ease: "expo.out", force3D: true },
          "-=0.5"
        );
      }
    }
  }, [isVisible]);

  return (
    <section id="search" ref={sectionRef} className="min-h-[calc(100vh-72px)] w-full flex items-center justify-center transition-colors duration-300 bg-white relative z-50">
      <div className="w-full pl-8 min-h-[calc(100vh-72px)] flex items-center">
        <div className="search-container w-full relative p-16 pb-28 rounded-l-[3rem] border bg-blue-600 border-blue-500 opacity-0">
          {/* Animated Left Panel */}
          <div className="absolute left-16 top-1/2 -translate-y-1/2 flex flex-col gap-5 w-52 z-10">
            {/* Stat Card 1 */}
            <div className="search-reveal-item bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg opacity-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">✈</div>
                <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Live Deals</span>
              </div>
              <p className="text-white text-xl font-black">2,400+</p>
              <p className="text-white/50 text-[10px] mt-0.5">flights tracked today</p>
              <div className="mt-2 flex gap-1">
                {[80, 60, 90, 50, 70, 85].map((h, i) => (
                  <div key={i} className="w-1.5 rounded-full bg-white/40" style={{ height: `${h * 0.3}px`, animation: `barPulse ${1 + i * 0.2}s ease-in-out infinite alternate` }} />
                ))}
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="search-reveal-item bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg opacity-0">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-sm">💰</div>
                <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Avg Saving</span>
              </div>
              <p className="text-white text-xl font-black">₹3,200</p>
              <p className="text-white/50 text-[10px] mt-0.5">per booking vs direct</p>
              <div className="mt-2 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full rounded-full bg-white/60" style={{ width: '72%', animation: 'progressPulse 3s ease-in-out infinite' }} />
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="search-reveal-item bg-white/15 backdrop-blur-sm rounded-2xl p-4 border border-white/20 shadow-lg opacity-0">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/70 text-[10px] font-semibold uppercase tracking-wider">Price Drop</span>
              </div>
              <div className="overflow-hidden h-[52px] relative">
                <div
                  key={currentDropIndex}
                  className="animate-in slide-in-from-bottom-2 fade-in duration-500"
                >
                  <p className="text-white text-sm font-bold">{priceDrops[currentDropIndex].route}</p>
                  <p className="text-green-300 text-lg font-black">↓ {priceDrops[currentDropIndex].off}</p>
                </div>
              </div>
              <p className="text-white/50 text-[10px]">Just now</p>
            </div>
          </div>

          {/* Inner content wrapper - keeps original size & alignment */}
          <div className="w-full max-w-5xl ml-auto">
            {/* Main Tabs Row - Flights Only */}
            <div className="search-reveal-item w-full flex items-center justify-start gap-3 mb-6 relative z-20 opacity-0">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full mb-1 shadow-lg uppercase tracking-tight">
                  Upto 44% Off
                </span>
                <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-slate-200/60 transition-all duration-300 font-black text-sm bg-white text-[#2563EB]">
                  <Plane size={16} strokeWidth={2.5} />
                  Flights
                </button>
              </div>
            </div>

            {/* Main White Card */}
            <div className="search-reveal-item rounded-[2rem] p-8 relative z-10 border bg-white border-slate-200/60 opacity-0">
              {/* Trip Type Selector */}
              <div className="flex items-center gap-8 mb-8">
                {['One Way', 'Round Trip', 'Multi City'].map((type) => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${tripType === type ? 'border-[#2563EB]' : 'border-slate-300'}`}>
                      {tripType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />}
                    </div>
                    <input type="radio" className="hidden" checked={tripType === type} onChange={() => setTripType(type)} />
                    <span className={`text-sm font-bold ${tripType === type ? 'text-slate-900' : 'text-slate-500'}`}>{type}</span>
                  </label>
                ))}
              </div>

              {/* Input Grid */}
              <div className="grid grid-cols-1 md:grid-cols-5 border rounded-t-2xl mb-8 relative border-slate-200">
                {/* Departure From */}
                <div ref={fromRef} className="p-4 border-b md:border-b-0 md:border-r transition-colors cursor-pointer relative group rounded-tl-2xl border-slate-200 hover:bg-slate-50" onClick={() => setShowFromDropdown(true)}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Departure From</p>
                  <h3 className="text-2xl font-black text-slate-800">{fromLocation.city}</h3>
                  <p className="text-[11px] text-slate-500 truncate mt-1">{fromLocation.code}, {fromLocation.airport}</p>
                  <button onClick={(e) => { e.stopPropagation(); handleSwap(); }} className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full shadow-sm hidden md:flex items-center justify-center transition-all bg-white border border-slate-200 text-[#2563EB]">
                    <ArrowLeftRight size={14} />
                  </button>
                  {showFromDropdown && (
                    <div className="absolute top-full left-[-1px] w-[350px] rounded-b-xl z-[999] border overflow-hidden animate-dropdown-open bg-white border-slate-200" onClick={(e) => e.stopPropagation()}>
                      <div className="p-3 border-b border-white/5">
                        <div className="flex items-center gap-2 border rounded-lg px-4 py-1.5 bg-slate-50 border-slate-200">
                          <SearchIcon size={14} className="text-slate-400" />
                          <input autoFocus type="text" placeholder="From where?" className="bg-transparent border-none outline-none text-xs w-full font-bold placeholder:text-slate-500 text-slate-800" value={fromSearch} onChange={(e) => setFromSearch(e.target.value)} onKeyDown={handleKeyDownFrom} />
                        </div>
                      </div>
                      <div className="max-h-[265px] overflow-y-auto py-1 scrollbar-hide">
                        {filteredFromAirports.map((airport, idx) => (
                          <div key={idx} className={`px-4 py-2 cursor-pointer flex items-center justify-between group transition-colors ${selectedIndexFrom === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`} onClick={() => { setFromLocation(airport); setShowFromDropdown(false); setFromSearch(''); }}>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-800">{airport.city}</span>
                              <span className="text-[10px] text-slate-500">{airport.airport}</span>
                            </div>
                            <span className={`text-sm font-black ${selectedIndexFrom === idx ? 'text-[#2563EB]' : 'text-slate-400'}`}>{airport.code}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Going To */}
                <div ref={toRef} className="p-4 border-b md:border-b-0 md:border-r transition-colors cursor-pointer relative border-slate-200 hover:bg-slate-50" onClick={() => setShowToDropdown(true)}>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Going To</p>
                  <h3 className="text-2xl font-black text-slate-800">{toLocation.city}</h3>
                  <p className="text-[11px] text-slate-500 truncate mt-1">{toLocation.code}, {toLocation.airport}</p>
                  {showToDropdown && (
                    <div className="absolute top-full left-[-1px] w-[350px] rounded-b-xl z-[999] border overflow-hidden animate-dropdown-open bg-white border-slate-200" onClick={(e) => e.stopPropagation()}>
                      <div className="p-3 border-b border-white/5">
                        <div className="flex items-center gap-2 border rounded-lg px-4 py-1.5 bg-slate-50 border-slate-200">
                          <SearchIcon size={14} className="text-slate-400" />
                          <input autoFocus type="text" placeholder="To where?" className="bg-transparent border-none outline-none text-xs w-full font-bold placeholder:text-slate-500 text-slate-800" value={toSearch} onChange={(e) => setToSearch(e.target.value)} onKeyDown={handleKeyDownTo} />
                        </div>
                      </div>
                      <div className="max-h-[265px] overflow-y-auto py-1 scrollbar-hide">
                        {filteredToAirports.map((airport, idx) => (
                          <div key={idx} className={`px-4 py-2 cursor-pointer flex items-center justify-between group transition-colors ${selectedIndexTo === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`} onClick={() => { setToLocation(airport); setShowToDropdown(false); setToSearch(''); }}>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold text-slate-800">{airport.city}</span>
                              <span className="text-[10px] text-slate-500">{airport.airport}</span>
                            </div>
                            <span className={`text-sm font-black ${selectedIndexTo === idx ? 'text-[#2563EB]' : 'text-slate-400'}`}>{airport.code}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Departure Date */}
                <div ref={datePickerRef} className="p-4 border-b md:border-b-0 md:border-r transition-colors cursor-pointer relative border-slate-200 hover:bg-slate-50" onClick={() => setShowDatePicker(!showDatePicker)}>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Departure</p>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${showDatePicker ? 'rotate-180' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">{format(departureDate, 'd')} <span className="text-lg font-bold">{format(departureDate, "MMM'' yy")}</span></h3>
                  <p className="text-[11px] text-slate-500 mt-1">{format(departureDate, 'EEEE')}</p>
                  {showDatePicker && (
                    <div className="absolute top-full left-[-1px] z-[999] bg-white border border-slate-200 rounded-b-xl p-2" onClick={(e) => e.stopPropagation()}>
                      <DatePicker selected={departureDate} onChange={(date) => { setDepartureDate(date); setShowDatePicker(false); }} inline minDate={new Date()} />
                    </div>
                  )}
                </div>

                {/* Return Date */}
                <div ref={returnDatePickerRef} className="p-4 border-b md:border-b-0 md:border-r transition-colors cursor-pointer relative border-slate-200 hover:bg-slate-50" onClick={() => setShowReturnDatePicker(!showReturnDatePicker)}>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Return</p>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${showReturnDatePicker ? 'rotate-180' : ''}`} />
                  </div>
                  {returnDate ? (
                    <>
                      <h3 className="text-2xl font-black text-slate-800">{format(returnDate, 'd')} <span className="text-lg font-bold">{format(returnDate, "MMM'' yy")}</span></h3>
                      <p className="text-[11px] text-slate-500 mt-1">{format(returnDate, 'EEEE')}</p>
                    </>
                  ) : (
                    <h3 className="text-sm font-bold text-[#2563EB] leading-tight mt-2">Book Round Trip<br /><span className="text-[11px] font-medium text-slate-400">to save extra</span></h3>
                  )}
                  {showReturnDatePicker && (
                    <div className="absolute top-full left-[-1px] z-[999] bg-white border border-slate-200 rounded-b-xl p-2" onClick={(e) => e.stopPropagation()}>
                      <DatePicker selected={returnDate} onChange={(date) => { setReturnDate(date); setShowReturnDatePicker(false); setTripType('Round Trip'); }} inline minDate={departureDate} />
                    </div>
                  )}
                </div>

                {/* Travelers */}
                <div ref={travelerRef} className="p-4 transition-colors cursor-pointer relative md:rounded-tr-2xl hover:bg-slate-50" onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Travellers</p>
                    <ChevronDown size={14} className={`text-slate-400 transition-transform ${showTravelerDropdown ? 'rotate-180' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800">{adults + children} <span className="text-lg font-bold">Total</span></h3>
                  <p className="text-[11px] text-slate-500 mt-1">{cabinClass}</p>
                  {showTravelerDropdown && (
                    <div className="absolute top-full right-[-1px] w-[300px] z-[999] border rounded-b-xl p-5 animate-dropdown-open bg-white border-slate-200" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-between mb-4">
                        <div><p className="text-sm font-bold text-slate-800">Adults</p><p className="text-[10px] text-slate-500">18+</p></div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => setAdults(Math.max(1, adults - 1))} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">-</button>
                          <span className="text-sm font-bold text-slate-800">{adults}</span>
                          <button onClick={() => setAdults(adults + 1)} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">+</button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-6">
                        <div><p className="text-sm font-bold text-slate-800">Children</p><p className="text-[10px] text-slate-500">0-17</p></div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => setChildren(Math.max(0, children - 1))} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">-</button>
                          <span className="text-sm font-bold text-slate-800">{children}</span>
                          <button onClick={() => setChildren(children + 1)} className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-slate-500">+</button>
                        </div>
                      </div>
                      <div className="mb-6">
                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Class</p>
                        <div className="flex flex-wrap gap-2">
                          {['Economy', 'Business'].map(cls => (
                            <button key={cls} onClick={() => setCabinClass(cls)} className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all ${cabinClass === cls ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-slate-200 text-slate-500'}`}>{cls}</button>
                          ))}
                        </div>
                      </div>
                      <button onClick={() => setShowTravelerDropdown(false)} className="w-full py-2 bg-[#2563EB] text-white rounded-lg text-xs font-bold">Done</button>
                    </div>
                  )}
                </div>

              </div>

              {/* Fare Types */}
              <div className="flex flex-wrap items-center gap-4 mt-12">
                {fareTypes.map(type => (
                  <label key={type.id} className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${fareType === type.id ? 'bg-blue-50 border-blue-200' : 'border-transparent'}`} onClick={() => setFareType(type.id)}>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${fareType === type.id ? 'border-[#2563EB]' : 'border-slate-300'}`}>
                      {fareType === type.id && <div className="w-2 h-2 rounded-full bg-[#2563EB]" />}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{type.label}</span>
                  </label>
                ))}
              </div>

              {/* Search Button - Positioned on card edge */}
              <div className="absolute left-1/2 -bottom-7 -translate-x-1/2 z-30">
                <button className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-12 py-3.5 rounded-full text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl uppercase tracking-widest">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
