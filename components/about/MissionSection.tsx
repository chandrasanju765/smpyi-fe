import ImageCarousel from "./ImageCarousel";

const missionImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900",
];

export default function MissionSection() {
  return (
    <section className="bg-white dark:bg-[#0F172A] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-14">

        {/* LEFT — text */}
        <div className="flex-1 min-w-0">
          <span className="inline-block border-[1.5px] border-[#F97316] text-[#F97316] rounded-full px-4 py-1 text-xs font-semibold mb-5 tracking-wide uppercase">
            Our Mission
          </span>

          <h2
            className="font-poppins font-bold text-[#1E222F] dark:text-white leading-snug mb-6"
            style={{ fontSize: "clamp(26px, 3vw, 46px)" }}
          >
            Making marketing simple for everyone.
          </h2>

          <p className="text-[#475569] dark:text-white/75 text-[15px] leading-relaxed mb-4">
            At SMPYI, we believe every business—big or small—deserves the power to shine.
            We set out to make brand promotion intuitive, removing the technical barriers
            that hold dreamers back.
          </p>

          <p className="text-[#475569] dark:text-white/75 text-[15px] leading-relaxed mb-10">
            We are built for the creators and shop owners who want their voice heard.
            Our platform offers modern tools to help you promote products with
            professional clarity and confidence.
          </p>

          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-poppins font-semibold text-[14px] rounded-lg transition-colors duration-200">
            Learn More →
          </button>
        </div>

        {/* RIGHT — Carousel */}
        <div className="flex-1 w-full" style={{ maxWidth: "560px" }}>
          <ImageCarousel images={missionImages} height="420px" />
        </div>

      </div>
    </section>
  );
}