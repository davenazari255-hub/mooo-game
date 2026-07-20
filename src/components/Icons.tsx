import { Art } from "./Art";

type IconProps = { size?: number };

export const CoinIcon = ({ size = 20 }: IconProps) => (
  <Art name="coin" size={size} alt="Coin" />
);

export const GemIcon = ({ size = 20 }: IconProps) => (
  <Art name="gem" size={size} alt="Gem" />
);

export function ClockIcon({ size = 11 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="#8a6a3a" strokeWidth="2.4" />
      <path d="M12 7v5l3.5 2" stroke="#8a6a3a" strokeWidth="2.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
