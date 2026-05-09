"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-gray-200 dark:bg-dark-surface" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative inline-flex items-center w-14 h-7 rounded-full 
        transition-colors duration-300 focus:outline-none focus:ring-2 
        focus:ring-accent-blue focus:ring-offset-2
        ${isDark ? "bg-dark-surface border border-dark-border" : "bg-slate-100 border border-light-border"}
      `}
    >
      {/* Moon icon */}
      <span
        className={`
          absolute left-1 flex items-center justify-center w-5 h-5 rounded-full
          transition-all duration-300
          ${isDark ? "opacity-0 translate-x-0" : "opacity-100"}
        `}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-600">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>

      {/* Toggle knob */}
      <span
        className={`
          absolute flex items-center justify-center w-5 h-5 rounded-full
          transition-transform duration-300 shadow-sm
          ${isDark
            ? "translate-x-7 bg-accent-blue"
            : "translate-x-1 bg-white border border-slate-200"
          }
        `}
      >
        {isDark && (
          <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1.5">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        )}
      </span>

      {/* Sun icon */}
      <span
        className={`
          absolute right-1 flex items-center justify-center w-5 h-5 rounded-full
          transition-all duration-300
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </span>
    </button>
  );
}
