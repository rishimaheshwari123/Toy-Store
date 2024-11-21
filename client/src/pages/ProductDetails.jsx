import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/pure-frontend/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { createOrder, initiatePayment } from "../services/operations/order";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import { getSingleUserApi } from "../services/operations/admin";
import { addToCart, removeFromCart } from "../redux/cartSlice";
const ProductDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1); // Quantity state
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [subscription, setSubscription] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const getSubscriptionDetails = async () => {
    try {
      const response = await getSingleUserApi(user?._id);
      setSubscription(response);
    } catch (error) {
      console.error("Error fetching subscription details:", error);
    }
  };

  const calculateDiscount = () => {
    let discount = 0;
    if (subscription?.subscriptions?.[0]?.type === "Basic") {
      discount = 0.05;
    } else if (subscription?.subscriptions?.[0]?.type === "Plus") {
      discount = 0.1;
    } else if (subscription?.subscriptions?.[0]?.type === "Prime") {
      discount = 0.15;
    }

    const total = news?.price * quantity;
    const discountedTotal = total - total * discount;
    setDiscountedAmount(discountedTotal);
  };

  useEffect(() => {
    const fetchNews = async (id) => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/${id}`
        );
        // console.log(response?.data?.news?.title);
        setNews(response?.data?.news);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    console.log(subscription);
    fetchNews(id);
    getSubscriptionDetails();
  }, [id]);

  useEffect(() => {
    if (news) {
      calculateDiscount();
    }
  }, [news, quantity, subscription]);

  const handleBuyNow = () => {
    setIsModalOpen(true);
  };

  const handlePayNow = async () => {
    if (!contact || !address) {
      toast.error("Please provide contact and address.");
      return;
    }

    try {
      const totalAmount = discountedAmount;

      // Step 1: Create Order
      const orderId = await createOrder(totalAmount, user?.token);
      console.log("Order ID:", orderId);

      // Step 2: Initiate Payment
      await initiatePayment(
        id,
        contact,
        totalAmount,
        address,
        orderId,
        quantity,
        user?.token,
        news?.title
      );

      // Close modal on success
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error during payment process:", error);
      toast.error("Failed to complete the payment process.");
    }
  };

  const isProductInCart = cart.some(
    (cartItem) => cartItem.product._id === id
  );


  const handleAddToCart = () =>{
    if(news){
      dispatch(
        addToCart({
          products: news,
          quantity,
            })
      );
    }

  }

  

  if (loading) return <p>Loading...</p>;

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
                <span>Actual Price:</span> ₹{news.price}
              </p>
              <div className="mb-4">
                <label className="font-bold mr-2">Quantity:</label>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 bg-gray-300 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-2 border-t border-b">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 bg-gray-300 rounded-r"
                >
                  +
                </button>
              </div>
              {subscription?.subscriptions?.[0]?.type && (
                <p className="text-green-600 font-bold mb-2">
                  Discount ({subscription?.subscriptions?.[0]?.type}{" "}
                  Subscription): ₹
                  {(news?.price * quantity - discountedAmount).toFixed(2)}
                </p>
              )}
              <p className="text-blue-700 font-bold mb-4">
                After Discount: ₹{discountedAmount.toFixed(2)}
              </p>
              <div className=" flex justify-around">
              <a
                onClick={handleBuyNow}
                className="flex cursor-pointer justify-center text-white font-bold items-center text-xl lg:text-2xl bg-[#01AD18] p-2 pl-5 rounded-3xl py-3 mb-5 gap-3"
              >
                <FaWhatsapp size={30} />
                Book Now
              </a>
              {
                isProductInCart ?  (
                  <button 
         onClick={() => dispatch(removeFromCart(news?._id))}
              className="flex cursor-pointer justify-center text-white font-bold items-center text-xl lg:text-2xl bg-[#344ac9] p-2 pl-5 rounded-3xl py-3 mb-5 gap-3">
             Remove To Cart
              </button>
                )
                :
                (
                  <button 
              onClick={handleAddToCart}
              className="flex cursor-pointer justify-center text-white font-bold items-center text-xl lg:text-2xl bg-[#344ac9] p-2 pl-5 rounded-3xl py-3 mb-5 gap-3">
             Add To Cart
              </button>
                )
              }
            
              </div>
          
            </div>
          </div>
        ) : (
          <p>No news found</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] sm:w-[400px]">
            <h2 className="text-xl font-bold mb-4">Enter Details</h2>
            <label className="block mb-2 font-bold">Contact Number</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Enter your contact number"
            />
            <label className="block mb-2 font-bold">Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Enter your address"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handlePayNow}
                className="bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
