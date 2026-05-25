import React, { useState } from 'react';
import { Gift, Copy, CheckCircle2 } from 'lucide-react';

const GiftSection = ({ bankDetails }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bankDetails.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!bankDetails) return null;

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-ice-navy mb-3">Wedding Gift</h2>
        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
        <p className="text-slate-500 mt-6 text-sm max-w-sm mx-auto font-sans font-light leading-relaxed">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun, jika Anda bermaksud memberikan tanda kasih, dapat melalui fitur di bawah ini.
        </p>
      </div>

      <div className="max-w-xs mx-auto bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(148,163,184,0.1)] border border-slate-100 relative overflow-hidden">
        {/* Subtle decorative element - Silver */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 opacity-70 z-0 border-b border-l border-slate-100"></div>
        
        <div className="text-center relative z-10">
          <Gift className="w-8 h-8 text-slate-300 mx-auto mb-6 stroke-1" />
          
          <p className="font-serif text-ice-navy text-lg mb-2">{bankDetails.bank}</p>
          <p className="text-2xl font-sans tracking-widest text-slate-600 mb-2 font-light">{bankDetails.accountNumber}</p>
          <p className="text-xs font-sans text-slate-400 uppercase tracking-widest mb-8">a.n {bankDetails.accountName}</p>
          
          <button
            onClick={handleCopy}
            className={`w-full flex items-center justify-center px-4 py-3 rounded-full text-sm font-sans font-medium transition-all shadow-sm ${
              copied 
                ? 'bg-slate-100 text-ice-navy border border-slate-300' 
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2 text-slate-500" />
                No. Rekening Tersalin
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2 text-slate-400" />
                Salin No. Rekening
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
