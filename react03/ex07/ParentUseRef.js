import React, { useRef } from "react";
import MyInput from "./MyInput";
export default function Parent() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus(); // 자식 컴포넌트의 input에 접근
  };
  return (
    <div>
      <MyInput ref={inputRef} placeholder="forwardRef 예제" />
      <button onClick={handleFocus}>포커스</button>
    </div>
  );
}