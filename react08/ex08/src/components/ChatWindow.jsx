import React, { useEffect, useReducer, useRef } from 'react';
import { useWebSocket } from './useWebSocket';
import { chatReducer } from './chatReducer';
import ChatInput from './ChatInput';

export default function ChatWindow({ wsUrl, roomId }) {
  const [state, dispatch] = useReducer(chatReducer, { messages: [] });
  const bufferRef = useRef([]);
  const rafRef = useRef(null);

  const { send, status } = useWebSocket(wsUrl, {
    onMessage: (msg) => {
      if (msg?.type === 'message') {
        bufferRef.current.push(msg.payload);
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(() => {
            dispatch({ type: 'ADD_MESSAGES', payload: bufferRef.current.splice(0) });
            rafRef.current = null;
          });
        }
      }
      if (msg?.type === 'ack') {
        dispatch({ type: 'REPLACE_TEMP', payload: { tempId: msg.tempId, newMessage: msg.message }});
      }
    }
  });

  const sendMessage = (text) => {
    const tempId = 'tmp-' + Date.now();
    const tempMsg = { id: tempId, body: text, ts: Date.now(), pending: true };
    dispatch({ type: 'ADD_MESSAGE', payload: tempMsg });
    send({ type: 'message', payload: { tempId, roomId, body: text } });
  };

  useEffect(()=> () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  return (
    <div>
      <div>연결 상태: {status}</div>
      <ul role="list" aria-live="polite">
        {state.messages.map(m => (
          <li key={m.id} style={{ opacity: m.pending ? 0.6 : 1 }}>
            <div>{m.body}</div>
            <small>{new Date(m.ts).toLocaleTimeString()}</small>
          </li>
        ))}
      </ul>
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
