import React from "react";
import PriceCard from "./PriceCard";

function Price() {
  const priceData = [
    {
      plan: "Basic",
      price: 15,
    },
    {
      plan: "Standard",
      price: 45,
    },
  ];

  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Meet exciting Pricing Plans
      </h1>
      <div className="w-[90%] md:w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {priceData.map((price, index) => (
          <div
            key={price.plan}
            data-aos={index === 0 ? "fade-up" : "fade-up"}
            data-aos-anchor-placement="top-center"
            data-aos-delay={index === 1 ? "100" : "0"}
          >
            <PriceCard plan={price.plan} price={price.price} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;
