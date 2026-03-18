import React from "react";
import { Building2, Pencil, Calendar, BarChart3 } from "lucide-react";

export default function EmployerFeatures() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Your Central Command Center
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Manage everything from job postings to interview insights — all in one place.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Building2 className="text-indigo-600" size={22}/>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Industry Profile Setup
            </h3>

            <p className="text-gray-500 text-sm">
              Define your company's sector to improve job targeting and analytics benchmarking.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Pencil className="text-indigo-600" size={22}/>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Smart Job Posting Tools
            </h3>

            <p className="text-gray-500 text-sm">
              WYSIWYG Editor for rich job descriptions with scheduling capabilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Calendar className="text-indigo-600" size={22}/>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Scheduled Publishing
            </h3>

            <p className="text-gray-500 text-sm">
              Schedule posts to go live at your preferred time for maximum visibility.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BarChart3 className="text-indigo-600" size={22}/>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-2">
              Analytics Dashboard
            </h3>

            <p className="text-gray-500 text-sm">
              Track application counts, time-to-fill metrics, and diversity analysis.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}