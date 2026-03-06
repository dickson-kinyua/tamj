"use client";

import React from "react";
import {
  FaTelegram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
  FaEnvelope,
  FaChartLine,
  FaShieldAlt,
  FaFileAlt,
  FaQuestionCircle,
  FaArrowUp,
} from "react-icons/fa";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Achievements", href: "#achievement" },
    { name: "Contact", href: "#contact" },
  ];

  const resources = [
    {
      name: "Trading Guide",
      href: "#",
      icon: <FaChartLine className="w-3 h-3" />,
    },
    {
      name: "Risk Management",
      href: "#",
      icon: <FaShieldAlt className="w-3 h-3" />,
    },
    {
      name: "Terms of Service",
      href: "#",
      icon: <FaFileAlt className="w-3 h-3" />,
    },
    { name: "FAQ", href: "#", icon: <FaQuestionCircle className="w-3 h-3" /> },
  ];

  const socialLinks = [
    {
      icon: <FaTelegram />,
      name: "Telegram",
      href: "#",
      color: "hover:text-[#0088cc]",
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      href: "#",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: <FaDiscord />,
      name: "Discord",
      href: "#",
      color: "hover:text-[#5865F2]",
    },
    {
      icon: <FaYoutube />,
      name: "YouTube",
      href: "#",
      color: "hover:text-[#FF0000]",
    },
  ];

  const tradingTools = [
    "Volatility 75 Index",
    "Boom & Crash",
    "Step Indices",
    "Range Break",
    "Jump Indices",
  ];

  return (
    <footer
      className={`bg-[#0a0a0f] border-t border-[#ffffff15] text-[#ffffffa8] pt-16 pb-8 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Tamj <span className="text-indigo-400">Markets</span>
            </h3>
            <p className="text-sm text-[#ffffff80] leading-relaxed">
              Decode the volatility. Master the synthetic markets with
              cutting-edge tools and insights.
            </p>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-[#ffffff08] border border-[#ffffff15] rounded-lg flex items-center justify-center text-[#ffffffa8] ${social.color} hover:border-indigo-500 transition-all`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-[#ffffff80] hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-indigo-400 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-[#ffffff80] hover:text-indigo-400 transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-indigo-400">{resource.icon}</span>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Trading Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">
              Trading Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {tradingTools.map((tool, index) => (
                <span
                  key={index}
                  className="text-xs bg-[#ffffff08] border border-[#ffffff15] rounded-full px-3 py-1.5 text-[#ffffffa8] hover:border-indigo-400 hover:text-indigo-400 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#ffffff15]">
              <a
                href="#"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
              >
                <FaEnvelope className="w-4 h-4" />
                support@tamjmarkets.com
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter/Updates Section */}
        <div className="border-y border-[#ffffff15] py-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="text-white font-medium mb-1">Stay Updated</h5>
              <p className="text-sm text-[#ffffff60]">
                Get trading signals and market analysis
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors w-full sm:w-64"
              />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ffffff60]">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2024 Tamj Markets. All rights reserved.</span>
            <span className="w-1 h-1 bg-[#ffffff30] rounded-full hidden md:block"></span>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Privacy Policy
            </a>
            <span className="w-1 h-1 bg-[#ffffff30] rounded-full"></span>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Terms of Service
            </a>
            <span className="w-1 h-1 bg-[#ffffff30] rounded-full"></span>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              Risk Disclosure
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#ffffff80] hover:text-indigo-400 transition-colors group"
            aria-label="Scroll to top"
          >
            <span className="text-xs">Back to top</span>
            <FaArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 text-center text-[10px] text-[#ffffff30] leading-relaxed border-t border-[#ffffff15] pt-8">
          <p>
            ⚠️ RISK WARNING: Trading synthetic indices and forex carries a high
            level of risk and may not be suitable for all investors. The high
            degree of leverage can work against you as well as for you. Before
            deciding to trade, you should carefully consider your investment
            objectives, level of experience, and risk appetite. The possibility
            exists that you could sustain a loss of some or all of your initial
            investment and therefore you should not invest money that you cannot
            afford to lose. You should be aware of all the risks associated with
            trading and seek advice from an independent financial advisor if you
            have any doubts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
