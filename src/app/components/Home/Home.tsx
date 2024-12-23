import React from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticFeatures from "./AnalyticFeatures/AnalyticFeatures";
import MostPopular from "./MostPopular/MostPopular";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="overflow-hidden bg-[url('/images/Frame.png')] bg-contain bg-center bg-repeat">
      <Hero />
      <WhyChoose />
      <AnalyticFeatures />
      <MostPopular />
      <Review />
    </div>
  );
};

export default Home;
