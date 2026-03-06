import React from "react";
import { FaTrophy, FaChartLine, FaUsers, FaCrown } from "react-icons/fa";

interface AchievementProps {
  className?: string;
}

const Achievement: React.FC<AchievementProps> = ({ className = "" }) => {
  const stats = [
    { icon: <FaTrophy />, value: "87%", label: "Win Rate" },
    { icon: <FaChartLine />, value: "15%", label: "Avg Monthly Return" },
    { icon: <FaUsers />, value: "5k+", label: "Community" },
    { icon: <FaCrown />, value: "Top 5%", label: "Global Ranking" },
  ];

  return (
    <section
      id="achievement"
      className={`min-h-screen bg-[#0a0a0f] text-[#ffffffa8] py-20 px-4 sm:px-6 lg:px-8 flex items-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Ach<span className="text-white">ieve</span>
            <br />
            <span className="text-white">ments</span>
          </h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-6 text-center hover:border-indigo-500 transition-all"
            >
              <div className="text-indigo-400 text-2xl mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-[#ffffff60]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievement List */}
        <div className="mt-16 max-w-3xl mx-auto lg:mx-0">
          <h2 className="text-xl text-white mb-6">Key Milestones</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-indigo-400">2024</span>
              <span className="text-[#ffffffa8]">
                Reached 5,000 active traders
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-indigo-400">2023</span>
              <span className="text-[#ffffffa8]">
                Launched AI signal system
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-indigo-400">2022</span>
              <span className="text-[#ffffffa8]">
                87% accuracy on Volatility 75
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
