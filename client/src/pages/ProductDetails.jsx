import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/pure-frontend/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ProductDetails = () => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNews = async (id) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/${id}`
        );
        setNews(response?.data?.news);
        console.log(response?.data?.news);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews(id);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <div className="p-4 mt-20">
        {news ? (
          <div
            key={news._id}
            className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 grid lg:grid-cols-2 gap-5"
          >
            <img
              src={news.images[0]?.url}
              alt={news.title}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div>
              <p className="text-2xl font-bold">{news.title}</p>
              <br />
              <p className="text-gray-700 mb-2">{news.description}</p>
              <br />
              <p className="text-red-700 font-bold mb-2">
                <span>Price :</span> ₹{news.price}
              </p>
              <br />
              <br />
              <a
                href="https://wa.me/9009594537"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center text-white font-bold items-center text-xl lg:text-2xl bg-[#01AD18] p-2 pl-5 rounded-3xl py-3 mb-5 gap-3"
              >
                <FaWhatsapp size={30} />
                Book Now
              </a>
            </div>
          </div>
        ) : (
          <p>No news found</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
