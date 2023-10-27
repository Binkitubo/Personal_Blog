'use client';
import React, { useState } from 'react';
import { GiEasterEgg } from 'react-icons/gi';
import { AiFillPauseCircle } from 'react-icons/ai';

const Music = () => {
  const [audio] = useState<HTMLAudioElement | null>(
    typeof Audio !== 'undefined' ? new Audio('depeche.mp3') : null
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const pauseSound = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      {isPlaying ? (
        <button onClick={pauseSound}>
          <AiFillPauseCircle className='text-5xl text-white' />
        </button>
      ) : (
        <button onClick={playSound}>
          <GiEasterEgg className='text-5xl text-white' />
        </button>
      )}
    </div>
  );
};

export default Music;