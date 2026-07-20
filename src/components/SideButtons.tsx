type SideBtn = {
  key: string;
  label: string;
  icon: React.ReactNode;
  badge?: boolean;
};

const ShopIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M4 7h16l-1 12H5L4 7z"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M9 7a3 3 0 016 0" stroke="#3f2912" strokeWidth="1.6" fill="none" />
  </svg>
);

const UpgradeIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const SeedsIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3c4 4 6 7 6 10a6 6 0 01-12 0c0-3 2-6 6-10z"
      fill="#86c93f"
      stroke="#3f2912"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path d="M12 9v8" stroke="#3f2912" strokeWidth="1.6" />
  </svg>
);

const StorageIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M3 10l9-6 9 6v10H3V10z"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <rect x="9" y="13" width="6" height="7" fill="#6e4a24" stroke="#3f2912" strokeWidth="1.2" />
  </svg>
);

const DailyIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="4" y="5" width="16" height="16" rx="2"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
    />
    <path d="M9 3v4M15 3v4M4 10h16" stroke="#3f2912" strokeWidth="1.6" />
    <path d="M8 14l3 3 5-5" stroke="#86c93f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TrophyIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M8 4h8v5a4 4 0 01-8 0V4z"
      fill="#ffd94f"
      stroke="#3f2912"
      strokeWidth="1.4"
    />
    <path d="M8 5H5v2a3 3 0 003 3M16 5h3v2a3 3 0 01-3 3" stroke="#3f2912" strokeWidth="1.4" fill="none" />
    <path d="M10 13v4h4v-4M8 20h8" stroke="#3f2912" strokeWidth="1.6" />
  </svg>
);

const TasksIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect
      x="4" y="3" width="16" height="18" rx="2"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
    />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="#3f2912" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17.5" cy="16" r="2" fill="#86c93f" stroke="#3f2912" strokeWidth="1.2" />
  </svg>
);

const SettingsIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle
      cx="12" cy="12" r="3.2"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.4"
    />
    <path
      d="M12 1l1.5 3 3.5-.5-1 3.3 3 2-2.5 2.3 1.5 3.2-3.5.5-.7 3.3L12 15.5l-2.8 2.6-.7-3.3-3.5-.5 1.5-3.2L4 8.8l3-2-1-3.3 3.5.5z"
      fill="#fff7dc"
      stroke="#3f2912"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  </svg>
);

function SideButton({
  btn,
  align,
}: {
  btn: SideBtn;
  align: "left" | "right";
}) {
  return (
    <div className="relative">
      <button
        aria-label={btn.label}
        className="icon-btn-side flex items-center justify-center rounded-xl"
        style={{ width: 38, height: 38 }}
      >
        {btn.icon}
      </button>

      <div
        className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 whitespace-nowrap text-[7.5px] font-black text-white"
        style={{ textShadow: "0 1px 1px rgba(0,0,0,0.7)" }}
      >
        {btn.label}
      </div>
      {/* notification badge */}
      {btn.badge && (
        <span
          className="notif-badge absolute rounded-full flex items-center justify-center font-black"
          style={{
            top: -4,
            [align === "left" ? "right" : "left" as const]: -4,
            minWidth: 14,
            height: 14,
            fontSize: 9,
            padding: "0 3px",
            lineHeight: 1,
          }}
        >
          !
        </span>
      )}
    </div>
  );
}

const leftButtons: SideBtn[] = [
  { key: "shop", label: "Shop", icon: <ShopIcon size={18} />, badge: true },
  { key: "upgrades", label: "Upgrades", icon: <UpgradeIcon size={18} />, badge: true },
  { key: "seeds", label: "Seeds", icon: <SeedsIcon size={18} /> },
  { key: "storage", label: "Storage", icon: <StorageIcon size={18} /> },
];

const rightButtons: SideBtn[] = [
  { key: "daily", label: "Daily", icon: <DailyIcon size={18} /> },
  { key: "achievements", label: "Achievements", icon: <TrophyIcon size={18} /> },
  { key: "tasks", label: "Tasks", icon: <TasksIcon size={18} /> },
  { key: "settings", label: "Settings", icon: <SettingsIcon size={18} /> },
];

export default function SideButtons() {
  return (
    <>

      <div className="absolute left-1 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3.5">
        {leftButtons.map((b) => (
          <SideButton key={b.key} btn={b} align="left" />
        ))}
      </div>

      <div className="absolute right-1 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3.5">
        {rightButtons.map((b) => (
          <SideButton key={b.key} btn={b} align="right" />
        ))}
      </div>
    </>
  );
}
