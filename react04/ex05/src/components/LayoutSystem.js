import React from "react";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1200px;
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
const Col = styled.div`
  flex: 1 1 ${(props) => props.basis || "300px"};
  min-width: ${(props) => props.minWidth || "200px"};
  background-color: #f3f4f6;
  padding: 16px;
  text-align: center;
`;
const LayoutSystem = () => {
  return (
    <Container>
      <Row>
        <Col basis="200px">사이드바</Col>
        <Col>메인 콘텐츠</Col>
        <Col basis="150px">위젯</Col>
      </Row>
    </Container>
  );
};
export default LayoutSystem;