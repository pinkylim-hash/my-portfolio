import Image from "next/image";
import styles from "./PodcastLife.module.css";

export function PodcastLife() {
  return (
    <section className={styles.section} data-section="podcast-life">
      <div className={styles.inner}>
        <p className={styles.caption}>🗣️ 用播客表达生活</p>
        <div className={styles.images}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/podcast-life-live.jpg"
              alt="播客线下分享现场"
              fill
              sizes="(max-width: 760px) 88vw, 42vw"
            />
          </div>
          <div className={styles.imageFrame}>
            <Image
              src="/images/podcast-life-stats.jpg"
              alt="播客数据截图"
              fill
              sizes="(max-width: 760px) 88vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
