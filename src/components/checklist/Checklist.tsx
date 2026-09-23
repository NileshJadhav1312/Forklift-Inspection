"use client";

import { useState } from "react";
import ChecklistItem from "./ChecklistItem";
import checklistData from "@/data/checklist.json";

const initialItems = checklistData;

// Interactive inspection checklist section managing item verification, statuses, and notes
export default function Checklist() {
  const [statuses, setStatuses] = useState(
    initialItems.map(() => "pass"),
  );
  const [checkedItems, setCheckedItems] = useState(
    initialItems.map(() => false),
  );

  const handleStatusChange = (index, newStatus) => {
    const next = [...statuses];
    next[index] = newStatus;
    setStatuses(next);
  };

  const handleToggleCheck = (index) => {
    const next = [...checkedItems];
    next[index] = !next[index];
    setCheckedItems(next);
  };

  return (
    <section id="checklist" className="bg-[#f4f9fa] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-text-main sm:text-4xl">
          What&apos;s included in the checklist?
        </h2>

        {/* Checklist */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
          {initialItems.map((item, index) => (
            <ChecklistItem
              key={item.id}
              item={item}
              isChecked={checkedItems[index]}
              onToggleCheck={() => handleToggleCheck(index)}
              status={statuses[index]}
              onStatusChange={(newStatus) =>
                handleStatusChange(index, newStatus)
              }
              isLast={index === initialItems.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
