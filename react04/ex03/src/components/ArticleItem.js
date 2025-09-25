import React from 'react';
import styled from 'styled-components';
import { MdAccessTime } from 'react-icons/md';
import Heading from './Typography/Heading';
import Paragraph from './Typography/Paragraph';
const ArticleWrapper = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;
const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 8px;

  svg {
    margin-right: 4px;
  }
`;
const ArticleItem = ({ title, summary, time }) => {
  return (
    <ArticleWrapper>
      <Heading size="medium">{title}</Heading>
      <MetaInfo>
        <MdAccessTime /> {time}
      </MetaInfo>
      <Paragraph>{summary}</Paragraph>
    </ArticleWrapper>
  );
};
export default ArticleItem;