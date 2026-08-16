import { homePage } from "@/data/home";
import { Reveal } from "./Reveal";
import { WhatShapesGallery } from "./life/WhatShapesGallery";

export function LifeGallery() {
  const content = homePage.life;

  return (
    <section className="life section-pad">
      <Reveal className="section-heading">
        <p className="eyebrow">{content.eyebrow}</p>
        <h2>{content.title[0]}<br />{content.title[1]}</h2>
      </Reveal>
      <div className="life-collage">
        <Reveal>
          <WhatShapesGallery />
        </Reveal>
      </div>
    </section>
  );
}
