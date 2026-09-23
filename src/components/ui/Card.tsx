import React from "react";

// Reusable card component displaying an icon badge, title, and descriptive text
export default function Card({ icon: Icon, title, description, className = "" }) {
  const renderIcon = () => {
    if (!Icon) {
      return null;
    }

    if (React.isValidElement(Icon)) {
      return Icon;
    }

    const IconComponent = Icon;
    return <IconComponent size={24} strokeWidth={2.2} />;
  };

  return (
    <div
      className={`flex flex-col rounded-2xl border border-border/80 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-7 ${className}`}
    >
      {Icon ? (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf6f7] text-[#1b6b7a]">
          {renderIcon()}
        </div>
      ) : null}

      <h3 className="mb-3 text-base font-bold text-text-main sm:text-lg">
        {title}
      </h3>

      <p className="text-xs leading-relaxed text-text-muted sm:text-sm">
        {description}
      </p>
    </div>
  );
}
