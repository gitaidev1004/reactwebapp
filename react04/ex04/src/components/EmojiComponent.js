import React from "react";
import styled from "styled-components";
const EmojiWrapper = styled.div`
  font-size: 2rem;
  padding: 1rem;
`;
const EmojiComponent = () => {
  return (
    <EmojiWrapper>
      <span>👍</span>
      <span>⭐</span>
      <span>₩</span>
      <span>&trade;</span>
      <span role="img" aria-label="smiling">
        😊
      </span>
    </EmojiWrapper>
  );
};
export default EmojiComponent;