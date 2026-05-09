import { CategoryCard } from "@/components/ui/CategoryCard";


/* ─── Category data ───────────────────────────────────────────────────── */

const CATEGORIES = [
  { name: "Furniture", productCount: "12k + Products", iconSrc: "/images/sofa-1.png" },
  { name: "Electronics", productCount: "12k + Products", iconSrc: "/images/toaster-1.png" },
  { name: "Services", productCount: "12k + Products", iconSrc: "/images/mechanic-1.png" },
  { name: "Home Tool", productCount: "12k + Products", iconSrc: "/images/cleaning-1.png" },
  { name: "Wall Paper", productCount: "12k + Products", iconSrc: "/images/wallpaper-1.png" },
  { name: "Machinery", productCount: "12k + Products", iconSrc: "/images/sifter-1.png" },
  { name: "Sports", productCount: "12k + Products", iconSrc: "/images/sports.png" },
  { name: "Beauty", productCount: "12k + Products", iconSrc: "/images/makeup-1.png" },
];

export function CategoriesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          {/* Top label */}
          <p
            className="font-poppins"
            style={{
              fontWeight: 500,
              fontSize: 20,
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "var(--category-accent)",
            }}
          >
            Explore Our categories
          </p>

          {/* Main heading */}
          <h2
            className="font-poppins mt-2"
            style={{
              fontWeight: 500,
              fontSize: 36,
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "var(--category-heading)",
            }}
          >
            Find what you&apos;re looking for
          </h2>

          {/* Description */}
          <p
            className="font-poppins mt-3 mx-auto"
            style={{
              fontWeight: 400,
              fontSize: 16,
              lineHeight: "150%",
              letterSpacing: "0%",
              color: "var(--category-desc)",
              textAlign: "center",
              maxWidth: "495px",
            }}
          >
            Explore our extensive range of product and service categories
            tailored for every business need.
          </p>
        </div>

        {/* Grid — desktop: 4 cols, tablet: 2 cols, mobile: 1 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((cat) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              productCount={cat.productCount}
              icon={<img src={cat.iconSrc} alt={cat.name} />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}