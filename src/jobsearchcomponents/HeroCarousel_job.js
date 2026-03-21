import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Connect Talent with Opportunity",
    highlight: "Opportunity",
    description:
      "India's most comprehensive job portal supporting both virtual and physical job fairs.",
  },
  {
    title: "Hire Smarter, Faster",
    highlight: "Faster",
    description:
      "Employers can discover top talent, schedule interviews, and manage hiring seamlessly.",
  },
  {
    title: "Empowering Careers & Companies",
    highlight: "Careers",
    description:
      "Bridging the gap between skilled candidates and leading organizations across India.",
  },
];

const HeroSectionjob = () => {
  const [current, setCurrent] = useState(0);

  // AUTO CHANGE CONTENT
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[50vh] md:h-[40vh] mb-10 flex items-center justify-center">

      {/* STATIC BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Assets/hero-handshake.jpg')",
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl transition-all duration-700">

        {/* HEADING */}
        <h1 className="text-white font-bold leading-tight text-3xl sm:text-4xl md:text-6xl">
          {slide.title.split(slide.highlight)[0]}
          <span className="text-indigo-400">{slide.highlight}</span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
          {slide.description}
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