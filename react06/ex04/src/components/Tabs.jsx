import { useState } from 'react';

export default function Tabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div role="tablist" aria-label="Sample Tabs">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            role="tab"
            aria-selected={active === idx}
            onClick={() => setActive(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" style={{ padding: '12px', background: '#fff', borderRadius: 4 }}>
        {tabs[active].content}
      </div>
    </div>
  );
}
