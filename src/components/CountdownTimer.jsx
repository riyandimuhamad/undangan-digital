import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
        jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
        menit: Math.floor((difference / 1000 / 60) % 60),
        detik: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { hari: 0, jam: 0, menit: 0, detik: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.keys(timeLeft).map((interval, index) => (
    <div key={index} className="flex flex-col items-center justify-center bg-white shadow-sm shadow-slate-200 rounded-[16px] p-3 min-w-[70px] border border-slate-100">
      <span className="text-2xl font-bold text-ice-navy">{timeLeft[interval]}</span>
      <span className="text-xs text-slate-500 uppercase font-medium">{interval}</span>
    </div>
  ));

  return (
    <div className="flex justify-center gap-3 md:gap-4 mt-6">
      {timerComponents.length ? timerComponents : <span className="text-lg font-bold text-slate-600">Acara Telah Berlangsung!</span>}
    </div>
  );
};

export default CountdownTimer;
