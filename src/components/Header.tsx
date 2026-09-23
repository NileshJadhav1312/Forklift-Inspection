"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-white">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-text-main"
        >
          InspectPro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-text-main transition hover:text-primary"
          >
            Products
          </a>

          <a
            href="#"
            className="text-sm font-medium text-text-main transition hover:text-primary"
          >
            Solutions
          </a>

          <a
            href="#"
            className="text-sm font-medium text-text-main transition hover:text-primary"
          >
            Resources
          </a>

          <a
            href="#"
            className="text-sm font-medium text-text-main transition hover:text-primary"
          >
            Pricing
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-text-main transition hover:text-primary"
          >
            Login
          </a>

          <a
            href="#checklist"
            className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
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
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border bg-white px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#"
              className="text-sm font-medium text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>

            <a
              href="#"
              className="text-sm font-medium text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </a>

            <a
              href="#"
              className="text-sm font-medium text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </a>

            <a
              href="#"
              className="text-sm font-medium text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#"
              className="text-sm font-medium text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>

            <a
              href="#checklist"
              className="w-fit rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white"
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