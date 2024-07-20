import React from "react";
import { FaTruck, FaPhoneAlt, FaBox, FaSmile } from "react-icons/fa";

const Service = () => {
  return (
    <div>
      <div className="container mx-auto p-4 bg-gray-200 my-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-red-600">
          <div className="flex flex-col items-center text-center p-4">
            <FaTruck className="text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">
              Free <br />
              Shipping
            </h2>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FaPhoneAlt className="text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">
              Give Us
              <br /> A Call
            </h2>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FaBox className="text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">
              Bulk
              <br /> Inquiry
            </h2>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <FaSmile className="text-4xl" />
            <h2 className="mt-4 text-lg font-semibold">
              Quality
              <br /> Assurance
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
