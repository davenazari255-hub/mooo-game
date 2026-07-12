"use client";

import { useTelegram } from "@/lib/telegram";
import TopBar from "@/components/TopBar";
import InfoCards from "@/components/InfoCards";
import FarmScene from "@/components/FarmScene";
import CropPanel from "@/components/panels/CropPanel";
import LivestockPanel from "@/components/panels/LivestockPanel";
import OrdersPanel from "@/components/panels/OrdersPanel";
import MarketPanel from "@/components/panels/MarketPanel";
import UpgradePanel from "@/components/panels/UpgradePanel";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  const { user } = useTelegram();
  const playerName = user?.first_name
    ? user.first_name
    : "کشاورز حرفه‌ای";

  return (
    <main className="app-bg mx-auto max-w-md min-h-screen flex flex-col">
      <TopBar playerName={playerName} />

      <div className="flex-1 overflow-y-auto no-scrollbar pb-2">
        <div className="mt-2">
          <InfoCards />
        </div>

        <FarmScene />

        <div className="px-2 mt-2 grid grid-cols-1 gap-2">
          <CropPanel />

          <div className="grid grid-cols-2 gap-2">
            <LivestockPanel />
            <div className="flex flex-col gap-2">
              <OrdersPanel />
              <UpgradePanel />
            </div>
          </div>

          <MarketPanel />
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
