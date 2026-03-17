import React from "react";

const HeroSectionjob = () => {
  return (
    <section className="relative w-full h-[50vh] md:h-[40vh] mb-10 flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Assets/hero-handshake.jpg')", // replace with your image path
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl">

        {/* HEADING */}
        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl">
          Connect Talent with{" "}
          <span className="text-indigo-400">Opportunity</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          India's most comprehensive job portal supporting both virtual and
          physical job fairs. Empowering candidates, employers, and organizers
          with smart recruitment solutions.
        </p>

        {/* BUTTON */}
        <div className="mt-6">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300">
            Get Started - It's Free
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSectionjob;