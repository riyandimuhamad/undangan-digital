import React from 'react';
import ScrollReveal from './ScrollReveal';

const FlowerDecor = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 0C50 25 75 50 100 50C75 50 50 75 50 100C50 75 25 50 0 50C25 50 50 25 50 0Z" />
    <circle cx="50" cy="50" r="10" fill="white" opacity="0.6"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const CoupleSection = ({ data }) => {
  return (
    <section id="mempelai" className="py-24 px-6 relative text-center bg-[#2c241b] text-[#f9f8f6] rounded-t-[3rem] -mt-12 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] z-20">
      
      {/* Bride Section */}
      <ScrollReveal className="flex flex-col items-center mb-16">
        
        <p className="font-serif text-[#d4c3b3] text-xs mb-1 italic">Putri dari</p>
        <p className="font-sans text-xs font-light text-white/80 leading-relaxed mb-6">
          {data.brideParents}
        </p>
        
        <h2 className="text-5xl md:text-6xl font-script text-[#f9f8f6] mt-2">
          {data.brideFullName}
        </h2>
      </ScrollReveal>

      {/* Decorative Ampersand */}
      <ScrollReveal delay={200} className="flex justify-center mb-20">
        <span className="text-7xl font-script text-[#d4c3b3]">&</span>
      </ScrollReveal>

      {/* Groom Section */}
      <ScrollReveal delay={400} className="flex flex-col items-center mb-8">
        
        <p className="font-serif text-[#d4c3b3] text-xs mb-1 italic">Putra dari</p>
        <p className="font-sans text-xs font-light text-white/80 leading-relaxed mb-6">
          {data.groomParents}
        </p>

        <h2 className="text-5xl md:text-6xl font-script text-[#f9f8f6] mt-2">
          {data.groomFullName}
        </h2>
      </ScrollReveal>

    </section>
  );
};

export default CoupleSection;
