import type { CSSProperties } from "react";

// Render public SVG artwork as images to avoid gradient ID collisions between files.
export function Art({
  name,
  size = 24,
  className = "",
  alt = "",
  style,
}: {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
  style?: CSSProperties;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/art/${name}.svg`}
      width={size}
      height={size}
      alt={alt}
      draggable={false}
      className={`inline-block shrink-0 select-none ${className}`}
      style={{ objectFit: "contain", ...style }}
    />
  );
}
