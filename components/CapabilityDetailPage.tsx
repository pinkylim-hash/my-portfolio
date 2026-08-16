import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { MarketingCapability } from "@/data/marketing-capabilities";
import styles from "./CapabilityDetailPage.module.css";

type CapabilityDetailPageProps = {
  capability: MarketingCapability;
};

export function CapabilityDetailPage({ capability }: CapabilityDetailPageProps) {
  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to cases
      </Link>

      <section className={styles.hero}>
        <p>{capability.number} · Marketing Capability</p>
        <h1>{capability.englishTitle}</h1>
        <h2>{capability.chineseTitle}</h2>
        <p>{capability.summary}</p>
      </section>

      <section className={styles.caseStudy} aria-label={`${capability.englishTitle} case study`}>
        {capability.sections.map((section) => (
          <article key={section.label}>
            <span>{section.label}</span>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
