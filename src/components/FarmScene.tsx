"use client";

/**
 * FarmScene - زمین کشاورزی با حصار چوبی
 * شبکهٔ ۵×۶ از زمین‌های خاکی گِرد، با حصار مستطیلی چوبی دور آن.
 * برخی زمین‌ها محصول کاشته‌شده دارند و اطراف زمین حیوانات می‌چرند.
 */

import { Art } from "./Art";

const COLS = 5;
const ROWS = 6;

// ابعاد هر زمین خاکی و فاصله بین آن‌ها
const TILE_W = 46;
const TILE_H = 42;
const GAP = 8;

// ابعاد شبکه و حصار
const GRID_W = COLS * TILE_W + (COLS - 1) * GAP;
const GRID_H = ROWS * TILE_H + (ROWS - 1) * GAP;
const FENCE_PAD = 14;
const FENCE_W = GRID_W + FENCE_PAD * 2;
const FENCE_H = GRID_H + FENCE_PAD * 2;

// ابعاد کل صحنه (فضای اضافه برای حیوانات و درختان اطراف)
const SCENE_W = FENCE_W + 70;
const SCENE_H = FENCE_H + 120;

type FarmTile = {
  planted: boolean;
  crop?: string;
  cropSize?: number;
};

// محصولاتِ کاشته‌شده روی زمین‌ها؛ کلید = "row-col"
// ردیف‌های بالا مراحل رشد را نشان می‌دهند: نهال → سبزه → محصول رسیده → درخت میوه
const PLANTED: Record<string, { crop: string; cropSize?: number }> = {
  "0-0": { crop: "sprout", cropSize: 24 },
  "0-1": { crop: "herb", cropSize: 28 },
  "0-2": { crop: "wheat", cropSize: 32 },
  "0-3": { crop: "corn", cropSize: 34 },
  "0-4": { crop: "tree", cropSize: 42 },
  "1-0": { crop: "carrot", cropSize: 28 },
  "1-1": { crop: "tomato", cropSize: 30 },
  "1-3": { crop: "strawberry", cropSize: 28 },
  "1-4": { crop: "sprout", cropSize: 24 },
  "2-2": { crop: "herb", cropSize: 28 },
};

function makeGrid(): FarmTile[][] {
  const grid: FarmTile[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: FarmTile[] = [];
    for (let c = 0; c < COLS; c++) {
      const planted = PLANTED[`${r}-${c}`];
      row.push(
        planted
          ? { planted: true, crop: planted.crop, cropSize: planted.cropSize }
          : { planted: false }
      );
    }
    grid.push(row);
  }
  return grid;
}

/** یک زمین خاکی گِرد؛ اگر محصول داشته باشد آن را عمود روی خاک نشان می‌دهد */
function SoilTile({ tile }: { tile: FarmTile }) {
  return (
    <div
      className="relative"
      style={{
        width: TILE_W,
        height: TILE_H,
        borderRadius: 10,
        background: tile.planted
          ? "linear-gradient(160deg, #6e4a28 0%, #4f3319 100%)"
          : "linear-gradient(160deg, #855b32 0%, #5a3c20 100%)",
        border: "2px solid #402710",
        boxShadow:
          "inset 0 3px 5px rgba(0,0,0,0.35), inset 0 -2px 2px rgba(255,255,255,0.08), 0 2px 0 rgba(0,0,0,0.35)",
      }}
    >
      {/* شیارهای خاک */}
      <div
        style={{
          position: "absolute",
          inset: 4,
          borderRadius: 7,
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(0,0,0,0.18) 0 2px, transparent 2px 9px)",
        }}
      />
      {/* محصول */}
      {tile.crop && (
        <div
          className="absolute left-1/2"
          style={{
            bottom: "22%",
            transform: "translateX(-50%)",
            filter: "drop-shadow(0 2px 1px rgba(0,0,0,0.3))",
          }}
        >
          <Art name={tile.crop} size={tile.cropSize ?? 26} />
        </div>
      )}
    </div>
  );
}

/** پست چوبی حصار */
function FencePost({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        width: 9,
        height: 20,
        borderRadius: 3,
        background: "linear-gradient(180deg, #c58f52 0%, #6e4a24 100%)",
        border: "1.5px solid #3f2912",
        boxShadow: "0 2px 2px rgba(0,0,0,0.4)",
        zIndex: 6,
      }}
    />
  );
}

