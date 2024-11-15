import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import Service from "../components/Service";
import Character from "../components/Character";
import Slider2 from "../components/Slider2";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";
import SubscriptionPage from "../components/Subscription";
import { getSingleUserApi } from "../services/operations/admin";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [isActive, setIsActive] = useState(null);
  const { user } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const response = await getSingleUserApi(user._id);

      if (response) {
        setIsActive(response);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("Error fetching user:", error.message || error);
    }
  };

  useEffect(() => {
    if (user?._id) {
      getUser();
    }
  }, [user]);

  return (
    <div>
      <div className="mt-[82px]">
        <Slider />
        <Service />
        <Character />
        <Slider2 />
        {!isActive?.subscriptions[0]?.isActive && <SubscriptionPage />}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
