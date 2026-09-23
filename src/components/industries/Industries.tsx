import { Warehouse, HardHat, Factory } from "lucide-react";
import Card from "@/components/ui/Card";
import industriesData from "@/data/industries.json";

const iconMap = {
  Warehouse,
  HardHat,
  Factory,
};

// Industries section showcasing sector-specific inspection solutions in a card grid
export default function Industries() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          Built for teams that inspect equipment every day
        </h2>

        {/* 3 Industry Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {industriesData.map((item) => (
            <Card
              key={item.id}
              icon={iconMap[item.icon] || Warehouse}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
