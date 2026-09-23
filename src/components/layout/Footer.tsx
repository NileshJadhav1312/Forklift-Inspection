"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import accordionSections from "@/data/footer.json";

// Main footer component with call-to-action, navigation links, mobile accordions, and copyright
export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (title) => {
    setOpenSection((prev) => (prev === title ? null : title));
  };

  const handleGetChecklist = () => {
    document.getElementById("checklist")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#05273f] text-white">
      {/* Call to Action Section */}
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 sm:py-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
            Ready to simplify your forklift inspections?
          </h2>

          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Start with a structured checklist your team can use consistently.
          </p>

          <div className="mt-3 flex flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleGetChecklist}
              className="rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-[#05273f] shadow-md transition hover:bg-slate-100 active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
            >
              Get the Checklist
            </button>

            <button
              type="button"
              className="rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-[#05273f] shadow-md transition hover:bg-slate-100 active:scale-95 sm:px-4 sm:py-2 sm:text-sm"
            >
              <a
                href="mailto:contact@inspectpro.com"
                className="underline-offset-4 transition sm:text-sm"
              >
                Talk to our team
              </a>
            </button>
          </div>
        </div>

        <div className="mt-4 border-t border-slate-700/60 sm:mt-5" />

        {/* Desktop Navigation Links */}
        <div className="mt-4 hidden grid-cols-12 gap-5 md:grid sm:mt-5">
          {/* Brand Info */}
          <div className="col-span-4">
            <span className="text-base font-bold tracking-tight">
              InspectPro
            </span>

            <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
              InspectPro is a fleet and safety management company dedicated to
              consistent equipment inspections and national safety standards.
            </p>
          </div>

          {/* Product Links */}
          <FooterColumn
            title="Product"
            links={[
              ["Features", "#features"],
              ["Templates", "#checklist"],
              ["Integrations", "#"],
            ]}
          />

          {/* Solutions Links */}
          <FooterColumn
            title="Solutions"
            links={[
              ["by Industry", "#industries"],
              ["by Function", "#"],
            ]}
          />

          {/* Resources Links */}
          <FooterColumn
            title="Resources"
            links={[
              ["Blog", "#"],
              ["Help Center", "#"],
              ["API", "#"],
            ]}
          />

          {/* Company Links */}
          <FooterColumn
            title="Company"
            links={[
              ["About", "#"],
              ["Careers", "#"],
              ["Contact", "#"],
            ]}
          />
        </div>

        {/* Mobile Accordion Navigation */}
        <div className="mt-3.5 md:hidden">
          <div className="divide-y divide-slate-800 border-y border-slate-800">
            {accordionSections.map((section) => (
              <MobileAccordion
                key={section.title}
                title={section.title}
                links={section.links}
                isOpen={openSection === section.title}
                onClick={() => toggleSection(section.title)}
              />
            ))}

            {/* Contact Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection("Contact")}
                className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold transition hover:text-slate-200"
              >
                <span>Contact</span>

                <ChevronDown
                  size={16}
                  className={`text-slate-400 transition-transform ${
                    openSection === "Contact"
                      ? "rotate-180 text-white"
                      : ""
                  }`}
                />
              </button>

              {openSection === "Contact" && (
                <div className="space-y-1 pb-2 pl-1.5 text-xs text-slate-300">
                  <p>
                    <a
                      href="tel:+18005550199"
                      className="transition hover:text-white"
                    >
                      +1 (800) 555-0199
                    </a>
                  </p>

                  <p>
                    <a
                      href="tel:+18005550100"
                      className="transition hover:text-white"
                    >
                      +1 (800) 555-0100
                    </a>
                  </p>

                  <p>
                    <a
                      href="mailto:support@inspectpro.com"
                      className="underline transition hover:text-white"
                    >
                      support@inspectpro.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright and Legal Notice */}
        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-slate-800 pt-3 text-xs text-slate-400 sm:mt-5 sm:flex-row sm:pt-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">InspectPro</span>
            <span>·</span>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>

            <span>·</span>

            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
          </div>

          <p>© {new Date().getFullYear()} InspectPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// Helper component to render a single column of links on desktop
function FooterColumn({
  title,
  links,
}) {
  return (
    <div className="col-span-2">
      <h3 className="text-xs font-bold uppercase tracking-wider">
        {title}
      </h3>

      <ul className="mt-2 space-y-1.5 text-xs text-slate-400">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="transition hover:text-white">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper component to render an interactive accordion section on mobile
function MobileAccordion({
  title,
  links,
  isOpen,
  onClick,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold transition hover:text-slate-200"
      >
        <span>{title}</span>

        <ChevronDown
          size={16}
          className={`text-slate-400 transition-transform ${
            isOpen ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="space-y-1 pb-2 pl-1.5 text-xs text-slate-400">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block py-0.5 transition hover:text-white"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}