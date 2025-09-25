import React, { useState, useRef } from 'react';

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const contentId = useRef(`accordion-${Math.random().toString(36).substr(2, 5)}`);

  return (
    <div>
      <button
        aria-expanded={open}
        aria-controls={contentId.current}
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
      </button>
      {open && (
        <div id={contentId.current} role="region">
          {children}
        </div>
      )}
    </div>
  );
}
