import React, { useState, useEffect, useRef } from 'react';
import { Music, Music4 } from 'lucide-react';

const AudioPlayer = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5; // Set reasonable default volume
      // Try to play immediately when component mounts
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented by browser, update state
          setIsPlaying(false);
        });
      }
    }
    
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

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

  if (!url) return null;

  return (
    <>
      <audio ref={audioRef} src={url} loop preload="auto" />
      <button
        onClick={togglePlay}
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-xl transition-all duration-300 ${
          isPlaying ? 'bg-slate-700 text-white animate-spin-slow' : 'bg-slate-200 text-slate-500'
        }`}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Music className="w-5 h-5" /> : <Music4 className="w-5 h-5" />}
      </button>
    </>
  );
};

export default AudioPlayer;
