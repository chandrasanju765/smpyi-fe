"use client";

export default function AboutHero() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-4">
      <section
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          height: "clamp(340px, 48vw, 580px)",
          background: "linear-gradient(135deg, #EEF3FA 0%, #E8F0FE 50%, #EFF6FF 100%)",
        }}
      >
        {/* Building image — absolute right, mirrors blog hero pattern */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/building.png"
          alt="Smpyi Building"
          className="absolute top-0 right-0 h-full object-cover object-center"
          style={{ width: "52%" }}
        />

        {/* Gradient blend — fades the left edge of the image into section bg */}
        <div
          className="absolute top-0 right-0 h-full pointer-events-none"
          style={{
            width: "52%",
            background: "linear-gradient(to right, #EEF3FA 0%, transparent 30%)",
          }}
        />

        {/* Text content */}
        <div className="relative z-[2] h-full flex items-center px-6 sm:px-10 lg:px-16">
          <div className="flex flex-col justify-center w-full sm:w-[55%] lg:w-[46%]">

            <span className="inline-block border-[1.5px] border-[#F97316] text-[#F97316] rounded-full px-4 py-1 text-xs font-semibold mb-4 w-fit tracking-wide uppercase">
              About Smpyi
            </span>

            <h1
              className="font-poppins font-bold text-[#0F172A] leading-snug mb-3"
              style={{ fontSize: "clamp(22px, 3vw, 52px)" }}
            >
              Empowering every business
              <br />
              to shine in the{" "}
              <span className="text-[#2563EB]">digital world</span>
            </h1>

            <p
              className="text-[#475569] leading-relaxed mb-6"
              style={{ fontSize: "clamp(12px, 1vw, 15px)" }}
            >
              We blend smart ideas with powerful technology to help brands grow,
              connect, and stand out online.
            </p>

            {/* Feature cards */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: "👥",
                  bg: "bg-blue-50",
                  title: "Built for Creators",
                  desc: "Made for shop owners, creators and dreamers.",
                },
                {
                  icon: "🚀",
                  bg: "bg-orange-50",
                  title: "Growth Focused",
                  desc: "Tools that drive real growth and meaningful results.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-3 bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 shadow-sm"
                  style={{ minWidth: "170px", maxWidth: "210px" }}
                >
                  <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center text-lg shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[13px] text-[#1E222F] mb-0.5">
                      {c.title}
                    </h4>
                    <p className="text-[11px] text-[#6B7280] leading-snug">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}