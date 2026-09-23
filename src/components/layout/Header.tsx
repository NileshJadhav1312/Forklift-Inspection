"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

// Main application header providing branding, navigation links, and responsive mobile menu
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl sm:text-[26px] font-black tracking-tight text-text-main"
        >
          InspectPro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-[19px] font-normal text-text-main transition hover:text-primary"
          >
            Products
          </a>

          <a
            href="#industries"
            className="text-[19px] font-normal text-text-main transition hover:text-primary"
          >
            Solutions
          </a>

          <button
            type="button"
            className="flex items-center gap-1.5 text-[19px] font-normal text-text-main transition hover:text-primary"
          >
            <span>Resources</span>
            <ChevronDown size={19} />
          </button>

          <a
            href="#"
            className="text-[19px] font-normal text-text-main transition hover:text-primary"
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-[19px] font-normal text-text-main transition hover:text-primary"
          >
            Login
          </a>

          <a
            href="#checklist"
            className="rounded-md bg-primary px-5 py-2.5 text-base font-normal text-white transition hover:opacity-90"
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
              className="text-[19px] font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#"
              className="text-[19px] font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>

            <button
              type="button"
              className="flex w-full items-center justify-between text-[19px] font-normal text-text-main"
            >
              <span>Resources</span>
              <ChevronDown size={19} />
            </button>

            <a
              href="#"
              className="text-[19px] font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-[19px] font-normal text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="#checklist"
              className="w-fit rounded-md bg-primary px-5 py-2.5 text-base font-normal text-white"
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