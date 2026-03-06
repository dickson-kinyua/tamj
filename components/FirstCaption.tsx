import { FaArrowCircleDown } from "react-icons/fa";

interface FirstCaptionProps {
  className?: string;
}

export default function FirstCaption({ className = "" }: FirstCaptionProps) {
  return (
    <div
      className={` bg-[#0a0a0fa2] text-[#ffffffa8] px-4 sm:px-6 lg:px-8 flex items-center ${className}`}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-center lg:text-left">
              De<span className="text-white">co</span>de
              <br />
              <span className="text-white">Chaos</span>
            </h1>

            {/* Subheading */}
            <h2 className="text-base sm:text-lg text-[#ffffffa8] max-w-xl font-light tracking-wide text-center lg:text-left">
              Decode the Volatility. Master the Synthetic Markets
            </h2>

            {/* Description */}
            <p className="text-sm text-[#ffffff80] max-w-md text-center lg:text-left">
              Synthetic indices driven by random number generators.
              <br />
              <span className="text-white/60">
                Predictable volatility.
              </span>{" "}
              Unmatched opportunity.
            </p>

            {/* Tamj Markets & CTA */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-4">
              <div>
                <button
                  className="group flex items-center gap-2 hover:text-white transition-colors duration-300"
                  aria-label="Scroll down"
                >
                  <span className="text-sm tracking-wider">EXPLORE</span>
                  <FaArrowCircleDown
                    size={20}
                    className="group-hover:translate-y-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="hidden lg:block relative">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* Stats/Feature Cards */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">15+</div>
                <div className="text-xs text-[#ffffff80]">
                  Synthetic Indices
                </div>
              </div>
              <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-xs text-[#ffffff80]">Market Access</div>
              </div>
              <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">87%</div>
                <div className="text-xs text-[#ffffff80]">Accuracy</div>
              </div>
              <div className="bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-6 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white mb-1">5k+</div>
                <div className="text-xs text-[#ffffff80]">Traders</div>
              </div>
            </div>

            {/* Chart/Pattern Visualization */}
            <div className="mt-6 bg-[#ffffff08] border border-[#ffffff15] rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-[#ffffff60]">
                  Volatility 75 Index
                </span>
                <span className="text-xs text-green-400">+2.45%</span>
              </div>
              <div className="h-16 flex items-end gap-1">
                {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50].map((height, i) => (
                  <div
                    key={i}
                    className="w-full bg-indigo-500/30 rounded-t"
                    style={{ height: `${height}%` }}
                  >
                    <div
                      className="w-full bg-indigo-400 rounded-t h-1/2"
                      style={{ height: `${height * 0.4}%` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator - Only visible on laptop+ */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
          <button
            className="flex flex-col items-center gap-2 text-[#ffffff60] hover:text-white transition-colors duration-300 group"
            aria-label="Scroll down"
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <FaArrowCircleDown
              size={16}
              className="group-hover:translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
