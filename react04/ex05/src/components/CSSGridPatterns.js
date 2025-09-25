import React from "react";
import "./../styles/AppLayout.css";
const CSSGridPatterns = () => {
  return (
    <div className="gallery">
      {[...Array(8)].map((_, index) => (
        <div className="gallery-item" key={index}>
          이미지 {index + 1}
        </div>
      ))}
    </div>
  );
};
export default CSSGridPatterns;