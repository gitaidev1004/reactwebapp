import React from 'react';
import HoverButton from './components/HoverButton';
import FadeInBox from './components/FadeInBox';
import MotionBox from './components/MotionBox';
import SpringBox from './components/SpringBox';
import ReducedMotionExample from './components/ReducedMotionExample';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>5.7 리액트의 애니메이션과 모션 디자인</h1>

      <section>
        <h2>(1) CSS transitions 기본</h2>
        <HoverButton />
      </section>
      <hr />

      <section>
        <h2>(1) keyframes 애니메이션</h2>
        <FadeInBox />
      </section>
      <hr />

      <section>
        <h2>(2) Framer Motion</h2>
        <MotionBox />
      </section>
      <hr />

      <section>
        <h2>(2) react-spring</h2>
        <SpringBox />
      </section>
      <hr />

      <section>
        <h2>(3) 접근성 : prefers-reduced-motion</h2>
        <ReducedMotionExample />
      </section>
    </div>
  );
}
