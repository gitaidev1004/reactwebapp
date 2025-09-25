import React, { useRef } from 'react';

export default function UncontrolledInput() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('입력값: ' + inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nick">별명</label>
      <input id="nick" defaultValue="게스트" ref={inputRef} />
      <button type="submit">제출</button>
    </form>
  );
}
