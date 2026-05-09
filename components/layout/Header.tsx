"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about-us" },
  { label: "Product", href: "/product" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath] = useState("/");

  return (
    <header className="sticky top-0 z-50 bg-[var(--bg-nav)] border-b border-[var(--border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-accent-blue rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <span className="font-semibold text-xl text-[var(--text-primary)] font-poppins tracking-tight">
              Smpyi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium font-poppins transition-colors",
                  activePath === link.href
                    ? "text-[var(--text-primary)] border-b-2 border-primary"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">
            {/* ✅ Theme toggle moved here */}
            <ThemeToggle />

            <Link
              href="/signin"
              className="px-5 py-2 text-sm font-medium font-poppins rounded-lg bg-accent-blue text-white hover:bg-blue-600 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              className="px-5 py-2 text-sm font-medium font-poppins rounded-lg btn-primary text-white"
            >
              Create Account
            </Link>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-colors"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-nav)] border-t border-[var(--border)] px-4 py-4">
          <nav className="flex flex-col gap-1 mb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium font-poppins transition-colors",
                  activePath === link.href
                    ? "bg-accent-blue/10 text-accent-blue"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <Link
              href="/signin"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium font-poppins rounded-lg bg-accent-blue text-white hover:bg-blue-600 transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="w-full py-2.5 text-center text-sm font-medium font-poppins rounded-lg btn-primary text-white"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}