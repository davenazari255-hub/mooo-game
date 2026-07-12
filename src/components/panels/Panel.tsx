import React from "react";

export function Panel({
  icon,
  title,
  children,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`panel overflow-hidden ${className}`}>
      <div className="panel-header flex items-center gap-1.5 px-3 py-1.5">
        <span className="flex items-center">{icon}</span>
        <h3 className="text-[12px] font-black">{title}</h3>
      </div>
      <div className="p-2">{children}</div>
    </div>
  );
}
