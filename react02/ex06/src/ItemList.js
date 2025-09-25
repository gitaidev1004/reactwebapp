import React from 'react';
export default function ItemList({ items, showMessage }) {
  return (
    <div>
      <h3>조건부 렌더링 예제</h3>
      {/* 조건부 렌더링: showMessage가 true면 메시지 표시 */}
      {showMessage ? <p>💡 조건부 메시지 표시!</p> : <p>❌ 메시지 없음</p>}
      <h3>반복 렌더링 예제</h3>
      <ul>
        {/* 반복 렌더링: items 배열을 map()으로 순회 */}
        {items.length === 0 ? (
          <li>목록이 없습니다.</li>
        ) : (
          items.map(item => <li key={item.id}>{item.text}</li>)
        )}
      </ul>
    </div>
  );
}