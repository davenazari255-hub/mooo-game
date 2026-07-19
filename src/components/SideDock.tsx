"use client";

import AssetSlot from "./AssetSlot";

export type DockItem = {
  key: string;
  label: string;
  /** art file inside /public/assets */
  icon: string;
  badge?: boolean;
};

function DockButton({ item, side }: { item: DockItem; side: "left" | "right" }) {
  return (
    <div className="relative flex flex-col items-center">
      <button
        aria-label={item.label}
        className="dock-btn relative flex items-center justify-center rounded-2xl"
        style={{ width: 52, height: 52 }}
      >
        <AssetSlot src={item.icon} size={34} rounded={8} label={item.label} />
        {item.badge && (
          <span
            className="notif-badge absolute flex items-center justify-center rounded-full font-extrabold"
            style={{
              top: -6,
              [side === "left" ? "right" : "left"]: -6,
              width: 18,
              height: 18,
              fontSize: 12,
              lineHeight: 1,
            }}
          >
            !
          </span>
        )}
      </button>
      <span
        className="mt-0.5 text-white font-bold text-[10px] whitespace-nowrap"
        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.7)" }}
      >
        {item.label}
      </span>
    </div>
  );
}

export default function SideDock({
  side,
  items,
}: {
  side: "left" | "right";
  items: DockItem[];
}) {
  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3.5 ${
        side === "left" ? "left-2" : "right-2"
      }`}
    >
      {items.map((it) => (
        <DockButton key={it.key} item={it} side={side} />
      ))}
    </div>
  );
}
