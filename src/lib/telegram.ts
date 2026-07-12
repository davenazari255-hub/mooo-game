"use client";

import { useEffect, useState } from "react";

// حداقل تعریف نوع برای Telegram WebApp
type TelegramWebApp = {
  ready: () => void;
  expand: () => void;
  setHeaderColor?: (color: string) => void;
  setBackgroundColor?: (color: string) => void;
  disableVerticalSwipes?: () => void;
  HapticFeedback?: {
    impactOccurred: (style: "light" | "medium" | "heavy") => void;
  };
  initDataUnsafe?: {
    user?: {
      id: number;
      first_name?: string;
      last_name?: string;
      username?: string;
    };
  };
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
  }
}

export function useTelegram() {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (!tg) return;
    try {
      tg.ready();
      tg.expand();
      tg.setHeaderColor?.("#1a1108");
      tg.setBackgroundColor?.("#140d06");
      tg.disableVerticalSwipes?.();
    } catch {
      /* خارج از محیط تلگرام اجرا شده */
    }
    setWebApp(tg);
  }, []);

  const haptic = (style: "light" | "medium" | "heavy" = "light") => {
    webApp?.HapticFeedback?.impactOccurred?.(style);
  };

  const user = webApp?.initDataUnsafe?.user ?? null;

  return { webApp, user, haptic };
}
