"use client";

import { useEffect, useState } from "react";
import BlogCard from "../../components/blog/BlogCard";
import BlogFilter from "../../components/blog/BlogFilter";
import BlogSubscribe from "../../components/blog/BlogSubscribe";
import FeaturedBlog from "../../components/blog/FeaturedBlog";
import BlogSidebar from "../../components/blog/BlogSidebar";
import { Blog } from "../../components/blog/type";

const CATEGORIES = [
  "All Articles",
  "Digital Marketing",
  "Technology",
  "Business",
  "Startups",
  "Finance",
  "Productivity",
];

const MOCK_BLOGS: Blog[] = [
  {
    id: 1,
    slug: "tech-upgrades-smarter-lifestyle",
    title: "5 Must-Have Tech Upgrades for a Smarter Lifestyle in 2024",
    image: "/images/headphone.jpeg",
    category: "Technology",
    categoryColor: "#2563EB",
    author: "Arjun Mehta",
    authorAvatar: "https://i.pravatar.cc/32?img=11",
    date: "May 20, 2024",
    readTime: "5 min read",
    views: 1200,
    excerpt:
      "Explore the latest gadgets that can boost your productivity, entertainment, and everyday convenience.",
  },
  {
    id: 2,
    slug: "transform-home-budget",
    title: "7 Ways to Transform Your Home on a Budget",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Home & Living",
    categoryColor: "#16A34A",
    author: "Neha Sharma",
    authorAvatar: "https://i.pravatar.cc/32?img=47",
    date: "May 18, 2024",
    readTime: "4 min read",
    views: 2400,
    excerpt:
      "Simple and affordable ideas to refresh your space and give your home a stylish new look.",
  },
  {
    id: 3,
    slug: "summer-style-guide-fashion",
    title: "Summer Style Guide: Top Fashion Picks for 2024",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Fashion",
    categoryColor: "#7C3AED",
    author: "Riya Kapoor",
    authorAvatar: "https://i.pravatar.cc/32?img=45",
    date: "May 15, 2024",
    readTime: "6 min read",
    views: 1800,
    excerpt:
      "Stay cool and stylish this season with our handpicked fashion essentials.",
  },
  {
    id: 4,
    slug: "best-deals-online",
    title: "How to Find the Best Deals Online (Every Time)",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    category: "Deals & Offers",
    categoryColor: "#EA580C",
    author: "Karan Verma",
    authorAvatar: "https://i.pravatar.cc/32?img=15",
    date: "May 12, 2024",
    readTime: "5 min read",
    views: 3100,
    excerpt:
      "Proven tips and tricks to help you save more and shop smarter every time you browse.",
  },
  {
    id: 5,
    slug: "smart-home-appliances",
    title: "Smart Home Appliances Worth Every Penny",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
    category: "Home & Living",
    categoryColor: "#16A34A",
    author: "Priya Nair",
    authorAvatar: "https://i.pravatar.cc/32?img=23",
    date: "May 10, 2024",
    readTime: "4 min read",
    views: 2000,
    excerpt:
      "Make your life easier with these smart appliances that are true game changers.",
  },
  {
    id: 6,
    slug: "laptop-buying-guide",
    title: "Laptop Buying Guide: How to Choose the Right One",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80",
    category: "Technology",
    categoryColor: "#2563EB",
    author: "Arjun Mehta",
    authorAvatar: "https://i.pravatar.cc/32?img=11",
    date: "May 8, 2024",
    readTime: "6 min read",
    views: 2600,
    excerpt:
      "Everything you need to know before buying a laptop that fits your needs and budget.",
  },
  {
    id: 7,
    slug: "content-marketing-strategies",
    title: "Content Marketing Strategies That Drive Real Results",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Digital Marketing",
    categoryColor: "#0891B2",
    author: "Sneha Iyer",
    authorAvatar: "https://i.pravatar.cc/32?img=44",
    date: "May 5, 2024",
    readTime: "7 min read",
    views: 1900,
    excerpt:
      "Learn the content marketing strategies that attract, engage, and convert your audience.",
  },
];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchQuery, setSearchQuery] = useState("");
  const [btnHovered, setBtnHovered] = useState(false);

  useEffect(() => {
    setBlogs(MOCK_BLOGS);
  }, []);

  const filtered = blogs.filter((b) => {
    const matchCat =
      activeCategory === "All Articles" || b.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0F172A]" style={{ minHeight: "100vh" }}>

      {/* HERO */}
      <div className="px-4 sm:px-6 lg:px-8 pt-4">
        <section
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            height: "clamp(280px, 40vw, 480px)",
            background: "linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 50%, #FFF7ED 100%)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=900&q=80"
            alt="Blog workspace"
            className="absolute top-0 right-0 h-full object-cover object-center"
            style={{ width: "52%" }}
          />
          <div
            className="absolute top-0 right-0 h-full pointer-events-none"
            style={{ width: "52%", background: "linear-gradient(to right, #EFF6FF 0%, transparent 28%)" }}
          />
          <div className="relative z-[2] h-full flex items-center px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col justify-center w-full sm:w-[55%] lg:w-[42%]">
              <span className="inline-block border-[1.5px] border-[#F97316] text-[#F97316] rounded-full px-4 py-1 text-xs font-semibold mb-4 w-fit tracking-wide">
                OUR BLOG
              </span>
              <h1 className="font-poppins font-bold text-[#0F172A] leading-snug mb-3" style={{ fontSize: "clamp(18px, 2.4vw, 42px)" }}>
                Business Insights &amp; <span className="text-[#F97316]">Resources</span>
              </h1>
              <p className="text-[#64748B] leading-relaxed mb-5" style={{ fontSize: "clamp(11px, 0.95vw, 15px)" }}>
                Stay informed with expert insights, industry trends, and practical tips to grow smarter every day.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                {[
                  { icon: "📄", value: "120+", label: "Articles" },
                  { icon: "👥", value: "50K+", label: "Readers" },
                  { icon: "🔄", value: "Weekly", label: "New Updates" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-9 h-9 rounded-[10px] bg-white flex items-center justify-center text-base shadow-sm">{s.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-[#0F172A]">{s.value}</div>
                      <div className="text-[11px] text-[#94A3B8]">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onMouseEnter={() => setBtnHovered(true)}
                onMouseLeave={() => setBtnHovered(false)}
                className="font-poppins font-semibold text-white rounded-lg px-6 py-3 border-none cursor-pointer w-fit transition-all duration-200"
                style={{
                  fontSize: "clamp(12px, 0.9vw, 15px)",
                  background: btnHovered ? "#2563EB" : "#F97316",
                  transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
                }}
              >
                Explore Articles →
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* FILTER */}
      <div className="px-4 sm:px-6 lg:px-8">
        <BlogFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      {/* MAIN CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-[1300px] mx-auto">
          {/* items-start prevents sidebar from stretching to match left column height */}
          <div
            className="grid gap-8 items-start"
            style={{ gridTemplateColumns: "1fr clamp(280px, 26%, 360px)" }}
          >
            {/* LEFT */}
            <div className="min-w-0 flex flex-col gap-6">
              {featured && <FeaturedBlog blog={featured} />}

              <div
                className="grid gap-6"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(clamp(200px, 26%, 300px), 1fr))",
                }}
              >
                {rest.map((b) => (
                  <BlogCard key={b.id} blog={b} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-4 items-center flex-wrap">
                {["‹", "1", "2", "3", "4", "...", "10", "›"].map((p, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-poppins cursor-pointer transition-colors duration-150"
                    style={{
                      border: p === "1" ? "none" : "1px solid",
                      borderColor: p === "1" ? "transparent" : "var(--border, #E2E8F0)",
                      background: p === "1" ? "#F97316" : "var(--bg-card, #fff)",
                      color: p === "1" ? "#fff" : "var(--text-primary, #374151)",
                      fontWeight: p === "1" ? 700 : 400,
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* SIDEBAR — sticky so it stays in view while scrolling */}
            <div className="sticky top-[60px]">
              <BlogSidebar blogs={blogs} />
            </div>
          </div>
        </div>
      </section>

      <BlogSubscribe />
    </div>
  );
}