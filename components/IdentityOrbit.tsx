"use client";

import Image from "next/image";
import styles from "./IdentityOrbit.module.css";

const capabilities = [
  {
    number: "01",
    title: "Go-to-Market Strategy",
    subtitle: "从产品定位到市场进入，建立增长路径",
    description: "将用户需求、产品价值与商业目标连接起来，帮助产品找到正确市场。",
    keywords: ["Product Positioning", "GTM Strategy", "Conversion Design"],
    image: "/images/capability-01.jpg",
  },
  {
    number: "02",
    title: "Product Marketing & Content Growth",
    subtitle: "用内容连接产品与用户",
    description: "通过产品手册、官网内容、SEO和多渠道内容体系，让复杂产品被理解并产生增长。",
    keywords: ["Marketing Assets", "SEO", "Community Growth"],
    image: "/images/capability-02.jpg",
  },
  {
    number: "03",
    title: "Brand & Marketing Activation",
    subtitle: "建立品牌表达，推动市场落地",
    description: "从品牌定位、视觉表达到展会和活动执行，打造完整市场触点。",
    keywords: ["Brand Identity", "Website Upgrade", "Event Marketing"],
    image: "/images/capability-03.jpg",
  },
  {
    number: "04",
    title: "AI-powered Marketing System",
    subtitle: "用AI提升营销效率",
    description: "利用AI工具和自动化流程，提高内容生产效率，并建立可复用营销系统。",
    keywords: ["AI Workflow", "Rapid Prototyping", "Automation"],
    image: "/images/capability-04.jpg",
  },
];

export function IdentityOrbit() {
  return (
    <section id="identity" className={styles.section} aria-labelledby="identity-title">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>WHAT I DO</p>
          <h2 id="identity-title">
            I connect products,
            <span>stories and growth.</span>
          </h2>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilities.map((item) => (
            <article className={styles.card} key={item.number}>
              <Image src={item.image} alt="" fill sizes="(max-width: 900px) 92vw, 25vw" />
              <div className={styles.overlay} />
              <div className={styles.cardContent}>
                <span className={styles.number}>{item.number}</span>
                <h3>{item.title}</h3>
                <p className={styles.subtitle}>{item.subtitle}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
