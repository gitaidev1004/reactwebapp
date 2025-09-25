import React, { useState } from 'react';
import { useWebSocket } from './useWebSocket';

export default function Notifications({ wsUrl }) {
  const [toasts, setToasts] = useState([]);
  const { status } = useWebSocket(wsUrl, {
    onMessage: (msg) => {
      if (msg?.type === 'notification') {
        const id = 'n-' + Date.now();
        setToasts(prev => [{ id, ...msg.payload }, ...prev]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), msg.payload.ttl ?? 5000);
      }
    }
  });

  return (
    <div>
      <div>연결 상태: {status}</div>
      <div role="region" aria-live="polite">
        {toasts.map(t => (
          <div key={t.id} style={{ border: '1px solid #ddd', margin: 6, padding: 6 }}>
            <strong>{t.title}</strong>
            <div>{t.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
