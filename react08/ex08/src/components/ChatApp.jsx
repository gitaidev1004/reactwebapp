import React from 'react';
import ChatWindow from './ChatWindow';
import Notifications from './Notifications';

export default function ChatApp({ wsUrl, roomId }) {
  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <ChatWindow wsUrl={wsUrl} roomId={roomId} />
      <aside style={{ width: 300 }}>
        <h4>알림</h4>
        <Notifications wsUrl={wsUrl} />
      </aside>
    </div>
  );
}
