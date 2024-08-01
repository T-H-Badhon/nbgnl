"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiMiniChevronLeft } from "react-icons/hi2";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute top-[34%] right-0 hidden sm:block">
      <div onClick={onClick} className="z-10 w-12 overflow-hidden rotate-180 ">
        <div className=" w-8 h-[30px] relative top-2.5 -left-[12px] bg-transparent border-bodyBg  border-b-[10px] border-s-[12px] rounded-bl-full"></div>
        <span>
          <HiMiniChevronLeft className="w-12 h-12 bg-bodyBg p-3 rounded-e-xl" />
        </span>
        <div className=" w-8 h-[30px] relative -top-2.5 -left-[12px] bg-transparent border-bodyBg  border-t-[10px] border-s-[12px] rounded-ss-full"></div>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const {className,style, onClick } = props;
  return (

    <div
      className="absolute top-[34%] z-50 hidden sm:block"
      onClick={onClick}
    >
      <div onClick={onClick} className="z-50 w-12 overflow-hidden ">
        <div className=" w-8 h-[30px] relative top-2.5 -left-[12px] bg-transparent border-bodyBg  border-b-[10px] border-s-[12px] rounded-bl-full"></div>
        <span>
          <HiMiniChevronLeft className="w-12 h-12 bg-bodyBg p-3 rounded-e-xl" />
        </span>
        <div className=" w-8 h-[30px] relative -top-2.5 -left-[12px] bg-transparent border-bodyBg  border-t-[10px] border-s-[12px] rounded-ss-full"></div>
      </div>
    </div>
  );
}

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container my-6">
      <Slider {...settings}>
      <div>
        <video
          className="w-full max-h-[400px] z-0 object-cover rounded-2xl"
          src="https://www.w3schools.com/tags/movie.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div>
        <video
          className="w-full max-h-[400px] z-0 object-cover rounded-2xl"
          src="https://www.w3schools.com/tags/movie.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div>
        <video
          className="w-full max-h-[400px] z-0 object-cover rounded-2xl"
          src="https://www.w3schools.com/tags/movie.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </Slider>
    
    </div>
  );
};

export default HomeSlider;
