import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  const contentSlides = [
    {
      title: "Transform Your Career with BCS",
      text: "Connect with top employers, access premium job opportunities, and accelerate your professional growth with our comprehensive career consulting platform.",
    },
    {
      title: "Your Gateway to Top Careers",
      text: "Join thousands of successful candidates who advanced their careers using our professional development tools.",
    },
    {
      title: "Empowering Talent Across India",
      text: "We help professionals find the right opportunities through our industry-aligned consulting ecosystem.",
    },
  ];

  return (
    <div className="w-full bg-white flex flex-col">

      {/* ================================
          HERO BACKGROUND (RELATIVE)
      ================================= */}
      <div
        className="relative w-full h-[360px] sm:h-[450px] md:h-[580px] bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://client-resource-assets.s3.ap-south-1.amazonaws.com/bcs/group-photo-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1B61]/95 via-[#0F1B61]/60 to-transparent"></div>

        {/* ================================
            TEXT + SWIPER
        ================================= */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

          {/* ARROWS */}
          <div className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer swiper-button-prev-custom bg-white/90 hover:bg-white text-[#0F1B61] p-2 sm:p-3 rounded-full shadow">
            <FiArrowLeft className="text-sm sm:text-xl" />
          </div>

          <div className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-50 cursor-pointer swiper-button-next-custom bg-white/90 hover:bg-white text-[#0F1B61] p-2 sm:p-3 rounded-full shadow">
            <FiArrowRight className="text-sm sm:text-xl" />
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{ delay: 9000 }}
            loop={true}
            className="w-full max-w-3xl"
          >
            {contentSlides.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="px-3 w-full flex flex-col items-center">

                  {/* TITLE */}
                  <h1
                    className="
                      font-extrabold text-white drop-shadow-lg leading-tight
                      text-lg sm:text-2xl md:text-4xl
                      max-w-[85%] sm:max-w-[70%] md:max-w-[60%]
                      break-words mx-auto
                    "
                  >
                    {item.title}
                  </h1>

                  {/* PARAGRAPH */}
                  <p
                    className="
                      text-white/90 mt-3 leading-normal
                      text-[10px] sm:text-sm md:text-lg
                      max-w-[85%] sm:max-w-[70%] md:max-w-[60%]
                      break-words mx-auto
                    "
                  >
                    {item.text}
                  </p>

                  {/* BUTTON */}
                  <button className="mt-4 px-5 sm:px-7 py-2 rounded-full border border-white text-white text-xs sm:text-sm hover:bg-white hover:text-[#0F1B61] transition">
                    Explore Jobs
                  </button>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* DOTS */}
          <div className="flex gap-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
            <span className="w-2 h-2 rounded-full bg-white/60"></span>
          </div>
        </div>
      </div>

      {/* ================================
          CARDS SECTION (RELATIVE ONLY)
      ================================= */}
      <div className="w-full flex justify-center px-4 mt-10 sm:mt-12 md:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-5xl">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-lg text-center py-5 px-6">
            <div className="text-[#0F1B61] text-3xl">👥</div>
            <h2 className="text-2xl font-bold text-[#0F1B61] mt-2">1,247</h2>
            <p className="text-gray-500 text-sm">Total Visitors Today</p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-lg text-center py-5 px-6">
            <div className="text-[#0F1B61] text-3xl">💼</div>
            <h2 className="text-2xl font-bold text-[#0F1B61] mt-2">856</h2>
            <p className="text-gray-500 text-sm">Jobs Posted</p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-lg text-center py-5 px-6">
            <div className="text-[#0F1B61] text-3xl">📈</div>
            <h2 className="text-2xl font-bold text-[#0F1B61] mt-2">2,341</h2>
            <p className="text-gray-500 text-sm">Active Users</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;