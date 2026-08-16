export type Case03Detail = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  sections: Array<{
    title: string;
    body: string;
    items: string[];
    images?: Array<{
      src: string;
      alt: string;
    }>;
    imageLayout?: "widePair";
    links?: Array<{
      label: string;
      description?: string;
      meta?: string;
      href?: string;
      thumbnail?: string;
    }>;
    activityCases?: Array<{
      title: string;
      groups: Array<{
        label: string;
        items: string[];
      }>;
    }>;
  }>;
  metrics: Array<{
    value: string;
    label: string;
  }>;
};

export const case03Details: Case03Detail[] = [
  {
    slug: "member-value-growth",
    index: "01",
    title: "用户价值增长",
    eyebrow: "Membership value",
    summary: "围绕会员体系、老用户升级和新用户内容转化，重新设计用户为什么加入、如何降低决策门槛，以及如何从内容种草进入长期会员关系。",
    sections: [
      {
        title: "会员体系转化设计",
        body: "将原有 399 地主计划升级为 999 / 16 次的全年会员产品，用固定水果、季度盲盒和农场开放权益，把一次性购买改造成更长周期的参与关系。",
        items: [
          "固定水果 + 季度盲盒组合，既保证稳定供给，也增加惊喜感。",
          "冬季盲盒、春季盲盒等节点化产品，让用户形成持续期待。",
          "农场仅开放给地主，把农产品消费延伸为可参与的长期体验。",
        ],
        images: [
          {
            src: "/images/case03-detail/member-product-grid.png",
            alt: "全年地主计划会员权益与农产品组合",
          },
        ],
      },
      {
        title: "6000 余名老用户私域升级",
        body: "针对已有私域老用户设计迁移路径，通过专属优惠、旧方案升级和社群集中触达，降低用户从旧地主计划转向新会员产品的决策成本。",
        items: [
          "为老用户设置专属升级价格，降低从 399 到 999 的心理门槛。",
          "支持旧方案直接升级，减少重复解释和重新下单的阻力。",
          "在社群、发货提醒和 SKU 对比中反复解释权益差异，形成持续转化循环。",
        ],
        images: [
          {
            src: "/images/case03-detail/old-user-upgrade.png",
            alt: "老用户地主计划升级沟通截图",
          },
          {
            src: "/images/case03-detail/member-sku-conversion.png",
            alt: "发货节点中的会员计划转化截图",
          },
        ],
        links: [
          { label: "快团团升级链接：#小程序://快团团/r2TW7s5LeL9cXeG" },
          { label: "地主计划 2026：#小程序://快团团/Tf7bt5eclpzsmVt" },
        ],
      },
      {
        title: "新用户转化策略：小红书",
        body: "新用户不直接从会员产品开始转化，而是先通过具体产品、产地故事和田园生活内容建立信任，再把兴趣用户承接到会员计划。",
        items: [
          "从具体产品切入，让用户先感知会员计划中的农产品品质。",
          "用“我们是谁、怎么种”的内容解释产地和团队，建立信任基础。",
          "用田园生活内容传递生活方式，再承接到私域沟通和会员转化。",
        ],
        links: [
          {
            label: "一小心就种出了征服世界上所有人的番茄",
            meta: "❤ 767",
            href: "https://www.xiaohongshu.com/discovery/item/687b5c0c000000001202e0ed?source=webshare&xhsshare=pc_web&xsec_token=ABKijQnPMRCEma6pc4OyaUvK_9ZwmeP7JoiUx23ugg134=&xsec_source=pc_share",
            thumbnail: "/images/case03-detail/xiaohongshu-tomato-cover.jpg",
          },
          {
            label: "大厂回村种地，带 6000 人过田园生活",
            meta: "❤ 2685",
            href: "https://www.xiaohongshu.com/discovery/item/681cd180000000000c03b577?source=webshare&xhsshare=pc_web&xsec_token=ABESQlI13lj8NUed73rtsuMs_h5dYehX8foTHLtG4jiIs=&xsec_source=pc_share",
            thumbnail: "/images/case03-detail/xiaohongshu-farm-return-cover.jpg",
          },
          {
            label: "当农民的第一件事：先学会掏粪",
            meta: "❤ 274",
            href: "https://www.xiaohongshu.com/discovery/item/694d439c000000002202cf1d?source=webshare&xhsshare=pc_web&xsec_token=ABI9d7M4yoopNGCE-mYLLQCWgNePJxepy3DUmSbGevWIk=&xsec_source=pc_share",
            thumbnail: "/images/case03-detail/xiaohongshu-farm-life-cover.jpg",
          },
        ],
      },
    ],
    metrics: [
      { value: "399 → 999", label: "会员客单升级" },
      { value: "6 → 16 次", label: "基础消费周期" },
      { value: "6000+", label: "老用户私域触达" },
    ],
  },
  {
    slug: "private-domain-conversion",
    index: "02",
    title: "私域运营和商业转化",
    eyebrow: "Private domain conversion",
    summary: "把社群、发货提醒、商品上新和活动节点串成私域运营流程，让私域不只是沟通渠道，而是持续成交和复购的场景。",
    sections: [
      {
        title: "选品与商品运营（供给侧）",
        body: "从供给侧稳定产品更新和商品表达，让私域用户持续看到新的产品、清晰的卖点和统一的品牌感。",
        items: [
          "持续选品、拍摄与上架，保证产品更新节奏。",
          "统一视觉与文案表达，提升整体品牌一致性。",
        ],
        imageLayout: "widePair",
        images: [
          {
            src: "/images/case03-detail/private-domain-product-copy.png",
            alt: "私域商品文案截图",
          },
          {
            src: "/images/case03-detail/private-domain-product-list.png",
            alt: "私域商品上架列表截图",
          },
        ],
      },
      {
        title: "社群内容运营（需求侧）",
        body: "围绕用户在社群里的真实阅读场景组织内容，让社群既有生活气息，也能自然承接产品种草和发货转化。",
        items: [
          "内容分为两类：田园生活分享 / 产品种草与发货信息。",
          "以自然表达为主，平衡“生活感”与“销售转化”。",
        ],
        imageLayout: "widePair",
        images: [
          {
            src: "/images/case03-detail/private-domain-community-vegetable.png",
            alt: "社群田园生活内容截图",
          },
          {
            src: "/images/case03-detail/private-domain-community-farm.png",
            alt: "社群农场生活分享截图",
          },
        ],
      },
      {
        title: "社群活动设计（转化放大器）",
        body: "用低门槛福利、节日节点和高感知价值的小礼物，把日常社群互动放大为集中参与和短期销量提升。",
        items: [
          "设计低门槛福利活动（如 1 毛钱辣椒、9.9 豌豆尖、节日柚子叶）。",
          "在关键节点集中释放，带动单日销量提升。",
          "通过“高感知价值 + 低价格”刺激用户参与与转化。",
        ],
        activityCases: [
          {
            title: "情绪型社群互动活动 + 低成本礼物触达：寄柚子叶",
            groups: [
              { label: "目标", items: ["提升群内活跃度，并带动产品销售。"] },
              { label: "活动方式", items: ["以“柚子叶”为话题，在社群发起互动讨论与分享，营造节日氛围，同时引导群成员了解产品。"] },
              { label: "成本投入", items: ["柚子叶采购与寄送费用：9.9 元。"] },
              { label: "活动成果", items: ["群内参与人数：200 人。", "活动带动订单：50 单。", "销售额：1 万元。"] },
            ],
          },
          {
            title: "低价农产品做引流 + 高客单带动：寄豌豆尖",
            groups: [
              { label: "目标", items: ["通过低价时令蔬菜引流，带动腊肉与香肠销量。"] },
              {
                label: "活动方式",
                items: [
                  "推出“买腊肉送豌豆尖”福利。",
                  "不定时豌豆尖 9.9 限量购买。",
                  "与腊肉、香肠放在同一商品链接，通过群内传播带动下单。",
                ],
              },
              { label: "成本投入", items: ["豌豆尖补贴成本：约 5 元 / 单。"] },
              { label: "活动成果", items: ["带动腊肉、香肠订单：约 400 单。", "总销售额：约 4 万元。"] },
            ],
          },
        ],
      },
    ],
    metrics: [],
  },
  {
    slug: "brand-trust-growth",
    index: "03",
    title: "品牌信任增长",
    eyebrow: "Brand trust",
    summary: "通过农场在地活动和城市联名体验，让用户真实看见产品、团队和生活空间，把品牌信任从线上内容延伸到线下关系。",
    image: "/images/case03-approach/brand-trust.jpg",
    imageAlt: "用户进入农场参加在地体验活动",
    sections: [
      {
        title: "在地体验",
        body: "策划摘番茄、新农人一天、冬日活动等体验，让用户进入农场，感知产品从哪里来、团队如何工作。",
        items: ["用真实体验替代单向种草。", "让会员形成对产地和品质的直接记忆。", "把农场空间变成品牌信任资产。"],
        images: [
          {
            src: "/images/case03-detail/farm-local-hotpot.jpg",
            alt: "用户在农场参加冬日围炉活动",
          },
          {
            src: "/images/case03-detail/farm-local-field.jpg",
            alt: "用户在农场田地里参加采摘体验",
          },
        ],
      },
      {
        title: "城市联名",
        body: "与深圳跳海酒馆、成都麓湖、小红书纯玩派对等线下场景合作，让新用户在线下接触团队与产品，也增强老用户参与感。",
        items: ["线下活动触达新用户。", "产品试吃和团队见面强化真实感。", "活动内容继续回流到私域传播。"],
        images: [
          {
            src: "/images/case03-detail/city-collab-product-table.png",
            alt: "城市联名活动中的农产品体验台",
          },
          {
            src: "/images/case03-detail/city-collab-workshop.png",
            alt: "城市联名活动中的产品讲解现场",
          },
        ],
      },
    ],
    metrics: [
      { value: "5000 → 10000", label: "会员规模增长" },
      { value: "200万+", label: "年销售额" },
    ],
  },
];

export function getCase03Detail(slug: string) {
  return case03Details.find((detail) => detail.slug === slug);
}
