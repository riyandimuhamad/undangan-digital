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

// Minimalist line-art leaf for decoration (replacing abstract watercolor flowers)
const LineArtLeaf = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22c4-4 8-10 8-14a4 4 0 0 0-8 0c0-4-4-4-8 0-4 4 0 10 8 14z"/>
    <path d="M12 22V8"/>
    <path d="M12 14c-1.5-1.5-3-2-5-2"/>
    <path d="M12 18c2-1 4.5-1.5 6-1.5"/>
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

      {!isOpened ? (
        <CoverPage data={data} guestName={guestName} onOpen={() => setIsOpened(true)} />
      ) : (
        <div className="relative z-10 animate-fade-in pb-20">
          
          {/* Animated Minimalist Leaves */}
          <div className="fixed top-0 left-0 z-20 pointer-events-none animate-flower-tl -translate-x-4 -translate-y-4">
            <LineArtLeaf className="w-40 h-40 text-ice-navy/20 rotate-[135deg]" />
          </div>
          <div className="fixed bottom-0 right-0 z-20 pointer-events-none animate-flower-br translate-x-4 translate-y-4">
            <LineArtLeaf className="w-48 h-48 text-ice-navy/10 -rotate-[45deg]" />
          </div>

          {data.musicUrl && <AudioPlayer url={data.musicUrl} />}
          
          <main className="max-w-md mx-auto min-h-[100dvh] bg-white/70 backdrop-blur-sm shadow-2xl shadow-ice-navy/5 pb-24">
            {/* Hero Section inside Invitation */}
            <section id="opening" className="relative min-h-[60dvh] flex flex-col items-center justify-center text-center p-8 overflow-hidden rounded-b-[2rem]">
              <div className="z-10 animate-slide-up mt-10">
                <div className="flex flex-col items-center justify-center space-y-1 mb-8">
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
                    {data.groom}
                  </h1>
                  <span className="text-4xl font-serif font-light text-ice-blue my-4">&</span>
                  <h1 className="text-6xl md:text-7xl font-script text-ice-navy tracking-wider">
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
