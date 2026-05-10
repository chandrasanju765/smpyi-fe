import Image from "next/image";
import Link from "next/link";
import { Blog } from "../../components/blog/type";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block bg-white dark:bg-[#1A2744] rounded-2xl overflow-hidden border border-[#F1F5F9] dark:border-[#2E3D5F] shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] text-inherit no-underline transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
    >
      {/* Image — fill inside clamp-height container */}
      <div className="relative overflow-hidden" style={{ height: "clamp(160px, 14vw, 220px)" }}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
          className="object-cover transition-transform duration-400 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="p-[clamp(14px,1.5vw,20px)]">
        <span className="text-[11px] font-bold tracking-[0.6px] uppercase" style={{ color: blog.categoryColor ?? "#2563EB" }}>
          {blog.category}
        </span>

        <h3 className="font-poppins font-semibold text-[#0F172A] dark:text-[#F1F5F9] leading-snug my-2" style={{ fontSize: "clamp(13px, 1.05vw, 16px)" }}>
          {blog.title}
        </h3>

        <p className="text-[#475569] dark:text-[#CBD5E1] leading-relaxed mb-3 line-clamp-2" style={{ fontSize: "clamp(12px, 0.88vw, 14px)" }}>
          {blog.excerpt}
        </p>

        {/* Author */}
        <div className="flex items-center gap-1.5 text-xs text-[#475569] dark:text-[#94A3B8] mb-3 flex-wrap">
          {blog.authorAvatar && (
            <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0">
              <Image src={blog.authorAvatar} alt={blog.author} fill sizes="24px" className="object-cover" />
            </div>
          )}
          <span className="text-[#374151] dark:text-[#CBD5E1] font-medium">{blog.author}</span>
          <span className="text-[#D1D5DB]">•</span>
          <span>{blog.date}</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-[#9CA3AF] border-t border-[#F1F5F9] dark:border-[#2E3D5F] pt-2.5">
          <div className="flex items-center gap-3">
            <span>👁 {(blog.views / 1000).toFixed(1)}K</span>
            <span>⏱ {blog.readTime}</span>
          </div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}