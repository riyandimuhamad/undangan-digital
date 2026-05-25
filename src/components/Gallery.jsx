import React from 'react';

const Gallery = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-ice-navy mb-3">Our Moments</h2>
        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
        <p className="text-slate-500 mt-6 text-sm max-w-sm mx-auto font-sans font-light">
          Setiap momen adalah cerita, dan inilah awal cerita kebersamaan kami.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`overflow-hidden rounded-[16px] shadow-sm ${
              idx % 3 === 0 ? 'col-span-2 aspect-[16/10]' : 'col-span-1 aspect-[4/5]'
            }`}
          >
            <img 
              src={img} 
              alt={`Gallery ${idx + 1}`} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
