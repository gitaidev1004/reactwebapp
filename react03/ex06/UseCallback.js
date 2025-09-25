import React, { useState, useCallback } from 'react';
const Child = React.memo(({ onInc }) => {
  console.log('Child render');
  return <button onClick={onInc}>+1</button>;
});
function Parent() {
  const [count, setCount] = useState(0);
  const handleInc = useCallback(() => setCount(c => c + 1), []); // setCount 쓰는 방식으로 deps 비움 가능
  return <>
    <div>count: {count}</div>
    <Child onInc={handleInc}/>
  </>;
}