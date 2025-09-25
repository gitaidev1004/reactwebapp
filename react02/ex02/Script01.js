import React from "react";

function Script01() {
  const name = "홍길동";
  return (
    <div className="box"> {/* 클래스 이름은 className으로 */} {/* (1) class -> className */}
      <h1>제목</h1> {/* (2) 하나의 최상위 태그 안에 있어야 함 */}
      <p>내용</p>

      <input type="text" /> {/* (3) 닫는 태그 필수 */}

      <p>{name}님, 환영합니다!</p> {/* (4) 중괄호 안에서 표현식 사용 */}
    </div>
  );
}
export default Script01;