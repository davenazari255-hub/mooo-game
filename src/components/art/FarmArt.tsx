import React from "react";

type P = { size?: number; className?: string };
const OUT = "#3d2a15";

// ───────────────────────── محصولات ─────────────────────────

export function Wheat({ size = 28, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path d="M16 30V13" stroke="#7a5a1e" strokeWidth="2" strokeLinecap="round" />
      {[0, 1, 2, 3].map((i) => {
        const y = 8 + i * 4.2;
        return (
          <g key={i}>
            <path d={`M16 ${y + 2}c-3-1-4.5-3-4.5-5 2 0 4 1 4.5 3z`} fill="#f2c744" stroke={OUT} strokeWidth="0.9" strokeLinejoin="round" />
            <path d={`M16 ${y + 2}c3-1 4.5-3 4.5-5-2 0-4 1-4.5 3z`} fill="#e8b93a" stroke={OUT} strokeWidth="0.9" strokeLinejoin="round" />
          </g>
        );
      })}
      <path d="M16 8c-1-2-1-3.5 0-5 1 1.5 1 3 0 5z" fill="#f2c744" stroke={OUT} strokeWidth="0.9" strokeLinejoin="round" />
    </svg>
  );
}

export function Corn({ size = 28, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path d="M11 15c-4-2-6 1-6 4 3 1 6-1 6-4z" fill="#6ba63a" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
      <path d="M21 15c4-2 6 1 6 4-3 1-6-1-6-4z" fill="#5a9c27" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
      <path d="M16 6c3.2 0 5 2.6 5 7s-1.8 11-5 11-5-6.6-5-11 1.8-7 5-7z" fill="#f2c744" stroke={OUT} strokeWidth="1.1" strokeLinejoin="round" />
      <g fill="#e0a51e">
        <circle cx="13.6" cy="12" r="0.9" /><circle cx="16" cy="11.4" r="0.9" /><circle cx="18.4" cy="12" r="0.9" />
        <circle cx="13.4" cy="15" r="0.9" /><circle cx="16" cy="14.5" r="0.9" /><circle cx="18.6" cy="15" r="0.9" />
        <circle cx="13.8" cy="18" r="0.9" /><circle cx="16" cy="17.6" r="0.9" /><circle cx="18.2" cy="18" r="0.9" />
        <circle cx="14.4" cy="21" r="0.9" /><circle cx="16" cy="20.8" r="0.9" /><circle cx="17.6" cy="21" r="0.9" />
      </g>
    </svg>
  );
}

export function Soy({ size = 28, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path d="M8 20c-2-4 0-8 3-9M24 20c2-4 0-8-3-9" fill="none" stroke="#6ba63a" strokeWidth="1.6" strokeLinecap="round" />
      <g stroke={OUT} strokeWidth="1" strokeLinejoin="round">
        <path d="M10 21c2-.5 4 .5 4.5 2.5-2 .8-4-.3-4.5-2.5z" fill="#8fbf4a" />
        <path d="M22 21c-2-.5-4 .5-4.5 2.5 2 .8 4-.3 4.5-2.5z" fill="#7cae3c" />
        <path d="M13 13c2-.5 4 .5 4.5 2.5-2 .8-4-.3-4.5-2.5z" fill="#8fbf4a" />
      </g>
      <circle cx="12" cy="22.3" r="0.7" fill="#d9e8b0" /><circle cx="20" cy="22.3" r="0.7" fill="#d9e8b0" />
    </svg>
  );
}

