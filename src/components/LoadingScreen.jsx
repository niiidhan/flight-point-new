import React from 'react';

const LoadingScreen = () => {
  return (
    <div
      className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <div className="flex items-center gap-5">
        <img
          src="/images/LOGO.svg"
          alt="Logo Icon"
          className="h-6 md:h-8 w-auto invert"
        />
        <img
          src="/images/logoletter.svg"
          alt="ai.work"
          className="h-8 md:h-10 w-auto invert"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
