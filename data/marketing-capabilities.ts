export type MarketingCapability = {
  number: string;
  slug: string;
  englishTitle: string;
  chineseTitle: string;
  summary: string;
  href: string;
  previewImages: string[];
  materials?: Array<{
    slug: string;
    title: string;
    image: string;
    href: string;
    asset: string;
    assetType: "image" | "pdf";
    documents?: Array<{
      title: string;
      image: string;
      asset: string;
    }>;
  }>;
  sections: Array<{
    label: string;
    title: string;
    body: string;
  }>;
};

export const marketingCapabilities: MarketingCapability[] = [
  {
    number: "01",
    slug: "product-marketing",
    englishTitle: "Product Marketing",
    chineseTitle: "产品价值定位",
    summary: "从产品理解、用户需求到卖点提炼，帮助技术产品找到市场表达方式。",
    href: "/product-marketing",
    previewImages: [],
    materials: [
      {
        slug: "single-page-design",
        title: "中文宣传单页",
        image: "/images/case1-approach/single-page-design/optimized/general.webp",
        href: "/product-marketing/single-page-design",
        asset: "/files/case1-approach/single-page-design/general.pdf",
        assetType: "pdf",
        documents: [
          {
            title: "AI 分选机",
            image: "/images/case1-approach/single-page-design/optimized/general.webp",
            asset: "/files/case1-approach/single-page-design/general.pdf",
          },
          {
            title: "柑橘分选",
            image: "/images/case1-approach/single-page-design/optimized/citrus.webp",
            asset: "/files/case1-approach/single-page-design/citrus.pdf",
          },
          {
            title: "柠檬分选",
            image: "/images/case1-approach/single-page-design/optimized/lemon.webp",
            asset: "/files/case1-approach/single-page-design/lemon.pdf",
          },
          {
            title: "百香果分选",
            image: "/images/case1-approach/single-page-design/optimized/passion-fruit.webp",
            asset: "/files/case1-approach/single-page-design/passion-fruit.pdf",
          },
          {
            title: "苹果分选",
            image: "/images/case1-approach/single-page-design/optimized/apple.webp",
            asset: "/files/case1-approach/single-page-design/apple.pdf",
          },
        ],
      },
      {
        slug: "flyer",
        title: "英文宣传单页",
        image: "/images/case1-approach/optimized/flyer.webp",
        href: "/product-marketing/flyer",
        asset: "/files/case1-approach/flyer.pdf",
        assetType: "pdf",
      },
      {
        slug: "website-upgrade",
        title: "官网升级",
        image: "/images/website-upgrade-detail/optimized/version3-home.webp",
        href: "/product-marketing/website-upgrade",
        asset: "/images/case1-approach/website-upgrade.png",
        assetType: "image",
      },
      {
        slug: "product-manual",
        title: "产品手册",
        image: "/images/case1-approach/optimized/product-manual.webp",
        href: "/product-marketing/product-manual",
        asset: "/files/case1-approach/product-manual.pdf",
        assetType: "pdf",
      },
      {
        slug: "brand-manual",
        title: "品牌手册",
        image: "/images/case1-approach/optimized/brand-manual.webp",
        href: "/product-marketing/brand-manual",
        asset: "/files/case1-approach/brand-manual.pdf",
        assetType: "pdf",
      },
    ],
    sections: [
      { label: "01 Background", title: "项目背景", body: "AI 水果分选机属于高客单价 ToB 技术产品，用户需要先理解检测原理、应用场景和商业价值。" },
      { label: "02 Challenge", title: "遇到的问题", body: "技术语言复杂，销售沟通成本高，客户难以快速判断产品和自身业务之间的关系。" },
      { label: "03 Strategy", title: "我的策略", body: "从用户痛点、应用场景和产品差异化出发，把技术能力转译成可感知的产品价值。" },
      { label: "04 Execution", title: "具体执行", body: "梳理产品核心卖点、解决方案结构、官网内容、产品手册和销售沟通话术。" },
      { label: "05 Result", title: "项目结果", body: "帮助团队建立更清晰的产品表达基础，为官网、内容矩阵和销售线索转化提供统一语言。" },
    ],
  },
  {
    number: "02",
    slug: "brand-communication",
    englishTitle: "Brand Communication",
    chineseTitle: "品牌内容传播",
    summary: "通过视觉、视频与品牌素材建设，提升品牌认知与产品影响力。",
    href: "/brand-communication",
    previewImages: ["/images/brand-communication/optimized/product-video-preview-0809.webp", "/images/ai-hardware-expo-01.jpg", "/images/ai-hardware-speksense.png"],
    materials: [
      {
        slug: "product-video",
        title: "产品宣传视频",
        image: "/images/brand-communication/optimized/product-video-preview-0809.webp",
        href: "/brand-communication#产品宣传视频",
        asset: "/images/brand-communication/product-video-preview-0809.png",
        assetType: "image",
      },
      {
        slug: "corporate-video",
        title: "企业宣传视频",
        image: "/images/brand-communication/optimized/corporate-video-cover.webp",
        href: "/brand-communication#企业宣传视频",
        asset: "/images/brand-communication/corporate-video-cover.jpg",
        assetType: "image",
      },
      {
        slug: "short-video-ops",
        title: "短视频运营",
        image: "/images/brand-communication/optimized/short-video-ops-02.webp",
        href: "/brand-communication#短视频运营",
        asset: "/images/brand-communication/short-video-ops-02.jpg",
        assetType: "image",
      },
    ],
    sections: [
      { label: "01 Background", title: "项目背景", body: "品牌处于从 0 到 1 阶段，需要让行业客户在多个触点中形成稳定认知。" },
      { label: "02 Challenge", title: "遇到的问题", body: "产品强技术属性明显，但品牌资产、视觉内容和传播素材不足。" },
      { label: "03 Strategy", title: "我的策略", body: "围绕产品可信度、行业专业度和应用场景建立一致的品牌表达。" },
      { label: "04 Execution", title: "具体执行", body: "规划官网、产品视频、视觉素材、展会资料和对外传播内容。" },
      { label: "05 Result", title: "项目结果", body: "提升品牌在目标行业中的可见度，为销售沟通和市场活动提供素材基础。" },
    ],
  },
  {
    number: "03",
    slug: "growth-marketing",
    englishTitle: "Growth Marketing",
    chineseTitle: "内容增长策略",
    summary: "结合 SEO、内容营销与社媒运营，实现用户触达与品牌增长。",
    href: "/growth-marketing",
    previewImages: [
      "/images/growth-marketing/articles/optimized/apple-global.webp",
      "/images/growth-marketing/customer-interviews/optimized/customer-case-01-cover.webp",
      "/images/growth-marketing/external-media/optimized/cctv-interview.webp",
    ],
    materials: [
      {
        slug: "wechat-articles",
        title: "公众号文章",
        image: "/images/growth-marketing/articles/optimized/apple-global.webp",
        href: "/growth-marketing#公众号文章",
        asset: "/images/growth-marketing/articles/apple-global.jpg",
        assetType: "image",
      },
      {
        slug: "customer-cases",
        title: "客户案例",
        image: "/images/growth-marketing/customer-interviews/optimized/customer-case-01-cover.webp",
        href: "/growth-marketing#客户案例",
        asset: "/images/growth-marketing/customer-interviews/customer-case-01-cover.png",
        assetType: "image",
      },
      {
        slug: "external-media",
        title: "外部媒体合作",
        image: "/images/growth-marketing/external-media/optimized/cctv-interview.webp",
        href: "/growth-marketing#外部媒体合作",
        asset: "/images/growth-marketing/external-media/cctv-interview.png",
        assetType: "image",
      },
    ],
    sections: [
      { label: "01 Background", title: "项目背景", body: "ToB 产品需要持续被目标客户搜索、理解和信任，不能只依赖单点销售触达。" },
      { label: "02 Challenge", title: "遇到的问题", body: "行业关键词分散，客户决策链条长，内容需要同时承担教育市场和获取线索的任务。" },
      { label: "03 Strategy", title: "我的策略", body: "以搜索需求和客户问题为入口，建立内容矩阵和线索承接路径。" },
      { label: "04 Execution", title: "具体执行", body: "搭建 SEO 内容、案例内容、社媒内容和 Raw Lead-MQL-SQL 线索流转机制。" },
      { label: "05 Result", title: "项目结果", body: "累计产出 50+ 有效销售线索，并帮助品牌在目标行业建立持续声量。" },
    ],
  },
  {
    number: "04",
    slug: "field-marketing",
    englishTitle: "Field Marketing",
    chineseTitle: "线下市场拓展",
    summary: "通过展会、活动与行业合作，连接用户需求与商业机会。",
    href: "/field-marketing",
    previewImages: [
      "/images/field-marketing/optimized/ifresh-1.webp",
      "/images/field-marketing/optimized/china-fruit-1.webp",
      "/images/field-marketing/optimized/asia-fruit-1.webp",
    ],
    materials: [
      {
        slug: "field-exhibitions",
        title: "线下展会",
        image: "/images/field-marketing/optimized/ifresh-1.webp",
        href: "/field-marketing",
        asset: "/images/field-marketing/ifresh-1.jpg",
        assetType: "image",
        documents: [
          {
            title: "iFresh 亚洲果蔬产业博览会",
            image: "/images/field-marketing/optimized/ifresh-1.webp",
            asset: "/images/field-marketing/ifresh-1.jpg",
          },
          {
            title: "中国国际水果展",
            image: "/images/field-marketing/optimized/china-fruit-1.webp",
            asset: "/images/field-marketing/china-fruit-1.png",
          },
          {
            title: "Asia Fruit Logistica",
            image: "/images/field-marketing/optimized/asia-fruit-1.webp",
            asset: "/images/field-marketing/asia-fruit-1.jpg",
          },
        ],
      },
    ],
    sections: [
      { label: "01 Background", title: "项目背景", body: "AI 硬件产品需要通过真实设备展示和线下沟通建立客户信任。" },
      { label: "02 Challenge", title: "遇到的问题", body: "客户决策依赖现场体验、技术解释和行业关系，线上内容无法完全替代。" },
      { label: "03 Strategy", title: "我的策略", body: "把展会作为品牌认知、产品教育、客户收集和关系建立的复合触点。" },
      { label: "04 Execution", title: "具体执行", body: "参与展会内容规划、现场物料、客户沟通路径和线索跟进机制。" },
      { label: "05 Result", title: "项目结果", body: "帮助团队连接更多行业客户，建立品牌认知和后续销售机会。" },
    ],
  },
];

export function getMarketingCapability(slug: string) {
  return marketingCapabilities.find((item) => item.slug === slug);
}

export function getProductMarketingMaterial(slug: string) {
  return getMarketingCapability("product-marketing")?.materials?.find((item) => item.slug === slug);
}
