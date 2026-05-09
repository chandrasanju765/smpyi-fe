"use client";

import { Megaphone, Search, Network } from "lucide-react";

const FEATURES = [
  {
    title: "Business Promotion",
    desc: "Showcase your products and services to a targeted audience. Create compelling promotions and reach potential customers effectively.",
    icon: Megaphone,
  },
  {
    title: "Supplier Discovery",
    desc: "Find reliable suppliers and business partners with our advanced search and filtering capabilities. Build lasting business relationships.",
    icon: Search,
  },
  {
    title: "Network & Connect",
    desc: "Join a thriving community of business owners, entrepreneurs, and industry professionals. Network and grow together.",
    icon: Network,
  },
];

export default function WhyChooseSmpyi() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#EEF3FA] to-[#E6ECF5] dark:from-[#0F172A] dark:to-[#020617]">
      <div className="max-w-[1300px] mx-auto text-center">

        {/* Top heading */}
        <p className="font-poppins font-medium text-[20px] text-[#1E40AF] dark:text-[#426EFF] mb-2">
          Delivering More Than Expected
        </p>

        {/* Main heading */}
        <h2 className="font-poppins font-medium text-[36px] text-[#1E222F] dark:text-[#91A9CC] mb-4">
          Why Choose Smpyi
        </h2>

        {/* Description */}
        <p className="font-poppins text-[16px] text-[#00000075] dark:text-[#B6B6C7] max-w-[522px] mx-auto mb-12 leading-[100%]">
          Our platform provides everything you need to promote your business, discover suppliers, and connect with the right partners.
        </p>

        {/* Cards Row */}
        <div className="flex justify-center gap-6 flex-wrap">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  group
                  w-[417px]
                  h-[285px]
                  rounded-[16px]
                  border border-[#E5E7EB]
                  bg-white
                  p-8
                  text-left
                  transition-all duration-300
                  hover:bg-[#2F4BA5]
                  hover:shadow-lg
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-[52px] h-[52px]
                    rounded-[12px]
                    bg-[#EEF3FA]
                    flex items-center justify-center
                    mb-8
                    group-hover:bg-white/20
                  "
                >
                  <Icon
                    size={22}
                    className="text-[#2F4BA5] group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    font-poppins
                    font-semibold
                    text-[16px]
                    leading-[100%]
                    text-[#1E222F]
                    mb-3
                    group-hover:text-white
                  "
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-poppins
                    font-normal
                    text-[14px]
                    leading-[150%]
                    text-[#6B7280]
                    group-hover:text-white/90
                  "
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}