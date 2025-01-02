import React from "react";
import MostPopularCard from "./MostPopularCard";

const MostPopular = () => {
  const cardData = [
    {
      image: "/images/img1.png",
      title: "Haikyuu",
      description:
        "is a Japanese manga series witten and illustrated by Haruichi Furudate.",
    },
    {
      image: "/images/img2.png",
      title: "Demon Slayer",
      description:
        "Kimetsu no Yaiba is a popular anime based on a manga by Kayoharu Gotouge.",
    },
    {
      image: "/images/img3.png",
      title: "Naruto",
      description:
        "is a Japanese manga series written and illustrated by Masashi Kishimoto.",
    },
    {
      image: "/images/img5.png",
      title: "Attack on Titan",
      description:
        "A manga by Hajime Isayama, where humanity battles giant creatures called Titans.",
    },
  ];
  return (
    <div className="pt-24 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Most Popular
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {cardData.map((data, index) => (
          <div
            key={index} 
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={`${index * 100}`} 
          >
            <MostPopularCard
              id={String(index)}
              image={data.image}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
