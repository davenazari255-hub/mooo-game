"use client";

/**
 * SceneDecor - لایهٔ دکور محیطی چمنزار
 * درخت‌ها، بوته‌ها، صخره‌ها و گل‌ها را دور تا دور زمین می‌چیند
 * تا حاشیهٔ سبز مزرعه پر و زنده به نظر برسد (مطابق طرح مرجع).
 *
 * این لایه فقط تزئینی است: پشت همهٔ عناصر تعاملی قرار می‌گیرد و
 * کلیک‌ها را نمی‌گیرد (pointer-events: none).
 * موقعیت‌ها ثابت‌اند تا رندر سمت سرور و کلاینت یکسان بماند.
 */

import { Art } from "./Art";

type Decor = {
  art: string;
  left: number; // درصد افقی
  top: number; // درصد عمودی
  size: number; // پیکسل
  z?: number;
  flip?: boolean;
  opacity?: number;
};

// چیدمان قاب‌بندی: بوته‌ها و درخت‌ها روی لبه‌ها، مرکز خالی برای زمین
const items: Decor[] = [
  // ── لبهٔ چپ (از بالا به پایین) ──
  { art: "tree", left: 4, top: 12, size: 52 },
  { art: "pine", left: 2, top: 26, size: 46 },
  { art: "tree", left: 6, top: 40, size: 46 },
  { art: "tree", left: 3, top: 55, size: 54 },
  { art: "pine", left: 5, top: 70, size: 44 },
  { art: "tree", left: 2, top: 84, size: 50 },

  // ── لبهٔ راست (از بالا به پایین) ──
  { art: "tree", left: 90, top: 10, size: 52, flip: true },
  { art: "tree", left: 93, top: 24, size: 46, flip: true },
  { art: "pine", left: 91, top: 39, size: 48 },
  { art: "tree", left: 94, top: 54, size: 50, flip: true },
  { art: "tree", left: 90, top: 69, size: 46, flip: true },
  { art: "pine", left: 93, top: 83, size: 44 },

  // ── لبهٔ بالا (زیر نوار HUD تا دیده شوند) ──
  { art: "tree", left: 16, top: 17, size: 44 },
  { art: "barn", left: 30, top: 15, size: 48, z: 2 },
  { art: "pine", left: 68, top: 15, size: 42 },
  { art: "tree", left: 84, top: 17, size: 44, flip: true },

  // ── صخره‌ها و گل‌ها (جزئیات کف چمن) ──
  { art: "rock", left: 12, top: 48, size: 26, z: 1, opacity: 0.95 },
  { art: "rock", left: 84, top: 46, size: 24, z: 1, opacity: 0.95 },
  { art: "flower", left: 16, top: 64, size: 22, z: 1 },
  { art: "tulip", left: 82, top: 62, size: 22, z: 1, flip: true },
  { art: "flower", left: 24, top: 20, size: 20, z: 1 },
  { art: "tulip", left: 74, top: 22, size: 20, z: 1 },
];

export default function SceneDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {items.map((it, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${it.left}%`,
            top: `${it.top}%`,
            transform: `translate(-50%, -50%) ${it.flip ? "scaleX(-1)" : ""}`,
            zIndex: it.z ?? 0,
            opacity: it.opacity ?? 1,
            filter: "drop-shadow(0 3px 2px rgba(0,0,0,0.22))",
          }}
        >
          <Art name={it.art} size={it.size} />
        </div>
      ))}
    </div>
  );
}
