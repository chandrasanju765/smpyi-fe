"use client";

import Image from "next/image";
import { useCarousel } from "@/hooks/useCarousel";
import { cn } from "@/lib/utils";

/* ─── Types ───────────────────────────────────────────────────────────── */

interface FloatingBadge {
  label: string;
  topPct?: number;
  bottomPct?: number;
  leftPct?: number;
  rightPct?: number;
  animationDelay?: string;
  /** Optional: render as a circle (e.g. "30% Off") */
  circle?: boolean;
}

interface Slide {
  id: number;
  eyebrow: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd: string;
  subtitle: string;
  subtitleBold: string;
  subtitleEnd: string;
  cta: string;
  badges?: FloatingBadge[];
}

/* ─── Slide data ──────────────────────────────────────────────────────── */

const SLIDES: Slide[] = [
  {
    id: 1,
    eyebrow: "Small Business & New Startup",
    titleStart: "Your One-Stop Market Hub\nfor All ",
    titleHighlight: "Business Needs",
    titleEnd: "",
    subtitle: "Let' grow with ",
    subtitleBold: "Smpyi",
    subtitleEnd: " today !",
    cta: "Free Registration",
    badges: [
      { label: "Free  Registration", topPct: 34, leftPct: 55, animationDelay: "0s"   },
      { label: "No Limit",           topPct: 42, leftPct: 82, animationDelay: "0.5s" },
      { label: "Boost Sales",        topPct: 80, leftPct: 57, animationDelay: "1.5s" },
      { label: "Easy Access",        topPct: 68, leftPct: 83, animationDelay: "1s"   },
    ],
  },
  {
    id: 2,
    eyebrow: "Expand Your Reach",
    titleStart: "Get Your  ",
    titleHighlight: "Business Leads",
    titleEnd: " from\nEvery Corner of the World",
    subtitle: "Connect ",
    subtitleBold: "Smpyi",
    subtitleEnd: " Today",
    cta: "Contact Now",
  },
  // ── NEW SLIDE 3 ──
  {
    id: 3,
    eyebrow: "Boost your brand, effortlessly",
    titleStart: "Need Support to Manage\nYour ",
    titleHighlight: "Social Accounts",
    titleEnd: "",
    subtitle: "Use ",
    subtitleBold: "Smpyi",
    subtitleEnd: " Upcoming Features",
    cta: "Contact Now",
    badges: [
      { label: "Post Scheduling", topPct: 32, leftPct: 54, animationDelay: "0s"   },
      { label: "Grow 100%",       topPct: 20, leftPct: 82, animationDelay: "0.5s" },
      { label: "Free Platform",   topPct: 72, leftPct: 54, animationDelay: "1.5s" },
      { label: "FasterReach",     topPct: 60, leftPct: 83, animationDelay: "1s"   },
    ],
  },
  // ── NEW SLIDE 4 ──
  {
    id: 4,
    eyebrow: "Showcase Your Daily Deals",
    titleStart: "Smpyi to showcase Best\nDaily ",
    titleHighlight: "Post & Grow",
    titleEnd: "",
    subtitle: "Post on  ",
    subtitleBold: "Smpyi",
    subtitleEnd: " For boost your Business",
    cta: "Contact Now",
    badges: [
      {
        label: "30%\nOff",
        topPct: 28,
        leftPct: 60,
        animationDelay: "0s",
        circle: true,
      },
    ],
  },
];

/* ─── Badge ──────────────────────────────────────────────────────────── */

function Badge({ badge }: { badge: FloatingBadge }) {
  if (badge.circle) {
    return (
      <div
        className="absolute z-20 badge-float flex items-center justify-center text-center"
        style={{
          top:    badge.topPct    != null ? `${badge.topPct}%`    : undefined,
          bottom: badge.bottomPct != null ? `${badge.bottomPct}%` : undefined,
          left:   badge.leftPct   != null ? `${badge.leftPct}%`   : undefined,
          right:  badge.rightPct  != null ? `${badge.rightPct}%`  : undefined,
          animationDelay: badge.animationDelay,
          transform: "translate(-50%, -50%)",
          width: "clamp(52px, 5.5vw, 80px)",
          height: "clamp(52px, 5.5vw, 80px)",
          borderRadius: "50%",
          background: "#F97316",
          boxShadow: "0 4px 16px rgba(249,115,22,0.45)",
          whiteSpace: "pre-line",
        }}
      >
        <span style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 700,
          fontSize: "clamp(10px, 1.1vw, 15px)",
          color: "#ffffff",
          lineHeight: 1.2,
          textAlign: "center",
        }}>
          {badge.label}
        </span>
      </div>
    );
  }

  return (
    <div
      className="absolute z-20 badge-float flex items-center justify-center"
      style={{
        top:    badge.topPct    != null ? `${badge.topPct}%`    : undefined,
        bottom: badge.bottomPct != null ? `${badge.bottomPct}%` : undefined,
        left:   badge.leftPct   != null ? `${badge.leftPct}%`   : undefined,
        right:  badge.rightPct  != null ? `${badge.rightPct}%`  : undefined,
        animationDelay: badge.animationDelay,
        transform: "translate(-50%, -50%)",
        padding: "clamp(5px,0.55vw,8px) clamp(10px,1.1vw,16px)",
        background: "rgba(20, 42, 95, 0.85)",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.20)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        whiteSpace: "nowrap",
      }}
    >
      <span style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 500,
        fontSize: "clamp(9px, 0.95vw, 14px)",
        color: "#ffffff",
      }}>
        {badge.label}
      </span>
    </div>
  );
}

