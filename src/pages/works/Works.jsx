import React, { useState } from "react";
import './works.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";
import Gallery from "../../components/gallery/Gallery";

export default function Works(state) {

  const [toggleSection, setToggleSection] = useState(0);

  return (
    <section className={state.state === 3 ? "section works show":"section works hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="Lo que he hecho" title="Trabajos" />
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row">
          <div className="col-12 text-center">
            <span 
              className={toggleSection == 0 ? "btn active fullwidth-liquid mx-1":"btn fullwidth-liquid mx-1"}
              onClick={() => setToggleSection(0)}
            >
              <span>Branding</span>
            </span>
            <span 
              className={toggleSection == 1 ? "btn active fullwidth-liquid mx-1":"btn fullwidth-liquid mx-1"}
              onClick={() => setToggleSection(1)}
            >
              <span>Web</span>
            </span>
            <span 
              className={toggleSection == 2 ? "btn active fullwidth-liquid mx-1":"btn fullwidth-liquid mx-1"}
              onClick={() => setToggleSection(2)}
            >
              <span>Apps</span>
            </span>
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row">
          {
          toggleSection == 0 ? (
            <Gallery gallery={0} />
          ): toggleSection == 1 ? (
            <Gallery gallery={1} />
          ):
          (
            <Gallery gallery={2} />
          )
          }
        </div>
      </SectionContentLayout>
    </section>
  );
}