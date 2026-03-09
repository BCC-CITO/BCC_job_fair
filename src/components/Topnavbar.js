import React from "react";
import { FiPhone, FiMail, FiBell, FiDownload } from "react-icons/fi";

const TopNavbar = () => {
  return (
    <div className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-2 py-2 gap-3 sm:flex-row justify-between px-2` py-2 gap-3 ">

        {/* LEFT: Phone + Email (always left, all screen sizes) */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-gray-700">
          <a
            href="tel:+919012345678"
            className="flex items-center gap-1 hover:text-indigo-900"
          >
            <FiPhone /> +91-9012345678
          </a>

          <a
            href="mailto:contact@bcs.com"
            className="flex items-center gap-1 hover:text-indigo-900"
          >
            <FiMail /> contact@bcs.com
          </a>
        </div>

        {/* RIGHT: Notification + Brochure (always right, all screen sizes) */}
        <div className="flex items-center gap-4">

          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <FiBell className="text-xl text-gray-800" />
            <span className="absolute -top-1 -right-2 text-xs bg-red-600 text-white rounded-full px-1">
              3
            </span>
          </div>

          {/* Download Brochure */}
          <button className="flex items-center gap-2 bg-indigo-900 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-800 transition">
            <FiDownload /> Download Brochure
          </button>
        </div>

      </div>
    </div>
  );
};

export default TopNavbar;