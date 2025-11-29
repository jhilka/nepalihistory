"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";

import { NAV } from "@/app/constants";

import { ThemeToggle } from "./theme-toggle";
import NepalMap from "./NepalMap";

interface NavbarProps {
  onSearch?: (query: string) => void;
  showSearch?: boolean;
  searchPlaceholder?: string;
}

export function Navbar({
  onSearch,
  showSearch = false,
  searchPlaceholder = "Search timelines...",
}: NavbarProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const clearSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    if (onSearch) onSearch("");
  };

  return (
    <nav className="fixed top-0 z-50 w-full frosted shadow-2xs">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-germania uppercase font-bold text-lg text-national-maroon hover:text-national-blue hover:text-shadow-2xs text-shadow-amber-50 transition-colors"
        >
          {NAV.title}
        </Link>
        <NepalMap className="w-11 sm:w-14 fill-national-maroon " />

        <div className="flex items-center gap-2">
          {showSearch && (
            <>
              {isSearchOpen ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearch}
                    placeholder={searchPlaceholder}
                    className="px-3 py-1.5 text-sm bg-muted rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-ring w-48"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="p-1.5 hover:bg-muted rounded-md transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 hover:bg-muted rounded-md transition-colors"
                  aria-label="Search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              )}
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
