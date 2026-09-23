"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import faqData from "@/data/faq.json";

// Frequently Asked Questions accordion section providing answers to common inspection inquiries
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-2xl font-bold tracking-tight text-text-main sm:text-3xl">
          FAQ
        </h2>

        {/* FAQ Accordion List */}
        <div className="mt-6 divide-y divide-border border-y border-border">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-text-main sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`ml-4 h-5 w-5 shrink-0 text-text-main transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-3 pr-8">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}