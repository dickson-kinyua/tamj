import React from "react";
import { FaEnvelope, FaTelegram, FaTwitter, FaDiscord } from "react-icons/fa";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  return (
    <section
      id="contact"
      className={`min-h-screen bg-[#0a0a0f] text-[#ffffffa8] py-20 px-4 sm:px-6 lg:px-8 flex items-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Con<span className="text-white">tac</span>t
            <br />
            <span className="text-white">Us</span>
          </h1>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-xl p-6 text-center hover:border-indigo-500 transition-all">
            <FaEnvelope className="text-indigo-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">Email</h3>
            <p className="text-sm text-[#ffffffa8]">support@tamjmarkets.com</p>
          </div>

          <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-xl p-6 text-center hover:border-indigo-500 transition-all">
            <FaTelegram className="text-indigo-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">Telegram</h3>
            <p className="text-sm text-[#ffffffa8]">@tamjmarkets</p>
          </div>

          <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-xl p-6 text-center hover:border-indigo-500 transition-all sm:col-span-2 lg:col-span-1">
            <FaDiscord className="text-indigo-400 text-3xl mx-auto mb-4" />
            <h3 className="text-white font-medium mb-2">Discord</h3>
            <p className="text-sm text-[#ffffffa8]">Join our community</p>
          </div>
        </div>

        {/* Quick Message */}
        <div className="mt-12 text-center">
          <p className="text-[#ffffffa8] mb-4">Questions? We're here 24/7</p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg transition-colors">
            Start Trading
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
