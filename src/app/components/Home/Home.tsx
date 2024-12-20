import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center bg-repeat-y">
      <Hero />
      <WhyChoose />
    </div>
  );
};

export default Home;
