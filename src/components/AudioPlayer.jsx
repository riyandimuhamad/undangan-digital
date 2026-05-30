import React from 'react';
import { Music, Music4 } from 'lucide-react';

const AudioPlayer = ({ audioRef, isPlaying, setIsPlaying }) => {
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-28 right-4 md:right-6 z-[90] p-3 rounded-full shadow-xl transition-all duration-300 ${
        isPlaying ? 'bg-slate-700 text-white animate-spin-slow' : 'bg-slate-200 text-slate-500'
      }`}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? <Music className="w-5 h-5" /> : <Music4 className="w-5 h-5" />}
    </button>
  );
};

export default AudioPlayer;