/* ─── Shared gradient highlight ──────────────────────────────────────── */

const highlightStyle: React.CSSProperties = {
  background: "linear-gradient(90deg, #818CF8 0%, #60A5FA 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ─── Reusable text block ────────────────────────────────────────────── */

function SlideText({
  slide,
  widthPct = 42,
}: {
  slide: Slide;
  widthPct?: number;
}) {
  return (
    <div
      className="shrink-0 flex flex-col justify-center"
      style={{
        width: `${widthPct}%`,
        paddingLeft: "clamp(24px, 4.5vw, 72px)",
        paddingRight: "clamp(8px, 1vw, 16px)",
      }}
    >
      <p style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        fontSize: "clamp(13px, 1.4vw, 20px)",
        color: "#F97316",
        marginBottom: "12px",
        lineHeight: 1,
      }}>
        {slide.eyebrow}
      </p>
      <h1 style={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: 700,
        fontSize: "clamp(18px, 2.6vw, 40px)",
        lineHeight: 1.22,
        color: "#ffffff",
        whiteSpace: "pre-line",
        marginBottom: "14px",
      }}>
        {slide.titleStart}
        <span style={highlightStyle}>{slide.titleHighlight}</span>
        {slide.titleEnd}
      </h1>
      <p style={{
        fontFamily: "Poppins, sans-serif",
        fontSize: "clamp(12px, 1vw, 15px)",
        color: "rgba(255,255,255,0.70)",
        marginBottom: "24px",
      }}>
        {slide.subtitle}
        <strong style={{ color: "#fff", fontStyle: "italic", fontWeight: 600 }}>
          {slide.subtitleBold}
        </strong>
        {slide.subtitleEnd}
      </p>
      <button
        className="btn-primary font-poppins font-semibold rounded-full shadow-lg shadow-orange-500/30 w-fit"
        style={{ fontSize: "clamp(12px, 1vw, 15px)", padding: "12px 28px" }}
      >
        {slide.cta}
      </button>
    </div>
  );
}

/* ─── Slide 1 ────────────────────────────────────────────────────────── */

function Slide1({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image src="/images/slider-bg.png" alt="" fill
        className="object-cover object-center select-none pointer-events-none"
        priority aria-hidden />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(100deg,rgba(8,18,50,.95) 0%,rgba(12,30,80,.88) 40%,rgba(15,40,110,.40) 70%,transparent 100%)",
      }} />

      <div className="relative z-10 h-full flex items-center">
        <SlideText slide={slide} widthPct={42} />

        <div className="relative flex-1 h-full">
          <div style={{
            position: "absolute",
            top: "32px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(220px, 30vw, 460px)",
          }}>
            <Image
              src="/images/one-stop.png"
              alt="One-stop market hub"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width:768px) 220px,(max-width:1200px) 440px,460px"
            />
          </div>
        </div>
      </div>

      {slide.badges?.map((b) => <Badge key={b.label} badge={b} />)}
    </div>
  );
}

/* ─── Slide 2 ────────────────────────────────────────────────────────── */

function Slide2({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image src="/images/slider-bg.png" alt="" fill
        className="object-cover object-center select-none pointer-events-none" aria-hidden />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(115deg,rgba(10,28,80,.92) 0%,rgba(20,70,150,.80) 45%,rgba(30,100,190,.55) 100%)",
      }} />

      <div className="relative z-10 h-full flex items-center">
        <SlideText slide={slide} widthPct={52} />

        <div className="relative flex-1 h-full">
          <div className="absolute" style={{
            width: "clamp(180px, 24vw, 360px)",
            aspectRatio: "1",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }}>
            <Image src="/images/circle.png" alt="" fill className="object-contain" aria-hidden />
          </div>

          <div style={{
            position: "absolute",
            top: "-32px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(180px, 24vw, 340px)",
          }}>
            <Image
              src="/images/women.png"
              alt="Business professional"
              fill
              className="object-contain object-bottom"
              sizes="(max-width:768px) 180px,(max-width:1200px) 280px,340px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Slide 3 — Social Accounts (brown #3F2400) ──────────────────────── */

