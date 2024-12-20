import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  title: string;
  image: string;
  description: string;
  linkText: string;
};

const WhyChooseCard = ({ image, title, description, linkText }: Props) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-xl"
    // style={{
    //     boxShadow: "1px 3px 5px #FFFFFF, 4px 4px 2px rgba(13, 29, 10, 0.1)",
    //   }}
      >
      <Image
        src={image}
        alt={title}
        width={50}
        height={50}
        className="object-contain mx-auto"
      />
      <h1 className="text-center lext-lg mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        {description}
      </p>
      <p className="text-center font-semibold cursor-pointer flex items-center justify-center hover:text-[#E93306] transition-all duration-200">
        {linkText}
        <FaArrowRightLong className="w-4 h-4 ml-1hover:text-[#E93306] transition-all duration-200" />
      </p>
    </div>
  );
};

export default WhyChooseCard;
