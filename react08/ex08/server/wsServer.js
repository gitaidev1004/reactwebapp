import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8090 });
console.log('WebSocket 서버 시작: ws://localhost:8090');

wss.on('connection', ws => {
  console.log('클라이언트 연결됨');

  // 10초마다 알림 전송
  const intervalId = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(JSON.stringify({
        type: 'notification',
        payload: { title: '공지', body: '서버에서 보낸 알림', ttl: 5000 }
      }));
    }
  }, 10000);

  ws.on('message', msg => {
    let data;
    try { data = JSON.parse(msg); } catch { data = {}; }

    if (data.type === 'ping') {
      ws.send(JSON.stringify({ type: 'pong', t: data.t }));
    }

    if (data.type === 'message') {
      const message = {
        id: 'srv-' + Date.now(),
        body: data.payload.body,
        ts: Date.now()
      };
      ws.send(JSON.stringify({ type: 'ack', tempId: data.payload.tempId, message }));

      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === ws.OPEN) {
          client.send(JSON.stringify({ type: 'message', payload: message }));
        }
      });
    }
  });

  ws.on('close', () => {
    console.log('클라이언트 연결 종료');
    clearInterval(intervalId); // 연결 종료 시 인터벌 제거
  });
});
