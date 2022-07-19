import React from "react";

//import component
import TestimonialSlider from "./TestimonialSlider";

//import data
import { testimonial } from "../data";

const Testimonial = () => {
  //destructure testimonial
  const { title, image } = testimonial;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2">
          <div className="max-w-[450%] lg:max-w-[50%] ">
            {/* title */}
            <h2 className="title mb-9">{title}</h2>
            {/* slider */}
            <TestimonialSlider />
          </div>
          {/* image */}
          <div className="order-1">
            <img src={image.type} alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
