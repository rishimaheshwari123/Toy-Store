import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function AddressModal({ isOpen, onClose, onSubmit }) {
  const {user} = useSelector(state=>state.auth)
  const useraddress = user?.address ||{}
  
  const [address, setAddress] = useState(useraddress?.address);
  const [pincode, setPincode] = useState(useraddress?.pincode);
  const [city, setCity] = useState(useraddress?.city);
  const [phone, setPhone] = useState(useraddress?.phone);
  const [state, setState] = useState(useraddress?.state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addressData = { address, pincode, city, phone, state };
    onSubmit(addressData); // Pass address data to parent component to handle payment
    onClose(); // Close the modal after submitting
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-white p-8 rounded-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Enter Your Address</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Pincode</label>
            <input
              type="text"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your pincode"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your city"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full mt-2 p-2 border rounded"
              placeholder="Enter your state"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressModal;
