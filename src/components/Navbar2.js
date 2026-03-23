import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../Assets/logo/BCCLogo.svg"

const Navbar2 = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Candidate"},
    { label: "Employer"}, 
    { label: "Job Fair", path: "/jobfair" },
    { label: "Contact", path: "/contact"}
   
  ];
  {/* path: "/employer"v ,path: "/candidate" */}
  {/* path: "/institution"*/}
  {/* path: "/training-center" */}
  {/* path: "/trainer" */}
  {/*{ label: "Institution"},{ label: "Training Center"}, { label: "Trainer"}, { label: "Field Partner"},    */}
  

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-[999]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4">

        {/* LEFT — LOGO */}
        <div className="flex items-center gap-2 flex-shrink-0">
         <Link to='/'>
          <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* CENTER — DESKTOP MENU */}
        <ul className="hidden md:flex flex-1 justify-center items-center gap-10 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className="hover:text-indigo-700 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT — DESKTOP BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 border border-indigo-800 rounded-full text-indigo-900 hover:bg-indigo-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-2 bg-indigo-900 text-white rounded-full hover:bg-indigo-800"
          >
            Register
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* ============================
          MOBILE MENU DROPDOWN
      ============================= */}
      <div
        className={`
          md:hidden bg-white border-t shadow-inner 
          transition-all duration-300 overflow-hidden
          ${open ? "max-h-[600px] py-4" : "max-h-0 py-0"}
        `}
      >
        <ul className="flex flex-col gap-4 px-6 text-gray-700 font-medium">

          {/* MOBILE NAV LINKS */}
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-indigo-700 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* LOGIN & REGISTER — MOBILE */}
          <div className="flex flex-col gap-3 mt-4">

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="w-full text-center px-6 py-2 border border-indigo-800 rounded-full text-indigo-900 hover:bg-indigo-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="w-full text-center px-6 py-2 bg-indigo-900 text-white rounded-full hover:bg-indigo-800"
            >
              Register
            </Link>

          </div>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;