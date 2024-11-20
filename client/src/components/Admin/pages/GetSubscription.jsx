import React, { useEffect, useState } from "react";
import { getSubscriptionApi } from "../../../services/operations/subscription";
import { useSelector } from "react-redux";

const GetSubscription = () => {
  const { user } = useSelector((state) => state.auth);
  const [subscriptions, setSubscriptions] = useState([]);

  const fetchSubscriptions = async () => {
    if (!user?.token) return; // Prevent fetch if token is unavailable
    const response = await getSubscriptionApi(user.token);
    setSubscriptions(response || []); // Update state with fetched data
  };

  useEffect(() => {
    fetchSubscriptions();
  }, [user]); // Re-fetch if user changes

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subscriptions</h1>
      {subscriptions.length === 0 ? (
        <div>No subscriptions found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Type
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Is Active
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Total Amount
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Payment ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  User Name
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Created At
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Updated At
                </th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {sub.type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sub.isActive ? "Yes" : "No"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sub.totalAmount}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sub.paymentDetails?.razorpay_payment_id || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {sub.userId?.[0]?.name || "N/A"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(sub.createdAt).toLocaleString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(sub.updatedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetSubscription;
