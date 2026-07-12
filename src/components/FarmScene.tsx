"use client";

export default function FarmScene() {
  return (
    <div className="px-2 mt-2">
      <div
        className="relative rounded-2xl overflow-hidden border-2 border-[#5a3f20]"
        style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.35)" }}
      >
        {/* آسمان و چمن */}
        <div className="scene-sky relative h-[230px]">
          {/* تپه‌های پس‌زمینه */}
          <div
            className="absolute inset-x-0 top-0 h-24"
            style={{
              background:
                "radial-gradient(60% 100% at 20% 0%, #cdeecb 0%, transparent 60%), radial-gradient(60% 100% at 85% 5%, #bfe6b0 0%, transparent 55%)",
            }}
          />
          {/* رودخانه */}
          <div
            className="absolute left-0 top-8 w-16 h-[190px] opacity-90"
            style={{
              background: "linear-gradient(120deg,#7ec8e8,#4fa7d6)",
              clipPath: "polygon(0 0, 60% 0, 100% 100%, 40% 100%)",
              filter: "blur(0.3px)",
            }}
          />

          {/* درخت‌ها */}
          <span className="absolute top-3 right-4 text-2xl">🌳</span>
          <span className="absolute top-5 right-16 text-xl">🌲</span>
          <span className="absolute top-2 left-24 text-xl">🌳</span>

          {/* خانه آبی */}
          <span className="absolute top-16 left-16 text-4xl drop-shadow-md">
            🏠
          </span>
          {/* انبار قرمز (barn) */}
          <span className="absolute top-10 left-1/2 -translate-x-1/2 text-5xl drop-shadow-lg">
            🏚️
          </span>
          {/* آسیاب بادی */}
          <span className="absolute top-6 right-24 text-3xl">🌀</span>

          {/* مزرعه ذرت/گندم */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-0.5 text-2xl">
            🌽🌽🌽🌾🌾
          </div>

          {/* حیوانات */}
          <span className="absolute bottom-6 left-20 text-3xl">🐄</span>
          <span className="absolute bottom-4 left-32 text-2xl">🐄</span>
          <span className="absolute bottom-7 right-16 text-2xl">🐑</span>
          <span className="absolute bottom-3 right-28 text-2xl">🐑</span>

          {/* حصار */}
          <div className="absolute bottom-2 right-10 text-lg tracking-tighter opacity-80">
            ▮▮▮▮▮
          </div>

          {/* تابلوی زمین شما */}
          <div className="absolute bottom-3 left-3">
            <div
              className="px-2 py-1 rounded-md text-center leading-tight"
              style={{
                background: "linear-gradient(180deg,#c9974f,#9c6f2f)",
                border: "2px solid #6e491f",
                boxShadow: "0 2px 0 rgba(0,0,0,0.3)",
              }}
            >
              <div className="text-[9px] font-black text-[#3a2410]">زمین شما</div>
              <div className="text-[8px] font-bold text-[#5a3a15]">قطعه ۱</div>
            </div>
          </div>

          {/* دکمه نقشه */}
          <button
            aria-label="نقشه"
            className="absolute bottom-3 right-3 w-12 h-12 rounded-full flex items-center justify-center text-xl"
            style={{
              background: "linear-gradient(180deg,#ffd94f,#e6a11f)",
              border: "3px solid #fff3cf",
              boxShadow: "0 3px 0 #b47b12",
            }}
          >
            🗺️
          </button>
        </div>
      </div>
    </div>
  );
}
