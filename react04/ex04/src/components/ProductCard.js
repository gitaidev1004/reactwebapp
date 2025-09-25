import React from "react";
import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  width: 250px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
const StockIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => (props.inStock ? "green" : "red")};
  margin-right: 8px;
`;
const ProductCard = ({ product }) => {
  return (
    <Card>
      <h3>{product.name}</h3>
      <p>₩{product.price.toLocaleString()}</p>
      <div style={{ display: "flex", alignItems: "center", margin: "6px 0" }}>
        <StockIndicator inStock={product.inStock} />
        <p>{product.inStock ? "재고 있음" : "품절"}</p>
      </div>
      <div>
        <span>{product.rating} ⭐</span>
      </div>
      <button style={{ backgroundColor: "#007bff", color: "#fff", marginTop: "10px" }}>
        <MdShoppingCart /> 장바구니 담기
      </button>
    </Card>
  );
};
export default ProductCard;