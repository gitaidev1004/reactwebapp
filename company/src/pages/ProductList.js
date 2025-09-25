import React, { useEffect, useRef, useState } from 'react';
import { getProducts } from '../api';
import { AiFillHome } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

export default function ProductList() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [category, setCategory] = useState('전체');

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    '전체',
    '침실',
    '거실',
    '다이닝',
    '옷장·드레스룸',
    '키즈방',
    '학생방',
    '홈오피스',
    '홈&데코'
  ];

  useEffect(() => {
    const currentCategory = params.get('category') || '전체';
    setCategory(currentCategory);
    getProducts()
      .then(data => {
        const sorted = [...data.results].sort((a, b) => (b.id || b.no) - (a.id || a.no));
        setAllProducts(sorted);
        if (currentCategory === '전체') {
          setFilteredProducts(sorted);
        } else {
          setFilteredProducts(sorted.filter(p => p.category === currentCategory));
        }
      })
      .catch(console.error);
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 0px' }}>
      {/* ✅ 브레드크럼 UI */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }} ref={dropdownRef}>
        <AiFillHome size={20} style={{ marginRight: 8 }} />
        <span style={{ color: '#aaa', margin: '0 8px 0 0px', fontSize:15 }}>{'>'}</span>
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 16,
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: 0,
              color: '#333'
            }}
          >
            {category}
            <FaChevronDown style={{ marginLeft: 5, fontSize: 10 }} />
          </button>

          {/* 드롭다운 */}
          {dropdownOpen && (
            <ul style={{
              position: 'absolute',
              top: 25,
              left: 0,
              background: '#fff',
              border:'1px solid #000',
              padding: 0,
              listStyle: 'none',
              zIndex: 10,
              minWidth: 120
            }}>
              {categories.map(cat => (
                <li key={cat}>
                  <Link
                    to={`/products?category=${encodeURIComponent(cat)}`}
                    onClick={() => setDropdownOpen(false)}
                    style={{
                      background: 'none',
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontWeight: cat === category ? 'bold' : 'normal',
                      color: cat === category ? '#000' : '#555',
                      textDecoration: 'none'
                    }}
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <h2 style={{
        fontSize: 28,
        marginBottom: 30,
        borderBottom: '2px solid #000',
        paddingBottom: 15
      }}>
        {category}
      </h2>

      {filteredProducts.length === 0 ? (
        <p>상품이 없습니다.</p>
      ) : (
        <ul style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          listStyle: 'none',
          padding: 0,
          width: '100%'
        }}>
          {filteredProducts.map(product => {
            const originalPrice = Number(product.original_price) || 0;
            const discountRate = Number(product.discount_rate) || 0;
            const salePrice = Number(product.price) || 0;
            const finalPrice = discountRate > 0
              ? Math.floor(originalPrice * (100 - discountRate) / 100)
              : salePrice || originalPrice;

            return (
              <li
                key={product.id || product.no}
                style={{
                  background: "#fff",
                  border: "none",
                  display: "flex",
                  width: '100%',
                  flexDirection: "column",
                }}
              >
                <Link
                  to={`/products/${product.id || product.no}`}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <img
                    src={product.image || '/img/noimg.png'}
                    alt={product.name || "상품명 없음"}
                    style={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      marginBottom: 12,
                      background: '#f4f4f4',
                    }}
                  />
                  <div style={{ fontSize: 13, color: 'rgb(153, 153, 153)' }}>한샘</div>
                  <div>
                    <div style={{
                      fontSize: 17,
                      lineHeight: 1.3,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      wordBreak: "break-word",
                      maxHeight: "2.6em",
                      marginBottom: 8,
                    }}>
                      {product.name || "상품명 없음"}
                    </div>
                    {discountRate > 0 && (
                      <div style={{
                        color: "#b0b0b0",
                        textDecoration: 'line-through',
                        fontSize: 15,
                      }}>
                        {originalPrice.toLocaleString()}원
                      </div>
                    )}
                    <div style={{ marginTop: 2 }}>
                      {discountRate > 0 && (
                        <span style={{
                          color: '#F44',
                          fontWeight: 500,
                          fontSize: 20,
                          marginRight: 8,
                        }}>
                          {discountRate}%
                        </span>
                      )}
                      <span style={{
                        fontWeight: 500,
                        fontSize: 21,
                        color: '#222',
                      }}>
                        {finalPrice.toLocaleString()}원
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
