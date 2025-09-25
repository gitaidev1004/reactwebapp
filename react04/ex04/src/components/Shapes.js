import React from "react";
import styled from "styled-components";
const ShapeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
const Circle = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ff6347;
  border-radius: 50%;
`;
const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 80px solid #4682b4;
`;
const StarSVG = () => (
  <svg width="80" height="80" viewBox="0 0 100 100">
    <polygon
      points="50,5 61,39 99,39 69,61 79,95 50,75 21,95 31,61 1,39 39,39"
      fill="#ffd700"
    />
  </svg>
);
const Shapes = () => {
  return (
    <ShapeWrapper>
      <Circle />
      <Triangle />
      <StarSVG />
    </ShapeWrapper>
  );
};
export default Shapes;