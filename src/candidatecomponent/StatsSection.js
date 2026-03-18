import React from "react";

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-16">

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* Stat 1 */}
        <div>
          <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
          <p className="text-gray-600 mt-2">Active Job Seekers</p>
        </div>

        {/* Stat 2 */}
        <div>
          <h3 className="text-3xl font-bold text-green-600">500+</h3>
          <p className="text-gray-600 mt-2">Partner Companies</p>
        </div>

        {/* Stat 3 */}
        <div>
          <h3 className="text-3xl font-bold text-purple-600">50+</h3>
          <p className="text-gray-600 mt-2">Training Centers</p>
        </div>

        {/* Stat 4 */}
        <div>
          <h3 className="text-3xl font-bold text-orange-600">95%</h3>
          <p className="text-gray-600 mt-2">Success Rate</p>
        </div>

      </div>

    </section>
  );
}