import React from "react";
import { Briefcase, GraduationCap, Users, Plus } from "lucide-react";

export default function EmployerModules() {
  return (
    <section className="bg-gray-50 pt-8 pb-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Modular Dashboard for Maximum Efficiency
          </h2>

          <p className="text-gray-500 mt-2">
            Easily manage your hiring across roles, internships, and apprenticeships.
          </p>
        </div>

        {/* Top cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">

          {/* Jobs module */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-md">
                <Briefcase className="text-indigo-600" size={18}/>
              </div>
              <h3 className="font-semibold">Jobs Module</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Post jobs, manage listings, and track interview status.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Job posting</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Listing management</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Interview tracking</span>
            </div>
          </div>


          {/* Internship module */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-md">
                <GraduationCap className="text-indigo-600" size={18}/>
              </div>
              <h3 className="font-semibold">Internship Module</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Dedicated flows for internship roles and fresh graduates.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Internship posting</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Student targeting</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">University partnerships</span>
            </div>
          </div>


          {/* Apprenticeship module */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-indigo-100 p-2 rounded-md">
                <Users className="text-indigo-600" size={18}/>
              </div>
              <h3 className="font-semibold">Apprenticeship Module</h3>
            </div>

            <p className="text-gray-500 text-sm mb-4">
              Specialized workflows for apprenticeship programs.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Program management</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Skill tracking</span>
              <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">Mentorship tools</span>
            </div>
          </div>

        </div>


        {/* Bottom section */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Interview tracker */}
          <div className="bg-gradient-to-r from-black to-blue-900 text-white rounded-2xl p-8">

            <h4 className="font-semibold mb-2">
              Candidate Interview Tracker
            </h4>

            <p className="text-sm text-gray-300 mb-6">
              Unified view showing shortlisted, rejected, and offered candidates.
            </p>

            <div className="flex justify-between text-center">

              <div>
                <p className="text-2xl font-bold">24</p>
                <p className="text-xs text-gray-300">Shortlisted</p>
              </div>

              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-gray-300">Offered</p>
              </div>

              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-gray-300">Rejected</p>
              </div>

            </div>

          </div>


          {/* Add job function */}
          <div className="bg-gradient-to-r from-black to-blue-900 text-white rounded-2xl p-8">

            <div className="flex items-center gap-2 mb-4">
              <Plus size={18}/>
              <h4 className="font-semibold">
                Add Job Function
              </h4>
            </div>

            <p className="text-sm text-gray-300 mb-4">
              Auto-fill fields and smart templates help you publish jobs 3x faster.
            </p>

            <ul className="text-sm text-gray-200 space-y-2">
              <li>• Smart templates</li>
              <li>• Auto-fill functionality</li>
              <li>• 3x faster publishing</li>
            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}