type TileState = "empty" | "tilled" | "planted";

type FarmTile = {
  state: TileState;
  stage?: number;
};

const COLS = 5;
const ROWS = 6;

const TILE_W = 64;
const TILE_H = 32;
const GAP = 2;
const SOIL_W = TILE_W - 4;
const SOIL_H = TILE_H - 2;

function makeGrid(): FarmTile[][] {
  const grid: FarmTile[][] = [];
  for (let r = 0; r < ROWS; r++) {
    const row: FarmTile[] = [];
    for (let c = 0; c < COLS; c++) {
      row.push({ state: "empty" });
    }
    grid.push(row);
  }
  return grid;
}

function FarmTileDiamond({
  row,
  col,
  state,
}: {
  row: number;
  col: number;
  state: TileState;
}) {
  const x = (col - (COLS - 1) / 2) * (TILE_W + GAP);
  const yIso = (row - (ROWS - 1) / 2) * ((TILE_H + GAP) / 2);
  const xIso = -((col - (COLS - 1) / 2) * ((TILE_W + GAP) / 2));
  const top = yIso - xIso / 2;
  const left = x / 2 + xIso / 2;

  return (
    <div
      className="absolute"
      style={{
        top: `calc(50% + ${top}px)`,
        left: `calc(50% + ${left}px)`,
        width: TILE_W,
        height: TILE_H,
        transform: "translate(-50%, -50%)",
      }}
    >

      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: "rotateX(60deg) rotateZ(-45deg)",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            width: SOIL_W,
            height: SOIL_H,
            margin: "auto",
            background:
              state === "empty"
                ? "linear-gradient(135deg, #6b4e2d 0%, #4d3520 100%)"
                : state === "tilled"
                ? "linear-gradient(135deg, #8a5a2e 0%, #5e3c1c 100%)"
                : "linear-gradient(135deg, #7a5a3a 0%, #5e4022 100%)",
            border: "1.5px solid #3a2510",
            boxShadow:
              "inset 0 1px 2px rgba(255,255,255,0.15), 0 1px 0 rgba(0,0,0,0.4)",
            backgroundImage:
              state === "empty"
                ? `repeating-linear-gradient(45deg, #3a2510 0 2px, transparent 2px 8px)`
                : undefined,
          }}
        />
      </div>
    </div>
  );
}

function FencePost({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: "translate(-50%, -100%)",
      }}
    >
      <div
        style={{
          width: 6,
          height: 14,
          background: "linear-gradient(180deg, #b07e45 0%, #6e4a24 100%)",
          border: "1px solid #3f2912",
          borderRadius: 2,
          boxShadow: "0 2px 2px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}

function FenceRail({
  x,
  y,
  w,
  rot = 0,
}: {
  x: number;
  y: number;
  w: number;
  rot?: number;
}) {
  return (
    <div
      className="absolute"
      style={{
        top: `calc(50% + ${y}px)`,
        left: `calc(50% + ${x}px)`,
        transform: `translate(-50%, -100%) rotate(${rot}deg)`,
        transformOrigin: "center bottom",
      }}
    >
      <div
        style={{
          width: w,
          height: 4,
          background: "linear-gradient(180deg, #b07e45 0%, #6e4a24 100%)",
          border: "1px solid #3f2912",
          borderRadius: 2,
          boxShadow: "0 1px 1px rgba(0,0,0,0.4)",
        }}
      />
    </div>
  );
}

export default function FarmScene() {
  const grid = makeGrid();

  const halfW = (COLS * (TILE_W + GAP)) / 2;
  const halfH = ((ROWS + COLS) * (TILE_H + GAP)) / 4;

  return (
    <div className="relative mx-auto my-2 px-2">
      <div
        className="relative"
        style={{
          width: halfW * 2 + 60,
          height: halfH * 2 + 80,
          margin: "0 auto",
        }}
      >

        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: halfW * 1.6,
            height: halfH * 1.4,
            transform: "translate(-50%, -45%)",
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />

        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            width: halfW * 1.8,
            height: halfH * 1.6,
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(ellipse at center, #9bd36a 0%, #7fb04a 60%, #5e8e30 100%)",
            borderRadius: "50%",
            boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
          }}
        />

        {grid.map((row, ri) =>
          row.map((tile, ci) => (
            <FarmTileDiamond
              key={`${ri}-${ci}`}
              row={ri}
              col={ci}
              state={tile.state}
            />
          ))
        )}

        <FencePost x={0} y={-halfH - 4} />
        <FencePost x={-halfW - 6} y={-halfH + halfW / 2 - 4} />
        <FencePost x={halfW + 6} y={-halfH + halfW / 2 - 4} />

        <FencePost x={0} y={halfH - 4} />
        <FencePost x={-halfW - 6} y={halfH - halfW / 2 - 4} />
        <FencePost x={halfW + 6} y={halfH - halfW / 2 - 4} />

        <FenceRail
          x={-halfW / 2 - 3}
          y={-halfH - 4}
          w={halfW}
          rot={-26.57}
        />
        <FenceRail
          x={halfW / 2 + 3}
          y={-halfH - 4}
          w={halfW}
          rot={26.57}
        />
        <FenceRail
          x={-halfW / 2 - 3}
          y={halfH - 4}
          w={halfW}
          rot={26.57}
        />
        <FenceRail
          x={halfW / 2 + 3}
          y={halfH - 4}
          w={halfW}
          rot={-26.57}
        />
      </div>
    </div>
  );
}
