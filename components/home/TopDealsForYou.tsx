"use client";

import { useState } from "react";
import Image from "next/image";

interface DealItem {
  id: number;
  title: string;
  price: string;
  image: string;
}

const TOP_DEALS: DealItem[] = [
  { id: 1, title: "Bathroom mirror", price: "Rs1,476.51", image: "/images/bathroomMirror.png" },
  { id: 2, title: "Sofa", price: "Rs1,476.51", image: "/images/sofa.png" },
  { id: 3, title: "Projector", price: "Rs1,476.51", image: "/images/projector.png" },
  { id: 4, title: "Watch Fastrack", price: "Rs1,476.51", image: "/images/watch.png" },
  { id: 5, title: "Monitors", price: "Rs1,476.51", image: "/images/monitors.png" },
];

const TICKER_ITEMS = [
  "Business Promotion",
  "Lead Generation",
  "Buy Product",
  "List Product",
  "Post Deals",
  "Free Registration",
  "Best Deal",
  "Supplier Discovery",
  "B2B Connect",
  "Grow Your Business",
  "Explore Categories",
  "Find Buyers",
  "Bulk Orders",
  "Verified Sellers",
];

export function TopDealsForYou() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <style>{`
        .ticker-wrapper {
          overflow: hidden;
          width: 100%;
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker-scroll 28s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[#F97316] text-sm font-poppins mb-1">
                Everyday Listing
              </p>
              <h2
                className="font-poppins font-medium"
                style={{ fontSize: "28px", lineHeight: "120%", color: "var(--category-heading)" }}
              >
                Top deals for You
              </h2>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
            {TOP_DEALS.map((deal) => (
              <div
                key={deal.id}
                className="
                  bounce-card
                  bg-white rounded-xl
                  border border-[#E5E7EB]
                  hover:bg-[#E5F0FF]
                  hover:shadow-lg
                  transition
                "
              >
                 <div className="relative m-4 mb-2 rounded-lg overflow-hidden" style={{ height: "160px" }}>
                  <Image
                    src={deal.image}
                    alt={deal.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 pb-2">
                  <p className="text-sm font-medium text-[#1E222F] font-poppins">{deal.title}</p>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-base font-semibold text-[#F97316] font-poppins">{deal.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full-bleed ticker — outside max-w container ── */}
        <div
          className="ticker-wrapper mt-6"
          style={{
            width: "100vw",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#C3D1FF",
            height: "58px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="ticker-track">
            {/* Render twice — second copy makes the loop seamless */}
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2"
                style={{ padding: "0 28px" }}  // ← consistent left+right padding on every item
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "#1E222F",
                    flexShrink: 0,
                  }}
                />
                <span
                  className="font-poppins"
                  style={{
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "#1E222F",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}