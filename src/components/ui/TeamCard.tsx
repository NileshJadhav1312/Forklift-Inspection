import React from "react";

interface TeamCardProps {
  icon?: React.ReactNode;
  title: string;
  subtitle: string;
}

// Reusable partner/team badge card displaying an icon logo, company name, and subtitle
export default function TeamCard({ icon, title, subtitle }: TeamCardProps) {
  return (
    <div className="flex w-fit items-center gap-2 sm:gap-2.5">
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

export { TeamCard };
