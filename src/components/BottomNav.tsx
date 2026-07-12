"use client";

import { useState } from "react";
import {
  NavFarm,
  NavBuild,
  CartIcon,
  NavMissions,
  NavFriends,
  NavWallet,
} from "./Icons";

type NavItem = {
  key: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
};

const items: NavItem[] = [
  { key: "farm", label: "مزرعه", Icon: NavFarm },
  { key: "build", label: "سازه‌ها", Icon: NavBuild },
  { key: "market", label: "بازار", Icon: CartIcon },
  { key: "missions", label: "ماموریت‌ها", Icon: NavMissions },
  { key: "friends", label: "دوستان", Icon: NavFriends },
  { key: "wallet", label: "کیف پول", Icon: NavWallet },
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
          const { Icon } = it;
          return (
            <button
              key={it.key}
              onClick={() => setActive(it.key)}
              className="flex flex-col items-center gap-1 flex-1 py-1 rounded-lg transition-colors"
              style={
                on
                  ? {
                      background: "linear-gradient(180deg,#c14a26,#8f2f16)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                    }
                  : undefined
              }
            >
              <span style={{ opacity: on ? 1 : 0.55 }}>
                <Icon size={22} />
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
