"use client";
import React from "react";
import ReviewCard from "./ReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const CustomerReview = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1700 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    smdesktop: {
      breakpoint: { max: 1700, min: 1435 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    xsmdesktop: {
      breakpoint: { max: 1435, min: 1180 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1180, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    smmobile: {
      breakpoint: { max: 464, min: 150 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="bg-[#EAE8E2] w-full flex">
      <div className="h-[870px] container mx-auto ">
        <h1 className="text-center text-[#171717] leading-[53.33px] text-[44px] font-libre-franklin font-extrabold mt-[100px]">
          Customers love us
        </h1>
        <div className="mt-[50px] w-full">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            <div className="w-fit flex justify-between gap-x-6 ml-28">
              {[1, 2, 3].map((items, index) => {
                return <ReviewCard index={index} />;
              })}
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
