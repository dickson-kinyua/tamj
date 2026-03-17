import Image from "next/image";
import React from "react";
import {
  FaChartLine,
  FaBrain,
  FaShieldAlt,
  FaBolt,
  FaGlobe,
  FaRobot,
} from "react-icons/fa";

const About: React.FC = () => {
  const tradingStats = [
    { label: "Markets Tracked", value: "15+" },
    { label: "Trading Pairs", value: "25+" },
    { label: "Accuracy Rate", value: "87%" },
    { label: "Active Traders", value: "5K+" },
  ];

  const features = [
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Volatility Analysis",
      description:
        "Deep insights into synthetic indices volatility patterns and market behavior",
    },
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "AI-Powered Signals",
      description:
        "Advanced algorithms detecting profitable entry and exit points",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Risk Management",
      description:
        "Built-in tools to protect your capital and optimize position sizing",
    },
    {
      icon: <FaBolt className="w-6 h-6" />,
      title: "Real-Time Data",
      description:
        "Live updates on Boom & Crash, Volatility indices, and Step indices",
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Markets",
      description: "24/7 access to synthetic markets across all time zones",
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: "Automated Trading",
      description:
        "Set your strategies and let our bots execute trades automatically",
    },
  ];

  const indices = [
    { name: "Volatility 10/25/50/75/100", color: "from-blue-500 to-cyan-500" },
    { name: "Boom & Crash Indices", color: "from-green-500 to-emerald-500" },
    { name: "Step Indices", color: "from-purple-500 to-pink-500" },
    { name: "Range Break Indices", color: "from-orange-500 to-red-500" },
    { name: "Jump Indices", color: "from-yellow-500 to-amber-500" },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-400 font-semibold tracking-wide uppercase">
            About The Platform
          </h2>
          <p className="mt-2 text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Master Synthetic Indices Trading
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Your ultimate companion for navigating the volatility of synthetic
            markets
          </p>
          <div className="mt-3 w-full flex  justify-center">
            <Image
              className="rounded-full"
              src={"/dicky.jpg"}
              alt="profile"
              width={200}
              height={200}
            ></Image>
          </div>
          {/* <div className="w-1/4">
              <div className="h-4 bg-amber-300 rounded-t-2xl"></div>
              <div className="h-20 bg-amber-700"></div>
            </div> */}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Trader's Story */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-50"></div>
              <div className="relative bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Built by Traders, for Traders
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Welcome to your trusted platform for synthetic indices
                  trading. We understand the unique challenges of trading Boom &
                  Crash, Volatility indices, and other synthetic markets. Our
                  tools are designed to help you decode the chaos and find
                  consistent profitability.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {tradingStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-indigo-500 transition-all"
                >
                  <div className="text-2xl font-bold text-indigo-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Synthetic Indices List */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">
                Supported Indices
              </h4>
              <div className="space-y-3">
                {indices.map((index, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${index.color}`}
                    ></div>
                    <span className="text-gray-300 text-sm">{index.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Trading Philosophy */}
          <div className="space-y-6">
            {/* Mission Card */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border-l-4 border-indigo-500 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-3">
                Our Trading Philosophy
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in data-driven decisions, not emotions. Our platform
                combines technical analysis with AI to identify high-probability
                setups in synthetic markets. No hype, just numbers.
              </p>
            </div>

            {/* Edge Card */}
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg border-l-4 border-purple-500 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-3">
                The Trader's Edge
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Access exclusive tools and insights that give you an edge in
                volatile markets:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span> Real-time
                  volatility scoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span> Boom & Crash
                  reversal patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-400">→</span> Volatility index
                  correlation maps
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            Built for Synthetic Markets
          </h3>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Specialized tools designed specifically for synthetic indices
            trading
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all hover:-translate-y-3"
              >
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-20 text-sm text-center text-gray-500 border-t border-gray-800 pt-8">
          <p>
            ⚠️ Trading synthetic indices involves significant risk. Past
            performance does not guarantee future results. Always trade
            responsibly and never risk more than you can afford to lose.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Master the Markets?
            </h3>
            <p className="text-lg mb-8 text-indigo-100 max-w-2xl mx-auto">
              Join thousands of traders who trust our platform for their
              synthetic indices trading journey
            </p>
            <button className="bg-white cursor-pointer text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Start Trading Smarter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
