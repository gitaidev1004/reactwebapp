import React, { useRef } from 'react';

export default function AudioComp() {
  const audioRef = useRef(null);

  const playAudio = () => audioRef.current.play();
  const pauseAudio = () => audioRef.current.pause();

  return (
    <div>
      <audio
        ref={audioRef}
        src="/sample.mp3"
        aria-label="Sample Audio"
        controls
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={playAudio}>재생</button>
      <button onClick={pauseAudio}>일시정지</button>
    </div>
  );
}
