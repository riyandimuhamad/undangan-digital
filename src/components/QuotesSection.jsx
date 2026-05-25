import React from 'react';

const QuotesSection = () => {
  return (
    <section className="py-16 px-6 bg-transparent relative">
      <div className="bg-white/80 backdrop-blur-sm p-10 rounded-[16px] shadow-[0_8px_30px_rgb(148,163,184,0.1)] text-center border border-white">
        <h2 className="text-2xl font-script text-ice-navy mb-8 text-4xl">Maha Suci Allah</h2>
        
        <p className="font-serif text-ice-navy/80 italic leading-relaxed text-sm mb-6 px-2">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir."
        </p>
        
        <div className="w-12 h-[1px] bg-ice-blue mx-auto mb-4"></div>
        
        <p className="font-sans font-medium text-ice-navy tracking-widest text-xs uppercase">
          QS. Ar-Rum: 21
        </p>
      </div>
    </section>
  );
};

export default QuotesSection;
