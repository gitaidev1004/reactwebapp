export function initGlobalErrorHandler({ reportUrl, getContext = () => ({}) }) {
  const queue = [];
  let isFlushing = false;

  function sendBatch(payloads) {
    return fetch(reportUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events: payloads }),
      keepalive: true,
    }).catch(() => {
      try { localStorage.setItem('error_queue', JSON.stringify(queue)); } catch (e) {}
    });
  }

  async function flush() {
    if (isFlushing || queue.length === 0) return;
    isFlushing = true;
    const items = queue.splice(0, queue.length);
    await sendBatch(items);
    isFlushing = false;
  }

  function enqueue(event) {
    const safe = { time: Date.now(), message: event.message, stack: event.stack, context: getContext() };
    queue.push(safe);
    if (queue.length >= 5) flush();
  }

  window.addEventListener('error', (ev) => {
    enqueue({ message: ev.message, stack: ev.error?.stack });
  });

  window.addEventListener('unhandledrejection', (ev) => {
    const reason = ev.reason;
    enqueue({ message: reason?.message || String(reason), stack: reason?.stack });
  });

  window.addEventListener('online', () => flush());
  window.addEventListener('beforeunload', () => {
    if (queue.length) navigator.sendBeacon(reportUrl, JSON.stringify({ events: queue }));
  });

  return { enqueue, flush };
}
