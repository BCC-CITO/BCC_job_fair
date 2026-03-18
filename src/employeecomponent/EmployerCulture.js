import React from "react";
import { Building2, Star, Share2, Bell } from "lucide-react";

export default function EmployerCulture() {
  const features = [
    {
      icon: <Building2 size={20} />,
      title: "Customizable Company Profile",
      description:
        "Showcase your company culture, values, and employee testimonials to attract top talent."
    },
    {
      icon: <Star size={20} />,
      title: "Featured Employer Placement",
      description:
        "Get premium visibility with featured placement and job promotion opportunities."
    },
    {
      icon: <Share2 size={20} />,
      title: "Social Media Integration",
      description:
        "Share jobs across all social platforms with one click and track engagement."
    },
    {
      icon: <Bell size={20} />,
      title: "Personalized Job Alerts",
      description:
        "Send targeted job alerts to ideal candidates based on their profile and preferences."
    }
  ];

  return (
    <section className="bg-slate-50 py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Showcase Your Culture, Attract Top Talent
          </h2>

          <p className="text-gray-500 mt-2 text-base md:text-lg">
            Make your company stand out to candidates actively searching.
          </p>

        </div>


        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white border rounded-xl p-6 hover:shadow-md transition"
            >

              {/* Icon */}
              <div className="bg-indigo-600 text-white p-3 rounded-md h-fit">
                {feature.icon}
              </div>

              {/* Content */}
              <div>

                <h3 className="font-semibold text-gray-900 mb-1">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}