import { FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

export default function ConnectWithUs() {
  return (
    <div className="w-full bg-white py-12 px-4 mt-10 sm:mt-10 md:mt-10 lg:mt-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

    {/* All inside content remains unchanged */}

        {/* TITLE SECTION */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Connect With Us</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Stay updated with the latest opportunities, share your success stories, and connect with our growing community
          </p>
        </div>

        {/* TOP GRID — ANALYTICS + EVENTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LIVE ANALYTICS CARD */}
          <div className="bg-[#F8FAFC] rounded-2xl shadow-sm border p-6 flex flex-col gap-4">

            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-xl">📊</span> Live Analytics
            </h3>

            <h1 className="text-4xl font-extrabold text-indigo-900">89,547</h1>
            <p className="text-gray-600 text-sm -mt-2">Total Visitors Today</p>

            <div className="flex justify-center gap-10 mt-3">
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900">1,234</h4>
                <span className="text-gray-500 text-xs">Online Now</span>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900">567</h4>
                <span className="text-gray-500 text-xs">New Users</span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full mt-4">
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-indigo-700 rounded-full w-[73%]"></div>
              </div>
              <p className="text-gray-500 text-xs mt-2 text-center">
                73% increase from yesterday
              </p>
            </div>
          </div>

          {/* UPCOMING EVENTS CARD */}
          <div className="bg-[#F8FAFC] rounded-2xl shadow-sm border p-6">

            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <span className="text-xl">📅</span> Upcoming Events
            </h3>

            {/* EVENT LIST */}
            <div className="flex flex-col gap-4 mt-3">

              {/* Event 1 */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Job Fair</h4>
                  <p className="text-gray-500 text-xs">Virtual Job Fair – Tech Sector</p>
                  <span className="text-indigo-700 text-xs">500+ registered</span>
                </div>
                <p className="text-gray-500 text-xs">March 15, 2024</p>
              </div>

              {/* Event 2 */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Training</h4>
                  <p className="text-gray-500 text-xs">Skill Development Webinar</p>
                  <span className="text-indigo-700 text-xs">1.2K registered</span>
                </div>
                <p className="text-gray-500 text-xs">March 20, 2024</p>
              </div>

              {/* Event 3 */}
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Networking</h4>
                  <p className="text-gray-500 text-xs">Employer Networking Event</p>
                  <span className="text-indigo-700 text-xs">200+ companies</span>
                </div>
                <p className="text-gray-500 text-xs">March 25, 2024</p>
              </div>
            </div>

            {/* View Events Button */}
            <div className="mt-6 w-full">
              <button className="w-full bg-white border border-gray-300 rounded-full py-2 text-sm hover:bg-gray-100">
                View All Events
              </button>
            </div>
          </div>

        </div>

        {/* SHARE PLATFORM CARD */}
        <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-2xl shadow p-8 text-center text-white">

          <h3 className="text-xl font-semibold">Share This Platform</h3>
          <p className="text-sm text-indigo-100 mt-1">
            Help others discover career opportunities
          </p>

          {/* Share Button */}
          <button className="mt-6 w-full sm:w-[50%] mx-auto bg-white/10 border border-white rounded-full py-2 text-sm hover:bg-white hover:text-indigo-900 transition">
            Share
          </button>
        </div>

        {/* SOCIAL MEDIA GRID */}
        {/* SOCIAL MEDIA GRID */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@Bharat_Career_Connect"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <FaYoutube className="text-red-600 text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">YouTube</h4>
    <p className="text-gray-900 text-lg font-bold">125K</p>
    <p className="text-gray-500 text-xs">Career Tips & Success Stories</p>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/bharat-career-connect/about/?viewAsMember=true"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <FaLinkedin className="text-blue-600 text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">LinkedIn</h4>
    <p className="text-gray-900 text-lg font-bold">89K</p>
    <p className="text-gray-500 text-xs">Professional Networking</p>
  </a>

  {/* Twitter / X */}
  <a
    href="https://x.com/B_C_Connect"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <FaXTwitter className="text-black text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">Twitter / X</h4>
    <p className="text-gray-900 text-lg font-bold">67K</p>
    <p className="text-gray-500 text-xs">Industry Updates & News</p>
  </a>

  {/* Facebook */}
  <a
    href="https://facebook.com/profile.php?id=61587124889046"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <FaFacebook className="text-blue-600 text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">Facebook</h4>
    <p className="text-gray-900 text-lg font-bold">94K</p>
    <p className="text-gray-500 text-xs">Community & Events</p>
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/bharat_career_connect"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <FaSquareInstagram className="text-pink-500 text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">Instagram</h4>
    <p className="text-gray-900 text-lg font-bold">52K</p>
    <p className="text-gray-500 text-xs">Behind the Scenes</p>
  </a>

  {/* WhatsApp */}
  <a
    href="https://whatsapp.com/channel/0029VbCVoY9EVccC9lNi372d"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white border rounded-xl p-6 text-center shadow-sm block"
  >
    <BsWhatsapp className="text-green-600 text-3xl mx-auto" />
    <h4 className="font-semibold mt-2">WhatsApp</h4>
    <p className="text-gray-900 text-lg font-semibold">Active</p>
    <p className="text-gray-500 text-xs">Instant Job Alerts</p>
  </a>

</div>

      </div>
    </div>
  );
}