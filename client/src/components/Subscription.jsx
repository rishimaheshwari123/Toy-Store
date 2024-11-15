import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  createOrder,
  initiatePayment,
} from "../services/operations/subscription";
import { useSelector } from "react-redux";

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { user } = useSelector((state) => state.auth);

  // Subscription plans
  const plans = [
    { id: 1, type: "Basic", totalAmount: 1000 },
    { id: 2, type: "Plus", totalAmount: 2000 },
    { id: 3, type: "Premium", totalAmount: 3000 },
  ];

  // Subscription handler
  const handleSubscribe = async (plan) => {
    try {
      setSelectedPlan(plan);

      // Backend order creation
      const orderId = await createOrder(plan.totalAmount, user?.token);

      // Initiate payment with Razorpay
      await initiatePayment(plan.type, plan.totalAmount, orderId, user?.token);

      toast.success("Payment initiated. Please complete the payment.");
    } catch (error) {
      console.error("Error in subscription process:", error);
      toast.error("Subscription failed. Please try again.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Choose Your <span className="text-blue-500">Subscription Plan</span>
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Get access to exclusive features and content with our subscription
        plans.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative border rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
              selectedPlan?.id === plan.id
                ? "border-blue-500"
                : "border-gray-200"
            }`}
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                {plan.type}
              </h2>
              <p className="text-lg text-gray-500 mt-2">
                ₹{plan.totalAmount.toLocaleString()} / year
              </p>
              {plan.id === 3 && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white px-2 py-1 text-xs rounded">
                  Best Value
                </span>
              )}
              <button
                onClick={() => handleSubscribe(plan)}
                className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg mt-6 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
