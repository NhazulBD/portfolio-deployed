import React from "react";

export default function Borders(state) {

  return (
    <>
        <div className={state.state ? "the-borders border-top secondary":"the-borders border-top"}></div>
        <div className={state.state ? "the-borders border-right secondary":"the-borders border-right"}></div>
        <div className={state.state ? "the-borders border-bottom secondary":"the-borders border-bottom"}></div>
        <div className={state.state ? "the-borders border-left secondary":"the-borders border-left"}></div>
        {/* waves */}
        <div className="border-wave-wrapper" style={{height:"665px",width:"1319px", position:"relative"}}>
          <svg className={state.state ? "border-wave secondary":"border-wave"} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none"><defs><linearGradient id="wave-gradient" gradientTransform="rotate(90)"><stop offset="5%" stopColor="#ffffff" /><stop offset="35%" stopColor="#ffffff" /></linearGradient><path id="a" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" fill="#ffffff" /></defs><g className="wave-paths"><use href="#a" x="0" /><use href="#a" x="50" y="3" /><use href="#a" x="100" y="5" /><use href="#a" x="150" y="7" /><use href="#a" x="200" y="7" /></g></svg>
        </div>
    </>
  );
}