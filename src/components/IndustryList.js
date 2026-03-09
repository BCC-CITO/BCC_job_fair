import React, { useState } from "react";

// DYNAMIC SECTOR LIST FROM BACKEND (SIMULATED)
const sectorNames = [
  "Aerospace and Aviation Sector",
  "Agriculture Sector",
  "Apparel Sector",
  "Automotive Sector",
  "Beauty and Wellness Sector",
  "BFSI Sector",
  "Capital Goods Sector",
  "Construction Sector",
  "Domestic Workers Sector",
  "Education Sector",
  "Electronics Sector",
  "Food Processing Sector",
  "Furniture & Fittings Sector",
  "Gems and Jewellery Sector",
  "Government Sector",
  "Green Jobs Sector",
  "Handicrafts and Carpet Sector",
  "Healthcare Sector",
  "HR Consultancy Sector",
  "Hydrocarbon Sector",
  "Infrastructure Equipment Sector",
  "Instrumentation Automation Surveillance & Communication Sector",
  "Iron and Steel Sector",
  "IT and ITeS Sector",
  "Leather Sector",
  "Life Sciences Sector",
  "Logistics Sector",
  "Management and Entrepreneurship and Professional Sector",
  "Manufacturing Sector",
  "Media Sector",
  "Mining Sector",
  "Persons with Disability Sector",
  "Power Sector",
  "Service Sector",
  "Social Sector",
  "Sports Sector",
  "Retail Sector",
  "Rubber, Chemical, and Petrochemical Sector",
  "Telecom Sector",
  "Textile Sector",
  "Tourism and Hospitality Sector",
  "Water Management and Plumbing Sector",
  "Paints and Coatings Sector",
  "State Public Sector Undertaking",
  "Central Public Sector Undertaking",
  "Space Sector",
  "Defence Sector",
  "Nuclear Sector",
  "Industrial Safety Sector",
  "Legal Sector",
  "General Sector"
];

// Import sector icons dynamically
const importSectorIcons = () => {
  const icons = {};
  const files = require.context("../Assets/sectors", false, /\.(png|jpe?g|svg)$/);

  files.keys().forEach((file) => {
    const cleanName = file.replace("./", "").replace(/\.(png|jpg|jpeg|svg)$/i, "");
    icons[cleanName] = files(file);
  });

  return icons;
};

const sectorIcons = importSectorIcons();

const badgeStyles = {
  green: "bg-green-100 text-green-700",
  blue: "bg-blue-100 text-blue-700",
  orange: "bg-orange-100 text-orange-700",
};

// Paginate 9 sectors per page
const PAGE_SIZE = 9;

const IndustrySectors = () => {
  const sectors = sectorNames.map((name, index) => ({
    id: index + 1,
    name,
    description: "Industry description goes here based on backend data.",
    jobs: Math.floor(Math.random() * 5000) + 500,
    available: Math.random() > 0.3 ? "Available" : "Unavailable",
    skills: ["Skill A", "Skill B", "Skill C"],
    status: ["High Growth", "Stable Growth", "Expanding"][Math.floor(Math.random() * 3)],
    statusColor: ["green", "blue", "orange"][Math.floor(Math.random() * 3)]
  }));

  const [page, setPage] = useState(0);

  const start = page * PAGE_SIZE;
  const pageData = sectors.slice(start, start + PAGE_SIZE);

  return (
    <div className="min-h-[20vh] py-10 mt-10  bg-[#F5F7FB] relative">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Industry Sectors</h2>
        <p className="text-gray-600 mt-1">
          Discover opportunities across diverse industries and find your perfect career match
        </p>
      </div>

      {/* SECTOR CARDS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {pageData.map((sector) => (
          <div
            key={sector.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition relative"
          >
            {/* ICON + STATUS */}
            <div className="flex justify-between items-start mb-4">
             <div className="h-12 w-12 rounded-xl bg-[#20247A] flex items-center justify-center overflow-hidden">
  <img
    src={sectorIcons[sector.name]}
    className="h-full w-full object-contain"
  />
</div>

              <span
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  badgeStyles[sector.statusColor]
                }`}
              >
                {sector.status}
              </span>
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-gray-900">{sector.name}</h3>

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-sm mt-1">{sector.description}</p>

            {/* JOBS + AVAILABLE (combined line) */}
            <p className="text-indigo-700 font-semibold mt-4">
              {sector.jobs.toLocaleString()} Jobs{" "}
              <span className="text-gray-500 text-sm">• {sector.available}</span>
            </p>

            {/* SKILLS */}
            <p className="text-sm font-medium text-gray-700 mt-4 mb-2">In-demand Skills:</p>

            <div className="flex flex-wrap gap-2">
              {sector.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}

              <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                +1 more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION BUTTONS — EXACT STYLE FROM IMAGE */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center mt-12">

        {/* PREVIOUS BUTTON (white with border) */}
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="h-10 w-10 rounded-full border border-indigo-900 text-indigo-900 flex items-center justify-center bg-white shadow hover:bg-indigo-50 disabled:opacity-40"
        >
          ‹
        </button>

        {/* NEXT BUTTON (BLUE CIRCLE like screenshot) */}
        <button
          onClick={() =>
            setPage((page + 1) * PAGE_SIZE < sectors.length ? page + 1 : page)
          }
          disabled={(page + 1) * PAGE_SIZE >= sectors.length}
          className="h-10 w-10 rounded-full bg-indigo-900 text-white flex items-center justify-center shadow hover:bg-indigo-800 disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default IndustrySectors;