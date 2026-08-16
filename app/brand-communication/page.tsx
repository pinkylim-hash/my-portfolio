"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Film } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const videoLinks = [
  {
    title: "英文版橙子分选机",
    href: "/videos/brand-communication/orange-sorter-en.mp4",
    image: "/images/brand-communication/orange-sorter-en-cover.jpg",
    playable: true,
    hideTitle: false,
  },
  {
    title: "产品宣传视频 01",
    href: "https://www.douyin.com/user/MS4wLjABAAAASemrOblHQz3WwPK90tQ5i8usl0todqC7FTnNxMSsiGc?from_tab_name=main&modal_id=7144921753372904740&showSubTab=video",
    image: "/images/brand-communication/product-video-01-custom.jpeg",
    hideTitle: false,
  },
  {
    title: "产品宣传视频 02",
    href: "https://www.douyin.com/user/MS4wLjABAAAASemrOblHQz3WwPK90tQ5i8usl0todqC7FTnNxMSsiGc?from_tab_name=main&modal_id=7128367410985422087&showSubTab=video",
    image: "/images/brand-communication/product-video-02-custom.png",
    hideTitle: false,
  },
];

const corporateVideoLinks = [
  {
    title: "企业宣传视频",
    href: "https://weixin.qq.com/sph/ArsWsP2D6Q",
    image: "/images/brand-communication/corporate-video-cover.jpg",
    hideTitle: true,
  },
];

const modules = [
  {
    number: "01",
    title: "产品宣传视频",
    contentTitle: "产品视频",
    role: "制片 / 编导 / 现场拍摄 / 品质把控",
    cover: "/images/brand-communication/product-video-01-custom.jpeg",
    points: [
      "负责从产品理解、拍摄策划到视频输出的完整流程。",
      "深入理解产品功能与使用场景，梳理视频表达逻辑。",
      "参与脚本规划、现场拍摄执行，并把控最终成片质量。",
    ],
    videos: videoLinks,
  },
  {
    number: "02",
    title: "企业宣传视频",
    works: [
      {
        title: "企业宣传视频",
        background: "年度企业宣传视频，用于回顾公司发展历程、展示品牌实力，并对外传递企业形象。",
        role: ["负责前期素材整理、视频脚本规划与内容结构设计", "协调制作方向并把控最终输出质量。"],
        videos: corporateVideoLinks,
      },
      {
        title: "年会开场视频",
        background: "为增强团队凝聚力，制作一支以员工视角展开的年会暖场视频，展现团队氛围与企业温度。",
        role: ["围绕员工岗位故事进行内容设计，收集同事素材与真实反馈，完成视频框架搭建、剪辑制作与最终呈现。"],
        videos: [
          {
            title: "年会开场视频",
            href: "/videos/brand-communication/annual-party-2023.mp4",
            image: "/images/brand-communication/annual-party-2023-cover.jpg",
            playable: true,
            hideTitle: true,
          },
        ],
      },
    ],
    background: "",
    role: "",
    cover: "",
    points: [],
    videos: [],
  },
  {
    number: "03",
    title: "短视频运营",
    showContentTitle: true,
    role: "内容策划 / 项目运营",
    cover: "",
    points: [
      "从 0 到 1 搭建企业短视频账号，负责内容方向规划、选题策划及持续运营。",
      "每周稳定输出 1-2 条视频，覆盖产品展示、客户采访、爆款内容二创等方向。",
      "独立完成脚本设计，协同团队完成现场拍摄。",
      "通过视频投流提升内容触达，结合抖音线索工具获取潜在客户，实现从内容曝光到销售线索转化。",
    ],
    videos: [
      {
        title: "短视频运营内容展示 02",
        href: "",
        image: "/images/brand-communication/short-video-ops-02.jpg",
        hideTitle: true,
        imagePosition: "center top",
      },
      {
        title: "短视频运营内容展示 01",
        href: "",
        image: "/images/brand-communication/short-video-ops-01.jpg",
        hideTitle: true,
      },
    ],
  },
];

