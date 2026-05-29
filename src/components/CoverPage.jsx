import React, { useEffect, useState } from 'react';

const CoverPage = ({ data, guestName, onOpen }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth mounting animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[100dvh] z-50 flex flex-col items-center justify-center text-ice-navy overflow-hidden bg-[#f9f8f6] animate-fade-in touch-none"
    >
      {/* Textured Watercolor Background (Tinted) - Fixed to viewport with bleed for overscroll */}
      <div
        className="absolute -inset-10 bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-70 mix-blend-multiply grayscale sepia-[.3]"
        style={{ backgroundImage: `url(/bg-watercolor.png)` }}
      ></div>
      {/* Decorative Ornaments from the theme */}
      <div className="absolute top-0 left-0 w-64 h-64 border-t-[1px] border-l-[1px] border-ice-navy/20 rounded-tl-3xl -translate-x-4 -translate-y-4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 border-b-[1px] border-r-[1px] border-ice-navy/20 rounded-br-3xl translate-x-4 translate-y-4 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-md mx-auto h-full justify-between py-12 md:py-16">

        {/* Top Section */}
        <div className="flex flex-col items-center mt-8">
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
            <p className="text-sm font-serif tracking-widest text-ice-navy uppercase">
              {data.displayTime}
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
