import React from "react";
import './skills.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";
import FadeTitle from "../../components/titles/FadeTitle";
import Skillbar from "../../components/skillbar/Skillbar";

const skillsDesc = [
  {heading:"Responsivo",text:"Mis diseños funcionarán en cualquier dispositivo, grande o pequeño."},
  {heading:"Intuitivo",text:"Fuerte preferencia por el UX/UI fácil de usar e intuitivo."},
  {heading:"Dinámico",text:"Las páginas web no tienen que ser estáticas, me encanta hacer que las páginas cobren vida."},
];

export default function Skills(state) {
  return (
    <section className={state.state === 2 ? "section skills show":"section skills hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="Lo que hago" title="Habilidades" />
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row">
          {skillsDesc ? skillsDesc.map((skill, i) => {
            return (
              <div key={i} className="col-lg-4 col-sm-12 skills-block">
                <FadeTitle heading={skill.heading} fade={skill.heading} class="" wicon="false"/>
                <p>{skill.text}</p>
              </div>
            )
          }):""}
        </div>
        <div className="divider-ot"></div>
        <div className="row">
          {/* Skills */}
          <div className="col-lg-4 col-sm-12">
            <div className="row">
              <Skillbar heading="css" fade="css" percent="80" wicon="false"/>
              <Skillbar heading="html" fade="html" percent="90" wicon="false"/>
              <Skillbar heading="javascript" fade="javascript" percent="80" wicon="false"/>
              <Skillbar heading="reactjs" fade="reactjs" percent="70" wicon="false"/>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="row">
              <Skillbar heading="flutter" fade="flutter" percent="80" wicon="false"/>
              <Skillbar heading="illustrator" fade="illustrator" percent="60" wicon="false"/>
              <Skillbar heading="diseño ui" fade="diseño ui" percent="70" wicon="false"/>
              <Skillbar heading="branding" fade="branding" percent="50" wicon="false"/>
            </div>
          </div>
          {/* Language */}
          <div className="col-lg-4 col-sm-12">
            <div className="row">
              <Skillbar heading="Español" fade="fas fa-flag" percent="100" wicon="true"/>
              <Skillbar heading="English" fade="fas fa-flag" percent="70" wicon="true"/>
              <Skillbar heading="Pусский" fade="fas fa-flag" percent="40" wicon="true"/>
            </div>
          </div>
        </div>
      </SectionContentLayout>
    </section>
  );
}