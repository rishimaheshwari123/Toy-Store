import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Character = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");

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

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  const filteredCategories = categories.filter((category) => {
    if (selectedCategory && category._id !== selectedCategory) {
      return false;
    }
    if (priceRange) {
      return category.product.some((product) => {
        const price = parseFloat(product.price);
        if (priceRange === "low") return price < 400;
        if (priceRange === "medium") return price >= 400 && price <= 900;
        if (priceRange === "high") return price > 900;
        return true;
      });
    }
    return true;
  });

  if (loading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 mt-20">
        <div className="mb-6 flex flex-col sm:flex-row gap-3 items-center">
          <select
            className="border border-gray-300 p-2 rounded-md mb-4 sm:mb-0 w-full sm:w-auto"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            className="border border-gray-300 p-2 rounded-md w-full sm:w-auto"
            value={priceRange}
            onChange={handlePriceRangeChange}
          >
            <option value="">All Prices</option>
            <option value="low">Below ₹400</option>
            <option value="medium">₹400 - ₹900</option>
            <option value="high">Above ₹900</option>
          </select>
        </div>

        {filteredCategories.length === 0 ? (
          <p className="text-center text-gray-500">No categories available.</p>
        ) : (
          filteredCategories.map((category) => (
            <div key={category._id} className="mb-10">
              {category.product.length === 0 ? (
                <p className="text-center text-gray-500">
                  No products available in this category.
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                  {category.product
                    .filter((product) => {
                      const price = parseFloat(product.price);
                      if (priceRange === "low") return price < 400;
                      if (priceRange === "medium")
                        return price >= 400 && price <= 900;
                      if (priceRange === "high") return price > 900;
                      return true;
                    })
                    .map((product) => (
                      <Link
                        to={`/products/${product._id}`}
                        key={product._id}
                        className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <div className="h-[200px] w-full flex mx-auto mb-4">
                          <img
                            src={product.images[0]?.url}
                            alt={product.title}
                            className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <h3 className="text-sm font-semibold mb-2">
                          {product.title}
                        </h3>
                        <p className="text-red-600 font-bold">
                          Price : ₹{product.price}
                        </p>
                      </Link>
                    ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default Character;
