import React from "react";
import { Sparkles } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 md:py-24 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] sm:w-[800px] md:w-[1000px] h-[300px] sm:h-[350px] md:h-[420px] 
        bg-gradient-to-r from-blue-700 via-red-500 to-blue-700 blur-[140px] opacity-40"></div>
      </div>

      {/* content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <Sparkles className="mx-auto mb-4 sm:mb-6" size={32} />

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Ready to Transform Your Career?
        </h2>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
          Join thousands of professionals who have already started their journey with SkillPortal.
        </p>

        <button className="bg-gray-900 border border-gray-600 px-6 sm:px-8 py-2.5 sm:py-3 
        rounded-full hover:bg-white hover:text-black transition">
          Get Started Today →
        </button>

      </div>
    </section>
  );
}