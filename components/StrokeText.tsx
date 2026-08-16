"use client";

import {
  type CSSProperties,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styles from "./StrokeText.module.css";

type StrokeTextProps = {
  text?: string;
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  ease?: string;
  trigger?: "mount" | "hover" | "scroll" | "loop";
  fillMode?: "fade" | "wipe" | "none";
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
};

const DEFAULT_TEXT = "Draw Attention";

export function StrokeText({
  text = DEFAULT_TEXT,
  strokeColor = "#111111",
  fillColor = "#050505",
  strokeWidth = 1.2,
  drawDuration = 1.25,
  fillDelay = 0.1,
  stagger = 0.035,
  ease = "power2.out",
  trigger = "mount",
  fillMode = "wipe",
  fontSize = 128,
  fontWeight = 400,
  letterSpacing = -5,
  reverse = false,
  className = "",
  style = {},
}: StrokeTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const strokeTextRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState<DOMRect | null>(null);

  const rawId = useId();
  const wipeId = `stroke-text-wipe-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const characters = useMemo(() => Array.from(String(text ?? "")), [text]);
  const dash = Math.max(fontSize * 7, 200);

  const fontStyle = useMemo<CSSProperties>(
    () => ({
      fontSize: `${fontSize}px`,
      fontWeight,
      letterSpacing: `${letterSpacing}px`,
    }),
    [fontSize, fontWeight, letterSpacing],
  );

  useLayoutEffect(() => {
    let cancelled = false;

    const measure = () => {
      if (cancelled || !strokeTextRef.current) return;

      let bbox: DOMRect;
      try {
        bbox = strokeTextRef.current.getBBox();
      } catch {
        return;
      }

      if (!bbox.width) return;

      const pad = Math.max(Number(strokeWidth) || 1, fontSize * 0.1);
      const next = {
        x: bbox.x - pad,
        y: bbox.y - pad,
        width: bbox.width + pad * 2,
        height: bbox.height + pad * 2,
      } as DOMRect;

      setBox((prev) =>
        prev &&
        Math.abs(prev.x - next.x) < 0.5 &&
        Math.abs(prev.width - next.width) < 0.5 &&
        Math.abs(prev.y - next.y) < 0.5
          ? prev
          : next,
      );
    };

    measure();
    document.fonts?.ready.then(measure).catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [characters, fontSize, fontWeight, letterSpacing, strokeWidth]);

  const viewBox = box ? `${box.x} ${box.y} ${box.width} ${box.height}` : `0 ${-fontSize} 600 ${fontSize * 1.3}`;
  const fillDuration = Math.max(0.4, drawDuration * 0.5);
  const animationDelay = drawDuration + fillDelay;
  const triggerClass =
    trigger === "hover" ? styles.triggerHover : trigger === "loop" ? styles.triggerLoop : styles.triggerMount;
  const fillClass =
    fillMode === "none" ? styles.fillNone : fillMode === "fade" ? styles.fillFade : styles.fillWipe;

  return (
    <span
      ref={rootRef}
      className={`${styles.strokeText} ${triggerClass} ${fillClass} ${className}`.trim()}
      style={
        {
          ...style,
          "--stroke-text-height": `${Math.round(fontSize * 1.3)}px`,
          "--stroke-text-dash": dash,
          "--stroke-text-draw-duration": `${drawDuration}s`,
          "--stroke-text-fill-duration": `${fillDuration}s`,
          "--stroke-text-fill-delay": `${animationDelay}s`,
        } as CSSProperties
      }
      role="img"
      aria-label={String(text ?? "")}
    >
      <svg className={styles.svg} viewBox={viewBox} preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {fillMode === "wipe" && box && (
          <defs>
            <clipPath id={wipeId} clipPathUnits="userSpaceOnUse">
              <rect className={styles.wipe} x={box.x} y={box.y} width={box.width} height={box.height} />
            </clipPath>
          </defs>
        )}

        <text
          ref={strokeTextRef}
          className={styles.stroke}
          x="0"
          y="0"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={fontStyle}
        >
          {text}
        </text>

        <text
          className={styles.fill}
          x="0"
          y="0"
          fill={fillColor}
          stroke="none"
          style={fontStyle}
          clipPath={fillMode === "wipe" && box ? `url(#${wipeId})` : undefined}
        >
          {text}
        </text>
      </svg>
    </span>
  );
}
