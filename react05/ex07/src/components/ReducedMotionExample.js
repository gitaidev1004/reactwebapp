import React from 'react';

export default function ReducedMotionExample() {
  const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div
      className={prefersReducedMotion ? '' : 'fade-in'}
      style={{
        background: '#6c757d',
        padding: '20px',
        color: '#fff',
        borderRadius: '6px',
        marginTop:'10px'
      }}
    >
      {prefersReducedMotion
        ? '사용자가 모션 최소화를 설정했습니다. 애니메이션이 비활성화됩니다.'
        : 'prefers-reduced-motion이 적용되지 않아 FadeIn 애니메이션이 실행됩니다.'}
    </div>
  );
}
