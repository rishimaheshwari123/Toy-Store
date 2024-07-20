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
import banner1 from "../assets/s1.png";
import banner2 from "../assets/s2.png";
import banner3 from "../assets/s3.png";
import banner4 from "../assets/s4.png";
import banner5 from "../assets/s5.png";
import banner6 from "../assets/s6.png";
import banner7 from "../assets/s7.png";
import banner8 from "../assets/s8.png";
import vdo from "../assets/video.mp4";

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
  {
    id: 7,

    image: banner7,
  },
  {
    id: 8,

    image: banner8,
  },
];

const Slider2 = () => {
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
    <>
      <p className="uppercase text-xl text-center my-8 lg:text-3xl font-bold text-clip">
        Our latest Features
      </p>
      <Swiper
        slidesPerView={1} // Default slidesPerView to 1
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
            slidesPerView: 1, // 2 slides per view on large screens
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={slide.image}
                className="object-cover w-full h-full"
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider2;
