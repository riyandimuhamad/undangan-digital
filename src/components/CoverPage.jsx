import React, { useEffect, useState } from 'react';

const FloralArch = ({ className }) => (
  <svg className={className} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Main central flower (lotus/batik style) */}
    <path d="M150,70 Q 120,50 150,20 Q 180,50 150,70 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M150,60 Q 135,45 150,30 Q 165,45 150,60 Z" fill="currentColor" fillOpacity="0.3"/>
    <path d="M150,70 Q 110,60 120,30 Q 135,50 150,70 Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M150,70 Q 190,60 180,30 Q 165,50 150,70 Z" fill="currentColor" fillOpacity="0.1"/>
    {/* Left vine */}
    <path d="M130,50 C 90,30 50,50 10,20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M90,40 Q 70,20 60,35 Q 75,45 90,40 Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M60,35 Q 40,15 30,30 Q 45,40 60,35 Z" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="50" cy="50" r="1.5" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="80" cy="20" r="1" fill="currentColor" fillOpacity="0.4"/>
    {/* Right vine */}
    <path d="M170,50 C 210,30 250,50 290,20" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5"/>
    <path d="M210,40 Q 230,20 240,35 Q 225,45 210,40 Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M240,35 Q 260,15 270,30 Q 255,40 240,35 Z" fill="currentColor" fillOpacity="0.2"/>
    <circle cx="250" cy="50" r="1.5" fill="currentColor" fillOpacity="0.4"/>
    <circle cx="220" cy="20" r="1" fill="currentColor" fillOpacity="0.4"/>
  </svg>
);

const CoverPage = ({ data, guestName, onOpen }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth mounting animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[100dvh] z-50 flex flex-col items-center justify-center text-ice-navy overflow-y-auto bg-[#f9f8f6] animate-fade-in"
    >
      {/* Textured Watercolor Background (Tinted) - Fixed to viewport with bleed for overscroll */}
      <div
        className="absolute -inset-10 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-70 mix-blend-multiply grayscale sepia-[.3]"
        style={{ backgroundImage: `url(/bg-watercolor.png)` }}
      ></div>
      {/* Decorative Ornaments from the theme */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-md mx-auto h-full justify-between py-12 md:py-16">

        {/* Top Section */}
        <div className="flex flex-col items-center mt-2">
          <div 
            className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <FloralArch className="w-64 h-24 text-ice-navy mb-4 opacity-70" />
          </div>
          <div
            className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <p className="text-sm font-serif tracking-widest mb-1 text-ice-navy uppercase">
              You Are Invited
            </p>
            <p className="text-sm font-serif tracking-widest mb-31 md:mb-35 text-ice-navy uppercase">
              To The Wedding Of
            </p>
          </div>

          <div
            className={`flex flex-col items-center justify-center space-y-2 mb-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
              {data.bride}
            </h1>
            <span className="text-4xl font-serif font-light text-ice-blue my-4">&</span>
            <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
              {data.groom}
            </h1>
          </div>

          <div
            className={`flex flex-col items-center space-y-1 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <p className="text-sm font-serif tracking-widest text-ice-navy uppercase">
              {data.displayDate}
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col items-center mb-8">
          <div
            className={`mb-8 text-center space-y-1 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '1200ms' }}
          >
            <p className="text-sm font-sans font-light text-ice-navy">Kepada Yth.</p>
            <p className="text-sm font-sans font-light text-ice-navy">Bapak/Ibu/Saudara/i</p>
            <p className="text-xl font-serif text-ice-navy font-medium pt-1 pb-1">
              {guestName}
            </p>
            <p className="text-sm font-sans font-light text-ice-navy">di Tempat</p>
          </div>

          <div
            className={`transition-all duration-1000 transform ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-sans font-medium text-white bg-ice-navy rounded-full transition-all hover:bg-black hover:scale-105 shadow-xl shadow-ice-navy/20 uppercase tracking-widest"
            >
              Open Invitation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoverPage;
