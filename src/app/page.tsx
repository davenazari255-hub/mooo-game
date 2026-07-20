import BottomNav from "@/components/BottomNav";
import FarmScene from "@/components/FarmScene";
import SeedPanel from "@/components/SeedPanel";
import SideButtons from "@/components/SideButtons";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <main className="game-bg mx-auto max-w-md min-h-screen min-h-dvh flex flex-col relative overflow-hidden">
      <TopBar />

      <div className="flex-1 relative flex flex-col min-h-0">
        <div className="flex-1 flex items-center justify-center min-h-0 relative">
          <FarmScene />
          <SideButtons />
        </div>

        <SeedPanel />
      </div>

      <BottomNav />
    </main>
  );
}
