// Import Swiper React components

import Slider1 from "../assets/slider.jpg";
import Slider2 from "../assets/Slider1.jpg";
import Slider3 from "../assets/Slider2.jpg";
import Slider4 from "../assets/Slider4.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/style.css";

// import required modules
import { Pagination } from "swiper/modules";

export default () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="relative">
        {/* <h5 className="absolute left-20 text-white font-bold text-3xl">
          Salman
        </h5> */}
        <div className="absolute left-20 text-left max-w-lg text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Discover Nature's Wonders
          </h1>
          <p class="text-lg md:text-2xl mb-6">
            Your eco-adventure awaits with breathtaking views and sustainable
            experiences.
          </p>
          <a
            href="#explore"
            class="bg-white text-green-700 px-6 py-3 text-lg rounded shadow hover:bg-green-600 hover:text-white transition duration-300"
          >
            Start Your Journey
          </a>
        </div>
        <img src={Slider1} alt="Slider1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute left-20 text-left max-w-lg text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">Explore the Wild</h1>
          <p class="text-lg md:text-2xl mb-6">
            Sustainable journeys for the adventurer in you.
          </p>
          <a
            href="#learn-more"
            class="bg-white text-blue-700 px-6 py-3 text-lg rounded shadow hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Learn More
          </a>
        </div>
        <img src={Slider2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute left-20 text-left max-w-lg text-white">
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Eco-Exploration Redefined
          </h1>
          <p class="text-lg md:text-2xl mb-6">
            Connect, protect, and adventure with purpose.
          </p>
          <a
            href="#join"
            class="bg-white text-yellow-700 px-6 py-3 text-lg rounded shadow hover:bg-yellow-600 hover:text-white transition duration-300"
          >
            Join Now
          </a>
        </div>
        <img src={Slider3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="absolute left-20 text-left max-w-lg text-white">
          <h1 class="text-5xl md:text-7xl font-extrabold mb-4">
            Reach New Heights
          </h1>
          <p class="text-lg md:text-xl mb-6">
            Adventure awaits at every peak. Are you ready?
          </p>
          <a
            href="#learn"
            class="bg-blue-500 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
        <img src={Slider4} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