export default function BrandCommunicationPage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  useEffect(() => {
    const syncSelectedModule = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      setSelectedModule(hash || null);
    };

    syncSelectedModule();
    window.addEventListener("hashchange", syncSelectedModule);

    return () => window.removeEventListener("hashchange", syncSelectedModule);
  }, []);

  const visibleModules = selectedModule ? modules.filter((module) => module.title === selectedModule) : modules;

  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to cases
      </Link>

      <section className={styles.moduleList} aria-label="品牌内容传播模块">
        {visibleModules.map((module) => (
          <article className={styles.module} id={module.title} key={module.title}>
            <header className={styles.moduleHeader}>
              <span>{module.number}</span>
            </header>

            <div className={styles.moduleBody}>
              {"works" in module && module.works ? (
                <div className={styles.workList}>
                  {module.works.map((work) => (
                    <section className={styles.workItem} key={work.title}>
                      <div className={styles.moduleText}>
                        <h3>{work.title}</h3>
                        <div className={styles.copyBlock}>
                          <p className={styles.label}>项目背景</p>
                          <p>{work.background}</p>
                        </div>
                        <div className={styles.copyBlock}>
                          <p className={styles.label}>我的角色</p>
                          <ul>
                            {work.role.map((item) => (
                              <li key={item}>· {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <VideoPanel title={work.title} videos={work.videos} />
                    </section>
                  ))}
                </div>
              ) : (
                <>
                  <div className={styles.moduleText}>
                    {"contentTitle" in module && module.contentTitle ? <h3>{module.contentTitle}</h3> : null}
                    {"showContentTitle" in module && module.showContentTitle ? <h3>{module.title}</h3> : null}

                    <div className={styles.copyBlock}>
                      <p className={styles.label}>我的角色</p>
                      {Array.isArray(module.role) ? (
                        <ul>
                          {module.role.map((item) => (
                            <li key={item}>· {item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{module.role}</p>
                      )}
                    </div>

                    {module.points.length ? (
                      <div className={styles.copyBlock}>
                        <p className={styles.label}>我做了什么</p>
                        <ul>
                          {module.points.map((point) => (
                            <li key={point}>· {point}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <VideoPanel title={module.title} videos={module.videos} />
                </>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

type VideoItem = {
  title: string;
  href: string;
  image: string;
  imagePosition?: string;
  hideTitle?: boolean;
  playable?: boolean;
};

function VideoPanel({ title, videos }: { title: string; videos: VideoItem[] }) {
  return (
    <div className={styles.mediaPanel} aria-label={`${title} 视频内容`}>
      {videos.length ? (
        <div className={styles.videoGrid}>
          {videos.map((video) =>
            video.playable ? (
              <div className={styles.videoCard} key={video.href}>
                <span className={styles.videoThumb}>
                  <video controls preload="metadata" poster={video.image}>
                    <source src={video.href} type="video/mp4" />
                  </video>
                </span>
                {video.hideTitle ? null : <strong>{video.title}</strong>}
              </div>
            ) : video.href ? (
              <a className={styles.videoCard} href={video.href} target="_blank" rel="noreferrer" key={video.href}>
                <span className={styles.videoThumb}>
                  <img src={video.image} alt={video.title} style={video.imagePosition ? { objectPosition: video.imagePosition } : undefined} />
                  <i>
                    <Film size={18} />
                  </i>
                </span>
                {video.hideTitle ? null : (
                  <strong>
                    {video.title}
                    <ArrowUpRight size={16} />
                  </strong>
                )}
              </a>
            ) : (
              <div className={styles.videoCard} key={video.image}>
                <span className={styles.videoThumb}>
                  <img src={video.image} alt={video.title} style={video.imagePosition ? { objectPosition: video.imagePosition } : undefined} />
                </span>
                {video.hideTitle ? null : <strong>{video.title}</strong>}
              </div>
            ),
          )}
        </div>
      ) : (
        <div className={styles.placeholderCard}>
          <Film size={24} />
          <strong>{title}</strong>
          <span>视频内容待补充</span>
        </div>
      )}
    </div>
  );
}
