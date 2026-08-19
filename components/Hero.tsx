"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { homePage } from "@/data/home";
import { StrokeText } from "./StrokeText";
import styles from "./Hero.module.css";

export function Hero() {
  const reduced = useReducedMotion();
  const content = homePage.hero;
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.layout}>
        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, clipPath: "inset(12% 0 12% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
          transition={{ duration: reduced ? 0 : 1.1, delay: .45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={content.image} alt={content.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 48vw" />
        </motion.div>

        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .25, duration: reduced ? 0 : .9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 aria-label="Hi, I am linyuhua">
            <StrokeText
              text="Hi, I am linyuhua"
              strokeColor="#111111"
              fillColor="#050505"
              strokeWidth={1.1}
              drawDuration={1.25}
              fillDelay={0.08}
              stagger={0.035}
              trigger="mount"
              fillMode="wipe"
              fontSize={128}
              fontWeight={400}
              letterSpacing={-6}
            />
          </h1>
          <h2>产品营销与 GTM 增长运营</h2>
          <p>
            我擅长把复杂技术产品讲清楚，并搭建从产品定位、内容传播、官网资料、SEO、社区到销售线索的增长路径。<br />
            6 年内容运营，4 年 ToB 市场营销经验，做过 AI 硬件、AI App 海外冷启动与 DTC 消费品牌增长。
          </p>
        </motion.div>
      </div>
      <div className={styles.scrollCue}><span>{content.scrollCue}</span><i /></div>
    </section>
  );
}
