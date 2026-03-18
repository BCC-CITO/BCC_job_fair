import React from "react";
import { Clock } from "lucide-react";

export default function EmployerBoundaries() {

  const boundaries = [
    {
      months: "3 months",
      description: "Standard restriction period"
    },
    {
      months: "6 months",
      description: "Recommended for most positions"
    },
    {
      months: "12 months",
      description: "Extended period for senior roles"
    }
  ];

  return (
    <section className="bg-slate-50 py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Set Smart Boundaries
          </h2>

          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Avoid repetitive applications and protect recruiter time.
          </p>

        </div>


        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {boundaries.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-8 text-center hover:shadow-md transition"
            >

              {/* Icon */}
              <div className="flex justify-center mb-4">

                <div className="bg-indigo-600 text-white p-3 rounded-lg">
                  <Clock size={20} />
                </div>

              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900">
                {item.months}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-1">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}