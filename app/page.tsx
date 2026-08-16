import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IdentityOrbit } from "@/components/IdentityOrbit";
import { StoryTimeline } from "@/components/StoryTimeline";
import { WorkPrinciples } from "@/components/WorkPrinciples";
import { WhatIBuild } from "@/components/WhatIBuild";
import { LifeGallery } from "@/components/LifeGallery";
import { CreatorPortfolio } from "@/components/CreatorPortfolio";
import { PodcastLife } from "@/components/PodcastLife";
import { NowSection } from "@/components/NowSection";
import { ContactSection } from "@/components/ContactSection";
import { Loader } from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <Header />
      <main>
        <Hero />
        <IdentityOrbit />
        <section id="my-story">
          <StoryTimeline />
          <WorkPrinciples />
          <WhatIBuild />
          <LifeGallery />
          <CreatorPortfolio />
          <PodcastLife />
          <NowSection />
        </section>
        <ContactSection />
      </main>
    </>
  );
}
