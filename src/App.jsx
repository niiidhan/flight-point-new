import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(() => {
    // Check if the site has already loaded in this session
    return !sessionStorage.getItem('hasLoaded');
  });

  useEffect(() => {
    // Force scroll to top on reload
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    // If it's the first time loading, set the flag after the timer
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main className="min-h-screen">
      {isLoading && <LoadingScreen />}
      
      <AnnouncementBar isDarkMode={isDarkMode} />
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <Explore isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Pricing isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </main>
  );
}

export default App;
