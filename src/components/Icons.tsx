import React from "react";
import { Art } from "./Art";

type IconProps = { size?: number; className?: string };

// ───────────────────────── منابع ─────────────────────────
export const CoinIcon = ({ size = 20 }: IconProps) => <Art name="coin" size={size} alt="سکه" />;
export const GemIcon = ({ size = 20 }: IconProps) => <Art name="gem" size={size} alt="جم" />;
export const EnergyIcon = ({ size = 20 }: IconProps) => <Art name="energy" size={size} alt="انرژی" />;

// ───────────────────────── کارت‌ها ─────────────────────────
export const TrophyIcon = ({ size = 22 }: IconProps) => <Art name="trophy" size={size} alt="جام" />;
export const GiftIcon = ({ size = 22 }: IconProps) => <Art name="gift" size={size} alt="هدیه" />;
export const ChestIcon = ({ size = 22 }: IconProps) => <Art name="chest" size={size} alt="صندوق" />;

// ───────────────────────── پنل / اکشن ─────────────────────────
export const ClipboardIcon = ({ size = 18 }: IconProps) => <Art name="clipboard" size={size} alt="سفارشات" />;
export const CartIcon = ({ size = 18 }: IconProps) => <Art name="cart" size={size} alt="بازار" />;
export const UpgradeIcon = ({ size = 18 }: IconProps) => <Art name="upgrade" size={size} alt="ارتقا" />;
export const MapIcon = ({ size = 22 }: IconProps) => <Art name="map" size={size} alt="نقشه" />;
export const LockIcon = ({ size = 14 }: IconProps) => <Art name="lock" size={size} alt="قفل" />;

// ───────────────────────── نویگیشن پایین ─────────────────────────
export const NavFarm = ({ size = 22 }: IconProps) => <Art name="tractor" size={size} alt="مزرعه" />;
export const NavBuild = ({ size = 22 }: IconProps) => <Art name="build" size={size} alt="سازه‌ها" />;
export const NavMissions = ({ size = 22 }: IconProps) => <Art name="scroll" size={size} alt="ماموریت‌ها" />;
export const NavFriends = ({ size = 22 }: IconProps) => <Art name="friends" size={size} alt="دوستان" />;
export const NavWallet = ({ size = 22 }: IconProps) => <Art name="wallet" size={size} alt="کیف پول" />;

// ───────────────────────── نشان + سبز ─────────────────────────
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

// ───────────────────────── منو (خطوط) ─────────────────────────
export function MenuIcon({ size = 20 }: IconProps) {
  return (
    <div className="flex flex-col gap-1" style={{ width: size }}>
      <span className="block h-0.5 bg-[#f6c445] rounded" />
      <span className="block h-0.5 bg-[#f6c445] rounded" />
      <span className="block h-0.5 bg-[#f6c445] rounded" />
    </div>
  );
}

// ───────────────────────── ساعت (اینلاین) ─────────────────────────
export function ClockIcon({ size = 11 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#8a6a3a" strokeWidth="2.4" />
      <path d="M12 7v5l3.5 2" stroke="#8a6a3a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
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
