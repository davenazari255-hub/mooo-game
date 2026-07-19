"use client";

import AssetSlot from "./AssetSlot";

export default function PlantAllButton() {
  return (
    <div className="flex justify-center px-4 -mt-1 mb-1 relative z-20">
      <button
        className="btn-green rounded-2xl px-8 py-2 flex flex-col items-center"
        style={{ minWidth: 190 }}
      >
        <span className="font-extrabold text-[18px] leading-tight">Plant All</span>
        <span className="flex items-center gap-1 text-[13px] font-bold opacity-95">
          <AssetSlot src="coin.png" size={16} rounded={999} label="c" />
          700
        </span>
      </button>
    </div>
  );
}
