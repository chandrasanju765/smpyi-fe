"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface DealCard {
  id: number;
  title: string;
  images: string[];
}

const BASE_DEALS: DealCard[] = [
  {
    id: 1,
    title: "Revamp your home in style",
    images: ["/images/revamp1.png", "/images/revamp2.png"],
  },
  {
    id: 2,
    title: "Bulk Order Discount + Up to 18 % Savings",
    images: ["/images/bulkOrder1.png", "/images/bulkOrder2.png"],
  },
  {
    id: 3,
    title: "Appliances for your home | Up to 55% off",
    images: ["/images/Appliance1.png", "/images/Appliance2.png"],
  },
  {
    id: 4,
    title: "Starting ₹49 | Deals on home essentials",
    images: ["/images/49Deals1.png", "/images/49Deals2.png"],
  },
  {
    id: 5,
    title: "Summer Sale | Up to 40% off",
    images: ["/images/revamp1.png", "/images/revamp2.png"],
  },
  {
    id: 6,
    title: "Flash Deal | Limited Time Offer",
    images: ["/images/bulkOrder1.png", "/images/bulkOrder2.png"],
  },
  {
    id: 7,
    title: "Clearance Sale | Up to 70% off",
    images: ["/images/Appliance1.png", "/images/Appliance2.png"],
  },
  {
    id: 8,
    title: "New Arrivals | Shop Now",
    images: ["/images/49Deals1.png", "/images/49Deals2.png"],
  },
];

export function BestValueDeals() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const swipeRef    = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX   = useRef(0);

  const next = useCallback(() =>
    setCurrentIndex((prev) => (prev + 1 >= BASE_DEALS.length ? 0 : prev + 1)),
  []);

  const prev = useCallback(() =>
    setCurrentIndex((prev) => (prev - 1 < 0 ? BASE_DEALS.length - 1 : prev - 1)),
  []);

  // ── Attach non-passive touch listeners directly to the DOM ──
  useEffect(() => {
    const el = swipeRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchEndX.current   = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX.current = e.touches[0].clientX;
      // Prevent page scroll while swiping horizontally
      const diffX = Math.abs(touchEndX.current - touchStartX.current);
      if (diffX > 10) e.preventDefault();
    };

    const handleTouchEnd = () => {
      const delta = touchStartX.current - touchEndX.current;
      if (delta > 40)  next();
      if (delta < -40) prev();
    };

    // { passive: false } is required to allow preventDefault()
    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove",  handleTouchMove,  { passive: false });
    el.addEventListener("touchend",   handleTouchEnd,   { passive: true });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove",  handleTouchMove);
      el.removeEventListener("touchend",   handleTouchEnd);
    };
  }, [next, prev]);

  const getVisibleDeals = () => {
    const deals = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const dealIndex = (currentIndex + i) % BASE_DEALS.length;
      deals.push(BASE_DEALS[dealIndex]);
    }
    return deals;
  };

  const visibleDeals = getVisibleDeals();

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">

        {/* SECTION */}
        <div className="bg-orange-50 dark:bg-[#2B2934] rounded-2xl p-6 sm:p-8 border border-orange-100 dark:border-transparent">

          {/* HEADER */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <p
                className="font-poppins"
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  color: "#EA580C",
                }}
              >
                Everyday Listing
              </p>

              <h2
                className="font-poppins mt-1"
                style={{
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  color: "var(--deals-heading)",
                }}
              >
                Best Value Deals
              </h2>
            </div>

            <button
              onClick={next}
              className="
                flex items-center justify-center
                bg-[#F97316] text-white
                transition-all duration-300
                hover:scale-105 active:scale-95
              "
              style={{ width: "56px", height: "36px", borderRadius: "999px" }}
            >
              <svg
                width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* GRID — ref attached for non-passive touch listeners */}
          <div ref={swipeRef} style={{ touchAction: "pan-y", userSelect: "none" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {visibleDeals.map((deal, idx) => (
                <div
                  key={`${deal.id}-${currentIndex}-${idx}`}
                  className="
                    group bg-white rounded-xl
                    border border-[#E5E7EB]
                    transition-all duration-300
                    hover:bg-[#E5F0FF]
                    hover:shadow-lg
                    hover:-translate-y-2
                    overflow-hidden
                  "
                  style={{ width: "292px", height: "241px" }}
                >
                  {/* IMAGE AREA */}
                  <div className="relative px-3 pt-8 pb-2">
                    {deal.images.length === 2 ? (
                      <div className="flex gap-[14px]">
                        <div className="relative overflow-visible">
                          <img
                            src={deal.images[0]}
                            alt=""
                            className="
                              w-full h-auto object-cover rounded-[10px]
                              transition-all duration-300 ease-out
                              group-hover:-translate-y-3
                              group-hover:scale-[1.06]
                              group-hover:shadow-lg
                            "
                            style={{ width: "123px", height: "123px", borderRadius: "10px" }}
                          />
                        </div>
                        <div className="relative overflow-visible">
                          <img
                            src={deal.images[1]}
                            alt=""
                            className="
                              w-full h-auto object-cover rounded-[10px]
                              transition-all duration-300 ease-out
                              group-hover:-translate-y-3
                              group-hover:scale-[1.06]
                              group-hover:shadow-lg
                            "
                            style={{ width: "123px", height: "123px", borderRadius: "10px" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <div className="relative overflow-visible">
                          <img
                            src={deal.images[0]}
                            alt=""
                            className="
                              w-full h-auto object-cover rounded-[10px]
                              transition-all duration-300 ease-out
                              group-hover:-translate-y-3
                              group-hover:scale-[1.06]
                              group-hover:shadow-lg
                            "
                            style={{ width: "123px", height: "123px", borderRadius: "10px" }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TITLE */}
                  <div className="px-3 pt-2 pb-3">
                    <p
                      className="font-poppins text-sm font-medium line-clamp-2"
                      style={{ color: "#1E222F", lineHeight: "140%" }}
                    >
                      {deal.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}