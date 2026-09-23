"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// Main application header providing branding, navigation links, and responsive mobile menu
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex h-[70px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[76px] lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black tracking-tight text-text-main sm:text-2xl lg:text-[26px]"
        >
          InspectPro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 md:flex lg:gap-7 xl:gap-8">
          <a
            href="#features"
            className="text-sm font-normal text-text-main transition hover:text-primary lg:text-[16px]"
          >
            Products
          </a>

          <a
            href="#industries"
            className="text-sm font-normal text-text-main transition hover:text-primary lg:text-[16px]"
          >
            Solutions
          </a>

          <button
            type="button"
            className="flex items-center gap-1 text-sm font-normal text-text-main transition hover:text-primary lg:text-[16px]"
          >
            <span>Resources</span>
            <ChevronDown size={16} />
          </button>

          <a
            href="#"
            className="text-sm font-normal text-text-main transition hover:text-primary lg:text-[16px]"
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex lg:gap-5">
          <a
            href="#"
            className="text-sm font-normal text-text-main transition hover:text-primary lg:text-[16px]"
          >
            Login
          </a>

          <a
            href="#how-it-works"
            className="rounded-md bg-primary px-3.5 py-2 text-xs font-normal text-white transition hover:opacity-90 sm:text-sm lg:px-5 lg:py-2.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-text-main md:hidden"
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#"
              className="text-base font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#"
              className="text-base font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>

            <button
              type="button"
              className="flex w-full items-center justify-between text-base font-normal text-text-main"
            >
              <span>Resources</span>
              <ChevronDown size={18} />
            </button>

            <a
              href="#"
              className="text-base font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-base font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="#how-it-works"
              className="w-fit rounded-md bg-primary px-5 py-2.5 text-sm font-normal text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}