# Pinky Portfolio

Pinky（林育桦）的个人作品集网站，使用 Next.js、TypeScript、Tailwind CSS 与 Framer Motion 开发。

## 本地运行

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

## 生产构建

```bash
pnpm build
pnpm start
```

## 内容维护

- 全局个人资料、链接与页脚：`data/site.ts`
- 首页全部内容：`data/home.ts`
- AI 硬件案例：`data/projects/ai-hardware.ts`
- DTC 农场案例：`data/projects/dtc-farm.ts`
- 北美增长案例：`data/projects/north-america-growth.ts`
- AI 硬件布局与样式：`components/cases/AiHardwareCase.tsx`、`components/cases/AiHardwareCase.module.css`
- DTC 农场布局与样式：`components/cases/DtcFarmCase.tsx`、`components/cases/DtcFarmCase.module.css`
- 北美增长布局与样式：`components/cases/NorthAmericaGrowthCase.tsx`、`components/cases/NorthAmericaGrowthCase.module.css`
- 网站图片：`public/images`
- 简历文件：`public/files/pinky-resume.pdf`
- 全局视觉与响应式样式：`app/globals.css`

## 路由

- `/`：主页
- `/work/ai-hardware`：AI 硬件商业化案例
- `/work/dtc-farm`：DTC 农场品牌案例
- `/work/north-america-growth`：北美用户增长案例
