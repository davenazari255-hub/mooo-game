"use client";

import { LockIcon } from "../Icons";
import { Cow, Sheep, House } from "../art/FarmArt";
import { Panel } from "./Panel";

type Animal = {
  name: string;
  Art: React.ComponentType<{ size?: number }>;
  value: number;
  max: number;
};

const animals: Animal[] = [
  { name: "گاو", Art: Cow, value: 12, max: 20 },
  { name: "گوسفند", Art: Sheep, value: 18, max: 30 },
];

function fa(n: number) {
  return n.toLocaleString("fa-IR");
}

export default function LivestockPanel() {
  return (
    <Panel icon={<House size={16} />} title="دامداری">
      <div className="grid grid-cols-2 gap-1.5">
        {animals.map((a) => {
          const { Art } = a;
          return (
            <div
              key={a.name}
              className="rounded-lg p-2 flex flex-col items-center gap-1"
              style={{
                background: "linear-gradient(180deg,#fbf1d6,#f0dfb2)",
                border: "1.5px solid #c8a35f",
              }}
            >
              <Art size={44} />
              <span className="text-[11px] font-black text-panel-ink">{a.name}</span>
              <span className="text-[10px] font-black text-[#3f6a1f]">
                {fa(a.value)} / {fa(a.max)}
              </span>
              <button className="btn-green w-full rounded-md py-1 text-[10px] font-black">
                تغذیه
              </button>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-2 rounded-lg py-2 text-[11px] font-black flex items-center justify-center gap-1.5 text-[#7a5a2a] bg-[#e5d09a] border border-[#c8a35f]">
        <LockIcon size={13} /> گسترش دامداری
      </button>
    </Panel>
  );
}
