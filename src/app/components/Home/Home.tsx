'use client'
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import WhyChoose from "./WhyChoose/WhyChoose";
import AnalyticFeatures from "./AnalyticFeatures/AnalyticFeatures";
import MostPopular from "./MostPopular/MostPopular";
import Review from "./Review/Review";
import Price from "./Price/Price";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
       AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease',
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();
  },[])

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
