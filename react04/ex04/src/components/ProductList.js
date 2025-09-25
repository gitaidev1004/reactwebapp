import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
const ProductListWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;
const products = [
  { id: 1, name: "무선 이어폰", price: 129000, inStock: true, rating: 4.5 },
  { id: 2, name: "스마트 워치", price: 189000, inStock: false, rating: 4.7 },
  { id: 3, name: "블루투스 스피커", price: 89000, inStock: true, rating: 4.3 },
];
const ProductList = () => {
  return (
    <ProductListWrapper>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ProductListWrapper>
  );
};
export default ProductList;