import React, { useEffect, useState } from "react";
import Navbar from "../../pure-frontend/Navbar/Navbar";
import Footer from "../../footer/Footer";
import { useSelector } from "react-redux";
import { fetchSingleOrders } from "../../../services/operations/order";

const MyOrder = () => {
  const { user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getSingleOrder = async () => {
    try {
      setLoading(true);
      const response = await fetchSingleOrders(user?.token, user?._id);
      console.log(response, "order");
      setOrders(Array.isArray(response) ? response : [response]);
    } catch (err) {
      setError(err.message || "Failed to fetch orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.token && user?._id) {
      getSingleOrder();
    }
  }, [user]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mt-20">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">My Orders</h1>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg text-gray-500">Loading your orders...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg p-6 max-w-3xl mx-auto"
              >
                <h2 className="text-lg font-bold text-gray-700 mb-4">
                  Order Details
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Order ID:</span>
                    <span className="text-gray-800">{order._id}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">
                      Product Name:
                    </span>
                    <span className="text-gray-800">{order.productName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">
                      Product ID:
                    </span>
                    <span className="text-gray-800">{order.productId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Price:</span>
                    <span className="text-gray-800">${order?.totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">Status:</span>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 font-medium">
                      Order Date:
                    </span>
                    <span className="text-gray-800">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-lg text-gray-500">No orders found.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyOrder;
