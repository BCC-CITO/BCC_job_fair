import React from 'react';

const ContactHero = () => {
  // 1. Image is now hardcoded to match HeroCarousel_job.js 

  return (
    <section className="relative w-full h-[50vh] md:h-[40vh] mb-10 flex items-center justify-center overflow-hidden transition-all duration-500">
      
      {/* STATIC BACKGROUND IMAGE (Matched to HeroCarousel) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/hero-handshake.jpg')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Main Heading - Responsive text size */}
        <h1 className="text-white font-bold mb-4
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          tracking-tight leading-tight">
          Contact Us
        </h1>

        {/* Subheading - Responsive text size */}
        <p className="text-gray-200 font-light mx-auto max-w-xs sm:max-w-none
          text-base sm:text-lg md:text-xl lg:text-2xl">
          We would love to hear from you.
        </p>
        
      </div>
    </section>
  );
};

export default ContactHero;