import React from 'react';

export function NativeDateTime({ date, time, onDateChange, onTimeChange }) {
  return (
    <div>
      <label htmlFor="native-date">날짜 선택 (네이티브)</label>
      <input
        id="native-date"
        type="date"
        value={date || ''}
        onChange={(e) => onDateChange(e.target.value || null)}
        aria-describedby="native-date-help"
      />
      <div id="native-date-help" style={{ fontSize: 12, color: '#666' }}>
        브라우저 기본 date 피커 사용
      </div>

      <label htmlFor="native-time" style={{ display: 'block', marginTop: 8 }}>
        시간 선택 (네이티브)
      </label>
      <input
        id="native-time"
        type="time"
        value={time || ''}
        onChange={(e) => onTimeChange(e.target.value || null)}
      />
    </div>
  );
}
