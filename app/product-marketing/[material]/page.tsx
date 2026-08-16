import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProductMarketingMaterial, marketingCapabilities } from "@/data/marketing-capabilities";
import styles from "./page.module.css";

type ProductMarketingMaterialPageProps = {
  params: Promise<{
    material: string;
  }>;
};

const websiteUpgradeSections = [
  {
    label: "第一版",
    intro: "因首期搭建外包，后期管理修改不便且存在安全隐患，启动二次改版：",
    points: ["更换品牌主色为橙色，统一视觉风格", "产品分类按水果品类重构，提升用户浏览体验"],
    blocks: [
      {
        text: "导航栏菜单简单，以文字为主",
        images: ["/images/website-upgrade-detail/version1-nav.png"],
      },
      {
        text: "主页内容 展现技术而非产品",
        images: [
          "/images/website-upgrade-detail/version1-home-1.png",
          "/images/website-upgrade-detail/version1-home-2.png",
        ],
      },
    ],
  },
  {
    label: "第二版",
    intro: "针对公司产品内容的调整，添加新的内容和界面，进一步优化用户体验：",
    points: [
      "用户体验优化：增加交互体验，如标题过渡效果、图标悬停动画，增加页面的活力和吸引力",
      "内容更新优化：针对公司产品内容的调整，添加新的内容和界面。如增加产品页数、客户案例视频、其他平台链接",
    ],
    blocks: [
      {
        text: "导航栏，根据产品类型和水果种类进行分类",
        images: ["/images/website-upgrade-detail/version2-nav.png"],
      },
      {
        text: "主页内容 在保留自研技术的同时 讲产品以及功能效果放上去",
        images: [
          "/images/website-upgrade-detail/version2-home-1.png",
          "/images/website-upgrade-detail/version2-home-2.png",
        ],
      },
    ],
  },
  {
    label: "第三版",
    intro: "围绕产品型号、交互形式和多语言版本，继续完善官网内容表达：",
    points: [
      "产品介绍更详细，按产品型号进行分类梳理",
      "交互体验升级，新增动图、视频等多媒体展示形式",
      "同步推出中文版、英文版、西班牙语版，配合企业出海战略",
    ],
    blocks: [
      {
        text: "增加新的板块【新闻资讯】",
        images: [],
      },
      {
        text: "首页增加图片轮播 将案例视频提前",
        images: ["/images/website-upgrade-detail/version3-home.png"],
      },
    ],
  },
];

export function generateStaticParams() {
  const productMarketing = marketingCapabilities.find((item) => item.slug === "product-marketing");

  return productMarketing?.materials?.map((material) => ({ material: material.slug })) ?? [];
}

function WebsiteUpgradePage() {
  return (
    <main className={`${styles.page} ${styles.websitePage}`}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to Product Marketing
      </Link>

      <section className={styles.websiteHero}>
        <div>
          <p className={styles.eyebrow}>Type: 视觉设计</p>
          <h1>官网升级</h1>
        </div>
      </section>

      <section className={styles.backgroundSection}>
        <p className={styles.sectionLabel}>背景</p>
        <div>
          <p>为适配公司品牌调性调整、核心产品策略变更及产品落地项目更新，启动官网升级工作。</p>
          <ul>
            <li>同步更新官网全部相关内容</li>
            <li>新增 SEM、SEO 埋点词及点击问询功能</li>
            <li>视觉层面优化升级，加入视频、动图等交互元素，提升官网视觉体验与用户交互感</li>
          </ul>
          <div className={styles.roleBlock}>
            <p>我的角色</p>
            <span>21-23 年参与 2 次公司官网改版升级，本人负责设计框架架构、风格设定、文案内容、图片素材准备工作</span>
          </div>
        </div>
      </section>

      <div className={styles.versionList}>
        {websiteUpgradeSections.map((section) => (
          <section className={styles.versionSection} key={section.label}>
            <div className={styles.versionIntro}>
              <span>{section.label}</span>
              {section.intro ? (
                <div className={styles.versionCopyGroup}>
                  <strong>介绍：</strong>
                  <p>{section.intro}</p>
                </div>
              ) : null}
              <div className={styles.versionCopyGroup}>
                <strong>动作：</strong>
                <ol>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className={styles.versionBlocks}>
              {section.blocks.map((block) => (
                <article className={styles.contentBlock} key={block.text}>
                  <p>{block.text}</p>
                  {block.images.length ? (
                    <div className={block.images.length > 1 ? styles.imageGrid : styles.imageSingle}>
                      {block.images.map((image) => (
                        <img src={image} alt="" key={image} />
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

function AssetViewerPage({ material }: { material: NonNullable<ReturnType<typeof getProductMarketingMaterial>> }) {
  return (
    <main className={`${styles.page} ${styles.materialPage}`}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to Product Marketing
      </Link>

      <section className={styles.materialHero}>
        <p>Type: 视觉资料</p>
        <h1>{material.title}</h1>
      </section>

      <section className={styles.materialViewer} aria-label={`${material.title} 完整展示`}>
        {material.assetType === "pdf" ? (
          <iframe src={material.asset} title={material.title} />
        ) : (
          <img src={material.asset} alt={material.title} />
        )}
      </section>

      <a className={styles.openOriginal} href={material.asset} target="_blank" rel="noreferrer">
        Open original
        <ArrowUpRight size={17} />
      </a>
    </main>
  );
}

function SinglePageDesignPage({ material }: { material: NonNullable<ReturnType<typeof getProductMarketingMaterial>> }) {
  return (
    <main className={`${styles.page} ${styles.materialPage}`}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to Product Marketing
      </Link>

      <section className={styles.materialHero}>
        <p>Type: 单页设计</p>
        <h1>{material.title}</h1>
      </section>

      <section className={styles.documentGrid} aria-label="单页设计完整展示">
        {material.documents?.map((document) => (
          <a className={styles.documentCard} href={document.asset} target="_blank" rel="noreferrer" key={document.asset}>
            <div className={styles.documentThumb}>
              <img src={document.image} alt={document.title} />
            </div>
            <div>
              <strong>{document.title}</strong>
              <span>
                View PDF
                <ArrowUpRight size={16} />
              </span>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}

export default async function ProductMarketingMaterialPage({ params }: ProductMarketingMaterialPageProps) {
  const { material: materialSlug } = await params;
  const material = getProductMarketingMaterial(materialSlug);

  if (!material) notFound();

  if (material.slug === "website-upgrade") return <WebsiteUpgradePage />;
  if (material.documents?.length) return <SinglePageDesignPage material={material} />;

  return <AssetViewerPage material={material} />;
}
