import React, { useEffect, useRef, useState } from 'react';
export default function TimerFunc({ start }) {
  const [sec, setSec] = useState(0);
  // componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log('mount');
    const id = setInterval(() => setSec(s => s + 1), 1000);
    return () => {
      clearInterval(id);
      console.log('unmount');
    };
  }, []);
  // 특정 prop 변경에 반응(componentDidUpdate의 특정 분기)
  useEffect(() => {
    console.log('start prop changed:', start);
  }, [start]);
  // didUpdate만: 첫 렌더 건너뛰기
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    console.log('sec updated to', sec);
  }, [sec]);
  return <div>경과: {sec}s</div>;
}