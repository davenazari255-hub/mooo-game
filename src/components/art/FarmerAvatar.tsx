import React from "react";
import { Art } from "../Art";

// آواتار کشاورز روی پس‌زمینه آبی
export function FarmerAvatar({ size = 36 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-full overflow-hidden"
      style={{
        width: size,
        height: size,
        background: "radial-gradient(circle at 40% 30%, #a9e0f5, #6fb8dc)",
      }}
    >
      <Art name="farmer" size={size * 0.82} alt="کشاورز" />
    </div>
  );
}
