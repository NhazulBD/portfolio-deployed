import React from "react";

export default function Logo(state) {

  return (
    <div className={state.state ? "logo secondary":"logo"}></div>
  );
}