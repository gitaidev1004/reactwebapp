import React, { useState } from 'react';
export default function EventDemo() {
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleClick = () => alert('버튼 클릭!');
  
  const handleChange = (e) => setText(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 새로고침 방지
    setSubmitted(true);
  };
  const handleMouseEnter = () => console.log('마우스가 요소 위에 들어옴');
  const handleMouseLeave = () => console.log('마우스가 요소를 벗어남');
  return (
    <div style={{padding:20}}>
      <h3>React 이벤트 예제</h3>
      {/* 클릭 이벤트 */}
      <button onClick={handleClick}>클릭 버튼</button>
      {/* 입력 이벤트 */}
      <div style={{marginTop:12}}>
        <input 
          type="text" 
          value={text} 
          onChange={handleChange} 
          placeholder="텍스트 입력"
        />
        <p>입력값: {text}</p>
      </div>
      {/* 폼 제출 이벤트 */}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="폼 제출용" />
        <button type="submit" style={{marginLeft:8}}>제출</button>
      </form>
      {submitted && <p>폼 제출 완료!</p>}
      {/* 마우스 이벤트 */}
      <div 
        style={{marginTop:12, padding:8, border:'1px solid #ccc'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        마우스를 올려보세요
      </div>
    </div>
  );
}