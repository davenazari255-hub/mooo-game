"use client";

import { CoinIcon, ProgressBar } from "../Icons";
import { Panel } from "./Panel";

type Crop = {
  name: string;
  emoji: string;
  timer: string;
  value: number;
  max: number;
  price: number;
  color: string;
};

const crops: Crop[] = [
  { name: "گندم", emoji: "🌾", timer: "۰۰:۱۵:۳۰", value: 120, max: 200, price: 7, color: "#e8b93a" },
  { name: "ذرت", emoji: "🌽", timer: "۰۲:۴۵:۱۰", value: 80, max: 200, price: 7, color: "#f2c744" },
  { name: "سویا", emoji: "🫛", timer: "۰۵:۳۰:۳۰", value: 60, max: 200, price: 10, color: "#8fbf4a" },
];

function fa(n: number) {
  return n.toLocaleString("fa-IR");
}

function CropCard({ crop }: { crop: Crop }) {
  return (
    <div
      className="rounded-lg p-1.5 flex flex-col gap-1"
      style={{
        background: "linear-gradient(180deg,#fbf1d6,#f0dfb2)",
        border: "1.5px solid #c8a35f",
      }}
    >
      <div className="flex items-center gap-1">
        <span className="text-lg">{crop.emoji}</span>
        <span className="text-[11px] font-black text-panel-ink">{crop.name}</span>
      </div>
      <div className="flex items-center gap-1 text-[9px] font-bold text-[#8a6a3a]">
        <span>⏱</span>
        <span style={{ fontVariantNumeric: "tabular-nums" }}>{crop.timer}</span>
      </div>
      <ProgressBar value={crop.value} max={crop.max} color={crop.color} height={6} />
      <div className="flex items-center justify-between">
        <span className="text-[9px] font-black text-panel-ink">
          {fa(crop.value)}/{fa(crop.max)}
        </span>
        <button className="btn-green text-[9px] font-black rounded-md px-2 py-0.5 flex items-center gap-0.5">
          نمایش
        </button>
      </div>
      <div className="flex items-center justify-center gap-0.5 text-[9px] font-black text-panel-ink pt-0.5 border-t border-[#d8bd85]">
        <CoinIcon size={11} /> {fa(crop.price)}
      </div>
    </div>
  );
}

export default function CropPanel() {
  return (
    <Panel icon="🌾" title="کشتزارها">
      <div className="grid grid-cols-3 gap-1.5">
        {crops.map((c) => (
          <CropCard key={c.name} crop={c} />
        ))}
      </div>
      <button className="btn-gold w-full mt-2 rounded-lg py-2 text-[12px] font-black flex items-center justify-center gap-1">
        <span className="text-sm">➕</span> کشت جدید
      </button>
    </Panel>
  );
}
