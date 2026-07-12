"use client";

import { CoinIcon, UpgradeIcon } from "../Icons";
import { House } from "../art/FarmArt";
import { Panel } from "./Panel";

export default function UpgradePanel() {
  return (
    <Panel icon={<UpgradeIcon size={16} />} title="ارتقاءها">
      <div
        className="rounded-lg p-2 flex items-center gap-2"
        style={{
          background: "linear-gradient(180deg,#fbf1d6,#f0dfb2)",
          border: "1.5px solid #c8a35f",
        }}
      >
        <House size={30} />
        <div className="flex-1 leading-tight">
          <div className="text-[11px] font-black text-panel-ink">
            انبار سطح ۳
          </div>
          <div className="text-[9px] font-bold text-[#8a6a3a]">
            افزایش ظرفیت ذخیره‌سازی
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="flex items-center gap-0.5 text-[10px] font-black text-panel-ink">
            <CoinIcon size={12} /> ۱۵۰۰۰
          </span>
          <button className="btn-gold text-[10px] font-black rounded-md px-3 py-1">
            ارتقاء
          </button>
        </div>
      </div>
    </Panel>
  );
}
