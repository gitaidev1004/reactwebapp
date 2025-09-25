import React, { useRef, useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  const handleClick = () => {
    setCount(count + 1);
    renderCount.current += 1;
  };
  return (
    <div>
      <p>카운트: {count}</p>
      <p>렌더링 횟수: {renderCount.current}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}