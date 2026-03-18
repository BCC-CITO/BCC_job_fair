import React from "react";
import { Check } from "lucide-react";

export default function PricingPlans() {
  return (
    <section className="bg-gray-100 pt-16 pb-10">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Flexible Plans for Every Hiring Need
        </h2>

        <p className="text-gray-500 mt-3">
          Choose a plan that matches your hiring goals — from startups to enterprise.
        </p>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {/* Gold */}
          <div className="bg-white rounded-2xl border p-8 text-left">

            <h3 className="text-xl font-semibold mb-2 text-center">Gold</h3>

            <p className="text-3xl font-bold text-center">
              ₹0 <span className="text-sm font-normal">/ month</span>
            </p>

            <p className="text-gray-500 text-sm text-center mt-2 mb-6">
              Perfect for small businesses getting started
            </p>

            <p className="font-semibold text-green-600 mb-3">Included Features:</p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check size={16}/> Basic job posting (up to 3 posts)</li>
              <li className="flex items-center gap-2"><Check size={16}/> Basic company profile</li>
              <li className="flex items-center gap-2"><Check size={16}/> Limited candidate views (50/month)</li>
              <li className="flex items-center gap-2"><Check size={16}/> Email support</li>
              <li className="flex items-center gap-2"><Check size={16}/> Standard job templates</li>
            </ul>

            <div className="mt-6 text-gray-400 text-sm">
              <p className="font-semibold mb-2">Limitations:</p>
              <p>• No analytics access</p>
              <p>• No bulk posting</p>
              <p>• Limited candidate contact</p>
            </div>

          </div>


          {/* Pro plan */}
          <div className="bg-indigo-900 text-white rounded-2xl border p-8 text-left relative">

            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-700 px-4 py-1 rounded-full text-xs">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold mb-2 text-center">Pro Plan</h3>

            <p className="text-3xl font-bold text-center">
              ₹500 <span className="text-sm font-normal">/ month</span>
            </p>

            <p className="text-gray-200 text-sm text-center mt-2 mb-6">
              Enhanced visibility and analytics for growing companies
            </p>

            <p className="font-semibold mb-3">Included Features:</p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check size={16}/> Enhanced job posting (up to 25 posts)</li>
              <li className="flex items-center gap-2"><Check size={16}/> Analytics access & insights</li>
              <li className="flex items-center gap-2"><Check size={16}/> Moderate candidate applications (500/month)</li>
              <li className="flex items-center gap-2"><Check size={16}/> Priority support</li>
              <li className="flex items-center gap-2"><Check size={16}/> WYSIWYG job editor</li>
              <li className="flex items-center gap-2"><Check size={16}/> Scheduled posting</li>
              <li className="flex items-center gap-2"><Check size={16}/> Diversity overview</li>
              <li className="flex items-center gap-2"><Check size={16}/> Application tracking</li>
            </ul>

            <div className="mt-6 text-gray-300 text-sm">
              <p className="font-semibold mb-2">Limitations:</p>
              <p>• Limited bulk operations</p>
              <p>• Standard branding options</p>
            </div>

          </div>


          {/* Enterprise */}
          <div className="bg-white rounded-2xl border p-8 text-left">

            <h3 className="text-xl font-semibold mb-2 text-center">
              Enterprise Plan
            </h3>

            <p className="text-3xl font-bold text-center">
              ₹1000 <span className="text-sm font-normal">/ month</span>
            </p>

            <p className="text-gray-500 text-sm text-center mt-2 mb-6">
              Full-featured solution for large organizations
            </p>

            <p className="font-semibold text-green-600 mb-3">Included Features:</p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Check size={16}/> Unlimited job postings</li>
              <li className="flex items-center gap-2"><Check size={16}/> Detailed analytics & reporting</li>
              <li className="flex items-center gap-2"><Check size={16}/> Unlimited candidate interaction</li>
              <li className="flex items-center gap-2"><Check size={16}/> Bulk job posting tools</li>
              <li className="flex items-center gap-2"><Check size={16}/> Custom branding & promotion</li>
              <li className="flex items-center gap-2"><Check size={16}/> Featured employer placement</li>
              <li className="flex items-center gap-2"><Check size={16}/> Sponsored job listings</li>
              <li className="flex items-center gap-2"><Check size={16}/> API access</li>
              <li className="flex items-center gap-2"><Check size={16}/> Dedicated account manager</li>
              <li className="flex items-center gap-2"><Check size={16}/> Advanced matching algorithm</li>
              <li className="flex items-center gap-2"><Check size={16}/> Custom company profile page</li>
            </ul>

          </div>

        </div>

        {/* bottom note */}
        <div className="mt-12 border rounded-full py-3 text-sm text-indigo-900 max-w-3xl mx-auto">
          Feature gating ensures each subscription only accesses relevant tools
          (e.g., analytics, candidate info, posting limits).
        </div>

      </div>

    </section>
  );
}