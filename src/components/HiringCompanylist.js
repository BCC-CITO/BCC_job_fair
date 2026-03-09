import React, { useState } from "react";

const companies = [
  {
    id: 1,
    name: "HealthPlus",
    sector: "Healthcare",
    openings: 45,
    logo: "https://via.placeholder.com/60/1E40AF/FFFFFF?text=HP",
    description:
      "Leading healthcare providers offering medical services and innovative health technologies.",
    founded: 2010,
    teamSize: "200–500 employees",
    industry: "Healthcare",
    benefits: ["Flexible Hours", "Medical Benefits", "Career Growth"],
  },
  {
    id: 2,
    name: "TechCorp",
    sector: "Financial",
    openings: 109,
    logo: "https://via.placeholder.com/60/F97316/FFFFFF?text=TC",
    description:
      "Fintech company revolutionizing digital banking and payment solutions.",
    founded: 2015,
    teamSize: "500–1000 employees",
    industry: "Financial Services",
    benefits: [
      "Flexible Hours",
      "Bonus Structure",
      "Professional Development",
      "Wellness Program",
    ],
  },
  {
    id: 3,
    name: "ManufacturingCo",
    sector: "Manufacturing",
    openings: 45,
    logo: "https://via.placeholder.com/60/2563EB/FFFFFF?text=MC",
    description:
      "Top industrial manufacturing company delivering quality engineering solutions.",
    founded: 2005,
    teamSize: "300–700 employees",
    industry: "Manufacturing",
    benefits: ["On-site Benefits", "Team Trips", "Annual Bonus"],
  },
  {
    id: 4,
    name: "EduTech",
    sector: "Education",
    openings: 45,
    logo: "https://via.placeholder.com/60/9333EA/FFFFFF?text=ED",
    description:
      "EdTech company transforming online learning for students worldwide.",
    founded: 2018,
    teamSize: "100–200 employees",
    industry: "EdTech",
    benefits: ["Remote Work", "Flexible Hours", "Training Programs"],
  },
  {
    id: 5,
    name: "Retail Max",
    sector: "Retail",
    openings: 45,
    logo: "https://via.placeholder.com/60/059669/FFFFFF?text=RM",
    description:
      "Retail tech solutions provider optimizing operations and customer experience.",
    founded: 2012,
    teamSize: "250–600 employees",
    industry: "Retail Tech",
    benefits: ["Employee Discount", "Bonus Structure", "Health Insurance"],
  },
  {
    id: 6,
    name: "HealthPlus",
    sector: "Healthcare",
    openings: 45,
    logo: "https://via.placeholder.com/60/9CA3AF/FFFFFF?text=HP",
    description:
      "Healthcare services company offering hospital, pharmacy, and lab solutions.",
    founded: 2008,
    teamSize: "150–400 employees",
    industry: "Healthcare",
    benefits: ["Flexible Hours", "Paid Leaves", "Career Growth"],
  },
];

const FeaturedCompanies = () => {
  const [selected, setSelected] = useState(companies[1]);

  return (
    <div className="bg-[#F5F7FB] py-10 mt-14 rounded-xl">

      {/* TITLE */}
      <div className="text-center mb-6 px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Top Hiring Companies
        </h1>
        <p className="text-gray-600 mt-1 text-xs sm:text-sm">
          Join thousands of professionals who found their dream jobs with our partner companies
        </p>
      </div>

      {/* BADGE */}
      <div className="flex justify-center mb-4">
        <span className="bg-gray-200 text-gray-700 text-xs px-4 py-1 rounded-full shadow-sm">
          {selected.openings} Open Positions
        </span>
      </div>

      {/* LAYOUT — MOBILE FIRST */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-6 px-4 items-start">

        {/* LEFT GRID — Responsive */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          {companies.map((company) => (
          <div
  key={company.id}
  onMouseEnter={() => setSelected(company)}
  className={`group relative cursor-pointer bg-white rounded-xl p-4 shadow border transition-all duration-200
  ${
    selected.id === company.id
      ? "border-indigo-600 shadow-lg scale-[1.03]"
      : "border-gray-200 hover:shadow-md hover:border-indigo-400 hover:scale-[1.02]"
  }`}
>
  {/* Logo */}
  <div className="flex justify-center">
    <img src={company.logo} className="h-10 w-10 mb-2" alt={company.name} />
  </div>

  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 text-center">
    {company.name}
  </h3>
  <p className="text-gray-500 text-center text-xs sm:text-sm">
    {company.sector}
  </p>

  {/* Badge */}
  <div className="mt-1 text-center">
    <span className="px-2 py-0.5 text-[10px] sm:text-xs bg-indigo-50 text-indigo-700 rounded-full">
      {company.openings} Openings
    </span>
  </div>

  {/* Hover extra line */}
  <p className="hidden group-hover:block text-[11px] sm:text-xs text-indigo-600 text-center mt-2">
    View Company Details →
  </p>

  {/* Active Mark */}
  {selected.id === company.id && (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-indigo-600 rounded-full"></div>
  )}
</div>
          ))}

          {/* BUTTON */}
          <div className="col-span-2 sm:col-span-3 mt-3 text-center">
            <button className="px-8 py-3 bg-indigo-900 text-white rounded-full text-sm shadow hover:bg-indigo-800 w-full sm:w-auto">
              Find More Jobs →
            </button>
          </div>
        </div>

        {/* RIGHT PANEL — Moves under grid on mobile */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 w-full">

          {/* Header */}
          <div className="flex items-center gap-4">
            <img src={selected.logo} className="h-12 w-12" alt="logo" />
            <div>
              <h3 className="text-lg font-semibold">{selected.name}</h3>
              <p className="text-gray-500 text-sm">Company Overview</p>
            </div>
          </div>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            {selected.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mt-4 text-xs sm:text-sm">
            <p><b>🏢 Industry:</b> {selected.industry}</p>
            <p><b>👥 Team Size:</b> {selected.teamSize}</p>
            <p><b>📅 Founded:</b> {selected.founded}</p>
            <p><b>📈 Positions:</b> {selected.openings}</p>
          </div>

          {/* Benefits */}
          <h4 className="mt-4 font-semibold text-gray-900">Key Benefits</h4>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected.benefits.map((b, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>

          <button className="w-full mt-5 py-2 border border-indigo-700 text-indigo-700 rounded-full text-sm hover:bg-indigo-50">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCompanies;