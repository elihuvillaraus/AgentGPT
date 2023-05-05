import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
  return (
    <div
      className={clsx(
        "ml-1 rounded-full bg-sky-500 text-xs font-semibold text-gray-100 transition-all hover:scale-110 sm:mt-2",
        "px-1 py-1",
        "sm:px-3 sm:py-1 sm:text-sm"
      )}
    >
      {children}
    </div>
  );
};

export default Badge;
