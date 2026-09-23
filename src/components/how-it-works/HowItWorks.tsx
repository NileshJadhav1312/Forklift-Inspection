import { FileText, SearchCheck, FolderCheck } from "lucide-react";
import howItWorksData from "@/data/howItWorks.json";

const iconMap = {
  FileText,
  SearchCheck,
  FolderCheck,
};

// Step-by-step workflow section explaining how users choose, complete, and act on inspections
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-10 bg-[#ebf5f7] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          How It Works
        </h2>

        {/* 3 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-14">
          {howItWorksData.map((item) => {
            const IconComponent = iconMap[item.icon] || FileText;

            return (
              <div key={item.step} className="flex flex-col items-start">
                {/* Step Number & Icon */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="text-2xl font-bold text-text-main sm:text-3xl">
                    {item.step}
                  </div>
                  <div className="text-[#1b6b7a]">
                    <IconComponent size={28} strokeWidth={2.2} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="mt-2 text-base font-bold text-text-main sm:text-lg">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-xs leading-relaxed text-text-muted sm:text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
