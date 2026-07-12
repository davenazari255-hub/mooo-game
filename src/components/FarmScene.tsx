"use client";

import { MapIcon } from "./Icons";
import {
  Barn,
  Silo,
  House,
  Windmill,
  Tree,
  PineTree,
  Cow,
  Sheep,
} from "./art/FarmArt";

export default function FarmScene() {
  return (
    <div className="px-2 mt-2">
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-[#5a3f20]"
        style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
      >
        <div className="relative h-[240px]">
          {/* آسمان و زمین به‌صورت SVG پس‌زمینه */}
          <svg
            viewBox="0 0 360 240"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bfe6f5" />
                <stop offset="1" stopColor="#e3f2d8" />
              </linearGradient>
            </defs>
            {/* آسمان */}
            <rect x="0" y="0" width="360" height="120" fill="url(#sky)" />
            {/* تپه‌های دور */}
            <path d="M0 120c60-34 120-30 180-8s120 14 180-10v40H0z" fill="#a9d178" />
            <path d="M0 128c80-22 140-8 210 6s110 6 150-12v30H0z" fill="#8fc35f" />
            {/* زمین سبز */}
            <rect x="0" y="112" width="360" height="128" fill="#8ec457" />
            {/* رودخانه */}
            <path
              d="M-10 150C40 140 30 180 70 190S60 240 40 250H-20z"
              fill="#6cc0e6"
              stroke="#4fa7d6"
              strokeWidth="2"
            />
            <path d="M2 158c20-4 18 16 34 24" stroke="#bfe8f7" strokeWidth="2" fill="none" opacity="0.7" />
            {/* مزارع شخم‌خورده */}
            <g stroke="#7a5a2e" strokeWidth="1">
              <path d="M150 150h96l14 34h-96z" fill="#c79a54" />
              <path d="M154 156l92 0M158 164l92 0M162 172l92 0M166 180l92 0" opacity="0.5" />
            </g>
            {/* ردیف محصولات روی مزرعه */}
            <g fill="#e8b93a" stroke="#b8892a" strokeWidth="0.6">
              {Array.from({ length: 6 }).map((_, r) =>
                Array.from({ length: 10 }).map((_, c) => (
                  <circle key={`${r}-${c}`} cx={162 + c * 9} cy={158 + r * 4.4} r="1.7" />
                ))
              )}
            </g>
            {/* مسیر خاکی */}
            <path d="M120 240c10-40 40-60 40-90 0-16-8-24-8-38" stroke="#c9a25a" strokeWidth="10" fill="none" opacity="0.6" strokeLinecap="round" />
          </svg>

          {/* عناصر روی صحنه (DOM overlay برای کنترل دقیق موقعیت) */}
          {/* درخت‌ها */}
          <div className="absolute" style={{ top: 6, right: 12 }}>
            <Tree size={44} />
          </div>
          <div className="absolute" style={{ top: 18, right: 54 }}>
            <PineTree size={34} />
          </div>
          <div className="absolute" style={{ top: 10, left: 92 }}>
            <Tree size={34} />
          </div>

          {/* آسیاب بادی */}
          <div className="absolute" style={{ top: 30, right: 92 }}>
            <Windmill size={40} />
          </div>

          {/* خانه آبی */}
          <div className="absolute" style={{ top: 58, left: 20 }}>
            <House size={72} />
          </div>

          {/* انبار + سیلو */}
          <div className="absolute flex items-end" style={{ top: 44, left: "50%", transform: "translateX(-50%)" }}>
            <div style={{ marginRight: -6, marginBottom: 6 }}>
              <Silo size={30} />
            </div>
            <Barn size={104} />
          </div>

          {/* حیوانات */}
          <div className="absolute" style={{ bottom: 34, left: 46 }}>
            <Cow size={48} />
          </div>
          <div className="absolute" style={{ bottom: 14, left: 96 }}>
            <Cow size={40} />
          </div>
          <div className="absolute" style={{ bottom: 30, right: 60 }}>
            <Sheep size={40} />
          </div>
          <div className="absolute" style={{ bottom: 10, right: 104 }}>
            <Sheep size={34} />
          </div>

          {/* حصار */}
          <svg className="absolute" style={{ bottom: 6, right: 40 }} width="90" height="20" viewBox="0 0 90 20">
            <g stroke="#c9a25a" strokeWidth="2.4" fill="#e0c184">
              {[0, 18, 36, 54, 72].map((x) => (
                <rect key={x} x={x} y="4" width="5" height="14" rx="1" />
              ))}
              <line x1="0" y1="9" x2="80" y2="9" />
              <line x1="0" y1="14" x2="80" y2="14" />
            </g>
          </svg>

          {/* تابلوی زمین شما */}
          <div className="absolute" style={{ bottom: 8, left: 10 }}>
            <div className="relative flex flex-col items-center">
              <div
                className="px-2.5 py-1 rounded-md text-center leading-tight"
                style={{
                  background: "linear-gradient(180deg,#d3a55c,#a5762f)",
                  border: "2px solid #6e491f",
                  boxShadow: "0 2px 0 rgba(0,0,0,0.3)",
                }}
              >
                <div className="text-[9px] font-black text-[#3a2410]">زمین شما</div>
                <div className="text-[8px] font-bold text-[#5a3a15]">قطعه ۱</div>
              </div>
              <div className="w-1.5 h-3 bg-[#7a5423]" />
            </div>
          </div>

          {/* دکمه نقشه */}
          <button
            aria-label="نقشه"
            className="absolute flex items-center justify-center"
            style={{
              bottom: 10,
              right: 10,
              width: 48,
              height: 48,
              borderRadius: 9999,
              background: "linear-gradient(180deg,#ffd94f,#e6a11f)",
              border: "3px solid #fff3cf",
              boxShadow: "0 3px 0 #b47b12",
            }}
          >
            <MapIcon size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
