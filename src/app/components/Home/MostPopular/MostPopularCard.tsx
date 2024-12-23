import Image from "next/image";
import React from "react";

type ImgProps = {
  title: string;
  image: string;
  description: string;
};

const MostPopularCard = ({ title, image, description }: ImgProps) => {
  return (
    <div className="flex justify-center items-center">
 <div className="bg-gradient-to-r from-[#F86401] [background-size:200%_100%] via-[#F8D3A9] to-[#F8D3A9] relative w-80 h-96 rounded-xl shadow-xl overflow-hidden">
    {/* Full-size image */}
    <Image
      src={image}
      alt={title}
      layout="fill" 
      objectFit="contain" 
    />
    {/* Overlay for title and description */}
    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-5" style={{ background: 'linear-gradient(to top, #000000 50%, transparent 100%)' }}>
      <h1 className="text-white text-xl font-semibold">{title}</h1>
      <p className="text-white text-sm mt-2">{description}</p>
    </div>
  </div>
</div>

  );
};

export default MostPopularCard;
