import React, { useState } from 'react';
function FunctionalComponent({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div style={styles.container}>
      <h2>함수형 컴포넌트</h2>
      <p>안녕하세요, {name}!</p>
      <p>클릭 횟수: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button>
    </div>
  );
}const styles = {
  container: {
    border: '1px solid #3498db',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    backgroundColor: '#ecf9ff'
  }
};
export default FunctionalComponent;