import TrustedTeams from "./TrustedTeams";
import heroItems from "@/data/hero.json";

// Hero section displaying title, call to action, interactive preview card, and client logos
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Left Side: Hero Content */}
        <div>
          {/* Eyebrow */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-text-main">
            Forklift Safety
          </p>

          {/* Heading */}
          <h1 className="max-w-[620px] text-4xl font-bold leading-[1.08] tracking-tight text-text-main sm:text-5xl lg:text-[52px]">
            Forklift Inspection
            <br />
            Checklist
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[560px] text-base leading-7 text-text-muted sm:text-lg">
            This checklist helps teams perform consistent inspections and
            identify issues before their equipment is used.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-row items-center gap-2.5 sm:gap-4">
            <a
              href="#checklist"
              className="flex-1 rounded-md bg-primary px-3.5 py-3 text-center text-xs font-semibold text-white whitespace-nowrap transition hover:opacity-90 sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Get the Checklist
            </a>

            <a
              href="#checklist"
              className="flex-1 rounded-md border border-border bg-white px-3.5 py-3 text-center text-xs font-semibold text-text-main whitespace-nowrap transition hover:bg-gray-50 sm:flex-initial sm:px-6 sm:py-3.5 sm:text-sm"
            >
              See What&apos;s Included
            </a>
          </div>

          {/* Supporting text */}
          <p className="mt-5 text-sm text-text-muted">
            Ready-to-use checklist for daily forklift inspections
          </p>
        </div>

        {/* Right Side: Checklist Preview */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
            {/* Desktop backdrop gradient */}
            <div className="pointer-events-none absolute -top-32 bottom-[112px] left-[20%] hidden w-[200vw] rounded-bl-[32px] bg-gradient-to-br from-[#063340] to-[#0c4a5c] lg:block" />

            {/* Frosted Glass Outer Container */}
            <div className="relative z-10 rounded-3xl bg-white/40 p-2.5 shadow-2xl shadow-slate-900/10 ring-1 ring-white/70 backdrop-blur-md sm:p-3.5">
              {/* Main Checklist Card */}
              <div className="rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-border/80 sm:rounded-[22px] sm:p-5 md:p-6">
                {/* Card Header */}
                <h2 className="mb-3 text-sm font-semibold text-text-main sm:mb-4 sm:text-base">
                  Inspection Checklist
                </h2>

                {/* Checklist Items */}
                <div className="space-y-2 sm:space-y-2.5">
                  {heroItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-1.5 border-b border-border pb-2 sm:gap-2.5 sm:pb-2.5"
                    >
                      {/* Checkbox */}
                      <div className="h-3.5 w-3.5 flex-shrink-0 rounded border-2 border-border sm:h-4 sm:w-4" />

                      {/* Item Name */}
                      <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-text-main sm:text-sm">
                        {item.label}
                      </span>

                      {/* Check Icon */}
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-success text-white sm:h-5 sm:w-5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                      {/* Status Pill */}
                      <span
                        className={`flex w-10 flex-shrink-0 items-center justify-center gap-0.5 rounded-full py-1 text-[8px] font-semibold sm:w-14 sm:py-1.5 sm:text-[10px] ${
                          item.status === "na"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-gray-100 text-text-muted"
                        }`}
                      >
                        {item.status === "na" && (
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                          >
                            <path
                              d="M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        NA
                      </span>

                      {/* Comment Icon */}
                      <span className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 text-text-muted sm:h-5 sm:w-5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                        >
                          <path
                            d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-3 sm:mt-4">
                  {/* Progress Text */}
                  <div className="mb-1.5 flex justify-end">
                    <span className="text-[9px] text-text-muted sm:text-xs">
                      6/10 completed
                    </span>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="h-1 overflow-hidden rounded-full bg-surface sm:h-1.5">
                    <div className="h-full w-[60%] rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Teams */}
      <TrustedTeams />
    </section>
  );
}
