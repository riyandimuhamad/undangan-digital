import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockInvitationData } from '../lib/firebase';
import { Copy, CheckCircle2, ExternalLink } from 'lucide-react';

const LinkGenerator = () => {
  const { slug } = useParams();
  const [guestName, setGuestName] = useState('');
  const [copied, setCopied] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (mockInvitationData[slug]) {
      setData(mockInvitationData[slug]);
    }
  }, [slug]);

  if (!data) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  // The base URL of the website
  const baseUrl = window.location.origin;
  
  // Format the name for the URL (e.g. "Budi Santoso" -> "Budi+Santoso")
  const formattedName = encodeURIComponent(guestName.trim()).replace(/%20/g, '+');
  
  // The final invitation link
  const invitationLink = `${baseUrl}/invite/${slug}${formattedName ? `?to=${formattedName}` : ''}`;

  // WhatsApp Message Template
  const whatsappMessage = `Bismillahirrahmanirrahim.
Assalamu'alaikum Warahmatullahi Wabarakatuh.

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i:

*${guestName || 'Tamu Undangan'}*

Untuk menghadiri acara pernikahan kami.
Detail acara dapat dilihat pada tautan undangan digital berikut:

${invitationLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do'a restu.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.
Hormat kami,
*${data.groom} & ${data.bride}*`;

  const handleCopy = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(whatsappMessage)
        .then(() => showCopiedMessage())
        .catch(err => fallbackCopy(whatsappMessage));
    } else {
      fallbackCopy(whatsappMessage);
    }
  };

  const fallbackCopy = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showCopiedMessage();
    } catch (err) {
      console.error('Fallback copy failed', err);
      alert("Gagal menyalin teks. Silakan copy manual.");
    }
    document.body.removeChild(textArea);
  };

  const showCopiedMessage = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-2xl mx-auto space-y-8">
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-ice-navy">Link Generator</h1>
          <p className="mt-2 text-sm text-slate-500">
            Buat link undangan otomatis untuk {data.bride} & {data.groom}
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 space-y-6 border border-slate-100">
          <div>
            <label htmlFor="guestName" className="block text-sm font-medium text-slate-700 mb-2">
              Nama Tamu (Bapak/Ibu/Saudara/i)
            </label>
            <input
              type="text"
              id="guestName"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Contoh: Keluarga Bapak Budi"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-ice-navy focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Preview Teks WhatsApp:</h3>
            <div className="text-sm text-slate-700 whitespace-pre-wrap font-sans bg-white p-4 rounded-lg border border-slate-200">
              {whatsappMessage}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
            <button
              onClick={handleCopy}
              disabled={!guestName.trim()}
              className={`flex-1 flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white transition-all ${
                !guestName.trim() 
                  ? 'bg-slate-300 cursor-not-allowed' 
                  : copied 
                    ? 'bg-emerald-600 hover:bg-emerald-700' 
                    : 'bg-ice-navy hover:bg-black'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Teks Tersalin!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Teks WhatsApp
                </>
              )}
            </button>

            <a
              href={invitationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all"
            >
              <ExternalLink className="w-5 h-5 mr-2 text-slate-400" />
              Preview Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkGenerator;
