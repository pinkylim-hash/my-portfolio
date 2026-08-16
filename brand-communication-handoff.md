# Case 1 / 02 品牌内容传播交接

## 模块定位

这是 Case 1「AI 智能硬件品牌 GTM 营销」里的第二个能力模块。

模块名称：

- Number: 02
- English Title: Brand Communication
- Chinese Title: 品牌内容传播
- Slug: brand-communication
- 当前链接: /brand-communication

一句话总结：

通过视觉、视频与品牌素材建设，提升品牌认知与产品影响力。

## 当前页面入口状态

首页 Case 1 的「做了什么」区域里，02 目前是一个能力行：

- 左侧：编号 02、标题「品牌内容传播」、简介
- 右侧：当前使用产品手册图片作为临时预览图
- 点击后进入 `/brand-communication`

当前预览图：

```ts
previewImages: ["/images/case1-approach/product-manual.png"]
```

这个图只是临时占位，后续新项目里建议替换为：

- 品牌视频封面
- 产品宣传视频封面
- 品牌视觉素材截图
- 展会视觉物料截图

## 当前内容结构

### Background / 项目背景

品牌处于从 0 到 1 阶段，需要让行业客户在多个触点中形成稳定认知。

### Challenge / 遇到的问题

产品强技术属性明显，但品牌资产、视觉内容和传播素材不足。

### Strategy / 我的策略

围绕产品可信度、行业专业度和应用场景建立一致的品牌表达。

### Execution / 具体执行

规划官网、产品视频、视觉素材、展会资料和对外传播内容。

### Result / 项目结果

提升品牌在目标行业中的可见度，为销售沟通和市场活动提供素材基础。

## 当前代码位置

数据位置：

```text
data/marketing-capabilities.ts
```

当前 02 数据块：

```ts
{
  number: "02",
  slug: "brand-communication",
  englishTitle: "Brand Communication",
  chineseTitle: "品牌内容传播",
  summary: "通过视觉、视频与品牌素材建设，提升品牌认知与产品影响力。",
  href: "/brand-communication",
  previewImages: ["/images/case1-approach/product-manual.png"],
  sections: [
    { label: "01 Background", title: "项目背景", body: "品牌处于从 0 到 1 阶段，需要让行业客户在多个触点中形成稳定认知。" },
    { label: "02 Challenge", title: "遇到的问题", body: "产品强技术属性明显，但品牌资产、视觉内容和传播素材不足。" },
    { label: "03 Strategy", title: "我的策略", body: "围绕产品可信度、行业专业度和应用场景建立一致的品牌表达。" },
    { label: "04 Execution", title: "具体执行", body: "规划官网、产品视频、视觉素材、展会资料和对外传播内容。" },
    { label: "05 Result", title: "项目结果", body: "提升品牌在目标行业中的可见度，为销售沟通和市场活动提供素材基础。" },
  ],
}
```

页面位置：

```text
app/brand-communication/page.tsx
```

目前页面使用通用模板：

```text
components/CapabilityDetailPage.tsx
components/CapabilityDetailPage.module.css
```

## 新项目建议结构

建议把 02 单独做成一个品牌传播作品页，而不是继续使用通用模板。

推荐页面结构：

1. Hero

- 大标题：Brand Communication
- 中文标题：品牌内容传播
- 一句话：通过视觉、视频与品牌素材建设，提升品牌认知与产品影响力。

2. Background

- 使用棕色背景框 + 黄色文字标签
- 内容保留当前 Background 和 Challenge

3. Work Modules

可以拆成 3 到 4 个内容模块：

- 品牌视觉资产
- 产品视频 / 动态内容
- 展会与销售物料
- 对外传播内容

4. Media Grid

右侧或下方放素材卡片：

- 视频封面
- 图片封面
- 物料截图
- 点击进入单独详情页或打开外部链接

## 待补素材

新项目里需要补充：

- 视频标题
- 视频链接
- 视频封面图
- 是否可内嵌播放
- 品牌视觉相关图片
- 对外传播素材图片

如果视频是网盘、视频号、小红书、微信生态链接，建议做成：

```text
封面卡片 + 点击打开外部链接
```

如果视频是可嵌入链接，建议做成：

```text
封面卡片 + 详情页内嵌播放
```

## 视觉方向

保持当前网站方向：

- 极简
- 米色背景
- 黑色正文
- 黄色强调
- Serif 大标题
- 中文正文克制
- 不做传统简历页面
- 更像海外 Brand / GTM Portfolio

