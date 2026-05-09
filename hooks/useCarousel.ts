"use client";

import { useState, useEffect, useCallback } from "react";

export function useCarousel(length: number, autoPlayInterval = 4000) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPlaying, next, autoPlayInterval]);

  const pause = () => setIsPlaying(false);
  const resume = () => setIsPlaying(true);

  return { current, next, prev, goTo, pause, resume };
}
