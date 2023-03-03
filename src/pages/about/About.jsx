import React from "react";
import './about.scss';
import SectionContentLayout from "../../layouts/sectioncontentlayout/SectionContentLayout";
import TitlesH2 from "../../components/titles/Titles";
import FadeTitle from "../../components/titles/FadeTitle";

const facts = [
  {icon:"fa fa-gamepad",title:"Jugar video-juegos"},
  {icon:"fas fa-swimmer", title:"Me gusta nadar"},
  {icon:"mdi mdi-tea", title:"Adoro beber té"},
  {icon:"fas fa-hamburger", title:"Hamburbur!"},
  {icon:"mdi mdi-zodiac-sagittarius", title:"Soy Sagitario"},
  {icon:"fas fa-hat-wizard", title:"Me encanta la fantasía"},
];

export default function About(state) {
  return (
    <section className={state.state === 1 ? "section about show":"section about hide"}>
      <SectionContentLayout>
        <div className="row">
          <div className="col col-12">
            <TitlesH2 subtitle="¿Quién es este sujeto?" title="Hey, soy Pedro" />
            <p>
              Me apasionan los efectos de la interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas. <span className="link-underline"> "Hagamos algo especial"</span>.
            </p>
          </div>
        </div>
        <div className="divider-ot"></div>
        <div className="row mb-5">
          <div className="col-12 about-block">
            <FadeTitle heading="Años en el negocio" fade="7" wicon="false" class=""/>
            <p>
              Desde que empecé mi carrera como desarrollador front-end independiente hace casi 7 años, he hecho trabajos para agencias, he consultado a empresas de nueva creación y he colaborado con personas de talento para crear productos digitales tanto para empresas como para consumidores. Estoy tranquilamente confiado, naturalmente soy curioso, y trabajo perpetuamente en mejorar mis habilidades. <span className="link-underline">"Un problema de diseño a la vez"</span>.
            </p>
          </div>
        </div>
        <h2 className="section-subheading mb-3">
          <span>Características al azar</span>
        </h2>
        <div className="row">
          {facts ? facts.map((fact, i) => {
            return (
              <div key={i} className="col-6 col-md-4 col-lg-2 mt-1 mb-5 mb-lg-1 fact">
                <FadeTitle heading={fact.title} fade={fact.icon} wicon="true" class="text-center text-lg-left"/>
              </div>
            )
          }):""}
        </div>
      </SectionContentLayout>
    </section>
  );
}