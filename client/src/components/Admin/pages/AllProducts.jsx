import axios from "axios";
import React, { useEffect, useState } from "react";

const AllProducts = () => {
  const [product, setProduct] = useState([]);

  const getAllProduct = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/product/all`
      );
      if (!response?.data?.success) {
        throw new Error(response?.data?.message);
      }
      setProduct(response?.data?.news);
      console.log(response?.data?.news);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {};
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="lg:p-8  ">
      <h1 className="text-2xl font-bold mb-4 lg:pl-10">All Products</h1>

      <div className="overflow-x-auto max-h-[70vh] lg:pl-10">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {product.map((news, index) => (
              <tr key={news._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {news.images && news.images.length > 0 && (
                    <img
                      className="h-10 w-10 rounded-full"
                      src={news.images[0].url}
                      alt={news.title}
                    />
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {news.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {news.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {news.price}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="px-4 py-2 font-semibold text-sm bg-gray-500 text-white rounded-full shadow-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
