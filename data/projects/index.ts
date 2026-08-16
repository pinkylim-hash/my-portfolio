import { aiHardwareProject } from "./ai-hardware";
import { dtcFarmProject } from "./dtc-farm";
import { farmProductDesignProject } from "./farm-product-design";
import { northAmericaGrowthProject } from "./north-america-growth";

export type { Project } from "./types";

export const projects = [
  aiHardwareProject,
  dtcFarmProject,
  northAmericaGrowthProject,
  farmProductDesignProject,
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
