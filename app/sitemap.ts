import type { MetadataRoute } from "next";
import { marketingCapabilities } from "@/data/marketing-capabilities";
import { projects } from "@/data/projects";

const siteUrl = "https://www.pinkylin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/product-marketing", "/brand-communication", "/growth-marketing", "/field-marketing"];

  const routes = [
    ...staticRoutes,
    ...projects.map((project) => `/work/${project.slug}`),
    ...(marketingCapabilities
      .find((capability) => capability.slug === "product-marketing")
      ?.materials?.map((material) => `/product-marketing/${material.slug}`) ?? []),
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
  }));
}
