import React, { useState, useEffect } from 'react';
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

// Simple SVG Flowers for decoration
const FlowerTopLeft = () => (
  <svg className="w-32 h-32 text-ice-blue opacity-50" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 0C50 25 75 50 100 50C75 50 50 75 50 100C50 75 25 50 0 50C25 50 50 25 50 0Z" />
    <circle cx="50" cy="50" r="10" fill="white" />
  </svg>
);

const FlowerBottomRight = () => (
  <svg className="w-40 h-40 text-ice-blue-light opacity-40" viewBox="0 0 100 100" fill="currentColor">
    <path d="M50 0C50 25 75 50 100 50C75 50 50 75 50 100C50 75 25 50 0 50C25 50 50 25 50 0Z" />
    <circle cx="50" cy="50" r="15" fill="white" opacity="0.5" />
  </svg>
);

const InvitationTemplate = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get('to') || 'Nama Tamu';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

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
      <div className="flex h-screen w-screen items-center justify-center bg-white">
        <h1 className="text-xl font-serif text-ice-navy">Undangan tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white font-sans text-ice-navy">
      {/* Fixed Watercolor Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: `url(/bg-watercolor.png)`, opacity: 0.8 }}
      ></div>

      {!isOpened ? (
        <CoverPage data={data} guestName={guestName} onOpen={() => setIsOpened(true)} />
      ) : (
        <div className="relative z-10 animate-fade-in pb-20">
          
          {/* Animated Flowers */}
          <div className="fixed top-0 left-0 z-20 pointer-events-none animate-flower-tl -translate-x-4 -translate-y-4">
            <FlowerTopLeft />
          </div>
          <div className="fixed bottom-0 right-0 z-20 pointer-events-none animate-flower-br translate-x-4 translate-y-4">
            <FlowerBottomRight />
          </div>

          {data.musicUrl && <AudioPlayer url={data.musicUrl} />}
          
          <main className="max-w-md mx-auto min-h-screen bg-white/70 backdrop-blur-sm shadow-2xl shadow-ice-navy/5 pb-24">
            {/* Hero Section inside Invitation */}
            <section id="opening" className="relative h-[60vh] flex flex-col items-center justify-center text-center p-8 overflow-hidden rounded-b-[2rem]">
              <div className="z-10 animate-slide-up mt-10">
                <div className="flex flex-col items-center justify-center space-y-1 mb-8">
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy">
                    {data.groom}
                  </h1>
                  <span className="text-3xl font-serif font-light text-ice-blue-light my-2">&</span>
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy">
                    {data.bride}
                  </h1>
                </div>
                <p className="font-serif italic text-ice-navy text-lg mb-4">Assalamu'alaikum Wr Wb</p>
                <p className="font-sans text-sm font-light text-ice-navy leading-relaxed px-4 max-w-sm mx-auto">
                  Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami
                </p>
              </div>
            </section>

            <CoupleSection data={data} />
            <div id="quotes"><QuotesSection /></div>
            <div id="acara"><EventDetails data={data} /></div>
            <div id="galeri"><Gallery images={data.gallery} /></div>
            <div id="gift"><GiftSection bankDetails={data.bankDetails} /></div>
            <div id="rsvp"><RSVPForm slug={slug} guestName={guestName} /></div>
            
            <footer className="py-16 px-8 text-center text-ice-navy bg-transparent relative z-10">
              <p className="font-sans text-sm font-light leading-relaxed mb-8">
                Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada kedua mempelai.
              </p>
              <p className="font-serif italic text-sm mb-4">
                Hormat Kami Yang Mengundang
              </p>
              <h2 className="text-5xl md:text-6xl font-script text-ice-navy mt-4">
                {data.groom} <span className="font-sans text-3xl font-light mx-2">&</span> {data.bride}
              </h2>
            </footer>
          </main>
          
          <BottomNav />
        </div>
      )}
    </div>
  );
};

export default InvitationTemplate;
