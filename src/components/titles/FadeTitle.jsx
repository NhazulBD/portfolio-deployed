import React from "react";

export default function FadeTitle(props) {
  return (
    <>
      {props.wicon === "true" ? (
        <>
          <h4 className={"heading "+props.class}>{props.heading}</h4>
          <div className="fade-text">
            <i className={props.fade}></i>
          </div>
        </>
      ):(
        <>
          <h4 className={"heading "+props.class}>{props.heading}</h4>
          <div className="fade-text">{props.fade}</div>
        </>
      )}
    </>
  );
}