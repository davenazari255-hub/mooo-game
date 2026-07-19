"use client";

import TopBar from "@/components/TopBar";
import FarmField from "@/components/FarmField";
import SideDock, { DockItem } from "@/components/SideDock";
import PlantAllButton from "@/components/PlantAllButton";
import SeedShop from "@/components/SeedShop";
import BottomNav from "@/components/BottomNav";

const leftDock: DockItem[] = [
  { key: "shop", label: "Shop", icon: "shop.png", badge: true },
  { key: "upgrades", label: "Upgrades", icon: "upgrades.png", badge: true },
  { key: "seeds", label: "Seeds", icon: "seeds.png" },
  { key: "storage", label: "Storage", icon: "storage.png" },
];

const rightDock: DockItem[] = [
  { key: "daily", label: "Daily", icon: "daily.png" },
  { key: "achievements", label: "Achievements", icon: "achievements.png" },
  { key: "tasks", label: "Tasks", icon: "tasks.png" },
  { key: "settings", label: "Settings", icon: "settings.png" },
];

export default function Home() {
  return (
    <main className="game-screen mx-auto max-w-md min-h-screen min-h-dvh flex flex-col overflow-hidden">
      <TopBar />

      {/* Middle scene: farm field + floating side docks */}
      <div className="relative flex-1 min-h-0">
        <FarmField />
        <SideDock side="left" items={leftDock} />
        <SideDock side="right" items={rightDock} />
      </div>

      <PlantAllButton />
      <SeedShop />
      <BottomNav />
    </main>
  );
}
