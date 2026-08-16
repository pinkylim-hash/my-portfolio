// Compatibility exports. New page-specific edits should use the source files:
// site.ts, home.ts, and projects/*.ts.
export { site, navigation, footerContent } from "./site";
export { homePage, story } from "./home";
export { projects, getProject } from "./projects";
export type { Project } from "./projects";
