import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pinky 林育桦｜品牌增长运营 × AI 产品运营",
  description: "Pinky 林育桦的个人作品集：让想法成为品牌、内容与增长。",
  metadataBase: new URL("https://pinky-portfolio.example.com"),
  openGraph: {
    title: "Pinky 林育桦｜让想法成为品牌、内容与增长",
    description: "6+ 年市场营销经验，持续深耕 AI 软硬件、品牌增长、产品运营和内容创作。",
    type: "website",
    images: ["/images/pinky-hero.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
