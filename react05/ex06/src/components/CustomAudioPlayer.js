import React, { useRef, useState, useEffect } from 'react';

export default function CustomAudioPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  const handleTimeUpdate = () => {
    const percent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(percent || 0);
  };

  const handleSeek = (e) => {
    const time =
      (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  const handleVolume = (e) => {
    const vol = e.target.value;
    setVolume(vol);
    audioRef.current.volume = vol;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div>
      <audio
        ref={audioRef}
        src="/sample.mp3"
        aria-label="Custom Audio Player"
      />
      <div style={{ margin: '10px 0' }}>
        <button onClick={togglePlay}>
          {playing ? '일시정지' : '재생'}
        </button>
      </div>
      <div style={{ marginBottom: '10px' }}>
        진행바:
        <input
          type="range"
          value={progress}
          onChange={handleSeek}
          style={{ width: '300px' }}
        />
      </div>
      <div>
        볼륨:
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
        />
      </div>
    </div>
  );
}
