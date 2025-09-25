import { useEffect, useRef, useCallback, useState } from 'react';

export function useWebSocket(url, options = {}) {
  const {
    protocols,
    onMessage,
    onOpen,
    onClose,
    shouldReconnect = true,
    initialBackoff = 1000,
    maxBackoff = 30000,
    heartbeatInterval = 30000,
  } = options;

  const wsRef = useRef(null);
  const reconnectAttemptsRef = useRef(0);
  const forcedCloseRef = useRef(false);
  const messageQueueRef = useRef([]);
  const heartbeatTimerRef = useRef(null);
  const pongTimeoutRef = useRef(null);
  const [status, setStatus] = useState('idle');

  const calcBackoff = (attempt) => {
    const base = Math.min(initialBackoff * 2 ** attempt, maxBackoff);
    return base + Math.floor(Math.random() * 1000);
  };

  const connect = useCallback(() => {
    if (!url) return;
    setStatus('connecting');
    const ws = new WebSocket(url, protocols);
    wsRef.current = ws;

    ws.onopen = (ev) => {
      reconnectAttemptsRef.current = 0;
      setStatus('open');
      while (messageQueueRef.current.length) {
        try { ws.send(messageQueueRef.current.shift()); } catch (e) {}
      }
      onOpen?.(ev);
      if (heartbeatInterval) {
        heartbeatTimerRef.current = setInterval(() => {
          try {
            ws.send(JSON.stringify({ type: 'ping', t: Date.now() }));
            if (pongTimeoutRef.current) clearTimeout(pongTimeoutRef.current);
            pongTimeoutRef.current = setTimeout(() => {
              try { ws.close(); } catch (e) {}
            }, Math.min(heartbeatInterval, 10000));
          } catch (e) {}
        }, heartbeatInterval);
      }
    };

    ws.onmessage = (ev) => {
      let msg = null;
      try { msg = JSON.parse(ev.data); } catch (e) { msg = { type: 'raw', data: ev.data }; }
      if (msg?.type === 'pong') {
        if (pongTimeoutRef.current) { clearTimeout(pongTimeoutRef.current); pongTimeoutRef.current = null; }
      }
      onMessage?.(msg);
    };

    ws.onclose = (ev) => {
      setStatus('closed');
      onClose?.(ev);
      if (heartbeatTimerRef.current) { clearInterval(heartbeatTimerRef.current); heartbeatTimerRef.current = null; }
      if (pongTimeoutRef.current) { clearTimeout(pongTimeoutRef.current); pongTimeoutRef.current = null; }
      if (shouldReconnect && !forcedCloseRef.current) {
        const attempt = ++reconnectAttemptsRef.current;
        const delay = calcBackoff(attempt);
        setTimeout(() => connect(), delay);
      }
    };

    ws.onerror = () => setStatus('error');
  }, [url, protocols, onMessage, onOpen, onClose, shouldReconnect, initialBackoff, maxBackoff, heartbeatInterval]);

  useEffect(() => {
    forcedCloseRef.current = false;
    connect();
    const onOnline = () => {
      if (wsRef.current?.readyState !== WebSocket.OPEN) connect();
    };
    window.addEventListener('online', onOnline);
    return () => {
      forcedCloseRef.current = true;
      try { wsRef.current?.close(); } catch (e) {}
      if (heartbeatTimerRef.current) clearInterval(heartbeatTimerRef.current);
      if (pongTimeoutRef.current) clearTimeout(pongTimeoutRef.current);
      window.removeEventListener('online', onOnline);
    };
  }, [connect]);

  const send = useCallback((obj) => {
    const payload = typeof obj === 'string' ? obj : JSON.stringify(obj);
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(payload);
    } else {
      messageQueueRef.current.push(payload);
    }
  }, []);

  const close = useCallback(() => {
    forcedCloseRef.current = true;
    try { wsRef.current?.close(); } catch (e) {}
  }, []);

  return { send, close, status, wsRef };
}
