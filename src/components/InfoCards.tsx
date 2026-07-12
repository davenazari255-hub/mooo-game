"use client";

import { CoinIcon, GemIcon, ProgressBar, TrophyIcon, GiftIcon, ChestIcon } from "./Icons";

function MiniCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="panel !rounded-xl p-2 flex flex-col justify-between min-h-[86px]">
      {children}
    </div>
  );
}

export default function InfoCards() {
  return (
    <div className="px-2 grid grid-cols-3 gap-1.5">
      {/* لیگ مزرعه‌داران */}
      <MiniCard>
        <div className="flex items-center gap-1">
          <TrophyIcon size={22} />
          <div className="leading-tight">
            <div className="text-[10px] font-black text-panel-ink">
              لیگ مزرعه‌داران
            </div>
            <div className="text-[8px] text-[#8a6a3a] font-bold">رتبه شما</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-black text-[#3f6a1f]">#۲۴</span>
          <button className="btn-green text-[9px] font-black rounded-md px-2 py-1">
            مشاهده
          </button>
        </div>
      </MiniCard>

      {/* ماموریت روزانه */}
      <MiniCard>
        <div className="flex items-center gap-1">
          <GiftIcon size={22} />
          <div className="leading-tight">
            <div className="text-[10px] font-black text-panel-ink">
              ماموریت روزانه
            </div>
            <div className="text-[8px] text-[#8a6a3a] font-bold">
              ۵ بار محصول بفروش
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-1">
              <span className="flex items-center gap-0.5 text-[9px] font-black text-panel-ink">
                <CoinIcon size={11} /> ۲۰۰۰
              </span>
              <span className="flex items-center gap-0.5 text-[9px] font-black text-panel-ink">
                <GemIcon size={11} /> ۱۰
              </span>
            </div>
            <span className="text-[9px] font-black text-[#3f6a1f]">۵/۸</span>
          </div>
          <ProgressBar value={5} max={8} height={6} />
        </div>
      </MiniCard>

      {/* صندوق ویژه */}
      <MiniCard>
        <div className="flex items-center gap-1">
          <ChestIcon size={22} />
          <div className="leading-tight">
            <div className="text-[10px] font-black text-panel-ink">
              صندوق ویژه
            </div>
            <div className="text-[8px] text-[#8a6a3a] font-bold">آماده در</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <span
            className="text-[13px] font-black text-[#b23b1e] tracking-wider"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            ۰۳:۵۹:۴۸
          </span>
        </div>
      </MiniCard>
    </div>
  );
}
