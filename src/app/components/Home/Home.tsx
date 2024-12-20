import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticFeatures from "./AnalyticFeatures/AnalyticFeatures";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[url('/images/background.png')] bg-cover bg-center">
      <Hero />
      <WhyChoose />
      <AnalyticFeatures />
    </div>
  );
};

export default Home;
