"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const reviewData = [
    {
      name: "Sakura Tanaka",
      review:
        "This site has transformed my anime-watching experience! The HD quality and the vast collection of titles are unmatched. It's like a dream come true for anime fans!",
        title: "Manga Illustrator",
        image: "/images/c1.png", 
    },
    {
      name: "Alex Carter",
      review:
        "I love how easy it is to navigate the site. The personalized recommendations are spot-on, and I always find hidden gems I wouldn’t have discovered otherwise.",
        title: "Software Developer",
        image: "/images/c2.png", 
    },
    {
      name: "Haruto Yamamoto",
      review:
        "The streaming quality is superb, and the subtitles are accurate. This platform is a haven for anime enthusiasts looking for a seamless experience.",
        title: "Anime Critic",
        image: "/images/c1.png", 
    },
    {
      name: "Mia Johnson",
      review:
        "This site feels like a one-stop shop for all my anime needs. From classics to the latest episodes, it has everything I could ever want.",
        title: "Digital Marketer",
        image: "/images/c2.png", 
    },
  ];
  

const Review = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What clients say about us
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite
          responsive={responsive}
          showDots
        >
          {reviewData.map((review) => (
            <ReviewCard 
            key={review.name}
            name={review.name} 
            image={review.image} 
            review={review.review}
            title={review.title}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
