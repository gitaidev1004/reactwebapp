import React, { useEffect, useRef, useState } from 'react';

export default function AsyncFieldValidation() {
  const [username, setUsername] = useState('');
  const [status, setStatus] = useState({ validating: false, error: null, available: null });
  const controllerRef = useRef(null);
  const debounceRef = useRef(null);

  useEffect(() => {
    return () => {
      controllerRef.current?.abort();
      clearTimeout(debounceRef.current);
    };
  }, []);

  const checkAvailability = (value) => {
    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    setStatus(s => ({ ...s, validating: true, error: null }));

    fetch(`https://jsonplaceholder.typicode.com/users?username=${encodeURIComponent(value)}`, { signal: controller.signal })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(json => {
        setStatus({ validating: false, error: null, available: json.length === 0 });
      })
      .catch(e => {
        if (e.name === 'AbortError') return;
        setStatus({ validating: false, error: e.message || '검사 실패', available: null });
      });
  };

  const onChange = (e) => {
    const v = e.target.value;
    setUsername(v);
    setStatus({ validating: false, error: null, available: null });

    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (v.trim().length >= 3) checkAvailability(v.trim());
    }, 300);
  };

  return (
    <div>
      <label htmlFor="username">사용자명</label>
      <input
        id="username"
        name="username"
        value={username}
        onChange={onChange}
        aria-invalid={status.error ? 'true' : 'false'}
        aria-describedby="username-help username-error"
        minLength={3}
      />
      <div id="username-help">3자 이상 입력</div>
      {status.validating && <div>사용자명 확인 중…</div>}
      {status.available === true && <div style={{ color: 'green' }}>사용 가능한 이름입니다.</div>}
      {status.available === false && <div id="username-error" role="alert" style={{ color: 'red' }}>이미 사용 중인 사용자명입니다.</div>}
      {status.error && <div role="alert" style={{ color: 'red' }}>{status.error}</div>}
    </div>
  );
}
