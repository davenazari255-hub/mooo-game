"use client";

import TopBar from "@/components/TopBar";
import FarmScene from "@/components/FarmScene";
import SideButtons from "@/components/SideButtons";
import SeedPanel from "@/components/SeedPanel";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="game-bg mx-auto max-w-md min-h-screen min-h-dvh flex flex-col relative overflow-hidden">
      {/* ===== Header ===== */}
      <TopBar />

      {/* ===== Body - شامل صحنه مزرعه + دکمه‌های کناری ===== */}
      <div className="flex-1 relative flex flex-col min-h-0">
        {/* صحنه مزرعه - 5x6 ایزومتریک */}
        <div className="flex-1 flex items-center justify-center min-h-0 relative">
          <FarmScene />
          {/* دکمه‌های شناور کناری */}
          <SideButtons />
        </div>

        {/* پنل پایین - بذرها */}
        <SeedPanel />
      </div>

      {/* ===== Bottom Navigation ===== */}
      <BottomNav />
    </main>
  );
}
