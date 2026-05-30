import React, { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { mockInvitationData } from '../lib/firebase';
import CoverPage from '../components/CoverPage';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import RSVPForm from '../components/RSVPForm';
import GiftSection from '../components/GiftSection';
import AudioPlayer from '../components/AudioPlayer';
import BottomNav from '../components/BottomNav';
import QuotesSection from '../components/QuotesSection';
import CoupleSection from '../components/CoupleSection';

// Elegant Center Divider Ornament
const DividerOrnament = ({ className }) => (
  <svg className={className} viewBox="0 0 200 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,15 L80,15 M120,15 L180,15" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
    <path d="M100,5 C95,10 90,15 85,15 C90,15 95,20 100,25 C105,20 110,15 115,15 C110,15 105,10 100,5 Z" opacity="0.8"/>
    <circle cx="100" cy="15" r="2" fill="#fff"/>
    <circle cx="60" cy="15" r="1.5" opacity="0.4"/>
    <circle cx="140" cy="15" r="1.5" opacity="0.4"/>
  </svg>
);

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

const InvitationTemplate = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Nama Tamu';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current.currentTime = 67; // Mulai dari menit ke 1:07
      audioRef.current.volume = 0; // Mulai dari 0 untuk efek fade-in
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            
            // Efek Fade-in perlahan selama ~1 detik
            let currentVol = 0;
            const targetVol = 0.5;
            const fadeInterval = setInterval(() => {
              if (currentVol < targetVol) {
                currentVol += 0.02; // Naikkan volume sedikit demi sedikit
                if (currentVol > targetVol) currentVol = targetVol;
                if (audioRef.current) audioRef.current.volume = currentVol;
              } else {
                clearInterval(fadeInterval);
              }
            }, 50); // Eksekusi setiap 50ms
          })
          .catch((err) => {
            console.error("Autoplay prevented:", err);
            setIsPlaying(false);
          });
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      // 3 menit 35 detik = 215 detik
      if (audioRef.current.currentTime >= 215) {
        audioRef.current.currentTime = 67; // Loop kembali ke menit 1:07
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(() => {
        if (mockInvitationData[slug]) {
          setData(mockInvitationData[slug]);
        } else {
          setData(null);
        }
        setLoading(false);
      }, 500);
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-ice-blue"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex h-[100dvh] w-screen items-center justify-center bg-white">
        <h1 className="text-xl font-serif text-ice-navy">Undangan tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-[100dvh] bg-[#f9f8f6] font-sans text-ice-navy">
      {/* Textured Watercolor Background (Tinted to match theme) */}
      <div 
        className="fixed top-0 left-0 w-full h-[100dvh] bg-cover bg-center bg-no-repeat pointer-events-none z-0 opacity-30 mix-blend-multiply grayscale sepia-[.3]"
        style={{ backgroundImage: `url(/bg-watercolor.png)` }}
      ></div>

      {data.musicUrl && (
        <audio 
          ref={audioRef} 
          src={data.musicUrl} 
          loop 
          preload="auto" 
          onTimeUpdate={handleTimeUpdate}
        />
      )}

      {!isOpened ? (
        <CoverPage data={data} guestName={guestName} onOpen={handleOpenInvitation} />
      ) : (
        <div className="relative z-10 animate-fade-in pb-20">
          
          {data.musicUrl && (
            <AudioPlayer audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
          )}
          
          <main className="max-w-md mx-auto min-h-[100dvh] bg-gradient-to-br from-[#fdfbf9] via-[#f9f8f6] to-[#eae5df] shadow-2xl shadow-black/30 relative overflow-hidden">
            {/* Top Floral Arch */}
            <div className="w-full flex justify-center pt-10">
              <FloralArch className="w-64 h-24 text-ice-navy opacity-70" />
            </div>
            
            {/* Hero Section inside Invitation */}
            <section id="opening" className="relative min-h-[60dvh] flex flex-col items-center justify-center text-center pt-8 px-8 pb-24 overflow-hidden">
              <div className="z-10 animate-slide-up mt-10 w-full flex flex-col items-center">
                <DividerOrnament className="w-48 h-12 text-ice-navy mb-8 opacity-60" />
                <div className="flex flex-col items-center justify-center space-y-1 mb-8">
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
                    {data.groom}
                  </h1>
                  <span className="text-4xl font-serif font-light text-ice-blue my-4">&</span>
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
                    {data.bride}
                  </h1>
                </div>
                <DividerOrnament className="w-48 h-12 text-ice-navy mt-4 mb-8 opacity-60" />
                <p className="font-serif italic text-ice-navy text-lg mb-4">Assalamu'alaikum Wr Wb</p>
                <p className="font-sans text-sm font-light text-ice-navy leading-relaxed px-4 max-w-sm mx-auto">
                  Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami
                </p>
              </div>
            </section>

            <CoupleSection data={data} />
            <div id="quotes"><QuotesSection /></div>
            <div id="acara"><EventDetails data={data} /></div>
            <div id="gift"><GiftSection bankDetails={data.bankDetails} /></div>
            <div id="rsvp"><RSVPForm slug={slug} guestName={guestName} /></div>
            
            <footer className="py-24 px-8 text-center bg-[#2c241b] text-[#f9f8f6] relative rounded-t-[3rem] -mt-12 shadow-[0_-15px_40px_rgba(0,0,0,0.2)] z-[70]">
              <p className="font-sans text-sm font-light leading-relaxed mb-8 text-white/80">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.
              </p>
              <p className="font-serif italic text-sm mb-4 text-white/60">
                Hormat Kami Yang Mengundang
              </p>
              <h2 className="text-5xl md:text-6xl font-script text-[#f9f8f6] mt-4">
                {data.groom} <span className="font-sans text-3xl font-light mx-2 text-[#d4c3b3]">&</span> {data.bride}
              </h2>
            </footer>

            {/* Bottom Floral Arch */}
            <div className="w-full flex justify-center pb-10 bg-ice-navy">
              <FloralArch className="w-64 h-24 text-[#f9f8f6] opacity-40 rotate-180" />
            </div>
          </main>
          
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default InvitationTemplate;
