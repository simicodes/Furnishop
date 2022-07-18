import React from "react";

//import swiper react components >>>>>> Swiper is a JavaScript library that creates modern touch sliders with hardware-accelerated transitions
//Swiper is a very useful library with introducing functions about swipe, like pagination, navigation, and have various features.
import { Swiper, SwiperSlide } from "swiper/react";

//import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

//import required modules
import { Autoplay, Navigation } from "swiper";

//import data
import { testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
    >
      {testimonial.persons.map((person, index) => {
        //destructure persons
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center gap-x-5 mb-9">
                {/* avatar */}
                <img src={avatar.type} alt="/" />
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
              </div>
              {/* text */}
              <div className="text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
