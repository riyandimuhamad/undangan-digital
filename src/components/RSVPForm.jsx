import React, { useState } from 'react';

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

    try {
      setTimeout(() => {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ ...formData, message: '' }); 
      }, 1000);
      
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'Gagal mengirim RSVP. Silakan coba lagi.' });
    }
  };

  return (
    <section className="py-16 px-6 bg-transparent">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-ice-navy mb-3">RSVP & Wishes</h2>
        <div className="w-12 h-[1px] bg-slate-300 mx-auto"></div>
      </div>

      <div className="bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(148,163,184,0.1)] border border-slate-100 relative">
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

          {status.error && <p className="text-red-500 text-sm">{status.error}</p>}
          {status.success && <p className="text-slate-600 text-sm p-4 bg-slate-50 rounded-[16px] text-center font-serif italic border border-slate-100">Terima kasih atas doa restu Anda.</p>}

          <button
            type="submit"
            disabled={status.loading}
            className="w-full flex items-center justify-center px-6 py-3 bg-ice-blue text-white rounded-full text-sm font-sans font-medium hover:bg-ice-navy transition-colors shadow-lg shadow-slate-400/20 mt-4 disabled:opacity-70"
          >
            {status.loading ? 'Mengirim...' : 'Kirim RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;
