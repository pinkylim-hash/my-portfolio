import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MarketingCapability } from "@/data/marketing-capabilities";
import styles from "./MarketingCapabilitySection.module.css";

type CapabilityCardProps = {
  capability: MarketingCapability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  return (
    <Link className={styles.card} href={capability.href}>
      <span className={styles.cardNumber}>{capability.number}</span>
      <div>
        <h5>{capability.englishTitle}</h5>
        <p className={styles.cardTitleZh}>{capability.chineseTitle}</p>
      </div>
      <p>{capability.summary}</p>
      <span className={styles.cardArrow} aria-hidden="true">
        <ArrowUpRight size={18} strokeWidth={1.8} />
      </span>
    </Link>
  );
}
