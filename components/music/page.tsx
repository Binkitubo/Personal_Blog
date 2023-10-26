'use client';
import React, { useState } from 'react';
import { GiEasterEgg } from 'react-icons/gi';
import { AiFillPauseCircle } from 'react-icons/ai';

const Music = () => {
  const [audio] = useState(new Audio('depeche.mp3'));
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    audio.play();
    setIsPlaying(true);
  };

  const pauseSound = () => {
    audio.pause();
    setIsPlaying(false);
  };

  return (
    <div>
      {isPlaying ? (
        <button onClick={pauseSound} >
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
