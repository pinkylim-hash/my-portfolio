"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import styles from "./DtcFarmCase.module.css";

export function DtcFarmCase({ project }: { project: Project }) {
  const current = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(current + projects.length - 1) % projects.length];
  const next = projects[(current + 1) % projects.length];

  return (
    <main className={styles.case} style={{ "--case-color": project.color, "--case-accent": project.accent } as React.CSSProperties}>
      <motion.div className={styles.wipe} initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} />
      <header className={styles.nav}>
        <Link href="/#work"><ArrowLeft size={18} /> Back to work</Link>
        <Link href="/" className={styles.brand}>PINKY<span>✦</span></Link>
        <span>{project.index} / 03</span>
      </header>
      <section className={styles.hero}>
        <div className={styles.heading}>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p>{project.challenge}</p>
        </div>
        <motion.div className={styles.cover} initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <Image src={project.cover} alt={project.title} fill priority sizes="100vw" />
        </motion.div>
      </section>
      <section className={styles.stats}>
        {project.results.map((result) => <Reveal key={result.label}><strong>{result.value}</strong><span>{result.label}</span></Reveal>)}
      </section>
      <section className={styles.narrative}>
        <Reveal className={`${styles.block} ${styles.intro}`}><span>01 / CONTEXT</span><h2>项目背景</h2><p>{project.background}</p></Reveal>
        <div className={styles.twoCol}>
          <Reveal className={styles.block}><span>目标用户</span><h3>Who</h3><p>{project.audience}</p></Reveal>
          <Reveal className={styles.block}><span>我的角色</span><h3>My role</h3><p>{project.role}</p></Reveal>
        </div>
        <Reveal className={styles.judgment}><span>02 / THE JUDGMENT</span><p>“{project.judgment}”</p></Reveal>
        <Reveal className={`${styles.block} ${styles.process}`}><span>03 / THE PROCESS</span><h2>从判断到行动</h2><p>{project.process}</p></Reveal>
        <div className={styles.actions}>
          {project.actions.map((action, index) => <Reveal key={action} className={styles.action} delay={index * 0.08}><span>0{index + 1}</span><p>{action}</p></Reveal>)}
        </div>
      </section>
      <section className={styles.gallery}>
        <div className={styles.galleryHeading}><p className="eyebrow">SELECTED OUTPUTS</p><h2>Work in the real world.</h2></div>
        <div className={styles.galleryGrid}>
          {project.images.map((image, index) => (
            <Reveal className={`${styles.galleryImage} ${styles[`g${index + 1}`] ?? ""}`} key={image}>
              <Image src={image} alt={`${project.title}项目素材 ${index + 1}`} fill sizes="(max-width: 768px) 90vw, 55vw" />
            </Reveal>
          ))}
        </div>
        <div className={styles.outputList}>
          {project.outputs.map((output, index) => <div key={output}><span>0{index + 1}</span><p>{output}</p></div>)}
        </div>
      </section>
      <section className={styles.reflection}>
        <p className="eyebrow">04 / REFLECTION</p><h2>What I learned.</h2><p>{project.reflection}</p>
      </section>
      <nav className={styles.pagination}>
        <Link href={`/work/${previous.slug}`}><ArrowLeft /><span>Previous project<small>{previous.title}</small></span></Link>
        <Link href={`/work/${next.slug}`}><span>Next project<small>{next.title}</small></span><ArrowRight /></Link>
      </nav>
      <footer className={styles.footer}><Link href="/#connect">Have a project in mind? Let&apos;s talk. <ArrowUpRight /></Link></footer>
    </main>
  );
}
