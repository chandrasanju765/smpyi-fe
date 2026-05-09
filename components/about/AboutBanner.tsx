"use client";

export default function AboutBanner() {
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#060F1E] px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
      <div
        className="relative overflow-hidden rounded-2xl flex flex-col sm:flex-row items-center gap-8 px-8 sm:px-14 py-14"
        style={{
          width: "1287px",
          background:
            "linear-gradient(to right, #0B1638 0%, #1A1F4E 40%, #5C2A10 75%, #7A3010 100%)",
          minHeight: "200px",
        }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/leads-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "20px",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "rgba(0,0,0,0.15)",
            borderRadius: "20px",
          }}
        />

        {/* Decorative blobs */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #FB923C 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-12 left-1/3 w-52 h-52 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #FBBF24 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-4 left-[60%] w-32 h-32 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F97316 0%, transparent 70%)" }}
        />

        {/* Decorative dots grid */}
        <svg
          className="pointer-events-none absolute right-8 top-6 opacity-10"
          width="120" height="100" viewBox="0 0 120 100"
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 22 + 6}
                cy={row * 20 + 6}
                r="3"
                fill="#FFFFFF"
              />
            ))
          )}
        </svg>

        {/* Left — graph image */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-32 h-32 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-sm">
            {/* Graph SVG - Upward trending chart */}
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines */}
              <line x1="10" y1="80" x2="90" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
              <line x1="10" y1="60" x2="90" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4"/>
              <line x1="10" y1="40" x2="90" y2="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4"/>
              <line x1="10" y1="20" x2="90" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4"/>
              
              {/* Bars */}
              <rect x="15" y="55" width="12" height="25" fill="rgba(251,146,60,0.7)" rx="2"/>
              <rect x="32" y="45" width="12" height="35" fill="rgba(251,191,36,0.7)" rx="2"/>
              <rect x="49" y="30" width="12" height="50" fill="rgba(249,115,22,0.7)" rx="2"/>
              <rect x="66" y="20" width="12" height="60" fill="rgba(251,146,60,0.8)" rx="2"/>
              
              {/* Trend line */}
              <polyline points="10,75 27,65 44,55 61,35 78,20" stroke="#FBBF24" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              
              {/* Arrow head */}
              <polygon points="78,20 72,25 74,18" fill="#FBBF24"/>
              
              {/* Dots on trend line */}
              <circle cx="27" cy="65" r="3" fill="#FB923C"/>
              <circle cx="44" cy="55" r="3" fill="#FBBF24"/>
              <circle cx="61" cy="35" r="3" fill="#F97316"/>
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="relative z-10 flex-1">
          <h2
            className="font-poppins font-bold text-white leading-snug"
            style={{ fontSize: "clamp(16px, 1.9vw, 28px)" }}
          >
            An intelligent engine designed to act like your personal marketing expert.
          </h2>
        </div>

        {/* Divider */}
        <div className="hidden sm:block relative z-10 w-px self-stretch bg-white/20" />

        {/* Right — description */}
        <div className="relative z-10 flex-1">
          <p className="text-white/80 text-[14px] leading-relaxed">
            Our AI studies your reviews, highlights strengths, and points out areas
            for improvement. Every feature is crafted to make you feel empowered
            and professionally equipped.
          </p>
        </div>
      </div>
    </section>
  );
}