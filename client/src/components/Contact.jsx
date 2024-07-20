import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ahifqa8",
        "template_gs8ogdn",
        formData,
        "q9U-M8248MRhwfK59"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div>
        <p className="uppercase text-3xl text-center my-10 font-bold text-gray-800">
          Contact Us
        </p>
      </div>
      <iframe
        title="Toy store"
        className="w-full h-[50vh] mb-8"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117362.53571586985!2d77.437414!3d23.185552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4397df517e3f%3A0xb0a2c4bc624133d6!2sToy%20Station!5e0!3m2!1sen!2sin!4v1721410096926!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="grid gap-8 lg:grid-cols-2 py-10 items-center max-w-7xl mx-auto p-4 bg-white shadow-lg rounded-lg">
        {/* Image Section */}
        <div className="hidden lg:block">
          <img
            src="https://toy-store-iota-seven.vercel.app/static/media/logo.005889aa89ca5943c0c7.png" // Replace with your image URL
            alt="Contact Us"
            className="w-full pl-5 h-[500px] object-cover "
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-blue-900 p-6 w-full max-w-lg mx-auto lg:mx-0 rounded shadow"
        >
          <div className="text-white border-l-4 border-white pl-4 mb-4">
            <p className="text-3xl font-bold">Contact Us</p>
            <p className="text-sm mt-2">
              Kindly fill the form, our team will get back to you.
            </p>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-12 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Requirement"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full h-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-green-500 text-xl text-white font-medium rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
