"use client";

import { useState } from "react";
import AssetSlot from "./AssetSlot";

type Seed = {
  id: string;
  name: string;
  icon: string; // art file in /public/assets
  growth: string;
  profit: number;
  price: number;
};

const seeds: Seed[] = [
  { id: "apple", name: "Apple Seed", icon: "fruit-apple.png", growth: "1m", profit: 10, price: 20 },
  { id: "orange", name: "Orange Seed", icon: "fruit-orange.png", growth: "5m", profit: 30, price: 60 },
  { id: "mango", name: "Mango Seed", icon: "fruit-mango.png", growth: "15m", profit: 80, price: 120 },
  { id: "cherry", name: "Cherry Seed", icon: "fruit-cherry.png", growth: "1h", profit: 150, price: 200 },
  { id: "plum", name: "Plum Seed", icon: "fruit-plum.png", growth: "2h", profit: 250, price: 300 },
];

const tabs = [
  { id: "all", label: "All Seeds" },
  { id: "fruits", label: "Fruits" },
  { id: "trees", label: "Trees" },
  { id: "special", label: "Special" },
];

function SeedCard({ seed }: { seed: Seed }) {
  return (
    <div className="seed-card rounded-xl p-2 flex flex-col items-center shrink-0" style={{ width: 128 }}>
      <span className="font-extrabold text-[13px] text-[#5a3a12] mb-1">{seed.name}</span>

      <AssetSlot src={seed.icon} size={54} rounded={14} onLight label={seed.name.split(" ")[0]} />

      <div className="w-full mt-2 space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#8a6a3a] font-semibold">Growth Time</span>
          <span className="text-[#5a3a12] font-bold">{seed.growth}</span>
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#8a6a3a] font-semibold">Profit</span>
          <span className="flex items-center gap-1 text-[#5a3a12] font-bold">
            <AssetSlot src="coin.png" size={13} rounded={999} label="c" />
            {seed.profit}
          </span>
        </div>
      </div>

      <button className="seed-price w-full mt-2 rounded-lg py-1 flex items-center justify-center gap-1 text-[13px] font-extrabold">
        <AssetSlot src="coin.png" size={15} rounded={999} label="c" />
        {seed.price}
      </button>
    </div>
  );
}

export default function SeedShop() {
  const [active, setActive] = useState("all");

  return (
    <div className="px-2 pb-1">
      <div className="panel-wood rounded-2xl p-2">
        {/* Tabs */}
        <div className="flex gap-1 mb-2">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`seed-tab flex-1 rounded-lg py-1.5 text-[12px] font-bold whitespace-nowrap ${
                active === t.id ? "active" : ""
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Seed rail */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {seeds.map((s) => (
            <SeedCard key={s.id} seed={s} />
          ))}
        </div>
      </div>
    </div>
  );
}
