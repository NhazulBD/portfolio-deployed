import React, { useState } from "react";
import './home.scss';

export default function Home(state) {
  return (
    <section className={state.state === 0 ? "section home show":"section home hide"}>
      <div className="center-container">
        <div className="center-block">
          <div className="upper-content">
            <div className="container contents">
              <div className="row introduction">
                <h2 className="home-page-title">
                  Diseñador, Desarrollador Front-end
                </h2>
                <h1 className="home-page-title">
                  Pedro Ramos
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}