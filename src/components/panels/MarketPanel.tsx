"use client";

import { CoinIcon, CartIcon } from "../Icons";
import { Wheat, Corn, Milk } from "../art/FarmArt";
import { Panel } from "./Panel";

const prices = [
  { name: "گندم", Art: Wheat, price: 125, up: true },
  { name: "ذرت", Art: Corn, price: 110, up: false },
  { name: "شیر", Art: Milk, price: 140, up: true },
];

function fa(n: number) {
  return n.toLocaleString("fa-IR");
}

export default function MarketPanel() {
  return (
    <Panel icon={<CartIcon size={16} />} title="بازار">
      <div className="text-[9px] font-bold text-[#8a6a3a] mb-1.5 text-center">
        قیمت لحظه‌ای محصولات
      </div>
      <div className="grid grid-cols-3 gap-1.5 mb-2">
        {prices.map((p) => {
          const { Art } = p;
          return (
            <div
              key={p.name}
              className="rounded-lg p-1.5 flex flex-col items-center gap-0.5"
              style={{
                background: "linear-gradient(180deg,#fbf1d6,#f0dfb2)",
                border: "1.5px solid #c8a35f",
              }}
            >
              <Art size={24} />
              <div className="flex items-center gap-0.5 text-[10px] font-black text-panel-ink">
                <CoinIcon size={11} /> {fa(p.price)}
                <span className={p.up ? "text-[#3f8a1f]" : "text-[#b23b1e]"}>
                  {p.up ? "▲" : "▼"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-gold w-full rounded-lg py-2 text-[12px] font-black">
        رفتن به بازار
      </button>
    </Panel>
  );
}
