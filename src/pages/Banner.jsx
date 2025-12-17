import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import spoken from "/spoken.jpg";
import phyton from "/phyton.jpg";
import web from "/web.jpg";


const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="rounded-2xl shadow-lg"
      >
        <SwiperSlide>
          <img
            src={spoken}
            alt="Spoken English Practice"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={phyton}
            alt="Python for Data Analysis"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={web}
            alt="Beginner Guitar Lessons"
            className="w-full h-[300px] object-cover rounded-2xl"
          />
        </SwiperSlide>

     
      </Swiper>
    </div>
  );
};

export default Banner;
