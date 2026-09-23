import React from "react";
import trustedTeamsData from "@/data/trustedTeams.json";

// Card component displaying an individual partner company's logo and title
export function TeamCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5">
      {icon}
      <div className="text-left leading-tight">
        <div className="text-xs font-bold tracking-tight text-text-main sm:text-sm">
          {title}
        </div>
        <div className="text-[10px] font-semibold text-text-main sm:text-xs">
          {subtitle}
        </div>
      </div>
    </div>
  );
}

const iconMap = {
  apex: (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <path d="M14 3L3 24h6l5-10 5 10h6L14 3zm0 7.8l2.2 4.4h-4.4L14 10.8z" />
    </svg>
  ),
  sterling: (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <path d="M8 7h12l-7 7h8" />
      <path d="M20 21H8l7-7H7" />
    </svg>
  ),
  buildright: (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <rect x="3.5" y="15" width="4" height="10" rx="1" />
      <rect x="9.5" y="10.5" width="4" height="14.5" rx="1" />
      <rect x="15.5" y="6" width="4" height="19" rx="1" />
      <rect x="21.5" y="2" width="4" height="23" rx="1" />
    </svg>
  ),
  vanguard: (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <path d="M14 2L4 7v7c0 6 4.5 11.5 10 13 5.5-1.5 10-7 10-13V7l-10-5z" />
      <path d="M9 13l3.5 3.5L19 10" />
    </svg>
  ),
  global: (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <circle cx="14" cy="14" r="11" />
      <line x1="3" y1="14" x2="25" y2="14" />
      <path d="M14 3a17 17 0 0 1 5.5 11 17 17 0 0 1-5.5 11 17 17 0 0 1-5.5-11A17 17 0 0 1 14 3z" />
    </svg>
  ),
  prime: (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 flex-shrink-0 text-text-main sm:h-6 sm:w-6 lg:h-7 lg:w-7"
    >
      <path d="M7 4v20" />
      <path d="M7 6h11a5 5 0 0 1 0 10H7" />
      <path d="M7 11h11" />
    </svg>
  ),
};

// Component displaying social proof badges of organizations that trust the inspection checklist
export default function TrustedTeams() {
  return (
    <div className="relative z-10 border-t border-border/70 bg-surface/60 py-4 backdrop-blur-sm sm:py-7">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-text-main sm:text-sm md:text-base">
          Trusted by teams that need consistent inspections
        </p>

        {/* Team Badges Grid */}
        <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-6 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-6 xl:gap-8">
          {trustedTeamsData.map((team) => (
            <TeamCard
              key={team.id}
              icon={iconMap[team.id]}
              title={team.title}
              subtitle={team.subtitle}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
