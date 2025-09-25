import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

export default function SpringBox() {
  const [toggle, setToggle] = useState(false);

  const props = useSpring({
    transform: `scale(${toggle ? 1.2 : 1})`,
    config: { tension: 200, friction: 12 },
  });

  return (
    <animated.div
      style={{
        ...props,
        background: '#28a745',
        padding: '20px',
        color: '#fff',
        borderRadius: '6px',
        marginTop:'10px',
        cursor: 'pointer'
      }}
      onClick={() => setToggle(!toggle)}
    >
      Spring Box (Click Me)
    </animated.div>
  );
}
