"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import styles from "./FarmProductDesignCase.module.css";

const roleItems = [
  "对接加工厂供应商，推动产品落地生产",
  "设计产品形态（从原果到饮品转化）",
  "完成产品整体表达（文案与部分视觉方向）",
  "制定定价策略与核心卖点（风味、原料、工艺）",
];

const backgroundItems = [
  "农产品以单品销售为主，缺乏溢价与复购能力",
  "产品形态单一，难以支撑品牌与长期消费关系",
];

const designPoints = [
  {
    title: "干净的下一代汽水",
    body: "所有的柑橘味全部都来自于爱媛，没有任何添加剂（可以对比可口可乐、元气森林、大窑、北冰洋等上一代配料表极复杂的冲兑汽水）",
  },
  {
    title: "来自柑橘的柑橘味",
    body: "每瓶含 2.2 个爱媛，全部采的高品质爱媛，从树上到鲜榨出来 24 小时",
  },
  {
    title: "微气泡放大柑橘味",
    body: "每瓶充了 1.5 bar 的微气泡，用气泡去增强了柑橘味感",
  },
  {
    title: "不苦不涩",
    body: "采用了半切工艺，自动化机器将橘瓣挖出鲜榨，没有带皮的苦涩感（对比粗糙的、带皮榨的其他 NFC 饮品）",
  },
  {
    title: "甜度刚刚好",
    body: "没有加任何果葡糖浆和人工甜味剂，自然的、明亮的甜",
  },
];

export function FarmProductDesignCase({ project }: { project: Project }) {
  const current = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(current + projects.length - 1) % projects.length];
  const next = projects[(current + 1) % projects.length];

  return (
    <main className={styles.case} style={{ "--case-color": project.color, "--case-accent": project.accent } as React.CSSProperties}>
      <motion.div className={styles.wipe} initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} />

      <header className={styles.nav}>
        <Link href="/#work"><ArrowLeft size={18} /> Back to work</Link>
        <Link href="/" className={styles.brand}>PINKY<span>+</span></Link>
        <span>{project.index} / {String(projects.length).padStart(2, "0")}</span>
      </header>

      <section className={styles.hero}>
        <h1>全球首款爱媛汽水</h1>
      </section>

      <section className={styles.content}>
        <Reveal className={styles.roleSection}>
          <span className={styles.sectionLabel}>我的角色</span>
          <div className={styles.roleGrid}>
            {roleItems.map((item, index) => (
              <div className={styles.roleCard} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className={styles.textSection}>
          <span className={styles.sectionLabel}>项目背景</span>
          <ul className={styles.cleanList}>
            {backgroundItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className={styles.textSection}>
          <span className={styles.sectionLabel}>产品定义</span>
          <p>基于爱媛橙原料，延伸为即饮型产品，拓展消费场景并提升产品溢价</p>
        </Reveal>

        <Reveal className={styles.textSection}>
          <span className={styles.sectionLabel}>产品设计</span>
          <div className={styles.designCopy}>
            <p><strong>确定产品形态为气泡饮品和提炼核心卖点</strong>，新鲜 健康的口感与日常消费属性</p>
            <ul className={styles.designList}>
              {designPoints.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}：</strong>
                  {point.body}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className={styles.gallery}>
        <Reveal className={`${styles.galleryImage} ${styles.tallImage}`}>
          <Image src="/images/farm-soda-case/fresh-to-juice.jpg" alt="爱媛汽水从鲜果到果汁的产品说明图" fill sizes="(max-width: 900px) 92vw, 44vw" />
        </Reveal>
        <Reveal className={`${styles.galleryImage} ${styles.tallImage}`}>
          <Image src="/images/farm-soda-case/2-2-oranges.jpg" alt="每瓶爱媛汽水含 2.2 个爱媛的产品说明图" fill sizes="(max-width: 900px) 92vw, 44vw" />
        </Reveal>
      </section>

      <nav className={styles.pagination}>
        <Link href={`/work/${previous.slug}`}><ArrowLeft /><span>Previous project<small>{previous.title}</small></span></Link>
        <Link href={`/work/${next.slug}`}><span>Next project<small>{next.title}</small></span><ArrowRight /></Link>
      </nav>
    </main>
  );
}
