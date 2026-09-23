const items = [
  {
    label: "Forks and mast",
    status: "normal",
  },
  {
    label: "Tires and wheels",
    status: "normal",
  },
  {
    label: "Brakes",
    status: "na",
  },
  {
    label: "Steering",
    status: "normal",
  },
  {
    label: "Warning devices",
    status: "na",
  },
  {
    label: "Lights",
    status: "normal",
  },
];

export default function Hero() {
  return (
    <section className="bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-14 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* =========================================
            LEFT SIDE - HERO CONTENT
        ========================================= */}
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#checklist"
              className="rounded-md
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:opacity-90
                sm:px-6
                sm:py-3.5
              "
            >
              Get the Checklist
            </a>

            <a
              href="#checklist"
              className="
                rounded-md
                border
                border-border
                bg-white
                px-5
                py-3
                text-sm
                font-semibold
                text-text-main
                transition
                hover:bg-gray-50
                sm:px-6
                sm:py-3.5
              "
            >
              See What's Included
            </a>
          </div>

          {/* Supporting text */}
          <p className="mt-5 text-sm text-text-muted">
            Ready-to-use checklist for daily forklift inspections
          </p>
        </div>

        {/* =========================================
            RIGHT SIDE - CHECKLIST PREVIEW
        ========================================= */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md">
            {/* -------------------------------------
                BACKING CARD (All sides)
            ------------------------------------- */}
            <div
              className="
                absolute
                -inset-2.5
                rounded-[22px]
                bg-gradient-to-br
                from-slate-800
                to-teal-700
                opacity-90
                shadow-xl
                shadow-slate-900/15
                sm:-inset-3.5
                sm:rounded-[28px]
              "
            />

            {/* -------------------------------------
                MAIN CHECKLIST CARD
            ------------------------------------- */}
            <div
              className="
                relative
                rounded-2xl
                bg-white
                p-3.5
                shadow-xl
                shadow-slate-900/10
                ring-1
                ring-border
                sm:rounded-3xl
                sm:p-5
                md:p-6
              "
            >
              {/* Card Header */}
              <h2
                className="
                  mb-3
                  text-sm
                  font-semibold
                  text-text-main
                  sm:mb-4
                  sm:text-base
                "
              >
                Inspection Checklist
              </h2>

              {/* -------------------------------------
                  CHECKLIST ITEMS
              ------------------------------------- */}
              <div className="space-y-2 sm:space-y-2.5">
                {items.map((item) => (
                  <div
                    key={item.label}
                    className="
                      flex
                      items-center
                      gap-1.5
                      border-b
                      border-border
                      pb-2
                      sm:gap-2.5
                      sm:pb-2.5
                    "
                  >
                    {/* Checkbox */}
                    <div
                      className="
                        h-3.5
                        w-3.5
                        flex-shrink-0
                        rounded
                        border-2
                        border-border
                        sm:h-4
                        sm:w-4
                      "
                    />

                    {/* Item Name */}
                    <span
                      className="
                        min-w-0
                        flex-1
                        truncate
                        text-[11px]
                        font-medium
                        text-text-main
                        sm:text-sm
                      "
                    >
                      {item.label}
                    </span>

                    {/* ---------------------------------
                        CHECK ICON
                    --------------------------------- */}
                    <span
                      className="
                        flex
                        h-4
                        w-4
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-success
                        text-white
                        sm:h-5
                        sm:w-5
                      "
                    >
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

                    {/* ---------------------------------
                        STATUS PILL
                    --------------------------------- */}
                    <span
                      className={`
                        flex
                        w-10
                        flex-shrink-0
                        items-center
                        justify-center
                        gap-0.5
                        rounded-full
                        py-1
                        text-[8px]
                        font-semibold
                        sm:w-14
                        sm:py-1.5
                        sm:text-[10px]
                        ${
                          item.status === "na"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-gray-100 text-text-muted"
                        }
                      `}
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

                    {/* ---------------------------------
                        COMMENT ICON
                    --------------------------------- */}
                    <span
                      className="
                        flex
                        h-4
                        w-4
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-md
                        bg-gray-100
                        text-text-muted
                        sm:h-5
                        sm:w-5
                      "
                    >
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

              {/* -------------------------------------
                  PROGRESS
              ------------------------------------- */}
              <div className="mt-3 sm:mt-4">
                {/* Progress Text */}
                <div className="mb-1.5 flex justify-end">
                  <span className="text-[9px] text-text-muted sm:text-xs">
                    6/10 completed
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className="
                    h-1
                    overflow-hidden
                    rounded-full
                    bg-surface
                    sm:h-1.5
                  "
                >
                  <div
                    className="
                      h-full
                      w-[60%]
                      rounded-full
                      bg-primary
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          TRUSTED TEAMS
      ========================================= */}
      <div className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-text-main">
            Trusted by teams that need consistent inspections
          </p>

          <div
            className="
              mt-6
              grid
              grid-cols-2
              gap-6
              text-center
              sm:grid-cols-3
              lg:grid-cols-5
            "
          >
            <span className="text-sm font-semibold text-text-muted">
              Apex Logistics
            </span>

            <span className="text-sm font-semibold text-text-muted">
              Sterling Manufacturing
            </span>

            <span className="text-sm font-semibold text-text-muted">
              BuildRight Construction
            </span>

            <span className="text-sm font-semibold text-text-muted">
              Global Warehousing
            </span>

            <span className="text-sm font-semibold text-text-muted">
              Prime Distribution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
