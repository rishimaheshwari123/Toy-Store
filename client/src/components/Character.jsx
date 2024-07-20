import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Character = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/category/all`
      );
      setCategories(response?.data?.categories || []);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  const limitTitle = (title, wordLimit) => {
    const words = title.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return title;
  };

  return (
    <div className="p-4 ">
      {categories.length === 0 ? (
        <p className="text-center">No categories available.</p>
      ) : (
        categories.map((category) => (
          <div key={category._id} className="mb-10">
            <div className="flex justify-center items-center my-10">
              <div className="relative w-full bg-yellow-500 py-6 overflow-hidden">
                <div className="absolute left-0 h-full w-10 bg-yellow-500 clip-path-left-triangle"></div>
                <div className="absolute right-0 h-full w-10 bg-yellow-500 clip-path-right-triangle"></div>
                <div className="text-center">
                  <span className="text-blue-700 font-bold text-2xl">
                    {category.name}
                  </span>
                </div>
              </div>
            </div>

            {category.product.length === 0 ? (
              <p className="text-center">
                No products available in this category.
              </p>
            ) : (
              <Swiper
                className="max-w-7xl mx-auto"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {category.product.map((product) => (
                  <SwiperSlide
                    key={product._id}
                    className="bg-gray-100 rounded-lg"
                  >
                    <Link
                      to={`/products/${product._id}`}
                      className=" shadow-lg rounded-lg p-6  transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="h-[200px] w-[230px] flex mx-auto">
                        <img
                          src={product.images[0]?.url}
                          alt={product.title}
                          className="w-full h-full object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <h3 className="text-xl text-center mt-5 font-semibold mb-2">
                        {limitTitle(product.title, 5)}
                      </h3>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Character;
