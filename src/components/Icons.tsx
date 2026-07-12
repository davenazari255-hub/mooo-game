import React from "react";

// سکه طلایی
export function CoinIcon({ size = 20 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 35% 30%, #ffe680, #f5b91e 70%, #c9820f)",
        border: "1px solid #a9660a",
        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6)",
      }}
    >
      <span
        style={{ fontSize: size * 0.55, color: "#a9660a", fontWeight: 900 }}
      >
        ₵
      </span>
    </span>
  );
}

// جم / الماس سبز
export function GemIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <linearGradient id="gemg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8affc1" />
          <stop offset="1" stopColor="#22b866" />
        </linearGradient>
      </defs>
      <path
        d="M6 3h12l4 6-10 12L2 9z"
        fill="url(#gemg)"
        stroke="#0f7a44"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M6 3l6 6 6-6M2 9h20M12 9v12" stroke="#0f7a44" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  );
}

// انرژی / رعد
export function EnergyIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <defs>
        <linearGradient id="eng" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c6ff7a" />
          <stop offset="1" stopColor="#5fbf2a" />
        </linearGradient>
      </defs>
      <path
        d="M13 2L4 14h6l-1 8 9-12h-6z"
        fill="url(#eng)"
        stroke="#3c7a17"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PlusBadge({ size = 16 }: { size?: number }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full text-white font-black shrink-0"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.7,
        background: "linear-gradient(180deg,#86c93f,#4e8a24)",
        border: "1px solid #3f6d18",
        boxShadow: "0 1px 0 #3f6d18",
      }}
    >
      +
    </span>
  );
}

// نوار پیشرفت
export function ProgressBar({
  value,
  max,
  color = "#7bbf3a",
  height = 7,
}: {
  value: number;
  max: number;
  color?: string;
  height?: number;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div
      className="xp-track w-full rounded-full overflow-hidden"
      style={{ height }}
    >
      <div
        className="h-full rounded-full"
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
