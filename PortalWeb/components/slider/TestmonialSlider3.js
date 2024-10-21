"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
  },
};
export default function TestimonialSlider3() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        className="single-item-carouse mwp_80 b_radius_5"
      >
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item p_20">
          <div className="testimonial-block-one">
            <div className="inner-box">
              <div className="icon-box">
                <i className="icon-23"></i>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia coequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
