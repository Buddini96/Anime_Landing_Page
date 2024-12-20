import React from "react";
import Hero from "./Hero/Hero";

const Home = () => {
  return (
    <div className="overflow-hidden h-screen bg-[url('/images/background.png')] bg-cover bg-center">
      <Hero />
    </div>
  );
};

export default Home;
