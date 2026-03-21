import React from "react";
import { User, Building2, Shield } from "lucide-react";

const features = [
  {
    icon: <User size={28} />,
    title: "For Candidate",
    desc: "Update profile, apply for jobs, attend physical job fairs, and connect with top employers.",
  },
  {
    icon: <Building2 size={28} />,
    title: "For Employer",
    desc: "Post jobs, browse candidates, participate in job fairs, and streamline your hiring process.",
  },
  {
    icon: <Shield size={28} />,
    title: "For Organizers",
    desc: "Manage large-scale job fairs, handle registrations, and track event performance with comprehensive tools.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-gray-50 py-16 px-2">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Bharat Careerconnect
        </h2>

        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Comprehensive features for all stakeholders
        </p>

        {/* FEATURES GRID */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >

              {/* ICON */}
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-500 text-white mb-4 shadow-md">
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-2 text-gray-500 text-sm max-w-xs">
                {item.desc}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;