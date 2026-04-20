import React, { useEffect, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Search from './components/Search';
import Explore from './components/Explore';
import About from './components/About';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import MobileBlocker from './components/MobileBlocker';

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    return !sessionStorage.getItem('hasLoaded');
  });

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoaded', 'true');
        // Reset scroll again after loading screen is gone
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Even if skipping loading, ensure we are at the top
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [isLoading]);

  const [isSearchStarted, setIsSearchStarted] = useState(false);

  return (
    <main className="min-h-screen">
      {isMobile ? (
        <MobileBlocker />
      ) : (
        <>
          {isLoading && <LoadingScreen />}
          <AnnouncementBar />
          <Navbar isInsideHero={false} />
          <Hero isSearchStarted={isSearchStarted} setIsSearchStarted={setIsSearchStarted} />
          <Search isSearchStarted={isSearchStarted} />
          <Explore />
          <Pricing />
          <About />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
