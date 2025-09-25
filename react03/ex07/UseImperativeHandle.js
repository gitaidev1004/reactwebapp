import React, { useRef, forwardRef, useImperativeHandle } from "react";
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => inputRef.current.focus(),
    clearInput: () => (inputRef.current.value = "")
  }));
  return <input ref={inputRef} {...props} />;
});
export default function Parent() {
  const customRef = useRef();
  return (
    <div>
      <CustomInput ref={customRef} placeholder="커스텀 Ref 예제" />
      <button onClick={() => customRef.current.focusInput()}>포커스</button>
      <button onClick={() => customRef.current.clearInput()}>초기화</button>
    </div>
  );
}