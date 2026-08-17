import { marketingCapabilities } from "@/data/marketing-capabilities";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./MarketingCapabilitySection.module.css";

export function MarketingCapabilitySection() {
  return (
    <section className={styles.section} aria-labelledby="marketing-capabilities-title">
      <header className={styles.header}>
        <p className={styles.kicker}>01 · Approach</p>
        <h4 id="marketing-capabilities-title">
          Translate product value
          <br />
          into market communication
        </h4>
      </header>

      <div className={styles.caseList} aria-label="Marketing capability case list">
        {marketingCapabilities.map((capability) => {
          const previewImages = Array.from({ length: 3 }, (_, index) => capability.previewImages[index] ?? capability.previewImages[0]);
          const hasMaterials = Boolean(capability.materials?.length);
          const usesModulePreview = capability.slug === "brand-communication" || capability.slug === "growth-marketing";

          return (
            <article className={styles.caseRow} key={capability.slug}>
              <div className={styles.caseText}>
                <span>{capability.number}</span>
                <Link href={capability.href}>
                  <h5>{capability.chineseTitle}</h5>
                </Link>
                <p>{capability.summary}</p>
              </div>
              <div className={styles.caseVisual}>
                {usesModulePreview ? (
                  <div className={styles.modulePreviewGrid}>
                    {capability.materials?.map((material) => (
                      <Link className={styles.modulePreviewCard} href={material.href} key={material.slug}>
                        <span className={styles.modulePreviewWindow}>
                          <img loading="lazy" src={material.image} alt="" />
                          <ArrowUpRight size={18} strokeWidth={1.8} />
                        </span>
                        <strong>{material.title}</strong>
                      </Link>
                    ))}
                  </div>
                ) : hasMaterials ? (
                  <div className={styles.materialGrid}>
                    {capability.materials?.map((material) => (
                      <Link className={styles.materialCard} href={material.href} key={material.slug}>
                        <span className={styles.materialThumb}>
                          <img loading="lazy" src={material.image} alt="" />
                        </span>
                        <strong>{material.title}</strong>
                        <ArrowUpRight size={18} strokeWidth={1.8} />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link className={styles.windowLink} href={capability.href}>
                    <div className={styles.windowGrid} aria-hidden="true">
                      {previewImages.map((image, index) => (
                        <i key={`${capability.slug}-${index}`}>
                          <img loading="lazy" src={image} alt="" />
                        </i>
                      ))}
                    </div>
                    <span>View Case</span>
                    <ArrowUpRight size={20} strokeWidth={1.8} />
                  </Link>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
