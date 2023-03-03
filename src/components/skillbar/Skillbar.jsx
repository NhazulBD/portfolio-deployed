import React from "react";
import './skillbar.scss';
import FadeTitle from "../titles/FadeTitle";

export default function Skillbar(props) {
  return (
    <div className="col-sm-12 skills-block correction">
      <FadeTitle heading={props.heading} fade={props.fade} wicon={props.wicon} class=""/>
      <div className="show-skillbar">
        <div className="skillbar">
          <div className={"skillbar-bar w-"+props.percent}></div>
          <span className="skill-bar-percent">{props.percent}%</span>
        </div>
      </div>
    </div>
  );
}