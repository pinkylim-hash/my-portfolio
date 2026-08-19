"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
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

function preloadGalleryImages() {
  return Promise.allSettled(
    galleryItems.map(
      (item) =>
        new Promise<void>((resolve) => {
          const image = new window.Image();
          image.onload = () => resolve();
          image.onerror = () => resolve();
          image.src = item.image;

          if (image.decode) {
            image.decode().then(resolve).catch(resolve);
          }
        }),
    ),
  );
}

export function WhatShapesGallery() {
  const shellRef = useRef<HTMLDivElement>(null);
  const [shouldLoadGallery, setShouldLoadGallery] = useState(false);
  const [galleryImagesReady, setGalleryImagesReady] = useState(false);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || shouldLoadGallery) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadGallery(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(shell);

    return () => observer.disconnect();
  }, [shouldLoadGallery]);

  useEffect(() => {
    if (!shouldLoadGallery || galleryImagesReady) return undefined;

    let cancelled = false;

    preloadGalleryImages().then(() => {
      if (!cancelled) {
        setGalleryImagesReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [galleryImagesReady, shouldLoadGallery]);

  return (
    <div className={styles.block}>
      <p className={styles.caption}>📷 用镜头捕捉美好</p>
      <div className={styles.shell} ref={shellRef}>
        <div className={styles.fallbackGrid} aria-hidden="true">
          {galleryItems.slice(0, 6).map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt=""
              loading="eager"
              fetchPriority={index < 3 ? "high" : "auto"}
              decoding="async"
            />
          ))}
        </div>
        {galleryImagesReady ? (
          <div className={styles.interactiveGallery}>
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
        ) : null}
      </div>
    </div>
  );
}
