import React from "react";
import Slider from "../components/Slider";
import Service from "../components/Service";
import Character from "../components/Character";
import Slider2 from "../components/Slider2";
import Subscription from "../components/Subscription";
import Contact from "../components/Contact";
import Footer from "../components/footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div className="mt-[82px]">
        <Slider />
        <Service />
        <Character />
        <Slider2 />
        <Subscription />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
