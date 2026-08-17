import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://my-portfolio-rho-blush-72.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Pinky 林育桦｜品牌增长运营 × AI 产品运营",
    template: "%s｜Pinky 林育桦",
  },
  description: "Pinky 林育桦的个人作品集：让想法成为品牌、内容与增长。",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pinky 林育桦｜让想法成为品牌、内容与增长",
    description: "6+ 年市场营销经验，持续深耕 AI 软硬件、品牌增长、产品运营和内容创作。",
    url: siteUrl,
    siteName: "Pinky 林育桦 Portfolio",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: "/images/pinky-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pinky 林育桦个人作品集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinky 林育桦｜让想法成为品牌、内容与增长",
    description: "6+ 年市场营销经验，持续深耕 AI 软硬件、品牌增长、产品运营和内容创作。",
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
