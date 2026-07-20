"use client";

import { useState } from "react";
import { CoinIcon, ClockIcon } from "./Icons";

type Seed = {
  id: string;
  name: string;
  price: number;
  growTime: string;
  yieldAmount: number;
  color: string;
};

const allSeeds: Seed[] = [
  { id: "apple", name: "Apple", price: 100, growTime: "2 min", yieldAmount: 180, color: "#d92b2b" },
  { id: "orange", name: "Orange", price: 150, growTime: "5 min", yieldAmount: 280, color: "#ff8a3c" },
  { id: "mango", name: "Mango", price: 220, growTime: "10 min", yieldAmount: 420, color: "#ffc832" },
  { id: "cherry", name: "Cherry", price: 300, growTime: "20 min", yieldAmount: 600, color: "#c8122d" },
  { id: "plum", name: "Plum", price: 400, growTime: "30 min", yieldAmount: 850, color: "#7a2d8a" },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "fruits", label: "Fruits" },
  { id: "trees", label: "Trees" },
  { id: "special", label: "Special" },
];

function FruitIcon({ size = 28, color = "#d92b2b" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">

      <circle cx="16" cy="18" r="9" fill={color} stroke="#5a2a08" strokeWidth="1.3" />

      <ellipse cx="13" cy="14" rx="2.2" ry="1.6" fill="#fff" opacity="0.5" />

      <path
        d="M16 9c-1-2 1-4 3-3"
        stroke="#5a3a08"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M16 9c1-2 4-2 5-1-1 2-4 2-5 1z"
        fill="#86c93f"
        stroke="#487d1c"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SeedCard({ seed }: { seed: Seed }) {
  return (
    <div className="seed-card flex flex-col items-center px-1.5 py-2 min-w-[68px]">

      <div className="mb-1">
        <FruitIcon size={32} color={seed.color} />
      </div>

      <span className="text-[10px] font-black text-[#5a3a08] mb-1">{seed.name}</span>

      <div className="flex items-center gap-0.5 mb-1">
        <CoinIcon size={11} />
        <span className="text-[9px] font-bold text-[#3f2912]">{seed.price}</span>
      </div>

      <div className="flex items-center gap-0.5 text-[#7a5a3a]">
        <ClockIcon size={10} />
        <span className="text-[8px] font-bold">{seed.growTime}</span>
      </div>

      <div className="mt-0.5 text-[8px] font-bold text-[#5a8c2f]">+{seed.yieldAmount}</div>
    </div>
  );
}

export default function SeedPanel() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="mt-3 px-2 pb-1">

      <button
        className="btn-green w-full rounded-full py-2 flex items-center justify-center gap-2 mb-2"
        style={{ maxWidth: 200, margin: "0 auto 8px" }}
      >
        <SeedIconForPlantAll />
        <span className="text-sm font-black">Plant All</span>
        <div className="flex items-center gap-1 text-[11px] font-bold opacity-90">
          <CoinIcon size={14} />
          <span>700</span>
        </div>
      </button>

      <div className="panel-wood-dark p-2 rounded-2xl">

        <div className="flex gap-1.5 mb-2 overflow-x-auto no-scrollbar">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`seed-tab rounded-full px-3 py-1 text-[10px] font-black whitespace-nowrap flex-1 ${
                activeTab === t.id ? "active" : ""
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {allSeeds.map((seed) => (
            <SeedCard key={seed.id} seed={seed} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SeedIconForPlantAll() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3c4 4 6 7 6 10a6 6 0 01-12 0c0-3 2-6 6-10z"
        fill="#fff"
        stroke="#3f6d18"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 9v8" stroke="#3f6d18" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
