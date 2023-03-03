import React from "react";

export default function TitlesH2(props) {
  return (
    <>
      <h2 className="section-subheading">
        <span>{props.subtitle}</span>
      </h2>
      <h2 className="section-heading">{props.title}</h2>
    </>
  );
}