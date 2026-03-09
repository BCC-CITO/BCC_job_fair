import { useEffect, useState } from "react";

export default function SuccessStories() {
  const cards = [
    {
      video: "/video1.jpg",
      name: "Priya Sharma",
      role: "Software Developer",
      company: "TechCorp",
      logo: "/logo.png",// need to add company logo here
      desc: "JobsPortal helped me find my dream job in just 2 weeks. The platform made it easy to connect with top employers and showcase my skills.",
    },
    {
      video: "/video2.jpg",
      name: "Rajesh Kumar",
      role: "HR Director",
      company: "InnovateSoft",
      logo: "/logo.png",
      desc: "We've hired over 50 talented professionals through JobsPortal. The candidate quality and hiring efficiency are exceptional.",
    },
    {
      video: "/video3.jpg",
      name: "Anita Verma",
      role: "Placement Officer",
      company: "Delhi Technical University",
      logo: "/logo.png",
      desc: "The platform transformed our placement process. We achieved a 95% placement rate using this system.",
    },
    {
      video: "/video4.jpg",
      name: "Vikram Joshi",
      role: "Data Analyst",
      company: "DataSphere",
      logo: "/logo.png",
      desc: "I found a great position that matched my skills perfectly. A seamless experience!",
    },
    {
      video: "/video5.jpg",
      name: "Sneha Gupta",
      role: "Project Manager",
      company: "BuildWorks",
      logo: "/logo.png",
      desc: "Thanks to JobsPortal, I got multiple interview calls within a week.",
    },
    {
      video: "/video6.jpg",
      name: "Amit Patel",
      role: "Senior Trainer",
      company: "SkillUp Institute",
      logo: "/logo.png",
      desc: "The platform helped me grow my training business significantly.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 3) % cards.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [cards.length]);

  // Slice visible 3 cards
  const visibleCards = [
    cards[index],
    cards[(index + 1) % cards.length],
    cards[(index + 2) % cards.length],
  ];

  return (
 <div className="w-full flex flex-col items-center py-10 mt-5 sm:mt-5 md:mt-5 lg:mt-5">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        Success Stories from Our Community
      </h2>
      <p className="text-gray-500 mt-2 max-w-2xl text-center">
        Hear from candidates, employers, institutions, and trainers who have
        transformed their careers and businesses.
      </p>

      {/* Carousel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full max-w-7xl px-6 transition-all">
        {visibleCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            {/* Video Placeholder */}
            <div className="relative w-full h-56 bg-gray-200">
              <img
                src={card.video}
                alt="video"
                className="w-full h-full object-cover"
              />
             
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-4">
                <img
                  src={card.logo}
                  alt="logo"
                  className="w-10 h-10 rounded-full border"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{card.name}</h3>
                  <p className="text-sm text-gray-600">{card.role}</p>
                  <p className="text-xs text-indigo-600">{card.company}</p>
                </div>
              </div>

              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}