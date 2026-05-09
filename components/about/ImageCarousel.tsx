"use client";

import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  height?: string;
}

export default function ImageCarousel({
  images,
  height = "420px",
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((currentIndex + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  function goTo(index: number) {
    if (animating || index === currentIndex) return;
    setAnimating(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setTimeout(() => {
      setPrevIndex(null);
      setAnimating(false);
    }, 800);
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl shadow-xl"
      style={{ height }}
    >
      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1)    translateX(0)   translateY(0); }
          50%  { transform: scale(1.06) translateX(-1%) translateY(-1%); }
          100% { transform: scale(1.1)  translateX(1%)  translateY(0.5%); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.08) translateX(20px); }
          to   { opacity: 1; transform: scale(1)    translateX(0); }
        }
        @keyframes slideOut {
          from { opacity: 1; transform: scale(1)    translateX(0); }
          to   { opacity: 0; transform: scale(0.96) translateX(-20px); }
        }
        .kb-active { animation: kenBurns 4.5s ease-in-out forwards; }
        .img-enter { animation: slideIn 0.8s cubic-bezier(0.4,0,0.2,1) forwards; }
        .img-exit  { animation: slideOut 0.8s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      {/* Exiting slide */}
      {prevIndex !== null && (
        <div className="absolute inset-0 img-exit z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[prevIndex]}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
        </div>
      )}

      {/* Entering / active slide */}
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 ${
            i === currentIndex
              ? prevIndex !== null
                ? "img-enter z-20"
                : "z-20"
              : "opacity-0 z-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            className={`w-full h-full object-cover ${
              i === currentIndex ? "kb-active" : ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-8 bg-[#F97316]"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}