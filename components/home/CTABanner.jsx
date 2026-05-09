"use client";

import Image from "next/image";

export default function CTABanner() {
  return (
    <section className="pt-24 px-4">
      <div className="max-w-[1300px] mx-auto">

        {/* Watermark */}
        <div className="flex gap-16 pl-8 mb-6 opacity-50 pointer-events-none">
          {["SMPYI", "SMPYI", "SMPYI", "SMPYI"].map((t, i) => (
            <span
              key={i}
              className="font-poppins font-bold text-[28px] tracking-[0.15em]"
              style={{ color: "transparent", WebkitTextStroke: "1.5px #C8C8D8" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Card */}
        <div
          className="relative rounded-[20px] bg-[#FDE8D8]"
          style={{
            minHeight: "321px",   // ← minHeight not fixed height
            padding: "48px 56px",
            display: "flex",
            alignItems: "center",
            overflow: "visible",
          }}
        >

          {/* Text Section */}
          <div
            className="flex flex-col justify-center"
            style={{ maxWidth: "500px", gap: "14px", position: "relative", zIndex: 5 }}
          >

            {/* Contact Today */}
            <p
              className="font-poppins"
              style={{
                fontWeight: 500,
                fontSize: "20px",
                lineHeight: "1.4",
                color: "#1E40AF",
                margin: 0,
              }}
            >
              Contact Today!
            </p>

            {/* Heading */}
            <h2
              className="font-poppins"
              style={{
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "1.15",
                color: "#1E222F",
                margin: 0,
              }}
            >
              Ready to Grow Your Business?
            </h2>

            {/* Description */}
            <p
              className="font-poppins"
              style={{
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.6",
                color: "rgba(0,0,0,0.46)",
                maxWidth: "440px",
                margin: 0,
              }}
            >
              Join SMPYI today and start connecting with potential customers,
              suppliers, and business partners. Your success story begins here.
            </p>

            {/* Button ✅ */}
            <button
              className="font-poppins"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "214px",
                height: "54px",
                borderRadius: "999px",        // ← full pill shape
                backgroundColor: "#F97316",
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: 1,
                letterSpacing: "0px",
                marginTop: "8px",
                border: "none",
                cursor: "pointer",
                flexShrink: 0,               // ← never squish
                whiteSpace: "nowrap",        // ← never wrap text
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#EA6C0A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#F97316";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Get Started Free
            </button>
          </div>

          {/* Image Section */}
          <div
            style={{
              position: "absolute",
              right: "40px",
              bottom: "0",
              width: "559px",
              height: "516px",
              pointerEvents: "none",
            }}
          >
            <Image
              src="/images/women2.png"
              alt="Woman pointing"
              fill
              style={{ objectFit: "contain", objectPosition: "bottom right" }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}