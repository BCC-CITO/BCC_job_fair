import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroCarousel() {
  const slides = [
    {
      image: "/images/hero.jpg",
      title: "Find Your Perfect Job Match",
      description:
        "Connect with top employers, build your skills, and accelerate your career growth with our comprehensive job portal platform."
    },
    {
      image: "/images/hero.jpg",
      title: "Build Skills. Get Hired.",
      description:
        "Explore verified opportunities, internships, and training programs across industries."
    },
    {
      image: "/images/hero.jpg",
      title: "Start Your Career Journey",
      description:
        "Join thousands of professionals finding the right opportunities."
    }
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  const next = () =>
    setIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      {/* Background */}
      <img
        src={slides[index].image}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {slides[index].title}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl opacity-90 mb-8">
          {slides[index].description}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition">
            Get Started Today →
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-900 transition">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Right arrow */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow"
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}