import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="p-4">
      {categories.length === 0 ? (
        <p className="text-center">No categories available.</p>
      ) : (
        categories.map((category) => (
          <div key={category._id} className="mb-10">
            <div className="flex justify-center items-center my-10">
              <div className="relative w-full bg-yellow-500 py-6 overflow-y-hidden">
                <div className="absolute left-0 h-full w-10 bg-yellow-500 clip-path-left-triangle overflow-y-hidden"></div>
                <div className="absolute right-0 h-full w-10 bg-yellow-500 clip-path-right-triangle"></div>
                <div className="text-center overflow-y-hidden">
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
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {category.product.map((product) => (
                  <Link
                    to={`${product._id}`}
                    key={product._id}
                    className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <img
                      src={product.images[0]?.url}
                      alt={product.title}
                      className="w-full h-[200px] object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-110"
                    />
                    <h3 className="text-xl  font-semibold mb-2">
                      {product.title}
                    </h3>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Character;
