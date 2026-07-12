import React from "react";

// کامپوننت پایه: SVG رنگی را از public/art به‌صورت <img> نمایش می‌دهد.
// استفاده از <img> از تداخل idهای gradient بین چند SVG جلوگیری می‌کند.
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
  style?: React.CSSProperties;
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
