export type BuildCase = {
  index: string;
  slug: string;
  caseName: string;
  role: string;
  summary: string;
  challenge: string;
  impact: Array<{
    value: string;
    label: string;
  }>;
  capability: string[];
  approach: string[];
  approachIntro?: string;
  approachRows?: Array<{
    title: string;
    body?: string;
    href: string;
    image?: string;
    imageAlt?: string;
    images?: Array<{
      src: string;
      alt: string;
    }>;
  }>;
  approachCards?: Array<{
    index: string;
    slug: string;
    title: string;
    label: string;
    image: string;
    imageAlt: string;
    summary: string;
    points: string[];
    metrics?: string[];
  }>;
  image: string;
  imageAlt: string;
  mediaType?: "image" | "video";
  images?: Array<{
    src: string;
    alt: string;
  }>;
};

export const buildCases: BuildCase[] = [
  {
    index: "01",
    slug: "ai-hardware-gtm",
    caseName: "AI 智能硬件品牌 GTM 营销",
    role: "市场运营",
    summary: "AI 水果分选机通过视觉检测和算法等无损技术，对水果内外部质量进行检测。产品技术复杂需转化为客户价值，并搭建 ToB市场传播和获客体系。",
    challenge: "",
    impact: [
      { value: "50+", label: "有效销售线索" },
      { value: "No.2", label: "行业知名度" },
    ],
    capability: ["GTM", "ToB 营销", "技术内容转译"],
    approach: [
      "梳理技术卖点和应用场景",
      "搭建官网、产品手册、解决方案体系",
      "从 0-1 通过内容矩阵获取潜在线索，搭建 Raw Lead-MQL-SQL 线索分级流转体系，落地线索筛选孵化机制，累计产出 50+ 有效销售线索。",
    ],
    approachIntro: "作为初创团队市场营销，我覆盖产品营销、内容增长、展会活动与线索转化，推动品牌从0到1建立市场影响力。",
    approachRows: [
      {
        title: "梳理产品信息与核心卖点，将技术语言转译为用户能理解的价值表达",
        href: "#",
      },
      {
        title: "视觉内容，提升品牌认知与产品传播",
        href: "#",
      },
      {
        title: "内容营销与搜索增长，建立品牌声量与精准触达",
        href: "#",
      },
      {
        title: "线下展会活动，建立品牌认知和行业关系",
        href: "#",
      },
    ],
    image: "/images/ai-hardware-sorting.gif",
    imageAlt: "SpekSense AI 水果分选设备",
  },
  {
    index: "02",
    slug: "north-america-ai-voice",
    caseName: "AI 语音输入 App 北美冷启动",
    role: "海外增长 / 内容运营",
    summary: "一款 AI 智能记录助手的 app，通过录音、文字和手写内容采集信息。产品在开发阶段且北美市场无品牌认知、无用户基础，我在 0 预算的情况下，通过 Reddit、Discord 社区完成 AI 产品海外市场冷启动，获取首批用户。",
    challenge: "",
    impact: [
      { value: "300+", label: "Beta 用户" },
      { value: "Discord", label: "社区成员沉淀" },
      { value: "Loop", label: "海外用户反馈闭环" },
    ],
    capability: ["海外增长", "社区营销", "AI 产品商业化"],
    approach: [
      "分析市面所有 todolist 的产品与用户场景，提炼产品价值是 voice-input",
      "制定 Reddit 社区内容策略，通过场景、用户锁定相关的 sub，招募 Beta 用户",
      "搭建 Discord 社区，收集用户反馈",
    ],
    approachIntro: "在 0 预算、无品牌认知、无用户基础的情况下，我用内容先找到用户，再用社区承接反馈，形成 AI 产品冷启动的第一轮增长闭环。",
    approachRows: [
      {
        title: "内容切入，用场景获取信任",
        body: "围绕北美职场、学习和个人效率场景输出内容，弱化产品介绍，让用户先理解 Flowtica 解决的问题。",
        href: "/work/north-america-ai-voice",
        images: [
          {
            src: "/images/case02-approach/reddit-community-post.png",
            alt: "Flowtica Reddit 社区内容发布截图",
          },
          {
            src: "/images/case02-approach/reddit-productivity-post.png",
            alt: "Flowtica Reddit ProductivityApps 社区内容截图",
          },
        ],
      },
      {
        title: "Reddit 社区渗透，获取种子用户",
        body: "在目标用户聚集的 subreddit 中，用真实社区内容参与讨论和发布测试招募，获取第一批 Beta 用户。",
        href: "/work/north-america-ai-voice",
        images: [
          {
            src: "/images/case02-approach/reddit-metrics.jpeg",
            alt: "Reddit 内容发布后的曝光与互动数据截图",
          },
          {
            src: "/images/case02-approach/google-reddit-search.png",
            alt: "Flowtica 在 Google 与 Reddit 中的搜索曝光截图",
          },
        ],
      },
      {
        title: "Discord 社群承接，形成反馈闭环",
        body: "搭建 Discord 社群，沉淀用户反馈、问题报告和功能建议，让真实使用体验反哺产品迭代。",
        href: "/work/north-america-ai-voice",
        images: [
          {
            src: "/images/case02-approach/discord-action-button-thread.png",
            alt: "Flowtica Discord action button 教程讨论截图",
          },
          {
            src: "/images/case02-approach/discord-smart-edit-post.png",
            alt: "Flowtica Discord Smart Edit 教程内容截图",
          },
        ],
      },
    ],
    image: "/images/ai-voice-flowtica.mp4",
    imageAlt: "AI 智能记录助手产品场景图",
    mediaType: "video",
  },
  {
    index: "03",
    slug: "dtc-farm-membership",
    caseName: "DTC 农场品牌会员",
    role: "品牌与增长负责人",
    summary: "致力于打造一个农场品牌，自有一个 200 亩的农场和生活空间。",
    challenge: "原产品复购低，缺少和用户的连接和持续消费。需要通过会员体系和私域运营，将传统农产品从一次性消费转向长期的用户关系。",
    impact: [
      { value: "200万+", label: "年销售额" },
      { value: "10000名", label: "会员规模 2 倍增长" },
    ],
    capability: ["用户增长", "会员体系", "消费品牌运营"],
    approach: [
      "重构会员产品与价格体系",
      "设计权益、活动和运营流程",
      "打通内容、私域与销售转化",
    ],
    approachIntro: "我把会员产品、私域运营和线下体验拆成三个可被持续运营的增长窗口，让农产品从一次性消费转向长期关系。",
    approachCards: [
      {
        index: "01",
        slug: "member-value-growth",
        title: "用户价值增长",
        label: "Membership value",
        image: "/images/case03-approach/member-value.jpeg",
        imageAlt: "全年地主计划会员产品内容",
        summary: "把原有 399 地主计划升级为更长周期的会员产品，用稳定供给和惊喜盲盒提升用户加入理由。",
        points: [
          "设计 999 / 16 次的新会员产品，延长消费周期。",
          "用固定水果与季度盲盒组合，兼顾稳定履约和新鲜感。",
          "农场仅开放给地主，把购买延伸为可参与的长期体验。",
        ],
        metrics: ["399 -> 999", "6 次 -> 16 次"],
      },
      {
        index: "02",
        slug: "private-domain-conversion",
        title: "私域运营和商业转化",
        label: "Private domain conversion",
        image: "/images/case03-approach/private-domain-conversion.png",
        imageAlt: "城市联名活动中的农产品体验现场",
        summary: "围绕老用户升级、社群触达、商品上新和活动节点，把私域从沟通渠道变成持续成交场景。",
        points: [
          "针对 6000 余名老用户设计专属升级路径，降低决策门槛。",
          "用社群内容、发货提醒和 SKU 对比持续强化会员计划认知。",
          "通过低门槛福利、节日组合和城市联名活动放大转化。",
        ],
        metrics: ["200 人参与", "400 单带动", "单日约 200 单"],
      },
      {
        index: "03",
        slug: "brand-trust-growth",
        title: "品牌信任增长",
        label: "Brand trust",
        image: "/images/case03-approach/brand-trust.jpg",
        imageAlt: "用户进入农场参加在地体验活动",
        summary: "通过摘番茄、新农人一天、冬日活动等线下体验，让用户真实进入农场，感知产品与团队。",
        points: [
          "策划农场在地活动，让会员看见产品从哪里来。",
          "用真实体验替代单向种草，增强用户对品质和团队的信任。",
          "把线下参与感反哺到私域关系和后续复购。",
        ],
        metrics: ["5000 -> 10000 会员", "200万+ 年销售额"],
      },
    ],
    image: "/images/farm-brand.jpeg",
    imageAlt: "农场品牌会员增长项目素材",
    images: [
      {
        src: "/images/farm-membership-collage.jpg",
        alt: "农场产品与生活空间拼图",
      },
      {
        src: "/images/farm-brand.jpeg",
        alt: "农场地主证会员产品素材",
      },
    ],
  },
  {
    index: "04",
    slug: "farm-product-design",
    caseName: "农产品消费品化产品设计",
    role: "产品经理",
    summary: "自己农场种植大量爱媛，往年为单品销售为主，缺乏溢价与复购能力。",
    challenge: "产品形态单一，难以支撑品牌与长期消费关系，通过作为爱媛汽水重新价值包装，把传统的农产品转为溢价能力高的消费品。",
    impact: [
      { value: "3 万瓶", label: "单品销量" },
      { value: "66%", label: "利润率" },
    ],
    capability: ["产品设计", "消费品定位", "商业化落地"],
    approach: [
      "从原料销售转向产品设计",
      "推动供应链落地生产",
      "梳理卖点与市场表达",
    ],
    image: "/images/farm-soda-optimized.jpg",
    imageAlt: "农产品饮品化产品设计素材",
  },
];
