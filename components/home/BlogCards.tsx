"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BLOGS = [
  {
    image: "/images/blog1.png",
    category: "Digital Marketing",
    title: "What You Must Do Before Launching a Product: A Complete Pre-Launch Checklist for 2026",
    desc: "Discover the ultimate pre-launch checklist for 2026. Learn what you must do before launching a product, from market rese...",
    author: "Smpyi",
    date: "16 March 2026",
  },
  {
    image: "/images/blog4.png",
    category: "Digital Marketing",
    title: "What You Must Do Before Launching a Product: A Complete Pre-Launch Checklist for 2026",
    desc: "Discover the ultimate pre-launch checklist for 2026. Learn what you must do before launching a product, from market rese...",
    author: "Smpyi",
    date: "16 March 2026",
  },
  {
    image: "/images/blog5.png",
    category: "Digital Marketing",
    title: "What You Must Do Before Launching a Product: A Complete Pre-Launch Checklist for 2026",
    desc: "Discover the ultimate pre-launch checklist for 2026. Learn what you must do before launching a product, from market rese...",
    author: "Smpyi",
    date: "16 March 2026",
  },
];

export default function BlogCards() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* ── Entrance ── */
        .blog-card {
          opacity: 0;
          transform: translateY(48px);
          transition:
            opacity 0.6s cubic-bezier(.4,0,.2,1),
            transform 0.6s cubic-bezier(.4,0,.2,1),
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }
        .blog-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .blog-card:nth-child(1) { transition-delay: 0s;    }
        .blog-card:nth-child(2) { transition-delay: 0.15s; }
        .blog-card:nth-child(3) { transition-delay: 0.30s; }

        /* ── Hover lift + glow ── */
        .blog-card:hover {
          transform: translateY(-10px) scale(1.012);
          box-shadow:
            0 20px 48px rgba(47, 75, 165, 0.18),
            0 4px 16px rgba(47, 75, 165, 0.10);
          border-color: #2F4BA5 !important;
        }

        /* ── Image zoom ── */
        .blog-card .blog-img {
          transition: transform 0.55s cubic-bezier(.4,0,.2,1);
        }
        .blog-card:hover .blog-img {
          transform: scale(1.08);
        }

        /* ── Shimmer sweep ── */
        .blog-card .shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            120deg,
            transparent 30%,
            rgba(255,255,255,0.08) 50%,
            transparent 70%
          );
          background-size: 200% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .blog-card:hover .shimmer {
          opacity: 1;
          animation: shimmer-slide 0.8s ease forwards;
        }
        @keyframes shimmer-slide {
          from { background-position: 200% center; }
          to   { background-position: -200% center; }
        }
      `}</style>

      <section className="py-16 px-4 bg-white dark:bg-[#111827]" ref={sectionRef}>
        <div className="max-w-[1300px] mx-auto">
          <div className="flex justify-center gap-6 flex-wrap">
            {BLOGS.map((blog, index) => (
              <div
                key={index}
                className={`blog-card flex flex-col overflow-hidden cursor-pointer${visible ? " visible" : ""}`}
                style={{
                  width: "413px",
                  height: "456px",
                  borderRadius: "10px",
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#FFFFFF",
                  flexShrink: 0,
                }}
              >
                {/* ── Image ── */}
                <div
                  className="relative flex-shrink-0 overflow-hidden"
                  style={{
                    width: "413px",
                    height: "278px",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="blog-img object-cover"
                  />

                  <div className="shimmer" />

                  {/* Category Badge */}
                  <div
                    className="absolute top-4 left-4"
                    style={{
                      backgroundColor: "rgba(50,50,50,0.75)",
                      backdropFilter: "blur(4px)",
                      borderRadius: "20px",
                      padding: "6px 14px",
                    }}
                  >
                    <span
                      className="font-poppins font-normal text-white"
                      style={{ fontSize: "12px", lineHeight: "100%" }}
                    >
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* ── Body ── */}
                <div className="flex flex-col justify-between flex-1 px-4 pt-4">
                  <div className="flex flex-col gap-2">
                    <h3
                      className="font-poppins font-medium"
                      style={{
                        fontSize: "14px",
                        lineHeight: "140%",
                        color: "#1E222F",
                      }}
                    >
                      {blog.title}
                    </h3>
                    <p
                      className="font-poppins font-normal"
                      style={{
                        fontSize: "14px",
                        lineHeight: "140%",
                        color: "#6B7280",
                      }}
                    >
                      {blog.desc}
                    </p>
                  </div>

                  {/* ── Footer bar — exactly as original ── */}
                  <div
                    className="flex items-center justify-between px-4"
                    style={{
                      backgroundColor: "#2F4BA5",
                      height: "48px",
                      marginLeft: "-16px",
                      marginRight: "-16px",
                      marginTop: "12px",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="flex items-center justify-center rounded-full bg-white flex-shrink-0"
                        style={{ width: "28px", height: "28px" }}
                      >
                        <span
                          className="font-poppins font-semibold text-[#2F4BA5]"
                          style={{ fontSize: "12px" }}
                        >
                          S
                        </span>
                      </div>
                      <span
                        className="font-poppins font-medium text-white"
                        style={{ fontSize: "13px" }}
                      >
                        {blog.author}
                      </span>
                    </div>
                    <span
                      className="font-poppins font-normal text-white/90"
                      style={{ fontSize: "13px" }}
                    >
                      {blog.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}