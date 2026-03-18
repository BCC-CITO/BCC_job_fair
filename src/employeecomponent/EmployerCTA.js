import React from "react";
import { Sparkles } from "lucide-react";

export default function EmployerCTA() {
  return (
    <section className="bg-slate-50 py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gradient Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-black via-slate-900 to-blue-900 text-white py-16 px-8 text-center shadow-lg">

          {/* Glow background */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute -left-24 top-10 h-72 w-72 bg-blue-600 blur-3xl rounded-full"></div>
            <div className="absolute -right-24 bottom-10 h-72 w-72 bg-orange-500 blur-3xl rounded-full"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Icon */}
            <div className="flex justify-center mb-4">
              <Sparkles size={26} />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Streamline Your Hiring Journey?
            </h2>

            {/* Description */}
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Join thousands of companies already using our platform to find
              and hire the best talent faster than ever before.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">

              <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition">
                Create Employer Account →
              </button>

              <button className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-700 transition">
                Explore Pricing
              </button>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">

              <div>
                <p className="text-xl font-semibold">10,000+</p>
                <p className="text-gray-400 text-sm">Active employers</p>
              </div>

              <div>
                <p className="text-xl font-semibold">500,000+</p>
                <p className="text-gray-400 text-sm">Qualified candidates</p>
              </div>

              <div>
                <p className="text-xl font-semibold">3x faster</p>
                <p className="text-gray-400 text-sm">Time to hire</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}