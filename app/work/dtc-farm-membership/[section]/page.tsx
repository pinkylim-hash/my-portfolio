import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { case03Details, getCase03Detail } from "@/data/case03-details";
import styles from "./page.module.css";

export function generateStaticParams() {
  return case03Details.map((detail) => ({ section: detail.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const detail = getCase03Detail(section);
  if (!detail) return {};
  return {
    title: `${detail.title}｜DTC 农场品牌会员`,
    description: detail.summary,
  };
}

export default async function Case03SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const detail = getCase03Detail(section);
  if (!detail) notFound();

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/#work"><ArrowLeft size={18} /> Back to Case 03</Link>
        <span>Case 03 / {detail.index}</span>
      </nav>

      <header className={`${styles.hero} ${detail.image ? "" : styles.heroTextOnly}`}>
        <div className={styles.heroCopy}>
          <p>{detail.eyebrow}</p>
          <h1>{detail.title}</h1>
          <span>{detail.summary}</span>
        </div>
        {detail.image ? (
          <div className={styles.heroImage}>
            <Image src={detail.image} alt={detail.imageAlt ?? detail.title} fill priority sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        ) : null}
      </header>

      {detail.metrics.length ? (
        <section className={styles.metrics}>
          {detail.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </section>
      ) : null}

      <section className={styles.sections}>
        {detail.sections.map((item, index) => (
          <article key={item.title} className={`${styles.sectionBlock} ${index === 0 && item.images && item.imageLayout !== "widePair" ? styles.featuredImageBlock : ""}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <ul>
                {item.items.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.images ? (
                <div className={`${styles.sectionImages} ${item.imageLayout === "widePair" ? styles.wideImagePair : ""}`}>
                  {item.images.map((image) => (
                    <img src={image.src} alt={image.alt} key={image.src} />
                  ))}
                </div>
              ) : null}
              {item.links ? (
                <div className={styles.sectionLinks}>
                  {item.links.map((link) => (
                    link.href ? (
                      <a className={link.thumbnail ? styles.thumbnailLink : undefined} href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                        {link.thumbnail ? <img src={link.thumbnail} alt={`${link.label} 缩略图`} /> : null}
                        {link.description ? <strong>{link.description}</strong> : null}
                        {link.description ? <span>{link.label}</span> : <strong>{link.label}</strong>}
                        {link.meta ? <small>{link.meta}</small> : null}
                      </a>
                    ) : (
                      <span key={link.label}>{link.label}</span>
                    )
                  ))}
                </div>
              ) : null}
              {item.activityCases ? (
                <div className={styles.activityCases}>
                  {item.activityCases.map((activity) => (
                    <section className={styles.activityCase} key={activity.title}>
                      <h3>{activity.title}</h3>
                      <div>
                        {activity.groups.map((group) => (
                          <div className={styles.activityGroup} key={group.label}>
                            <strong>{group.label}</strong>
                            <ul>
                              {group.items.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
