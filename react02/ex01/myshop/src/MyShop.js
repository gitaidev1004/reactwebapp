import React, { useState, useEffect } from 'react';

/** Default Parameter */
function formatPrice(price = 0) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(price);
}

/** Class & Inheritance */
class Logger {
  constructor(prefix = 'LOG') {
    this.prefix = prefix;
  }
  log(message) {
    console.log(`[${this.prefix}] ${message}`);
  }
}

class CounterLogger extends Logger {
  constructor() {
    super('COUNTER');
  }
}

/** Arrow Function + Destructuring + Optional/Nullish */
const ProductRow = ({ product }) => (
  <li>
    {product?.title ?? '이름 없음'} - {formatPrice(product?.price)}
  </li>
);

export default function MyShop() {
  /** (1) let/const */
  let isMounted = true;
  const [products, setProducts] = useState([]);

  const logger = new CounterLogger();

  const endpoint = 'https://fakestoreapi.com/products?limit=5';

  /** (9) async/await + fetch + Promise */
  const fetchProducts = async () => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      if (isMounted) setProducts(data);
      logger.log(`Fetched ${data.length} items`);
    } catch (e) {
      logger.log(`Error: ${e.message}`);
    }
  };

  useEffect(() => {
    fetchProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  /** Destructuring + Spread Syntax */
  const handleCloneFirst = () => {
    const [first] = products; // 구조 분해 할당
    if (!first) return;
    const newProduct = { ...first, id: Date.now() }; // 스프레드 문법
    setProducts(prev => [...prev, newProduct]); // 스프레드 문법
  };

  return (
    <main>
      {/* Template Literal */}
      <h1>{`MyShop 상품 목록 (${products.length})`}</h1>
      <button onClick={handleCloneFirst}>첫 상품 복제 추가</button>

      <ul>
        {products.map(p => (
          <ProductRow key={p.id} product={p} />
        ))}
      </ul>
    </main>
  );
}