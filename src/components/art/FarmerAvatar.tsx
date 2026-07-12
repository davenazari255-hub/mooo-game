import React from "react";

const OUT = "#3d2a15";

// آواتار کشاورز
export function FarmerAvatar({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" className="shrink-0">
      <circle cx="20" cy="20" r="19" fill="#8fd0ee" />
      <circle cx="20" cy="20" r="19" fill="none" stroke="#cfeaf7" strokeWidth="1" />
      {/* شانه‌ها / پیراهن */}
      <path d="M6 40c0-7 6-11 14-11s14 4 14 11z" fill="#4a8c3a" stroke={OUT} strokeWidth="1.2" />
      <path d="M15 30l5 5 5-5" fill="#3f7a30" stroke={OUT} strokeWidth="1.1" strokeLinejoin="round" />
      {/* صورت */}
      <circle cx="20" cy="20" r="8.5" fill="#f2c79a" stroke={OUT} strokeWidth="1.2" />
      {/* چشم‌ها و لبخند */}
      <circle cx="17" cy="20" r="1.1" fill={OUT} />
      <circle cx="23" cy="20" r="1.1" fill={OUT} />
      <path d="M17.5 23.5c1.5 1.4 3.5 1.4 5 0" fill="none" stroke={OUT} strokeWidth="1.2" strokeLinecap="round" />
      {/* کلاه حصیری */}
      <path d="M8 15c2-6 20-6 24 0z" fill="#e6b64a" stroke={OUT} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M13 14c1-4 13-4 14 0z" fill="#f2c744" stroke={OUT} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11 14.5h18" stroke="#b8892a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
