// Explanatory section describing the purpose and regulatory value of equipment inspection checklists
export default function SubHeroSection() {
  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          What is a Forklift Inspection Checklist?
        </h2>

        {/* Content Layout */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Descriptive Paragraphs */}
          <div className="space-y-4 text-sm leading-relaxed text-text-muted sm:text-base lg:col-span-7">
            <p>
              Forklift Inspection Checklist lists teams perform peotsstent safety on and moriiil nspection are safety and compliance.
            </p>
            <p>
              Forklift Inspection set benefits concentt restore safety and compliance our sinplator erquirement.
            </p>
          </div>

          {/* Right Column: Regulatory Information Callout Card */}
          <div className="lg:col-span-5">
            <div className="flex items-start gap-3.5 rounded-2xl border border-border/80 bg-[#ebf5f7] p-5 sm:p-6">
              {/* Info Icon */}
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white sm:h-6 sm:w-6">
                i
              </span>

              {/* Callout Text */}
              <p className="text-xs leading-relaxed text-text-main sm:text-sm">
                Key impcotence are octenns·ls consince being regulatory requirements are osst to{" "}
                <strong className="font-bold text-text-main">
                  regulatory requirements.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
