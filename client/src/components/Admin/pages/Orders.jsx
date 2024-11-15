import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchOrders } from "../../../services/operations/order"; // Import the fetchOrders function

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (!user?.token) {
          throw new Error("User token is not available");
        }
        const response = await fetchOrders(user?.token); // Call the fetchOrders function
        console.log(response); // Log the full response to inspect its structure
        setOrders(response); // Set the fetched orders in the state
      } catch (error) {
        console.error("Error fetching orders:", error);
        setError(error.message || "Failed to fetch orders.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, [user?.token]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Product</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">{order._id}</td>
                  <td className="border px-4 py-2">{order.productId}</td>
                  <td className="border px-4 py-2">₹{order.totalAmount}</td>
                  <td className="border px-4 py-2">{order.status}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-2">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
