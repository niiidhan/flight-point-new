import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[calc(100vh-72px)] bg-white flex items-center justify-center overflow-hidden border-b border-slate-100"
    >
      {/* Grouped identity block, perfectly centered in the section */}
      <div className="flex flex-col items-center justify-center text-center">
        {/* Logo Section */}
        <div className="mb-4">
          <img
            src="/images/LOGO.svg"
            alt="Flightpoints Logo"
            className="h-[50px] w-auto brightness-0"
          />
        </div>

        {/* Headline Section */}
        <h1 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight leading-[1.2]">
          Why we build <br /> Flightpoints.
        </h1>
      </div>
    </section>
  );
};

export default About;
