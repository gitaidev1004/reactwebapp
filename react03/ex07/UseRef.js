import React, { useRef } from "react";
export default function FocusInput() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus(); // input DOM에 직접 접근
  };
  return (
    <div>
      <input ref={inputRef} placeholder="클릭 시 포커스" />
      <button onClick={handleFocus}>포커스 이동</button>
    </div>
  );
}