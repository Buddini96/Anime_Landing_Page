import React from "react";
import { FaCheck } from "react-icons/fa6";

type priceProps = {
  price: number;
  plan: string;
};

function PriceCard({ price, plan }: priceProps) {
  const priceFeatures = [
    { feature: "Ad-Free Streaming" },
    { feature: "HD and 4K Quality" },
    { feature: "Exclusive Anime Titles" },
    { feature: "Offline Downloads" },
    { feature: "Multi-Language Subtitles" },
    { feature: "Exclusive Discounts" },
  ];

  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <p className="mt-3 text-xl font-semibold text-[#E93306] text-center">
        {plan} Plan
      </p>
      <div className="font-medium text-3xl mt-4 text-center">
        $ <span className="text-5xl font-bold">{price}</span>/mo
      </div>
      <p className="mt-2 text-gray-600 text-center">Per user</p>
      <div className="mt-10">
        {priceFeatures.map((item, index) => (
          <div
            key={index}
            className="text-center mb-4 flex items-center space-x-3"
          >
            <div className="text-center w-8 h-8 bg-gray-300 rounded-full justify-center flex items-center flex-col">
              <FaCheck className="text-green-500" />
            </div>
            <p className="text-sm font-semibold text-gray-700">
              {item.feature}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="block w-full p-3 text-base md:text-lg text-white font-bold bg-gradient-to-r from-[#F86401] via-[#E93306] via-[#F86401] to-[#FFA500] hover:from-[#FF5733] hover:via-[#FFA500] hover:to-[#FFD700] transition-all duration-300 ">Start 14 Days Free Trail</button>
      </div>
    </div>
  );
}

export default PriceCard;
