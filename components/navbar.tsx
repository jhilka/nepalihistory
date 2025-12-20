"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";

import { NAV } from "@/app/constants";

import { ThemeToggle } from "./theme";
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
      <div className="max-w-3xl mx-auto px-4 h-14 grid grid-cols-3 items-center gap-4">
        <Link
          href="/"
          className="font-germania uppercase font-bold text-md sm:text-xl text-national-maroon justify-self-start dark:hover:text-shadow-lg dark:hover:text-shadow-national-blue/60"
        >
          {NAV.title}
        </Link>
        <NepalMap className="w-11 sm:w-14 h-fit fill-national-maroon justify-self-center" />

        <div className="flex items-center gap-2 justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
