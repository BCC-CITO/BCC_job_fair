import React from "react";
import { Briefcase, GraduationCap, Users } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Everything You Need to Succeed
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          From job opportunities to skill development, we provide a comprehensive
          platform for your career growth.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-left">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Briefcase className="text-blue-600" size={22}/>
            </div>

            <h3 className="text-lg font-semibold mb-3">
              Job Opportunities
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Access thousands of verified job openings across various
              industries and experience levels.
            </p>

            <ul className="text-gray-500 text-sm space-y-2">
              <li>• Full-time & Part-time positions</li>
              <li>• Internships & Apprenticeships</li>
              <li>• Remote & Hybrid opportunities</li>
              <li>• Smart job matching</li>
            </ul>
          </div>


          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-left">
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <GraduationCap className="text-green-600" size={22}/>
            </div>

            <h3 className="text-lg font-semibold mb-3">
              Skill Development
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Enhance your skills with courses from industry experts and
              certified training centers.
            </p>

            <ul className="text-gray-500 text-sm space-y-2">
              <li>• Free & Paid training programs</li>
              <li>• Industry certifications</li>
              <li>• LMS integration</li>
              <li>• Expert trainers</li>
            </ul>
          </div>


          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 text-left">
            <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
              <Users className="text-purple-600" size={22}/>
            </div>

            <h3 className="text-lg font-semibold mb-3">
              Career Support
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Get personalized career guidance and connect with industry
              professionals.
            </p>

            <ul className="text-gray-500 text-sm space-y-2">
              <li>• Profile optimization</li>
              <li>• Video resume builder</li>
              <li>• Application tracking</li>
              <li>• Career counseling</li>
            </ul>
          </div>

        </div>

      </div>

    </section>
  );
}