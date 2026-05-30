import React, { useState, useEffect } from 'react';
import { Home, Calendar, Image as ImageIcon, Gift, Send, BookText, Heart } from 'lucide-react';

const BottomNav = () => {
  const [activeSection, setActiveSection] = useState('opening');

  const navItems = [
    { id: 'opening', label: 'Opening', icon: Home },
    { id: 'mempelai', label: 'Mempelai', icon: Heart },
    { id: 'quotes', label: 'Quotes', icon: BookText },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'gift', label: 'Gift', icon: Gift },
    { id: 'rsvp', label: 'RSVP', icon: Send },
  ];

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] flex justify-center pb-4 px-4 pointer-events-none">
      <div className="bg-ice-blue/90 backdrop-blur-md rounded-2xl shadow-lg pointer-events-auto flex items-center justify-between w-full max-w-md p-2 overflow-x-auto gap-2 scrollbar-hide">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center min-w-[64px] h-14 rounded-xl transition-all duration-300 flex-shrink-0 ${
                isActive ? 'bg-ice-navy/20 text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? 'stroke-2' : 'stroke-[1.5]'}`} />
              <span className="text-[10px] font-sans font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNav;
