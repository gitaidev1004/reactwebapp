import React, { useState } from "react";
import "./home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 슬라이드별 이미지 + 텍스트 배열
const slides = [
  { img: "/img/1bg.webp", title: "Kitchenbach", desc: "키친바흐,\n프리미엄의 새로운 기준이 되다" },
  { img: "/img/2bg.webp", title: "New", desc: "새로운 한샘의 시작,\n프래그십" },
  { img: "/img/3bg.webp", title: "Hansem", desc: "한샘,\n당신의 라이프스타일을 완성하다" },
  { img: "/img/4bg.webp", title: "Design", desc: "디자인,\n공간을 바꾸는 힘" },
  { img: "/img/5bg.webp", title: "Premium", desc: "프리미엄,\n경험의 가치를 높이다" },
];

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <Swiper
        direction="vertical"
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        speed={1000}
        modules={[Mousewheel, Pagination, Autoplay]}
        mousewheel={true}
        className="mySwiper"
        style={{ height: "100vh" }}
        onSlideChange={swiper => setActiveIdx(swiper.realIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="slide-bg-wrap">
              <img
                src={slide.img}
                alt={`슬라이드${idx + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div
                className={`slide-text-overlay ${activeIdx === idx ? "show" : ""}`}
              >
                <h1>{slide.title}</h1>
                <p>
                  {slide.desc.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
