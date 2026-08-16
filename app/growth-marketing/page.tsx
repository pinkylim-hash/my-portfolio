"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

const articleLinks = [
  {
    title: "道创技术把关水果标准，让中国苹果走向全球",
    href: "https://mp.weixin.qq.com/s/6qSPi7Vmmk7exibqYajGGw",
    image: "/images/growth-marketing/articles/apple-global.jpg",
  },
  {
    title: "国产西梅遇上 100%深圳智造，个个佳品！",
    href: "https://mp.weixin.qq.com/s/f26DeE4I6V0gnn3Vo35mzQ",
    image: "/images/growth-marketing/articles/shenzhen-prune.jpg",
  },
  {
    title: "有问必答！关于道创你最关心的那些问题",
    href: "https://mp.weixin.qq.com/s/oc0zh9zo3E1Py5NZU8fpcw",
    image: "/images/growth-marketing/articles/faq.jpg",
  },
  {
    title: "焕新升级，1台智能设备满足5种水果分选",
    href: "https://mp.weixin.qq.com/s/DY5fcwPHwA22eKEG421_dQ",
    image: "/images/growth-marketing/articles/product-upgrade.jpg",
  },
  {
    title: "道创2022｜拥抱变化 坚定前行",
    href: "https://mp.weixin.qq.com/s/oCNLaRRyYnndhGKPmzQefw",
    image: "/images/growth-marketing/articles/annual-summary.jpg",
  },
];

const customerCases = [
  {
    title: "志同道友 01｜大家有共同的目标，自然就走到一起",
    href: "https://mp.weixin.qq.com/s/71F0d5Yjp4ixT17FPzhQeA",
    image: "/images/growth-marketing/customer-interviews/customer-case-01-cover.png",
  },
  {
    title: "志同道友 02｜智能设备分选效果好，操作还很简单",
    href: "https://mp.weixin.qq.com/s/aX37ioMEHOk4ymU7v8lrKg",
    image: "/images/growth-marketing/customer-interviews/customer-case-02.png",
  },
  {
    title: "志同道友 03｜稳定的好产品，是品牌让客户信赖的关键",
    href: "https://mp.weixin.qq.com/s/QacvN-HlnT9IC98fU866wQ",
    image: "/images/growth-marketing/customer-interviews/customer-case-03.png",
  },
  {
    title: "志同道友 04｜狂卖 200 万箱！水果人还能这样玩转电商",
    href: "https://mp.weixin.qq.com/s/9lX29bLNMGG1sVM94FB16A",
    image: "/images/growth-marketing/customer-interviews/customer-case-04.png",
  },
];

const externalMediaLinks = [
  {
    title: "《我爱发明》20220627 慧眼识果",
    href: "https://tv.cctv.cn/2022/06/27/VIDE64kReOKy5yIKBBxWBESz220627.shtml",
    image: "/images/growth-marketing/external-media/cctv-interview.png",
  },
  {
    title: "水果同质化问题如何打破? 果业人的科技盛宴给你答案",
    href: "https://mp.weixin.qq.com/s/NQmZ704qrrQus-pz_ESHSw",
    image: "/images/growth-marketing/external-media/media-report-01.jpg",
  },
  {
    title: "水果精细分选难！是什么治愈了果业人的焦虑？",
    href: "https://mp.weixin.qq.com/s/oaDaOfXS-VwFrVLUKSxmEQ",
    image: "/images/growth-marketing/external-media/media-report-02.jpg",
  },
  {
    title: "解密！被央视点赞的水果增值神器！",
    href: "https://mp.weixin.qq.com/s/Aj5zOUIC1pC-cWlAmJ3-NA",
    image: "/images/growth-marketing/external-media/media-report-03.jpg",
  },
];

const modules = [
  {
    number: "01",
    title: "公众号文章",
    background:
      "负责公司早期公众号文案与排版，将技术产品、项目落地和企业动态转化为更易被行业客户理解的内容表达。",
    role: [
      "围绕 40+ 行业客户的阅读习惯，建立简约大方、专业可信的图文风格。",
      "结合设备动图、项目案例和产品价值说明，降低大型硬件产品的理解成本。",
      "完成文章选题、文案撰写、视觉排版和发布链接整理。",
    ],
    articles: articleLinks,
  },
  {
    number: "02",
    title: "客户案例",
    background:
      "ToB 企业需要通过真实客户案例建立信任。工作期间推出「志同道合」计划，围绕项目成功落地后的客户现场进行内容共创。",
    role: [
      "以编导身份前往项目现场，与客户进行 1v1 交流采访。",
      "梳理采访问题、客户反馈和项目价值表达，沉淀为案例内容素材。",
      "协同完成视频录制、客户故事整理和后续传播素材输出。",
    ],
    articles: customerCases,
  },
  {
    number: "03",
    title: "外部媒体合作",
    background:
      "智能农业设备需要在传统的媒体上做曝光，因此联系央视农业频道。摄影组为项目做宣传拍摄。",
    role: [
      "配合节目组在云南的拍摄，沟通脚本。",
      "负责文字、视频创作内容发在官号和行业媒体。",
    ],
    articles: externalMediaLinks,
  },
];

export default function GrowthMarketingPage() {
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

      <section className={styles.moduleList} aria-label="内容增长策略模块">
        {visibleModules.map((module) => (
          <article className={styles.module} id={module.title} key={module.title}>
            <header className={styles.moduleHeader}>
              <span>{module.number}</span>
            </header>

            <div className={styles.moduleBody}>
              <div className={styles.moduleText}>
                <h3>{module.title}</h3>

                <div className={styles.copyBlock}>
                  <p className={styles.label}>项目背景</p>
                  <p>{module.background}</p>
                </div>

                <div className={styles.copyBlock}>
                  <p className={styles.label}>我的角色</p>
                  <ul>
                    {module.role.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.mediaPanel} aria-label={`${module.title} 内容展示`}>
                {module.articles.length ? (
                  <div className={styles.articleGrid}>
                    {module.articles.map((article) => (
                      <a className={styles.articleCard} href={article.href} target="_blank" rel="noreferrer" key={article.href}>
                        <span>
                          {article.image ? (
                            <img src={article.image} alt={article.title} />
                          ) : (
                            <span className={styles.coverPlaceholder}>
                              <b>{article.title}</b>
                              <small>文章封面待替换</small>
                            </span>
                          )}
                        </span>
                        <strong>
                          {article.title}
                          <ArrowUpRight size={16} />
                        </strong>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
