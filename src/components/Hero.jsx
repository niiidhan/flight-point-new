import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { Plane, Hotel, Home, Bus, Train, Car, ChevronDown, Search, ArrowLeftRight, ShieldCheck, Star, Plus, Minus } from 'lucide-react';
import { airports } from '../data/airports';

const Hero = ({ isDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Flights');
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


  useEffect(() => {
    if (showFromDropdown || showToDropdown || showDatePicker || showReturnDatePicker || showTravelerDropdown) {
      setTimeout(() => {
        const dropdown = document.querySelector('.animate-dropdown-open');
        if (dropdown) {
          const rect = dropdown.getBoundingClientRect();
          const isOffBottom = rect.bottom > window.innerHeight;
          if (isOffBottom) {
            window.scrollBy({
              top: rect.bottom - window.innerHeight + 60,
              behavior: 'smooth'
            });
          }
        }
      }, 100);
    }
  }, [showFromDropdown, showToDropdown, showDatePicker, showReturnDatePicker, showTravelerDropdown]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fromRef.current && !fromRef.current.contains(event.target)) {
        setShowFromDropdown(false);
      }
      if (toRef.current && !toRef.current.contains(event.target)) {
        setShowToDropdown(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
      if (returnDatePickerRef.current && !returnDatePickerRef.current.contains(event.target)) {
        setShowReturnDatePicker(false);
      }
      if (travelerRef.current && !travelerRef.current.contains(event.target)) {
        setShowTravelerDropdown(false);
      }
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
    if (e.key === 'ArrowDown') {
      setSelectedIndexFrom(prev => (prev < filteredFromAirports.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndexFrom(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (filteredFromAirports[selectedIndexFrom]) {
        setFromLocation(filteredFromAirports[selectedIndexFrom]);
        setShowFromDropdown(false);
        setFromSearch('');
      }
    }
  };

  const handleKeyDownTo = (e) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndexTo(prev => (prev < filteredToAirports.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndexTo(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      if (filteredToAirports[selectedIndexTo]) {
        setToLocation(filteredToAirports[selectedIndexTo]);
        setShowToDropdown(false);
        setToSearch('');
      }
    }
  };


  const mainTabs = [
    { id: 'Flights', icon: Plane, label: 'Flights', promo: 'Upto 15% Off' },
    { id: 'Hotels', icon: Hotel, label: 'Hotels', promo: 'Upto 50% Off' },
    { id: 'Holidays', icon: Home, label: 'Holidays' },
    { id: 'Bus', icon: Bus, label: 'Bus' },
    { id: 'Trains', icon: Train, label: 'Trains' },
    { id: 'Cabs', icon: Car, label: 'Cabs' },
  ];

  const fareTypes = [
    { id: 'Regular', label: 'Regular', sub: 'Regular Fares' },
    { id: 'Student', label: 'Student', sub: 'Extra Baggage' },
  ];


  return (
    <section id="hero" className="w-full min-h-screen p-1.5 flex flex-col">

      <div className={`flex-1 w-full rounded-2xl relative flex flex-col items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-[#0F172A]' : 'bg-slate-50'}`}>


        {/* Background Image with Blur & Dim */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">

          <img
            src="/images/bg.jpeg"
            alt="Hero Background"
            className="w-full h-full object-cover scale-110 filter brightness-[0.7] blur-[4px]"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-4 py-8">

          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
              The Fastest Award Flight Finder
            </h1>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-white/80 leading-relaxed">
              No more checking airlines one by one. Find premium award seats in seconds, compare miles instantly, and get alerts before they’re gone.
            </p>
          </div>

          {/* Main Tabs Row - Flights Only */}
          <div className="flex items-center justify-start gap-3 mb-4 relative z-20">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-3 py-1 rounded-full mb-1 shadow-lg uppercase tracking-tight">
                Upto 44% Off
              </span>
              <button
                className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-slate-200 transition-all duration-300 font-bold text-sm bg-white text-slate-700"

              >
                <Plane size={16} className="text-slate-600" />
                Flights
              </button>
            </div>
          </div>






          {/* Main White Card */}
          <div className="bg-white rounded-[1rem] shadow-2xl p-8 relative z-10 border border-[#E5E7EB]">

            {/* Trip Type Selector */}
            <div className="flex items-center gap-8 mb-8">
              {['One Way', 'Round Trip', 'Multi City'].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer group">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${tripType === type ? 'border-[#D92D20]' : 'border-slate-300'}`}>
                    {tripType === type && <div className="w-2.5 h-2.5 rounded-full bg-[#D92D20]" />}
                  </div>
                  <input
                    type="radio"
                    name="tripType"
                    className="hidden"
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                  />
                  <span className={`text-sm font-bold ${tripType === type ? 'text-[#D92D20]' : 'text-slate-600'}`}>{type}</span>
                </label>
              ))}
            </div>

            {/* Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 border border-slate-200 rounded-xl mb-8 relative">


              {/* Departure From */}
              <div
                ref={fromRef}
                className="p-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer relative group rounded-tl-xl rounded-bl-xl md:rounded-bl-xl md:rounded-l-xl"
                onClick={() => {
                  setShowFromDropdown(true);
                  const idx = filteredFromAirports.findIndex(a => a.code === fromLocation.code);
                  setSelectedIndexFrom(idx !== -1 ? idx : 0);
                }}
              >
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Departure From</p>
                <h3 className="text-2xl font-black text-slate-800">{fromLocation.city}</h3>
                <p className="text-[11px] text-slate-500 truncate mt-1">{fromLocation.code}, {fromLocation.airport}</p>

                {/* Swap Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSwap();
                  }}
                  className="absolute right-[-14px] top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-200 p-1.5 rounded-full shadow-sm hidden md:flex items-center justify-center text-[#D92D20] hover:scale-110 active:scale-95 transition-all outline-none"
                >
                  <ArrowLeftRight size={14} />
                </button>

                {/* Dropdown Menu */}
                {showFromDropdown && (
                  <div className="absolute top-full left-[-1px] w-[350px] bg-white rounded-b-xl rounded-tl-xl rounded-tr-xl z-40 border border-slate-300 overflow-hidden animate-dropdown-open" onClick={(e) => e.stopPropagation()}>





                    <div className="p-3 border-b border-slate-50 bg-white">
                      <div className="flex items-center gap-2 bg-slate-100/50 border border-slate-200 rounded-full px-4 py-1.5 group hover:border-[#2563EB]/30 transition-all">
                        <Search size={14} className="text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                        <input
                          autoFocus
                          type="text"
                          placeholder="From where?"
                          className="bg-transparent border-none outline-none text-xs w-full font-bold text-slate-700 placeholder:text-slate-400"
                          value={fromSearch}
                          onChange={(e) => {
                            setFromSearch(e.target.value);
                            setSelectedIndexFrom(0);
                          }}
                          onKeyDown={handleKeyDownFrom}
                        />
                      </div>

                    </div>

                    <div className="max-h-[265px] overflow-y-auto py-1 scrollbar-hide">
                      {filteredFromAirports.map((airport, idx) => (
                        <div
                          key={idx}
                          className={`px-4 py-2 cursor-pointer flex items-center justify-between group transition-colors ${selectedIndexFrom === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                          onClick={() => {
                            setFromLocation(airport);
                            setShowFromDropdown(false);
                            setFromSearch('');
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-800">{airport.city}</span>
                            <span className="text-[10px] text-slate-500">{airport.airport}</span>
                          </div>
                          <span className={`text-sm font-black transition-colors ${selectedIndexFrom === idx ? 'text-[#2563EB]' : 'text-slate-400 group-hover:text-[#2563EB]'}`}>{airport.code}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </div>


              {/* Going To */}
              <div ref={toRef} className="p-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer relative" onClick={() => {
                setShowToDropdown(true);
                const idx = filteredToAirports.findIndex(a => a.code === toLocation.code);
                setSelectedIndexTo(idx !== -1 ? idx : 0);
              }}>

                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Going To</p>
                <h3 className="text-2xl font-black text-slate-800">{toLocation.city}</h3>
                <p className="text-[11px] text-slate-500 truncate mt-1">{toLocation.code}, {toLocation.airport}</p>

                {/* Dropdown Menu */}
                {showToDropdown && (
                  <div className="absolute top-full left-[-1px] w-[350px] bg-white rounded-b-xl rounded-tl-xl rounded-tr-xl z-40 border border-slate-300 overflow-hidden animate-dropdown-open" onClick={(e) => e.stopPropagation()}>







                    <div className="p-3 border-b border-slate-50 bg-white">
                      <div className="flex items-center gap-2 bg-slate-100/50 border border-slate-200 rounded-full px-4 py-1.5 group hover:border-[#2563EB]/30 transition-all">
                        <Search size={14} className="text-slate-400 group-hover:text-[#2563EB] transition-colors" />
                        <input
                          autoFocus
                          type="text"
                          placeholder="To where?"
                          className="bg-transparent border-none outline-none text-xs w-full font-bold text-slate-700 placeholder:text-slate-400"
                          value={toSearch}
                          onChange={(e) => {
                            setToSearch(e.target.value);
                            setSelectedIndexTo(0);
                          }}
                          onKeyDown={handleKeyDownTo}
                        />
                      </div>

                    </div>

                    <div className="max-h-[265px] overflow-y-auto py-1 scrollbar-hide">
                      {filteredToAirports.map((airport, idx) => (
                        <div
                          key={idx}
                          className={`px-4 py-2 cursor-pointer flex items-center justify-between group transition-colors ${selectedIndexTo === idx ? 'bg-slate-100' : 'hover:bg-slate-50'}`}
                          onClick={() => {
                            setToLocation(airport);
                            setShowToDropdown(false);
                            setToSearch('');
                          }}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-800">{airport.city}</span>
                            <span className="text-[10px] text-slate-500">{airport.airport}</span>
                          </div>
                          <span className={`text-sm font-black transition-colors ${selectedIndexTo === idx ? 'text-[#2563EB]' : 'text-slate-400 group-hover:text-[#2563EB]'}`}>{airport.code}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                )}

              </div>



              {/* Departure Date */}
              <div ref={datePickerRef} className="p-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer relative" onClick={() => setShowDatePicker(!showDatePicker)}>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Departure Date</p>
                  <ChevronDown size={14} className={`text-slate-400 mb-1 transition-transform ${showDatePicker ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-800">
                  {format(departureDate, 'd')} <span className="text-lg font-bold">{format(departureDate, "MMM'' yy")}</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-1">{format(departureDate, 'EEEE')}</p>

                {showDatePicker && (
                  <div className="absolute top-full left-[-1px] z-50 bg-white border border-[#E5E7EB] rounded-b-xl rounded-tl-xl rounded-tr-xl p-2 animate-dropdown-open" onClick={(e) => e.stopPropagation()}>
                    <DatePicker
                      selected={departureDate}
                      onChange={(date) => {
                        if (date) {
                          setDepartureDate(date);
                          setShowDatePicker(false);
                        }
                      }}
                      inline
                      minDate={new Date()}
                    />
                  </div>
                )}
              </div>

              {/* Return Date */}
              <div ref={returnDatePickerRef} className="p-4 border-b md:border-b-0 md:border-r border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer relative" onClick={() => setShowReturnDatePicker(!showReturnDatePicker)}>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Return Date</p>
                  <ChevronDown size={14} className={`text-slate-400 mb-1 transition-transform ${showReturnDatePicker ? 'rotate-180' : ''}`} />
                </div>

                {returnDate ? (
                  <>
                    <h3 className="text-2xl font-black text-slate-800">
                      {format(returnDate, 'd')} <span className="text-lg font-bold">{format(returnDate, "MMM'' yy")}</span>
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1">{format(returnDate, 'EEEE')}</p>
                  </>
                ) : (
                  <h3 className="text-sm font-bold text-[#2563EB] leading-tight mt-2">
                    Book Round Trip <br />
                    <span className="text-[11px] font-medium text-slate-400">to save extra</span>
                  </h3>
                )}

                {showReturnDatePicker && (
                  <div className="absolute top-full left-[-1px] z-50 bg-white border border-[#E5E7EB] rounded-b-xl rounded-tl-xl rounded-tr-xl p-2 animate-dropdown-open" onClick={(e) => e.stopPropagation()}>
                    <DatePicker
                      selected={returnDate}
                      onChange={(date) => {
                        if (date) {
                          setReturnDate(date);
                          setShowReturnDatePicker(false);
                          setTripType('Round Trip');
                        }
                      }}
                      inline
                      minDate={departureDate}
                    />
                  </div>
                )}
              </div>

              {/* Travelers & Class */}
              <div ref={travelerRef} className="p-4 hover:bg-slate-50 transition-colors cursor-pointer md:rounded-tr-xl md:rounded-br-xl md:rounded-r-xl relative" onClick={() => setShowTravelerDropdown(!showTravelerDropdown)}>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tight mb-1">Travellers & Class</p>
                  <ChevronDown size={14} className={`text-slate-400 mb-1 transition-transform ${showTravelerDropdown ? 'rotate-180' : ''}`} />
                </div>
                <h3 className="text-2xl font-black text-slate-800">{adults + children} <span className="text-lg font-bold">Travellers</span></h3>
                <p className="text-[11px] text-slate-500 mt-1">{cabinClass}</p>

                {showTravelerDropdown && (
                  <div className="absolute top-full right-[-1px] md:right-[-1px] w-[320px] z-50 bg-white border border-[#E5E7EB] rounded-b-xl rounded-tl-xl rounded-tr-xl p-5 animate-dropdown-open cursor-default" onClick={(e) => e.stopPropagation()}>

                    {/* Adults */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-sm font-bold text-slate-800">Adults</p>
                        <p className="text-[11px] text-slate-500">Aged 18+</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setAdults(Math.max(1, adults - 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all disabled:opacity-30"
                          disabled={adults <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-base font-black text-slate-800 w-4 text-center">{adults}</span>
                        <button
                          onClick={() => setAdults(adults + 1)}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-sm font-bold text-slate-800">Children</p>
                        <p className="text-[11px] text-slate-500">Aged 0 to 17</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setChildren(Math.max(0, children - 1))}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all disabled:opacity-30"
                          disabled={children <= 0}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-base font-black text-slate-800 w-4 text-center">{children}</span>
                        <button
                          onClick={() => setChildren(children + 1)}
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB] transition-all"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Class Selection */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Cabin Class</p>
                      <div className="flex flex-wrap gap-2">
                        {['Economy', 'Premium Economy', 'Business'].map((cls) => (
                          <button
                            key={cls}
                            onClick={() => setCabinClass(cls)}
                            className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all border ${cabinClass === cls
                                ? 'bg-[#2563EB] border-[#2563EB] text-white'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                              }`}
                          >
                            {cls}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setShowTravelerDropdown(false)}
                      className="w-full py-2 bg-[#2563EB] text-white rounded-lg text-xs font-bold hover:bg-[#1D4ED8] transition-colors"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>

              {/* Search Button (Absolute on desktop, bottom on mobile) */}
              <div className="absolute right-8 bottom-[-24px] md:relative md:right-0 md:bottom-0 md:hidden flex items-center justify-center p-4">
                <button className="bg-gradient-to-r from-[#D92D20] to-[#B91C1C] text-white px-12 py-3 rounded-full text-xl font-black transition-all uppercase tracking-widest">
                  Search
                </button>
              </div>
            </div>

            {/* Desktop Search Button Placement */}
            <div className="hidden md:block absolute bottom-[-22px] left-1/2 -translate-x-1/2">
              <button className="bg-gradient-to-r from-[#2563EB] to-[#1E40AF] text-white px-10 py-2.5 rounded-full text-lg font-black transition-all uppercase tracking-widest">
                Search
              </button>
            </div>



            {/* Fare Selection & Options */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mr-2">Select Fare Type:</span>
                {fareTypes.map((type) => (
                  <label key={type.id} className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${fareType === type.id ? 'bg-[#EEF2FF] border-[#2563EB]' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${fareType === type.id ? 'border-[#2563EB]' : 'border-slate-300'}`}>
                      {fareType === type.id && <div className="w-2 h-2 rounded-full bg-[#2563EB]" />}
                    </div>
                    <input type="radio" className="hidden" checked={fareType === type.id} onChange={() => setFareType(type.id)} />
                    <div>
                      <p className={`text-xs font-bold leading-none ${fareType === type.id ? 'text-[#2563EB]' : 'text-slate-600'}`}>{type.label}</p>
                      <p className="text-[9px] text-slate-400 mt-0.5">{type.sub}</p>
                    </div>
                  </label>
                ))}

                {/* Non-Stop Checkbox */}
                <label className="flex items-center gap-2 ml-4 cursor-pointer group">
                  <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center transition-all group-hover:border-[#2563EB]">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-sm opacity-0 group-hover:opacity-20" />
                  </div>
                  <span className="text-sm font-bold text-slate-600 group-hover:text-[#2563EB] transition-colors">Non-Stop Flights</span>
                </label>
              </div>

              {/* Minimal Live Search Toggle */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <span className="text-[13px] font-bold text-slate-400 group-hover:text-[#2563EB] transition-colors">Live Search</span>
                <div className="w-8 h-4 bg-slate-200 rounded-full relative transition-all group-hover:bg-[#2563EB]/20">
                  <div className="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm" />
                </div>
              </div>
            </div>




          </div>

          {/* Bottom Spacing for Overlapping Button */}
          <div className="h-12" />

        </div>
      </div>
    </section>
  );
};

export default Hero;
