"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface CategoryCard {
  id: number;
  title: string;
  price: string;
  image: string;
}

interface CategoryItem {
  id: number;
  name: string;
}

// ── Icons ──────────────────────────────────────────────
const AccessoriesIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#3B82F6" : "#374151"} strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
  </svg>
);

const ElectronicsIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#3B82F6" : "#374151"} strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

const LuggageIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#3B82F6" : "#374151"} strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <rect x="5" y="7" width="14" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);

const BeautyIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#3B82F6" : "#374151"} strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const PackagingIcon = ({ active }: { active: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke={active ? "#3B82F6" : "#374151"} strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ICONS = [
  AccessoriesIcon,
  ElectronicsIcon,
  LuggageIcon,
  BeautyIcon,
  PackagingIcon,
];

const getCategoryIcon = (index: number, active: boolean) => {
  const Icon = ICONS[index % ICONS.length];
  return <Icon active={active} />;
};

// ── Data ───────────────────────────────────────────────
const CATEGORY_ITEMS: CategoryItem[] = [
  { id: 1, name: "Accessories" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Luggage" },
  { id: 4, name: "Beauty" },
  { id: 5, name: "Packaging" },
  { id: 6, name: "Furniture" },
  { id: 7, name: "Home Decor" },
  { id: 8, name: "Kitchen" },
  { id: 9, name: "Fashion" },
  { id: 10, name: "Toys" },
  { id: 11, name: "Sports" },
  { id: 12, name: "Books" },
];

// Base 3 products — repeated for infinite looping
const BASE_PRODUCTS: CategoryCard[] = [
  { id: 1, title: "Bathroom mirror", price: "Rs1,476.51", image: "/images/bathroomMirror.png" },
  { id: 2, title: "Show Piece", price: "Rs1,476.51", image: "/images/show-piece.png" },
  { id: 3, title: "Wall Decor", price: "Rs1,476.51", image: "/images/wall-decor.png" },
];

// Repeat 4× so arrows never run out of cards to scroll to
const PRODUCTS: CategoryCard[] = [
  ...BASE_PRODUCTS,
  ...BASE_PRODUCTS.map((p) => ({ ...p, id: p.id + 10 })),
  ...BASE_PRODUCTS.map((p) => ({ ...p, id: p.id + 20 })),
  ...BASE_PRODUCTS.map((p) => ({ ...p, id: p.id + 30 })),
];

const VISIBLE = 3;   // cards shown at once
const GAP = 16;  // px gap between cards


// ── Component ──────────────────────────────────────────
export function CategoriesForYou() {
  const [activeCategory, setActiveCategory] = useState("Accessories");
  const [currentIndex, setCurrentIndex] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartIdx = useRef<number>(0);

  const getCardWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    return (trackRef.current.offsetWidth - 16 * (3 - 1)) / 3;
  }, []);

  const maxIndex = PRODUCTS.length - 3;

  const goTo = useCallback(
    (idx: number) => {
      const clamped = Math.max(0, Math.min(idx, maxIndex));
      setCurrentIndex(clamped);
    },
    [maxIndex]
  );

  const translateX = -(currentIndex * (getCardWidth() + 16));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartIdx.current = currentIndex;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 40) goTo(touchStartIdx.current + 1);
    if (delta < -40) goTo(touchStartIdx.current - 1);
  };

  const scrollSidebar = (dir: "up" | "down") => {
    sidebarRef.current?.scrollBy({
      top: dir === "up" ? -80 : 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto">

        {/* full section white */}
        <div className="flex gap-4 items-stretch rounded-2xl p-4 bg-white">

          {/* ══ LEFT SIDEBAR ══════════════════════════════════ */}
          <div
            className="rounded-2xl shadow-sm flex-shrink-0 flex flex-col"
            style={{ width: "325px", background: "#F1F1F1" }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-gray-100">
              <h2 className="font-poppins font-semibold text-[#1E222F] text-[15px]">
                Categories For you
              </h2>
            </div>

            {/* Scrollable list with visible scrollbar */}
            <div
              ref={sidebarRef}
              className="overflow-y-auto"
              style={{
                height: "230px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                scrollbarColor: "#9CA3AF transparent",
              }}
            >
              {CATEGORY_ITEMS.map((cat, i) => {
                const isActive = activeCategory === cat.name;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors duration-150 ${i !== CATEGORY_ITEMS.length - 1
                        ? "border-b border-gray-50"
                        : ""
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(i, isActive)}
                      <span
                        className="font-poppins text-sm font-medium"
                        style={{
                          color: isActive ? "#3B82F6" : "#1E222F",
                        }}
                      >
                        {cat.name}
                      </span>
                    </div>

                    {/* RIGHT ARROW */}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isActive ? "#3B82F6" : "#9CA3AF"}
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                );
              })}
            </div>

            {/* Down chevron */}
            <button
              onClick={() => scrollSidebar("down")}
              className="flex items-center justify-center py-1.5 hover:bg-gray-50 transition-colors rounded-b-2xl"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="#9CA3AF" strokeWidth="2.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          {/* ══ RIGHT CAROUSEL ════════════════════════════════ */}
          <div
            className="flex-1 rounded-xl relative flex items-center overflow-hidden"
            style={{ background: "#F1F1F1", padding: "16px 55px" }}
          >
            {/* LEFT ARROW */}
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="
                absolute left-2 z-10
                w-8 h-8 rounded-full bg-white shadow
                flex items-center justify-center
                hover:shadow-md transition-all duration-200
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#374151" strokeWidth="2.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Track */}
            <div className="w-full overflow-hidden">
              <div
                ref={trackRef}
                className="flex"
                style={{
                  gap: "16px",
                  transform: `translateX(${translateX}px)`,
                  transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
              >
                {PRODUCTS.map((product, idx) => (
                  <div
                    key={`${product.id}-${idx}`}
                    className="group flex-shrink-0 bg-white rounded-2xl overflow-hidden hover:shadow-xl"
                    style={{
                      width: `calc((100% - 32px) / 3)`,
                    }}
                  >
                    {/* Fixed Image component with explicit width, height, and unoptimized for local PNGs */}
                    <div className="relative w-full" style={{ height: "170px" }}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 300px"
                        className="object-cover group-hover:scale-105 transition duration-300"
                        unoptimized
                      />
                    </div>

                    <div className="px-3 py-3">
                      <h3 className="text-sm font-medium text-blue-500">
                        {product.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#1E222F]">
                        {product.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow */}
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={currentIndex >= maxIndex}
              className="
                absolute right-2 z-10
                w-8 h-8 rounded-full bg-white shadow
                flex items-center justify-center
                hover:shadow-md transition-all duration-200
                disabled:opacity-30 disabled:cursor-not-allowed
              "
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#374151" strokeWidth="2.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}