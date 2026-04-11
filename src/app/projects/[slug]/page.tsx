import { notFound } from "next/navigation";
import { projects, personalInfo } from "@/data/portfolio";
import type { Metadata } from "next";
import CaseStudyClient from "./CaseStudyClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study · ${personalInfo.name}`,
    description: project.problem,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <CaseStudyClient project={project} />;
}
