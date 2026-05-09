import { HeroCarousel } from "@/components/home/HeroCarousel";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { BestValueDeals } from "@/components/home/BestValueDeals";
import { MostSellingProducts } from "@/components/home/MostSellingProducts";
import { CategoriesForYou } from "@/components/home/CategoriesForYou";
import { TopDealsForYou } from "@/components/home/TopDealsForYou";
import WhyChooseSmpyi from "@/components/home/WhyChooseSmpyi";
import LeadsBanner from "@/components/home/LeadsBanner";
import BlogCards from "@/components/home/BlogCards";
import CTABanner  from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <CategoriesSection />
      <BestValueDeals />
      <MostSellingProducts />
      <CategoriesForYou />
      <TopDealsForYou />
      <WhyChooseSmpyi />
      <LeadsBanner />
      <BlogCards  />  
      <CTABanner />
    </>
  );
}
