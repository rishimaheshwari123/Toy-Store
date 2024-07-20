import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/virtual";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Virtual,
  Controller,
} from "swiper/modules";
import banner1 from "../assets/deals.png";
import banner2 from "../assets/gifts.jpg";
import banner3 from "../assets/new.png";
import banner4 from "../assets/ooo.jpg";
import banner5 from "../assets/best2.jpg";
import banner6 from "../assets/best4.png";

const slides = [
  {
    id: 1,
    image: banner1,
  },
  {
    id: 2,
    image: banner2,
  },
  {
    id: 3,
    image: banner3,
  },
  {
    id: 4,
    image: banner4,
  },
  {
    id: 5,

    image: banner5,
  },
  {
    id: 6,

    image: banner6,
  },
];

const Slider = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiper) {
        const activeIndex =
          swiper.activeIndex === slides.length - 1 ? 0 : swiper.activeIndex + 1;
        swiper.slideTo(activeIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [swiper, slides.length]);

  return (
    <Swiper
      slidesPerView={2} // Default slidesPerView to 1
      onSwiper={setSwiper}
      modules={[
        Navigation,
        Pagination,
        Controller,
        Scrollbar,
        Autoplay,
        Virtual,
      ]}
      navigation
      controller={true}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2000,
        pauseOnMouseEnter: false,
        disableOnInteraction: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2, // 2 slides per view on large screens
        },
      }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full lg:h-[68vh] h- flex items-center justify-center">
            <img
              src={slide.image}
              className="object-cover w-full h-full"
              alt={`Slide ${index + 1}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
