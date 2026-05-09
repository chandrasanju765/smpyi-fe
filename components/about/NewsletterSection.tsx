"use client";

import { useState } from "react";

function MailboxSVG() {
  return (
    <svg viewBox="0 0 420 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <ellipse cx="210" cy="285" rx="110" ry="12" fill="#E8C9A0" opacity="0.5" />
      <rect x="196" y="200" width="18" height="90" rx="4" fill="#C87941" />
      <rect x="176" y="282" width="58" height="10" rx="4" fill="#A85E2A" />
      <rect x="100" y="110" width="220" height="110" rx="18" fill="#1E2535" />
      <path d="M100 128 Q100 110 118 110 H302 Q320 110 320 128 V145 H100 Z" fill="#252D40" />
      <path d="M108 128 Q108 118 118 118 H302 Q312 118 312 128" stroke="#3A4460" strokeWidth="3" fill="none" />
      <rect x="308" y="118" width="5" height="52" rx="2" fill="#9CA3AF" />
      <path d="M313 120 L340 130 L313 140 Z" fill="#F97316" />
      <rect x="130" y="175" width="100" height="10" rx="5" fill="#0F172A" />
      <rect x="131" y="176" width="98" height="3" rx="2" fill="#374151" opacity="0.6" />
      <circle cx="290" cy="163" r="8" fill="#374151" />
      <circle cx="290" cy="163" r="4" fill="#9CA3AF" />
      <g transform="translate(145, 155) rotate(-8)">
        <rect x="0" y="0" width="80" height="56" rx="4" fill="#FEF9C3" stroke="#FCD34D" strokeWidth="1.5" />
        <path d="M0 0 L40 28 L80 0" stroke="#FCD34D" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="36" x2="70" y2="36" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="46" x2="55" y2="46" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" />
      </g>
      <g transform="translate(295, 65) rotate(12)">
        <rect x="0" y="0" width="56" height="38" rx="3" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1.5" />
        <path d="M0 0 L28 18 L56 0" stroke="#93C5FD" strokeWidth="1.5" fill="none" />
      </g>
      <g transform="translate(55, 82) rotate(-10)">
        <rect x="0" y="0" width="46" height="32" rx="3" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="1.5" />
        <path d="M0 0 L23 14 L46 0" stroke="#F9A8D4" strokeWidth="1.5" fill="none" />
      </g>
      <g transform="translate(332, 188) rotate(7)">
        <rect x="0" y="0" width="44" height="30" rx="3" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5" />
        <path d="M0 0 L22 14 L44 0" stroke="#6EE7B7" strokeWidth="1.5" fill="none" />
      </g>
      <circle cx="80" cy="62" r="4" fill="#F97316" opacity="0.7" />
      <circle cx="368" cy="92" r="3" fill="#2563EB" opacity="0.6" />
      <circle cx="352" cy="220" r="5" fill="#FCD34D" opacity="0.5" />
      <circle cx="72" cy="175" r="3" fill="#F97316" opacity="0.4" />
      <text x="372" y="68" fontSize="18" fill="#F97316" opacity="0.8">✦</text>
      <text x="52" y="108" fontSize="13" fill="#2563EB" opacity="0.6">✦</text>
      <text x="360" y="170" fontSize="11" fill="#FCD34D" opacity="0.7">✦</text>
    </svg>
  );
}

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-[#F8FAFC] dark:bg-[#0A1628] px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-[1300px] mx-auto">
        <div
          className="relative w-full overflow-hidden rounded-2xl flex items-stretch"
          style={{ background: "#FEF0E7", minHeight: "clamp(220px, 24vw, 300px)" }}
        >
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-center gap-3.5 px-8 sm:px-14 py-10 w-full sm:w-[55%]">
            <span className="inline-block text-white text-[11px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest bg-[#F97316]">
              Exclusive Offers
            </span>
            <h2 className="font-poppins font-bold text-[#0F172A] leading-snug m-0"
              style={{ fontSize: "clamp(17px, 1.9vw, 28px)" }}>
              Sign Up for the Deal Alert Newsletter.
            </h2>
            <p className="text-[#475569] m-0 leading-relaxed text-[14px]">
              Get first access to flash sales and members-only discounts.<br />
              Join over 50,000 smart shoppers today.
            </p>
            <div className="flex items-stretch" style={{ maxWidth: "440px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="font-poppins text-[#374151] outline-none flex-1 min-w-0 text-[13px]"
                style={{
                  padding: "11px 16px",
                  border: "1px solid #E2E8F0",
                  borderRight: "none",
                  borderRadius: "8px 0 0 8px",
                  background: "#fff",
                }}
              />
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="font-poppins font-semibold text-white cursor-pointer border-none transition-colors duration-200 whitespace-nowrap shrink-0 text-[13px]"
                style={{
                  padding: "11px 22px",
                  borderRadius: "0 8px 8px 0",
                  background: hovered ? "#1D4ED8" : "#2563EB",
                }}
              >
                Subscribe
              </button>
            </div>
            <p className="text-[#94A3B8] m-0 text-[11px]">🔒 No spam, ever. Unsubscribe anytime.</p>
          </div>

          {/* RIGHT — SVG mailbox */}
          <div className="hidden sm:flex items-center justify-center shrink-0" style={{ width: "45%" }}>
            <MailboxSVG />
          </div>
        </div>
      </div>
    </section>
  );
}