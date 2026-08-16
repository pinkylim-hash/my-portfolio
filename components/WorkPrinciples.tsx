import { Fragment } from "react";
import { homePage } from "@/data/home";
import styles from "./WorkPrinciples.module.css";

function splitPoints(text: string) {
  return text.split(" / ").filter(Boolean);
}

export function WorkPrinciples() {
  const content = homePage.principles;

  return (
    <section className={styles.section} data-section="work-principles" aria-labelledby="build-title">
      <div className={styles.inner}>
        <h2 id="build-title">{content.title}</h2>

        <div className={styles.grid}>
          {content.items.map((item, index) => (
            <Fragment key={item.no}>
              <article key={item.no} className={styles.item}>
                <h3>{item.title}</h3>
                <p className={styles.summary}>{item.text}</p>
                <ul className={styles.points}>
                  {splitPoints(item.flow).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
              {index < content.items.length - 1 ? (
                <span key={`${item.no}-line`} className={styles.flowLine} aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
