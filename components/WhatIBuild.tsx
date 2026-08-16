"use client";

import Image from "next/image";
import Link from "next/link";
import { buildCases } from "@/data/build-cases";
import { MarketingCapabilitySection } from "./MarketingCapabilitySection";
import styles from "./WhatIBuild.module.css";

export function WhatIBuild() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.kicker}>What I Build</p>
          <h2>Selected cases</h2>
        </div>

        <div className={styles.cases}>
          {buildCases.map((project) => (
            <article className={styles.caseGroup} key={project.slug}>
              <section className={styles.caseIntro}>
                <div className={styles.caseCopy}>
                  <p className={styles.caseMeta}>
                    {project.index} · {project.role}
                  </p>
                  <h3>{project.caseName}</h3>
                  <p className={styles.summary}>
                    {project.summary}
                    {project.challenge ? ` ${project.challenge}` : ""}
                  </p>

                  <div className={styles.impactGrid}>
                    {project.impact.map((item) => (
                      <div key={`${item.value}-${item.label}`}>
                        <strong>{item.value}</strong>
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.capabilityList}>
                    {project.capability.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.caseImage}>
                  {project.slug === "farm-product-design" ? (
                    <Link className={styles.caseImageLink} href="/work/farm-product-design">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(max-width: 900px) 92vw, 52vw"
                      />
                    </Link>
                  ) : project.images ? (
                    <div className={styles.imagePair}>
                      {project.images.map((image) => (
                        <div key={image.src}>
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 900px) 46vw, 26vw"
                          />
                        </div>
                      ))}
                    </div>
                  ) : project.mediaType === "video" ? (
                    <video
                      src={project.image}
                      aria-label={project.imageAlt}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 900px) 92vw, 52vw"
                    />
                  )}
                </div>
              </section>

              {project.slug === "ai-hardware-gtm" ? (
                <MarketingCapabilitySection />
              ) : project.slug === "farm-product-design" ? (
                null
              ) : (
              <section
                className={`${styles.approachScreen} ${project.approachRows ? styles.approachDetailed : ""} ${
                  project.slug === "north-america-ai-voice" ? styles.approachAlternating : ""
                } ${project.slug === "dtc-farm-membership" ? styles.approachCase03 : ""}`}
              >
                {project.approachCards ? (
                  <>
                    <div className={styles.approachHead}>
                      <div>
                        <p className={styles.approachKicker}>
                          {project.index} · Approach
                        </p>
                        <h4>做了什么</h4>
                      </div>
                      <p>{project.approachIntro}</p>
                    </div>

                    <div className={styles.case03Windows}>
                      {project.approachCards.map((card) => (
                        <Link
                          className={styles.case03Window}
                          href={`/work/dtc-farm-membership/${card.slug}`}
                          key={card.title}
                        >
                          <span className={styles.windowFrame}>
                            <span className={styles.windowImage}>
                              <Image
                                src={card.image}
                                alt={card.imageAlt}
                                fill
                                sizes="(max-width: 900px) 92vw, 28vw"
                              />
                            </span>
                            <span className={styles.windowShade} />
                            <span className={styles.windowMeta}>
                              PART {card.index} / 03
                            </span>
                            <span className={styles.windowCopy}>
                              <small>{card.label}</small>
                              <strong>{card.title}</strong>
                              <em>Open case</em>
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : project.approachRows ? (
                  <>
                    <div className={styles.approachHead}>
                      <div>
                        <p className={styles.approachKicker}>
                          {project.index} · Approach
                        </p>
                        <h4>做了什么</h4>
                      </div>
                      <p>{project.approachIntro}</p>
                    </div>

                    <div className={styles.approachRows}>
                      {project.approachRows.map((row, rowIndex) => (
                        <a className={styles[`approachRow${rowIndex + 1}`]} href={row.href} key={row.title}>
                          <span>{String(rowIndex + 1).padStart(2, "0")}</span>
                          <strong>
                            {row.title}
                            {row.body ? <small>{row.body}</small> : null}
                          </strong>
                          <i
                            className={row.images ? styles.approachImageGroup : undefined}
                            aria-hidden={row.image || row.images ? undefined : "true"}
                          >
                            {row.images ? (
                              row.images.map((image) => (
                                <span key={image.src}>
                                  <img src={image.src} alt={image.alt} />
                                </span>
                              ))
                            ) : row.image ? (
                              <img src={row.image} alt={row.imageAlt ?? ""} />
                            ) : null}
                          </i>
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <p className={styles.approachKicker}>
                      {project.index} · Approach
                    </p>
                    <h4>做了什么</h4>
                    <ol>
                      {project.approach.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </>
                )}
              </section>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
