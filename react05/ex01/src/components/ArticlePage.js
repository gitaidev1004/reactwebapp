//SEO와 오픈그래프를 라우트별로 관리하는 예시입니다.
import { Helmet } from "react-helmet-async";
export default function ArticlePage({ title, desc, ogImage }) {
  return (
    <>
      <Helmet>
        <title>{title} | MyCompany</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={ogImage} />
      </Helmet>
      <article aria-labelledby="post-title">
        <h2 id="post-title">{title}</h2>
        <p>{desc}</p>
      </article>
    </>
  );
}