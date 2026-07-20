import { CoinIcon, GemIcon } from "./Icons";

type StatChipProps = {
  icon: React.ReactNode;
  value: string;
  onPlus?: boolean;
};

function StatChip({ icon, value, onPlus }: StatChipProps) {
  return (
    <div className="stat-chip flex items-center gap-1.5 rounded-full pr-2 pl-1 py-0.5 min-w-0 flex-1">
      {icon}
      <span className="text-[12px] font-extrabold text-[#ffe9a8] truncate flex-1">
        {value}
      </span>
      {onPlus && (
        <button
          aria-label="Add"
          className="inline-flex items-center justify-center w-5 h-5 rounded-full text-white font-black shrink-0"
          style={{
            background: "linear-gradient(180deg,#86c93f,#4e8a24)",
            border: "1px solid #3f6d18",
            boxShadow: "0 1px 0 #3f6d18",
            fontSize: 12,
            lineHeight: 1,
          }}
        >
          +
        </button>
      )}
    </div>
  );
}

export default function TopBar() {
  const level = 12;
  const xp = 720;
  const xpMax = 1200;

  return (
    <div className="sticky top-0 z-40 px-2 pt-2 pb-1.5">

      <div className="flex items-center gap-1.5">

        <div className="stat-chip flex items-center gap-2 rounded-full pl-2 pr-1.5 py-1 flex-1 min-w-0">

          <div
            className="relative w-8 h-8 rounded-full shrink-0 flex items-center justify-center"
            style={{
              background: "radial-gradient(circle at 35% 30%, #fff5a0 0%, #ffc832 60%, #d69012 100%)",
              border: "2px solid #7a4d10",
              boxShadow: "0 2px 3px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.6)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M12 2.5l2.7 6 6.5.6-4.9 4.3 1.5 6.4L12 16.7 6.2 19.8l1.5-6.4L2.8 9.1l6.5-.6z"
                fill="#fff7c4"
                stroke="#9c5e16"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-[#ffd94f]">LV {level}</span>
              <span className="text-[8px] text-[#c9b689] font-bold">
                {xp}/{xpMax}
              </span>
            </div>
            <div className="xp-track h-1.5 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(xp / xpMax) * 100}%`,
                  background: "linear-gradient(180deg,#8fe04f,#4e9a24)",
                }}
              />
            </div>
          </div>
        </div>

        <button
          aria-label="Settings"
          className="stat-chip w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" stroke="#ffe9a8" strokeWidth="2" />
            <path
              d="M12 1.5l1.5 3.2 3.5-.6-1 3.4 3 2-2.5 2.5 1.5 3.2-3.5.4-.8 3.4-2.7-2.2-2.7 2.2-.8-3.4-3.5-.4 1.5-3.2L6.5 7.1l3-2-1-3.4 3.5.6z"
              fill="#ffe9a8"
              stroke="#5a3a08"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-1.5 mt-1.5">
        <StatChip
          icon={<CoinIcon size={22} />}
          value="125K"
          onPlus
        />
        <StatChip
          icon={<GemIcon size={20} />}
          value="850"
          onPlus
        />
      </div>
    </div>
  );
}
