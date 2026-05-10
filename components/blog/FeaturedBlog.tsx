import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../components/blog/type";

interface Props {
  blog: Blog;
}

const RELATED_TAGS = ["Gadgets", "Productivity", "Tech 2024", "Smart Devices"];

export default function FeaturedBlog({ blog }: Props) {
  return (
    <div className="flex flex-col sm:flex-row bg-white dark:bg-[#1A2744] rounded-2xl overflow-hidden border border-[#E2E8F0] dark:border-[#2E3D5F] shadow-[0_2px_12px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]">

      {/* Image — fill inside a sized relative container */}
      <div
        className="relative shrink-0 w-full sm:w-[36%] bg-[#FFF7ED] dark:bg-[#0F172A]"
        style={{ height: "300px" }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="36vw"
          className="object-cover"
          priority
        />
        <span className="absolute top-3 left-3 bg-[#1D4ED8] text-white text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase z-10">
          Featured Article
        </span>
        <span className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 text-white text-[10px] px-2.5 py-1 rounded-full z-10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          {blog.readTime}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 text-white text-[10px] px-2.5 py-1 rounded-full z-10">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
          {(blog.views / 1000).toFixed(1)}K views
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between gap-3 p-5 sm:p-6">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: blog.categoryColor ?? "#2563EB" }}>
              {blog.category}
            </span>
            <div className="flex items-center gap-1.5">
              {[
                <svg key="x" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                <svg key="li" width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>,
                <svg key="bm" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>,
              ].map((icon, i) => (
                <button key={i} className="w-6 h-6 rounded-full flex items-center justify-center bg-[#F1F5F9] dark:bg-[#0F172A] text-[#64748B] hover:bg-[#E2E8F0] transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          <h2 className="font-poppins font-bold text-[#0F172A] dark:text-[#F1F5F9] leading-snug m-0" style={{ fontSize: "clamp(15px, 1.5vw, 21px)" }}>
            {blog.title}
          </h2>

          <p className="text-[#475569] dark:text-[#CBD5E1] text-[13px] leading-relaxed line-clamp-3 m-0">
            {blog.excerpt}
          </p>

          {/* Author */}
          <div className="flex items-center gap-1.5 text-[12px] text-[#475569] dark:text-[#CBD5E1] flex-wrap">
            {blog.authorAvatar && (
              <div className="relative w-6 h-6 rounded-full overflow-hidden ring-2 ring-[#F97316]/30 shrink-0">
                <Image src={blog.authorAvatar} alt={blog.author} fill sizes="24px" className="object-cover" />
              </div>
            )}
            <span>By <strong className="text-[#0F172A] dark:text-[#F1F5F9]">{blog.author}</strong></span>
            <span className="text-[#94A3B8]">•</span>
            <span>{blog.date}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-wrap gap-1.5">
            {RELATED_TAGS.map((tag) => (
              <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F1F5F9] dark:bg-[#0F172A] text-[#475569] dark:text-[#94A3B8] cursor-pointer hover:bg-[#E2E8F0] transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          <div className="h-px bg-[#E2E8F0] dark:bg-[#2E3D5F]" />
          <div className="flex items-center justify-between gap-2">
            <Link href={`/blog/${blog.slug}`} className="inline-flex items-center gap-1.5 px-4 py-2 border-[1.5px] border-[#F97316] text-[#F97316] font-semibold text-[13px] rounded-lg transition-all duration-200 hover:bg-[#F97316] hover:text-white">
              Read Full Article →
            </Link>
            <div className="flex items-center gap-1 text-[12px] text-[#94A3B8]">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              248 likes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}