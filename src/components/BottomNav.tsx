"use client";

import { useState } from "react";

// =================== آیکون‌های ناوبری ===================
const FarmIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10l9-6 9 6v10H3V10z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <rect x="10" y="13" width="5" height="7" fill="rgba(255,255,255,0.35)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
  </svg>
);

const MarketIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 8h16l-1 11H5L4 8z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <path d="M9 8a3 3 0 016 0" stroke="rgba(0,0,0,0.3)" strokeWidth="1.6" fill="none" />
  </svg>
);

const WarehouseIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 9l2-4h14l2 4v11H3V9z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <rect x="9" y="12" width="6" height="8" fill="rgba(255,255,255,0.25)" stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
  </svg>
);

const FactoryIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 20V12l6 4V12l6 4V8l3 0v12H3z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
    <rect x="14" y="4" width="4" height="6" fill="currentColor" stroke="rgba(0,0,0,0.25)" strokeWidth="1" />
  </svg>
);

const PrestigeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"
      fill="currentColor"
      stroke="rgba(0,0,0,0.25)"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="5" y="10" width="14" height="11" rx="2" fill="#2a1f12" stroke="#1a1108" strokeWidth="1.5" />
    <path d="M8 10V7a4 4 0 018 0v3" stroke="#1a1108" strokeWidth="2" fill="none" />
  </svg>
);

type NavItem = {
  key: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  locked?: boolean;
};

const items: NavItem[] = [
  { key: "farm", label: "مزرعه", Icon: FarmIcon },
  { key: "market", label: "بازار", Icon: MarketIcon },
  { key: "warehouse", label: "انبار", Icon: WarehouseIcon, locked: true },
  { key: "factory", label: "کارخانه", Icon: FactoryIcon, locked: true },
  { key: "prestige", label: "پرستیژ", Icon: PrestigeIcon, locked: true },
];

export default function BottomNav() {
  const [active, setActive] = useState("farm");

  return (
    <div
      className="sticky bottom-0 z-40 mt-2"
      style={{
        background: "linear-gradient(180deg,#3a2715,#1a1108)",
        borderTop: "2px solid #6e4a24",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex items-stretch justify-around px-1 py-1.5">
        {items.map((it) => {
          const on = active === it.key;
          const { Icon } = it;
          return (
            <button
              key={it.key}
              onClick={() => !it.locked && setActive(it.key)}
              className={`nav-item flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 rounded-xl ${
                on ? "active" : ""
              } ${it.locked ? "locked" : ""}`}
            >
              <div className="relative">
                <Icon size={22} />
                {it.locked && (
                  <span
                    className="absolute -top-1 -right-2 flex items-center justify-center rounded-full"
                    style={{
                      width: 14,
                      height: 14,
                      background: "#1a1108",
                      border: "1px solid #6e4a24",
                    }}
                  >
                    <LockIcon size={8} />
                  </span>
                )}
              </div>
              <span className="text-[9px] font-black">{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
