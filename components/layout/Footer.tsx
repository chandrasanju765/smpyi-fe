"use client";

import Image from "next/image";
import Link from "next/link";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { icon: <FacebookIcon />, href: "#", label: "Facebook", defaultBg: "#F97316", hoverBg: "#1E40AF" },
  { icon: <LinkedInIcon />, href: "#", label: "LinkedIn",  defaultBg: "#1E40AF", hoverBg: "#F97316" },
  { icon: <InstagramIcon />, href: "#", label: "Instagram", defaultBg: "#F97316", hoverBg: "#1E40AF" },
];

const navColumns = [
  {
    title: "Platform",
    links: ["Find business", "Browse Products", "Promotions", "Blog"],
  },
  {
    title: "Business",
    links: ["Register Business", "Dashboard", "Pricing", "Support"],
  },
  {
    title: "Company",
    links: ["About Us", "Contact", "Privacy Policy", "Terms & Conditions"],
  },
];

export function Footer() {
  return (
    <>
      {/* ── Ball pop keyframes ── */}
      <style>{`
        .social-icon {
          transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-color 0.22s ease,
                      box-shadow 0.22s ease;
        }
        .social-icon:hover {
          transform: scale(1.28);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        }
      `}</style>

      <footer style={{ backgroundColor: "#06143A", marginTop: "64px" }}>
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "60px 32px 32px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
              gap: "40px",
            }}
          >
            {/* ── Logo + Description ── */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Smpyi"
                width={166}
                height={43}
                style={{ marginBottom: "20px" }}
              />

              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#D9D8D8",
                  lineHeight: "170%",
                  margin: 0,
                }}
              >
                Your premier platform for business promotion and supplier
                discovery. Connect, grow, and succeed together.
              </p>

              {/* ── Social Icons ── */}
              <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                {socialLinks.map(({ icon, href, label, defaultBg, hoverBg }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="social-icon"
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: defaultBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = hoverBg;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = defaultBg;
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Nav Columns ── */}
            {navColumns.map(({ title, links }) => (
              <div key={title}>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#ffffff",
                    fontSize: "18px",
                    fontWeight: 600,
                    marginBottom: "20px",
                    marginTop: 0,
                  }}
                >
                  {title}
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        style={{
                          fontFamily: "Poppins, sans-serif",
                          color: "#D9D8D8",
                          fontSize: "15px",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          lineHeight: "1.5",
                          transition: "color 0.18s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#F97316")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#D9D8D8")}
                      >
                        <span style={{ color: "#F97316", fontSize: "18px", lineHeight: 1 }}>•</span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom Line ── */}
          <div
            style={{
              marginTop: "48px",
              paddingTop: "24px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
                color: "#D9D8D8",
                fontSize: "14px",
                margin: 0,
              }}
            >
              © 2026 Smpyi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}