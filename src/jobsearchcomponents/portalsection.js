import React from "react";
import { User, Building2, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const portals = [
  {
    title: "Candidate Portal",
    icon: <User size={28} />,
    description: "Find your dream job and showcase your skills",
    points: [
      "Create professional profile",
      "Upload resume & get parsed",
      "Browse job opportunities",
      "Book interview slots",
      "Stall navigation for physical fairs",
    ],
    login: "/candidate",
    register: "/register",
  },
  {
    title: "Employer Portal",
    icon: <Building2 size={28} />,
    description: "Find the right talent for your organization",
    points: [
      "Post job vacancies",
      "Smart candidate matching",
      "Schedule interviews",
      "Manage applications",
      "Real-time chat with candidates",
    ],
    login: "/employer",
    register: "/register",
  },
  {
    title: "Admin Portal",
    icon: <Shield size={28} />,
    description: "Manage events and monitor platform activity",
    points: [
      "Event management",
      "User approval workflows",
      "Analytics & reporting",
      "Stall allocation",
      "Stakeholder feedback",
    ],
    login: "/admin",
    register: "/admin-apply",
  },
];

const PortalSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-2">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Choose Your Portal
        </h2>

        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Select your role to access the relevant dashboard
        </p>

        <p className="mt-2 text-sm text-gray-500">
          New user?{" "}
          <Link to="/registerjobfair" className="text-indigo-600 font-medium">
            Create your account here
          </Link>
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
            >

              {/* ICON */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-500 text-white">
                  {portal.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-gray-800">
                {portal.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-500 mt-2">
                {portal.description}
              </p>

              {/* LIST */}
              <ul className="text-sm text-gray-500 mt-4 space-y-1 text-left">
                {portal.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  to={portal.login}
                  className="w-full text-center bg-indigo-900 text-white py-2 rounded-full hover:bg-indigo-800 transition"
                >
                  Login {portal.title}
                </Link>

                <Link
                  to={portal.register}
                  className="w-full text-center border border-indigo-300 text-indigo-700 py-2 rounded-full hover:bg-indigo-50 transition"
                >
                  {portal.title === "Admin Portal"
                    ? "Apply for Admin Access"
                    : "New? Register Here"}
                </Link>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PortalSection;