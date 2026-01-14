import Link from "next/link";

import { NAV } from "@/app/constants";

import { ThemeToggle } from "./theme";
import NepalMap, { OutlineNepalMap } from "./NepalMap";

export const Navbar = () => (
  <nav className="fixed top-0 z-50 w-full frosted shadow-2xs">
    <div className="page-content-width px-4! h-14 grid grid-cols-3 items-center gap-4">
      <Link
        href="/"
        className="font-germania uppercase font-bold text-md sm:text-xl justify-self-start text-national-maroon"
      >
        {NAV.title}
      </Link>
      {/* <NepalMap className="w-11 sm:w-14 h-fit justify-self-center fill-national-maroon" /> */}
      <OutlineNepalMap className="w-11 sm:w-14 h-fit justify-self-center fill-national-maroon stroke-national-maroon stroke-40" />
      <div className="flex items-center gap-2 justify-self-end">
        <ThemeToggle />
      </div>
    </div>
  </nav>
);
