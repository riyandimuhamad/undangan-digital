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
    <div key={index} className="flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]">
      <span className="text-4xl md:text-5xl font-serif text-white mb-2 font-light">{timeLeft[interval]}</span>
      <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase font-sans">{interval}</span>
    </div>
  ));

  return (
    <div className="flex justify-center items-center divide-x divide-white/15 mt-8 border-t border-white/15 pt-8 mx-auto max-w-sm">
      {timerComponents.length ? timerComponents : <span className="text-lg font-serif italic text-white/70">Acara Telah Berlangsung!</span>}
    </div>
  );
};

export default CountdownTimer;
