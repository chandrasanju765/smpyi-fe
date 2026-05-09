"use client";

import { useState } from "react";

function NewsletterIllustration() {
  return (
    <svg
      viewBox="0 0 500 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* ── BACKGROUND CIRCLE GLOW ── */}
      <circle cx="260" cy="170" r="145" fill="#FDDCB5" opacity="0.45" />
      <circle cx="260" cy="170" r="105" fill="#FDDCB5" opacity="0.35" />

      {/* ── DESK / TABLE ── */}
      <rect x="80" y="272" width="340" height="16" rx="8" fill="#D4956A" />
      <rect x="120" y="286" width="18" height="40" rx="4" fill="#C07A50" />
      <rect x="360" y="286" width="18" height="40" rx="4" fill="#C07A50" />

      {/* ── OPEN MAILBOX BODY ── */}
      <rect x="155" y="140" width="190" height="135" rx="14" fill="#1E2840" />
      {/* Mailbox inner shadow top */}
      <rect x="155" y="140" width="190" height="20" rx="14" fill="#151E33" />
      {/* Mailbox front panel */}
      <rect x="165" y="160" width="170" height="100" rx="8" fill="#243050" />
      {/* Mailbox door open (right side hinged) */}
      <rect x="285" y="160" width="50" height="100" rx="4" fill="#1A2540" />
      {/* Door hinge */}
      <circle cx="288" cy="210" r="5" fill="#4B5563" />
      <circle cx="288" cy="210" r="2.5" fill="#9CA3AF" />
      {/* Door handle */}
      <circle cx="327" cy="210" r="7" fill="#374151" />
      <circle cx="327" cy="210" r="3.5" fill="#9CA3AF" />

      {/* ── MAIL SLOT ── */}
      <rect x="175" y="230" width="95" height="11" rx="5.5" fill="#0F172A" />
      <rect x="176" y="231" width="93" height="4" rx="2" fill="#374151" opacity="0.5" />

      {/* ── MAILBOX ROOF DOME ── */}
      <path
        d="M148 158 Q148 130 172 130 H328 Q352 130 352 158 V172 H148 Z"
        fill="#252F47"
      />
      <path
        d="M156 155 Q156 138 172 138 H328 Q344 138 344 155"
        stroke="#3D4F70"
        strokeWidth="3"
        fill="none"
      />

      {/* ── FLAG ── */}
      <rect x="340" y="135" width="7" height="55" rx="3" fill="#9CA3AF" />
      <path d="M347 138 L382 150 L347 163 Z" fill="#F97316" />

      {/* ── POST ── */}
      <rect x="237" y="275" width="24" height="10" rx="3" fill="#A06030" />

      {/* ── LARGE MAIN ENVELOPE (coming out) ── */}
      <g transform="translate(178, 185) rotate(-5)">
        {/* Envelope shadow */}
        <rect x="3" y="3" width="110" height="76" rx="6" fill="#D97706" opacity="0.2" />
        {/* Envelope body */}
        <rect x="0" y="0" width="110" height="76" rx="6" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="2" />
        {/* Envelope flap */}
        <path d="M0 0 L55 38 L110 0" stroke="#F59E0B" strokeWidth="2.5" fill="none" />
        {/* Letter lines */}
        <line x1="14" y1="50" x2="96" y2="50" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
        <line x1="14" y1="62" x2="75" y2="62" stroke="#E5E7EB" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* ── FLOATING ENVELOPE 1 — top left ── */}
      <g transform="translate(68, 72) rotate(-15)">
        <rect x="0" y="0" width="78" height="54" rx="5" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
        <path d="M0 0 L39 27 L78 0" stroke="#A78BFA" strokeWidth="2" fill="none" />
        <line x1="10" y1="36" x2="68" y2="36" stroke="#DDD6FE" strokeWidth="2" strokeLinecap="round" />
        <line x1="10" y1="46" x2="52" y2="46" stroke="#DDD6FE" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── FLOATING ENVELOPE 2 — top right ── */}
      <g transform="translate(360, 55) rotate(12)">
        <rect x="0" y="0" width="88" height="60" rx="5" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="2" />
        <path d="M0 0 L44 30 L88 0" stroke="#60A5FA" strokeWidth="2" fill="none" />
        <line x1="12" y1="40" x2="76" y2="40" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="51" x2="58" y2="51" stroke="#BFDBFE" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── FLOATING ENVELOPE 3 — bottom right ── */}
      <g transform="translate(378, 210) rotate(8)">
        <rect x="0" y="0" width="68" height="46" rx="4" fill="#D1FAE5" stroke="#34D399" strokeWidth="2" />
        <path d="M0 0 L34 22 L68 0" stroke="#34D399" strokeWidth="2" fill="none" />
        <line x1="10" y1="30" x2="58" y2="30" stroke="#A7F3D0" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── FLOATING ENVELOPE 4 — far left mid ── */}
      <g transform="translate(42, 185) rotate(-8)">
        <rect x="0" y="0" width="60" height="42" rx="4" fill="#FCE7F3" stroke="#F9A8D4" strokeWidth="2" />
        <path d="M0 0 L30 20 L60 0" stroke="#F9A8D4" strokeWidth="2" fill="none" />
      </g>

      {/* ── DOTTED MOTION LINES (email flying in) ── */}
      <path d="M90 100 Q140 80 180 120" stroke="#F97316" strokeWidth="2" strokeDasharray="5 4" opacity="0.5" fill="none" />
      <path d="M410 85 Q380 100 355 130" stroke="#60A5FA" strokeWidth="2" strokeDasharray="5 4" opacity="0.5" fill="none" />
      <path d="M420 230 Q400 220 380 225" stroke="#34D399" strokeWidth="2" strokeDasharray="4 3" opacity="0.5" fill="none" />

      {/* ── DECORATIVE DOTS ── */}
      <circle cx="58" cy="155" r="5" fill="#F97316" opacity="0.6" />
      <circle cx="448" cy="140" r="4" fill="#60A5FA" opacity="0.6" />
      <circle cx="430" cy="285" r="6" fill="#FCD34D" opacity="0.5" />
      <circle cx="72" cy="268" r="4" fill="#A78BFA" opacity="0.5" />
      <circle cx="455" cy="200" r="3" fill="#34D399" opacity="0.6" />
      <circle cx="100" cy="310" r="3" fill="#F9A8D4" opacity="0.5" />

      {/* ── STARS ── */}
      <text x="455" y="115" fontSize="22" fill="#F97316" opacity="0.8">✦</text>
      <text x="42" y="128" fontSize="16" fill="#A78BFA" opacity="0.7">✦</text>
      <text x="445" y="265" fontSize="14" fill="#FCD34D" opacity="0.8">✦</text>
      <text x="60" y="232" fontSize="12" fill="#F97316" opacity="0.45">✦</text>
      <text x="340" y="308" fontSize="10" fill="#60A5FA" opacity="0.5">✦</text>
    </svg>
  );
}

