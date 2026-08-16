import { homePage } from "@/data/home";
import styles from "./StoryTimeline.module.css";

function renderSummary(summary: string) {
  const match = summary.match(/^(「[^」]+」)(.*)$/);

  if (!match) return summary;

  return (
    <>
      <strong>{match[1]}</strong>
      {match[2]}
    </>
  );
}

function splitAbility(ability: string) {
  return ability
    .split(/[、·\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function StoryTimeline() {
  const content = homePage.story;
  const stages = content.stages;

  return (
    <section
      className={styles.section}
      aria-labelledby="story-title"
    >
      <div className={styles.shell}>
        <aside className={styles.intro}>
          <p className={styles.eyebrow}>My Story</p>
          <h2 id="story-title">Started with content. Evolved through users. Growing through products and brands.</h2>
        </aside>

        <div className={styles.list}>
          {stages.map((item) => (
            <article
              key={item.period}
              className={styles.item}
            >
              <div className={styles.meta}>
                <span className={styles.copyPeriod}>{item.period}</span>
                <p className={styles.metaLine}>
                  <span>Role:</span>
                  {item.role}
                </p>
                <p className={styles.metaLine}>
                  <span>Industry:</span>
                  {item.industry}
                </p>
              </div>

              <div className={styles.body}>
                <div className={styles.textBlock}>
                  <p>{renderSummary(item.summary)}</p>
                </div>
                <div className={styles.textBlock}>
                  <div className={styles.abilityList}>
                    {splitAbility(item.ability).map((ability) => (
                      <span key={ability}>{ability}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
