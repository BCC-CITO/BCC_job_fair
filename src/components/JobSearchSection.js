import React from "react";

const JobSearchSection = () => {
  return (
    <div className="w-full flex justify-center py-10 bg-white mt-4 sm:mt-5 md:mt-5 lg:mt-5">
      <div className="max-w-4xl w-full flex flex-col items-center text-center px-4">

        {/* SECTION 1 — Title */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Find Your Dream Job</h2>
          <p className="text-gray-500 mt-2">
            Search thousands of job opportunities from top companies
          </p>
        </div>

        {/* SECTION 2 — Search Bar */}
        <div className="w-full mt-8">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-lg px-4 py-3 gap-4">

            {/* Skill Input */}
            <div className="flex items-center flex-1 gap-2 px-3">
              <span className="text-gray-400 text-xl">🔍</span>
              <input
                type="text"
                placeholder="Enter skills / designations / companies"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>

            {/* Experience Dropdown */}
            <select className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer">
              <option value="">Select experience</option>
              <option value="0-1">0–1 Years</option>
              <option value="1-3">1–3 Years</option>
              <option value="3-5">3–5 Years</option>
              <option value="5-10">5–10 Years</option>
              <option value="10+">10+ Years</option>
            </select>

            {/* Divider */}
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>

            {/* Location Dropdown */}
            <select className="flex-1 outline-none text-gray-700 bg-transparent cursor-pointer">
              <option value="">Enter location</option>
              <option>Tamil Nadu</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Telangana</option>
              <option>Andhra Pradesh</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Gujarat</option>
              <option>Rajasthan</option>
            </select>

            {/* Search Button */}
            <button className="bg-indigo-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>

        {/* SECTION 3 — 3 Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <button className="px-6 py-2 border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50">
            I'm a Job Seeker
          </button>

          <button className="px-6 py-2 border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50">
            I'm an Employer
          </button>

          <button className="px-6 py-2 border border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-50">
            I'm an Institute
          </button>
        </div>

      </div>
    </div>
  );
};

export default JobSearchSection;