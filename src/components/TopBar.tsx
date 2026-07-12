"use client";

import { CoinIcon, GemIcon, EnergyIcon, PlusBadge, MenuIcon } from "./Icons";
import { FarmerAvatar } from "./art/FarmerAvatar";

function StatChip({
  icon,
  value,
  sub,
  onPlus,
}: {
  icon: React.ReactNode;
  value: string;
  sub?: string;
  onPlus?: boolean;
}) {
  return (
    <div className="stat-chip flex items-center gap-1.5 rounded-full pr-2 pl-1 py-1 min-w-0">
      {icon}
      <div className="flex flex-col leading-none min-w-0">
        <span className="text-[13px] font-extrabold text-[#ffe9a8] truncate">
          {value}
        </span>
        {sub && (
          <span className="text-[9px] text-farm-energy/90 font-bold mt-0.5">
            {sub}
          </span>
        )}
      </div>
      {onPlus && (
        <button aria-label="افزودن">
          <PlusBadge size={17} />
        </button>
      )}
    </div>
  );
}

export default function TopBar({
  playerName = "کشاورز حرفه‌ای",
  level = 12,
  xp = 2900,
  xpMax = 3500,
}: {
  playerName?: string;
  level?: number;
  xp?: number;
  xpMax?: number;
}) {
  return (
    <div className="sticky top-0 z-30 px-2 pt-2 pb-2 bg-gradient-to-b from-[#160f07] to-[#160f07]/85 backdrop-blur-sm">
      {/* ردیف اول: پروفایل + منو */}
      <div className="flex items-center gap-2">
        {/* کارت پروفایل */}
        <div className="stat-chip flex items-center gap-2 rounded-full pl-3 pr-1 py-1 flex-1 min-w-0">
          <div
            className="relative w-9 h-9 rounded-full shrink-0 overflow-hidden flex items-center justify-center"
            style={{ border: "2px solid #f6c445" }}
          >
            <FarmerAvatar size={34} />
            <span className="absolute -bottom-1 -right-1 bg-[#3b7d1e] text-[8px] font-black text-white px-1 rounded-full border border-[#2a5c12]">
              LV {level}
            </span>
          </div>
          <div className="flex flex-col min-w-0 flex-1 pl-1">
            <span className="text-[12px] font-extrabold text-[#ffe9a8] truncate">
              {playerName}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="xp-track h-1.5 rounded-full overflow-hidden flex-1">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(xp / xpMax) * 100}%`,
                    background: "linear-gradient(180deg,#8fe04f,#4e9a24)",
                  }}
                />
              </div>
              <span className="text-[8px] text-[#c9b689] font-bold shrink-0">
                {xp}/{xpMax}
              </span>
            </div>
          </div>
        </div>

        {/* منوی همبرگری */}
        <button
          aria-label="منو"
          className="stat-chip w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
        >
          <MenuIcon size={18} />
        </button>
      </div>

      {/* ردیف دوم: منابع */}
      <div className="flex items-center gap-1.5 mt-2">
        <StatChip
          icon={<CoinIcon size={22} />}
          value="۱۲۵,۴۵۰"
          sub="ساعتی +۱۲۰۰"
          onPlus
        />
        <StatChip icon={<GemIcon size={20} />} value="۸۵۰" onPlus />
        <StatChip
          icon={<EnergyIcon size={20} />}
          value="۱۲۰"
          sub="۰۲:۴۵"
          onPlus
        />
      </div>
    </div>
  );
}
