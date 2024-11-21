import React, { useState } from 'react';
import Navbar from '../components/pure-frontend/Navbar/Navbar';
import { useSelector } from 'react-redux';
import QuantityBox from '../components/QuantityBox';
import AddressModal from '../components/Address';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BuyProduct } from '../services/operations/orderMultiple';

function Cart() {
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressData, setAddressData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
const {token,user} = useSelector(state=>state.auth)
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddressSubmit = (addressData) => {
    setAddressData(addressData); // Store the address data
    const payable = total; // Assuming the total price is the payable amount

    // Call BuyProduct with necessary data
    BuyProduct(token, cart, addressData, payable, user, navigate, dispatch);
  };

  return (
    <div>
      <Navbar />

      {/* Cart Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Your Cart</h2>
        <div className="space-y-6">
          {/* Cart Items */}
          {cart && cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.product._id} className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center">
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium">{item.product.title}</h3>
                    <p className="text-sm text-gray-500">Price: ₹{item.product.price}</p>
                  </div>
                </div>

                <QuantityBox itemId={item.product._id} itemQuantity={item.quantity} />
              </div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-500">Your cart is empty.</div>
          )}
        </div>

        {/* Total Section */}
        {cart && cart.length > 0 && (
          <>
            <div className="flex items-center justify-between mt-6">
              <span className="text-lg font-medium">Total Items:</span>
              <span className="text-xl font-bold">{totalItems}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-medium">Total Price:</span>
              <span className="text-xl font-bold">₹{total}</span>
            </div>
            {/* Checkout Button */}
            <div className="mt-8 text-center">
              <button
                onClick={openModal}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      {/* Address Modal */}
      <AddressModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleAddressSubmit} />
    </div>
  );
}

export default Cart;
