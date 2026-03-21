import React from "react";
import { Link } from "react-router-dom";

// React Icons (Feather + FontAwesome)
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

import Logo from "../Assets/logo/BCCLogo.svg";


const Footer = () => {
  return (
    <footer className="bg-[#F5F7FB] pt-14 pb-6 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* LEFT SECTION */}
        <div>
          <div className="mb-4">
            <embed src={Logo} type="application/pdf" className="h-6 w-auto" />
          </div>

          <p className="text-gray-600 text-sm mb-4">
            Connecting talent with opportunities across industries.  
            Your gateway to building successful careers and finding  
            the right talent for your organization.
          </p>

          {/* CONTACT DETAILS */}
          <div className="space-y-3 text-gray-700 text-sm">
            <div className="flex items-center gap-3">
             {/* <FiMapPin className="text-indigo-900 text-xl" /> */}
              <span>No. 1, YM Complex, 1st Floor, Jogi Colony, Madivala Check Post, Hosur Road, Koramangala, Bengaluru, Karnataka 560029</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-indigo-900 text-lg" />
              <span>+91 9986302386</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-indigo-900 text-lg" />
              <span>info@bharatcareerconnect.com</span>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-6 mt-6 text-indigo-900 text-xl">
            <a href="https://instagram.com/bharat_career_connect" target="_blank"><FaInstagram /></a>
            <a href="https://facebook.com/profile.php?id=61587124889046" target="_blank"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/bharat-career-connect/about/?viewAsMember=true" target="_blank"><FaLinkedin /></a>
            <a href="https://x.com/B_C_Connect" target="_blank"><FaTwitter /></a>
            <a href="https://www.youtube.com/@Bharat_Career_Connect" target="_blank"><FaYoutube /></a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="ml-20">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/jobs">Find Jobs</Link></li>
            <li><Link to="/post-job">Post Jobs</Link></li>
           {/* <li><Link to="/companies">Companies</Link></li>
            <li><Link to="/training">Training Centers</Link></li>
            <li><Link to="/job-fairs">Job Fairs</Link></li>
            <li><Link to="/salary">Salary Insights</Link></li> */}
          </ul>
        </div>

        {/* SUPPORT & LEGAL */}
        <div className="ml-10">
          <h3 className="text-lg font-semibold mb-4 ">Support & Help</h3>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/help-center">Help Center</Link></li>
            <li><Link to="/contact-support">Contact Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/user-guide">User Guide</Link></li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-3">Legal</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
           {/* <li><Link to="/cookie">Cookie Policy</Link></li>
            <li><Link to="/data-protection">Data Protection</Link></li>*/}
          </ul>
        </div>

        {/* STAY UPDATED 
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-3 text-sm">
            Get the latest job updates and career tips
          </p>*/}

          {/* EMAIL SUBSCRIBE 
          <div className="flex items-center gap-2 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
            />
            <button className="px-5 py-3 bg-indigo-900 text-white rounded-xl">
              Subscribe
            </button>
          </div>
*/}
          {/* CHAT SUPPORT BOX 
          <div className="border border-gray-300 rounded-xl p-4">
            <h4 className="font-semibold text-gray-800">24/7 Chat Support</h4>

            <p className="text-gray-600 text-sm mt-1">
              Get instant help with our AI-powered chatbot
            </p>

            <button className="mt-4 w-full border border-indigo-900 text-indigo-900 py-2 rounded-xl hover:bg-indigo-50">
              Start Chat
            </button>
          </div>
        </div>*/}
      </div>

      {/* BOTTOM BAR */}
      <hr className="my-6 border-gray-300" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
        <p>© 2025 Bharatcareerconnect.com. All rights reserved. | Empowering careers, connecting futures.</p>
        <p>Helpline: 6362902335 | Email: info@bharatcareerconnect.com </p>
      </div>
    </footer>
  );
};

export default Footer;