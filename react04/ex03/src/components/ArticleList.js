import React from 'react';
import ArticleItem from './ArticleItem';
const articles = [
  {
    id: 1,
    title: 'AI 기술의 미래, 인간의 삶을 어떻게 바꿀 것인가',
    summary:
      '인공지능은 이미 우리 삶 곳곳에 스며들어 다양한 편리함을 제공하고 있습니다. 앞으로 AI 기술은...',
    time: '2시간 전',
  },
  {
    id: 2,
    title: '메타버스, 차세대 인터넷의 핵심인가',
    summary:
      '메타버스는 온라인과 오프라인의 경계를 허물며 새로운 가능성을 열고 있습니다. 전문가들은...',
    time: '5시간 전',
  },
];

const ArticleList = () => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.id} {...article} />
      ))}
    </div>
  );
};
export default ArticleList;