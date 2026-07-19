"use client";

import AssetSlot from "./AssetSlot";

function PlusButton() {
  return (
    <button
      aria-label="add"
      className="btn-plus flex items-center justify-center rounded-lg shrink-0"
      style={{ width: 28, height: 28, fontSize: 20, lineHeight: 1, paddingBottom: 2 }}
    >
      +
    </button>
  );
}

/** Coin / Gem resource chip with a "+" button on the trailing edge. */
function ResourceChip({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: string;
}) {
  return (
    <div className="pill-dark flex items-center gap-1.5 rounded-full pl-1 pr-1 py-1">
      {icon}
      <span className="text-white font-extrabold text-[15px] tabular-nums px-0.5">
        {value}
      </span>
      <PlusButton />
    </div>
  );
}

export default function TopBar() {
  const level = 8;
  const xp = 720;
  const xpMax = 1200;

  return (
    <div className="px-3 pt-3 pb-1">
      <div className="flex items-center gap-2">
        {/* Coins */}
        <ResourceChip
          icon={<AssetSlot src="coin.png" size={26} rounded={999} label="coin" />}
          value="25,430"
        />

        {/* Gems */}
        <ResourceChip
          icon={<AssetSlot src="gem.png" size={26} rounded={999} label="gem" />}
          value="120"
        />

        {/* Level + XP */}
        <div className="pill-dark flex items-center gap-2 rounded-full pl-1 pr-3 py-1 flex-1 min-w-0">
          <AssetSlot src="star.png" size={30} rounded={999} label="lvl" />
          <span className="text-white font-extrabold text-[15px] shrink-0">
            {level}
          </span>
          <div className="flex-1 min-w-0">
            <div className="xp-track h-3 rounded-full overflow-hidden relative">
              <div
                className="xp-fill h-full rounded-full"
                style={{ width: `${(xp / xpMax) * 100}%` }}
              />
              <span
                className="absolute inset-0 flex items-center justify-center text-white font-bold"
                style={{ fontSize: 9, textShadow: "0 1px 1px rgba(0,0,0,0.6)" }}
              >
                {xp}/{xpMax}
              </span>
            </div>
          </div>
        </div>

        {/* Settings */}
        <button
          aria-label="settings"
          className="pill-dark rounded-full flex items-center justify-center shrink-0"
          style={{ width: 42, height: 42 }}
        >
          <AssetSlot src="settings.png" size={26} rounded={999} label="set" />
        </button>
      </div>
    </div>
  );
}
