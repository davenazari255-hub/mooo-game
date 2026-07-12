import React from "react";

type IconProps = { size?: number; className?: string };

const OUT = "#3d2a15"; // خط دور تیره

// ───────────────────────── منابع ─────────────────────────

// سکه طلایی
export function CoinIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <radialGradient id="coinFace" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#ffe680" />
          <stop offset="0.6" stopColor="#f6bf2c" />
          <stop offset="1" stopColor="#d9931a" />
        </radialGradient>
      </defs>
      <circle cx="12" cy="12" r="10.5" fill="#c9820f" />
      <circle cx="12" cy="12" r="9.5" fill="url(#coinFace)" stroke="#a9660a" strokeWidth="0.6" />
      <circle cx="12" cy="12" r="6.6" fill="none" stroke="#d99a1e" strokeWidth="1.4" opacity="0.7" />
      <path d="M12 7.5c2 0 3 1.2 3 2.2 0 .9-.7 1.4-1.7 1.7l-2 .5c-.5.1-.8.4-.8.8 0 .5.6.9 1.5.9.8 0 1.4-.3 1.6-.8"
        fill="none" stroke="#a9660a" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M12 6.4v11.2" stroke="#a9660a" strokeWidth="1.3" strokeLinecap="round" />
      <ellipse cx="9" cy="8.4" rx="2.4" ry="1.3" fill="#fff6cf" opacity="0.6" transform="rotate(-30 9 8.4)" />
    </svg>
  );
}

// جم / الماس سبز
export function GemIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <linearGradient id="gemg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9dffcf" />
          <stop offset="1" stopColor="#1fb060" />
        </linearGradient>
      </defs>
      <path d="M6 3.2h12l3.6 5.4-9.6 12.2L2.4 8.6z" fill="url(#gemg)" stroke="#0f7a44" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M6 3.2l6 5.4 6-5.4M2.4 8.6h19.2M12 8.6v12.2" stroke="#0d6b3b" strokeWidth="0.8" fill="none" opacity="0.55" />
      <path d="M8.4 5.1l3.6 3.2 3.6-3.2" fill="#c9ffe6" opacity="0.5" />
    </svg>
  );
}

// انرژی / رعد
export function EnergyIcon({ size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <linearGradient id="eng" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d6ff8a" />
          <stop offset="1" stopColor="#5fbf2a" />
        </linearGradient>
      </defs>
      <path d="M13.5 2L4.5 13.5H10l-1.2 8.5 9.2-12.4H12z" fill="url(#eng)" stroke="#3c7a17" strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M12.6 4.5L6.7 12.2h4" fill="#f2ffd6" opacity="0.5" />
    </svg>
  );
}

// نشان + سبز
export function PlusBadge({ size = 16 }: IconProps) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full text-white font-black shrink-0"
      style={{
        width: size, height: size, fontSize: size * 0.7,
        background: "linear-gradient(180deg,#86c93f,#4e8a24)",
        border: "1px solid #3f6d18", boxShadow: "0 1px 0 #3f6d18",
      }}
    >
      +
    </span>
  );
}

// ───────────────────────── آیکون‌های کارت ─────────────────────────

// جام قهرمانی
export function TrophyIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M6 3h12v3c0 3.3-2.7 6-6 6S6 9.3 6 6z" fill="#ffd23f" stroke={OUT} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M6 4H3.5v1.5C3.5 7.5 5 9 6.8 9M18 4h2.5v1.5C20.5 7.5 19 9 17.2 9" fill="none" stroke={OUT} strokeWidth="1.1" strokeLinecap="round" />
      <rect x="10.7" y="11.6" width="2.6" height="3.2" fill="#e0a51e" stroke={OUT} strokeWidth="0.8" />
      <path d="M8 15h8l-.8 2.2H8.8z" fill="#e0a51e" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
      <rect x="7" y="17" width="10" height="2.4" rx="0.6" fill="#c98a16" stroke={OUT} strokeWidth="1" />
      <circle cx="12" cy="6.2" r="1.7" fill="#fff2b0" opacity="0.8" />
    </svg>
  );
}

// هدیه / ماموریت
export function GiftIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <rect x="3.5" y="10" width="17" height="10.5" rx="1.2" fill="#e0533a" stroke={OUT} strokeWidth="1.1" />
      <rect x="2.5" y="7" width="19" height="3.4" rx="1" fill="#f26b4e" stroke={OUT} strokeWidth="1.1" />
      <rect x="10.4" y="7" width="3.2" height="13.5" fill="#ffd23f" stroke={OUT} strokeWidth="1" />
      <path d="M12 7C10.5 4 7 4 7 6c0 1.4 2.6 1 5 1M12 7c1.5-3 5-3 5-1 0 1.4-2.6 1-5 1z" fill="#ffd23f" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

// صندوق ویژه
export function ChestIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M4 9c0-2.2 3.6-4 8-4s8 1.8 8 4v2H4z" fill="#a8641f" stroke={OUT} strokeWidth="1.1" strokeLinejoin="round" />
      <rect x="4" y="10.5" width="16" height="8.5" rx="1" fill="#8a4e18" stroke={OUT} strokeWidth="1.1" />
      <rect x="3.3" y="10" width="17.4" height="3" rx="0.8" fill="#c98a16" stroke={OUT} strokeWidth="1" />
      <rect x="10.4" y="11.4" width="3.2" height="5" rx="0.6" fill="#ffd23f" stroke={OUT} strokeWidth="1" />
      <circle cx="12" cy="13.6" r="0.9" fill={OUT} />
      <path d="M6 8.2c1.4-1 3.6-1.6 6-1.6" stroke="#d89a4a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}

