import React, { useEffect, useRef, useState } from "react";
export default function PreviousValue() {
  const [value, setValue] = useState("");
  const prevValue = useRef("");
  useEffect(() => {
    prevValue.current = value;
  }, [value]);
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <p>현재 값: {value}</p>
      <p>이전 값: {prevValue.current}</p>
    </div>
  );
}