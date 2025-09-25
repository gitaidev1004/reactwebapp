import React from 'react';
import AudioComp from './components/AudioComp';
import VideoComp from './components/VideoComp';
import CustomAudioPlayer from './components/CustomAudioPlayer';
import IframeExample from './components/IframeExample';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>5.6 미디어 구현 예제</h1>

      {/* (1) 오디오 요소 */}
      <section>
        <h2>(1) 오디오 요소</h2>
        <AudioComp />
      </section>
      <hr />

      {/* (2) 비디오 요소 */}
      <section>
        <h2>(2) 비디오 요소</h2>
        <VideoComp />
      </section>
      <hr />

      {/* (3) 커스텀 미디어 플레이어 */}
      <section>
        <h2>(3) 커스텀 오디오 플레이어</h2>
        <CustomAudioPlayer />
      </section>
      <hr />

      {/* (4) iframe 요소 */}
      <section>
        <h2>(4) iframe 외부 콘텐츠</h2>
        <IframeExample
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube Example"
        />
      </section>
    </div>
  );
}
