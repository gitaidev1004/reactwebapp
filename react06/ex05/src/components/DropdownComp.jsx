import { useState, useRef, useEffect } from 'react';

export default function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} style={{ display: 'inline-block', margin: 8 }}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}>{label}</button>
      {open && (
        <ul role="menu">
          {items.map((it, idx) => <li key={idx} role="menuitem">{it}</li>)}
        </ul>
      )}
    </div>
  );
}
