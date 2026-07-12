"use client";

import { MapIcon } from "./Icons";
import { House, Tractor, Tree, PineTree, Cow, Sheep, Wheat } from "./art/FarmArt";

export default function FarmScene() {
  return (
    <div className="px-2 mt-2">
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-[#5a3f20]"
        style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
      >
        <div className="relative h-[240px]">
          {/* منظره پس‌زمینه (SVG) */}
          <svg
            viewBox="0 0 360 240"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bfe6f5" />
                <stop offset="1" stopColor="#e6f3da" />
              </linearGradient>
            </defs>
            {/* آسمان */}
            <rect x="0" y="0" width="360" height="118" fill="url(#sky)" />
            {/* ابرها */}
            <g fill="#ffffff" opacity="0.9">
              <ellipse cx="70" cy="30" rx="22" ry="11" />
              <ellipse cx="90" cy="34" rx="16" ry="9" />
              <ellipse cx="270" cy="24" rx="20" ry="10" />
              <ellipse cx="292" cy="28" rx="14" ry="8" />
            </g>
            {/* تپه‌های دور */}
            <path d="M0 118c60-30 120-26 180-6s120 12 180-10v30H0z" fill="#a9d178" />
            <path d="M0 126c80-20 140-6 210 6s110 6 150-10v26H0z" fill="#8fc35f" />
            {/* زمین */}
            <rect x="0" y="112" width="360" height="128" fill="#8ec457" />
            <rect x="0" y="112" width="360" height="128" fill="url(#sky)" opacity="0" />
            {/* رودخانه */}
            <path d="M-10 150C40 142 30 182 70 192S60 244 40 252H-20z" fill="#6cc0e6" stroke="#4fa7d6" strokeWidth="2" />
            <path d="M4 160c18-4 16 16 32 24" stroke="#bfe8f7" strokeWidth="2" fill="none" opacity="0.7" />
            {/* مزرعه شخم‌خورده */}
            <g>
              <path d="M148 152h104l16 40H150z" fill="#c79a54" stroke="#a5793a" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M153 160l100 0M157 170l102 0M161 180l104 0" stroke="#a5793a" strokeWidth="1.2" opacity="0.6" />
              <g fill="#7cae3c">
                {Array.from({ length: 5 }).map((_, r) =>
                  Array.from({ length: 11 }).map((_, c) => (
                    <circle key={`${r}-${c}`} cx={160 + c * 9} cy={160 + r * 6} r="2" />
                  ))
                )}
              </g>
            </g>
            {/* مسیر خاکی */}
            <path d="M110 240c8-36 34-52 34-84" stroke="#d3b072" strokeWidth="11" fill="none" opacity="0.7" strokeLinecap="round" />
          </svg>

          {/* عناصر رنگی روی صحنه */}
          <div className="absolute" style={{ top: 4, right: 8 }}><Tree size={52} /></div>
          <div className="absolute" style={{ top: 22, right: 52 }}><PineTree size={40} /></div>
          <div className="absolute" style={{ top: 8, left: 84 }}><Tree size={40} /></div>

          {/* خانه مزرعه */}
          <div className="absolute" style={{ top: 40, left: 14 }}><House size={86} /></div>

          {/* تراکتور کنار مزرعه */}
          <div className="absolute" style={{ top: 96, left: "50%", transform: "translateX(-58%)" }}>
            <Tractor size={66} />
          </div>

          {/* گندم کنار مزرعه */}
          <div className="absolute" style={{ top: 150, right: 96 }}><Wheat size={30} /></div>

          {/* حیوانات */}
          <div className="absolute" style={{ bottom: 30, left: 40 }}><Cow size={56} /></div>
          <div className="absolute" style={{ bottom: 8, left: 100 }}><Cow size={46} /></div>
          <div className="absolute" style={{ bottom: 26, right: 52 }}><Sheep size={46} /></div>
          <div className="absolute" style={{ bottom: 6, right: 100 }}><Sheep size={38} /></div>

          {/* تابلوی زمین شما */}
          <div className="absolute" style={{ bottom: 8, left: 8 }}>
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
              bottom: 10, right: 10, width: 48, height: 48, borderRadius: 9999,
              background: "linear-gradient(180deg,#ffd94f,#e6a11f)",
              border: "3px solid #fff3cf", boxShadow: "0 3px 0 #b47b12",
            }}
          >
            <MapIcon size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}
