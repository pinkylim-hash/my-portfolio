import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AiHardwareCase } from "@/components/cases/AiHardwareCase";
import { DtcFarmCase } from "@/components/cases/DtcFarmCase";
import { FarmProductDesignCase } from "@/components/cases/FarmProductDesignCase";
import { NorthAmericaGrowthCase } from "@/components/cases/NorthAmericaGrowthCase";
import { getProject, projects, type Project } from "@/data/projects";

const caseLayouts: Record<string, React.ComponentType<{ project: Project }>> = {
  "ai-hardware": AiHardwareCase,
  "dtc-farm-membership": DtcFarmCase,
  "farm-product-design": FarmProductDesignCase,
  "north-america-growth": NorthAmericaGrowthCase,
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title}｜Pinky 林育桦`, description: project.challenge, openGraph: { images: [project.cover] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const CaseLayout = caseLayouts[slug];
  if (!project || !CaseLayout) notFound();
  return <CaseLayout project={project} />;
}