export function Milk({ size = 28, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className}>
      <path d="M10 12h12l-1 15a2 2 0 01-2 1.8h-6A2 2 0 019 27z" fill="#f4f7fb" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M9.6 18h12.8l-.3 4H9.9z" fill="#7ec8e8" />
      <rect x="11" y="6" width="10" height="6.4" rx="1" fill="#eef3f8" stroke={OUT} strokeWidth="1.2" />
      <path d="M12.5 8.5h7" stroke="#7ec8e8" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ───────────────────────── حیوانات ─────────────────────────

export function Cow({ size = 44, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" className={className}>
      {/* بدن */}
      <ellipse cx="24" cy="24" rx="15" ry="10" fill="#f4f0ea" stroke={OUT} strokeWidth="1.4" />
      {/* لکه‌ها */}
      <path d="M14 20c3-2 6 0 5 3-3 2-6 0-5-3z" fill="#3d2a15" />
      <path d="M30 26c3-1 5 1 4 3-3 1-5-1-4-3z" fill="#3d2a15" />
      {/* پاها */}
      <rect x="15" y="31" width="3" height="6" rx="1" fill="#e8e2d8" stroke={OUT} strokeWidth="1.1" />
      <rect x="30" y="31" width="3" height="6" rx="1" fill="#e8e2d8" stroke={OUT} strokeWidth="1.1" />
      {/* سر */}
      <ellipse cx="37" cy="18" rx="8" ry="7" fill="#f4f0ea" stroke={OUT} strokeWidth="1.4" />
      <ellipse cx="39" cy="21" rx="5" ry="3.4" fill="#f2b8c4" stroke={OUT} strokeWidth="1.1" />
      {/* گوش‌ها و شاخ */}
      <path d="M31 13c-3-1-4 1-3 3 2 .5 3-1 3-3z" fill="#f4f0ea" stroke={OUT} strokeWidth="1.1" strokeLinejoin="round" />
      <path d="M34 11c-1-2 0-3 1.5-3.5M40 11c1-2 0-3-1.5-3.5" stroke={OUT} strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <circle cx="35" cy="16.5" r="1.1" fill={OUT} />
      <circle cx="40.5" cy="19.5" r="0.7" fill={OUT} /><circle cx="37.5" cy="19.5" r="0.7" fill={OUT} />
    </svg>
  );
}

export function Sheep({ size = 40, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 40" className={className}>
      {/* پشم بدن */}
      <g fill="#f6f2ea" stroke={OUT} strokeWidth="1.3" strokeLinejoin="round">
        <circle cx="18" cy="22" r="7" /><circle cx="26" cy="20" r="7.5" /><circle cx="32" cy="24" r="6" />
        <circle cx="22" cy="27" r="6.5" /><circle cx="29" cy="27" r="6" />
      </g>
      {/* پاها */}
      <rect x="19" y="31" width="2.6" height="6" rx="1" fill="#4a3117" />
      <rect x="29" y="31" width="2.6" height="6" rx="1" fill="#4a3117" />
      {/* سر */}
      <ellipse cx="36" cy="18" rx="6" ry="5.4" fill="#4a3a30" stroke={OUT} strokeWidth="1.3" />
      <path d="M31 13.5c-2-.5-3 .8-2.4 2.4M41 13.5c2-.5 3 .8 2.4 2.4" fill="#f6f2ea" stroke={OUT} strokeWidth="1.1" />
      <circle cx="34" cy="18" r="0.8" fill="#fff" /><circle cx="38.5" cy="18" r="0.8" fill="#fff" />
    </svg>
  );
}

// ───────────────────────── ساختمان‌ها ─────────────────────────

export function Barn({ size = 90, className = "" }: P) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 100 90" className={className}>
      {/* بدنه */}
      <path d="M18 40h64v42H18z" fill="#c53a2a" stroke={OUT} strokeWidth="1.8" />
      {/* سقف */}
      <path d="M12 42L50 16l38 26z" fill="#a52a1e" stroke={OUT} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M20 42L50 22l30 20" fill="#8f2318" opacity="0.5" />
      {/* تزئین سفید */}
      <path d="M50 44v34M32 82V54h36v28" stroke="#f4ede0" strokeWidth="3" fill="none" />
      <path d="M50 54l14 8M50 54l-14 8M50 70l14 8M50 70l-14 8" stroke="#f4ede0" strokeWidth="2.4" />
      {/* در */}
      <rect x="42" y="62" width="16" height="20" fill="#8f2318" stroke={OUT} strokeWidth="1.4" />
      {/* پنجره گرد بالای سقف */}
      <circle cx="50" cy="32" r="4.5" fill="#f2c744" stroke={OUT} strokeWidth="1.4" />
      {/* پرچمک */}
      <path d="M50 16v-6l6 2-6 2" fill="#f2c744" stroke={OUT} strokeWidth="1" strokeLinejoin="round" />
    </svg>
  );
}

