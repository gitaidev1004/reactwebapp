import React, { useRef } from 'react';

export default function VideoComp() {
  const videoRef = useRef(null);

  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  return (
    <div>
      <video
        ref={videoRef}
        src="/sample.mp4"
        poster="/thumb.jpg"
        width="480"
        aria-label="Sample Video"
        controls
        style={{ display: 'block', marginBottom: '10px' }}
      />
      <button onClick={playVideo}>재생</button>
      <button onClick={pauseVideo}>일시정지</button>
    </div>
  );
}
