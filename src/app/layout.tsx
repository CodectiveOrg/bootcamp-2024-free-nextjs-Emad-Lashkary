import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
// import { NextFont } from "next/dist/compiled/@next/font";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Call The Doc",
  description: "پلتفرم جامع رزرو و جستوجوی دکتر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body className={``}>{children}</body>
    </html>
  );
}