function Slide3({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dedicated bg for this slide */}
      <Image
        src="/images/mobile-bg.png"
        alt=""
        fill
        className="object-cover object-center select-none pointer-events-none"
        aria-hidden
      />
      {/* Brown colour overlay — #3F2400 tinted gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(63,36,0,0.97) 0%, rgba(63,36,0,0.92) 40%, rgba(63,36,0,0.55) 70%, rgba(63,36,0,0.10) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <SlideText slide={slide} widthPct={44} />

        {/* Right: support-women.png */}
        <div className="relative flex-1 h-full">
          <div
            style={{
              position: "absolute",
              top: "-32px",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(220px, 32vw, 480px)",
            }}
          >
            <Image
              src="/images/support-women.png"
              alt="Social media management"
              fill
              className="object-contain object-bottom"
              sizes="(max-width:768px) 220px,(max-width:1200px) 400px,480px"
            />
          </div>
        </div>
      </div>

      {slide.badges?.map((b) => <Badge key={b.label} badge={b} />)}
    </div>
  );
}

/* ─── Slide 4 — Daily Post & Grow (green #003F33) ───────────────────── */

function Slide4({ slide }: { slide: Slide }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Same shared bg texture */}
      <Image
        src="/images/slider-bg.png"
        alt=""
        fill
        className="object-cover object-center select-none pointer-events-none"
        aria-hidden
      />
      {/* Green colour overlay — #003F33 tinted gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(110deg, rgba(0,63,51,0.97) 0%, rgba(0,63,51,0.90) 40%, rgba(0,63,51,0.50) 70%, rgba(0,63,51,0.05) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <SlideText slide={slide} widthPct={46} />

        {/* Right: mobile.png with gentle float animation */}
        <div className="relative flex-1 h-full">
          <div
            className="mobile-float"
            style={{
              position: "absolute",
              top: "-32px",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "clamp(240px, 34vw, 520px)",
            }}
          >
            <Image
              src="/images/mobile.png"
              alt="Daily deals showcase"
              fill
              className="object-contain object-bottom"
              sizes="(max-width:768px) 240px,(max-width:1200px) 420px,520px"
            />
          </div>
        </div>
      </div>

      {/* 30% Off circle badge */}
      {slide.badges?.map((b) => <Badge key={b.label} badge={b} />)}
    </div>
  );
}

/* ─── Slide renderer map ─────────────────────────────────────────────── */

const SLIDE_COMPONENTS = [Slide1, Slide2, Slide3, Slide4];

/* ─── Carousel shell ─────────────────────────────────────────────────── */

export function HeroCarousel() {
  const { current, next, prev, goTo, pause, resume } = useCarousel(SLIDES.length, 5000);

  return (
    <>
      <style>{`
        @keyframes badgeFloat {
          0%,100% { transform: translate(-50%,-50%) translateY(0);   }
          50%      { transform: translate(-50%,-50%) translateY(-7px); }
        }
        .badge-float { animation: badgeFloat 3s ease-in-out infinite; }

        @keyframes mobileFloat {
          0%,100% { transform: translateX(-50%) translateY(0px);   }
          50%      { transform: translateX(-50%) translateY(-14px); }
        }
        .mobile-float { animation: mobileFloat 3.2s ease-in-out infinite; }
      `}</style>

      <div
        className="relative mt-4 mx-4 sm:mx-6 lg:mx-8"
        style={{ padding: "0 44px" }}
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full
                     bg-white border border-gray-200 hover:bg-gray-50
                     flex items-center justify-center text-gray-600
                     transition-all hover:scale-105 shadow-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Card */}
        <section
          className="relative overflow-hidden rounded-2xl w-full"
          style={{ height: "clamp(300px, 42vw, 500px)" }}
          aria-label="Hero banner"
        >
          {SLIDES.map((slide, index) => {
            const SlideComponent = SLIDE_COMPONENTS[index];
            return (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700",
                  current === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                )}
                aria-hidden={current !== index}
              >
                <SlideComponent slide={slide} />
              </div>
            );
          })}

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn("carousel-dot", current === i && "active")}
              />
            ))}
          </div>
        </section>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full
                     bg-white border border-gray-200 hover:bg-gray-50
                     flex items-center justify-center text-gray-600
                     transition-all hover:scale-105 shadow-md"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}