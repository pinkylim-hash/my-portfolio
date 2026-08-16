"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import styles from "./WhatShapesGallery.module.css";
import { galleryItems } from "./galleryItems";

type CircularGalleryProps = {
  items?: { image: string; text: string }[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
};

const CircularGallery = dynamic<CircularGalleryProps>(
  () =>
    import("./CircularGallery.jsx") as Promise<{
      default: ComponentType<CircularGalleryProps>;
    }>,
  {
    ssr: false,
  },
);

export function WhatShapesGallery() {
  return (
    <div className={styles.block}>
      <p className={styles.caption}>📷 用镜头捕捉美好</p>
      <div className={styles.shell}>
        <CircularGallery
          items={galleryItems}
          bend={2.6}
          borderRadius={0.035}
          textColor="#f4c82e"
          font='bold 24px Georgia, "Songti SC", serif'
          scrollSpeed={2}
          scrollEase={0.045}
        />
      </div>
    </div>
  );
}
