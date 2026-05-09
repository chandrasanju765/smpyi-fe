import { cn } from "@/lib/utils";
import React from "react";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  name: string;
  productCount: string;
  icon: React.ReactNode;
  className?: string;
}

export function CategoryCard({
  name,
  productCount,
  icon,
  className,
}: CategoryCardProps) {
  return (
    <button
      className={cn(
        styles.ccRoot,
        "flex items-center gap-5 text-left cursor-pointer",
        "bg-white",
        "rounded-2xl",
        "transition-shadow duration-200 hover:shadow-md",
        className
      )}
      style={{
        width: 300, // 🔥 increased
        height: 120, // 🔥 increased
        padding: "22px", // 🔥 increased
        border: "1px solid #D9D8D8",
      }}
    >
      {/* Blob + Icon */}
      <div className={styles.ccBlobWrap}>
        <div className={styles.ccReelTrack}>
          <div className={styles.ccReelSlot}>
            <span>{icon}</span>
          </div>
          <div className={styles.ccReelSlot}>
            <span>{icon}</span>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 15, // 🔥 slightly bigger
            color: "#475569",
            margin: 0,
          }}
        >
          {name}
        </p>

        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#00000473",
            margin: 0,
          }}
        >
          {productCount}
        </p>
      </div>
    </button>
  );
}