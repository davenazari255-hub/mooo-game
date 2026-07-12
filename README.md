# 🐄 Mooo Game — مینی‌اپ تلگرامی بازی مزرعه

مینی‌اپ تلگرامی بازی مزرعه‌داری با رابط کاربری فارسی (RTL).

این نسخه فعلاً فقط **رابط کاربری پایه (UI base)** است — منطق بازی و بک‌اند در مراحل بعدی اضافه می‌شود.

## تکنولوژی‌ها

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Telegram WebApp SDK**

## اجرای محلی

```bash
npm install
npm run dev
```

سپس مرورگر را روی `http://localhost:3000` باز کنید.

## ساختار

```
src/
├── app/
│   ├── layout.tsx      # چیدمان اصلی + بارگذاری SDK تلگرام
│   ├── page.tsx        # صفحه اصلی بازی
│   └── globals.css     # استایل‌های سراسری
├── components/
│   ├── TopBar.tsx      # نوار بالا (سطح، سکه، جم، انرژی)
│   ├── InfoCards.tsx   # کارت‌های لیگ/ماموریت/صندوق
│   ├── FarmScene.tsx   # صحنه مزرعه
│   ├── BottomNav.tsx   # نویگیشن پایین
│   └── panels/         # پنل‌های کشتزار، دامداری، سفارشات، بازار، ارتقا
└── lib/
    └── telegram.ts     # هوک یکپارچگی با تلگرام
```

## دیپلوی

روی [Vercel](https://vercel.com) دیپلوی شده است.