export default function BlogSubscribe() {
  const [email, setEmail] = useState("");
  const [hovered, setHovered] = useState(false);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-[1300px] mx-auto">
        <div
          className="relative w-full overflow-hidden rounded-2xl flex items-stretch"
          style={{
            background: "#FEF0E7",
            minHeight: "clamp(240px, 26vw, 340px)",
          }}
        >
          {/* LEFT — text + form */}
          <div className="relative z-10 flex flex-col justify-center gap-4 px-8 sm:px-14 py-12 w-full sm:w-[55%]">

            <span
              className="inline-block text-white text-[11px] font-bold px-3 py-1 rounded-full w-fit uppercase tracking-widest"
              style={{ background: "#F97316" }}
            >
              Exclusive Offers
            </span>

            <h2
              className="font-poppins font-bold text-[#0F172A] leading-snug m-0"
              style={{ fontSize: "clamp(18px, 2vw, 30px)" }}
            >
              Sign Up for the Deal Alert Newsletter.
            </h2>

            <p
              className="text-[#475569] m-0 leading-relaxed"
              style={{ fontSize: "clamp(12px, 0.9vw, 15px)" }}
            >
              Get first access to flash sales and members-only discounts.<br />
              Join over 50,000 smart shoppers today.
            </p>

            <div className="flex items-stretch" style={{ maxWidth: "460px" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="font-poppins text-[#374151] outline-none flex-1 min-w-0"
                style={{
                  padding: "12px 18px",
                  border: "1px solid #E2E8F0",
                  borderRight: "none",
                  borderRadius: "8px 0 0 8px",
                  background: "#fff",
                  fontSize: "clamp(12px, 0.85vw, 14px)",
                }}
              />
              <button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="font-poppins font-semibold text-white cursor-pointer border-none transition-colors duration-200 whitespace-nowrap shrink-0"
                style={{
                  padding: "12px 26px",
                  borderRadius: "0 8px 8px 0",
                  background: hovered ? "#1D4ED8" : "#2563EB",
                  fontSize: "clamp(12px, 0.85vw, 14px)",
                }}
              >
                Subscribe
              </button>
            </div>

            <p className="text-[#94A3B8] m-0" style={{ fontSize: "11px" }}>
              🔒 No spam, ever. Unsubscribe anytime.
            </p>
          </div>

          {/* RIGHT — full-height illustration panel */}
          <div className="hidden sm:block shrink-0" style={{ width: "45%" }}>
            <NewsletterIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}