export function Silo({ size = 40, className = "" }: P) {
  return (
    <svg width={size} height={size * 1.6} viewBox="0 0 40 64" className={className}>
      <rect x="8" y="16" width="24" height="46" rx="2" fill="#cfd6db" stroke={OUT} strokeWidth="1.6" />
      <path d="M8 16c0-7 24-7 24 0z" fill="#9fb0ba" stroke={OUT} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14 18v44M20 18v44M26 18v44" stroke="#a9b4bb" strokeWidth="1.4" />
    </svg>
  );
}

export function House({ size = 70, className = "" }: P) {
  return (
    <svg width={size} height={size * 0.85} viewBox="0 0 80 68" className={className}>
      <rect x="16" y="34" width="48" height="30" fill="#f0e2c0" stroke={OUT} strokeWidth="1.6" />
      <path d="M10 36L40 14l30 22z" fill="#3f74c4" stroke={OUT} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M18 36L40 20l22 16" fill="#2f5aa0" opacity="0.4" />
      <rect x="34" y="46" width="12" height="18" fill="#8a5a2a" stroke={OUT} strokeWidth="1.4" />
      <rect x="21" y="42" width="9" height="9" fill="#7ec8e8" stroke={OUT} strokeWidth="1.3" />
      <rect x="50" y="42" width="9" height="9" fill="#7ec8e8" stroke={OUT} strokeWidth="1.3" />
      <rect x="52" y="18" width="7" height="12" fill="#c53a2a" stroke={OUT} strokeWidth="1.4" />
    </svg>
  );
}

export function Windmill({ size = 44, className = "" }: P) {
  return (
    <svg width={size} height={size * 1.7} viewBox="0 0 44 74" className={className}>
      <path d="M14 70L18 30h8l4 40z" fill="#d9c39a" stroke={OUT} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M17 46h10M16 58h12" stroke="#b89b6a" strokeWidth="1.4" />
      <g stroke={OUT} strokeWidth="1.4" strokeLinejoin="round">
        <path d="M22 26l2-16 5 2-5 15z" fill="#e8cf98" />
        <path d="M22 26l16 2-2 5-15-5z" fill="#d9c39a" />
        <path d="M22 26l-2 16-5-2 5-15z" fill="#e8cf98" />
        <path d="M22 26l-16-2 2-5 15 5z" fill="#d9c39a" />
      </g>
      <circle cx="22" cy="26" r="2.4" fill="#8a5a2a" stroke={OUT} strokeWidth="1.2" />
    </svg>
  );
}

export function Tree({ size = 40, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className={className}>
      <rect x="17.5" y="24" width="5" height="12" rx="1.5" fill="#8a5a2a" stroke={OUT} strokeWidth="1.3" />
      <circle cx="20" cy="16" r="11" fill="#5a9c3a" stroke={OUT} strokeWidth="1.5" />
      <circle cx="13" cy="19" r="7" fill="#6ba63a" stroke={OUT} strokeWidth="1.3" />
      <circle cx="27" cy="19" r="7" fill="#6ba63a" stroke={OUT} strokeWidth="1.3" />
      <circle cx="16" cy="12" r="3.5" fill="#7cbf4a" opacity="0.8" />
    </svg>
  );
}

export function PineTree({ size = 36, className = "" }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 40" className={className}>
      <rect x="16" y="30" width="4" height="8" rx="1" fill="#8a5a2a" stroke={OUT} strokeWidth="1.2" />
      <path d="M18 4l8 12H10z" fill="#4a8c3a" stroke={OUT} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M18 12l9 12H9z" fill="#5a9c3a" stroke={OUT} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M18 20l10 12H8z" fill="#6ba63a" stroke={OUT} strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}
