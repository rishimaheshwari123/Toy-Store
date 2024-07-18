import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleCategory } from "../services/operations/admin";
import Navbar from "../components/pure-frontend/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

function SingleCategory() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async (id) => {
      try {
        const response = await fetchSingleCategory(id);
        setNews(response.category);
        setRelated(response.randomCategory);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setLoading(false);
    };
    fetchNews(id);
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {!news ? (
        <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
          <p>Category not found.</p>
        </div>
      ) : (
        <>
          <div className="w-screen mt-[120px]">
            <div className="w-[90%] mx-auto">
              <h3 className="text-3xl font-semibold mb-4">{news.name}</h3>
              <h4 className="text-lg font-light mb-6">{news.description}</h4>
            </div>
          </div>

          <div className="flex flex-col p-4 gap-6">
            {/* Main News Card */}
            <div className="w-full">
              {news?.product?.length > 0 ? (
                news.product.map((newsItem) => (
                  <div
                    key={newsItem._id}
                    className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-200 grid lg:grid-cols-2 gap-5"
                  >
                    <div className="w-[80%] h-[350px] overflow-hidden">
                      <img
                        src={newsItem.images[0]?.url}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-2xl font-bold">{newsItem.title}</p>
                      <p className="text-gray-700 mb-2">
                        {newsItem.description}
                      </p>
                      <p className="text-red-700 font-bold mb-2">
                        <span>Price :</span> ₹{newsItem.price}
                      </p>
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
                ))
              ) : (
                <p>No products have been added to this category yet.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleCategory;
