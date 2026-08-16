import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./page.module.css";

const exhibitions = [
  {
    number: "01",
    title: "iFresh 亚洲果蔬产业博览会",
    meta: ["地点：上海新国际博览中心", "展位面积：96 平", "整体费用：67977 元（未含展位费）", "基本信息：公司首次办特展"],
    images: [
      "/images/field-marketing/ifresh-1.jpg",
      "/images/field-marketing/ifresh-2.jpg",
      "/images/field-marketing/ifresh-3.jpeg",
      "/images/field-marketing/ifresh-4.jpg",
    ],
  },
  {
    number: "02",
    title: "中国国际水果展",
    meta: [
      "地点：广州中国进出口商品交易会展馆",
      "展位面积：36 平",
      "整体费用：11 w（含展位费）",
      "基本信息：在产品和公司成熟的情况下，加上疫情过后展会复苏，现场效果挺佳。",
    ],
    images: ["/images/field-marketing/china-fruit-1.png", "/images/field-marketing/china-fruit-2.jpg", "/images/field-marketing/china-fruit-work.jpg"],
  },
  {
    number: "03",
    title: "Asia Fruit Logistica",
    meta: ["地点：香港亚洲国际博览馆", "展位面积：10 平", "整体费用：2000 元（未含展位费）", "基本信息：公司首次境外办展"],
    images: ["/images/field-marketing/asia-fruit-1.jpg", "/images/field-marketing/asia-fruit-group.jpg"],
  },
  {
    number: "04",
    title: "其他地方性展会活动",
    meta: [
      "陕西：第二十九届杨凌农高会、第三十届杨凌农高会",
      "山东：首届智慧农业博览会",
      "广西：第五届广西柑橘大会",
      "亚果会和万果会举办的各类会议：2023年第八届中国果业品牌大会、第五届云南果蔬产业大会",
    ],
    images: ["/images/field-marketing/local-events-stage.jpg"],
  },
];

export default function FieldMarketingPage() {
  return (
    <main className={styles.page}>
      <Link className={styles.backLink} href="/#work">
        <ArrowLeft size={17} />
        Back to cases
      </Link>

      <section className={styles.hero}>
        <p>Type: 线下展会营销</p>
        <h1>线下市场拓展</h1>
      </section>

      <section className={styles.contextSection}>
        <article>
          <p className={styles.label}>背景</p>
          <div>
            <p>任职期间，共策划执行 10 余场线下展会，包括行业内大型展会以及小型协会活动。</p>
            <ul>
              <li>通过线下展会建立品牌认知和行业关系</li>
              <li>用真实设备展示降低客户理解成本</li>
              <li>把现场咨询、产品介绍和后续线索承接串联起来</li>
            </ul>
          </div>
        </article>

        <article>
          <p className={styles.label}>我的角色</p>
          <div>
            <p>统筹多场展会（特展与标展），覆盖方案、设计、搭建及物料体系。</p>
          </div>
        </article>
      </section>

      <section className={styles.exhibitionList} aria-label="线下展会项目">
        {exhibitions.map((exhibition) => (
          <article className={styles.exhibition} key={exhibition.title}>
            <div className={styles.exhibitionText}>
              <span>{exhibition.number}</span>
              <h2>{exhibition.title}</h2>
              <ul>
                {exhibition.meta.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={exhibition.images.length > 1 ? styles.imageGrid : styles.singleImage}>
              {exhibition.images.map((image) => (
                <img src={image} alt="" key={image} />
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
