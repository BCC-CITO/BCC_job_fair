import React from "react";

export default function EmployerHero() {
  return (
    <section className="relative w-full h-[520px] overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/employer-hero.jpg"
        alt="Employer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 text-white">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 max-w-4xl">
          Empower Your Hiring – Smarter. <br />
          Faster. Better.
        </h1>

        <p className="max-w-2xl text-lg md:text-xl opacity-90 mb-8">
          A next-gen recruitment platform designed to streamline your hiring
          process with intelligent tools, data-driven insights, and brand-building
          features.
        </p>

        <div className="flex gap-4">

          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
            Get Started for Free
          </button>

          <button className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition">
            View Plans
          </button>

        </div>

      </div>
    </section>
  );
}