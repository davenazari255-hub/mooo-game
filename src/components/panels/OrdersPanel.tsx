"use client";

import { CoinIcon, GemIcon, ProgressBar } from "../Icons";
import { Panel } from "./Panel";

export default function OrdersPanel() {
  return (
    <Panel icon="📋" title="سفارشات">
      <div
        className="rounded-lg p-2 flex flex-col gap-1.5"
        style={{
          background: "linear-gradient(180deg,#fbf1d6,#f0dfb2)",
          border: "1.5px solid #c8a35f",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-lg">🌾</span>
            <span className="text-[11px] font-black text-panel-ink">
              سفارش گندم
            </span>
          </div>
          <span className="text-[10px] font-black text-[#3f6a1f]">۱۲۰/۳۰۰</span>
        </div>
        <ProgressBar value={120} max={300} color="#e8b93a" height={6} />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-0.5 text-[10px] font-black text-panel-ink">
              <CoinIcon size={12} /> ۵۰۰۰
            </span>
            <span className="flex items-center gap-0.5 text-[10px] font-black text-panel-ink">
              <GemIcon size={12} /> ۲۵
            </span>
          </div>
          <button className="btn-green text-[10px] font-black rounded-md px-3 py-1">
            تحویل
          </button>
        </div>
      </div>
    </Panel>
  );
}
