import { ClipboardList, AlertTriangle, FileText, Layers } from "lucide-react";
import Card from "@/components/ui/Card";
import featuresData from "@/data/features.json";

const iconMap = {
  ClipboardList,
  AlertTriangle,
  FileText,
  Layers,
};

// Features section highlighting key inspection benefits in a responsive grid of cards
export default function Features() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
            Make every forklift inspection consistent
          </h2>
          <p className="mt-3.5 text-xs text-text-muted sm:text-sm sm:leading-relaxed">
            Make sure forklift uneornessnxant consistent and inspections prevenders
            for the equipment tisnniters.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((item) => (
            <Card
              key={item.id}
              icon={iconMap[item.icon] || ClipboardList}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
