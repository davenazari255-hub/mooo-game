import React from "react";
import { Art } from "../Art";

type P = { size?: number; className?: string };

// ───────────────────────── محصولات ─────────────────────────
export const Wheat = ({ size = 28, className }: P) => <Art name="wheat" size={size} className={className} alt="گندم" />;
export const Corn = ({ size = 28, className }: P) => <Art name="corn" size={size} className={className} alt="ذرت" />;
export const Soy = ({ size = 28, className }: P) => <Art name="soy" size={size} className={className} alt="سویا" />;
export const Milk = ({ size = 28, className }: P) => <Art name="milk" size={size} className={className} alt="شیر" />;

// ───────────────────────── حیوانات ─────────────────────────
export const Cow = ({ size = 44, className }: P) => <Art name="cow" size={size} className={className} alt="گاو" />;
export const Sheep = ({ size = 40, className }: P) => <Art name="sheep" size={size} className={className} alt="گوسفند" />;

// ───────────────────────── ساختمان‌ها و طبیعت ─────────────────────────
export const House = ({ size = 70, className }: P) => <Art name="house" size={size} className={className} alt="خانه" />;
export const Tractor = ({ size = 60, className }: P) => <Art name="tractor" size={size} className={className} alt="تراکتور" />;
export const Tree = ({ size = 40, className }: P) => <Art name="tree" size={size} className={className} alt="درخت" />;
export const PineTree = ({ size = 36, className }: P) => <Art name="pine" size={size} className={className} alt="کاج" />;
