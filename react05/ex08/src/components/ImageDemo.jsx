import React from 'react';

export default function ImageDemo() {
  return (
    <div>
      <p>아래 이미지는 srcset/sizes 속성과 loading="lazy" 로 최적화됩니다.</p>
      <img
        className="responsive" 
        src="/small.jpg" 
        srcSet="/small.jpg 480w, /medium.jpg 768w, /large.jpg 1200w" 
        sizes="(max-width: 768px) 100vw, 50vw" 
        alt="샘플 이미지" 
        loading="lazy" 
      />
    </div>
  );
}