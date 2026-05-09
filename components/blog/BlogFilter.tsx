"use client";

interface Props {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function BlogFilter({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: Props) {
  return (
    <div
      className="
        bg-white dark:bg-[#0F172A]
        border-b border-[#E2E8F0] dark:border-[#2E3D5F]
        sticky top-0 z-20
        flex items-center justify-between gap-4 flex-wrap
        px-0 py-3
      "
    >
      {/* Category pills */}
      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="
                px-4 py-[7px] rounded-full
                font-poppins text-[13px] cursor-pointer
                transition-all duration-200 whitespace-nowrap
              "
              style={{
                border: isActive ? "none" : "1px solid",
                borderColor: isActive ? "transparent" : "var(--border, #E2E8F0)",
                background: isActive ? "#F97316" : "transparent",
                color: isActive
                  ? "#fff"
                  : "var(--text-primary, #374151)",
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Search + Sort */}
      <div className="flex gap-2.5 items-center">
        <div className="relative">
          <input
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles..."
            className="
              py-2 pl-3.5 pr-9
              border border-[#E2E8F0] dark:border-[#2E3D5F]
              rounded-lg font-poppins text-[13px]
              text-[#374151] dark:text-[#F1F5F9]
              bg-white dark:bg-[#1A2744]
              outline-none focus:border-[#F97316]
              transition-colors duration-200
            "
            style={{ width: "clamp(140px, 14vw, 220px)" }}
          />
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2"
            width="15" height="15" viewBox="0 0 24 24" fill="none"
            stroke="#9CA3AF" strokeWidth="2.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        <select
          className="
            py-2 px-3
            border border-[#E2E8F0] dark:border-[#2E3D5F]
            rounded-lg font-poppins text-[13px]
            text-[#374151] dark:text-[#F1F5F9]
            bg-white dark:bg-[#1A2744]
            cursor-pointer outline-none
            transition-colors duration-200
          "
        >
          <option>Latest</option>
          <option>Most Viewed</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
  );
}