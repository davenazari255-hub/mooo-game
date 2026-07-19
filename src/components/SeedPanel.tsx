"use client";

import { useState } from "react";
import { CoinIcon, ClockIcon } from "./Icons";
import { Art } from "./Art";

type Seed = {
  id: string;
  name: string;
  price: number;
  growTime: string; // نمایش زمان
  yieldAmount: number; // سود
  art: string; // نام وکتور میوه در public/art
};

const allSeeds: Seed[] = [
  { id: "apple", name: "سیب", price: 100, growTime: "۲ دقیقه", yieldAmount: 180, art: "apple" },
  { id: "orange", name: "پرتقال", price: 150, growTime: "۵ دقیقه", yieldAmount: 280, art: "orange" },
  { id: "mango", name: "انبه", price: 220, growTime: "۱۰ دقیقه", yieldAmount: 420, art: "mango" },
  { id: "cherry", name: "گیلاس", price: 300, growTime: "۲۰ دقیقه", yieldAmount: 600, art: "cherry" },
  { id: "plum", name: "آلو", price: 400, growTime: "۳۰ دقیقه", yieldAmount: 850, art: "plum" },
];

const tabs = [
  { id: "all", label: "همه" },
  { id: "fruits", label: "میوه‌ها" },
  { id: "trees", label: "درختان" },
  { id: "special", label: "ویژه" },
];

function SeedCard({ seed }: { seed: Seed }) {
  return (
    <div className="seed-card flex flex-col items-center px-1.5 py-2 min-w-[68px]">
      {/* آیکون میوه */}
      <div className="mb-1">
        <Art name={seed.art} size={34} alt={seed.name} />
      </div>
      {/* نام */}
      <span className="text-[10px] font-black text-[#5a3a08] mb-1">{seed.name}</span>
      {/* قیمت - سکه */}
      <div className="flex items-center gap-0.5 mb-1">
        <CoinIcon size={11} />
        <span className="text-[9px] font-bold text-[#3f2912]">{seed.price}</span>
      </div>
      {/* زمان رشد */}
      <div className="flex items-center gap-0.5 text-[#7a5a3a]">
        <ClockIcon size={10} />
        <span className="text-[8px] font-bold">{seed.growTime}</span>
      </div>
      {/* سود */}
      <div className="mt-0.5 text-[8px] font-bold text-[#5a8c2f]">+{seed.yieldAmount}</div>
    </div>
  );
}

export default function SeedPanel() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="mt-3 px-2 pb-1">
      {/* دکمه Plant All سبز */}
      <button
        className="btn-green w-full rounded-full py-2 flex items-center justify-center gap-2 mb-2"
        style={{ maxWidth: 200, margin: "0 auto 8px" }}
      >
        <SeedIconForPlantAll />
        <span className="text-sm font-black">کشت همه</span>
        <div className="flex items-center gap-1 text-[11px] font-bold opacity-90">
          <CoinIcon size={14} />
          <span>۷۰۰</span>
        </div>
      </button>

      {/* پنل چوبی با تب‌ها + کارت بذرها */}
      <div className="panel-wood-dark p-2 rounded-2xl">
        {/* تب‌ها */}
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

        {/* لیست کارت بذرها - اسکرول‌خور */}
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
