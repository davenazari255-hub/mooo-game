"use client";

import { useState } from "react";
import AssetSlot from "./AssetSlot";

type NavItem = {
  key: string;
  label: string;
  icon: string; // art file in /public/assets
  locked?: boolean;
};

const items: NavItem[] = [
  { key: "farm", label: "Farm", icon: "nav-farm.png" },
  { key: "market", label: "Market", icon: "nav-market.png" },
  { key: "warehouse", label: "Warehouse", icon: "nav-warehouse.png", locked: true },
  { key: "factory", label: "Factory", icon: "nav-factory.png", locked: true },
  { key: "prestige", label: "Prestige", icon: "nav-prestige.png", locked: true },
];

function LockBadge() {
  return (
    <span
      className="absolute -top-1 -right-1 flex items-center justify-center rounded-full"
      style={{ width: 15, height: 15, background: "#1c1408", border: "1px solid #6d5a2c" }}
    >
      <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="10" width="14" height="10" rx="2" fill="#c9b485" />
        <path d="M8 10V7a4 4 0 018 0v3" stroke="#c9b485" strokeWidth="2.4" fill="none" />
      </svg>
    </span>
  );
}

export default function BottomNav() {
  const [active, setActive] = useState("farm");

  return (
    <nav
      className="bottom-nav sticky bottom-0 z-40 px-1 pt-1.5 pb-2"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom) + 8px)" }}
    >
      <div className="flex items-stretch justify-around">
        {items.map((it) => {
          const on = active === it.key;
          return (
            <button
              key={it.key}
              onClick={() => !it.locked && setActive(it.key)}
              className={`nav-item flex flex-col items-center gap-0.5 flex-1 ${
                on ? "active" : ""
              } ${it.locked ? "locked" : ""}`}
            >
              <span className="nav-pill relative flex items-center justify-center rounded-2xl px-3 py-1">
                <AssetSlot src={it.icon} size={30} rounded={8} label={it.label} />
                {it.locked && <LockBadge />}
              </span>
              <span className="text-[10px] font-bold">{it.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
