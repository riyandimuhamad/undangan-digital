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
      className="fixed inset-0 z-50 flex flex-col items-center justify-center text-ice-navy overflow-hidden bg-cover bg-center bg-no-repeat bg-white animate-fade-in"
      style={{ backgroundImage: `url(/bg-watercolor.png)` }}
    >
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
            <p className="text-sm font-serif tracking-widest mb-8 text-ice-navy uppercase">
              To The Wedding Of
            </p>
          </div>
          
          <div 
            className={`flex flex-col items-center justify-center space-y-2 mb-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <h1 className="text-6xl md:text-7xl font-script text-ice-navy">
              {data.bride}
            </h1>
            <span className="text-3xl font-serif font-light text-ice-blue-light my-2">&</span>
            <h1 className="text-6xl md:text-7xl font-script text-ice-navy">
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
              className="group relative inline-flex items-center justify-center px-8 py-2.5 text-sm font-sans font-medium text-white bg-ice-blue rounded-full transition-all hover:bg-ice-navy hover:scale-105 shadow-md shadow-ice-blue/30"
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
