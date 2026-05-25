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
        <h3 className="text-xl font-serif text-ice-navy mb-8">Akad Nikah & Resepsi</h3>
        
        <div className="flex flex-col items-center gap-5 mb-8">
          <div className="flex flex-col items-center text-slate-600">
            <Calendar className="w-5 h-5 mb-2 text-slate-400 stroke-1" />
            <span className="font-sans text-sm font-medium">{formatDate(eventDate)}</span>
          </div>
          <div className="w-4 h-[1px] bg-slate-200"></div>
          <div className="flex flex-col items-center text-slate-600">
            <span className="text-lg font-serif mb-1 text-ice-navy">{formatTime(eventDate)}</span>
            <span className="font-sans text-xs text-slate-400 uppercase tracking-widest">Hingga Selesai</span>
          </div>
        </div>

        <div className="mb-8 pt-6 border-t border-slate-100">
          <MapPin className="w-5 h-5 mb-3 text-slate-400 stroke-1 mx-auto" />
          <h4 className="font-sans font-medium text-ice-navy mb-2">
            {data.location.name}
          </h4>
          <p className="text-sm font-sans text-slate-500 font-light leading-relaxed">
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
          href={data.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-ice-blue text-white rounded-full text-sm font-sans font-medium hover:bg-ice-navy transition-colors shadow-lg shadow-slate-400/20"
        >
          Navigate Location
        </a>
      </div>
      
      <div className="mt-12">
        <CountdownTimer targetDate={data.date} />
      </div>
    </section>
  );
};

export default EventDetails;
