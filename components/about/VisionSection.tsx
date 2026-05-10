import ImageCarousel from "./ImageCarousel";

const visionImages = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900",
];

export default function VisionSection() {
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#0A1628] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT — Carousel */}
        <div className="flex-1 w-full order-2 lg:order-1" style={{ maxWidth: "560px" }}>
          <ImageCarousel images={visionImages} height="420px" />
        </div>

        {/* RIGHT — text */}
        <div className="flex-1 min-w-0 order-1 lg:order-2">
          <span className="inline-block border-[1.5px] border-[#F97316] text-[#F97316] rounded-full px-4 py-1 text-xs font-semibold mb-5 tracking-wide uppercase">
            Our Vision
          </span>

          <h2
            className="font-poppins font-bold text-[#1E222F] dark:text-white leading-snug mb-6"
            style={{ fontSize: "clamp(26px, 3vw, 46px)" }}
          >
            Redefining digital growth.
          </h2>

          <p className="text-[#475569] dark:text-white/75 text-[15px] leading-relaxed mb-6">
            We aim to create a space where every entrepreneur can access powerful
            marketing tools without feeling overwhelmed. We inspire confidence
            and build genuine connections.
          </p>

          {/* Quote box */}
          <div className="relative bg-[#EEF3FA] dark:bg-white/10 border-l-4 border-[#F97316] rounded-r-xl px-6 py-5 mb-6">
            <span className="text-[#F97316] text-4xl font-serif leading-none absolute -top-2 left-4">
              &ldquo;
            </span>
            <p className="text-[#1E222F] dark:text-white text-[14px] font-medium italic leading-relaxed pl-4">
              Our vision is to make marketing not just a necessity, but a journey
              of discovery and growth for every business.
            </p>
          </div>

          <p className="text-[#475569] dark:text-white/75 text-[15px] leading-relaxed">
            We aim to create a space where every entrepreneur can access powerful
            marketing tools without feeling overwhelmed. We inspire confidence
            and build genuine connections.
          </p>
        </div>

      </div>
    </section>
  );
}