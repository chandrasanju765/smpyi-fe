const items = [
  {
    title: "Smart Feed Sharing",
    desc: "Seamless post sharing that keeps your audience engaged and connected across all platforms.",
    icon: "🔗",
  },
  {
    title: "Premium Product Pages",
    desc: "Elegant, customizable pages that showcase your products with professional clarity and charm.",
    icon: "⭐",
  },
  {
    title: "AI Growth Engine",
    desc: "Intelligent insights that analyze reviews and consumer behavior to guide your business growth.",
    icon: "🚀",
  },
];

export default function WhatWeDo() {
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#060F1E] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1300px] mx-auto">

        {/* Header — "Our Services" replaces duplicate "What We Do" label */}
        <div className="text-center mb-14">
          <span className="text-[#2563EB] dark:text-[#60A5FA] text-[12px] font-bold tracking-[0.18em] uppercase mb-3 block">
            Our Services
          </span>
          <h2
            className="font-poppins font-bold text-[#1E222F] dark:text-white mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 42px)" }}
          >
            What We Do
          </h2>
          <p className="text-[#64748B] dark:text-white/60 text-[15px] max-w-[500px] mx-auto leading-relaxed">
            Blending creativity with cutting-edge technology to give every brand
            the power to stand out in a crowded digital marketplace.
          </p>
        </div>

        {/* Cards — bg always white, only section bg changes in dark mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="
                group bg-white border border-[#E5E7EB]
                rounded-2xl px-8 py-10
                text-left
                transition-all duration-300
                hover:bg-[#2F4BA5] hover:shadow-lg
              "
            >
              <div className="w-[52px] h-[52px] rounded-[12px] bg-[#EEF3FA] group-hover:bg-white/20 flex items-center justify-center text-2xl mb-8 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-poppins font-semibold text-[16px] leading-snug text-[#1E222F] group-hover:text-white mb-3 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="font-poppins text-[14px] leading-relaxed text-[#6B7280] group-hover:text-white/90 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}