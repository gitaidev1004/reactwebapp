import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProduct } from '../api';
import "./sub.css";
export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id)
      .then(res => setProduct(res.data))
      .catch(err => {
        console.error("❌ 상품 불러오기 실패:", err);
        alert("상품을 불러올 수 없습니다.");
        navigate("/products");
      });
  }, [id, navigate]);

  if (!product) return <div style={{ padding: 20 }}>로딩 중...</div>;

  // 가격 정보
  const originalPrice = Number(product.original_price) || 0;
  const discountRate = Number(product.discount_rate) || 0;
  const salePrice = Number(product.price) || 0;
  const finalPrice =
    discountRate > 0
      ? Math.floor(originalPrice * (100 - discountRate) / 100)
      : salePrice || originalPrice;

  return (
    <div style={{
      display: 'flex',
      maxWidth: 1180,
      minHeight: 500,
      margin: '0 auto',
      padding: '150px 20px 40px',
      gap: 56,
      alignItems: 'flex-start',
      boxSizing: 'border-box'
    }}>
      {/* 좌: 메인 이미지 */}
      <div style={{
        flex: '0 0 480px',
        maxWidth: 520,
        minWidth: 340,
        padding: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            maxWidth: 440,
            maxHeight: 440,
            objectFit: "contain"
          }}
        />
      </div>

      {/* 우: 정보+구매 패널 */}
      <div style={{
        flex: '1 1 520px',
        minWidth: 420,
        maxWidth: 650,
        background: "#fff",
        borderRadius: 18,
        padding: "32px 36px",
        boxShadow: "0 3px 24px rgba(0,0,0,0.04)"
      }}>
        {/* 상품명 */}
        <h2
          className="ellipsis-2"
          style={{
            fontSize: 29,
            fontWeight: 600,
            margin: "0 0 14px",
            lineHeight: 1.3,
            letterSpacing: "-0.5px"
          }}
        >
          {product.name}
        </h2>
        {/* 정가 + 할인율 */}
        <div style={{
          color: "#b0b0b0",
          fontSize: 19,
          fontWeight: 500,
          marginBottom: 5,
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
          {discountRate > 0 && (
            <span style={{ textDecoration: "line-through" }}>
              {Number(product.original_price).toLocaleString()}원
            </span>
          )}
          {discountRate > 0 && (
            <span style={{
              color: "#F44",
              fontWeight: 700,
              fontSize: 18,
              marginLeft: 2
            }}>
              {discountRate}%
            </span>
          )}
        </div>

        {/* 판매가 */}
        <div style={{
          fontWeight: 700,
          fontSize: 29,
          color: '#111',
          marginBottom: 22,
          letterSpacing: "-1px"
        }}>
          {finalPrice.toLocaleString()}원
        </div>

        {/* 카드혜택 박스 */}
        <div style={{
          background: "#f6f7f8",
          borderRadius: 12,
          border: "1.2px solid #e2e4ea",
          padding: "14px 20px",
          marginBottom: 10,
          fontSize: 15.5,
          color: "#444",
          display: "flex",
          alignItems: "flex-start",
          gap: 14
        }}>
          <div style={{
            minWidth: 68,
            color: "#a5a5a5",
            fontSize: 15,
            fontWeight: 500,
            marginTop: 2
          }}>카드 혜택</div>
          <div>
            <div style={{ textDecoration: "underline", display: "inline-block" }}>롯데카드 청구할인</div>
            <br />
            <div style={{ textDecoration: "underline", display: "inline-block" }}>하나카드 무이자 최대 12개월</div>
          </div>
        </div>

        {/* 배송 정보 박스 */}
        <div style={{
          background: "#f6f7f8",
          borderRadius: 12,
          border: "1.2px solid #e2e4ea",
          padding: "14px 20px",
          marginBottom: 18,
          fontSize: 15.5,
          color: "#444"
        }}>
          <div><b>배송정보:</b> 무료 / 한샘배송</div>
          <div style={{ color: "#888", fontSize: 13, marginTop: 4 }}>평일 2~3일 내 도착</div>
        </div>

        {/* 구매/장바구니 버튼 */}
        <div style={{
          display: "flex",
          gap: 15,
          marginBottom: 26,
          marginTop: 10
        }}>
          <button style={{
            flex: 1,
            height: 54,
            fontSize: 18,
            fontWeight: 700,
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            letterSpacing: "-1px"
          }}>바로구매</button>
          <button style={{
            flex: 1,
            height: 54,
            fontSize: 18,
            fontWeight: 700,
            background: "#fff",
            color: "#222",
            border: "2px solid #222",
            borderRadius: 8,
            cursor: "pointer",
            letterSpacing: "-1px"
          }}>장바구니</button>
        </div>

      </div>
    </div>
  );
}
