"use client";

const STATS = [
  { value: "5,000+", label: "Active Businesses" },
  { value: "25,000+", label: "Product Listed" },
  { value: "10,000+", label: "Successful Connections" },
  { value: "10,000+", label: "Customer Satisfaction" },
];

export default function LeadsBanner() {
  return (
    <section className="py-12 flex justify-center">
      <div
        className="relative overflow-hidden flex items-center"
        style={{
          width: "1287px",   // ✅ exact width
          height: "273px",   // ✅ exact height
          borderRadius: "20px",
          background:
            "linear-gradient(to right, #0B1638 0%, #1A1F4E 40%, #5C2A10 75%, #7A3010 100%)",
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

        {/* Content */}
        <div className="relative z-10 w-full flex items-center px-12 h-full">

          {/* Left Stats */}
          <div className="flex-shrink-0 pr-12">
            <div className="grid grid-cols-2 gap-x-12 gap-y-8">
              {STATS.map((stat, index) => (
                <div key={index} className="relative">
                  {/* side divider kept (as in your design) */}
                  {index % 2 === 0 && (
                    <span className="absolute right-[-24px] top-0 h-full w-px bg-white/30" />
                  )}

                  <p
                    className="font-poppins font-medium text-white"
                    style={{ fontSize: "24px", lineHeight: "100%" }}
                  >
                    {stat.value}
                  </p>

                  <p
                    className="font-poppins font-normal text-white/70 mt-2"
                    style={{ fontSize: "13px", lineHeight: "100%" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ❌ REMOVED CENTER DIVIDER LINE */}

          {/* Right Content */}
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-12">
            
            {/* Sail Heading */}
            <h2
              className=" font-script text-white text-center"
              style={{
                fontWeight: 600,
                fontSize: "32px",
                lineHeight: "120%",
                letterSpacing: "10%",
              }}
            >
              Leads, Deals aur Growth — Sab Ek Jagah
            </h2>

            {/* Subtext */}
            <p
              className="font-poppins font-medium text-white/85 text-center"
              style={{
                fontSize: "20px",
                lineHeight: "100%",
              }}
            >
              Driven by Excellence, Proven by Numbers
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}