import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticFeatures from "./AnalyticFeatures/AnalyticFeatures";
import MostPopular from "./MostPopular/MostPopular";
import Review from "./Review/Review";
import Price from "./Price/Price";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[url('/images/Frame.png')] bg-contain bg-center bg-repeat">
      <Hero />
      <WhyChoose />
      <AnalyticFeatures />
      <MostPopular />
      <Review />
      <Price />
    </div>
  );
};

export default Home;
