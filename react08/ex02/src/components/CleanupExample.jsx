import React, { useEffect, useState } from 'react';

/**
 * 타이머·이벤트·fetch 등 외부 자원을
 * cleanup 함수에서 해제해 메모리 누수를 방지
 */
export default function CleanupExample() {
  const [time, setTime] = useState(Date.now());
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1) interval
    const id = setInterval(() => setTime(Date.now()), 1000);

    // 2) resize 이벤트
    function onResize() {
      setCount(c => c + 1);
    }
    window.addEventListener('resize', onResize);

    // 3) fetch + AbortController
    const controller = new AbortController();
    fetch('https://dummyjson.com/products/3', { signal: controller.signal })
      .then(r => r.json())
      .then(() => {/* 응답만 확인 */})
      .catch((e) => { if (e.name !== 'AbortError') console.error(e); });

    return () => {
      clearInterval(id);
      window.removeEventListener('resize', onResize);
      controller.abort();
    };
  }, []);

  return (
    <div>
      <div>현재 시각: {new Date(time).toLocaleTimeString()}</div>
      <div>리사이즈 감지 횟수: {count}</div>
    </div>
  );
}
