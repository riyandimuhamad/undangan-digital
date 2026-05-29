import React from 'react';
import CountdownTimer from './CountdownTimer';
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

  return (
    <section className="py-16 px-6 relative bg-transparent">
      <div className="text-center mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-3xl font-serif text-ice-navy mb-3">Event Details</h2>
        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
      </div>
      
      <div className="bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(148,163,184,0.1)] text-center relative overflow-hidden border border-slate-100">
        
        <h3 className="text-xl font-serif text-ice-navy mb-4 font-bold">AKAD NIKAH :</h3>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="font-sans text-sm font-medium text-slate-600">Kamis, 18 Juni 2026</span>
          <span className="font-sans text-sm font-medium text-slate-600">Pukul : 09.00 WIB s/d Selesai</span>
          <span className="font-sans text-sm font-medium text-slate-600">Tempat : Kediaman Mempelai Wanita</span>
        </div>

        <h3 className="text-xl font-serif text-ice-navy mb-4 font-bold">RESEPSI NIKAH :</h3>
        <div className="flex flex-col items-center gap-1 mb-8">
          <span className="font-sans text-sm font-medium text-slate-600">Kamis, 18 Juni 2026</span>
          <span className="font-sans text-sm font-medium text-slate-600">Pukul : 09.00 WIB s/d Selesai</span>
        </div>

        <div className="mb-8 pt-6 border-t border-slate-100">
          <MapPin className="w-5 h-5 mb-3 text-slate-400 stroke-1 mx-auto" />
          <h4 className="font-sans font-medium text-ice-navy mb-2 uppercase font-bold">
            Tempat :<br/>{data.location.name}
          </h4>
          <p className="text-sm font-sans text-slate-600 font-light leading-relaxed">
            {data.location.address}
          </p>
        </div>

        <div className="w-full h-64 rounded-[16px] overflow-hidden mb-8 shadow-inner border border-slate-100">
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
          className="inline-flex items-center px-8 py-3 bg-ice-blue text-white rounded-full text-sm font-sans font-medium hover:bg-ice-navy transition-colors shadow-lg shadow-slate-400/20 mb-8"
        >
          Navigate Location
        </a>

        <div className="pt-6 border-t border-slate-100 text-center mb-6">
          <p className="text-sm font-serif italic text-slate-600 leading-relaxed max-w-sm mx-auto">
            "Semoga Allah memberkahimu dan memberkahi atasmu serta mengumpulkan kamu berdua dalam kebaikan"
          </p>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-center">
          <h3 className="font-sans font-bold text-ice-navy mb-4 underline">Turut Mengundang :</h3>
          <ul className="text-sm font-sans text-slate-600 leading-relaxed space-y-1">
            <li>Kel. Besar H. Saepulyani</li>
            <li>Kel. Besar Ponpes Najaahaan (Garut)</li>
            <li>Kel. Besar H. Empun</li>
            <li>Bpk. Dadan Supardan</li>
            <li>Bpk. Anton Setiawan</li>
            <li>Bpk. M Rasyid Ridho</li>
            <li>Bpk. Salim Sulaiman</li>
          </ul>
        </div>

      </div>
      
      <div className="mt-12 bg-ice-navy py-10 px-4 rounded-xl text-white text-center shadow-2xl">
        <h2 className="text-xs font-sans tracking-[0.3em] mb-4">SAVE THE DATE</h2>
        <div className="text-5xl font-serif mb-6">18 . 06 . 2026</div>
        <CountdownTimer targetDate={data.date} />
      </div>
    </section>
  );
};

export default EventDetails;
