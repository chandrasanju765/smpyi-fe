"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductCard {
  id: number;
  category: string;
  images: string[];
}

const PRODUCTS: ProductCard[] = [
  {
    id: 1,
    category: "Furniture",
    images: ["/images/furniture1.png", "/images/furniture2.png"],
  },
  {
    id: 2,
    category: "Kitchen Appliances",
    images: ["/images/kitchen1.png", "/images/kitchen2.png"],
  },
  {
    id: 3,
    category: "Laptop",
    images: ["/images/laptop1.png", "/images/laptop2.png"],
  },
  {
    id: 4,
    category: "Bathroom Accessories",
    images: ["/images/bathroom1.png", "/images/bathroom2.png"],
  },
  {
    id: 5,
    category: "Furniture",
    images: ["/images/furniture1.png", "/images/furniture2.png"],
  },
  {
    id: 6,
    category: "Kitchen Appliances",
    images: ["/images/kitchen1.png", "/images/kitchen2.png"],
  },
  {
    id: 7,
    category: "Laptop",
    images: ["/images/laptop1.png", "/images/laptop2.png"],
  },
  {
    id: 8,
    category: "Bathroom Accessories",
    images: ["/images/bathroom1.png", "/images/bathroom2.png"],
  },
];

export function MostSellingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const next = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= PRODUCTS.length) return 0;
      return nextIndex;
    });
  };

  const getVisibleProducts = () => {
    const products = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const productIndex = (currentIndex + i) % PRODUCTS.length;
      products.push(PRODUCTS[productIndex]);
    }
    return products;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-12 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">

        {/* SECTION */}
        <div className="bg-[#F0F9FF] dark:bg-[#1A202C] rounded-2xl p-6 sm:p-8 border border-[#E0F2FE] dark:border-transparent">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p
                className="font-poppins"
                style={{
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: "120%",
                  color: "#0284C7",
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
                  color: "var(--category-heading)",
                }}
              >
                Most Selling Product
              </h2>
            </div>

            {/* ARROW BUTTON */}
            <button
              onClick={next}
              className="
                flex items-center justify-center
                bg-[#0284C7]
                text-white
                transition-all duration-300
                hover:scale-105 active:scale-95
                shadow-sm hover:shadow-md
              "
              style={{
                width: "48px",
                height: "32px",
                borderRadius: "999px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleProducts.map((product, idx) => (
              <div
                key={`${product.id}-${currentIndex}-${idx}`}
                className="
                  group bg-white rounded-xl
                  border border-[#E5E7EB]
                  transition-all duration-300
                  hover:bg-[#E5F0FF]
                  hover:shadow-lg
                  hover:-translate-y-1
                  overflow-hidden
                "
                style={{
                  width: "292px",
                  height: "241px",
                }}
              >
                {/* IMAGE AREA */}
                <div className="relative px-3 pt-8 pb-2">
                 <div className="flex gap-1.5">
  {product.images.map((src, i) => (
    <div
      key={i}
      className="relative overflow-hidden rounded-[10px]"
      style={{
        width: "123px",
        height: "123px",
      }}
    >
      {/* IMAGE */}
      <img
        src={src}
        alt={product.category}
        className="
          w-full h-full object-cover
          transition-all duration-400 ease-out

          /* subtle lift */
          group-hover:-translate-y-2

          /* very soft zoom */
          group-hover:scale-[1.03]
        "
      />

      {/* SOFT OVERLAY (premium feel) */}
      <div
        className="
          absolute inset-0 rounded-[10px]
          bg-black/0
          transition-all duration-400
          group-hover:bg-black/5
        "
      />
    </div>
  ))}
</div>
                </div>

                {/* CATEGORY TEXT */}
                <div className="px-3 pt-2 pb-3">
                  <p
                    className="font-poppins text-sm"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      lineHeight: "100%",
                      color: "#1E222F",
                    }}
                  >
                    {product.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}