// ───────────────────────── آیکون‌های پنل / اکشن ─────────────────────────

export function ClipboardIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <rect x="5" y="4" width="14" height="17" rx="1.6" fill="#f4e6c4" stroke={OUT} strokeWidth="1.2" />
      <rect x="8.5" y="2.6" width="7" height="3.2" rx="1" fill="#c98a16" stroke={OUT} strokeWidth="1.1" />
      <path d="M8 10h8M8 13.5h8M8 17h5" stroke="#8a6a3a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function CartIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M3 4h2.2l2.3 10.5h9.5l2-7.5H6.4" fill="none" stroke={OUT} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M7.2 8.5h11l-1.5 5.5H8.4z" fill="#f2c744" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
      <circle cx="9" cy="18.5" r="1.7" fill="#8a4e18" stroke={OUT} strokeWidth="1.1" />
      <circle cx="16" cy="18.5" r="1.7" fill="#8a4e18" stroke={OUT} strokeWidth="1.1" />
    </svg>
  );
}

export function UpgradeIcon({ size = 18 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M12 3l7 7h-4v5H9v-5H5z" fill="#7bbf3a" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="9" y="16.5" width="6" height="4.5" rx="0.8" fill="#5a9c27" stroke={OUT} strokeWidth="1.2" />
    </svg>
  );
}

export function MapIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" fill="#f4e6c4" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9 4v14M15 6v14" stroke={OUT} strokeWidth="1" opacity="0.6" />
      <path d="M6 9c1.5 1 2 2.5 4 2.5" stroke="#6ba63a" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="11" r="1.6" fill="#e0533a" stroke={OUT} strokeWidth="0.8" />
    </svg>
  );
}

export function LockIcon({ size = 14 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <rect x="5" y="10" width="14" height="10" rx="2" fill="#c9a25a" stroke={OUT} strokeWidth="1.3" />
      <path d="M8 10V7.5a4 4 0 018 0V10" fill="none" stroke={OUT} strokeWidth="1.6" />
      <circle cx="12" cy="14.5" r="1.6" fill={OUT} />
    </svg>
  );
}

// ───────────────────────── نویگیشن پایین ─────────────────────────

export function NavFarm({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
      <path d="M3 17v-4h6l1-3h4l2 3h4v4z" fill="#e0533a" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="9.5" y="6.5" width="5" height="4" fill="#f2c744" stroke={OUT} strokeWidth="1.1" />
      <circle cx="7" cy="18.5" r="2.3" fill="#4a3117" stroke={OUT} strokeWidth="1.1" />
      <circle cx="17" cy="18.5" r="2.8" fill="#4a3117" stroke={OUT} strokeWidth="1.1" />
      <circle cx="7" cy="18.5" r="0.9" fill="#e8cf98" />
      <circle cx="17" cy="18.5" r="1.1" fill="#e8cf98" />
    </svg>
  );
}

export function NavBuild({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
      <path d="M13.5 6.5l4-4 4 4-4 4z" fill="#c9a25a" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11.5 8.5l-8 8 3 3 8-8" fill="#9c6f2f" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M2 20l2.5 2.5" stroke={OUT} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function NavMissions({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
      <path d="M6 3h9l4 4v14H6z" fill="#f4e6c4" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M15 3v4h4" fill="#e8cf98" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M8.5 11h7M8.5 14h7M8.5 17h4" stroke="#8a6a3a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function NavFriends({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
      <circle cx="8.5" cy="8" r="3" fill="#f2c744" stroke={OUT} strokeWidth="1.2" />
      <circle cx="16" cy="9" r="2.4" fill="#e0a51e" stroke={OUT} strokeWidth="1.2" />
      <path d="M3 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5z" fill="#f2c744" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14 19c0-2.6 1.8-4.3 4-4.3s4 1.7 4 4.3z" fill="#e0a51e" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function NavWallet({ size = 22, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={`shrink-0 ${className}`}>
      <rect x="3" y="6" width="18" height="13" rx="2.2" fill="#9c6f2f" stroke={OUT} strokeWidth="1.2" />
      <path d="M3 9h14a2 2 0 012 2v2a2 2 0 01-2 2H3z" fill="#c9a25a" stroke={OUT} strokeWidth="1.1" />
      <circle cx="16.5" cy="12.5" r="1.4" fill="#ffd23f" stroke={OUT} strokeWidth="0.9" />
    </svg>
  );
}

export function MenuIcon({ size = 20 }: IconProps) {
  return (
    <div className="flex flex-col gap-1" style={{ width: size }}>
      <span className="block h-0.5 bg-[#f6c445] rounded" />
      <span className="block h-0.5 bg-[#f6c445] rounded" />
      <span className="block h-0.5 bg-[#f6c445] rounded" />
    </div>
  );
}

// ───────────────────────── نوار پیشرفت ─────────────────────────

export function ProgressBar({
  value, max, color = "#7bbf3a", height = 7,
}: { value: number; max: number; color?: string; height?: number }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className="xp-track w-full rounded-full overflow-hidden" style={{ height }}>
      <div className="h-full rounded-full"
        style={{
          width: `${pct}%`,
          background: `linear-gradient(180deg, ${color}, ${shade(color, -25)})`,
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />
    </div>
  );
}

function shade(hex: string, percent: number) {
  const n = parseInt(hex.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amt));
  return `rgb(${r},${g},${b})`;
}
