"use client";

import { useState } from "react";

/**
 * AssetSlot — a sized placeholder that stands in for a real art asset.
 *
 * The final illustrated art (coins, fruits, icons, plant sprites …) is
 * supplied by the user. Drop a file at `public/assets/<src>` and it appears
 * automatically; until then a neat dashed placeholder with a generic
 * "image" glyph is shown.
 *
 * The image is loaded behind the placeholder and only revealed once it
 * successfully loads (onLoad). A missing/404 file simply never loads, so the
 * browser's broken-image icon is never shown.
 */
export default function AssetSlot({
  src,
  size,
  width,
  height,
  rounded = 10,
  onLight = false,
  className = "",
  label,
}: {
  /** file name inside /public/assets, e.g. "coin.png" */
  src?: string;
  size?: number;
  width?: number;
  height?: number;
  rounded?: number;
  onLight?: boolean;
  className?: string;
  /** accessible name for the asset (used as alt once loaded) */
  label?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const w = width ?? size ?? 24;
  const h = height ?? size ?? 24;

  return (
    <span
      className={`asset-slot ${onLight ? "on-light" : ""} ${className}`}
      style={{ width: w, height: h, borderRadius: rounded }}
    >
      {src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/assets/${src}`}
          alt={loaded ? label ?? "" : ""}
          draggable={false}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
          style={{ display: loaded ? "block" : "none" }}
        />
      )}
      {!loaded && <PlaceholderGlyph boxW={w} boxH={h} />}
    </span>
  );
}

/** Generic "image goes here" glyph, scaled to the slot size. */
function PlaceholderGlyph({ boxW, boxH }: { boxW: number; boxH: number }) {
  const g = Math.max(10, Math.round(Math.min(boxW, boxH) * 0.55));
  return (
    <svg width={g} height={g} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="8.5" cy="9" r="1.6" fill="currentColor" />
      <path
        d="M4 18l5-5 3 3 4-4 4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