/** ریلِ افقی یا عمودی حصار */
function FenceRail({
  x,
  y,
  len,
  vertical = false,
}: {
  x: number;
  y: number;
  len: number;
  vertical?: boolean;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: "translate(-50%, -50%)",
        width: vertical ? 6 : len,
        height: vertical ? len : 6,
        borderRadius: 3,
        background: vertical
          ? "linear-gradient(90deg, #b07e45 0%, #7a5230 100%)"
          : "linear-gradient(180deg, #c08a4e 0%, #7a5230 100%)",
        border: "1px solid #3f2912",
        boxShadow: "0 1px 1px rgba(0,0,0,0.35)",
        zIndex: 5,
      }}
    />
  );
}

/** حیوان یا ساکن مزرعه که روی چمن اطراف زمین است */
function Animal({
  art,
  x,
  y,
  size,
  flip = false,
}: {
  art: string;
  x: number;
  y: number;
  size: number;
  flip?: boolean;
}) {
  return (
    <div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: `translate(-50%, -100%) ${flip ? "scaleX(-1)" : ""}`,
        zIndex: 8,
        filter: "drop-shadow(0 3px 2px rgba(0,0,0,0.3))",
      }}
    >
      <Art name={art} size={size} />
    </div>
  );
}

export default function FarmScene() {
  const grid = makeGrid();

  // موقعیت پست‌های حصار: چهار گوشه + میانهٔ هر ضلع
  const hx = FENCE_W / 2;
  const hy = FENCE_H / 2;
  const posts: { x: number; y: number }[] = [
    { x: -hx, y: -hy },
    { x: 0, y: -hy },
    { x: hx, y: -hy },
    { x: -hx, y: 0 },
    { x: hx, y: 0 },
    { x: -hx, y: hy },
    { x: 0, y: hy },
    { x: hx, y: hy },
  ];

  return (
    <div className="relative mx-auto my-1" style={{ width: SCENE_W, height: SCENE_H }}>
      {/* سایهٔ نرم زیر زمین */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: FENCE_W + 40,
          height: FENCE_H + 30,
          transform: "translate(-50%, -46%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.22) 0%, transparent 70%)",
          filter: "blur(6px)",
        }}
      />

      {/* پد چمنیِ زیر زمین */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: FENCE_W + 44,
          height: FENCE_H + 34,
          transform: "translate(-50%, -50%)",
          borderRadius: 28,
          background:
            "radial-gradient(ellipse at 50% 40%, #9bd36a 0%, #7fb04a 55%, #629233 100%)",
          boxShadow: "inset 0 0 22px rgba(0,0,0,0.18)",
        }}
      />

      {/* شبکهٔ زمین‌های خاکی */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${TILE_W}px)`,
          gridAutoRows: `${TILE_H}px`,
          gap: GAP,
          zIndex: 2,
        }}
      >
        {grid.map((row, ri) =>
          row.map((tile, ci) => <SoilTile key={`${ri}-${ci}`} tile={tile} />)
        )}
      </div>

      {/* ریل‌های حصار: بالا، پایین، چپ، راست */}
      <FenceRail x={0} y={-hy} len={FENCE_W} />
      <FenceRail x={0} y={hy} len={FENCE_W} />
      <FenceRail x={-hx} y={0} len={FENCE_H} vertical />
      <FenceRail x={hx} y={0} len={FENCE_H} vertical />

      {/* پست‌های حصار */}
      {posts.map((p, i) => (
        <FencePost key={i} x={p.x} y={p.y} />
      ))}

      {/* ===== ساکنان مزرعه: روی چمن اطراف زمین می‌چرند ===== */}
      {/* گاو - نماد بازی (Mooo) - جلوی زمین */}
      <Animal art="cow" x={-52} y={hy + 46} size={50} />
      {/* گوسفند - جلوی زمین سمت راست */}
      <Animal art="sheep" x={52} y={hy + 52} size={42} flip />
      {/* خوک - جلوی زمین سمت راست */}
      <Animal art="pig" x={112} y={hy + 34} size={34} flip />
      {/* مرغ - لبهٔ راست */}
      <Animal art="chicken" x={hx + 22} y={-hy + 40} size={26} flip />
      {/* کشاورز - لبهٔ چپ، مشغول رسیدگی */}
      <Animal art="farmer" x={-hx - 22} y={-hy + 60} size={44} />
    </div>
  );
}
