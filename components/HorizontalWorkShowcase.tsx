"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function HorizontalWorkShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const active = Math.min(2, Math.max(0, Math.round(progress * 2)));

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = el.offsetHeight - window.innerHeight;
      setProgress(Math.min(1, Math.max(0, -rect.top / distance)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work-showcase" style={{ "--work-bg": "#fffaf2" } as React.CSSProperties}>
      <div className="work-sticky">
        <div className="work-header">
          <div><p className="eyebrow">SELECTED WORK / 2021—2026</p><h2>Three ways<br />I build growth.</h2></div>
          <p>问题 → 判断 → 行动 → 结果</p>
        </div>
        <div className="work-track" style={{ transform: `translate3d(${-progress * 66.666}%,0,0)` }}>
          {projects.map((project, index) => (
            <article key={project.slug} className={`work-panel ${active === index ? "active" : ""}`}>
              <div className="work-panel-copy">
                <p className="project-category">{project.category}</p>
                <span className="project-index">{project.index}</span>
                <h3>{project.title}</h3>
                <p className="project-challenge">{project.challenge}</p>
                <div className="work-results">
                  {project.results.map((result) => <div key={result.label}><strong>{result.value}</strong><span>{result.label}</span></div>)}
                </div>
                <Link href={`/work/${project.slug}`} className="button button-dark">View Case Study <ArrowUpRight size={18} /></Link>
              </div>
              <Link href={`/work/${project.slug}`} className="work-image" aria-label={`查看${project.title}案例`}>
                <Image src={project.cover} alt={project.title} fill sizes="(max-width: 768px) 90vw, 46vw" />
                <span>VIEW<br />PROJECT ↗</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="work-progress">
          <span>0{active + 1} / 03</span>
          <div><i style={{ width: `${(active + 1) * 33.333}%` }} /></div>
          <a href={site.notion} target="_blank" rel="noreferrer">View complete project archive on Notion ↗</a>
        </div>
      </div>
    </section>
  );
}
