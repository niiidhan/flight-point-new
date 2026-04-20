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

  const [isSearchStarted, setIsSearchStarted] = useState(false);

  return (
    <main className="min-h-screen">
      {isLoading && <LoadingScreen />}

      <AnnouncementBar />
      <Navbar isInsideHero={false} />
      <Hero isSearchStarted={isSearchStarted} setIsSearchStarted={setIsSearchStarted} />
      <Explore isSearchStarted={isSearchStarted} />
      <About />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;
