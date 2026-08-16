import Image from "next/image";
import { Heart } from "lucide-react";
import { creatorVideos, type CreatorVideo } from "@/data/creator-portfolio";
import styles from "./CreatorPortfolio.module.css";

function VideoCard({
  video,
  index,
}: {
  video: CreatorVideo;
  index: number;
}) {
  const card = (
    <div className={styles.card}>
      <div className={styles.cover}>
        {video.cover ? (
          <Image
            src={video.cover}
            alt={video.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className={styles.fallbackCover} aria-hidden="true" />
        )}
      </div>

      <div className={styles.cardShade} />

      <div className={styles.cardTop}>
        <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
      </div>
    </div>
  );

  const content = (
    <>
      {card}
      <div className={styles.copy}>
        <h3>{video.title}</h3>
        <p>
          <Heart size={14} fill="currentColor" aria-hidden="true" />
          {video.likes}
        </p>
        {video.platform ? <span>{video.platform}</span> : null}
      </div>
    </>
  );

  if (!video.url) {
    return <article className={styles.item}>{content}</article>;
  }

  return (
    <a className={styles.item} href={video.url} target="_blank" rel="noreferrer">
      {content}
    </a>
  );
}

export function CreatorPortfolio() {
  return (
    <section className={styles.section} id="creator">
      <div className={styles.inner}>
        <h2 className={styles.heading}>🎬 用视频传递美好</h2>
        <div className={styles.grid}>
          {creatorVideos.map((video, index) => (
            <VideoCard video={video} index={index} key={`${video.title}-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
