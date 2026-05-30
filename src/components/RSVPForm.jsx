import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const RSVPForm = ({ slug, guestName }) => {
  const [formData, setFormData] = useState({
    name: guestName !== 'Tamu Undangan' ? guestName : '',
    attendance: 'hadir',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // TODO: Ganti URL ini dengan Web App URL dari Google Apps Script Anda
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwelHtBaxb0OoHnhwZ_H6D6iPem60Pn1F8LPhBRvXk-0DGX44lyGXPSPFgt5kXo4g-4/exec';

    try {
      const formDataObj = new FormData();
      formDataObj.append('Nama', formData.name);
      formDataObj.append('Kehadiran', formData.attendance);
      formDataObj.append('Pesan', formData.message);
      formDataObj.append('Tanggal', new Date().toLocaleString('id-ID'));

      // Jika URL belum diganti, jalankan simulasi (mock) agar web tidak error
      if (GOOGLE_SCRIPT_URL.includes('AKfycb...')) {
        setTimeout(() => {
          setStatus({ loading: false, success: true, error: null });
          setFormData({ ...formData, message: '' });
        }, 1500);
        return;
      }

      // Kirim data ke Google Sheets
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Penting untuk mem-bypass CORS policy dari browser
        body: formDataObj
      });

      setStatus({ loading: false, success: true, error: null });
      // Jangan set message ke string kosong agar state tetap tersimpan di background
      
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false, error: 'Gagal mengirim RSVP. Silakan periksa koneksi Anda.' });
    }
  };

  return (
    <section className="py-24 px-6 relative bg-white rounded-t-[3rem] -mt-12 shadow-[0_-15px_40px_rgba(0,0,0,0.05)] z-[60]">
      <ScrollReveal className="text-center mb-10">
        <h2 className="text-3xl font-serif text-ice-navy mb-3">RSVP & Wishes</h2>
        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
        <p className="text-slate-500 mt-4 text-sm font-sans font-light">Mohon konfirmasi kehadiran Anda</p>
      </ScrollReveal>

      <ScrollReveal delay={200} className="max-w-md mx-auto bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(148,163,184,0.1)] border border-slate-100 mb-12 relative overflow-hidden">
        {status.success ? (
          <div className="py-12 text-center animate-fade-in relative z-10">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-serif text-ice-navy mb-2">Terima Kasih!</h3>
            <p className="text-slate-500 text-sm font-sans font-light leading-relaxed">
              Pesan dan konfirmasi kehadiran Anda telah berhasil dikirim.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* Floating Label Input for Name */}
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-ice-navy peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-ice-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nama Lengkap
            </label>
          </div>

          {/* Floating Label Select for Attendance */}
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="attendance"
              id="attendance"
              value={formData.attendance}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-ice-navy peer"
            >
              <option value="hadir">Ya, Saya akan hadir</option>
              <option value="tidak_hadir">Maaf, Saya tidak bisa hadir</option>
              <option value="ragu">Masih ragu-ragu</option>
            </select>
            <label
              htmlFor="attendance"
              className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-ice-navy"
            >
              Konfirmasi Kehadiran
            </label>
          </div>

          {/* Floating Label Textarea for Message */}
          <div className="relative z-0 w-full mb-6 group">
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="block py-2.5 px-0 w-full text-sm text-slate-900 bg-transparent border-0 border-b border-slate-300 appearance-none focus:outline-none focus:ring-0 focus:border-ice-navy peer resize-none"
              placeholder=" "
              required
            ></textarea>
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-ice-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Pesan & Doa
            </label>
          </div>

          {status.error && <p className="text-red-500 text-sm text-center">{status.error}</p>}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full flex items-center justify-center px-6 py-3 bg-ice-blue text-white rounded-full text-sm font-sans font-medium hover:bg-ice-navy transition-colors shadow-lg shadow-slate-400/20 mt-4 disabled:opacity-70"
          >
            {status.loading ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </form>
        )}
      </ScrollReveal>
    </section>
  );
};

export default RSVPForm;
