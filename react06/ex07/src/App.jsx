import React from "react";
import { BasicCarousel } from "./components/BasicCarousel.jsx";
import { AutoplayCarousel } from "./components/AutoplayCarousel.jsx";
import { AccessibleSwipeCarousel } from "./components/AccessibleSwipeCarousel.jsx";
import { PerformanceCarousel } from "./components/PerformanceCarousel.jsx";

const slides = [
  { id: 1, src: "/img1.jpg", alt: "Slide 1", caption: "Caption 1" },
  { id: 2, src: "/img2.jpg", alt: "Slide 2", caption: "Caption 2" },
  { id: 3, src: "/img3.jpg", alt: "Slide 3", caption: "Caption 3" },
];

export default function App() {
  return (
    <div>
      <h1>6.7 자동 슬라이딩 배너 / 캐러셀</h1>

      <h2>1️⃣ Basic Carousel</h2>
      <BasicCarousel slides={slides} />

      <h2>2️⃣ Autoplay Carousel</h2>
      <AutoplayCarousel slides={slides} interval={2000} />

      <h2>3️⃣ Accessible Swipe Carousel</h2>
      <AccessibleSwipeCarousel slides={slides} />

      <h2>4️⃣ Performance Carousel</h2>
      <PerformanceCarousel slides={slides} />
    </div>
  );
}
