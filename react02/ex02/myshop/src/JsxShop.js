import React, { useState } from 'react';

export default function JsxShop() {
  /* 데이터 바인딩용 state */
  const [cart, setCart] = useState([]);
  /* 상품 데이터 */
  const products = [
    { id: 1, title: 'React 티셔츠', price: 29000 },
    { id: 2, title: 'JSX 머그컵', price: 12000 },
  ];
  /* 이벤트 핸들링: 상품 추가 */
  const addToCart = (product) => setCart([...cart, product]);
  /* 인라인 스타일링 객체 */
  const boxStyle = {
    border: '1px solid #61dafb',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  };
  /* JSX 기본 규칙 */
  const hello = 'Hello JSX!';
  return (
    <>
      {/* 단일 최상위 노드로 Fragment 사용 */}

      {/* 중괄호 표현식 & className 변환 */}
      <h1 className="title">{hello}</h1>

      {/* 데이터 바인딩 + 템플릿 리터럴 */}
      <h2>{`MyShop (장바구니 ${cart.length}개)`}</h2>

      {/* 조건부 렌더링 – &&, 삼항 혼합 */}
      {cart.length === 0 && <p>장바구니가 비었습니다.</p>}

      {/* 반복 렌더링 */}
      <ul>
        {products.map((p, idx) => (
          <li key={p.id}>
            {idx + 1}. {p.title} - {p.price.toLocaleString()}원
            <button onClick={() => addToCart(p)}>담기</button>
          </li>
        ))}
      </ul>

      {/* 인라인 스타일링 + 중첩 Fragment */}
      <section style={boxStyle}>
        <>
          <h3>🛒 장바구니</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      </section>

      {/* 표현식 vs 문장 – 표현식만 허용 */}
      {cart.length ? null : <small>지금 담으면 첫 구매 할인!</small>}
      {/* if (cart.length === 0) { … } // ← 문장은 JSX 안에서 불가 */}

      {/* createElement로 직접 생성한 노드 */}
      {React.createElement('p', null, '이 문장은 React.createElement로 직접 생성됨')}
    </>
  );
}
