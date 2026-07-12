"use client";

import { useState } from "react";

const items = [
  { key: "farm", label: "مزرعه", icon: "🚜" },
  { key: "build", label: "سازه‌ها", icon: "🏗️" },
  { key: "market", label: "بازار", icon: "🛒" },
  { key: "missions", label: "ماموریت‌ها", icon: "📜" },
  { key: "friends", label: "دوستان", icon: "👥" },
  { key: "wallet", label: "کیف پول", icon: "👛" },
];

export default function BottomNav() {
  const [active, setActive] = useState("farm");

  return (
    <div
      className="sticky bottom-0 z-30 mt-2"
      style={{
        background: "linear-gradient(180deg,#2c2013,#180f07)",
        borderTop: "2px solid #4a3117",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex items-stretch justify-around px-1 py-1.5">
        {items.map((it) => {
          const on = active === it.key;
          return (
            <button
              key={it.key}
              onClick={() => setActive(it.key)}
              className="flex flex-col items-center gap-0.5 flex-1 py-1 rounded-lg transition-colors"
              style={
                on
                  ? {
                      background:
                        "linear-gradient(180deg,#c14a26,#8f2f16)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                    }
                  : undefined
              }
            >
              <span
                className="text-lg leading-none"
                style={{ filter: on ? "none" : "grayscale(0.35)" }}
              >
                {it.icon}
              </span>
              <span
                className={`text-[8.5px] font-black ${
                  on ? "text-white" : "text-[#c9b689]"
                }`}
              >
                {it.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
