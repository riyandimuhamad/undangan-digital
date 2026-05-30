import React from 'react';
import CountdownTimer from './CountdownTimer';
import ScrollReveal from './ScrollReveal';
import { Calendar, MapPin } from 'lucide-react';

const EventDetails = ({ data }) => {
  const eventDate = new Date(data.date);
  
  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('id-ID', options) + ' WIB';
  };

  if (!data || !data.location) return null;

  return (
    <section className="py-24 px-6 relative bg-[#2c241b] text-[#f9f8f6] rounded-t-[3rem] -mt-12 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] z-40">
      <ScrollReveal className="text-center mb-12">
        <h2 className="text-3xl font-serif text-[#f9f8f6] mb-3">Event Details</h2>
        <div className="w-12 h-[1px] bg-[#d4c3b3] mx-auto"></div>
      </ScrollReveal>
      
      <ScrollReveal delay={200} className="bg-[#352c22] p-8 rounded-[16px] shadow-2xl text-center relative overflow-hidden border border-white/5">
        
        <h3 className="text-xl font-serif text-[#d4c3b3] mb-4 font-bold">AKAD NIKAH :</h3>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="font-sans text-sm font-medium text-white/80">Kamis, 18 Juni 2026</span>
          <span className="font-sans text-sm font-medium text-white/80">Pukul : 09.00 WIB s/d Selesai</span>
        </div>

        <h3 className="text-xl font-serif text-[#d4c3b3] mb-4 font-bold">RESEPSI NIKAH :</h3>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="font-sans text-sm font-medium text-white/80">Kamis, 18 Juni 2026</span>
          <span className="font-sans text-sm font-medium text-white/80">Pukul : 09.00 WIB s/d Selesai</span>
        </div>

        <div className="mb-8 pt-6 border-t border-white/10">
          <MapPin className="w-5 h-5 mb-3 text-[#d4c3b3] stroke-1 mx-auto" />
          <h4 className="font-sans font-medium text-[#f9f8f6] mb-2 uppercase font-bold">
            Tempat :<br/>{data.location.name}
          </h4>
          <p className="text-sm font-sans text-white/70 font-light leading-relaxed">
            {data.location.address}
          </p>
        </div>

        <div className="w-full h-64 rounded-[16px] overflow-hidden mb-8 shadow-inner border border-white/5">
          <iframe
            src={data.location.mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
        
        <a 
          href={data.location.linkUrl || data.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-[#d4c3b3] text-[#2c241b] rounded-full text-sm font-sans font-medium hover:bg-white transition-colors shadow-lg mb-8"
        >
          Navigate Location
        </a>

        <div className="pt-6 border-t border-white/10 text-center mb-6">
          <p className="text-sm font-serif italic text-white/70 leading-relaxed max-w-sm mx-auto">
            "Semoga Allah memberkahimu dan memberkahi atasmu serta mengumpulkan kamu berdua dalam kebaikan"
          </p>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <h3 className="font-sans font-bold text-[#f9f8f6] mb-4 underline">Turut Mengundang :</h3>
          <ul className="text-sm font-sans text-white/80 leading-relaxed space-y-1">
            <li>Kel. Besar H. Saepulyani</li>
            <li>Kel. Besar Ponpes Najaahaan (Garut)</li>
            <li>Kel. Besar H. Empun</li>
            <li>Bpk. Dadan Supardan</li>
            <li>Bpk. Anton Setiawan</li>
            <li>Bpk. M Rasyid Ridho</li>
            <li>Bpk. Salim Sulaiman</li>
          </ul>
        </div>
      </ScrollReveal>
      
      <ScrollReveal delay={400} className="mt-16 bg-[#2c241b] py-14 px-6 rounded-[2rem] text-white text-center shadow-2xl relative overflow-hidden border border-white/5">
        {/* Subtle inner border */}
        <div className="absolute inset-4 border border-[#d4c3b3]/20 rounded-[1.5rem] pointer-events-none"></div>
        <h2 className="text-xs font-sans tracking-[0.4em] mb-6 text-[#d4c3b3] uppercase">Save The Date</h2>
        <div className="text-5xl md:text-6xl font-serif mb-8 tracking-widest text-[#f9f8f6]">18 . 06 . 2026</div>
        <CountdownTimer targetDate={data.date} />
      </ScrollReveal>
    </section>
  );
};

export default EventDetails;
