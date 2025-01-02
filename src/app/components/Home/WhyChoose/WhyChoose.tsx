
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {

  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you choose this application?
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {/* Each card directly inside the grid container */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
        <WhyChooseCard 
          image="/images/camera.png"
          title="High-Quality Streaming"
          description="Enjoy your favorite anime in full HD with smooth and uninterrupted streaming."
          linkText="Learn more"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
        <WhyChooseCard 
          image="/images/earth.png"
          title="Global Availability"
          description="Watch anime from anywhere, anytime, with our worldwide accessibility."
          linkText="Discover global availability"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
        <WhyChooseCard 
          image="/images/bookmark.png"
          title="Personalized Watchlists"
          description="Save your favorite anime and episodes for easy access and continued watching."
          linkText="Find out"
        />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="300">
        <WhyChooseCard 
          image="/images/flash.png"
          title="Lightning-Fast Performance"
          description="Experience fast load times and a seamless interface optimized for anime lovers."
          linkText="Explore features"
        />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
